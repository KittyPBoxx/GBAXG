"use strict";function GameBoyAdvanceWait(t){this.IOCore=t}GameBoyAdvanceWait.prototype.initialize=function(){this.memory=this.IOCore.memory,this.cpu=this.IOCore.cpu,this.WRAMConfiguration=218103840,this.WRAMWaitState=3,this.SRAMWaitState=5,this.WAITCNT0=0,this.WAITCNT1=0,this.POSTBOOT=0,this.isRendering=1,this.isOAMRendering=1,this.nonSequential=16,this.buffer=0,this.clocks=0,this.waitStateClocks16=getUint8Array(32),this.waitStateClocks32=getUint8Array(32),this.setWaitState(0,0),this.setWaitState(1,0),this.setWaitState(2,0),this.getROMRead16=this.getROMRead16NoPrefetch,this.getROMRead32=this.getROMRead32NoPrefetch,this.CPUInternalCyclePrefetch=this.CPUInternalCycleNoPrefetch,this.CPUInternalSingleCyclePrefetch=this.CPUInternalSingleCycleNoPrefetch},GameBoyAdvanceWait.prototype.getWaitStateFirstAccess=function(t){return t|=0,0|(t=(0|(t&=3))<3?5-(0|t)|0:9)},GameBoyAdvanceWait.prototype.getWaitStateSecondAccess=function(t,e){return t|=0,0|(e=0==(4&(e|=0))?1+(0|(e=2<<(0|t)))|0:2)},GameBoyAdvanceWait.prototype.setWaitState=function(t,e){t|=0,e|=0;var i=0|this.getWaitStateFirstAccess(3&e),o=0|this.getWaitStateSecondAccess(0|t,0|e);t<<=1,this.waitStateClocks16[24|t]=0|i,this.waitStateClocks16[25|t]=0|i;var a=(0|i)+(0|o)|0;this.waitStateClocks32[24|t]=0|a,this.waitStateClocks32[25|t]=0|a,this.waitStateClocks16[8|t]=0|o,this.waitStateClocks16[9|t]=0|o,this.waitStateClocks32[8|t]=o<<1,this.waitStateClocks32[9|t]=o<<1},GameBoyAdvanceWait.prototype.writeWAITCNT8_0=function(t){t|=0,this.SRAMWaitState=(3&t)<3?5-(3&t)|0:9,t&=255,this.setWaitState(0,t>>2),this.setWaitState(1,t>>5),this.WAITCNT0=0|t},GameBoyAdvanceWait.prototype.readWAITCNT8_0=function(){return 0|this.WAITCNT0},GameBoyAdvanceWait.prototype.writeWAITCNT8_1=function(t){t|=0,this.setWaitState(2,255&t),0==(64&t)?(this.resetPrebuffer(),this.getROMRead16=this.getROMRead16NoPrefetch,this.getROMRead32=this.getROMRead32NoPrefetch,this.CPUInternalCyclePrefetch=this.CPUInternalCycleNoPrefetch,this.CPUInternalSingleCyclePrefetch=this.CPUInternalSingleCycleNoPrefetch):(this.getROMRead16=this.getROMRead16Prefetch,this.getROMRead32=this.getROMRead32Prefetch,this.CPUInternalCyclePrefetch=this.multiClock,this.CPUInternalSingleCyclePrefetch=this.singleClock),this.WAITCNT1=95&t},GameBoyAdvanceWait.prototype.readWAITCNT8_1=function(){return 0|this.WAITCNT1},GameBoyAdvanceWait.prototype.writeWAITCNT16=function(t){this.writeWAITCNT8_0(0|t),this.writeWAITCNT8_1(t>>8)},GameBoyAdvanceWait.prototype.readWAITCNT16=function(){var t=0|this.WAITCNT0;return 0|(t|=this.WAITCNT1<<8)},GameBoyAdvanceWait.prototype.writePOSTBOOT=function(t){this.POSTBOOT=255&t},GameBoyAdvanceWait.prototype.readPOSTBOOT=function(){return 0|this.POSTBOOT},GameBoyAdvanceWait.prototype.writeHALTCNT=function(t){t|=0,this.IOCore.updateCoreSpillRetain(),0==(128&t)?this.IOCore.flagHalt():this.IOCore.flagStop()},GameBoyAdvanceWait.prototype.writeHALT16=function(t){t|=0,this.POSTBOOT=255&t,this.IOCore.updateCoreSpillRetain(),0==(32768&t)?this.IOCore.flagHalt():this.IOCore.flagStop()},GameBoyAdvanceWait.prototype.writeConfigureWRAM8=function(t,e){switch(e|=0,3&(t|=0)){case 0:this.memory.remapWRAM(33&e),this.WRAMConfiguration=4294967040&this.WRAMConfiguration|255&e;break;case 1:this.WRAMConfiguration=4294902015&this.WRAMConfiguration|(255&e)<<8;break;case 2:this.WRAMConfiguration=4278255615&this.WRAMConfiguration|(255&e)<<16;break;default:this.WRAMWaitState=16-(15&e)|0,this.WRAMConfiguration=16777215&this.WRAMConfiguration|e<<24}},GameBoyAdvanceWait.prototype.writeConfigureWRAM16=function(t,e){e|=0,0==(2&(t|=0))?(this.WRAMConfiguration=4294901760&this.WRAMConfiguration|65535&e,this.memory.remapWRAM(33&e)):(this.WRAMConfiguration=e<<16|65535&this.WRAMConfiguration,this.WRAMWaitState=16-(e>>8&15)|0)},GameBoyAdvanceWait.prototype.writeConfigureWRAM32=function(t){t|=0,this.WRAMConfiguration=0|t,this.WRAMWaitState=16-(t>>24&15)|0,this.memory.remapWRAM(33&t)},GameBoyAdvanceWait.prototype.readConfigureWRAM8=function(t){var e=0;switch(3&(t|=0)){case 0:e=47&this.WRAMConfiguration;break;case 3:e=this.WRAMConfiguration>>>24}return 0|e},GameBoyAdvanceWait.prototype.readConfigureWRAM16=function(t){return 0|(0==(2&(t|=0))?47&this.WRAMConfiguration:this.WRAMConfiguration>>16&65280)},GameBoyAdvanceWait.prototype.readConfigureWRAM32=function(){return 4278190127&this.WRAMConfiguration},GameBoyAdvanceWait.prototype.CPUInternalCycleNoPrefetch=function(t){t|=0,this.IOCore.updateCore(0|t),this.checkPrebufferBug()},GameBoyAdvanceWait.prototype.CPUInternalSingleCycleNoPrefetch=function(){this.IOCore.updateCoreSingle(),this.checkPrebufferBug()},GameBoyAdvanceWait.prototype.checkPrebufferBug=function(){var t=0|this.cpu.registers[15];(0|t)>=134217728&&(0|t)<234881024&&this.NonSequentialBroadcast()},GameBoyAdvanceWait.prototype.NonSequentialBroadcast=function(){this.nonSequential=16},GameBoyAdvanceWait.prototype.NonSequentialBroadcastClear=function(){this.NonSequentialBroadcast(),this.resetPrebuffer()},GameBoyAdvanceWait.prototype.check128kAlignmentBug=function(t){0==(131071&(t|=0))&&this.NonSequentialBroadcast()},GameBoyAdvanceWait.prototype.multiClock=function(t){t|=0,this.IOCore.updateCore(0|t);var e=0|this.cpu.registers[15];(0|e)>=134217728&&(0|e)<234881024?(0|this.clocks)<255&&(this.clocks=(0|this.clocks)+(0|t)|0):this.resetPrebuffer()},GameBoyAdvanceWait.prototype.singleClock=function(){this.IOCore.updateCoreSingle();var t=0|this.cpu.registers[15];(0|t)>=134217728&&(0|t)<234881024?(0|this.clocks)<255&&(this.clocks=1+(0|this.clocks)|0):this.resetPrebuffer()},GameBoyAdvanceWait.prototype.addPrebufferSingleClock=function(){this.clocks=1+(0|this.clocks)|0},GameBoyAdvanceWait.prototype.decrementBufferSingle=function(){this.buffer=(0|this.buffer)-1|0},GameBoyAdvanceWait.prototype.decrementBufferDouble=function(){this.buffer=(0|this.buffer)-2|0},GameBoyAdvanceWait.prototype.resetPrebuffer=function(){this.clocks=0,this.buffer=0},GameBoyAdvanceWait.prototype.drainOverdueClocks=function(){if((0|this.clocks)>0&&(0|this.buffer)<8){var t=this.cpu.registers[15]>>>24;do{this.clocks=(0|this.clocks)-(0|this.waitStateClocks16[0|t])|0,this.buffer=1+(0|this.buffer)|0}while((0|this.clocks)>0&&(0|this.buffer)<8);(0|this.clocks)<0&&(this.IOCore.updateCoreNegative(0|this.clocks),this.clocks=0)}},GameBoyAdvanceWait.prototype.computeClocks=function(t){for(t|=0;(0|this.buffer)<8&&(0|this.clocks)>=(0|this.waitStateClocks16[0|t]);)this.clocks=(0|this.clocks)-(0|this.waitStateClocks16[0|t])|0,this.buffer=1+(0|this.buffer)|0},GameBoyAdvanceWait.prototype.drainOverdueClocksCPU=function(){(0|this.clocks)<0?(this.IOCore.updateCoreNegative(0|this.clocks),this.clocks=0):this.IOCore.updateCoreSingle()},GameBoyAdvanceWait.prototype.doGamePakFetch16=function(t){t|=0,this.clocks=(0|this.clocks)-(0|this.waitStateClocks16[t|this.nonSequential])|0,this.nonSequential=0},GameBoyAdvanceWait.prototype.doGamePakFetch32=function(t){t|=0,this.clocks=(0|this.clocks)-(0|this.waitStateClocks32[t|this.nonSequential])|0,this.nonSequential=0},GameBoyAdvanceWait.prototype.getROMRead16Prefetch=function(t){if(t|=0,this.computeClocks(0|t),0==(0|this.buffer))this.doGamePakFetch16(0|t);else this.addPrebufferSingleClock(),this.decrementBufferSingle();this.drainOverdueClocksCPU()},GameBoyAdvanceWait.prototype.getROMRead16NoPrefetch=function(t){t|=0,this.IOCore.updateCore(0|this.waitStateClocks16[t|this.nonSequential]),this.nonSequential=0},GameBoyAdvanceWait.prototype.getROMRead32Prefetch=function(t){switch(t|=0,this.computeClocks(0|t),0|this.buffer){case 0:this.doGamePakFetch32(0|t);break;case 1:this.doGamePakFetch16(0|t),this.buffer=0;break;default:this.addPrebufferSingleClock(),this.decrementBufferDouble()}this.drainOverdueClocksCPU()},GameBoyAdvanceWait.prototype.getROMRead32NoPrefetch=function(t){t|=0,this.IOCore.updateCore(0|this.waitStateClocks32[t|this.nonSequential]),this.nonSequential=0},GameBoyAdvanceWait.prototype.WRAMAccess=function(){this.multiClock(0|this.WRAMWaitState)},GameBoyAdvanceWait.prototype.WRAMAccess16CPU=function(){this.IOCore.updateCore(0|this.WRAMWaitState)},GameBoyAdvanceWait.prototype.WRAMAccess32=function(){this.multiClock(this.WRAMWaitState<<1)},GameBoyAdvanceWait.prototype.WRAMAccess32CPU=function(){this.IOCore.updateCore(this.WRAMWaitState<<1)},GameBoyAdvanceWait.prototype.ROMAccess=function(t){t|=0,this.drainOverdueClocks(),this.check128kAlignmentBug(0|t),this.IOCore.updateCore(0|this.waitStateClocks16[t>>24|this.nonSequential]),this.nonSequential=0},GameBoyAdvanceWait.prototype.ROMAccess16CPU=function(t){t|=0,this.check128kAlignmentBug(0|t),this.getROMRead16(t>>24)},GameBoyAdvanceWait.prototype.ROMAccess32=function(t){t|=0,this.drainOverdueClocks(),this.check128kAlignmentBug(0|t),this.IOCore.updateCore(0|this.waitStateClocks32[t>>24|this.nonSequential]),this.nonSequential=0},GameBoyAdvanceWait.prototype.ROMAccess32CPU=function(t){t|=0,this.check128kAlignmentBug(0|t),this.getROMRead32(t>>24)},GameBoyAdvanceWait.prototype.SRAMAccess=function(){this.multiClock(0|this.SRAMWaitState)},GameBoyAdvanceWait.prototype.SRAMAccessCPU=function(){this.resetPrebuffer(),this.IOCore.updateCore(0|this.SRAMWaitState)},GameBoyAdvanceWait.prototype.VRAMAccess=function(){this.multiClock(0|this.isRendering)},GameBoyAdvanceWait.prototype.VRAMAccess16CPU=function(){this.IOCore.updateCore(0|this.isRendering)},GameBoyAdvanceWait.prototype.VRAMAccess32=function(){this.multiClock(this.isRendering<<1)},GameBoyAdvanceWait.prototype.VRAMAccess32CPU=function(){this.IOCore.updateCore(this.isRendering<<1)},GameBoyAdvanceWait.prototype.OAMAccess=function(){this.multiClock(0|this.isOAMRendering)},GameBoyAdvanceWait.prototype.OAMAccessCPU=function(){this.IOCore.updateCore(0|this.isOAMRendering)},GameBoyAdvanceWait.prototype.updateRenderStatus=function(t,e){this.isRendering=0|t,this.isOAMRendering=0|e};
//# sourceMappingURL=build-index.91218e0f.js.map