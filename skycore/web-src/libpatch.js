 
/*

Modified version of https://hack64.net/jscripts/libpatch.js?6

Copyright (C) 2018 hack64.net

*/

function LibPatcher() {
    /*************/
    
    this.applyPatch = applyPatch;
    
    const ERR_TARGET_CHECKSUM = 'Target checksum mismatch';
    const ERR_UNKNOWN_FORMAT = 'Unknown patch format';
    const ERR_UNIMPLEMENTED = 'Unimplemented feature';
    
    function adler32(arr, offs, size)
    {
        var a = 1, b = 0;
    
        for(var i = 0; i < size; i++)
        {
            a = (a + arr[offs + i]) % 65521;
            b = (b + a) % 65521;
        }
    
        return ((b << 16) | a) >>> 0;
    }
    
    function strtest(u8arr, str)
    {
        for(var i = 0; i < str.length; i++)
        {
            if(u8arr[i] != str.charCodeAt(i))
            {
                return false;
            }
        }
        return true;
    }
    
    function bytecopy(dst, dstOffs, src, srcOffs, size)
    {
        var subsrc = src.subarray(srcOffs, srcOffs + size);
        dst.set(subsrc, dstOffs);
    }
    
    function applyPatch(sourceData, patchData, ignoreChecksums)
    {
        ignoreChecksums = ignoreChecksums || false;
        var header = new Uint8Array(patchData);
        
        var formats = [{ sig: '\xD6\xC3\xC4', name: 'vcdiff', applyPatch: applyPatchVCD }];
    
        for(var i in formats)
        {
            var fmt = formats[i];
    
            if(strtest(header, fmt.sig))
            {
                var targetData;
                console.log('Applying ' + fmt.name + ' patch...');
                targetData = fmt.applyPatch(sourceData, patchData, ignoreChecksums);
                return targetData;
            }
        }
    
        throw new Error(ERR_UNKNOWN_FORMAT);
    }
    
    function PatchStream(ab, littleEndian)
    {
        this.ab = ab;
        this.u8 = new Uint8Array(ab);
        this.dv = new DataView(ab);
        this.offset = 0;
        this.littleEndian = littleEndian || false;
    }
    
    PatchStream.prototype = {
        seek: function(offset)
        {
            this.offset = offset;
        },
        skip: function(numBytes)
        {
            this.offset += numBytes;
        },
        isEOF: function()
        {
            return (this.offset >= this.ab.byteLength);
        },
        readBytes: function(dst, dstOffs, numBytes)
        {
            // read bytes into a u8 array
            bytecopy(dst, dstOffs, this.u8, this.offset, numBytes);
            this.skip(numBytes);
        },
        _readInt: function(dvType, numBytes)
        {
            var val = this.dv[dvType](this.offset, this.littleEndian);
            this.offset += numBytes;
            return val;
        },
        readU8: function()
        {
            return this._readInt('getUint8', 1);
        },
        readU16: function()
        {
            return this._readInt('getUint16', 2);
        },
        readU24: function()
        {
            if(!this.littleEndian)
            {
                return (this.readU16() << 8) | this.readU8();
            }
            return this.readU16() | (this.readU8() << 16);
        },
        readU32: function()
        {
            return this._readInt('getUint32', 4);
        },
        readU64: function()
        {
            var a = this.readU32();
            var b = this.readU32();
    
            if(this.littleEndian)
            {
                return ((b * 0x100000000) + a);
            }
    
            return ((a * 0x100000000) + b);
        }
    };
    
    // VCDiff (xdelta)
    // https://tools.ietf.org/html/rfc3284
    
    // hdrIndicator
    const VCD_DECOMPRESS = (1 << 0);
    const VCD_CODETABLE  = (1 << 1);
    const VCD_APPHEADER  = (1 << 2); // nonstandard?
    
    // winIndicator
    const VCD_SOURCE  = (1 << 0);
    const VCD_TARGET  = (1 << 1);
    const VCD_ADLER32 = (1 << 2);
    
    // COPY address modes
    const VCD_SELF = 0;
    const VCD_HERE = 1;
    
    // deltaIndicator - secondary compression
    const VCD_DATACOMP = (1 << 0);
    const VCD_INSTCOMP = (1 << 2);
    const VCD_ADDRCOMP = (1 << 3);
    
    const VCD_NOOP = 0, VCD_ADD = 1, VCD_RUN = 2, VCD_COPY = 3;
    
    const VCDDefaultCodeTable = (function()
    {
        var table = [];
    
        var empty = {inst: VCD_NOOP, size: 0, mode: 0};
    
        // 0
        table.push([{inst: VCD_RUN, size: 0, mode: 0}, empty]);
    
        // 1,18
        for(var size = 0; size <= 17; size++)
        {
            table.push([{inst: VCD_ADD, size: size, mode: 0}, empty]);
        }
    
        // 19,162
        for(var mode = 0; mode <= 8; mode++)
        {
            table.push([{inst: VCD_COPY, size: 0, mode: mode}, empty]);
            
            for(var size = 4; size <= 18; size++)
            {
                table.push([{inst: VCD_COPY, size: size, mode: mode}, empty]);
            }
        }
    
        // 163,234
        for(var mode = 0; mode <= 5; mode++)
        {
            for(var addSize = 1; addSize <= 4; addSize++)
            {
                for(var copySize = 4; copySize <= 6; copySize++)
                {
                    table.push([{inst:  VCD_ADD, size: addSize,  mode: 0},
                                {inst: VCD_COPY, size: copySize, mode: mode}]);
                }
            }
        }
    
        // 235,246
        for(var mode = 6; mode <= 8; mode++)
        {
            for(var addSize = 1; addSize <= 4; addSize++)
            {
                table.push([{inst:  VCD_ADD, size: addSize, mode: 0},
                            {inst: VCD_COPY, size:       4, mode: mode}]);
            }
        }
    
        // 247,255
        for(var mode = 0; mode <= 8; mode++)
        {
            table.push([{inst: VCD_COPY, size: 4, mode: mode},
                        {inst:  VCD_ADD, size: 1, mode: 0}]); 
        }
    
        return table;
    })();
    
    function VCDStream(arrayBuffer, offset)
    {
        PatchStream.call(this, arrayBuffer);
        this.offset = offset;
    }
    
    VCDStream.prototype = Object.create(PatchStream.prototype);
    
    VCDStream.prototype.readnum = function()
    {
        var num = 0, bits = 0;
    
        do {
            bits = this.readU8();
            num = (num << 7) + (bits & 0x7F); 
        } while(bits & 0x80);
    
        return num;
    }
    
    function VCDCache(config)
    {
        this.near = new Array(config.nearSize);
        this.nearSize = config.nearSize;
        this.nextSlot = 0;
    
        this.same = new Array(config.sameSize * 256);
        this.sameSize = config.sameSize;
        
        this.reset();
    }
    
    VCDCache.prototype.reset = function()
    {
        this.nextSlot = 0;
        this.near.fill(0);
        this.same.fill(0);
    }
    
    VCDCache.prototype.update = function(addr)
    {
        if(this.nearSize > 0)
        {
            this.near[this.nextSlot] = addr;
            this.nextSlot = (this.nextSlot + 1) % this.nearSize;
        }
    
        if(this.sameSize > 0)
        {
            this.same[addr % (this.sameSize * 256)] = addr;
        }
    }
    
    VCDCache.prototype.decodeAddress = function(copyAddrStream, mode, here)
    {
        var addr = 0;
        var m = 0;
    
        if(mode == VCD_SELF)
        {
            addr = copyAddrStream.readnum();
        }
        else if(mode == VCD_HERE)
        {
            addr = here - copyAddrStream.readnum();
        }
        else if((m = (mode - 2)) >= 0 && m < this.nearSize) // near cache
        {
            addr = this.near[m] + copyAddrStream.readnum();
        }
        else // same cache
        {
            m = mode - (2 + this.nearSize);
            addr = this.same[m*256 + copyAddrStream.readU8()];
        }
        
        this.update(addr);
        return addr;
    }
    
    function VCDHeader(patchStream)
    {
        patchStream.skip(4); // skip over the magic number
    
        this.indicator = patchStream.readU8();
        this.secDecompressorId = 0;
        this.codeTableDataLength = 0;
        this.appDataLength = 0;
    
        if(this.indicator & VCD_DECOMPRESS)
        {
            this.secDecompressorId = patchStream.readU8();
            console.log("secondary decompressor:" + this.secDecompressorId);
        }
    
        if(this.indicator & VCD_CODETABLE)
        {
            this.codeTableDataLength = patchStream.readnum();
            console.log("code table is used");
        }
    
        if(this.indicator & VCD_APPHEADER)
        {
            // ignore app header data
            this.appDataLength = patchStream.readnum();
            patchStream.skip(this.appDataLength);
        }
    }
    
    function VCDWindowHeader(patchStream)
    {
        this.indicator = patchStream.readU8();
        this.sourceSegmentLength = 0;
        this.sourceSegmentPosition = 0;
        this.adler32 = 0;
        this.haveChecksum = false;
    
        if(this.indicator & (VCD_SOURCE | VCD_TARGET))
        {
            this.sourceSegmentLength = patchStream.readnum();
            this.sourceSegmentPosition = patchStream.readnum();
        }
    
        this.deltaLength = patchStream.readnum();
        this.targetWindowLength = patchStream.readnum();
        this.deltaIndicator = patchStream.readU8(); // secondary compression
        
        this.dataLength = patchStream.readnum();
        this.instrsLength = patchStream.readnum();
        this.copysLength = patchStream.readnum();
    
        if(this.indicator & VCD_ADLER32) 
        {
            this.adler32 = patchStream.readU32();
            this.haveChecksum = true;
        }
    }
    
    function vcdPrecalculateTargetSize(patchStream)
    {
        var targetSize = 0;
        var header = new VCDHeader(patchStream);
    
        while(!patchStream.isEOF())
        {
            var winHeader = new VCDWindowHeader(patchStream);
            targetSize += winHeader.targetWindowLength;
            patchStream.skip(winHeader.dataLength + winHeader.copysLength + winHeader.instrsLength);
        }
    
        patchStream.offset = 0;
        return targetSize;
    }
    
    function applyPatchVCD(sourceData, patchData, ignoreChecksums)
    {
        var sourceU8 = new Uint8Array(sourceData);
        var patchStream = new VCDStream(patchData, 0);
    
        var targetSize = vcdPrecalculateTargetSize(patchStream);
        var targetData = new ArrayBuffer(targetSize);
        var targetU8 = new Uint8Array(targetData);
    
        var header = new VCDHeader(patchStream);
    
        var cache = null;
        var codeTable = null;
    
        if(header.secDecompressorId != 0)
        {
            console.log("sec decompressor " + header.secDecompressorId);
            throw new Error(ERR_UNIMPLEMENTED); // secondary decompressor
        }
    
        if(header.codeTableDataLength == 0)
        {
            cache = new VCDCache({ nearSize: 4, sameSize: 3 });
            codeTable = VCDDefaultCodeTable;
        }
        else
        {
            console.log("code table");
            throw new Error(ERR_UNIMPLEMENTED); // custom code table
        }
    
        var targetWindowPosition = 0;
    
        while(!patchStream.isEOF())
        {
            var winHeader = new VCDWindowHeader(patchStream);
    
            var dataStream, instructionStream, copyAddrStream;
    
            if(winHeader.deltaIndicator & VCD_DATACOMP)
            {
                // TODO: secondary decompressor implementation here
            }
            else
            {
                dataStream = new VCDStream(patchData, patchStream.offset);
            }
    
            if(winHeader.deltaIndicator & VCD_INSTCOMP)
            {
    
            }
            else
            {
                instructionStream = new VCDStream(patchData, dataStream.offset + winHeader.dataLength);
            }
    
            if(winHeader.deltaIndicator & VCD_ADDRCOMP)
            {
    
            }
            else
            {
                copyAddrStream = new VCDStream(patchData, instructionStream.offset + winHeader.instrsLength);
            }
    
            var instructionStreamEndOffs = copyAddrStream.offset;
    
            var targetWindowOffs = 0; // offset within the current target window
    
            var copySourceU8 = null;
    
            if(winHeader.indicator & VCD_SOURCE)
            {
                copySourceU8 = sourceU8;
            }
            else if(winHeader.indicator & VCD_TARGET)
            {
                copySourceU8 = targetU8;
            }
    
            cache.reset();
    
            while(instructionStream.offset < instructionStreamEndOffs)
            {
                var codeTableIndex = instructionStream.readU8();
                var code = codeTable[codeTableIndex];
    
                for(var i = 0; i <= 1; i++)
                {
                    var op = code[i].inst;
    
                    if(op == VCD_NOOP)
                    {
                        continue;
                    }
    
                    var length = code[i].size || instructionStream.readnum();
    
                    switch(op)
                    {
                    case VCD_ADD:
                        dataStream.readBytes(targetU8, targetWindowPosition + targetWindowOffs, length);
                        targetWindowOffs += length;
                        break;
                    case VCD_RUN:
                        var runByte = dataStream.readU8();
                        var offs = targetWindowPosition + targetWindowOffs;
                        targetU8.fill(runByte, offs, offs + length);
                        targetWindowOffs += length;
                        break;
                    case VCD_COPY:
                        var addr = cache.decodeAddress(copyAddrStream, code[i].mode, winHeader.sourceSegmentLength + targetWindowOffs);
                        var absAddr = 0;
    
                        // source segment and target segment are treated as if they're concatenated
                        if(addr >= winHeader.sourceSegmentLength)
                        {
                            absAddr = targetWindowPosition + (addr - winHeader.sourceSegmentLength);
                            copySourceU8 = targetU8;
                        }
                        else
                        {
                            absAddr = winHeader.sourceSegmentPosition + addr;
                            if(winHeader.indicator & VCD_SOURCE)
                            {
                                copySourceU8 = sourceU8;
                            }
                        }
    
                        while(length--)
                        {
                            targetU8[targetWindowPosition + targetWindowOffs++] = copySourceU8[absAddr++];
                        }
                        break;
                    }
                }
    
            }
    
            if(winHeader.haveChecksum && !ignoreChecksums)
            {
                var testAdler32 = adler32(targetU8, targetWindowPosition, winHeader.targetWindowLength);
    
                if(winHeader.adler32 != testAdler32)
                {
                    throw new Error(ERR_TARGET_CHECKSUM);
                }
            }
    
            patchStream.skip(winHeader.dataLength + winHeader.copysLength + winHeader.instrsLength);
            targetWindowPosition += winHeader.targetWindowLength;
        }
    
        return targetData;
    }
    }
    