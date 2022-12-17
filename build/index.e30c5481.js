"use strict";function GameBoyAdvanceGPIOChip(){this.type=1,this.rtc=new GameBoyAdvanceRTC(this),this.direction=0,this.readWrite=0,this.data=0}GameBoyAdvanceGPIOChip.prototype.getType=function(){return 0|this.type},GameBoyAdvanceGPIOChip.prototype.setType=function(t){t|=0,this.type=0|t},GameBoyAdvanceGPIOChip.prototype.read=function(t){t|=0;let e=0;if(0|this.readWrite)switch(15&t){case 4:e=this.data;break;case 6:e=0|this.direction;break;case 8:e=0|this.readWrite}return 0|e},GameBoyAdvanceGPIOChip.prototype.write=function(t,e){switch(e|=0,15&(t|=0)){case 4:if(this.rtc.setPins(15&e),this.readWrite){let t=this.read(196);t&=~this.direction,this.data=t|e&this.direction}break;case 6:this.direction=15&e,this.rtc.setDirection(this.direction);break;case 8:this.readWrite=1&e}},GameBoyAdvanceGPIOChip.prototype.write16=function(t,e){this.write(t,e)},GameBoyAdvanceGPIOChip.prototype.read16=function(t){return this.read(t)},GameBoyAdvanceGPIOChip.prototype.supportsWrite8=function(t){return!1},GameBoyAdvanceGPIOChip.prototype.supportsWrite16=function(t){return t>=196&&t<=200},GameBoyAdvanceGPIOChip.prototype.supportsWrite32=function(t){return!1},GameBoyAdvanceGPIOChip.prototype.supportsRead8=function(t){return!1},GameBoyAdvanceGPIOChip.prototype.supportsRead16=function(t){return t>=196&&t<=200},GameBoyAdvanceGPIOChip.prototype.supportsRead32=function(t){return!1},GameBoyAdvanceGPIOChip.prototype.outputPins=function(t){if(this.readWrite){let e=this.read(196);e&=~this.direction,this.data=t|t&~this.direction&15}};
//# sourceMappingURL=index.e30c5481.js.map
