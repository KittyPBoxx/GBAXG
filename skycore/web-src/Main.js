import UI from '../web-src/UI.js';
import RamHook from '../web-src/RamHook.js';
import ExposedEmulationCore from '../web-src/ExposedEmulationCore.js';
import CommandExecutor from '../web-src/Command.js';
import KeybindManager from '../web-src/KeybindManager.js';
import { Randomiser } from "../web-src/randomiser/Randomisation.js";
import RomLoader from '../web-src/RomLoader.js';
import SaveManager from '../web-src/SaveManager.js';

class GBAXG {

    constructor() {
        this.VERSION_NUMBER = "1.0.1-ALPHA"
        this.ui = null;
        this.ramHook = null;
        this.exposedEmulationCore = null;
        this.commandExecutor = null;
        this.keybindManager = null;
        this.randomiser = null;
        this.romLoader = null;
        this.saveManager = null;
    }

    initEmulatorManagment() {

        this.exposedEmulationCore = new ExposedEmulationCore();

        this.randomiser = new Randomiser(true);

        this.commandExecutor = new CommandExecutor();

        this.ramHook = new RamHook(this.randomiser, this.exposedEmulationCore);
        this.ramHook.init();

        this.romLoader = new RomLoader(this.exposedEmulationCore, this.commandExecutor, this.ramHook);

        this.saveManager = new SaveManager(this.exposedEmulationCore, this.ramHook);
    
        this.commandExecutor.init(this.exposedEmulationCore, this.saveManager);
    
        this.keybindManager = new KeybindManager(this.commandExecutor);
        this.keybindManager.addListeners();
        this.keybindManager.loadSavedKeybinds();

        this.ui = new UI(document.getElementById("ui"), this);
        this.ui.draw();
        new ResizeObserver(() => {
            window.dispatchEvent(new Event('resize'));

            if (this.ui.isVisible && this.ui.reselectRequired) {
                this.ui.reselectRequired = false;
                this.ui.root.querySelector('sl-tab-group').show(this.ui.lastActiveId);
            }
        }).observe(document.getElementById("container"));
    }
}

window.GBAXG = new GBAXG();

Module['onRuntimeInitialized'] = createUI();

function createUI() {
    console.log("wasm loaded");

    let initGBAXG;
    
    // Make sure the UI actually gets loaded after the file system setup is done
    initGBAXG = setInterval(() => {
        if (FS.analyzePath('/offline/').exists) {
            window.GBAXG.initEmulatorManagment();

            if (!window.GBAXG.randomiser.hash) {
                window.GBAXG.randomiser.loadSavedMappings();
            }
            
            clearInterval(initGBAXG);
        }
        setTimeout(() => { 
            window.GBAXG.ui.draw();
            if (!window.GBAXG.randomiser.hash) {
                window.GBAXG.randomiser.loadSavedMappings();
            } 
        }, 1000);
        setTimeout(() => {
             window.GBAXG.ui.draw();
             if (!window.GBAXG.randomiser.hash) {
                window.GBAXG.randomiser.loadSavedMappings();
            } 
        }, 5000);

        document.getElementById("audio-context-refresh").remove();
    }, 100);

}



