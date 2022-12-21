"use strict";function GameBoyAdvanceAffineBGRenderer(e,t){t|=0,this.gfx=e,this.BGLayer=0|t,this.offset=256+(this.BGLayer<<8)|0}__VIEWS_SUPPORTED__?(GameBoyAdvanceAffineBGRenderer.prototype.initialize=function(){this.bg2MatrixRenderer=this.gfx.bg2MatrixRenderer,this.bg3MatrixRenderer=this.gfx.bg3MatrixRenderer,this.bg2FrameBufferRenderer=this.gfx.bg2FrameBufferRenderer,this.scratchBuffer=getInt32ViewCustom(this.gfx.buffer,0|this.offset,240+(0|this.offset)|0),this.BGdx=256,this.BGdmx=0,this.BGdy=0,this.BGdmy=256,this.BGReferenceX=0,this.BGReferenceY=0,this.pb=0,this.pd=0,this.doMosaic=0,this.priorityPreprocess(0),this.offsetReferenceCounters()},"function"==typeof Math.imul?(GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine2M=function(e){e|=0;var t=0|this.pb,i=0|this.pd;if(0!=(0|this.doMosaic)){var r=0|this.gfx.mosaicRenderer.getMosaicYOffset(0|e);t=(0|t)-Math.imul(0|this.BGdmx,0|r)|0,i=(0|i)-Math.imul(0|this.BGdmy,0|r)|0}for(var s=0;(0|s)<240;s=1+(0|s)|0,t=(0|t)+(0|this.BGdx)|0,i=(0|i)+(0|this.BGdy)|0)this.scratchBuffer[0|s]=this.priorityFlag|this.bg2MatrixRenderer.fetchPixel(t>>8,i>>8);0!=(0|this.doMosaic)&&this.gfx.mosaicRenderer.renderMosaicHorizontal(0|this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine3M=function(e){e|=0;var t=0|this.pb,i=0|this.pd;if(0!=(0|this.doMosaic)){var r=0|this.gfx.mosaicRenderer.getMosaicYOffset(0|e);t=(0|t)-Math.imul(0|this.BGdmx,0|r)|0,i=(0|i)-Math.imul(0|this.BGdmy,0|r)|0}for(var s=0;(0|s)<240;s=1+(0|s)|0,t=(0|t)+(0|this.BGdx)|0,i=(0|i)+(0|this.BGdy)|0)this.scratchBuffer[0|s]=this.priorityFlag|this.bg3MatrixRenderer.fetchPixel(t>>8,i>>8);0!=(0|this.doMosaic)&&this.gfx.mosaicRenderer.renderMosaicHorizontal(0|this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine2F=function(e){e|=0;var t=0|this.pb,i=0|this.pd;if(0!=(0|this.doMosaic)){var r=0|this.gfx.mosaicRenderer.getMosaicYOffset(0|e);t=(0|t)-Math.imul(0|this.BGdmx,0|r)|0,i=(0|i)-Math.imul(0|this.BGdmy,0|r)|0}for(var s=0;(0|s)<240;s=1+(0|s)|0,t=(0|t)+(0|this.BGdx)|0,i=(0|i)+(0|this.BGdy)|0)this.scratchBuffer[0|s]=this.priorityFlag|this.bg2FrameBufferRenderer.fetchPixel(t>>8,i>>8);0!=(0|this.doMosaic)&&this.gfx.mosaicRenderer.renderMosaicHorizontal(0|this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.offsetReferenceCounters=function(){var e=0|this.gfx.lastUnrenderedLine;this.pb=0|Math.imul((0|this.pb)+(0|this.BGdmx)|0,0|e),this.pd=0|Math.imul((0|this.pd)+(0|this.BGdmy)|0,0|e)}):(GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine2M=function(e){var t=this.pb,i=this.pd;if(0!=this.doMosaic){var r=this.gfx.mosaicRenderer.getMosaicYOffset(e);t-=this.BGdmx*r,i-=this.BGdmy*r}for(var s=0;s<240;++s,t+=this.BGdx,i+=this.BGdy)this.scratchBuffer[s]=this.priorityFlag|this.bg2MatrixRenderer.fetchPixel(t>>8,i>>8);0!=this.doMosaic&&this.gfx.mosaicRenderer.renderMosaicHorizontal(this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine3M=function(e){var t=this.pb,i=this.pd;if(0!=this.doMosaic){var r=this.gfx.mosaicRenderer.getMosaicYOffset(e);t-=this.BGdmx*r,i-=this.BGdmy*r}for(var s=0;s<240;++s,t+=this.BGdx,i+=this.BGdy)this.scratchBuffer[s]=this.priorityFlag|this.bg3MatrixRenderer.fetchPixel(t>>8,i>>8);0!=this.doMosaic&&this.gfx.mosaicRenderer.renderMosaicHorizontal(this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine2F=function(e){var t=this.pb,i=this.pd;if(0!=this.doMosaic){var r=this.gfx.mosaicRenderer.getMosaicYOffset(e);t-=this.BGdmx*r,i-=this.BGdmy*r}for(var s=0;s<240;++s,t+=this.BGdx,i+=this.BGdy)this.scratchBuffer[s]=this.priorityFlag|this.bg2FrameBufferRenderer.fetchPixel(t>>8,i>>8);0!=this.doMosaic&&this.gfx.mosaicRenderer.renderMosaicHorizontal(this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.offsetReferenceCounters=function(){var e=0|this.gfx.lastUnrenderedLine;this.pb=((0|this.pb)+(0|this.BGdmx))*(0|e)|0,this.pd=((0|this.pd)+(0|this.BGdmy))*(0|e)|0})):(GameBoyAdvanceAffineBGRenderer.prototype.initialize=function(){this.bg2MatrixRenderer=this.gfx.bg2MatrixRenderer,this.bg3MatrixRenderer=this.gfx.bg3MatrixRenderer,this.bg2FrameBufferRenderer=this.gfx.bg2FrameBufferRenderer,this.scratchBuffer=this.gfx.buffer,this.BGdx=256,this.BGdmx=0,this.BGdy=0,this.BGdmy=256,this.BGReferenceX=0,this.BGReferenceY=0,this.pb=0,this.pd=0,this.doMosaic=0,this.priorityPreprocess(0),this.offsetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine2M=function(e){var t=this.pb,i=this.pd;if(0!=this.doMosaic){var r=this.gfx.mosaicRenderer.getMosaicYOffset(e);t-=this.BGdmx*r,i-=this.BGdmy*r}for(var s=0;s<240;++s,t+=this.BGdx,i+=this.BGdy)this.scratchBuffer[this.offset+s]=this.priorityFlag|this.bg2MatrixRenderer.fetchPixel(t>>8,i>>8);0!=this.doMosaic&&this.gfx.mosaicRenderer.renderMosaicHorizontal(this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine3M=function(e){var t=this.pb,i=this.pd;if(0!=this.doMosaic){var r=this.gfx.mosaicRenderer.getMosaicYOffset(e);t-=this.BGdmx*r,i-=this.BGdmy*r}for(var s=0;s<240;++s,t+=this.BGdx,i+=this.BGdy)this.scratchBuffer[this.offset+s]=this.priorityFlag|this.bg3MatrixRenderer.fetchPixel(t>>8,i>>8);0!=this.doMosaic&&this.gfx.mosaicRenderer.renderMosaicHorizontal(this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.renderScanLine2F=function(e){var t=this.pb,i=this.pd;if(0!=this.doMosaic){var r=this.gfx.mosaicRenderer.getMosaicYOffset(e);t-=this.BGdmx*r,i-=this.BGdmy*r}for(var s=0;s<240;++s,t+=this.BGdx,i+=this.BGdy)this.scratchBuffer[this.offset+s]=this.priorityFlag|this.bg2FrameBufferRenderer.fetchPixel(t>>8,i>>8);0!=this.doMosaic&&this.gfx.mosaicRenderer.renderMosaicHorizontal(this.offset)},GameBoyAdvanceAffineBGRenderer.prototype.offsetReferenceCounters=function(){var e=0|this.gfx.lastUnrenderedLine;this.pb=((0|this.pb)+(0|this.BGdmx))*(0|e)|0,this.pd=((0|this.pd)+(0|this.BGdmy))*(0|e)|0}),GameBoyAdvanceAffineBGRenderer.prototype.incrementReferenceCounters=function(){this.pb=(0|this.pb)+(0|this.BGdmx)|0,this.pd=(0|this.pd)+(0|this.BGdmy)|0},GameBoyAdvanceAffineBGRenderer.prototype.resetReferenceCounters=function(){this.pb=0|this.BGReferenceX,this.pd=0|this.BGReferenceY},GameBoyAdvanceAffineBGRenderer.prototype.setMosaicEnable=function(e){e|=0,this.doMosaic=0|e},GameBoyAdvanceAffineBGRenderer.prototype.priorityPreprocess=function(e){e|=0,this.priorityFlag=e<<23|1<<(16|this.BGLayer)},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPA8_0=function(e){e|=0,this.BGdx=4294967040&this.BGdx|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPA8_1=function(e){e=(e|=0)<<24>>16,this.BGdx=e|255&this.BGdx},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPA16=function(e){e|=0,this.BGdx=e<<16>>16},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPB8_0=function(e){e|=0,this.BGdmx=4294967040&this.BGdmx|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPB8_1=function(e){e=(e|=0)<<24>>16,this.BGdmx=e|255&this.BGdmx},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPB16=function(e){e|=0,this.BGdmx=e<<16>>16},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPAB32=function(e){e|=0,this.BGdx=e<<16>>16,this.BGdmx=e>>16},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPC8_0=function(e){e|=0,this.BGdy=4294967040&this.BGdy|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPC8_1=function(e){e=(e|=0)<<24>>16,this.BGdy=e|255&this.BGdy},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPC16=function(e){e|=0,this.BGdy=e<<16>>16},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPD8_0=function(e){e|=0,this.BGdmy=4294967040&this.BGdmy|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPD8_1=function(e){e=(e|=0)<<24>>16,this.BGdmy=e|255&this.BGdmy},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPD16=function(e){e|=0,this.BGdmy=e<<16>>16},GameBoyAdvanceAffineBGRenderer.prototype.writeBGPCD32=function(e){e|=0,this.BGdy=e<<16>>16,this.BGdmy=e>>16},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX8_0=function(e){e|=0,this.BGReferenceX=4294967040&this.BGReferenceX|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX8_1=function(e){e|=0,this.BGReferenceX=e<<8|4294902015&this.BGReferenceX},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX8_2=function(e){e|=0,this.BGReferenceX=e<<16|4278255615&this.BGReferenceX},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX8_3=function(e){e=(e|=0)<<28>>4,this.BGReferenceX=e|16777215&this.BGReferenceX},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX16_0=function(e){e|=0,this.BGReferenceX=4294901760&this.BGReferenceX|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX16_1=function(e){e=(e|=0)<<20>>4,this.BGReferenceX=65535&this.BGReferenceX|e},GameBoyAdvanceAffineBGRenderer.prototype.writeBGX32=function(e){e|=0,this.BGReferenceX=e<<4>>4},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY8_0=function(e){e|=0,this.BGReferenceY=4294967040&this.BGReferenceY|e,this.resetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY8_1=function(e){e|=0,this.BGReferenceY=e<<8|4294902015&this.BGReferenceY,this.resetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY8_2=function(e){e|=0,this.BGReferenceY=e<<16|4278255615&this.BGReferenceY,this.resetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY8_3=function(e){e=(e|=0)<<28>>4,this.BGReferenceY=e|16777215&this.BGReferenceY,this.resetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY16_0=function(e){e|=0,this.BGReferenceY=4294901760&this.BGReferenceY|e,this.resetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY16_1=function(e){e=(e|=0)<<20>>4,this.BGReferenceY=65535&this.BGReferenceY|e,this.resetReferenceCounters()},GameBoyAdvanceAffineBGRenderer.prototype.writeBGY32=function(e){e|=0,this.BGReferenceY=e<<4>>4,this.resetReferenceCounters()};
//# sourceMappingURL=index.309337ce.js.map