"use strict";
/*
 Copyright (C) 2012-2016 Grant Galitz

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function GameBoyAdvanceGPIOChip() {
    this.type = 1;
    this.rtc = new GameBoyAdvanceRTC(this);

    this.direction = 0; // ROM 0xC4 
    this.readWrite = 0; // ROM 0xC6
    this.data = 0;      // ROM 0xC8
}
GameBoyAdvanceGPIOChip.prototype.getType = function () {
    return this.type | 0;
}
GameBoyAdvanceGPIOChip.prototype.setType = function (type) {
    type = type | 0;
    this.type = type | 0;
}
GameBoyAdvanceGPIOChip.prototype.read = function (address) {
    address = address | 0;
    let data = 0;
    if (this.readWrite | 0) {
        switch (address & 0xF) {
            case 0x4:
                data = this.data;
                break;
            case 0x6:
                data = this.direction | 0;
                break;
            case 0x8:
                data = this.readWrite | 0;
        }
    }
    return data | 0;
}
GameBoyAdvanceGPIOChip.prototype.write = function (address, data) {
    address = address | 0;
    data = data | 0;
    switch (address & 0xF) {
        case 0x4:
            this.rtc.setPins(data & 0xF);
            if (this.readWrite) {
                let old = this.read(0xC4);
                old &= ~this.direction;
                this.data = old | (data & this.direction);
            }
            break;
        case 0x6:
            this.direction = data & 0xF;
            this.rtc.setDirection(this.direction);
            break;
        case 0x8:
            this.readWrite = data & 0x1;
    }
}

GameBoyAdvanceGPIOChip.prototype.write8 = function (address, data) {
    // TODO: this is doing a write16
    console.warn("UNSUPPORTED GPIO WRITE");
    this.write(address, data);
}

GameBoyAdvanceGPIOChip.prototype.write16 = function (address, data) {
    this.write(address, data);
}

GameBoyAdvanceGPIOChip.prototype.write32 = function (address, data) {
    // TODO: this is doing a write16
    console.warn("UNSUPPORTED GPIO WRITE");
    this.write(address, data);
}

GameBoyAdvanceGPIOChip.prototype.read8 = function (address) {
    console.warn("UNTESTED CODE");
    let data = 0;
    switch (address & 0xF) {
        case 0x4:
            data = this.data & 0xff;
            break;
        case 0x5:
            data = ((this.data>> 8) & 0xff);
            break;
        case 0x6:
            data = (this.direction | 0) & 0xff;
            break;
        case 0x7:
            data = (((this.direction | 0) >> 8) & 0xff);
            break;    
        case 0x8:
            data = (this.readWrite | 0) & 0xff;
            break;
        case 0x9:
            data = (((this.readWrite  | 0) >> 8) & 0xff)
            break;
    }
    return data;
}

GameBoyAdvanceGPIOChip.prototype.read16 = function (address) {
    return this.read(address);
}

GameBoyAdvanceGPIOChip.prototype.read32 = function (address) {
    let buffer = new ArrayBuffer(4);
    let view = new DataView(buffer);
    view.setUint16(0, this.read16(address), true);
    view.setUint16(2, this.read16(address + 2), true);
    return view.getUint32(0, true);
}

GameBoyAdvanceGPIOChip.prototype.outputPins = function(data) {
    if (this.readWrite) {
        let old = this.read(0xC4);
        old &= ~this.direction;
        this.data = data | (data & ~this.direction & 0xF);
	}
};
