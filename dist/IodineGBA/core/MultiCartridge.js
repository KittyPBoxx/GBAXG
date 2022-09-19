"use strict";
/*
*   MultiCartrige allows contains multiple GameBoyAdvanceCartridge 
*   Allowing hotswapping between carts
*/
function GameBoyAdvanceMultiCartridge(IOCore) {
    this.IOCore = IOCore;
    this.cartriges = new Map();

    this.romCode = ""; 
}

GameBoyAdvanceMultiCartridge.prototype.getFlash_is128 = function() {
    return this.cartriges.get(this.romCode).flash_is128;
} 

GameBoyAdvanceMultiCartridge.prototype.getFlash_isAtmel = function() {
    return this.cartriges.get(this.romCode).flash_isAtmel;
}

GameBoyAdvanceMultiCartridge.prototype.getName = function() {
    return this.cartriges.get(this.romCode).code;
}


/*
* Wrapped Functions
*/
GameBoyAdvanceMultiCartridge.prototype.initialize = function (startingRom) {
    for (let i = 0; i < this.IOCore.ROMS.length; i++) {
        this.cartriges.set(this.IOCore.ROM_CODES[i], new GameBoyAdvanceCartridge(this.IOCore));
        this.cartriges.get(this.IOCore.ROM_CODES[i]).initialize(this.IOCore.ROMS[i], this.IOCore.ROM_CODES[i]);
    } 
    this.romCode = startingRom;
}
GameBoyAdvanceMultiCartridge.prototype.getROMArray = function (old_array) {
    return this.cartriges.get(this.romCode).getROMArray(old_array);
}
GameBoyAdvanceMultiCartridge.prototype.decodeName = function () {
    return this.cartriges.get(this.romCode).decodeName();
}
GameBoyAdvanceMultiCartridge.prototype.decodeFlashType = function () {
    return this.cartriges.get(this.romCode).decodeFlashType();
}
GameBoyAdvanceMultiCartridge.prototype.readROMOnly8 = function (address) {
    return this.cartriges.get(this.romCode).readROMOnly8(address);
}
if (__LITTLE_ENDIAN__) {
    GameBoyAdvanceMultiCartridge.prototype.readROMOnly16 = function (address) {
        return this.cartriges.get(this.romCode).readROMOnly16(address);
    }
    GameBoyAdvanceMultiCartridge.prototype.readROMOnly32 = function (address) {
        return this.cartriges.get(this.romCode).readROMOnly32(address);
    }
}
else {
    GameBoyAdvanceMultiCartridge.prototype.readROMOnly16 = function (address) {
        return this.cartriges.get(this.romCode).readROMOnly16(address);
    }
    GameBoyAdvanceMultiCartridge.prototype.readROMOnly32 = function (address) {
        return this.cartriges.get(this.romCode).readROMOnly32(address);
    }
}
GameBoyAdvanceMultiCartridge.prototype.readROM8 = function (address) {
    return this.cartriges.get(this.romCode).readROM8(address);
}
GameBoyAdvanceMultiCartridge.prototype.readROM16 = function (address) {
    return this.cartriges.get(this.romCode).readROM16(address);
}
GameBoyAdvanceMultiCartridge.prototype.readROM32 = function (address) {
    return this.cartriges.get(this.romCode).readROM32(address);
}
GameBoyAdvanceMultiCartridge.prototype.readROM8Space2 = function (address) {
    return this.cartriges.get(this.romCode).readROM8Space2(address);
}
GameBoyAdvanceMultiCartridge.prototype.readROM16Space2 = function (address) {
    return this.cartriges.get(this.romCode).readROM16Space2(address);
}
GameBoyAdvanceMultiCartridge.prototype.readROM32Space2 = function (address) {
    return this.cartriges.get(this.romCode).readROM32Space2(address);
}
GameBoyAdvanceMultiCartridge.prototype.writeROM8 = function (address, data) {
    return this.cartriges.get(this.romCode).writeROM8(address, data);
}
GameBoyAdvanceMultiCartridge.prototype.writeROM16 = function (address, data) {
    return this.cartriges.get(this.romCode).writeROM16(address, data);
}
GameBoyAdvanceMultiCartridge.prototype.writeROM16DMA = function (address, data) {
    return this.cartriges.get(this.romCode).writeROM16DMA(address, data);
}
GameBoyAdvanceMultiCartridge.prototype.writeROM32 = function (address, data) {
    return this.cartriges.get(this.romCode).writeROM32(address, data);
}
GameBoyAdvanceMultiCartridge.prototype.nextIRQEventTime = function () {
    // This isn't implemented 
    return 0x7FFFFFFF;
}
