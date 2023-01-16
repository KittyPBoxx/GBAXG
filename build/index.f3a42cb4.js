"use strict";function GameBoyAdvanceEmulator(){this.settings={SKIPBoot:!0,audioBufferUnderrunLimit:100,audioBufferDynamicLimit:32,audioBufferSize:300,emulatorSpeed:1,metricCollectionMinimum:500,dynamicSpeed:!1,overclockBlockLimit:200,offthreadGfxEnabled:!1},this.audioFound=0,this.emulatorStatus=16,this.BIOS=[],this.ROMS=[],this.ROM_CODES=[],this.NEXT_ROM=null,this.audioUpdateState=1,this.saveExportHandler=null,this.saveImportHandler=null,this.speedCallback=null,this.playStatusCallback=null,this.startCallbacks=[],this.endCallbacks=[],this.terminationCallbacks=[],this.timerIntervalRate=16,this.lastTimestamp=0,this.dynamicSpeedRefresh=!1,this.calculateTimings(),this.generateCoreExposed(),this.saveStateManager=new SaveStateManager(this),this.boostPerformance=!1}GameBoyAdvanceEmulator.prototype.generateCoreExposed=function(){var t=this;this.coreExposed={outputAudio:function(e,i){this.boostPerformance||t.outputAudio(e,i)},graphicsHandle:null,appendStartIterationSync:function(e){t.startCallbacks.push(e)},appendEndIterationSync:function(e){t.endCallbacks.push(e)},appendTerminationSync:function(e){t.terminationCallbacks.push(e)},offthreadGfxEnabled:function(){return!1}}},GameBoyAdvanceEmulator.prototype.play=function(){if((0|this.emulatorStatus)>=16){if(this.emulatorStatus=15&this.emulatorStatus,0==(1&this.emulatorStatus)&&this.BIOS&&this.ROMS.length>=1){if(0==(0|this.initializeCore()))return void this.pause();this.importSave()}this.invalidateMetrics(),this.setBufferSpace(),this.playStatusCallback(1)}},GameBoyAdvanceEmulator.prototype.pause=function(){(0|this.emulatorStatus)<16&&(this.exportSave(),this.emulatorStatus=16|this.emulatorStatus,this.playStatusCallback(0))},GameBoyAdvanceEmulator.prototype.stop=function(){this.emulatorStatus=28&this.emulatorStatus,this.audioUpdateState=1,this.pause()},GameBoyAdvanceEmulator.prototype.restart=function(){if(1==(1&this.emulatorStatus)){if(this.emulatorStatus=29&this.emulatorStatus,this.exportSave(),0==(0|this.initializeCore()))return void this.pause();this.importSave(),this.audioUpdateState=1,this.processNewSpeed(1),this.setBufferSpace()}},GameBoyAdvanceEmulator.prototype.timerCallback=function(t){switch(this.lastTimestamp=t>>>0,0|this.emulatorStatus){case 5:this.iterationStartSequence(),this.IOCore.enter(0|this.CPUCyclesTotal),this.iterationEndSequence();break;case 1:break;default:this.pause()}},GameBoyAdvanceEmulator.prototype.iterationStartSequence=function(){this.boostPerformance||this.calculateSpeedPercentage(),this.emulatorStatus=2|this.emulatorStatus,this.boostPerformance||(this.audioUnderrunAdjustment(),this.audioPushNewState()),this.runStartJobs()},GameBoyAdvanceEmulator.prototype.iterationEndSequence=function(){this.emulatorStatus=29&this.emulatorStatus,this.clockCyclesSinceStart=(0|this.clockCyclesSinceStart)+(0|this.CPUCyclesTotal)|0,this.boostPerformance||this.submitAudioBuffer(),this.runEndJobs()},GameBoyAdvanceEmulator.prototype.runStartJobs=function(){for(var t=0|this.startCallbacks.length,e=0;(0|e)<(0|t);e=1+(0|e)|0)this.startCallbacks[0|e]()},GameBoyAdvanceEmulator.prototype.runEndJobs=function(){for(var t=0|this.endCallbacks.length,e=0;(0|e)<(0|t);e=1+(0|e)|0)this.endCallbacks[0|e]()},GameBoyAdvanceEmulator.prototype.runTerminationJobs=function(){for(var t=0|this.terminationCallbacks.length,e=0;(0|e)<(0|t);e=1+(0|e)|0)this.terminationCallbacks[0|e]();this.startCallbacks=[],this.endCallbacks=[],this.terminationCallbacks=[]},GameBoyAdvanceEmulator.prototype.attachROM=function(t,e){this.stop();let i=this.ROM_CODES.indexOf(e);-1==i?(this.ROMS.push(t),this.ROM_CODES.push(e)):this.ROMS[i]=t},GameBoyAdvanceEmulator.prototype.attachBIOS=function(t){this.stop(),this.BIOS=t},GameBoyAdvanceEmulator.prototype.getGameName=function(){return 1==(3&this.emulatorStatus)?this.IOCore.cartridge.getName():""},GameBoyAdvanceEmulator.prototype.attachSaveExportHandler=function(t){"function"==typeof t&&(this.saveExportHandler=t)},GameBoyAdvanceEmulator.prototype.attachSaveImportHandler=function(t){"function"==typeof t&&(this.saveImportHandler=t)},GameBoyAdvanceEmulator.prototype.attachSpeedHandler=function(t){"function"==typeof t&&(this.speedCallback=t)},GameBoyAdvanceEmulator.prototype.attachPlayStatusHandler=function(t){"function"==typeof t&&(this.playStatusCallback=t)},GameBoyAdvanceEmulator.prototype.importSave=function(){if(this.saveImportHandler){var t=this.getGameName();if(""!=t){var e=this;return this.emulatorStatus=27&this.emulatorStatus,void this.saveImportHandler(t,(function(i){e.emulatorStatus=27&e.emulatorStatus,e.saveImportHandler("TYPE_"+t,(function(t){if(i&&t&&1==(3&e.emulatorStatus)){var a=0|i.length,o=getUint8Array(0|a);if((0|a)>0){for(var s=0;(0|s)<(0|a);s=1+(0|s)|0)o[0|s]=255&i[0|s];1!=(0|t.length)?e.IOCore.saves.importSave(o,0):e.IOCore.saves.importSave(o,255&t[0]),e.emulatorStatus=4|e.emulatorStatus}}}),(function(){e.emulatorStatus=4|e.emulatorStatus}))}),(function(){e.emulatorStatus=4|e.emulatorStatus}))}}this.emulatorStatus=4|this.emulatorStatus},GameBoyAdvanceEmulator.prototype.exportSave=function(){if(this.saveExportHandler&&1==(3&this.emulatorStatus)){var t=this.IOCore.saves.exportSave(),e=0|this.IOCore.saves.exportSaveType();null!=t&&(this.saveExportHandler(this.IOCore.cartridge.getName(),t),this.saveExportHandler("TYPE_"+this.IOCore.cartridge.getName(),[0|e]))}},GameBoyAdvanceEmulator.prototype.setSpeed=function(t){t=+t,this.settings.dynamicSpeed||this.processNewSpeed(+t)},GameBoyAdvanceEmulator.prototype.processNewSpeed=function(t){t=+t,+(t=+Math.min(Math.max(+t,.003),63))!=+this.settings.emulatorSpeed&&(this.settings.emulatorSpeed=+t,this.calculateTimings())},GameBoyAdvanceEmulator.prototype.incrementSpeed=function(t){t=+t,this.setSpeed(+t+ +this.settings.emulatorSpeed)},GameBoyAdvanceEmulator.prototype.getSpeed=function(){return+this.settings.emulatorSpeed},GameBoyAdvanceEmulator.prototype.invalidateMetrics=function(){this.clockCyclesSinceStart=0,this.metricStart=0},GameBoyAdvanceEmulator.prototype.resetMetrics=function(){this.clockCyclesSinceStart=0,this.metricStart=this.lastTimestamp>>>0},GameBoyAdvanceEmulator.prototype.calculateTimings=function(){this.clocksPerSecond=0|Math.min(16777216*+this.settings.emulatorSpeed,1056964608),this.clocksPerMilliSecond=+(0|this.clocksPerSecond)/1e3,this.CPUCyclesPerIteration=+this.clocksPerMilliSecond*+this.timerIntervalRate|0,this.CPUCyclesTotal=0|this.CPUCyclesPerIteration,this.boostPerformance||(this.initializeAudioLogic(),this.reinitializeAudio()),this.invalidateMetrics()},GameBoyAdvanceEmulator.prototype.setIntervalRate=function(t){+(t=+t)>0&&+t<1e3&&+t!=+this.timerIntervalRate&&(this.timerIntervalRate=+t,this.calculateTimings())},GameBoyAdvanceEmulator.prototype.calculateSpeedPercentage=function(){if(this.metricStart>>>0!=0){var t=Math.max((this.lastTimestamp>>>0)-(this.metricStart>>>0)|0,1)>>>0;if(t>>>0>=(0|this.settings.metricCollectionMinimum)){if(this.speedCallback){var e=1e5*(0|this.clockCyclesSinceStart)/(16777216*(t>>>0));this.speedCallback(+e)}this.resetMetrics(),this.dynamicSpeedRefresh=!0}else this.dynamicSpeedRefresh=!1}else this.resetMetrics(),this.dynamicSpeedRefresh=!1},GameBoyAdvanceEmulator.prototype.initializeCore=function(){this.runTerminationJobs();let t=this.NEXT_ROM?this.NEXT_ROM:this.ROM_CODES[0];this.IOCore=new GameBoyAdvanceIO(this.settings.SKIPBoot,this.coreExposed,this.BIOS,this.ROMS,this.ROM_CODES,t);var e=0|this.IOCore.initialize(t);return this.emulatorStatus=this.emulatorStatus|e,patchSprites(),patchDuplicateWarps(),0|e},GameBoyAdvanceEmulator.prototype.keyDown=function(t){t|=0,(0|this.emulatorStatus)<16&&(0|t)>=0&&(0|t)<=9&&this.IOCore.joypad.keyPress(0|t)},GameBoyAdvanceEmulator.prototype.keyUp=function(t){t|=0,(0|this.emulatorStatus)<16&&(0|t)>=0&&(0|t)<=9&&this.IOCore.joypad.keyRelease(0|t)},GameBoyAdvanceEmulator.prototype.attachGraphicsFrameHandler=function(t){"object"==typeof t&&(this.coreExposed.graphicsHandle=t)},GameBoyAdvanceEmulator.prototype.attachAudioHandler=function(t){t&&(this.audio=t)},GameBoyAdvanceEmulator.prototype.enableAudio=function(){if(0==(0|this.audioFound)&&this.audio){this.audioFound=1;var t=this;this.audio.initialize(2,(0|this.clocksPerSecond)/(0|this.audioResamplerFirstPassFactor),0|Math.max(+this.clocksPerMilliSecond*(0|this.settings.audioBufferSize)/(0|this.audioResamplerFirstPassFactor),4),(function(){}),(function(){}),(function(){t.disableAudio()})),this.audio.register()}},GameBoyAdvanceEmulator.prototype.disableAudio=function(){0!=(0|this.audioFound)&&(this.audio.unregister(),this.audioFound=0)},GameBoyAdvanceEmulator.prototype.reinitializeAudio=function(){0!=(0|this.audioFound)&&(this.disableAudio(),this.enableAudio())},GameBoyAdvanceEmulator.prototype.initializeAudioLogic=function(){this.audioResamplerFirstPassFactor=0|Math.min(Math.floor((0|this.clocksPerSecond)/44100),Math.floor(2147483647/1023)),this.audioDownSampleInputDivider=2/1023/(0|this.audioResamplerFirstPassFactor),this.initializeAudioBuffering(),this.audioUpdateState=1},GameBoyAdvanceEmulator.prototype.initializeAudioBuffering=function(){this.audioDestinationPosition=0,this.audioBufferContainAmount=Math.max(+this.clocksPerMilliSecond*(0|this.settings.audioBufferUnderrunLimit)/(0|this.audioResamplerFirstPassFactor),3)<<1,this.audioBufferOverclockBlockAmount=Math.max(+this.clocksPerMilliSecond*(0|this.settings.overclockBlockLimit)/(0|this.audioResamplerFirstPassFactor),3)<<1,this.audioBufferDynamicContainAmount=Math.max(+this.clocksPerMilliSecond*(0|this.settings.audioBufferDynamicLimit)/(0|this.audioResamplerFirstPassFactor),2)<<1;var t=Math.max(+this.clocksPerMilliSecond/(0|this.audioResamplerFirstPassFactor)<<6,4)<<1;(!this.audioBuffer||(0|t)>(0|this.audioBuffer.length))&&(this.audioBuffer=getFloat32Array(0|t))},GameBoyAdvanceEmulator.prototype.outputAudio=function(t,e){t|=0,e|=0,this.audioBuffer[0|this.audioDestinationPosition]=(0|t)*+this.audioDownSampleInputDivider-1,this.audioDestinationPosition=1+(0|this.audioDestinationPosition)|0,this.audioBuffer[0|this.audioDestinationPosition]=(0|e)*+this.audioDownSampleInputDivider-1,this.audioDestinationPosition=1+(0|this.audioDestinationPosition)|0},GameBoyAdvanceEmulator.prototype.submitAudioBuffer=function(){0!=(0|this.audioFound)&&this.audio.push(this.audioBuffer,0,0|this.audioDestinationPosition),this.audioDestinationPosition=0},GameBoyAdvanceEmulator.prototype.audioUnderrunAdjustment=function(){if(this.CPUCyclesTotal=0|this.CPUCyclesPerIteration,0!=(0|this.audioFound)){var t=this.audio.remainingBuffer();if("number"==typeof t){t=0|Math.max(0|t,0);var e=(0|this.audioBufferContainAmount)-(0|t)|0;if((0|e)>0){if(this.dynamicSpeedRefresh&&this.settings.dynamicSpeed&&(0|this.audioBufferDynamicContainAmount)-(0|t)>0){var i=+this.getSpeed();i=Math.max(+i-.1,.003),this.processNewSpeed(+i)}this.CPUCyclesTotal=0|Math.min((0|this.CPUCyclesTotal)+(e>>1)*(0|this.audioResamplerFirstPassFactor)|0,+this.clocksPerMilliSecond<<5)}else{if(this.dynamicSpeedRefresh&&this.settings.dynamicSpeed)+(i=+this.getSpeed())<1&&(i=+Math.min(+i+.01,1),this.processNewSpeed(+i));var a=(0|t)-(0|this.audioBufferOverclockBlockAmount)|0;(0|a)>0&&(this.CPUCyclesTotal=0|Math.max((0|this.CPUCyclesTotal)-(a>>1)*(0|this.audioResamplerFirstPassFactor)|0,0))}}}},GameBoyAdvanceEmulator.prototype.audioPushNewState=function(){0!=(0|this.audioUpdateState)&&(this.IOCore.sound.initializeOutput(0|this.audioResamplerFirstPassFactor),this.audioUpdateState=0)},GameBoyAdvanceEmulator.prototype.setBufferSpace=function(){0!=(0|this.audioFound)&&this.audio.setBufferSpace(0|this.audioBufferContainAmount)},GameBoyAdvanceEmulator.prototype.toggleSkipBootROM=function(t){this.settings.SKIPBoot=!!t},GameBoyAdvanceEmulator.prototype.toggleDynamicSpeed=function(t){this.settings.dynamicSpeed=!!t,this.processNewSpeed(1)},GameBoyAdvanceEmulator.prototype.toggleOffthreadGraphics=function(t){this.settings.offthreadGfxEnabled=!1},GameBoyAdvanceEmulator.prototype.enableBoostPerformance=function(){this.settings.dynamicSpeed=!1,this.boostPerformance=!0,this.disableAudio(),this.setSpeed(1.1)},GameBoyAdvanceEmulator.prototype.disableBoostPerformance=function(){this.boostPerformance=!1,this.enableAudio(),this.setSpeed(1)};
//# sourceMappingURL=index.f3a42cb4.js.map
