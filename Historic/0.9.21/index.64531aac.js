"use strict";function IodineGBAWorkerShim(){this.playStatus=null,this.gfx=null,this.audio=null,this.speed=null,this.saveExport=null,this.saveImport=null,this.worker=null,this.gfxBuffers=null,this.gfxCounters=null,this.audioBuffer=null,this.audioCounters=null,this.audioSamplesRemaining=null,this.audioBufferSize=0,this.audioBufferSizeMask=0,this.audioInitialized=!1,this.timestamp=null,this.initialize()}var tempvar=document.getElementsByTagName("script");IodineGBAWorkerShim.prototype.filepath=tempvar[tempvar.length-1].src,IodineGBAWorkerShim.prototype.initialize=function(){var e=this,i=this.filepath.split("/");i=i.slice(0,i.length-2).join("/"),i+="/IodineGBA/core/Worker.js",this.worker=new Worker(i),this.worker.onmessage=function(i){e.decodeMessage(i.data)}},IodineGBAWorkerShim.prototype.sendMessageSingle=function(e){e|=0,this.worker.postMessage({messageID:e})},IodineGBAWorkerShim.prototype.sendMessageDouble=function(e,i){e|=0,this.worker.postMessage({messageID:e,payload:i})},IodineGBAWorkerShim.prototype.play=function(){this.sendMessageSingle(0)},IodineGBAWorkerShim.prototype.pause=function(){this.sendMessageSingle(1)},IodineGBAWorkerShim.prototype.restart=function(){this.sendMessageSingle(2)},IodineGBAWorkerShim.prototype.setIntervalRate=function(e){e=+e,this.sendMessageDouble(3,+e)},IodineGBAWorkerShim.prototype.timerCallback=function(e){e>>>=0,this.timestamp&&Atomics.store(this.timestamp,0,e>>>0)},IodineGBAWorkerShim.prototype.attachPlayStatusHandler=function(e){this.playStatus=e,this.sendMessageSingle(23)},IodineGBAWorkerShim.prototype.issuePlayStatus=function(e){e|=0,this.playStatus&&this.playStatus(0|e)},IodineGBAWorkerShim.prototype.attachGraphicsFrameHandler=function(e){this.gfx=e;var i=this;this.gfx.attachGfxCallback((function(){i.graphicsHeartBeat()})),this.sendMessageSingle(4)},IodineGBAWorkerShim.prototype.attachAudioHandler=function(e){this.audio=e,this.sendMessageSingle(5)},IodineGBAWorkerShim.prototype.enableAudio=function(){this.audio&&this.sendMessageSingle(6)},IodineGBAWorkerShim.prototype.disableAudio=function(){this.audio&&this.sendMessageSingle(7)},IodineGBAWorkerShim.prototype.toggleSkipBootROM=function(e){e|=0,this.sendMessageDouble(8,0|e)},IodineGBAWorkerShim.prototype.toggleDynamicSpeed=function(e){e|=0,this.sendMessageDouble(9,0|e)},IodineGBAWorkerShim.prototype.toggleOffthreadGraphics=function(e){e|=0,this.sendMessageDouble(22,0|e)},IodineGBAWorkerShim.prototype.attachSpeedHandler=function(e){this.speed=e,this.sendMessageSingle(10)},IodineGBAWorkerShim.prototype.keyDown=function(e){e|=0,this.sendMessageDouble(11,0|e)},IodineGBAWorkerShim.prototype.keyUp=function(e){e|=0,this.sendMessageDouble(12,0|e)},IodineGBAWorkerShim.prototype.incrementSpeed=function(e){e=+e,this.sendMessageDouble(13,+e)},IodineGBAWorkerShim.prototype.setSpeed=function(e){e=+e,this.sendMessageDouble(14,+e)},IodineGBAWorkerShim.prototype.attachBIOS=function(e){this.sendMessageDouble(15,e)},IodineGBAWorkerShim.prototype.attachROM=function(e){this.sendMessageDouble(16,e)},IodineGBAWorkerShim.prototype.exportSave=function(){this.sendMessageSingle(17)},IodineGBAWorkerShim.prototype.attachSaveExportHandler=function(e){this.saveExport=e,this.sendMessageSingle(18)},IodineGBAWorkerShim.prototype.attachSaveImportHandler=function(e){this.saveImport=e,this.sendMessageSingle(19)},IodineGBAWorkerShim.prototype.decodeMessage=function(e){switch(0|e.messageID){case 0:this.buffersInitialize(e.gfxBuffer1,e.gfxBuffer2,e.gfxCounters,e.audioSamplesRemaining,e.timestamp);break;case 1:this.audioInitialize(0|e.channels,+e.sampleRate,0|e.bufferLimit,e.audioBuffer,e.audioCounters);break;case 2:this.audioRegister();break;case 3:this.audioUnregister();break;case 4:this.audioSetBufferSpace(0|e.audioBufferContainAmount);break;case 5:this.saveImportRequest(e.saveID);break;case 6:this.saveExportRequest(e.saveID,e.saveData);break;case 7:this.speedPush(+e.speed);break;default:this.issuePlayStatus(0|e.playing)}},IodineGBAWorkerShim.prototype.audioInitialize=function(e,i,t,o,s){e|=0,i=+i,t|=0;var r=this;this.audio&&(this.audio.initialize(0|e,+i,0|t,(function(){r.audioHeartBeat()}),(function(){r.audioPostHeartBeat()}),(function(){r.disableAudio()})),this.audioInitialized=!0),this.audioBuffer=o,this.audioCounters=s,this.audioBufferSize=0|o.length,this.audioBufferSizeMask=(0|this.audioBufferSize)-1|0},IodineGBAWorkerShim.prototype.audioHeartBeat=function(){this.audioInitialized&&this.consumeAudioBuffer()},IodineGBAWorkerShim.prototype.consumeAudioBuffer=function(){var e=0|this.audioCounters[0],i=0|Atomics.load(this.audioCounters,1);(0|i)!=(0|e)&&(this.copyAudioBuffer(0|e,0|i),this.audioPostHeartBeat(),Atomics.store(this.audioCounters,0,0|i),this.audio.flush())},IodineGBAWorkerShim.prototype.copyAudioBuffer=function(e,i){i|=0;var t=(0|(e|=0))&(0|this.audioBufferSizeMask)|0,o=(0|i)&(0|this.audioBufferSizeMask)|0;(0|t)>=(0|o)?(this.audio.pushDeferred(this.audioBuffer,0|t,0|this.audioBufferSize),this.audio.pushDeferred(this.audioBuffer,0,0|o)):this.audio.pushDeferred(this.audioBuffer,0|t,0|o)},IodineGBAWorkerShim.prototype.audioPostHeartBeat=function(){this.audioSamplesRemaining[0]=0|this.audio.remainingBuffer()},IodineGBAWorkerShim.prototype.graphicsHeartBeat=function(){this.gfx&&this.gfxCounters&&(this.consumeGraphicsBuffer(),Atomics.notify(this.gfxCounters,2,1))},IodineGBAWorkerShim.prototype.consumeGraphicsBuffer=function(){var e=0|this.gfxCounters[0],i=0|Atomics.load(this.gfxCounters,1);if((0|i)!=(0|e)){do{this.gfx.copyBuffer(this.gfxBuffers[1&e]),e=1+(0|e)|0}while((0|e)!=(0|i));this.gfxCounters[0]=0|i}},IodineGBAWorkerShim.prototype.audioRegister=function(){this.audio&&this.audio.register()},IodineGBAWorkerShim.prototype.audioUnregister=function(){this.audio&&(this.audioHeartBeat(),this.audio.unregister())},IodineGBAWorkerShim.prototype.audioSetBufferSpace=function(e){e|=0,this.audio&&this.audio.setBufferSpace(0|e)},IodineGBAWorkerShim.prototype.buffersInitialize=function(e,i,t,o,s){this.gfxBuffers=[e,i],this.gfxCounters=t,this.audioSamplesRemaining=o,this.timestamp=s},IodineGBAWorkerShim.prototype.speedPush=function(e){e=+e,this.speed&&this.speed(+e)},IodineGBAWorkerShim.prototype.saveImportRequest=function(e){if(this.saveImport){var i=this;this.saveImport(e,(function(e){i.sendMessageDouble(20,e)}),(function(){i.sendMessageSingle(21)}))}},IodineGBAWorkerShim.prototype.saveExportRequest=function(e,i){this.saveExport&&this.saveExport(e,i)};
//# sourceMappingURL=index.64531aac.js.map