function SaveState(IOCore) {

    /* Cartridge Reference */
    this.romCode                   = structuredClone(IOCore.cartridge.romCode               );

    /* General */
    this.accumulatedClocks            = structuredClone(IOCore.accumulatedClocks            );
    this.cyclesOveriteratedPreviously = structuredClone(IOCore.cyclesOveriteratedPreviously );
    this.cyclesToIterate              = structuredClone(IOCore.cyclesToIterate              );
    this.graphicsClocks               = structuredClone(IOCore.graphicsClocks               );
    this.nextEventClocks              = structuredClone(IOCore.nextEventClocks              );
    this.systemStatus                 = structuredClone(IOCore.systemStatus                 );
    this.timerClocks                  = structuredClone(IOCore.timerClocks                  );

    /* Memory */
    this.internalRAM               = structuredClone(IOCore.memory.internalRAM             );
    this.externalRAM               = structuredClone(IOCore.memory.externalRAM             );
    this.WRAMControlFlags          = structuredClone(IOCore.memory.WRAMControlFlags        );
    this.lastBIOSREAD              = structuredClone(IOCore.memory.lastBIOSREAD            );
  
    /* DMA */
    this.dma = {};  
    this.dma.currentMatch          = structuredClone(IOCore.dma.currentMatch               );
    this.dma.fetch                 = structuredClone(IOCore.dma.fetch                      );

    this.dma0 = {}; 
    this.dma0.destination          = structuredClone(IOCore.dmaChannel0.destination        );     
    this.dma0.destinationControl   = structuredClone(IOCore.dmaChannel0.destinationControl );                   
    this.dma0.destinationShadow    = structuredClone(IOCore.dmaChannel0.destinationShadow  );                 
    this.dma0.dmaType              = structuredClone(IOCore.dmaChannel0.dmaType            );        
    this.dma0.enabled              = structuredClone(IOCore.dmaChannel0.enabled            );         
    this.dma0.irqFlagging          = structuredClone(IOCore.dmaChannel0.irqFlagging        );     
    this.dma0.is32Bit              = structuredClone(IOCore.dmaChannel0.is32Bit            );         
    this.dma0.pending              = structuredClone(IOCore.dmaChannel0.pending            );          
    this.dma0.repeat               = structuredClone(IOCore.dmaChannel0.repeat             );       
    this.dma0.source               = structuredClone(IOCore.dmaChannel0.source             );      
    this.dma0.sourceControl        = structuredClone(IOCore.dmaChannel0.sourceControl      );         
    this.dma0.sourceShadow         = structuredClone(IOCore.dmaChannel0.sourceShadow       );       
    this.dma0.wordCount            = structuredClone(IOCore.dmaChannel0.wordCount          );              
    this.dma0.wordCountShadow      = structuredClone(IOCore.dmaChannel0.wordCountShadow    );
    
    this.dma1 = {}; 
    this.dma1.destination          = structuredClone(IOCore.dmaChannel1.destination        );     
    this.dma1.destinationControl   = structuredClone(IOCore.dmaChannel1.destinationControl );                   
    this.dma1.destinationShadow    = structuredClone(IOCore.dmaChannel1.destinationShadow  );                 
    this.dma1.dmaType              = structuredClone(IOCore.dmaChannel1.dmaType            );        
    this.dma1.enabled              = structuredClone(IOCore.dmaChannel1.enabled            );         
    this.dma1.irqFlagging          = structuredClone(IOCore.dmaChannel1.irqFlagging        );     
    this.dma1.is32Bit              = structuredClone(IOCore.dmaChannel1.is32Bit            );         
    this.dma1.pending              = structuredClone(IOCore.dmaChannel1.pending            );          
    this.dma1.repeat               = structuredClone(IOCore.dmaChannel1.repeat             );       
    this.dma1.source               = structuredClone(IOCore.dmaChannel1.source             );      
    this.dma1.sourceControl        = structuredClone(IOCore.dmaChannel1.sourceControl      );         
    this.dma1.sourceShadow         = structuredClone(IOCore.dmaChannel1.sourceShadow       );       
    this.dma1.wordCount            = structuredClone(IOCore.dmaChannel1.wordCount          );              
    this.dma1.wordCountShadow      = structuredClone(IOCore.dmaChannel1.wordCountShadow    );     

    this.dma2 = {}; 
    this.dma2.destination          = structuredClone(IOCore.dmaChannel2.destination        );     
    this.dma2.destinationControl   = structuredClone(IOCore.dmaChannel2.destinationControl );                   
    this.dma2.destinationShadow    = structuredClone(IOCore.dmaChannel2.destinationShadow  );                 
    this.dma2.dmaType              = structuredClone(IOCore.dmaChannel2.dmaType            );        
    this.dma2.enabled              = structuredClone(IOCore.dmaChannel2.enabled            );         
    this.dma2.irqFlagging          = structuredClone(IOCore.dmaChannel2.irqFlagging        );     
    this.dma2.is32Bit              = structuredClone(IOCore.dmaChannel2.is32Bit            );         
    this.dma2.pending              = structuredClone(IOCore.dmaChannel2.pending            );          
    this.dma2.repeat               = structuredClone(IOCore.dmaChannel2.repeat             );       
    this.dma2.source               = structuredClone(IOCore.dmaChannel2.source             );      
    this.dma2.sourceControl        = structuredClone(IOCore.dmaChannel2.sourceControl      );         
    this.dma2.sourceShadow         = structuredClone(IOCore.dmaChannel2.sourceShadow       );       
    this.dma2.wordCount            = structuredClone(IOCore.dmaChannel2.wordCount          );              
    this.dma2.wordCountShadow      = structuredClone(IOCore.dmaChannel2.wordCountShadow    );

    this.dma3 = {}; 
    this.dma3.destination            =  structuredClone(IOCore.dmaChannel3.destination            );      
    this.dma3.destinationControl     =  structuredClone(IOCore.dmaChannel3.destinationControl     );             
    this.dma3.destinationShadow      =  structuredClone(IOCore.dmaChannel3.destinationShadow      );            
    this.dma3.displaySyncEnableDelay =  structuredClone(IOCore.dmaChannel3.displaySyncEnableDelay );                 
    this.dma3.dmaType                =  structuredClone(IOCore.dmaChannel3.dmaType                );  
    this.dma3.enabled                =  structuredClone(IOCore.dmaChannel3.enabled                );  
    this.dma3.gamePakDMA             =  structuredClone(IOCore.dmaChannel3.gamePakDMA             );     
    this.dma3.irqFlagging            =  structuredClone(IOCore.dmaChannel3.irqFlagging            );      
    this.dma3.is32Bit                =  structuredClone(IOCore.dmaChannel3.is32Bit                );  
    this.dma3.pending                =  structuredClone(IOCore.dmaChannel3.pending                );  
    this.dma3.repeat                 =  structuredClone(IOCore.dmaChannel3.repeat                 ); 
    this.dma3.source                 =  structuredClone(IOCore.dmaChannel3.source                 ); 
    this.dma3.sourceControl          =  structuredClone(IOCore.dmaChannel3.sourceControl          );        
    this.dma3.sourceShadow           =  structuredClone(IOCore.dmaChannel3.sourceShadow           );       
    this.dma3.wordCount              =  structuredClone(IOCore.dmaChannel3.wordCount              );    
    this.dma3.wordCountShadow        =  structuredClone(IOCore.dmaChannel3.wordCountShadow        );          
    
    /* CPU */               
    this.registers                 = structuredClone(IOCore.cpu.registers                );
    this.registersUSR              = structuredClone(IOCore.cpu.registersUSR             );
    this.registersFIQ              = structuredClone(IOCore.cpu.registersFIQ             );
    this.registersSVC              = structuredClone(IOCore.cpu.registersSVC             );
    this.registersABT              = structuredClone(IOCore.cpu.registersABT             );
    this.registersIRQ              = structuredClone(IOCore.cpu.registersIRQ             );
    this.registersUND              = structuredClone(IOCore.cpu.registersUND             );
    this.modeFlags                 = structuredClone(IOCore.cpu.modeFlags                );
    this.SPSR                      = structuredClone(IOCore.cpu.SPSR                     );
    this.mul64ResultHigh           = structuredClone(IOCore.cpu.mul64ResultHigh          );
    this.mul64ResultLow            = structuredClone(IOCore.cpu.mul64ResultLow           );
    this.triggeredIRQ              = structuredClone(IOCore.cpu.triggeredIRQ             );

    this.THUMB = {};
    this.THUMB.decode              = structuredClone(IOCore.THUMB.decode                 );
    this.THUMB.execute             = structuredClone(IOCore.THUMB.execute                );
    this.THUMB.fetch               = structuredClone(IOCore.THUMB.fetch                  );

    this.ARM = {};
    this.ARM.decode                = structuredClone(IOCore.ARM.decode                   );
    this.ARM.execute               = structuredClone(IOCore.ARM.execute                  );
    this.ARM.fetch                 = structuredClone(IOCore.ARM.fetch                    );
         
    /* Timers */         
    this.timer0Counter             = structuredClone(IOCore.timer.timer0Counter          );
    this.timer0Reload              = structuredClone(IOCore.timer.timer0Reload           );
    this.timer0Control             = structuredClone(IOCore.timer.timer0Control          );
    this.timer0Enabled             = structuredClone(IOCore.timer.timer0Enabled          ); 
    this.timer0IRQ                 = structuredClone(IOCore.timer.timer0IRQ              ); 
    this.timer0Precounter          = structuredClone(IOCore.timer.timer0Precounter       );
    this.timer0Prescalar           = structuredClone(IOCore.timer.timer0Prescalar        );
    this.timer0PrescalarShifted    = structuredClone(IOCore.timer.timer0PrescalarShifted );
    this.timer1Counter             = structuredClone(IOCore.timer.timer1Counter          );
    this.timer1Reload              = structuredClone(IOCore.timer.timer1Reload           );
    this.timer1Control             = structuredClone(IOCore.timer.timer1Control          );
    this.timer1Enabled             = structuredClone(IOCore.timer.timer1Enabled          ); 
    this.timer1IRQ                 = structuredClone(IOCore.timer.timer1IRQ              ); 
    this.timer1Precounter          = structuredClone(IOCore.timer.timer1Precounter       );
    this.timer1Prescalar           = structuredClone(IOCore.timer.timer1Prescalar        );
    this.timer1PrescalarShifted    = structuredClone(IOCore.timer.timer1PrescalarShifted );
    this.timer1CountUp             = structuredClone(IOCore.timer.timer1CountUp          ); 
    this.timer2Counter             = structuredClone(IOCore.timer.timer2Counter          );
    this.timer2Reload              = structuredClone(IOCore.timer.timer2Reload           );
    this.timer2Control             = structuredClone(IOCore.timer.timer2Control          );
    this.timer2Enabled             = structuredClone(IOCore.timer.timer2Enabled          ); 
    this.timer2IRQ                 = structuredClone(IOCore.timer.timer2IRQ              ); 
    this.timer2Precounter          = structuredClone(IOCore.timer.timer2Precounter       );
    this.timer2Prescalar           = structuredClone(IOCore.timer.timer2Prescalar        );
    this.timer2PrescalarShifted    = structuredClone(IOCore.timer.timer2PrescalarShifted );
    this.timer2CountUp             = structuredClone(IOCore.timer.timer2CountUp          ); 
    this.timer3Counter             = structuredClone(IOCore.timer.timer3Counter          );
    this.timer3Reload              = structuredClone(IOCore.timer.timer3Reload           );
    this.timer3Control             = structuredClone(IOCore.timer.timer3Control          );
    this.timer3Enabled             = structuredClone(IOCore.timer.timer3Enabled          ); 
    this.timer3IRQ                 = structuredClone(IOCore.timer.timer3IRQ              ); 
    this.timer3Precounter          = structuredClone(IOCore.timer.timer3Precounter       );
    this.timer3Prescalar           = structuredClone(IOCore.timer.timer3Prescalar        );
    this.timer3PrescalarShifted    = structuredClone(IOCore.timer.timer3PrescalarShifted );
    this.timer3CountUp             = structuredClone(IOCore.timer.timer3CountUp          ); 
    this.timer1UseMainClocks       = structuredClone(IOCore.timer.timer1UseMainClocks    ); 
    this.timer1UseChainedClocks    = structuredClone(IOCore.timer.timer1UseChainedClocks ); 
    this.timer2UseMainClocks       = structuredClone(IOCore.timer.timer2UseMainClocks    ); 
    this.timer2UseChainedClocks    = structuredClone(IOCore.timer.timer2UseChainedClocks ); 
    this.timer3UseMainClocks       = structuredClone(IOCore.timer.timer3UseMainClocks    ); 
    this.timer3UseChainedClocks    = structuredClone(IOCore.timer.timer3UseChainedClocks );  
   
    /* Wait */   
    this.WRAMConfiguration         = structuredClone(IOCore.wait.WRAMConfiguration       );  
    this.WRAMWaitState             = structuredClone(IOCore.wait.WRAMWaitState           );      
    this.SRAMWaitState             = structuredClone(IOCore.wait.SRAMWaitState           );      
    this.WAITCNT0                  = structuredClone(IOCore.wait.WAITCNT0                );           
    this.WAITCNT1                  = structuredClone(IOCore.wait.WAITCNT1                );           
    this.POSTBOOT                  = structuredClone(IOCore.wait.POSTBOOT                );           
    this.isRendering               = structuredClone(IOCore.wait.isRendering             );        
    this.isOAMRendering            = structuredClone(IOCore.wait.isOAMRendering          );     
    this.nonSequential             = structuredClone(IOCore.wait.nonSequential           );      
    this.buffer                    = structuredClone(IOCore.wait.buffer                  );             
    this.clocks                    = structuredClone(IOCore.wait.clocks                  );         


    /* Serial */
    this.SIODATA_A                 = structuredClone(IOCore.serial.SIODATA_A                );     
    this.SIODATA_B                 = structuredClone(IOCore.serial.SIODATA_B                );     
    this.SIODATA_C                 = structuredClone(IOCore.serial.SIODATA_C                );     
    this.SIODATA_D                 = structuredClone(IOCore.serial.SIODATA_D                );     
    this.SIOShiftClockExternal     = structuredClone(IOCore.serial.SIOShiftClockExternal    );     
    this.SIOShiftClockDivider      = structuredClone(IOCore.serial.SIOShiftClockDivider     );     
    this.SIOCNT0_DATA              = structuredClone(IOCore.serial.SIOCNT0_DATA             );     
    this.SIOTransferStarted        = structuredClone(IOCore.serial.SIOTransferStarted       );     
    this.SIOMULT_PLAYER_NUMBER     = structuredClone(IOCore.serial.SIOMULT_PLAYER_NUMBER    );     
    this.SIOCOMMERROR              = structuredClone(IOCore.serial.SIOCOMMERROR             );     
    this.SIOBaudRate               = structuredClone(IOCore.serial.SIOBaudRate              );     
    this.SIOCNT_UART_CTS           = structuredClone(IOCore.serial.SIOCNT_UART_CTS          );   
    this.SIOCNT_UART_MISC          = structuredClone(IOCore.serial.SIOCNT_UART_MISC         );     
    this.SIOCNT_UART_FIFO          = structuredClone(IOCore.serial.SIOCNT_UART_FIFO         );     
    this.SIOCNT_IRQ                = structuredClone(IOCore.serial.SIOCNT_IRQ               );     
    this.SIOCNT_MODE               = structuredClone(IOCore.serial.SIOCNT_MODE              );     
    this.SIOCNT_UART_RECV_ENABLE   = structuredClone(IOCore.serial.SIOCNT_UART_RECV_ENABLE  );      
    this.SIOCNT_UART_SEND_ENABLE   = structuredClone(IOCore.serial.SIOCNT_UART_SEND_ENABLE  );      
    this.SIOCNT_UART_PARITY_ENABLE = structuredClone(IOCore.serial.SIOCNT_UART_PARITY_ENABLE);       
    this.SIOCNT_UART_FIFO_ENABLE   = structuredClone(IOCore.serial.SIOCNT_UART_FIFO_ENABLE  );      
    this.SIODATA8                  = structuredClone(IOCore.serial.SIODATA8                 );     
    this.RCNTMode                  = structuredClone(IOCore.serial.RCNTMode                 );     
    this.RCNTIRQ                   = structuredClone(IOCore.serial.RCNTIRQ                  );   
    this.RCNTDataBits              = structuredClone(IOCore.serial.RCNTDataBits             );     
    this.RCNTDataBitFlow           = structuredClone(IOCore.serial.RCNTDataBitFlow          );     
    this.JOYBUS_IRQ                = structuredClone(IOCore.serial.JOYBUS_IRQ               );     
    this.JOYBUS_CNTL_FLAGS         = structuredClone(IOCore.serial.JOYBUS_CNTL_FLAGS        );     
    this.JOYBUS_RECV0              = structuredClone(IOCore.serial.JOYBUS_RECV0             );     
    this.JOYBUS_RECV1              = structuredClone(IOCore.serial.JOYBUS_RECV1             );     
    this.JOYBUS_RECV2              = structuredClone(IOCore.serial.JOYBUS_RECV2             );     
    this.JOYBUS_RECV3              = structuredClone(IOCore.serial.JOYBUS_RECV3             );     
    this.JOYBUS_SEND0              = structuredClone(IOCore.serial.JOYBUS_SEND0             );     
    this.JOYBUS_SEND1              = structuredClone(IOCore.serial.JOYBUS_SEND1             );     
    this.JOYBUS_SEND2              = structuredClone(IOCore.serial.JOYBUS_SEND2             );     
    this.JOYBUS_SEND3              = structuredClone(IOCore.serial.JOYBUS_SEND3             );     
    this.JOYBUS_STAT               = structuredClone(IOCore.serial.JOYBUS_STAT              );     
    this.shiftClocks               = structuredClone(IOCore.serial.shiftClocks              );     
    this.serialBitsShifted         = structuredClone(IOCore.serial.serialBitsShifted        );     

    /* Run Loop */
    this.systemStatus                  = structuredClone(IOCore.systemStatus                );
    this.cyclesToIterate               = structuredClone(IOCore.cyclesToIterate             );
    this.cyclesOveriteratedPreviously  = structuredClone(IOCore.cyclesOveriteratedPreviously);
    this.accumulatedClocks             = structuredClone(IOCore.accumulatedClocks           );
    this.graphicsClocks                = structuredClone(IOCore.graphicsClocks              );
    this.timerClocks                   = structuredClone(IOCore.timerClocks                 );
    this.serialClocks                  = structuredClone(IOCore.serialClocks                );
    this.nextEventClocks               = structuredClone(IOCore.nextEventClocks             );

    /* IRQ */
    this.interruptsEnabled             = structuredClone(IOCore.irq.interruptsEnabled       );
    this.interruptsRequested           = structuredClone(IOCore.irq.interruptsRequested     );
    this.IME                           = structuredClone(IOCore.irq.IME                     );

    /* Video */
    this.renderedScanLine              = structuredClone(IOCore.gfxState.renderedScanLine   );
    this.statusFlags                   = structuredClone(IOCore.gfxState.statusFlags        );
    this.IRQFlags                      = structuredClone(IOCore.gfxState.IRQFlags           );
    this.VCounter                      = structuredClone(IOCore.gfxState.VCounter           );
    this.currentScanLine               = structuredClone(IOCore.gfxState.currentScanLine    );
    this.LCDTicks                      = structuredClone(IOCore.gfxState.LCDTicks           );

    this.IOData8                       = structuredClone(IOCore.gfxRenderer.IOData8         );

    this.renderer = {};
    this.renderer.displayControl                = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.displayControl     ); 
    this.renderer.display                       = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.display            ); 
    this.renderer.greenSwap                     = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.greenSwap          ); 
    this.renderer.WINOutside                    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.WINOutside         ); 
    this.renderer.paletteRAM                    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.paletteRAM         ); 
    this.renderer.VRAM                          = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.VRAM               ); 
    this.renderer.buffer                        = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.buffer             ); 
    this.renderer.frameBuffer                   = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.frameBuffer        ); 
    this.renderer.swizzledFrame                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.swizzledFrame      ); 
    this.renderer.totalLinesPassed              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.totalLinesPassed   ); 
    this.renderer.queuedScanLines               = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.queuedScanLines    ); 
    this.renderer.lastUnrenderedLine            = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.lastUnrenderedLine ); 
    this.renderer.backdrop                      = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.backdrop           ); 
    this.renderer.palette256                    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.palette256         ); 
    this.renderer.paletteOBJ256                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.paletteOBJ256      ); 
    this.renderer.palette16                     = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.palette16          ); 
    this.renderer.paletteOBJ16                  = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.paletteOBJ16       );
    
    this.renderer.lineBuffer                    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.lineBuffer         );

    this.renderer.compositor = {};
    this.renderer.compositor.buffer             = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.compositor.buffer   );   
    this.renderer.compositor.doEffects          = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.compositor.doEffects); 

    this.renderer.bg0Renderer = {};
    this.renderer.bg0Renderer.BGCharacterBaseBlock  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.BGCharacterBaseBlock    );
    this.renderer.bg0Renderer.BGLayer               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.BGLayer                 );
    this.renderer.bg0Renderer.BGScreenBaseBlock     =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.BGScreenBaseBlock       );
    this.renderer.bg0Renderer.BGXCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.BGXCoord                );
    this.renderer.bg0Renderer.BGYCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.BGYCoord                );
    this.renderer.bg0Renderer.do256                 =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.do256                   );
    this.renderer.bg0Renderer.doMosaic              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.doMosaic                );
    this.renderer.bg0Renderer.offset                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.offset                  );
    this.renderer.bg0Renderer.priorityFlag          =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.priorityFlag            );
    this.renderer.bg0Renderer.tileFetched           =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.tileFetched             );
    this.renderer.bg0Renderer.tileMode              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer.tileMode                );

    this.renderer.bg1Renderer = {};
    this.renderer.bg1Renderer.BGCharacterBaseBlock  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.BGCharacterBaseBlock    );
    this.renderer.bg1Renderer.BGLayer               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.BGLayer                 );
    this.renderer.bg1Renderer.BGScreenBaseBlock     =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.BGScreenBaseBlock       );
    this.renderer.bg1Renderer.BGXCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.BGXCoord                );
    this.renderer.bg1Renderer.BGYCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.BGYCoord                );
    this.renderer.bg1Renderer.do256                 =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.do256                   );
    this.renderer.bg1Renderer.doMosaic              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.doMosaic                );
    this.renderer.bg1Renderer.offset                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.offset                  );
    this.renderer.bg1Renderer.priorityFlag          =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.priorityFlag            );
    this.renderer.bg1Renderer.tileFetched           =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.tileFetched             );
    this.renderer.bg1Renderer.tileMode              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer.tileMode                );

    this.renderer.bg2TextRenderer = {};
    this.renderer.bg2TextRenderer.BGCharacterBaseBlock  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.BGCharacterBaseBlock );
    this.renderer.bg2TextRenderer.BGLayer               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.BGLayer              );
    this.renderer.bg2TextRenderer.BGScreenBaseBlock     =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.BGScreenBaseBlock    );
    this.renderer.bg2TextRenderer.BGXCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.BGXCoord             );
    this.renderer.bg2TextRenderer.BGYCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.BGYCoord             );
    this.renderer.bg2TextRenderer.do256                 =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.do256                );
    this.renderer.bg2TextRenderer.doMosaic              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.doMosaic             );
    this.renderer.bg2TextRenderer.offset                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.offset               );
    this.renderer.bg2TextRenderer.priorityFlag          =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.priorityFlag         );
    this.renderer.bg2TextRenderer.tileFetched           =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.tileFetched          );
    this.renderer.bg2TextRenderer.tileMode              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer.tileMode             );

    this.renderer.bg3TextRenderer = {};
    this.renderer.bg3TextRenderer.BGCharacterBaseBlock  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.BGCharacterBaseBlock );
    this.renderer.bg3TextRenderer.BGLayer               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.BGLayer              );
    this.renderer.bg3TextRenderer.BGScreenBaseBlock     =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.BGScreenBaseBlock    );
    this.renderer.bg3TextRenderer.BGXCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.BGXCoord             );
    this.renderer.bg3TextRenderer.BGYCoord              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.BGYCoord             );
    this.renderer.bg3TextRenderer.do256                 =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.do256                );
    this.renderer.bg3TextRenderer.doMosaic              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.doMosaic             );
    this.renderer.bg3TextRenderer.offset                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.offset               );
    this.renderer.bg3TextRenderer.priorityFlag          =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.priorityFlag         );
    this.renderer.bg3TextRenderer.tileFetched           =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.tileFetched          );
    this.renderer.bg3TextRenderer.tileMode              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer.tileMode             );

    this.renderer.bgAffineRenderer0 = {};
    this.renderer.bgAffineRenderer0.BGLayer             =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGLayer            );       
    this.renderer.bgAffineRenderer0.BGReferenceX        =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGReferenceX       );            
    this.renderer.bgAffineRenderer0.BGReferenceY        =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGReferenceY       );            
    this.renderer.bgAffineRenderer0.BGdmx               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdmx              );     
    this.renderer.bgAffineRenderer0.BGdmy               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdmy              );     
    this.renderer.bgAffineRenderer0.BGdx                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdx               );    
    this.renderer.bgAffineRenderer0.BGdy                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.BGdy               );    
    this.renderer.bgAffineRenderer0.doMosaic            =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.doMosaic           );        
    this.renderer.bgAffineRenderer0.offset              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.offset             );      
    this.renderer.bgAffineRenderer0.pb                  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.pb                 );  
    this.renderer.bgAffineRenderer0.pd                  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.pd                 );  
    this.renderer.bgAffineRenderer0.priorityFlag        =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0.priorityFlag       );   
    
    this.renderer.bgAffineRenderer1 = {};
    this.renderer.bgAffineRenderer1.BGLayer             =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGLayer            );       
    this.renderer.bgAffineRenderer1.BGReferenceX        =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGReferenceX       );            
    this.renderer.bgAffineRenderer1.BGReferenceY        =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGReferenceY       );            
    this.renderer.bgAffineRenderer1.BGdmx               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdmx              );     
    this.renderer.bgAffineRenderer1.BGdmy               =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdmy              );     
    this.renderer.bgAffineRenderer1.BGdx                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdx               );    
    this.renderer.bgAffineRenderer1.BGdy                =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.BGdy               );    
    this.renderer.bgAffineRenderer1.doMosaic            =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.doMosaic           );        
    this.renderer.bgAffineRenderer1.offset              =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.offset             );      
    this.renderer.bgAffineRenderer1.pb                  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.pb                 );  
    this.renderer.bgAffineRenderer1.pd                  =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.pd                 );  
    this.renderer.bgAffineRenderer1.priorityFlag        =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1.priorityFlag       );    

    this.renderer.bg2FrameBufferRenderer = {};
    this.renderer.bg2FrameBufferRenderer.frameSelect    =  structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2FrameBufferRenderer.frameSelect   );

    this.renderer.bg2MatrixRenderer = {};
    this.renderer.bg2MatrixRenderer.BGCharacterBaseBlock = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer.BGCharacterBaseBlock);                
    this.renderer.bg2MatrixRenderer.BGDisplayOverflow    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer.BGDisplayOverflow   );             
    this.renderer.bg2MatrixRenderer.BGScreenBaseBlock    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer.BGScreenBaseBlock   );             
    this.renderer.bg2MatrixRenderer.mapSize              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer.mapSize             );   
    this.renderer.bg2MatrixRenderer.mapSizeComparer      = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer.mapSizeComparer     );              

    this.renderer.bg3MatrixRenderer = {};
    this.renderer.bg3MatrixRenderer.BGCharacterBaseBlock = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer.BGCharacterBaseBlock);                
    this.renderer.bg3MatrixRenderer.BGDisplayOverflow    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer.BGDisplayOverflow   );             
    this.renderer.bg3MatrixRenderer.BGScreenBaseBlock    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer.BGScreenBaseBlock   );             
    this.renderer.bg3MatrixRenderer.mapSize              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer.mapSize             );   
    this.renderer.bg3MatrixRenderer.mapSizeComparer      = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer.mapSizeComparer     );   

    this.renderer.colorEffectsRenderer = {};
    this.renderer.colorEffectsRenderer.alphaBlendAmountTarget1 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer.alphaBlendAmountTarget1);
    this.renderer.colorEffectsRenderer.alphaBlendAmountTarget2 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer.alphaBlendAmountTarget2);
    this.renderer.colorEffectsRenderer.brightnessEffectAmount  = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer.brightnessEffectAmount );
    this.renderer.colorEffectsRenderer.colorEffectsType        = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer.colorEffectsType       );
    this.renderer.colorEffectsRenderer.effectsTarget1          = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer.effectsTarget1         );
    this.renderer.colorEffectsRenderer.effectsTarget2          = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer.effectsTarget2         );

    this.renderer.mosaicRenderer = {};
    this.renderer.mosaicRenderer.BGMosaicHSize                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer.BGMosaicHSize );
    this.renderer.mosaicRenderer.BGMosaicVSize                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer.BGMosaicVSize );
    this.renderer.mosaicRenderer.OBJMosaicHSize                = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer.OBJMosaicHSize);
    this.renderer.mosaicRenderer.OBJMosaicVSize                = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer.OBJMosaicVSize);

    this.renderer.objRenderer = {};
    this.renderer.objRenderer.cyclesToRender                   = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer.cyclesToRender     );
    this.renderer.objRenderer.OAMRAM                           = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer.OAMRAM             );
    this.renderer.objRenderer.scratchBuffer                    = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer.scratchBuffer      );
    this.renderer.objRenderer.scratchWindowBuffer              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer.scratchWindowBuffer);
    this.renderer.objRenderer.scratchOBJBuffer                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer.scratchOBJBuffer   );
    this.renderer.objRenderer.OBJMatrixParameters              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer.OBJMatrixParameters);

    this.renderer.objWindowRenderer = {};
    this.renderer.objWindowRenderer.WINOBJOutside              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objWindowRenderer.WINOBJOutside);

    this.renderer.window0Renderer = {};
    this.renderer.window0Renderer.WINXCoordLeft                = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer.WINXCoordLeft       );
    this.renderer.window0Renderer.WINXCoordRight               = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer.WINXCoordRight      );
    this.renderer.window0Renderer.WINYCoordBottom              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer.WINYCoordBottom     );
    this.renderer.window0Renderer.WINYCoordTop                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer.WINYCoordTop        );
    this.renderer.window0Renderer.windowDisplayControl         = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer.windowDisplayControl);

    this.renderer.window1Renderer = {};
    this.renderer.window1Renderer.WINXCoordLeft                = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer.WINXCoordLeft       );
    this.renderer.window1Renderer.WINXCoordRight               = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer.WINXCoordRight      );
    this.renderer.window1Renderer.WINYCoordBottom              = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer.WINYCoordBottom     );
    this.renderer.window1Renderer.WINYCoordTop                 = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer.WINYCoordTop        );
    this.renderer.window1Renderer.windowDisplayControl         = structuredClone(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer.windowDisplayControl);

    /* Audio */
    this.AGBDirectSoundA                    =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundA                  );
    this.AGBDirectSoundAFolded              =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundAFolded            );
    this.AGBDirectSoundALeftCanPlay         =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundALeftCanPlay       );
    this.AGBDirectSoundARightCanPlay        =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundARightCanPlay      );
    this.AGBDirectSoundAShifter             =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundAShifter           );
    this.AGBDirectSoundATimer               =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundATimer             );
    this.AGBDirectSoundB                    =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundB                  );
    this.AGBDirectSoundBFolded              =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundBFolded            );
    this.AGBDirectSoundBLeftCanPlay         =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundBLeftCanPlay       );
    this.AGBDirectSoundBRightCanPlay        =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundBRightCanPlay      );
    this.AGBDirectSoundBShifter             =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundBShifter           );
    this.AGBDirectSoundBTimer               =  structuredClone(IodineGUI.Iodine.IOCore.sound.AGBDirectSoundBTimer             );
    this.CGBMixerOutputCacheLeft            =  structuredClone(IodineGUI.Iodine.IOCore.sound.CGBMixerOutputCacheLeft          );
    this.CGBMixerOutputCacheLeftFolded      =  structuredClone(IodineGUI.Iodine.IOCore.sound.CGBMixerOutputCacheLeftFolded    );
    this.CGBMixerOutputCacheRight           =  structuredClone(IodineGUI.Iodine.IOCore.sound.CGBMixerOutputCacheRight         );
    this.CGBMixerOutputCacheRightFolded     =  structuredClone(IodineGUI.Iodine.IOCore.sound.CGBMixerOutputCacheRightFolded   );
    this.CGBOutputRatio                     =  structuredClone(IodineGUI.Iodine.IOCore.sound.CGBOutputRatio                   );
    this.PWMBitDepthMask                    =  structuredClone(IodineGUI.Iodine.IOCore.sound.PWMBitDepthMask                  );
    this.PWMBitDepthMaskShadow              =  structuredClone(IodineGUI.Iodine.IOCore.sound.PWMBitDepthMaskShadow            );
    this.PWMWidth                           =  structuredClone(IodineGUI.Iodine.IOCore.sound.PWMWidth                         );
    this.PWMWidthOld                        =  structuredClone(IodineGUI.Iodine.IOCore.sound.PWMWidthOld                      );
    this.PWMWidthShadow                     =  structuredClone(IodineGUI.Iodine.IOCore.sound.PWMWidthShadow                   );
    this.VinLeftChannelMasterVolume         =  structuredClone(IodineGUI.Iodine.IOCore.sound.VinLeftChannelMasterVolume       );
    this.VinRightChannelMasterVolume        =  structuredClone(IodineGUI.Iodine.IOCore.sound.VinRightChannelMasterVolume      );
    this.audioClocksUntilNextEvent          =  structuredClone(IodineGUI.Iodine.IOCore.sound.audioClocksUntilNextEvent        );
    this.audioClocksUntilNextEventCounter   =  structuredClone(IodineGUI.Iodine.IOCore.sound.audioClocksUntilNextEventCounter );
    this.audioIndex                         =  structuredClone(IodineGUI.Iodine.IOCore.sound.audioIndex                       );
    this.audioResamplerFirstPassFactor      =  structuredClone(IodineGUI.Iodine.IOCore.sound.audioResamplerFirstPassFactor    );
    this.audioTicks                         =  structuredClone(IodineGUI.Iodine.IOCore.sound.audioTicks                       );
    this.downsampleInputLeft                =  structuredClone(IodineGUI.Iodine.IOCore.sound.downsampleInputLeft              );
    this.downsampleInputRight               =  structuredClone(IodineGUI.Iodine.IOCore.sound.downsampleInputRight             );
    this.mixerOutputCacheLeft               =  structuredClone(IodineGUI.Iodine.IOCore.sound.mixerOutputCacheLeft             );
    this.mixerOutputCacheRight              =  structuredClone(IodineGUI.Iodine.IOCore.sound.mixerOutputCacheRight            );
    this.mixerSoundBIAS                     =  structuredClone(IodineGUI.Iodine.IOCore.sound.mixerSoundBIAS                   );
    this.nr50                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr50                             );
    this.nr51                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr51                             );
    this.nr52                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr52                             );
    this.nr60                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr60                             );
    this.nr61                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr61                             );
    this.nr62                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr62                             );
    this.nr63                               =  structuredClone(IodineGUI.Iodine.IOCore.sound.nr63                             );
    this.sequencePosition                   =  structuredClone(IodineGUI.Iodine.IOCore.sound.sequencePosition                 );
    this.sequencerClocks                    =  structuredClone(IodineGUI.Iodine.IOCore.sound.sequencerClocks                  );
    this.soundMasterEnabled                 =  structuredClone(IodineGUI.Iodine.IOCore.sound.soundMasterEnabled               );

    this.channel1 = {}; 
    this.channel1.CachedDuty                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.CachedDuty               );      
    this.channel1.DutyTracker               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.DutyTracker              );      
    this.channel1.Enabled                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.Enabled                  );      
    this.channel1.FrequencyCounter          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.FrequencyCounter         );      
    this.channel1.FrequencyTracker          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.FrequencyTracker         );      
    this.channel1.ShadowFrequency           = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.ShadowFrequency          );      
    this.channel1.SweepFault                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.SweepFault               );      
    this.channel1.Swept                     = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.Swept                    );      
    this.channel1.canPlay                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.canPlay                  );      
    this.channel1.consecutive               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.consecutive              );      
    this.channel1.currentSampleLeft         = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.currentSampleLeft        );      
    this.channel1.currentSampleRight        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.currentSampleRight       );      
    this.channel1.decreaseSweep             = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.decreaseSweep            );      
    this.channel1.envelopeSweeps            = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.envelopeSweeps           );      
    this.channel1.envelopeSweepsLast        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.envelopeSweepsLast       );      
    this.channel1.envelopeType              = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.envelopeType             );      
    this.channel1.envelopeVolume            = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.envelopeVolume           );      
    this.channel1.frequency                 = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.frequency                );      
    this.channel1.frequencySweepDivider     = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.frequencySweepDivider    );      
    this.channel1.lastTimeSweep             = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.lastTimeSweep            );      
    this.channel1.leftEnable                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.leftEnable               );      
    this.channel1.nr10                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.nr10                     );      
    this.channel1.nr11                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.nr11                     );      
    this.channel1.nr12                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.nr12                     );      
    this.channel1.nr14                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.nr14                     );      
    this.channel1.rightEnable               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.rightEnable              );      
    this.channel1.timeSweep                 = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.timeSweep                );      
    this.channel1.totalLength               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel1.totalLength              );      

    this.channel2 = {};
    this.channel2.CachedDuty                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.CachedDuty               );
    this.channel2.DutyTracker               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.DutyTracker              );
    this.channel2.Enabled                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.Enabled                  );
    this.channel2.FrequencyCounter          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.FrequencyCounter         );
    this.channel2.FrequencyTracker          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.FrequencyTracker         );
    this.channel2.ShadowFrequency           = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.ShadowFrequency          );
    this.channel2.canPlay                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.canPlay                  );
    this.channel2.consecutive               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.consecutive              );
    this.channel2.currentSampleLeft         = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.currentSampleLeft        );
    this.channel2.currentSampleRight        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.currentSampleRight       );
    this.channel2.envelopeSweeps            = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.envelopeSweeps           );
    this.channel2.envelopeSweepsLast        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.envelopeSweepsLast       );
    this.channel2.envelopeType              = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.envelopeType             );
    this.channel2.envelopeVolume            = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.envelopeVolume           );
    this.channel2.frequency                 = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.frequency                );
    this.channel2.leftEnable                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.leftEnable               );
    this.channel2.nr21                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.nr21                     );
    this.channel2.nr22                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.nr22                     );
    this.channel2.nr23                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.nr23                     );
    this.channel2.nr24                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.nr24                     );
    this.channel2.rightEnable               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.rightEnable              );
    this.channel2.totalLength               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel2.totalLength              );

    this.channel3 = {};
    this.channel3.Enabled                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.Enabled                  );         
    this.channel3.FrequencyPeriod           = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.FrequencyPeriod          );                 
    this.channel3.PCM                       = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.PCM                      );     
    this.channel3.WAVERAM8                  = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.WAVERAM8                 );          
    this.channel3.WAVERAMBankAccessed       = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.WAVERAMBankAccessed      );                     
    this.channel3.WAVERAMBankSpecified      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.WAVERAMBankSpecified     );                      
    this.channel3.WaveRAMBankSize           = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.WaveRAMBankSize          );                 
    this.channel3.cachedSample              = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.cachedSample             );              
    this.channel3.canPlay                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.canPlay                  );         
    this.channel3.consecutive               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.consecutive              );             
    this.channel3.counter                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.counter                  );         
    this.channel3.currentSampleLeft         = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.currentSampleLeft        );                   
    this.channel3.currentSampleRight        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.currentSampleRight       );                    
    this.channel3.frequency                 = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.frequency                );           
    this.channel3.lastSampleLookup          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.lastSampleLookup         );                  
    this.channel3.leftEnable                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.leftEnable               );            
    this.channel3.nr30                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.nr30                     );      
    this.channel3.nr31                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.nr31                     );      
    this.channel3.nr32                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.nr32                     );      
    this.channel3.nr33                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.nr33                     );      
    this.channel3.nr34                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.nr34                     );      
    this.channel3.patternType               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.patternType              );             
    this.channel3.rightEnable               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.rightEnable              );                 
    this.channel3.totalLength               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel3.totalLength              );          

    // LSFR7Table
    // LSFR15Table
    this.channel4 = {};
    this.channel4.BitRange                  = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.BitRange                 );
    this.channel4.Enabled                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.Enabled                  );
    this.channel4.FrequencyPeriod           = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.FrequencyPeriod          );
    this.channel4.VolumeShifter             = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.VolumeShifter            );
    this.channel4.cachedSample              = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.cachedSample             );
    this.channel4.canPlay                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.canPlay                  );
    this.channel4.consecutive               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.consecutive              );
    this.channel4.counter                   = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.counter                  );
    this.channel4.currentSampleLeft         = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.currentSampleLeft        );
    this.channel4.currentSampleRight        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.currentSampleRight       );
    this.channel4.currentVolume             = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.currentVolume            );
    this.channel4.envelopeSweeps            = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.envelopeSweeps           );
    this.channel4.envelopeSweepsLast        = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.envelopeSweepsLast       );
    this.channel4.envelopeType              = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.envelopeType             );
    this.channel4.envelopeVolume            = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.envelopeVolume           );
    this.channel4.lastSampleLookup          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.lastSampleLookup         );
    this.channel4.leftEnable                = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.leftEnable               );
    this.channel4.noiseSampleTable          = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.noiseSampleTable         );
    this.channel4.nr42                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.nr42                     );
    this.channel4.nr43                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.nr43                     );
    this.channel4.nr44                      = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.nr44                     );
    this.channel4.rightEnable               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.rightEnable              );
    this.channel4.totalLength               = structuredClone(IodineGUI.Iodine.IOCore.sound.channel4.totalLength              );

    this.FIFOA = {};
    this.FIFOA.buffer                       = structuredClone(IodineGUI.Iodine.IOCore.sound.FIFOABuffer.buffer                );   
    this.FIFOA.count                        = structuredClone(IodineGUI.Iodine.IOCore.sound.FIFOABuffer.count                 );   
    this.FIFOA.position                     = structuredClone(IodineGUI.Iodine.IOCore.sound.FIFOABuffer.position              );    

    this.FIFOB = {};
    this.FIFOB.buffer                       = structuredClone(IodineGUI.Iodine.IOCore.sound.FIFOBBuffer.buffer                );   
    this.FIFOB.count                        = structuredClone(IodineGUI.Iodine.IOCore.sound.FIFOBBuffer.count                 );   
    this.FIFOB.position                     = structuredClone(IodineGUI.Iodine.IOCore.sound.FIFOBBuffer.position              );    

    /* Serial */
    this.JOYBUS_CNTL_FLAGS             = structuredClone(IOCore.serial.JOYBUS_CNTL_FLAGS         );
    this.JOYBUS_IRQ                    = structuredClone(IOCore.serial.JOYBUS_IRQ                );
    this.JOYBUS_RECV0                  = structuredClone(IOCore.serial.JOYBUS_RECV0              );
    this.JOYBUS_RECV1                  = structuredClone(IOCore.serial.JOYBUS_RECV1              );
    this.JOYBUS_RECV2                  = structuredClone(IOCore.serial.JOYBUS_RECV2              );
    this.JOYBUS_RECV3                  = structuredClone(IOCore.serial.JOYBUS_RECV3              );
    this.JOYBUS_SEND0                  = structuredClone(IOCore.serial.JOYBUS_SEND0              );
    this.JOYBUS_SEND1                  = structuredClone(IOCore.serial.JOYBUS_SEND1              );
    this.JOYBUS_SEND2                  = structuredClone(IOCore.serial.JOYBUS_SEND2              );
    this.JOYBUS_SEND3                  = structuredClone(IOCore.serial.JOYBUS_SEND3              );
    this.JOYBUS_STAT                   = structuredClone(IOCore.serial.JOYBUS_STAT               );
    this.RCNTDataBitFlow               = structuredClone(IOCore.serial.RCNTDataBitFlow           );
    this.RCNTDataBits                  = structuredClone(IOCore.serial.RCNTDataBits              );
    this.RCNTIRQ                       = structuredClone(IOCore.serial.RCNTIRQ                   );
    this.RCNTMode                      = structuredClone(IOCore.serial.RCNTMode                  );
    this.SIOBaudRate                   = structuredClone(IOCore.serial.SIOBaudRate               );
    this.SIOCNT0_DATA                  = structuredClone(IOCore.serial.SIOCNT0_DATA              );
    this.SIOCNT_IRQ                    = structuredClone(IOCore.serial.SIOCNT_IRQ                );
    this.SIOCNT_MODE                   = structuredClone(IOCore.serial.SIOCNT_MODE               );
    this.SIOCNT_UART_CTS               = structuredClone(IOCore.serial.SIOCNT_UART_CTS           );
    this.SIOCNT_UART_FIFO              = structuredClone(IOCore.serial.SIOCNT_UART_FIFO          );
    this.SIOCNT_UART_FIFO_ENABLE       = structuredClone(IOCore.serial.SIOCNT_UART_FIFO_ENABLE   );
    this.SIOCNT_UART_MISC              = structuredClone(IOCore.serial.SIOCNT_UART_MISC          );
    this.SIOCNT_UART_PARITY_ENABLE     = structuredClone(IOCore.serial.SIOCNT_UART_PARITY_ENABLE );
    this.SIOCNT_UART_RECV_ENABLE       = structuredClone(IOCore.serial.SIOCNT_UART_RECV_ENABLE   );
    this.SIOCNT_UART_SEND_ENABLE       = structuredClone(IOCore.serial.SIOCNT_UART_SEND_ENABLE   );
    this.SIOCOMMERROR                  = structuredClone(IOCore.serial.SIOCOMMERROR              );
    this.SIODATA8                      = structuredClone(IOCore.serial.SIODATA8                  );
    this.SIODATA_A                     = structuredClone(IOCore.serial.SIODATA_A                 );
    this.SIODATA_B                     = structuredClone(IOCore.serial.SIODATA_B                 );
    this.SIODATA_C                     = structuredClone(IOCore.serial.SIODATA_C                 );
    this.SIODATA_D                     = structuredClone(IOCore.serial.SIODATA_D                 );
    this.SIOMULT_PLAYER_NUMBER         = structuredClone(IOCore.serial.SIOMULT_PLAYER_NUMBER     );
    this.SIOShiftClockDivider          = structuredClone(IOCore.serial.SIOShiftClockDivider      );
    this.SIOShiftClockExternal         = structuredClone(IOCore.serial.SIOShiftClockExternal     );
    this.SIOTransferStarted            = structuredClone(IOCore.serial.SIOTransferStarted        );
    this.serialBitsShifted             = structuredClone(IOCore.serial.serialBitsShifted         );
    this.shiftClocks                   = structuredClone(IOCore.serial.shiftClocks               );

    /* Save Data */
    this.saveType               = structuredClone(IodineGUI.Iodine.IOCore.saves.saveType         );
    // TODO: switch reference to saveType?

    this.GPIOChip = {};
    this.GPIOChip.data          = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.data     );      
    this.GPIOChip.direction     = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.direction);           
    this.GPIOChip.readWrite     = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.readWrite);           
    this.GPIOChip.type          = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.type     );   
    
    this.GPIOChip.RTC = {};
    this.GPIOChip.RTC.pins           = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.pins          );
    this.GPIOChip.RTC.direction      = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.direction     );
    this.GPIOChip.RTC.totalBytes     = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.totalBytes    );
    this.GPIOChip.RTC.bytesRemaining = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.bytesRemaining);
    this.GPIOChip.RTC.transferStep   = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.transferStep  );
    this.GPIOChip.RTC.reading        = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.reading       );
    this.GPIOChip.RTC.bitsRead       = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.bitsRead      );
    this.GPIOChip.RTC.bits           = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.bits          );
    this.GPIOChip.RTC.command        = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.command       );
    this.GPIOChip.RTC.control        = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.control       );
    this.GPIOChip.RTC.time           = structuredClone(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc.time          );

    this.UNDETERMINED = {};
    this.UNDETERMINED.saves        = structuredClone(IodineGUI.Iodine.IOCore.saves.UNDETERMINED.saves   );
    this.UNDETERMINED.possible     = structuredClone(IodineGUI.Iodine.IOCore.saves.UNDETERMINED.possible);

    this.SRAMChip = {};
    this.SRAMChip.TILTChip         = structuredClone(IodineGUI.Iodine.IOCore.saves.SRAMChip.TILTChip        );
    this.SRAMChip.TILTChipUnlocked = structuredClone(IodineGUI.Iodine.IOCore.saves.SRAMChip.TILTChipUnlocked);
    this.SRAMChip.saves            = structuredClone(IodineGUI.Iodine.IOCore.saves.SRAMChip.saves           );

    this.FLASHChip = {};
    this.FLASHChip.BANKOffset              = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.BANKOffset             );    
    this.FLASHChip.flashCommand            = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.flashCommand           );    
    this.FLASHChip.flashCommandUnlockStage = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.flashCommandUnlockStage);    
    this.FLASHChip.largestSizePossible     = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.largestSizePossible    );    
    this.FLASHChip.notATMEL                = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.notATMEL               );    
    this.FLASHChip.saves                   = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.saves                  );         
    this.FLASHChip.writeBytesLeft          = structuredClone(IodineGUI.Iodine.IOCore.saves.FLASHChip.writeBytesLeft         );    

    this.EEPROMChip = {};
    this.EEPROMChip.address             = structuredClone(IodineGUI.Iodine.IOCore.saves.EEPROMChip.address            );    
    this.EEPROMChip.bitsProcessed       = structuredClone(IodineGUI.Iodine.IOCore.saves.EEPROMChip.bitsProcessed      );          
    this.EEPROMChip.buffer              = structuredClone(IodineGUI.Iodine.IOCore.saves.EEPROMChip.buffer             );   
    this.EEPROMChip.largestSizePossible = structuredClone(IodineGUI.Iodine.IOCore.saves.EEPROMChip.largestSizePossible);                
    this.EEPROMChip.mode                = structuredClone(IodineGUI.Iodine.IOCore.saves.EEPROMChip.mode               ); 
    this.EEPROMChip.saves               = structuredClone(IodineGUI.Iodine.IOCore.saves.EEPROMChip.saves              );  
}

function assign(target, name, value) {


    if (!target || !target[name]) 
    {
        return;
    }

    if (typeof target[name] == 'number' || typeof target[name] == 'boolean' || typeof target[name] == 'string') {
        target[name] = value;
    } else {
        Object.assign(target[name], value);
    }

}

SaveState.prototype.load = function (IOCore) {

    /* Cartridge Reference */
    assign(IOCore.cartridge, "romCode"               ,this.romCode                       );

    /* General */
    assign(IOCore, "accumulatedClocks"               , this.accumulatedClocks            );
    assign(IOCore, "cyclesOveriteratedPreviously"    , this.cyclesOveriteratedPreviously );
    assign(IOCore, "cyclesToIterate"                 , this.cyclesToIterate              );
    assign(IOCore, "graphicsClocks"                  , this.graphicsClocks               );
    assign(IOCore, "nextEventClocks"                 , this.nextEventClocks              );
    assign(IOCore, "systemStatus"                    , this.systemStatus                 );
    assign(IOCore, "timerClocks"                     , this.timerClocks                  );

    /* Memory */
    assign(IOCore.memory, "internalRAM"              , this.internalRAM             );
    assign(IOCore.memory, "externalRAM"              , this.externalRAM             );
    assign(IOCore.memory, "WRAMControlFlags"         , this.WRAMControlFlags        );
    assign(IOCore.memory, "lastBIOSREAD"             , this.lastBIOSREAD            ); 

    /* DMA */
    assign(IOCore.dma, "currentMatch"                , this.dma.currentMatch        );
    assign(IOCore.dma, "fetch"                       , this.dma.fetch               );

    assign(IOCore.dmaChannel0, "destination"         , this.dma0.destination        );
    assign(IOCore.dmaChannel0, "destinationControl"  , this.dma0.destinationControl );       
    assign(IOCore.dmaChannel0, "destinationShadow"   , this.dma0.destinationShadow  );      
    assign(IOCore.dmaChannel0, "dmaType"             , this.dma0.dmaType            );       
    assign(IOCore.dmaChannel0, "enabled"             , this.dma0.enabled            );        
    assign(IOCore.dmaChannel0, "irqFlagging"         , this.dma0.irqFlagging        );
    assign(IOCore.dmaChannel0, "is32Bit"             , this.dma0.is32Bit            );        
    assign(IOCore.dmaChannel0, "pending"             , this.dma0.pending            );         
    assign(IOCore.dmaChannel0, "repeat"              , this.dma0.repeat             );       
    assign(IOCore.dmaChannel0, "source"              , this.dma0.source             );      
    assign(IOCore.dmaChannel0, "sourceControl"       , this.dma0.sourceControl      );  
    assign(IOCore.dmaChannel0, "sourceShadow"        , this.dma0.sourceShadow       ); 
    assign(IOCore.dmaChannel0, "wordCount"           , this.dma0.wordCount          );           
    assign(IOCore.dmaChannel0, "wordCountShadow"     , this.dma0.wordCountShadow    );

    assign(IOCore.dmaChannel1, "destination"         , this.dma1.destination        );
    assign(IOCore.dmaChannel1, "destinationControl"  , this.dma1.destinationControl );       
    assign(IOCore.dmaChannel1, "destinationShadow"   , this.dma1.destinationShadow  );      
    assign(IOCore.dmaChannel1, "dmaType"             , this.dma1.dmaType            );       
    assign(IOCore.dmaChannel1, "enabled"             , this.dma1.enabled            );        
    assign(IOCore.dmaChannel1, "irqFlagging"         , this.dma1.irqFlagging        );
    assign(IOCore.dmaChannel1, "is32Bit"             , this.dma1.is32Bit            );        
    assign(IOCore.dmaChannel1, "pending"             , this.dma1.pending            );         
    assign(IOCore.dmaChannel1, "repeat"              , this.dma1.repeat             );       
    assign(IOCore.dmaChannel1, "source"              , this.dma1.source             );      
    assign(IOCore.dmaChannel1, "sourceControl"       , this.dma1.sourceControl      );  
    assign(IOCore.dmaChannel1, "sourceShadow"        , this.dma1.sourceShadow       ); 
    assign(IOCore.dmaChannel1, "wordCount"           , this.dma1.wordCount          );           
    assign(IOCore.dmaChannel1, "wordCountShadow"     , this.dma1.wordCountShadow    );

    assign(IOCore.dmaChannel2, "destination"         , this.dma2.destination        );
    assign(IOCore.dmaChannel2, "destinationControl"  , this.dma2.destinationControl );       
    assign(IOCore.dmaChannel2, "destinationShadow"   , this.dma2.destinationShadow  );      
    assign(IOCore.dmaChannel2, "dmaType"             , this.dma2.dmaType            );       
    assign(IOCore.dmaChannel2, "enabled"             , this.dma2.enabled            );        
    assign(IOCore.dmaChannel2, "irqFlagging"         , this.dma2.irqFlagging        );
    assign(IOCore.dmaChannel2, "is32Bit"             , this.dma2.is32Bit            );        
    assign(IOCore.dmaChannel2, "pending"             , this.dma2.pending            );         
    assign(IOCore.dmaChannel2, "repeat"              , this.dma2.repeat             );       
    assign(IOCore.dmaChannel2, "source"              , this.dma2.source             );      
    assign(IOCore.dmaChannel2, "sourceControl"       , this.dma2.sourceControl      );  
    assign(IOCore.dmaChannel2, "sourceShadow"        , this.dma2.sourceShadow       ); 
    assign(IOCore.dmaChannel2, "wordCount"           , this.dma2.wordCount          );           
    assign(IOCore.dmaChannel2, "wordCountShadow"     , this.dma2.wordCountShadow    );

    assign(IOCore.dmaChannel3, "destination"            , this.dma3.destination            );      
    assign(IOCore.dmaChannel3, "destinationControl"     , this.dma3.destinationControl     );             
    assign(IOCore.dmaChannel3, "destinationShadow"      , this.dma3.destinationShadow      );            
    assign(IOCore.dmaChannel3, "displaySyncEnableDelay" , this.dma3.displaySyncEnableDelay );                 
    assign(IOCore.dmaChannel3, "dmaType"                , this.dma3.dmaType                );  
    assign(IOCore.dmaChannel3, "enabled"                , this.dma3.enabled                );  
    assign(IOCore.dmaChannel3, "gamePakDMA"             , this.dma3.gamePakDMA             );     
    assign(IOCore.dmaChannel3, "irqFlagging"            , this.dma3.irqFlagging            );      
    assign(IOCore.dmaChannel3, "is32Bit"                , this.dma3.is32Bit                );  
    assign(IOCore.dmaChannel3, "pending"                , this.dma3.pending                );  
    assign(IOCore.dmaChannel3, "repeat"                 , this.dma3.repeat                 ); 
    assign(IOCore.dmaChannel3, "source"                 , this.dma3.source                 ); 
    assign(IOCore.dmaChannel3, "sourceControl"          , this.dma3.sourceControl          );        
    assign(IOCore.dmaChannel3, "sourceShadow"           , this.dma3.sourceShadow           );       
    assign(IOCore.dmaChannel3, "wordCount"              , this.dma3.wordCount              );    
    assign(IOCore.dmaChannel3, "wordCountShadow"        , this.dma3.wordCountShadow        );     
                          
    /* CPU */                             
    assign(IOCore.cpu, "registers"                   , this.registers                  );   
    assign(IOCore.cpu, "registersUSR"                , this.registersUSR               );
    assign(IOCore.cpu, "registersFIQ"                , this.registersFIQ               );
    assign(IOCore.cpu, "registersSVC"                , this.registersSVC               );
    assign(IOCore.cpu, "registersABT"                , this.registersABT               );
    assign(IOCore.cpu, "registersIRQ"                , this.registersIRQ               );
    assign(IOCore.cpu, "registersUND"                , this.registersUND               );
    assign(IOCore.cpu, "modeFlags"                   , this.modeFlags                  );
    assign(IOCore.cpu, "SPSR"                        , this.SPSR                       );
    assign(IOCore.cpu, "mul64ResultHigh"             , this.mul64ResultHigh            );
    assign(IOCore.cpu, "mul64ResultLow"              , this.mul64ResultLow             );
    assign(IOCore.cpu, "triggeredIRQ"                , this.triggeredIRQ               );

    assign(IOCore.THUMB, "decode"                    , this.THUMB.decode               );
    assign(IOCore.THUMB, "execute"                   , this.THUMB.execute              );
    assign(IOCore.THUMB, "fetch"                     , this.THUMB.fetch                );

    assign(IOCore.ARM, "decode"                      , this.ARM.decode                 );
    assign(IOCore.ARM, "execute"                     , this.ARM.execute                );
    assign(IOCore.ARM, "fetch"                       , this.ARM.fetch                  );
     
    /* Timers */           
    assign(IOCore.timer, "timer0Counter"             , this.timer0Counter              );
    assign(IOCore.timer, "timer0Reload"              , this.timer0Reload               );
    assign(IOCore.timer, "timer0Control"             , this.timer0Control              );
    assign(IOCore.timer, "timer0Enabled"             , this.timer0Enabled              ); 
    assign(IOCore.timer, "timer0IRQ"                 , this.timer0IRQ                  ); 
    assign(IOCore.timer, "timer0Precounter"          , this.timer0Precounter           );
    assign(IOCore.timer, "timer0Prescalar"           , this.timer0Prescalar            );
    assign(IOCore.timer, "timer0PrescalarShifted"    , this.timer0PrescalarShifted     );
    assign(IOCore.timer, "timer1Counter"             , this.timer1Counter              );
    assign(IOCore.timer, "timer1Reload"              , this.timer1Reload               );
    assign(IOCore.timer, "timer1Control"             , this.timer1Control              );
    assign(IOCore.timer, "timer1Enabled"             , this.timer1Enabled              ); 
    assign(IOCore.timer, "timer1IRQ"                 , this.timer1IRQ                  ); 
    assign(IOCore.timer, "timer1Precounter"          , this.timer1Precounter           );
    assign(IOCore.timer, "timer1Prescalar"           , this.timer1Prescalar            );
    assign(IOCore.timer, "timer1PrescalarShifted"    , this.timer1PrescalarShifted     );
    assign(IOCore.timer, "timer1CountUp"             , this.timer1CountUp              ); 
    assign(IOCore.timer, "timer2Counter"             , this.timer2Counter              );
    assign(IOCore.timer, "timer2Reload"              , this.timer2Reload               );
    assign(IOCore.timer, "timer2Control"             , this.timer2Control              );
    assign(IOCore.timer, "timer2Enabled"             , this.timer2Enabled              ); 
    assign(IOCore.timer, "timer2IRQ"                 , this.timer2IRQ                  ); 
    assign(IOCore.timer, "timer2Precounter"          , this.timer2Precounter           );
    assign(IOCore.timer, "timer2Prescalar"           , this.timer2Prescalar            );
    assign(IOCore.timer, "timer2PrescalarShifted"    , this.timer2PrescalarShifted     );
    assign(IOCore.timer, "timer2CountUp"             , this.timer2CountUp              ); 
    assign(IOCore.timer, "timer3Counter"             , this.timer3Counter              );
    assign(IOCore.timer, "timer3Reload"              , this.timer3Reload               );
    assign(IOCore.timer, "timer3Control"             , this.timer3Control              );
    assign(IOCore.timer, "timer3Enabled"             , this.timer3Enabled              ); 
    assign(IOCore.timer, "timer3IRQ"                 , this.timer3IRQ                  ); 
    assign(IOCore.timer, "timer3Precounter"          , this.timer3Precounter           );
    assign(IOCore.timer, "timer3Prescalar"           , this.timer3Prescalar            );
    assign(IOCore.timer, "timer3PrescalarShifted"    , this.timer3PrescalarShifted     );
    assign(IOCore.timer, "timer3CountUp"             , this.timer3CountUp              ); 
    assign(IOCore.timer, "timer1UseMainClocks"       , this.timer1UseMainClocks        ); 
    assign(IOCore.timer, "timer1UseChainedClocks"    , this.timer1UseChainedClocks     ); 
    assign(IOCore.timer, "timer2UseMainClocks"       , this.timer2UseMainClocks        ); 
    assign(IOCore.timer, "timer2UseChainedClocks"    , this.timer2UseChainedClocks     ); 
    assign(IOCore.timer, "timer3UseMainClocks"       , this.timer3UseMainClocks        ); 
    assign(IOCore.timer, "timer3UseChainedClocks"    , this.timer3UseChainedClocks     );  
    
    /* Wait */    
    assign(IOCore.wait, "WRAMConfiguration"          , this.WRAMConfiguration          );
    assign(IOCore.wait, "WRAMWaitState"              , this.WRAMWaitState              );    
    assign(IOCore.wait, "SRAMWaitState"              , this.SRAMWaitState              );    
    assign(IOCore.wait, "WAITCNT0"                   , this.WAITCNT0                   );         
    assign(IOCore.wait, "WAITCNT1"                   , this.WAITCNT1                   );         
    assign(IOCore.wait, "POSTBOOT"                   , this.POSTBOOT                   );         
    assign(IOCore.wait, "isRendering"                , this.isRendering                );      
    assign(IOCore.wait, "isOAMRendering"             , this.isOAMRendering             );   
    assign(IOCore.wait, "nonSequential"              , this.nonSequential              );    
    assign(IOCore.wait, "buffer"                     , this.buffer                     );           
    assign(IOCore.wait, "clocks"                     , this.clocks                     ); 

    /* Serial */
    assign(IOCore.serial, "SIODATA_A"                ,this.SIODATA_A                   );     
    assign(IOCore.serial, "SIODATA_B"                ,this.SIODATA_B                   );     
    assign(IOCore.serial, "SIODATA_C"                ,this.SIODATA_C                   );     
    assign(IOCore.serial, "SIODATA_D"                ,this.SIODATA_D                   );     
    assign(IOCore.serial, "SIOShiftClockExternal"    ,this.SIOShiftClockExternal       );     
    assign(IOCore.serial, "SIOShiftClockDivider"     ,this.SIOShiftClockDivider        );     
    assign(IOCore.serial, "SIOCNT0_DATA"             ,this.SIOCNT0_DATA                );     
    assign(IOCore.serial, "SIOTransferStarted"       ,this.SIOTransferStarted          );     
    assign(IOCore.serial, "SIOMULT_PLAYER_NUMBER"    ,this.SIOMULT_PLAYER_NUMBER       );     
    assign(IOCore.serial, "SIOCOMMERROR"             ,this.SIOCOMMERROR                );     
    assign(IOCore.serial, "SIOBaudRate"              ,this.SIOBaudRate                 );     
    assign(IOCore.serial, "SIOCNT_UART_CTS"          ,this.SIOCNT_UART_CTS             );   
    assign(IOCore.serial, "SIOCNT_UART_MISC"         ,this.SIOCNT_UART_MISC            );     
    assign(IOCore.serial, "SIOCNT_UART_FIFO"         ,this.SIOCNT_UART_FIFO            );     
    assign(IOCore.serial, "SIOCNT_IRQ"               ,this.SIOCNT_IRQ                  );     
    assign(IOCore.serial, "SIOCNT_MODE"              ,this.SIOCNT_MODE                 );     
    assign(IOCore.serial, "SIOCNT_UART_RECV_ENABLE"  ,this.SIOCNT_UART_RECV_ENABLE     );      
    assign(IOCore.serial, "SIOCNT_UART_SEND_ENABLE"  ,this.SIOCNT_UART_SEND_ENABLE     );      
    assign(IOCore.serial, "SIOCNT_UART_PARITY_ENABLE",this.SIOCNT_UART_PARITY_ENABLE   );       
    assign(IOCore.serial, "SIOCNT_UART_FIFO_ENABLE"  ,this.SIOCNT_UART_FIFO_ENABLE     );      
    assign(IOCore.serial, "SIODATA8"                 ,this.SIODATA8                    );     
    assign(IOCore.serial, "RCNTMode"                 ,this.RCNTMode                    );     
    assign(IOCore.serial, "RCNTIRQ"                  ,this.RCNTIRQ                     );   
    assign(IOCore.serial, "RCNTDataBits"             ,this.RCNTDataBits                );     
    assign(IOCore.serial, "RCNTDataBitFlow"          ,this.RCNTDataBitFlow             );     
    assign(IOCore.serial, "JOYBUS_IRQ"               ,this.JOYBUS_IRQ                  );     
    assign(IOCore.serial, "JOYBUS_CNTL_FLAGS"        ,this.JOYBUS_CNTL_FLAGS           );     
    assign(IOCore.serial, "JOYBUS_RECV0"             ,this.JOYBUS_RECV0                );     
    assign(IOCore.serial, "JOYBUS_RECV1"             ,this.JOYBUS_RECV1                );     
    assign(IOCore.serial, "JOYBUS_RECV2"             ,this.JOYBUS_RECV2                );     
    assign(IOCore.serial, "JOYBUS_RECV3"             ,this.JOYBUS_RECV3                );     
    assign(IOCore.serial, "JOYBUS_SEND0"             ,this.JOYBUS_SEND0                );     
    assign(IOCore.serial, "JOYBUS_SEND1"             ,this.JOYBUS_SEND1                );     
    assign(IOCore.serial, "JOYBUS_SEND2"             ,this.JOYBUS_SEND2                );     
    assign(IOCore.serial, "JOYBUS_SEND3"             ,this.JOYBUS_SEND3                );     
    assign(IOCore.serial, "JOYBUS_STAT"              ,this.JOYBUS_STAT                 );     
    assign(IOCore.serial, "shiftClocks"              ,this.shiftClocks                 );     
    assign(IOCore.serial, "serialBitsShifted"        ,this.serialBitsShifted           );

    /* Run Loop */
    assign(IOCore, "systemStatus"                    ,this.systemStatus                );
    assign(IOCore, "cyclesToIterate"                 ,this.cyclesToIterate             );
    assign(IOCore, "cyclesOveriteratedPreviously"    ,this.cyclesOveriteratedPreviously);
    assign(IOCore, "accumulatedClocks"               ,this.accumulatedClocks           );
    assign(IOCore, "graphicsClocks"                  ,this.graphicsClocks              );
    assign(IOCore, "timerClocks"                     ,this.timerClocks                 );
    assign(IOCore, "serialClocks"                    ,this.serialClocks                );
    assign(IOCore, "nextEventClocks"                 ,this.nextEventClocks             );

    /* IRQ */
    assign(IOCore.irq, "interruptsEnabled"           ,this.interruptsEnabled           );
    assign(IOCore.irq, "interruptsRequested"         ,this.interruptsRequested         );
    assign(IOCore.irq, "IME"                         ,this.IME                         );

    /* Video */
    assign(IOCore.gfxState                             , "renderedScanLine"    ,this.renderedScanLine           );
    assign(IOCore.gfxState                             , "statusFlags"         ,this.statusFlags                );
    assign(IOCore.gfxState                             , "IRQFlags"            ,this.IRQFlags                   );
    assign(IOCore.gfxState                             , "VCounter"            ,this.VCounter                   );
    assign(IOCore.gfxState                             , "currentScanLine"     ,this.currentScanLine            );
    assign(IOCore.gfxState                             , "LCDTicks"            ,this.LCDTicks                   );

    assign(IOCore.gfxRenderer                          , "IOData8"             ,this.IOData8                    );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "displayControl"      ,this.renderer.displayControl    );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "display"             ,this.renderer.display           );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "greenSwap"           ,this.renderer.greenSwap         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "WINOutside"          ,this.renderer.WINOutside        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "paletteRAM"          ,this.renderer.paletteRAM        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "VRAM"                ,this.renderer.VRAM              );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "buffer"              ,this.renderer.buffer            );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "frameBuffer"         ,this.renderer.frameBuffer       );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "swizzledFrame"       ,this.renderer.swizzledFrame     );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "totalLinesPassed"    ,this.renderer.totalLinesPassed  );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "queuedScanLines"     ,this.renderer.queuedScanLines   );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "lastUnrenderedLine"  ,this.renderer.lastUnrenderedLine);
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "backdrop"            ,this.renderer.backdrop          );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "palette256"          ,this.renderer.palette256        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "paletteOBJ256"       ,this.renderer.paletteOBJ256     );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "palette16"           ,this.renderer.palette16         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "paletteOBJ16"        ,this.renderer.paletteOBJ16      );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer, "lineBuffer"          ,this.renderer.lineBuffer        );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.compositor, "buffer"     ,this.renderer.compositor.buffer   );   
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.compositor, "doEffects"  ,this.renderer.compositor.doEffects ); 

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGCharacterBaseBlock"   , this.renderer.bg0Renderer.BGCharacterBaseBlock                     );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGLayer"                , this.renderer.bg0Renderer.BGLayer                                  );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGScreenBaseBlock"      , this.renderer.bg0Renderer.BGScreenBaseBlock                        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGXCoord"               , this.renderer.bg0Renderer.BGXCoord                                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "BGYCoord"               , this.renderer.bg0Renderer.BGYCoord                                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "do256"                  , this.renderer.bg0Renderer.do256                                    );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "doMosaic"               , this.renderer.bg0Renderer.doMosaic                                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "offset"                 , this.renderer.bg0Renderer.offset                                   );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "priorityFlag"           , this.renderer.bg0Renderer.priorityFlag                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "tileFetched"            , this.renderer.bg0Renderer.tileFetched                              );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg0Renderer                  , "tileMode"               , this.renderer.bg0Renderer.tileMode                                 );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGCharacterBaseBlock"   , this.renderer.bg1Renderer.BGCharacterBaseBlock                     );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGLayer"                , this.renderer.bg1Renderer.BGLayer                                  );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGScreenBaseBlock"      , this.renderer.bg1Renderer.BGScreenBaseBlock                        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGXCoord"               , this.renderer.bg1Renderer.BGXCoord                                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "BGYCoord"               , this.renderer.bg1Renderer.BGYCoord                                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "do256"                  , this.renderer.bg1Renderer.do256                                    );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "doMosaic"               , this.renderer.bg1Renderer.doMosaic                                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "offset"                 , this.renderer.bg1Renderer.offset                                   );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "priorityFlag"           , this.renderer.bg1Renderer.priorityFlag                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "tileFetched"            , this.renderer.bg1Renderer.tileFetched                              );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg1Renderer                  , "tileMode"               , this.renderer.bg1Renderer.tileMode                                 );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGCharacterBaseBlock"   , this.renderer.bg2TextRenderer.BGCharacterBaseBlock                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGLayer"                , this.renderer.bg2TextRenderer.BGLayer                              );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGScreenBaseBlock"      , this.renderer.bg2TextRenderer.BGScreenBaseBlock                    );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGXCoord"               , this.renderer.bg2TextRenderer.BGXCoord                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "BGYCoord"               , this.renderer.bg2TextRenderer.BGYCoord                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "do256"                  , this.renderer.bg2TextRenderer.do256                                );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "doMosaic"               , this.renderer.bg2TextRenderer.doMosaic                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "offset"                 , this.renderer.bg2TextRenderer.offset                               );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "priorityFlag"           , this.renderer.bg2TextRenderer.priorityFlag                         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "tileFetched"            , this.renderer.bg2TextRenderer.tileFetched                          );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2TextRenderer              , "tileMode"               , this.renderer.bg2TextRenderer.tileMode                             ); 

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGCharacterBaseBlock"   , this.renderer.bg3TextRenderer.BGCharacterBaseBlock                 );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGLayer"                , this.renderer.bg3TextRenderer.BGLayer                              );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGScreenBaseBlock"      , this.renderer.bg3TextRenderer.BGScreenBaseBlock                    );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGXCoord"               , this.renderer.bg3TextRenderer.BGXCoord                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "BGYCoord"               , this.renderer.bg3TextRenderer.BGYCoord                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "do256"                  , this.renderer.bg3TextRenderer.do256                                );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "doMosaic"               , this.renderer.bg3TextRenderer.doMosaic                             );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "offset"                 , this.renderer.bg3TextRenderer.offset                               );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "priorityFlag"           , this.renderer.bg3TextRenderer.priorityFlag                         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "tileFetched"            , this.renderer.bg3TextRenderer.tileFetched                          );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3TextRenderer              , "tileMode"               , this.renderer.bg3TextRenderer.tileMode                             ); 

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGLayer"                , this.renderer.bgAffineRenderer0.BGLayer                            );       
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGReferenceX"           , this.renderer.bgAffineRenderer0.BGReferenceX                       );            
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGReferenceY"           , this.renderer.bgAffineRenderer0.BGReferenceY                       );            
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdmx"                  , this.renderer.bgAffineRenderer0.BGdmx                              );     
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdmy"                  , this.renderer.bgAffineRenderer0.BGdmy                              );     
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdx"                   , this.renderer.bgAffineRenderer0.BGdx                               );    
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "BGdy"                   , this.renderer.bgAffineRenderer0.BGdy                               );    
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "doMosaic"               , this.renderer.bgAffineRenderer0.doMosaic                           );        
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "offset"                 , this.renderer.bgAffineRenderer0.offset                             );      
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "pb"                     , this.renderer.bgAffineRenderer0.pb                                 );  
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "pd"                     , this.renderer.bgAffineRenderer0.pd                                 );  
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer0            , "priorityFlag"           , this.renderer.bgAffineRenderer0.priorityFlag                       ); 

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGLayer"                , this.renderer.bgAffineRenderer1.BGLayer                            );       
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGReferenceX"           , this.renderer.bgAffineRenderer1.BGReferenceX                       );            
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGReferenceY"           , this.renderer.bgAffineRenderer1.BGReferenceY                       );            
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdmx"                  , this.renderer.bgAffineRenderer1.BGdmx                              );     
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdmy"                  , this.renderer.bgAffineRenderer1.BGdmy                              );     
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdx"                   , this.renderer.bgAffineRenderer1.BGdx                               );    
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "BGdy"                   , this.renderer.bgAffineRenderer1.BGdy                               );    
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "doMosaic"               , this.renderer.bgAffineRenderer1.doMosaic                           );        
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "offset"                 , this.renderer.bgAffineRenderer1.offset                             );      
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "pb"                     , this.renderer.bgAffineRenderer1.pb                                 );  
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "pd"                     , this.renderer.bgAffineRenderer1.pd                                 );  
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bgAffineRenderer1            , "priorityFlag"           , this.renderer.bgAffineRenderer1.priorityFlag                       );   
 
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2FrameBufferRenderer       , "frameSelect"            , this.renderer.bg2FrameBufferRenderer.frameSelect                   );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "BGCharacterBaseBlock"   , this.renderer.bg2MatrixRenderer.BGCharacterBaseBlock               );                
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "BGDisplayOverflow"      , this.renderer.bg2MatrixRenderer.BGDisplayOverflow                  );             
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "BGScreenBaseBlock"      , this.renderer.bg2MatrixRenderer.BGScreenBaseBlock                  );             
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "mapSize"                , this.renderer.bg2MatrixRenderer.mapSize                            );   
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg2MatrixRenderer            , "mapSizeComparer"        , this.renderer.bg2MatrixRenderer.mapSizeComparer                    );              

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"BGCharacterBaseBlock"    , this.renderer.bg3MatrixRenderer.BGCharacterBaseBlock               );                
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"BGDisplayOverflow"       , this.renderer.bg3MatrixRenderer.BGDisplayOverflow                  );             
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"BGScreenBaseBlock"       , this.renderer.bg3MatrixRenderer.BGScreenBaseBlock                  );             
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"mapSize"                 , this.renderer.bg3MatrixRenderer.mapSize                            );   
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.bg3MatrixRenderer            ,"mapSizeComparer"         , this.renderer.bg3MatrixRenderer.mapSizeComparer                    );   

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"alphaBlendAmountTarget1" , this.renderer.colorEffectsRenderer.alphaBlendAmountTarget1         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"alphaBlendAmountTarget2" , this.renderer.colorEffectsRenderer.alphaBlendAmountTarget2         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"brightnessEffectAmount"  , this.renderer.colorEffectsRenderer.brightnessEffectAmount          );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"colorEffectsType"        , this.renderer.colorEffectsRenderer.colorEffectsType                );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"effectsTarget1"          , this.renderer.colorEffectsRenderer.effectsTarget1                  );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.colorEffectsRenderer         ,"effectsTarget2"          , this.renderer.colorEffectsRenderer.effectsTarget2                  );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer               ,"BGMosaicHSize"           , this.renderer.mosaicRenderer.BGMosaicHSize                         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer               ,"BGMosaicVSize"           , this.renderer.mosaicRenderer.BGMosaicVSize                         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer               ,"OBJMosaicHSize"          , this.renderer.mosaicRenderer.OBJMosaicHSize                        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.mosaicRenderer               ,"OBJMosaicVSize"          , this.renderer.mosaicRenderer.OBJMosaicVSize                        );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer                  ,"cyclesToRender"          , this.renderer.objRenderer.cyclesToRender                           );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer                  ,"OAMRAM"                  , this.renderer.objRenderer.OAMRAM                                   );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer                  ,"scratchBuffer"           , this.renderer.objRenderer.scratchBuffer                            );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer                  ,"scratchWindowBuffer"     , this.renderer.objRenderer.scratchWindowBuffer                      );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer                  ,"scratchOBJBuffer"        , this.renderer.objRenderer.scratchOBJBuffer                         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objRenderer                  ,"OBJMatrixParameters"     , this.renderer.objRenderer.OBJMatrixParameters                      );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.objWindowRenderer            ,"WINOBJOutside"           , this.renderer.objWindowRenderer.WINOBJOutside                      );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer              , "WINXCoordLeft"          , this.renderer.window0Renderer.WINXCoordLeft                        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer              , "WINXCoordRight"         , this.renderer.window0Renderer.WINXCoordRight                       );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer              , "WINYCoordBottom"        , this.renderer.window0Renderer.WINYCoordBottom                      );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer              , "WINYCoordTop"           , this.renderer.window0Renderer.WINYCoordTop                         );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window0Renderer              , "windowDisplayControl"   , this.renderer.window0Renderer.windowDisplayControl                 );

    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer              , "WINXCoordLeft"          , this.renderer.window1Renderer.WINXCoordLeft       );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer              , "WINXCoordRight"         , this.renderer.window1Renderer.WINXCoordRight      );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer              , "WINYCoordBottom"        , this.renderer.window1Renderer.WINYCoordBottom     );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer              , "WINYCoordTop"           , this.renderer.window1Renderer.WINYCoordTop        );
    assign(IodineGUI.Iodine.IOCore.gfxRenderer.renderer.window1Renderer              , "windowDisplayControl"   , this.renderer.window1Renderer.windowDisplayControl);

   /* Audio */
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundA"                 , this.AGBDirectSoundA                     );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundAFolded"           , this.AGBDirectSoundAFolded               );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundALeftCanPlay"      , this.AGBDirectSoundALeftCanPlay          );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundARightCanPlay"     , this.AGBDirectSoundARightCanPlay         );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundAShifter"          , this.AGBDirectSoundAShifter              );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundATimer"            , this.AGBDirectSoundATimer                );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundB"                 , this.AGBDirectSoundB                     );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundBFolded"           , this.AGBDirectSoundBFolded               );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundBLeftCanPlay"      , this.AGBDirectSoundBLeftCanPlay          );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundBRightCanPlay"     , this.AGBDirectSoundBRightCanPlay         );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundBShifter"          , this.AGBDirectSoundBShifter              );
   assign(IodineGUI.Iodine.IOCore.sound         , "AGBDirectSoundBTimer"            , this.AGBDirectSoundBTimer                );
   assign(IodineGUI.Iodine.IOCore.sound         , "CGBMixerOutputCacheLeft"         , this.CGBMixerOutputCacheLeft             );
   assign(IodineGUI.Iodine.IOCore.sound         , "CGBMixerOutputCacheLeftFolded"   , this.CGBMixerOutputCacheLeftFolded       );
   assign(IodineGUI.Iodine.IOCore.sound         , "CGBMixerOutputCacheRight"        , this.CGBMixerOutputCacheRight            );
   assign(IodineGUI.Iodine.IOCore.sound         , "CGBMixerOutputCacheRightFolded"  , this.CGBMixerOutputCacheRightFolded      );
   assign(IodineGUI.Iodine.IOCore.sound         , "CGBOutputRatio"                  , this.CGBOutputRatio                      );
   assign(IodineGUI.Iodine.IOCore.sound         , "PWMBitDepthMask"                 , this.PWMBitDepthMask                     );
   assign(IodineGUI.Iodine.IOCore.sound         , "PWMBitDepthMaskShadow"           , this.PWMBitDepthMaskShadow               );
   assign(IodineGUI.Iodine.IOCore.sound         , "PWMWidth"                        , this.PWMWidth                            );
   assign(IodineGUI.Iodine.IOCore.sound         , "PWMWidthOld"                     , this.PWMWidthOld                         );
   assign(IodineGUI.Iodine.IOCore.sound         , "PWMWidthShadow"                  , this.PWMWidthShadow                      );
   assign(IodineGUI.Iodine.IOCore.sound         , "VinLeftChannelMasterVolume"      , this.VinLeftChannelMasterVolume          );
   assign(IodineGUI.Iodine.IOCore.sound         , "VinRightChannelMasterVolume"     , this.VinRightChannelMasterVolume         );
   assign(IodineGUI.Iodine.IOCore.sound         , "audioClocksUntilNextEvent"       , this.audioClocksUntilNextEvent           );
   assign(IodineGUI.Iodine.IOCore.sound         , "audioClocksUntilNextEventCounter", this.audioClocksUntilNextEventCounter    );
   assign(IodineGUI.Iodine.IOCore.sound         , "audioIndex"                      , this.audioIndex                          );
   assign(IodineGUI.Iodine.IOCore.sound         , "audioResamplerFirstPassFactor"   , this.audioResamplerFirstPassFactor       );
   assign(IodineGUI.Iodine.IOCore.sound         , "audioTicks"                      , this.audioTicks                          );
   assign(IodineGUI.Iodine.IOCore.sound         , "downsampleInputLeft"             , this.downsampleInputLeft                 );
   assign(IodineGUI.Iodine.IOCore.sound         , "downsampleInputRight"            , this.downsampleInputRight                );
   assign(IodineGUI.Iodine.IOCore.sound         , "mixerOutputCacheLeft"            , this.mixerOutputCacheLeft                );
   assign(IodineGUI.Iodine.IOCore.sound         , "mixerOutputCacheRight"           , this.mixerOutputCacheRight               );
   assign(IodineGUI.Iodine.IOCore.sound         , "mixerSoundBIAS"                  , this.mixerSoundBIAS                      );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr50"                            , this.nr50                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr51"                            , this.nr51                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr52"                            , this.nr52                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr60"                            , this.nr60                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr61"                            , this.nr61                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr62"                            , this.nr62                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "nr63"                            , this.nr63                                );
   assign(IodineGUI.Iodine.IOCore.sound         , "sequencePosition"                , this.sequencePosition                    );
   assign(IodineGUI.Iodine.IOCore.sound         , "sequencerClocks"                 , this.sequencerClocks                     );
   assign(IodineGUI.Iodine.IOCore.sound         , "soundMasterEnabled"              , this.soundMasterEnabled                  );
   
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "CachedDuty"                      , this.channel1.CachedDuty                 );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "DutyTracker"                     , this.channel1.DutyTracker                );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "Enabled"                         , this.channel1.Enabled                    );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "FrequencyCounter"                , this.channel1.FrequencyCounter           );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "FrequencyTracker"                , this.channel1.FrequencyTracker           );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "ShadowFrequency"                 , this.channel1.ShadowFrequency            );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "SweepFault"                      , this.channel1.SweepFault                 );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "Swept"                           , this.channel1.Swept                      );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "canPlay"                         , this.channel1.canPlay                    );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "consecutive"                     , this.channel1.consecutive                );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "currentSampleLeft"               , this.channel1.currentSampleLeft          );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "currentSampleRight"              , this.channel1.currentSampleRight         );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "decreaseSweep"                   , this.channel1.decreaseSweep              );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "envelopeSweeps"                  , this.channel1.envelopeSweeps             );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "envelopeSweepsLast"              , this.channel1.envelopeSweepsLast         );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "envelopeType"                    , this.channel1.envelopeType               );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "envelopeVolume"                  , this.channel1.envelopeVolume             );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "frequency"                       , this.channel1.frequency                  );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "frequencySweepDivider"           , this.channel1.frequencySweepDivider      );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "lastTimeSweep"                   , this.channel1.lastTimeSweep              );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "leftEnable"                      , this.channel1.leftEnable                 );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "nr10"                            , this.channel1.nr10                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "nr11"                            , this.channel1.nr11                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "nr12"                            , this.channel1.nr12                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "nr14"                            , this.channel1.nr14                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "rightEnable"                     , this.channel1.rightEnable                );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "timeSweep"                       , this.channel1.timeSweep                  );      
   assign(IodineGUI.Iodine.IOCore.sound.channel1, "totalLength"                     , this.channel1.totalLength                );      
   
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "CachedDuty"                      , this.channel2.CachedDuty                 );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "DutyTracker"                     , this.channel2.DutyTracker                );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "Enabled"                         , this.channel2.Enabled                    );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "FrequencyCounter"                , this.channel2.FrequencyCounter           );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "FrequencyTracker"                , this.channel2.FrequencyTracker           );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "ShadowFrequency"                 , this.channel2.ShadowFrequency            );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "canPlay"                         , this.channel2.canPlay                    );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "consecutive"                     , this.channel2.consecutive                );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "currentSampleLeft"               , this.channel2.currentSampleLeft          );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "currentSampleRight"              , this.channel2.currentSampleRight         );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "envelopeSweeps"                  , this.channel2.envelopeSweeps             );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "envelopeSweepsLast"              , this.channel2.envelopeSweepsLast         );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "envelopeType"                    , this.channel2.envelopeType               );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "envelopeVolume"                  , this.channel2.envelopeVolume             );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "frequency"                       , this.channel2.frequency                  );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "leftEnable"                      , this.channel2.leftEnable                 );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "nr21"                            , this.channel2.nr21                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "nr22"                            , this.channel2.nr22                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "nr23"                            , this.channel2.nr23                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "nr24"                            , this.channel2.nr24                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "rightEnable"                     , this.channel2.rightEnable                );
   assign(IodineGUI.Iodine.IOCore.sound.channel2, "totalLength"                     , this.channel2.totalLength                );
   
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "Enabled"                         , this.channel3.Enabled                    );         
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "FrequencyPeriod"                 , this.channel3.FrequencyPeriod            );                 
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "PCM"                             , this.channel3.PCM                        );     
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "WAVERAM8"                        , this.channel3.WAVERAM8                   );          
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "WAVERAMBankAccessed"             , this.channel3.WAVERAMBankAccessed        );                     
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "WAVERAMBankSpecified"            , this.channel3.WAVERAMBankSpecified       );                      
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "WaveRAMBankSize"                 , this.channel3.WaveRAMBankSize            );                 
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "cachedSample"                    , this.channel3.cachedSample               );              
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "canPlay"                         , this.channel3.canPlay                    );         
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "consecutive"                     , this.channel3.consecutive                );             
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "counter"                         , this.channel3.counter                    );         
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "currentSampleLeft"               , this.channel3.currentSampleLeft          );                   
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "currentSampleRight"              , this.channel3.currentSampleRight         );                    
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "frequency"                       , this.channel3.frequency                  );           
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "lastSampleLookup"                , this.channel3.lastSampleLookup           );                  
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "leftEnable"                      , this.channel3.leftEnable                 );            
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "nr30"                            , this.channel3.nr30                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "nr31"                            , this.channel3.nr31                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "nr32"                            , this.channel3.nr32                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "nr33"                            , this.channel3.nr33                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "nr34"                            , this.channel3.nr34                       );      
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "patternType"                     , this.channel3.patternType                );             
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "rightEnable"                     , this.channel3.rightEnable                );                
   assign(IodineGUI.Iodine.IOCore.sound.channel3, "totalLength"                     , this.channel3.totalLength                );          
   
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "BitRange"                        , this.channel4.BitRange                   );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "Enabled"                         , this.channel4.Enabled                    );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "FrequencyPeriod"                 , this.channel4.FrequencyPeriod            );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "VolumeShifter"                   , this.channel4.VolumeShifter              );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "cachedSample"                    , this.channel4.cachedSample               );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "canPlay"                         , this.channel4.canPlay                    );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "consecutive"                     , this.channel4.consecutive                );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "counter"                         , this.channel4.counter                    );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "currentSampleLeft"               , this.channel4.currentSampleLeft          );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "currentSampleRight"              , this.channel4.currentSampleRight         );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "currentVolume"                   , this.channel4.currentVolume              );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "envelopeSweeps"                  , this.channel4.envelopeSweeps             );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "envelopeSweepsLast"              , this.channel4.envelopeSweepsLast         );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "envelopeType"                    , this.channel4.envelopeType               );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "envelopeVolume"                  , this.channel4.envelopeVolume             );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "lastSampleLookup"                , this.channel4.lastSampleLookup           );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "leftEnable"                      , this.channel4.leftEnable                 );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "noiseSampleTable"                , this.channel4.noiseSampleTable           );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "nr42"                            , this.channel4.nr42                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "nr43"                            , this.channel4.nr43                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "nr44"                            , this.channel4.nr44                       );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "rightEnable"                     , this.channel4.rightEnable                );
   assign(IodineGUI.Iodine.IOCore.sound.channel4, "totalLength"                     , this.channel4.totalLength                );
   
   assign(IodineGUI.Iodine.IOCore.sound.FIFOABuffer, "buffer"                       , this.FIFOA.buffer                        );   
   assign(IodineGUI.Iodine.IOCore.sound.FIFOABuffer, "count"                        , this.FIFOA.count                         );   
   assign(IodineGUI.Iodine.IOCore.sound.FIFOABuffer, "position"                     , this.FIFOA.position                      ); 
   
   assign(IodineGUI.Iodine.IOCore.sound.FIFOBBuffer, "buffer"                       , this.FIFOB.buffer                        );   
   assign(IodineGUI.Iodine.IOCore.sound.FIFOBBuffer, "count"                        , this.FIFOB.count                         );   
   assign(IodineGUI.Iodine.IOCore.sound.FIFOBBuffer, "position"                     , this.FIFOB.position                      );    

   /* Serial */
   assign(IOCore.serial, "JOYBUS_CNTL_FLAGS"        , this.JOYBUS_CNTL_FLAGS        );
   assign(IOCore.serial, "JOYBUS_IRQ"               , this.JOYBUS_IRQ               );
   assign(IOCore.serial, "JOYBUS_RECV0"             , this.JOYBUS_RECV0             );
   assign(IOCore.serial, "JOYBUS_RECV1"             , this.JOYBUS_RECV1             );
   assign(IOCore.serial, "JOYBUS_RECV2"             , this.JOYBUS_RECV2             );
   assign(IOCore.serial, "JOYBUS_RECV3"             , this.JOYBUS_RECV3             );
   assign(IOCore.serial, "JOYBUS_SEND0"             , this.JOYBUS_SEND0             );
   assign(IOCore.serial, "JOYBUS_SEND1"             , this.JOYBUS_SEND1             );
   assign(IOCore.serial, "JOYBUS_SEND2"             , this.JOYBUS_SEND2             );
   assign(IOCore.serial, "JOYBUS_SEND3"             , this.JOYBUS_SEND3             );
   assign(IOCore.serial, "JOYBUS_STAT"              , this.JOYBUS_STAT              );
   assign(IOCore.serial, "RCNTDataBitFlow"          , this.RCNTDataBitFlow          );
   assign(IOCore.serial, "RCNTDataBits"             , this.RCNTDataBits             );
   assign(IOCore.serial, "RCNTIRQ"                  , this.RCNTIRQ                  );
   assign(IOCore.serial, "RCNTMode"                 , this.RCNTMode                 );
   assign(IOCore.serial, "SIOBaudRate"              , this.SIOBaudRate              );
   assign(IOCore.serial, "SIOCNT0_DATA"             , this.SIOCNT0_DATA             );
   assign(IOCore.serial, "SIOCNT_IRQ"               , this.SIOCNT_IRQ               );
   assign(IOCore.serial, "SIOCNT_MODE"              , this.SIOCNT_MODE              );
   assign(IOCore.serial, "SIOCNT_UART_CTS"          , this.SIOCNT_UART_CTS          );
   assign(IOCore.serial, "SIOCNT_UART_FIFO"         , this.SIOCNT_UART_FIFO         );
   assign(IOCore.serial, "SIOCNT_UART_FIFO_ENABLE"  , this.SIOCNT_UART_FIFO_ENABLE  );
   assign(IOCore.serial, "SIOCNT_UART_MISC"         , this.SIOCNT_UART_MISC         );
   assign(IOCore.serial, "SIOCNT_UART_PARITY_ENABLE", this.SIOCNT_UART_PARITY_ENABLE);
   assign(IOCore.serial, "SIOCNT_UART_RECV_ENABLE"  , this.SIOCNT_UART_RECV_ENABLE  );
   assign(IOCore.serial, "SIOCNT_UART_SEND_ENABLE"  , this.SIOCNT_UART_SEND_ENABLE  );
   assign(IOCore.serial, "SIOCOMMERROR"             , this.SIOCOMMERROR             );
   assign(IOCore.serial, "SIODATA8"                 , this.SIODATA8                 );
   assign(IOCore.serial, "SIODATA_A"                , this.SIODATA_A                );
   assign(IOCore.serial, "SIODATA_B"                , this.SIODATA_B                );
   assign(IOCore.serial, "SIODATA_C"                , this.SIODATA_C                );
   assign(IOCore.serial, "SIODATA_D"                , this.SIODATA_D                );
   assign(IOCore.serial, "SIOMULT_PLAYER_NUMBER"    , this.SIOMULT_PLAYER_NUMBER    );
   assign(IOCore.serial, "SIOShiftClockDivider"     , this.SIOShiftClockDivider     );
   assign(IOCore.serial, "SIOShiftClockExternal"    , this.SIOShiftClockExternal    );
   assign(IOCore.serial, "SIOTransferStarted"       , this.SIOTransferStarted       );
   assign(IOCore.serial, "serialBitsShifted"        , this.serialBitsShifted        );
   assign(IOCore.serial, "shiftClocks"              , this.shiftClocks              );

   /* Save */
   assign(IodineGUI.Iodine.IOCore.saves    , "saveType"     ,this.saveType);
   // TODO: switch reference to saveType?

   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip, "data"      , this.GPIOChip.data     );      
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip, "direction" , this.GPIOChip.direction);           
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip, "readWrite" , this.GPIOChip.readWrite);           
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip, "type"      , this.GPIOChip.type     );      

   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "pins"           , this.GPIOChip.RTC.pins          );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "direction"      , this.GPIOChip.RTC.direction     );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "totalBytes"     , this.GPIOChip.RTC.totalBytes    );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "bytesRemaining" , this.GPIOChip.RTC.bytesRemaining);
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "transferStep"   , this.GPIOChip.RTC.transferStep  );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "reading"        , this.GPIOChip.RTC.reading       );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "bitsRead"       , this.GPIOChip.RTC.bitsRead      );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "bits"           , this.GPIOChip.RTC.bits          );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "command"        , this.GPIOChip.RTC.command       );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "control"        , this.GPIOChip.RTC.control       );
   assign(IodineGUI.Iodine.IOCore.saves.GPIOChip.rtc, "time"           , this.GPIOChip.RTC.time          );

   assign(IodineGUI.Iodine.IOCore.saves.UNDETERMINED, "saves"   , this.UNDETERMINED.saves   );
   assign(IodineGUI.Iodine.IOCore.saves.UNDETERMINED, "possible", this.UNDETERMINED.possible);

   assign(IodineGUI.Iodine.IOCore.saves.SRAMChip, "TILTChip"         , this.SRAMChip.TILTChip        );
   assign(IodineGUI.Iodine.IOCore.saves.SRAMChip, "TILTChipUnlocked" , this.SRAMChip.TILTChipUnlocked);
   assign(IodineGUI.Iodine.IOCore.saves.SRAMChip, "saves"            , this.SRAMChip.saves           );

   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "BANKOffset"             , this.FLASHChip.BANKOffset             );    
   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "flashCommand"           , this.FLASHChip.flashCommand           );    
   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "flashCommandUnlockStage", this.FLASHChip.flashCommandUnlockStage);    
   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "largestSizePossible"    , this.FLASHChip.largestSizePossible    );    
   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "notATMEL"               , this.FLASHChip.notATMEL               );    
   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "saves"                  , this.FLASHChip.saves                  );         
   assign(IodineGUI.Iodine.IOCore.saves.FLASHChip, "writeBytesLeft"         , this.FLASHChip.writeBytesLeft         );    

   assign(IodineGUI.Iodine.IOCore.saves.EEPROMChip, "address"             , this.EEPROMChip.address            );    
   assign(IodineGUI.Iodine.IOCore.saves.EEPROMChip, "bitsProcessed"       , this.EEPROMChip.bitsProcessed      );          
   assign(IodineGUI.Iodine.IOCore.saves.EEPROMChip, "buffer"              , this.EEPROMChip.buffer             );   
   assign(IodineGUI.Iodine.IOCore.saves.EEPROMChip, "largestSizePossible" , this.EEPROMChip.largestSizePossible);                
   assign(IodineGUI.Iodine.IOCore.saves.EEPROMChip, "mode"                , this.EEPROMChip.mode               ); 
   assign(IodineGUI.Iodine.IOCore.saves.EEPROMChip, "saves"               , this.EEPROMChip.saves              );  
}


function SaveStateManager(IodineGUI) {
    //Reference to the emulator core:
    this.IodineGUI = IodineGUI;
    this.IOCore = IodineGUI.Iodine.IOCore;
    this.Iodine = IodineGUI.Iodine;
    this.slot = [];
}

SaveStateManager.prototype.init = function(IodineGUI) {
    this.IodineGUI = IodineGUI;
    this.IOCore = IodineGUI.Iodine.IOCore;
    this.Iodine = IodineGUI.Iodine;
}

SaveStateManager.prototype.saveState = function (slot) {

    let playing = this.IodineGUI.isPlaying;
    if (playing) this.Iodine.pause();

    this.slot[slot] = new SaveState(this.IOCore);

    if (playing) this.Iodine.play();
}

SaveStateManager.prototype.loadState = function (slot) {

    let playing = this.IodineGUI.isPlaying;
    if (playing) this.Iodine.pause();
    this.slot[slot].load(this.IOCore);
    if (playing) this.Iodine.play();
}

function initSaveStateManager() {
    if (window.saveStateManager) {
        window.saveStateManager.init(IodineGUI); 
    } else {
        window.saveStateManager =  new SaveStateManager(IodineGUI);
    }
};
