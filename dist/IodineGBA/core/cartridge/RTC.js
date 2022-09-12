"use strict";
/* 
Copyright (c) 2012, Vikki Pfau All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

For original GBA.js RTC implimentation see:
https://github.com/endrift/gbajs/blob/master/js/gpio.js
*/

function GameBoyAdvanceRTC(gpio) {
	this.gpio = gpio;

	// PINOUT: SCK | SIO | CS | -
	this.pins = 0;
	this.direction = 0;

	this.totalBytes = [
		0, // Force reset
		0, // Empty
		7, // Date/Time
		0, // Force IRQ
		1, // Control register
		0, // Empty
		3, // Time
		0 // Empty
	];
	this.bytesRemaining = 0;

	// Transfer sequence:
	// == Initiate
	// > HI | - | LO | -
	// > HI | - | HI | -
	// == Transfer bit (x8)
	// > LO | x | HI | -
	// > HI | - | HI | -
	// < ?? | x | ?? | -
	// == Terminate
	// >  - | - | LO | -
	this.transferStep = 0;

	this.reading = 0;
	this.bitsRead = 0;
	this.bits = 0;
	this.command = -1;

	this.control = 0x40;
	this.time = [
		0, // Year
		0, // Month
		0, // Day
		0, // Day of week
		0, // Hour
		0, // Minute
		0 // Second
	];
};

GameBoyAdvanceRTC.prototype.setPins = function(nybble) {
	switch (this.transferStep) {
	case 0:
		if ((nybble & 5) == 1) {
			this.transferStep = 1;
		}
		break;
	case 1:
		if (nybble & 4) {
			this.transferStep = 2;
		}
		break;
	case 2:
		if (!(nybble & 1)) {
			this.bits &= ~(1 << this.bitsRead);
			this.bits |= ((nybble & 2) >> 1) << this.bitsRead;
		} else {
			if (nybble & 4) {
				// SIO direction should always != this.read
				if ((this.direction & 2) && !this.read) {
					++this.bitsRead;
					if (this.bitsRead == 8) {
						this.processByte();
					}
				} else {
					this.gpio.outputPins(5 | (this.sioOutputPin() << 1));
					++this.bitsRead;
					if (this.bitsRead == 8) {
						--this.bytesRemaining;
						if (this.bytesRemaining <= 0) {
							this.command = -1;
						}
						this.bitsRead = 0;
					}
				}
			} else {
				this.bitsRead = 0;
				this.bytesRemaining = 0;
				this.command = -1;
				this.transferStep = 0;
			}
		}
		break;
	}

	this.pins = nybble & 7;
};

GameBoyAdvanceRTC.prototype.setDirection = function(direction) {
	this.direction = direction;
};

GameBoyAdvanceRTC.prototype.processByte = function() {
	--this.bytesRemaining;
	switch (this.command) {
	case -1:
		if ((this.bits & 0x0F) == 0x06) {
			this.command = (this.bits >> 4) & 7;
			this.reading = this.bits & 0x80;

			this.bytesRemaining = this.totalBytes[this.command];
			switch (this.command) {
			case 0:
				this.control = 0;
				break;
			case 2:
			case 6:
				this.updateClock();
				break;
			}
		} else {
			console.WARN('Invalid RTC command byte: ' + this.bits.toString(16));
		}
		break;
	case 4:
		// Control
		this.control = this.bits & 0x40;
		break;
	}	
	this.bits = 0;
	this.bitsRead = 0;
	if (!this.bytesRemaining) {
		this.command = -1;
	}
};

GameBoyAdvanceRTC.prototype.sioOutputPin = function() {
	let outputByte = 0;
	switch (this.command) {
	case 4:
		outputByte = this.control;
		break;
	case 2:
	case 6:
		outputByte = this.time[7 - this.bytesRemaining];
		break;
	}
	return (outputByte >> this.bitsRead) & 1;
};

GameBoyAdvanceRTC.prototype.updateClock = function() {
	let date = new Date();
	this.time[0] = this.bcd(date.getFullYear());
	this.time[1] = this.bcd(date.getMonth() + 1);
	this.time[2] = this.bcd(date.getDate());
	this.time[3] = date.getDay() - 1;
	if (this.time[3] < 0) {
		this.time[3] = 6;
	}
	if (this.control & 0x40) {
		// 24 hour
		this.time[4] = this.bcd(date.getHours());
	} else {
		this.time[4] = this.bcd(date.getHours() % 2);
		if (date.getHours() >= 12) {
			this.time[4] |= 0x80;
		}
	}
	this.time[5] = this.bcd(date.getMinutes());
	this.time[6] = this.bcd(date.getSeconds());
};

GameBoyAdvanceRTC.prototype.bcd = function(binary) {
	let counter = binary % 10;
	binary /= 10;
	counter += (binary % 10) << 4;
	return counter;
};