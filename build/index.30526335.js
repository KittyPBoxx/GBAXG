"use strict";function GameBoyAdvanceCartridge(t){this.IOCore=t}GameBoyAdvanceCartridge.prototype.initialize=function(t,e){this.flash_is128=!1,this.flash_isAtmel=!1,this.code=e,this.ROM=this.getROMArray(t),this.ROM16=getUint16View(this.ROM),this.ROM32=getInt32View(this.ROM),this.decodeName(),this.decodeFlashType()},GameBoyAdvanceCartridge.prototype.getFlash_is128=function(){return this.flash_is128},GameBoyAdvanceCartridge.prototype.getFlash_isAtmel=function(){return this.flash_isAtmel},GameBoyAdvanceCartridge.prototype.getROMArray=function(t){this.ROMLength=Math.min(t.length>>2<<2,33554432),this.EEPROMStart=(0|this.ROMLength)>16777216?Math.max(0|this.ROMLength,33554176):16777216;for(var e=getUint8Array(0|this.ROMLength),r=0;(0|r)<(0|this.ROMLength);r=1+(0|r)|0)e[0|r]=0|t[0|r];return e},GameBoyAdvanceCartridge.prototype.decodeName=function(){if(this.name="GUID_",(0|this.ROMLength)>=192)for(var t=172;(0|t)<179;t=1+(0|t)|0)(0|this.ROM[0|t])>0?this.name+=String.fromCharCode(0|this.ROM[0|t]):this.name+="_"},GameBoyAdvanceCartridge.prototype.decodeFlashType=function(){this.flash_is128=!1,this.flash_isAtmel=!1;for(var t=0,e=255&"F".charCodeAt(0),r=255&"L".charCodeAt(0),i=255&"A".charCodeAt(0),a=255&"S".charCodeAt(0),s=255&"H".charCodeAt(0),o=255&"_".charCodeAt(0),h=255&"5".charCodeAt(0),n=255&"1".charCodeAt(0),O=255&"2".charCodeAt(0),d=255&"M".charCodeAt(0),M=255&"V".charCodeAt(0),R=(0|this.ROM.length)-12|0,c=0;(0|c)<(0|R);c=4+(0|c)|0)if((0|this.ROM[0|c])==(0|e)&&(0|this.ROM[1|c])==(0|r)&&(0|this.ROM[2|c])==(0|i)&&(0|this.ROM[3|c])==(0|a)){var y=4+(0|c)|0;if((0|this.ROM[0|y])==(0|s))if((0|this.ROM[1|y])==(0|o))(0|this.ROM[2|y])==(0|M)&&(t|=1);else if((0|this.ROM[1|y])==(0|h))(0|this.ROM[2|y])==(0|n)&&(0|this.ROM[3|y])==(0|O)&&(y=4+(0|y)|0,(0|this.ROM[0|y])==(0|o)&&(0|this.ROM[1|y])==(0|M)&&(t|=2));else if((0|this.ROM[1|y])==(0|n)&&(0|this.ROM[2|y])==(0|d)&&(0|this.ROM[3|y])==(0|o)&&(y=4+(0|y)|0,(0|this.ROM[0|y])==(0|M))){t|=4;break}}this.flash_is128=(0|t)>=4,this.flash_isAtmel=(0|t)<=1},GameBoyAdvanceCartridge.prototype.readROMOnly8=function(t){var e=0;return(0|(t|=0))<(0|this.ROMLength)&&(e=0|this.ROM[33554431&t]),0|e},GameBoyAdvanceCartridge.prototype.patchROM8=function(t,e){(0|(t|=0))<(0|this.ROMLength)&&(this.ROM[33554431&t]=e)},__LITTLE_ENDIAN__?(GameBoyAdvanceCartridge.prototype.readROMOnly16=function(t){var e=0;return(0|(t|=0))<(0|this.ROMLength)&&(e=0|this.ROM16[t>>1&16777215]),0|e},GameBoyAdvanceCartridge.prototype.readROMOnly32=function(t){var e=0;return(0|(t|=0))<(0|this.ROMLength)&&(e=0|this.ROM32[t>>2&8388607]),0|e}):(GameBoyAdvanceCartridge.prototype.readROMOnly16=function(t){var e=0;return(0|(t|=0))<(0|this.ROMLength)&&(e=this.ROM[t]|this.ROM[1|t]<<8),0|e},GameBoyAdvanceCartridge.prototype.readROMOnly32=function(t){var e=0;return(0|(t|=0))<(0|this.ROMLength)&&(e=this.ROM[t]|this.ROM[1|t]<<8|this.ROM[2|t]<<16|this.ROM[3|t]<<24),0|e}),GameBoyAdvanceCartridge.prototype.readROM8=function(t){return 0|((0|(t|=0))>201?0|this.readROMOnly8(0|t):0|this.IOCore.saves.readGPIO8(0|t))},GameBoyAdvanceCartridge.prototype.readROM16=function(t){return 0|((0|(t|=0))>201?0|this.readROMOnly16(0|t):0|this.IOCore.saves.readGPIO16(0|t))},GameBoyAdvanceCartridge.prototype.readROM32=function(t){return 0|((0|(t|=0))>201?0|this.readROMOnly32(0|t):0|this.IOCore.saves.readGPIO32(0|t))},GameBoyAdvanceCartridge.prototype.readROM8Space2=function(t){return 0|((0|(t|=0))>=196&&(0|t)<202?0|this.IOCore.saves.readGPIO8(0|t):(0|t)>=(0|this.EEPROMStart)?0|this.IOCore.saves.readEEPROM8(0|t):0|this.readROMOnly8(0|t))},GameBoyAdvanceCartridge.prototype.readROM16Space2=function(t){return 0|((0|(t|=0))>=196&&(0|t)<202?0|this.IOCore.saves.readGPIO16(0|t):(0|t)>=(0|this.EEPROMStart)?0|this.IOCore.saves.readEEPROM16(0|t):0|this.readROMOnly16(0|t))},GameBoyAdvanceCartridge.prototype.readROM32Space2=function(t){return 0|((0|(t|=0))>=196&&(0|t)<202?0|this.IOCore.saves.readGPIO32(0|t):(0|t)>=(0|this.EEPROMStart)?0|this.IOCore.saves.readEEPROM32(0|t):0|this.readROMOnly32(0|t))},GameBoyAdvanceCartridge.prototype.writeROM8=function(t,e){e|=0,(0|(t|=0))>=196&&(0|t)<202&&this.IOCore.saves.writeGPIO8(0|t,0|e)},GameBoyAdvanceCartridge.prototype.writeROM16=function(t,e){e|=0,(0|(t|=0))>=196&&(0|t)<202&&this.IOCore.saves.writeGPIO16(0|t,0|e)},GameBoyAdvanceCartridge.prototype.writeROM16DMA=function(t,e){e|=0,(0|(t|=0))>=196&&(0|t)<202?this.IOCore.saves.writeGPIO16(0|t,0|e):(0|t)>=(0|this.EEPROMStart)&&this.IOCore.saves.writeEEPROM16(0|t,0|e)},GameBoyAdvanceCartridge.prototype.writeROM32=function(t,e){e|=0,(0|(t|=0))>=196&&(0|t)<202&&this.IOCore.saves.writeGPIO32(0|t,0|e)},GameBoyAdvanceCartridge.prototype.nextIRQEventTime=function(){return 2147483647};
//# sourceMappingURL=index.30526335.js.map
