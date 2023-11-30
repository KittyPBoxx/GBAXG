class CommandExecutor  {

    constructor() {
        this._commands = new Map();
    }
                    
    register (name, command) {
        this._commands.set(name, command)
    } 

    execute (name, args = {}) {
        this._commands.get(name).call(args)
    }

    keyPress(k, exposedEmulationCore) {
        exposedEmulationCore.KeyDown_EmulationCore(k); 
        setTimeout(() => exposedEmulationCore.KeyUp_EmulationCore(k), 50);
    }
    
    init(exposedEmulationCore, saveManager) {

        /* Register Commands to simulate press and lift */
        this.register("AKeyUp"       , args => exposedEmulationCore.KeyUp_EmulationCore  (0) );
        this.register("AKeyDown"     , args => exposedEmulationCore.KeyDown_EmulationCore(0) );
        this.register("BKeyUp"       , args => exposedEmulationCore.KeyUp_EmulationCore  (1) );
        this.register("BKeyDown"     , args => exposedEmulationCore.KeyDown_EmulationCore(1) );
        this.register("SelectKeyUp"  , args => exposedEmulationCore.KeyUp_EmulationCore  (2) );
        this.register("SelectKeyDown", args => exposedEmulationCore.KeyDown_EmulationCore(2) );
        this.register("StartKeyUp"   , args => exposedEmulationCore.KeyUp_EmulationCore  (3) );
        this.register("StartKeyDown" , args => exposedEmulationCore.KeyDown_EmulationCore(3) );
        this.register("RightKeyDown" , args => exposedEmulationCore.KeyDown_EmulationCore(4) );
        this.register("RightKeyUp"   , args => exposedEmulationCore.KeyUp_EmulationCore  (4) );
        this.register("LeftKeyDown"  , args => exposedEmulationCore.KeyDown_EmulationCore(5) );
        this.register("LeftKeyUp"    , args => exposedEmulationCore.KeyUp_EmulationCore  (5) );
        this.register("UpKeyDown"    , args => exposedEmulationCore.KeyDown_EmulationCore(6) );
        this.register("UpKeyUp"      , args => exposedEmulationCore.KeyUp_EmulationCore  (6) );
        this.register("DownKeyDown"  , args => exposedEmulationCore.KeyDown_EmulationCore(7) );
        this.register("DownKeyUp"    , args => exposedEmulationCore.KeyUp_EmulationCore  (7) );
        this.register("RKeyDown"     , args => exposedEmulationCore.KeyDown_EmulationCore(8) );
        this.register("RKeyUp"       , args => exposedEmulationCore.KeyUp_EmulationCore  (8) );
        this.register("LKeyDown"     , args => exposedEmulationCore.KeyDown_EmulationCore(9) );
        this.register("LKeyUp"       , args => exposedEmulationCore.KeyUp_EmulationCore  (9) );

        /* Register Commands to simulate button tap */
        this.register("A"     , args => this.keyPress(0, exposedEmulationCore) /* A      */); 
        this.register("B"     , args => this.keyPress(1, exposedEmulationCore) /* B      */); 
        this.register("Select", args => this.keyPress(2, exposedEmulationCore) /* Select */); 
        this.register("Start" , args => this.keyPress(3, exposedEmulationCore) /* Start  */); 
        this.register("Right" , args => this.keyPress(4, exposedEmulationCore) /* Right  */); 
        this.register("Left"  , args => this.keyPress(5, exposedEmulationCore) /* Left   */); 
        this.register("Up"    , args => this.keyPress(6, exposedEmulationCore) /* Up     */); 
        this.register("Down"  , args => this.keyPress(7, exposedEmulationCore) /* Down   */); 
        this.register("R"     , args => this.keyPress(8, exposedEmulationCore) /* R      */); 
        this.register("L"     , args => this.keyPress(9, exposedEmulationCore) /* L      */); 


        /* Second Mapping Reuested For A/B keys mappings */
        this.register("AltAKeyUp"       , args => exposedEmulationCore.KeyUp_EmulationCore  (0) );
        this.register("AltAKeyDown"     , args => exposedEmulationCore.KeyDown_EmulationCore(0) );
        this.register("AltBKeyUp"       , args => exposedEmulationCore.KeyUp_EmulationCore  (1) );
        this.register("AltBKeyDown"     , args => exposedEmulationCore.KeyDown_EmulationCore(1) );


        /* Turbo Mappings Reuested For A/B keys mappings */
        var turboRepeatDelay = 5;

        this.register("TurboAKeyDown"     , (args) => {
            exposedEmulationCore.KeyDown_EmulationCore(0)  // A
            if (!exposedEmulationCore.aMashInterval) {
                exposedEmulationCore.aMashInterval = setInterval(() => { this.keyPress(0, exposedEmulationCore) }, turboRepeatDelay);
            }
        });
        this.register("TurboAKeyUp"       , (args) => { 
            exposedEmulationCore.KeyUp_EmulationCore(0);
            clearInterval(exposedEmulationCore.aMashInterval);
            exposedEmulationCore.aMashInterval = null;
        });
        
        this.register("TurboBKeyDown"     , (args) => {
            exposedEmulationCore.KeyDown_EmulationCore(1) // B
            if (!exposedEmulationCore.bMashInterval) {
                exposedEmulationCore.bMashInterval = setInterval(() => { this.keyPress(1, exposedEmulationCore) }, turboRepeatDelay);
            }
        });             
        
        this.register("TurboBKeyUp"       , (args) => {
            exposedEmulationCore.KeyUp_EmulationCore(1);
            clearInterval(exposedEmulationCore.bMashInterval);
            exposedEmulationCore.bMashInterval = null;
        });

        this.register("Reset", args => saveManager.startGameOrReset());
        this.register("Play", args => exposedEmulationCore.play_EmualationCore());
        this.register("Stop", args => exposedEmulationCore.pause_EmualationCore());

        this.register("volumeInc" , args => { exposedEmulationCore.increaseVolume_EmulationCore(); });

        this.register("volumeDec" , args => { exposedEmulationCore.decreaseVolume_EmulationCore(); });
    }

}

export default CommandExecutor;



