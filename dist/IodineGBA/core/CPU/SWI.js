"use strict";
/*
    Using implimentations from MGBA and GBA.js see:
    https://github.com/endrift/gbajs/blob/master/js/irq.js
    https://github.com/mgba-emu/mgba/blob/38299f397f97bf7a8381395f6fc8920e690844c7/src/gba/bios.c
*/

const SWI_OP_CODE = {
    GBA_SWI_SOFT_RESET                 : 0x00,
	GBA_SWI_REGISTER_RAM_RESET         : 0x01,
	GBA_SWI_HALT                       : 0x02,
	GBA_SWI_STOP                       : 0x03,
	GBA_SWI_INTR_WAIT                  : 0x04,
	GBA_SWI_VBLANK_INTR_WAIT           : 0x05,
	GBA_SWI_DIV                        : 0x06,
	GBA_SWI_DIV_ARM                    : 0x07,
	GBA_SWI_SQRT                       : 0x08,
	GBA_SWI_ARCTAN                     : 0x09,
	GBA_SWI_ARCTAN2                    : 0x0A,
	GBA_SWI_CPU_SET                    : 0x0B,
	GBA_SWI_CPU_FAST_SET               : 0x0C,
	GBA_SWI_GET_BIOS_CHECKSUM          : 0x0D,
	GBA_SWI_BG_AFFINE_SET              : 0x0E,
	GBA_SWI_OBJ_AFFINE_SET             : 0x0F,
	GBA_SWI_BIT_UNPACK                 : 0x10,
	GBA_SWI_LZ77_UNCOMP_WRAM           : 0x11,
	GBA_SWI_LZ77_UNCOMP_VRAM           : 0x12,
	GBA_SWI_HUFFMAN_UNCOMP             : 0x13,
	GBA_SWI_RL_UNCOMP_WRAM             : 0x14,
	GBA_SWI_RL_UNCOMP_VRAM             : 0x15,
	GBA_SWI_DIFF_8BIT_UNFILTER_WRAM    : 0x16,
	GBA_SWI_DIFF_8BIT_UNFILTER_VRAM    : 0x17,
	GBA_SWI_DIFF_16BIT_UNFILTER        : 0x18,
	GBA_SWI_SOUND_BIAS                 : 0x19,
	GBA_SWI_SOUND_DRIVER_INIT          : 0x1A,
	GBA_SWI_SOUND_DRIVER_MODE          : 0x1B,
	GBA_SWI_SOUND_DRIVER_MAIN          : 0x1C,
	GBA_SWI_SOUND_DRIVER_VSYNC         : 0x1D,
	GBA_SWI_SOUND_CHANNEL_CLEAR        : 0x1E,
	GBA_SWI_MIDI_KEY_2_FREQ            : 0x1F,
	GBA_SWI_MUSIC_PLAYER_OPEN          : 0x20,
	GBA_SWI_MUSIC_PLAYER_START         : 0x21,
	GBA_SWI_MUSIC_PLAYER_STOP          : 0x22,
	GBA_SWI_MUSIC_PLAYER_CONTINUE      : 0x23,
	GBA_SWI_MUSIC_PLAYER_FADE_OUT      : 0x24,
	GBA_SWI_MULTI_BOOT                 : 0x25,
	GBA_SWI_HARD_RESET                 : 0x26,
	GBA_SWI_CUSTOM_HALT                : 0x27,
	GBA_SWI_SOUND_DRIVER_VSYNC_OFF     : 0x28,
	GBA_SWI_SOUND_DRIVER_VSYNC_ON      : 0x29,
	GBA_SWI_SOUND_DRIVER_GET_JUMP_LIST : 0x2A
};

const CPU_MODES = {
    USER       : 0x10,
	FIQ        : 0x11,
	IRQ        : 0x12,
	SUPERVISOR : 0x13,
	ABORT      : 0x17,
	UNDEFINED  : 0x1B,
	SYSTEM     : 0x1F
} 

function GameBoyAdvanceSWI(IOCore, CPUCore, IRQ) {
    this.IOCore = IOCore;
    this.CPUCore = CPUCore;
    this.IRQ = IRQ;
    this.warnUnimplementedCalls = false;
}

GameBoyAdvanceSWI.prototype.execute = function (opcode) {
    
    switch (opcode) {
        case SWI_OP_CODE.GBA_SWI_SOFT_RESET:
        {    
            //console.info("Calling GBA_SWI_SOFT_RESET...");
            let flag = this.CPUCore.memory.readInternalWRAM8(0x7FFA);
            for (let i = 0x7E00; i < (0x8000 - 0x200); i += 4) { this.CPUCore.memory.writeInternalWRAM32(i, 0); }
            this.resetSP();
            this.CPUCore.THUMB.writeLR(!flag ? 0x08000000 : 0x02000000);
            this.CPUCore.enterARM();
            this.CPUCore.THUMB.writePC(this.CPUCore.THUMB.readLR());
        }   break;
        case SWI_OP_CODE.GBA_SWI_REGISTER_RAM_RESET:
        {
            //console.info("Calling GBA_SWI_REGISTER_RAM_RESET...");
            this.CPUCore.memory.gfxRenderer.writeDISPCNT8_0(0x0080);

            let regions = this.CPUCore.ARM.readRegister(0);
            if (regions & 0x01) {
                this.CPUCore.memory.externalRAM.fill(0, 0, 0x40000);
		    }
            if (regions & 0x02) {
                this.CPUCore.memory.internalRAM.fill(0, 0, 0x8000 - 0x200);
            }
            if (regions & 0x04) {
                this.CPUCore.memory.gfxRenderer.renderer.paletteRAM.fill(0, 0, 0x400);
            }
            if (regions & 0x08) {
                this.CPUCore.memory.gfxRenderer.renderer.VRAM.fill(0, 0, 0x18000); 
            }
            if (regions & 0x10) { 
                this.IOCore.gfxRenderer.renderer.objRenderer.OAMRAM.fill(0, 0x400)
            } 
            if (regions & 0x1C) { this.warnUnimplementedCalls && console.warn("UNSUPPORTED GBA_SWI_REGISTER_RAM_RESET REGISTER: 0x1C"); } // POSSIBLY ALSO VRAM
            if (regions & 0x20) { this.warnUnimplementedCalls && console.warn("UNSUPPORTED GBA_SWI_REGISTER_RAM_RESET REGISTER: 0x20"); } // INPUT DATA?
            if (regions & 0x40) { this.warnUnimplementedCalls && console.warn("UNSUPPORTED GBA_SWI_REGISTER_RAM_RESET REGISTER: 0x40"); } // SOUND STUFF
            if (regions & 0x80) { this.warnUnimplementedCalls && console.warn("UNSUPPORTED GBA_SWI_REGISTER_RAM_RESET REGISTER: 0x80"); } // VISUAL DATA?
            if (regions & 0x9C) { this.warnUnimplementedCalls && console.warn("UNSUPPORTED GBA_SWI_REGISTER_RAM_RESET REGISTER: 0x9C"); } // VIDEO REGISTER
        }   break;            
        case SWI_OP_CODE.GBA_SWI_HALT:
           //console.info("Calling GBA_SWI_HALT...");
            this.IOCore.handleHalt();
            break;                      
        case SWI_OP_CODE.GBA_SWI_STOP:
            //console.info("Calling GBA_SWI_STOP...");
            this.IOCore.handleStop();
            break;                      
        case SWI_OP_CODE.GBA_SWI_INTR_WAIT:
            //console.info("Calling GBA_SWI_INTR_WAIT...");
            assertIRQ();
            break;                 
        case SWI_OP_CODE.GBA_SWI_VBLANK_INTR_WAIT:
            //console.info("Calling GBA_SWI_VBLANK_INTR_WAIT...");
            this.IOCore.handleHalt();
            break;          
        case SWI_OP_CODE.GBA_SWI_DIV: 
        {
            //console.info("Calling GBA_SWI_DIV...");
            let result = (this.CPUCore.ARM.readRegister(0) | 0) / (this.CPUCore.ARM.readRegister(1) | 0);
            let mod = (this.CPUCore.ARM.readRegister(0) | 0) % (this.CPUCore.ARM.readRegister(1) | 0);
            this.CPUCore.ARM.writeRegister(0, result | 0);
            this.CPUCore.ARM.writeRegister(1, mod | 0);
            this.CPUCore.ARM.writeRegister(3, Math.abs(result | 0));
        }   break;                       
        case SWI_OP_CODE.GBA_SWI_DIV_ARM:
        {    
            //console.info("Calling GBA_SWI_DIV_ARM...");
            let result = (this.CPUCore.ARM.readRegister(1) | 0) / (this.CPUCore.ARM.readRegister(0) | 0);
            let mod = (this.CPUCore.ARM.readRegister(1) | 0) % (this.CPUCore.ARM.readRegister(0) | 0);
            this.CPUCore.ARM.writeRegister(0, result | 0);
            this.CPUCore.ARM.writeRegister(1, mod | 0);
            this.CPUCore.ARM.writeRegister(3, Math.abs(result | 0));
        }   break;                   
        case SWI_OP_CODE.GBA_SWI_SQRT:
        {
            //console.info("Calling GBA_SWI_SQRT...");
		    let root = Math.sqrt(this.CPUCore.ARM.readRegister(0));
		    this.CPUCore.ARM.writeRegister(0, root | 0); // Coerce down to int
        }   break;                      
        case SWI_OP_CODE.GBA_SWI_ARCTAN:
        {    
            //console.info("Calling GBA_SWI_ARCTAN...");
		    let x = this.CPUCore.ARM.readRegister(0) / 16384;
		    let y = this.CPUCore.ARM.readRegister(1) / 16384;
		    this.CPUCore.ARM.writeRegister(0, (Math.atan(y, x) / (2 * Math.PI)) * 0x10000);
        }   break;                    
        case SWI_OP_CODE.GBA_SWI_ARCTAN2:
        {
            //console.info("Calling GBA_SWI_ARCTAN2...");
		    let x = this.CPUCore.ARM.readRegister(0) / 16384;
		    let y = this.CPUCore.ARM.readRegister(1) / 16384;
		    this.CPUCore.ARM.writeRegister(0, (Math.atan2(y, x) / (2 * Math.PI)) * 0x10000);
            break;
        }                   
        case SWI_OP_CODE.GBA_SWI_CPU_SET:
        {    
            //console.info("Calling GBA_SWI_CPU_SET...");
            let source = this.CPUCore.ARM.readRegister(0);
            let dest = this.CPUCore.ARM.readRegister(1);
            let mode = this.CPUCore.ARM.readRegister(2);
            let count = mode & 0x000FFFFF;
            let fill = mode & 0x01000000;
            let wordsize = (mode & 0x04000000) ? 4 : 2;
            if (fill) {
                if (wordsize == 4) {
                    source &= 0xFFFFFFFC;
                    dest &= 0xFFFFFFFC;
                    let word = this.CPUCore.memory.memoryRead32(source);
                    for (let i = 0; i < count; ++i) {
                        this.CPUCore.memory.memoryWrite32(dest + (i << 2), word);
                    }
                } else {
                    source &= 0xFFFFFFFE;
                    dest &= 0xFFFFFFFE;
                    let word = this.CPUCore.memory.memoryRead16(source);
                    for (let i = 0; i < count; ++i) {
                        this.CPUCore.memory.memoryWrite16(dest + (i << 1), word);
                    }
                }
            } else {
                if (wordsize == 4) {
                    source &= 0xFFFFFFFC;
                    dest &= 0xFFFFFFFC;
                    for (let i = 0; i < count; ++i) {
                        let word = this.CPUCore.memory.memoryRead32(source + (i << 2));
                        this.CPUCore.memory.memoryWrite32(dest + (i << 2), word);
                    }
                } else {
                    source &= 0xFFFFFFFE;
                    dest &= 0xFFFFFFFE;
                    for (let i = 0; i < count; ++i) {
                        let word = this.CPUCore.memory.memoryRead16(source + (i << 1));
                        this.CPUCore.memory.memoryWrite16(dest + (i << 1), word);
                    }
                }
            }
        }   break;                 
        case SWI_OP_CODE.GBA_SWI_CPU_FAST_SET:
        {
            //console.info("Calling GBA_SWI_CPU_FAST_SET...");
            let source = this.CPUCore.ARM.readRegister(0) & 0xFFFFFFFC;
            let dest = this.CPUCore.ARM.readRegister(1) & 0xFFFFFFFC;
            let mode = this.CPUCore.ARM.readRegister(2);
            let count = mode & 0x000FFFFF;
            count = ((count + 7) >> 3) << 3;
            let fill = mode & 0x01000000;
            if (fill) {
                let word = this.CPUCore.memory.memoryRead32(source);
                for (let i = 0; i < count; ++i) {
                    this.CPUCore.memory.memoryWrite32(dest + (i << 2), word);
                }
            } else {
                for (let i = 0; i < count; ++i) {
                    let word = this.CPUCore.memory.memoryRead32(source + (i << 2));
                    this.CPUCore.memory.memoryWrite32(dest + (i << 2), word);
                }
            }
        }   break;          
        case SWI_OP_CODE.GBA_SWI_GET_BIOS_CHECKSUM:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_GET_BIOS_CHECKSUM");
            break;         
        case SWI_OP_CODE.GBA_SWI_BG_AFFINE_SET:
        {    
            //console.info("Calling GBA_SWI_BG_AFFINE_SET...");
            let i = this.CPUCore.ARM.readRegister(2);
		    let ox, oy;
		    let cx, cy;
		    let sx, sy;
		    let theta;
		    let offset = this.CPUCore.ARM.readRegister(0);
		    let destination = this.CPUCore.ARM.readRegister(1);
		    let a, b, c, d;
		    let rx, ry;
		    while (i--) {
		    	// [ sx   0  0 ]   [ cos(theta)  -sin(theta)  0 ]   [ 1  0  cx - ox ]   [ A B rx ]
		    	// [  0  sy  0 ] * [ sin(theta)   cos(theta)  0 ] * [ 0  1  cy - oy ] = [ C D ry ]
		    	// [  0   0  1 ]   [     0            0       1 ]   [ 0  0     1    ]   [ 0 0  1 ]
		    	ox = this.CPUCore.memory.memoryRead32(offset) / 256;
		    	oy = this.CPUCore.memory.memoryRead32(offset + 4) / 256;
		    	cx = this.CPUCore.memory.memoryRead16(offset + 8);
		    	cy = this.CPUCore.memory.memoryRead16(offset + 10);
		    	sx = this.CPUCore.memory.memoryRead16(offset + 12) / 256;
		    	sy = this.CPUCore.memory.memoryRead16(offset + 14) / 256;
		    	theta = (this.CPUCore.memory.memoryRead16(offset + 16) >> 8) / 128 * Math.PI;
		    	offset += 20;
		    	// Rotation
		    	a = d = Math.cos(theta);
		    	b = c = Math.sin(theta);
		    	// Scale
		    	a *= sx;
		    	b *= -sx;
		    	c *= sy;
		    	d *= sy;
		    	// Translate
		    	rx = ox - (a * cx + b * cy);
		    	ry = oy - (c * cx + d * cy);
		    	this.CPUCore.memory.memoryWrite16(destination, (a * 256) | 0);
		    	this.CPUCore.memory.memoryWrite16(destination + 2, (b * 256) | 0);
		    	this.CPUCore.memory.memoryWrite16(destination + 4, (c * 256) | 0);
		    	this.CPUCore.memory.memoryWrite16(destination + 6, (d * 256) | 0);
		    	this.CPUCore.memory.memoryWrite32(destination + 8, (rx * 256) | 0);
		    	this.CPUCore.memory.memoryWrite32(destination + 12, (ry * 256) | 0);
		    	destination += 16;
		    }      
        }   break;             
        case SWI_OP_CODE.GBA_SWI_OBJ_AFFINE_SET:
        {    
            //console.info("Calling GBA_SWI_OBJ_AFFINE_SET...");
            let i = this.CPUCore.ARM.readRegister(2);
            let sx, sy;
            let theta;
            let offset = this.CPUCore.ARM.readRegister(0);
            let destination = this.CPUCore.ARM.readRegister(1);
            let diff = this.CPUCore.ARM.readRegister(3);
            let a, b, c, d;
            while (i--) {
                // [ sx   0 ]   [ cos(theta)  -sin(theta) ]   [ A B ]
                // [  0  sy ] * [ sin(theta)   cos(theta) ] = [ C D ]
                sx = this.CPUCore.memory.memoryRead16(offset) / 256;
                sy = this.CPUCore.memory.memoryRead16(offset + 2) / 256;
                theta = (this.CPUCore.memory.memoryRead16(offset + 4) >> 8) / 128 * Math.PI;
                offset += 6;
                // Rotation
                a = d = Math.cos(theta);
                b = c = Math.sin(theta);
                // Scale
                a *= sx;
                b *= -sx;
                c *= sy;
                d *= sy;
                this.CPUCore.memory.memoryWrite16(destination, (a * 256) | 0);
                this.CPUCore.memory.memoryWrite16(destination + diff, (b * 256) | 0);
                this.CPUCore.memory.memoryWrite16(destination + diff * 2, (c * 256) | 0);
                this.CPUCore.memory.memoryWrite16(destination + diff * 3, (d * 256) | 0);
                destination += diff * 4;
            }
        }   break;            
        case SWI_OP_CODE.GBA_SWI_BIT_UNPACK:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_BIT_UNPACK");
            break;                
        case SWI_OP_CODE.GBA_SWI_LZ77_UNCOMP_WRAM:
            //console.info("Calling GBA_SWI_LZ77_UNCOMP_WRAM...");
            this.lz77(this.CPUCore.ARM.readRegister(0), this.CPUCore.ARM.readRegister(1), 1);
            break;          
        case SWI_OP_CODE.GBA_SWI_LZ77_UNCOMP_VRAM:
            //console.info("Calling GBA_SWI_LZ77_UNCOMP_VRAM...");
            this.lz77(this.CPUCore.ARM.readRegister(0), this.CPUCore.ARM.readRegister(1), 2);
            break;          
        case SWI_OP_CODE.GBA_SWI_HUFFMAN_UNCOMP:
        {
            //console.info("Calling GBA_SWI_HUFFMAN_UNCOMP...");
            this.huffman(this.CPUCore.ARM.readRegister(0), this.CPUCore.ARM.readRegister(1));
        }   break;            
        case SWI_OP_CODE.GBA_SWI_RL_UNCOMP_WRAM:
        {    
            //console.info("Calling GBA_SWI_RL_UNCOMP_WRAM...");
            this.rl(this.CPUCore.ARM.readRegister(0), this.CPUCore.ARM.readRegister(1), 1);
        }   break;            
        case SWI_OP_CODE.GBA_SWI_RL_UNCOMP_VRAM:
        {    
            //console.info("Calling GBA_SWI_RL_UNCOMP_VRAM...");
            this.rl(this.CPUCore.ARM.readRegister(0), this.CPUCore.ARM.readRegister(1), 2);
        }   break;            
        case SWI_OP_CODE.GBA_SWI_DIFF_8BIT_UNFILTER_WRAM:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_DIFF_8BIT_UNFILTER_WRAM");
            break;   
        case SWI_OP_CODE.GBA_SWI_DIFF_8BIT_UNFILTER_VRAM:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_DIFF_8BIT_UNFILTER_VRAM");
            break;   
        case SWI_OP_CODE.GBA_SWI_DIFF_16BIT_UNFILTER:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_DIFF_16BIT_UNFILTER");
            break;       
        case SWI_OP_CODE.GBA_SWI_SOUND_BIAS:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_BIAS");
            break;                
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_INIT:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_INIT");
            break;         
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_MODE:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_MODE");
            break;         
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_MAIN:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_MAIN");
            break;         
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_VSYNC:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_VSYNC");
            break;        
        case SWI_OP_CODE.GBA_SWI_SOUND_CHANNEL_CLEAR:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_CHANNEL_CLEAR");
            break;       
        case SWI_OP_CODE.GBA_SWI_MIDI_KEY_2_FREQ:
        {    
            //console.info("Calling GBA_SWI_MIDI_KEY_2_FREQ...");
            let key = this.CPUCore.memory.memoryRead32(this.CPUCore.ARM.readRegister(0) + 4);
            this.CPUCore.ARM.writeRegister(0, key / Math.pow(2, (180 - this.CPUCore.ARM.readRegister(1) - this.CPUCore.ARM.readRegister(2) / 256) / 12) >>> 0);
        }   break;           
        case SWI_OP_CODE.GBA_SWI_MUSIC_PLAYER_OPEN:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_MUSIC_PLAYER_OPEN");
            break;         
        case SWI_OP_CODE.GBA_SWI_MUSIC_PLAYER_START:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_MUSIC_PLAYER_START");
            break;        
        case SWI_OP_CODE.GBA_SWI_MUSIC_PLAYER_STOP:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_MUSIC_PLAYER_STOP");
            break;         
        case SWI_OP_CODE.GBA_SWI_MUSIC_PLAYER_CONTINUE:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_MUSIC_PLAYER_CONTINUE");
            break;     
        case SWI_OP_CODE.GBA_SWI_MUSIC_PLAYER_FADE_OUT:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_MUSIC_PLAYER_FADE_OUT");
            break;     
        case SWI_OP_CODE.GBA_SWI_MULTI_BOOT:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_MULTI_BOOT");
            break;                
        case SWI_OP_CODE.GBA_SWI_HARD_RESET:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_HARD_RESET");
            break;                
        case SWI_OP_CODE.GBA_SWI_CUSTOM_HALT:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_CUSTOM_HALT");
            break;               
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_VSYNC_OFF:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_VSYNC_OFF");
            break;    
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_VSYNC_ON:
            this.warnUnimplementedCalls && console.warn("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_VSYNC_ON");
            break;     
        case SWI_OP_CODE.GBA_SWI_SOUND_DRIVER_GET_JUMP_LIST:
        {
            //console.info("UNSUPPORTED CALL TO GBA_SWI_SOUND_DRIVER_GET_JUMP_LIST");
            this.IOCore.handleHalt(); 
        }   break;
        default:
            this.warnUnimplementedCalls && console.log("UNKNOWN OP CODE: " + opcode);    
    }
}

GameBoyAdvanceSWI.prototype.resetSP = function() {

    this.CPUCore.switchMode(CPU_MODES.SUPERVISOR);
    this.CPUCore.THUMB.writeSP(0x3007FE0);
    this.CPUCore.switchMode(CPU_MODES.IRQ);
    this.CPUCore.THUMB.writeSP(0x3007FA0);
    this.CPUCore.switchMode(CPU_MODES.SYSTEM);
    this.CPUCore.THUMB.writeSP(0x3007F00);
    
};

GameBoyAdvanceSWI.prototype.lz77 = function(source, dest, unitsize) {

	let remaining = (this.CPUCore.memory.memoryRead32(source) & 0xFFFFFF00) >> 8;

	let blockheader;
	let sPointer = source + 4;
	let dPointer = dest;
	let blocksRemaining = 0;
	let block;
	let disp;
	let bytes;
	let buffer = 0;
	let loaded;
	while (remaining > 0) {
		if (blocksRemaining) {
			if (blockheader & 0x80) {
				// Compressed
				block = this.CPUCore.memory.memoryRead8(sPointer) | (this.CPUCore.memory.memoryRead8(sPointer + 1) << 8);
				sPointer += 2;
				disp = dPointer - (((block & 0x000F) << 8) | ((block & 0xFF00) >> 8)) - 1;
				bytes = ((block & 0x00F0) >> 4) + 3;
				while (bytes-- && remaining) {
					loaded = this.CPUCore.memory.memoryRead8(disp++);
					if (unitsize == 2) {
						buffer >>= 8;
						buffer |= loaded << 8;
						if (dPointer & 1) {
							this.CPUCore.memory.memoryWrite16(dPointer - 1, buffer);
						}
					} else {
						this.CPUCore.memory.memoryWrite8(dPointer, loaded);
					}
					--remaining;
					++dPointer;
				}
			} else {
				// Uncompressed
				loaded = this.CPUCore.memory.memoryRead8(sPointer++);
				if (unitsize == 2) {
					buffer >>= 8;
					buffer |= loaded << 8;
					if (dPointer & 1) {
						this.CPUCore.memory.memoryWrite16(dPointer - 1, buffer);
					}
				} else {
					this.CPUCore.memory.memoryWrite8(dPointer, loaded);
				}
				--remaining;
				++dPointer;
			}
			blockheader <<= 1;
			--blocksRemaining;
		} else {
			blockheader = this.CPUCore.memory.memoryRead8(sPointer++);
			blocksRemaining = 8;
		}
	}
};

GameBoyAdvanceSWI.prototype.huffman = function(source, dest) {
	source = source & 0xFFFFFFFC;
	let header = this.CPUCore.memory.memoryRead32(source);
	let remaining = header >> 8;
	let bits = header & 0xF;
	if (32 % bits) {
		throw 'Unimplemented unaligned Huffman';
	}
	let padding = (4 - remaining) & 0x3;
	remaining &= 0xFFFFFFFC;

	let tree = [];
	let treesize = (this.CPUCore.memory.memoryRead8(source + 4) << 1) + 1;
	let block;
	let sPointer = source + 5 + treesize;
	let dPointer = dest & 0xFFFFFFFC;
	let i;
	for (i = 0; i < treesize; ++i) {
		tree.push(this.CPUCore.memory.memoryRead8(source + 5 + i));
	}
	let node;
	let offset = 0;
	let bitsRemaining;
	let readBits;
	let bitsSeen = 0;
	node = tree[0];
	while (remaining > 0) {
		let bitstream = this.CPUCore.memory.memoryRead32(sPointer);
		sPointer += 4;
		for (bitsRemaining = 32; bitsRemaining > 0; --bitsRemaining, bitstream <<= 1) {
			if (typeof (node) === 'number') {
				// Lazily construct tree
				let next = (offset - 1 | 1) + ((node & 0x3F) << 1) + 2;
				node = {
					l: next,
					r: next + 1,
					lTerm: node & 0x80,
					rTerm: node & 0x40
				};
				tree[offset] = node;
			}

			if (bitstream & 0x80000000) {
				// Go right
				if (node.rTerm) {
					readBits = tree[node.r];
				} else {
					offset = node.r;
					node = tree[node.r];
					continue;
				}
			} else {
				// Go left
				if (node.lTerm) {
					readBits = tree[node.l];
				} else {
					offset = node.l;
					node = tree[offset];
					continue;
				}
			}

			block |= (readBits & ((1 << bits) - 1)) << bitsSeen;
			bitsSeen += bits;
			offset = 0;
			node = tree[0];
			if (bitsSeen == 32) {
				bitsSeen = 0;
				this.CPUCore.memory.memoryWrite32(dPointer, block);
				dPointer += 4;
				remaining -= 4;
				block = 0;
			}
		}

	}
	if (padding) {
		this.CPUCore.memory.memoryWrite32(dPointer, block);
	}
};

GameBoyAdvanceSWI.prototype.rl = function(source, dest, unitsize) {
	source = source & 0xFFFFFFFC;
	let remaining = (this.CPUCore.memory.memoryRead32(source) & 0xFFFFFF00) >> 8;
	let padding = (4 - remaining) & 0x3;
	let blockheader;
	let block;
	let sPointer = source + 4;
	let dPointer = dest;
	let buffer = 0;
	while (remaining > 0) {
		blockheader = this.CPUCore.memory.memoryRead8(sPointer++);
		if (blockheader & 0x80) {
			// Compressed
			blockheader &= 0x7F;
			blockheader += 3;
			block = this.CPUCore.memory.memoryRead8(sPointer++);
			while (blockheader-- && remaining) {
				--remaining;
				if (unitsize == 2) {
					buffer >>= 8;
					buffer |= block << 8;
					if (dPointer & 1) {
						this.CPUCore.memory.memoryWrite16(dPointer - 1, buffer);
					}
				} else {
					this.CPUCore.memory.memoryWrite8(dPointer, block);
				}
				++dPointer;
			}
		} else {
			// Uncompressed
			blockheader++;
			while (blockheader-- && remaining) {
				--remaining;
				block = this.CPUCore.memory.memoryRead8(sPointer++);
				if (unitsize == 2) {
					buffer >>= 8;
					buffer |= block << 8;
					if (dPointer & 1) {
						this.CPUCore.memory.memoryWrite16(dPointer - 1, buffer);
					}
				} else {
					this.CPUCore.memory.memoryWrite8(dPointer, block);
				}
				++dPointer;
			}
		}
	}
	while (padding--) {
		this.CPUCore.memory.memoryWrite8(dPointer++, 0);
	}
};