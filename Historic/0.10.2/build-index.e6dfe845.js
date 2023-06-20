"use strict";function GameBoyAdvanceCPU(t){this.IOCore=t}GameBoyAdvanceCPU.prototype.initialize=function(){this.memory=this.IOCore.memory,this.wait=this.IOCore.wait,this.mul64ResultHigh=0,this.mul64ResultLow=0,this.initializeRegisters(),this.ARM=new ARMInstructionSet(this),this.THUMB=new THUMBInstructionSet(this),this.swi=new GameBoyAdvanceSWI(this.IOCore,this,this.IOCore.irq),this.IOCore.assignInstructionCoreReferences(this.ARM,this.THUMB)},GameBoyAdvanceCPU.prototype.initializeRegisters=function(){this.registers=getInt32Array(16),this.registersUSR=getInt32Array(7),this.registersFIQ=getInt32Array(7),this.registersSVC=getInt32Array(2),this.registersABT=getInt32Array(2),this.registersIRQ=getInt32Array(2),this.registersUND=getInt32Array(2),this.branchFlags=ARMCPSRAttributeTable(),this.modeFlags=211,this.SPSR=getUint16Array(5),this.SPSR[0]=211,this.SPSR[1]=211,this.SPSR[2]=211,this.SPSR[3]=211,this.SPSR[4]=211,this.triggeredIRQ=0,this.IOCore.SKIPBoot&&this.HLEReset(),this.IOCore.flagBubble()},GameBoyAdvanceCPU.prototype.HLEReset=function(){this.registersSVC[0]=50364384,this.registersIRQ[0]=50364320,this.registers[13]=50364160,this.registers[15]=134217728,this.modeFlags=31|this.modeFlags},GameBoyAdvanceCPU.prototype.branch=function(t){(0|(t|=0))>16383||this.IOCore.BIOSFound,this.registers[15]=0|t,this.IOCore.flagBubble(),this.wait.NonSequentialBroadcastClear()},GameBoyAdvanceCPU.prototype.triggerIRQ=function(t){this.triggeredIRQ=0|t,this.assertIRQ()},GameBoyAdvanceCPU.prototype.assertIRQ=function(){0!=(0|this.triggeredIRQ)&&0==(128&this.modeFlags)&&this.IOCore.flagIRQ()},GameBoyAdvanceCPU.prototype.getCurrentFetchValue=function(){return 0!=(32&this.modeFlags)?0|this.THUMB.getCurrentFetchValue():0|this.ARM.getCurrentFetchValue()},GameBoyAdvanceCPU.prototype.enterARM=function(){this.modeFlags=223&this.modeFlags,this.THUMBBitModify(!1)},GameBoyAdvanceCPU.prototype.enterTHUMB=function(){this.modeFlags=32|this.modeFlags,this.THUMBBitModify(!0)},GameBoyAdvanceCPU.prototype.getLR=function(){return 0!=(32&this.modeFlags)?0|this.THUMB.getLR():0|this.ARM.getLR()},GameBoyAdvanceCPU.prototype.THUMBBitModify=function(t){t?this.IOCore.flagTHUMB():this.IOCore.deflagTHUMB()},GameBoyAdvanceCPU.prototype.IRQinARM=function(){this.switchMode(18),this.registers[14]=0|this.ARM.getIRQLR(),this.modeFlags=128|this.modeFlags,this.IOCore.BIOSFound,this.branch(24),this.IOCore.deflagIRQ()},GameBoyAdvanceCPU.prototype.IRQinTHUMB=function(){this.switchMode(18),this.registers[14]=0|this.THUMB.getIRQLR(),this.modeFlags=128|this.modeFlags,this.enterARM(),this.IOCore.BIOSFound,this.branch(24),this.IOCore.deflagIRQ()},GameBoyAdvanceCPU.prototype.HLEIRQEnter=function(){var t=0|this.registers[13];this.wait.NonSequentialBroadcast();for(var e=15;(0|e)>-1;e=(0|e)-1|0)0!=(20495&1<<(0|e))&&(t=(0|t)-4|0,this.memory.memoryWrite32(0|t,0|this.registers[0|e]));this.registers[13]=0|t,this.wait.NonSequentialBroadcast(),this.registers[0]=67108864,this.registers[14]=312,this.branch(-4&this.read32(67108860))},GameBoyAdvanceCPU.prototype.HLEIRQExit=function(){var t=0|this.registers[13];this.wait.NonSequentialBroadcast();for(var e=0;(0|e)<16;e=1+(0|e)|0)0!=(20495&1<<(0|e))&&(this.registers[15&e]=0|this.memory.memoryRead32(0|t),t=4+(0|t)|0);this.registers[13]=0|t,this.wait.NonSequentialBroadcast();var s=0|this.branchFlags.setSUBFlags(0|this.registers[14],4);s&=-4>>(this.SPSRtoCPSR()>>5),this.branch(0|s)},GameBoyAdvanceCPU.prototype.SWI=function(){if(IodineGUI.Iodine.forceBiosFile)return this.switchMode(19),this.registers[14]=0|this.getLR(),this.modeFlags=128|this.modeFlags,this.enterARM(),void this.branch(8);this.swi.checkSupport(this.THUMB.getSWICode())?(this.THUMB.incrementProgramCounter(),this.swi.execute(0|this.THUMB.getSWICode())):this.swi.checkSupport(this.ARM.getSWICode())?(this.ARM.incrementProgramCounter(),this.swi.execute(0|this.ARM.getSWICode())):this.IOCore.BIOSFound?(this.switchMode(19),this.registers[14]=0|this.getLR(),this.modeFlags=128|this.modeFlags,this.enterARM(),this.branch(8)):0!=(32&this.modeFlags)?(this.THUMB.incrementProgramCounter(),this.swi.execute(0|this.THUMB.getSWICode())):(this.ARM.incrementProgramCounter(),this.swi.execute(0|this.ARM.getSWICode()))},GameBoyAdvanceCPU.prototype.UNDEFINED=function(){this.IOCore.BIOSFound?(this.switchMode(27),this.registers[14]=0|this.getLR(),this.modeFlags=128|this.modeFlags,this.enterARM(),this.branch(4)):0!=(32&this.modeFlags)?this.THUMB.incrementProgramCounter():this.ARM.incrementProgramCounter()},GameBoyAdvanceCPU.prototype.SPSRtoCPSR=function(){var t=1;switch(31&this.modeFlags){case 18:break;case 19:t=2;break;case 17:t=0;break;case 23:t=3;break;case 27:t=4;break;default:return 32&this.modeFlags}var e=0|this.SPSR[0|t];return this.branchFlags.setNZCV(e<<20),this.switchRegisterBank(31&e),this.modeFlags=255&e,this.assertIRQ(),this.THUMBBitModify(0!=(32&e)),32&e},GameBoyAdvanceCPU.prototype.switchMode=function(t){t|=0,this.CPSRtoSPSR(0|t),this.switchRegisterBank(0|t),this.modeFlags=224&this.modeFlags|0|t},GameBoyAdvanceCPU.prototype.CPSRtoSPSR=function(t){var e=255&this.modeFlags;switch(e|=this.branchFlags.getNZCV()>>20,0|t){case 18:this.SPSR[1]=0|e;break;case 19:this.SPSR[2]=0|e;break;case 17:this.SPSR[0]=0|e;break;case 23:this.SPSR[3]=0|e;break;case 27:this.SPSR[4]=0|e}},GameBoyAdvanceCPU.prototype.switchRegisterBank=function(t){switch(t|=0,31&this.modeFlags){case 16:case 31:this.registersUSR[0]=0|this.registers[8],this.registersUSR[1]=0|this.registers[9],this.registersUSR[2]=0|this.registers[10],this.registersUSR[3]=0|this.registers[11],this.registersUSR[4]=0|this.registers[12],this.registersUSR[5]=0|this.registers[13],this.registersUSR[6]=0|this.registers[14];break;case 17:this.registersFIQ[0]=0|this.registers[8],this.registersFIQ[1]=0|this.registers[9],this.registersFIQ[2]=0|this.registers[10],this.registersFIQ[3]=0|this.registers[11],this.registersFIQ[4]=0|this.registers[12],this.registersFIQ[5]=0|this.registers[13],this.registersFIQ[6]=0|this.registers[14];break;case 18:this.registersUSR[0]=0|this.registers[8],this.registersUSR[1]=0|this.registers[9],this.registersUSR[2]=0|this.registers[10],this.registersUSR[3]=0|this.registers[11],this.registersUSR[4]=0|this.registers[12],this.registersIRQ[0]=0|this.registers[13],this.registersIRQ[1]=0|this.registers[14];break;case 19:this.registersUSR[0]=0|this.registers[8],this.registersUSR[1]=0|this.registers[9],this.registersUSR[2]=0|this.registers[10],this.registersUSR[3]=0|this.registers[11],this.registersUSR[4]=0|this.registers[12],this.registersSVC[0]=0|this.registers[13],this.registersSVC[1]=0|this.registers[14];break;case 23:this.registersUSR[0]=0|this.registers[8],this.registersUSR[1]=0|this.registers[9],this.registersUSR[2]=0|this.registers[10],this.registersUSR[3]=0|this.registers[11],this.registersUSR[4]=0|this.registers[12],this.registersABT[0]=0|this.registers[13],this.registersABT[1]=0|this.registers[14];break;case 27:this.registersUSR[0]=0|this.registers[8],this.registersUSR[1]=0|this.registers[9],this.registersUSR[2]=0|this.registers[10],this.registersUSR[3]=0|this.registers[11],this.registersUSR[4]=0|this.registers[12],this.registersUND[0]=0|this.registers[13],this.registersUND[1]=0|this.registers[14]}switch(0|t){case 16:case 31:this.registers[8]=0|this.registersUSR[0],this.registers[9]=0|this.registersUSR[1],this.registers[10]=0|this.registersUSR[2],this.registers[11]=0|this.registersUSR[3],this.registers[12]=0|this.registersUSR[4],this.registers[13]=0|this.registersUSR[5],this.registers[14]=0|this.registersUSR[6];break;case 17:this.registers[8]=0|this.registersFIQ[0],this.registers[9]=0|this.registersFIQ[1],this.registers[10]=0|this.registersFIQ[2],this.registers[11]=0|this.registersFIQ[3],this.registers[12]=0|this.registersFIQ[4],this.registers[13]=0|this.registersFIQ[5],this.registers[14]=0|this.registersFIQ[6];break;case 18:this.registers[8]=0|this.registersUSR[0],this.registers[9]=0|this.registersUSR[1],this.registers[10]=0|this.registersUSR[2],this.registers[11]=0|this.registersUSR[3],this.registers[12]=0|this.registersUSR[4],this.registers[13]=0|this.registersIRQ[0],this.registers[14]=0|this.registersIRQ[1];break;case 19:this.registers[8]=0|this.registersUSR[0],this.registers[9]=0|this.registersUSR[1],this.registers[10]=0|this.registersUSR[2],this.registers[11]=0|this.registersUSR[3],this.registers[12]=0|this.registersUSR[4],this.registers[13]=0|this.registersSVC[0],this.registers[14]=0|this.registersSVC[1];break;case 23:this.registers[8]=0|this.registersUSR[0],this.registers[9]=0|this.registersUSR[1],this.registers[10]=0|this.registersUSR[2],this.registers[11]=0|this.registersUSR[3],this.registers[12]=0|this.registersUSR[4],this.registers[13]=0|this.registersABT[0],this.registers[14]=0|this.registersABT[1];break;case 27:this.registers[8]=0|this.registersUSR[0],this.registers[9]=0|this.registersUSR[1],this.registers[10]=0|this.registersUSR[2],this.registers[11]=0|this.registersUSR[3],this.registers[12]=0|this.registersUSR[4],this.registers[13]=0|this.registersUND[0],this.registers[14]=0|this.registersUND[1]}},"function"==typeof Math.imul?GameBoyAdvanceCPU.prototype.calculateMUL32=Math.imul:GameBoyAdvanceCPU.prototype.calculateMUL32=function(t,e){return(((t|=0)>>16)*(e|=0)<<16)+(65535&t)*e|0},GameBoyAdvanceCPU.prototype.performMUL32=function(t,e){return t|=0,(e|=0)>>>8==0||e>>>8==16777215?this.IOCore.wait.CPUInternalSingleCyclePrefetch():e>>>16==0||e>>>16==65535?this.IOCore.wait.CPUInternalCyclePrefetch(2):e>>>24==0||e>>>24==255?this.IOCore.wait.CPUInternalCyclePrefetch(3):this.IOCore.wait.CPUInternalCyclePrefetch(4),0|this.calculateMUL32(0|t,0|e)},GameBoyAdvanceCPU.prototype.performMUL32MLA=function(t,e){return t|=0,(e|=0)>>>8==0||e>>>8==16777215?this.IOCore.wait.CPUInternalCyclePrefetch(2):e>>>16==0||e>>>16==65535?this.IOCore.wait.CPUInternalCyclePrefetch(3):e>>>24==0||e>>>24==255?this.IOCore.wait.CPUInternalCyclePrefetch(4):this.IOCore.wait.CPUInternalCyclePrefetch(5),0|this.calculateMUL32(0|t,0|e)},GameBoyAdvanceCPU.prototype.performMUL64=function(t,e){t|=0,(e|=0)>>>8==0||e>>>8==16777215?this.IOCore.wait.CPUInternalCyclePrefetch(2):e>>>16==0||e>>>16==65535?this.IOCore.wait.CPUInternalCyclePrefetch(3):e>>>24==0||e>>>24==255?this.IOCore.wait.CPUInternalCyclePrefetch(4):this.IOCore.wait.CPUInternalCyclePrefetch(5),this.mul64ResultHigh=0|Math.floor(t*e/4294967296),this.mul64ResultLow=0|this.calculateMUL32(0|t,0|e)},GameBoyAdvanceCPU.prototype.performMLA64=function(t,e,s,i){t|=0,s|=0,i|=0,(e|=0)>>>8==0||e>>>8==16777215?this.IOCore.wait.CPUInternalCyclePrefetch(3):e>>>16==0||e>>>16==65535?this.IOCore.wait.CPUInternalCyclePrefetch(4):e>>>24==0||e>>>24==255?this.IOCore.wait.CPUInternalCyclePrefetch(5):this.IOCore.wait.CPUInternalCyclePrefetch(6);var r=0|Math.floor(t*e/4294967296),h=(this.calculateMUL32(0|t,0|e)>>>0)+(i>>>0);this.mul64ResultHigh=(0|r)+(0|s)+Math.floor(h/4294967296)|0,this.mul64ResultLow=0|h},GameBoyAdvanceCPU.prototype.performUMUL64=function(t,e){t|=0,(e|=0)>>>8==0?this.IOCore.wait.CPUInternalCyclePrefetch(2):e>>>16==0?this.IOCore.wait.CPUInternalCyclePrefetch(3):e>>>24==0?this.IOCore.wait.CPUInternalCyclePrefetch(4):this.IOCore.wait.CPUInternalCyclePrefetch(5),this.mul64ResultHigh=(t>>>0)*(e>>>0)/4294967296|0,this.mul64ResultLow=0|this.calculateMUL32(0|t,0|e)},GameBoyAdvanceCPU.prototype.performUMLA64=function(t,e,s,i){t|=0,s|=0,i|=0,(e|=0)>>>8==0?this.IOCore.wait.CPUInternalCyclePrefetch(3):e>>>16==0?this.IOCore.wait.CPUInternalCyclePrefetch(4):e>>>24==0?this.IOCore.wait.CPUInternalCyclePrefetch(5):this.IOCore.wait.CPUInternalCyclePrefetch(6);var r=0|Math.floor((t>>>0)*(e>>>0)/4294967296),h=(this.calculateMUL32(0|t,0|e)>>>0)+(i>>>0);this.mul64ResultHigh=(0|r)+(0|s)+Math.floor(h/4294967296)|0,this.mul64ResultLow=0|h},GameBoyAdvanceCPU.prototype.write32=function(t,e){t|=0,e|=0,this.IOCore.wait.NonSequentialBroadcast(),this.memory.memoryWrite32(0|t,0|e),this.IOCore.wait.NonSequentialBroadcast()},GameBoyAdvanceCPU.prototype.write16=function(t,e){t|=0,e|=0,this.IOCore.wait.NonSequentialBroadcast(),this.memory.memoryWrite16(0|t,0|e),this.IOCore.wait.NonSequentialBroadcast()},GameBoyAdvanceCPU.prototype.write8=function(t,e){t|=0,e|=0,this.IOCore.wait.NonSequentialBroadcast(),this.memory.memoryWrite8(0|t,0|e),this.IOCore.wait.NonSequentialBroadcast()},GameBoyAdvanceCPU.prototype.read32=function(t){t|=0,this.IOCore.wait.NonSequentialBroadcast();var e=0|this.memory.memoryRead32(0|t);return 0!=(3&t)&&(e=e<<(4-(3&t)<<3)|e>>>((3&t)<<3)),this.IOCore.wait.NonSequentialBroadcast(),0|e},GameBoyAdvanceCPU.prototype.read16=function(t){t|=0,this.IOCore.wait.NonSequentialBroadcast();var e=0|this.memory.memoryRead16(0|t);return 0!=(1&t)&&(e=e<<24|e>>>8),this.IOCore.wait.NonSequentialBroadcast(),0|e},GameBoyAdvanceCPU.prototype.read8=function(t){t|=0,this.IOCore.wait.NonSequentialBroadcast();var e=0|this.memory.memoryRead8(0|t);return this.IOCore.wait.NonSequentialBroadcast(),0|e};
//# sourceMappingURL=build-index.e6dfe845.js.map
