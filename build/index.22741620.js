"use strict";function GameBoyAdvanceFIFO(){this.count=0,this.position=0,this.buffer=getInt8Array(32)}GameBoyAdvanceFIFO.prototype.push=function(t){t|=0;var s=(0|this.position)+(0|this.count)|0;this.buffer[31&s]=t<<24>>24,(0|this.count)<32&&(this.count=1+(0|this.count)|0)},GameBoyAdvanceFIFO.prototype.push8=function(t){t|=0,this.push(0|t),this.push(0|t),this.push(0|t),this.push(0|t)},GameBoyAdvanceFIFO.prototype.push16=function(t){t|=0,this.push(0|t),this.push(t>>8),this.push(0|t),this.push(t>>8)},GameBoyAdvanceFIFO.prototype.push32=function(t){t|=0,this.push(0|t),this.push(t>>8),this.push(t>>16),this.push(t>>24)},GameBoyAdvanceFIFO.prototype.shift=function(){var t=0;return(0|this.count)>0&&(this.count=(0|this.count)-1|0,t=this.buffer[31&this.position]<<3,this.position=1+(0|this.position)&31),0|t},GameBoyAdvanceFIFO.prototype.requestingDMA=function(){return(0|this.count)<=16},GameBoyAdvanceFIFO.prototype.samplesUntilDMATrigger=function(){return(0|this.count)-16|0},GameBoyAdvanceFIFO.prototype.clear=function(){this.count=0};
//# sourceMappingURL=index.22741620.js.map
