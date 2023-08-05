import { PKWarp } from "../web-src/randomiser/Randomisation.js";

class RamHook {

    constructor(randomiser, exposedEmulationCore) {
        this.randomiser = randomiser;
        this.exposedEmulationCore = exposedEmulationCore;
        this.gameStateManager = new GameStateManager(this.exposedEmulationCore);
        this.warpHandler = new WarpHandler(this.randomiser, this.exposedEmulationCore, this.gameStateManager);
    }

    init() {
        if (typeof mergeInto !== 'undefined') mergeInto(LibraryManager.library, {
            externalCpuRead8Intercept: function(address) {
                return this.cpuRead8(address);
            },
            externalCpuWrite8Intercept: function(address, data) {
                return this.cpuWrite8(address, data);
            },
            externalCpuWrite32Intercept: function(address, data) {
                return this.cpuWrite32(address, data);
            },
            externaSaveIntercept: function() {
            }
        });

        // fallback in case the lbrary replacement didn't work
        cpuRead8 = address => { return this.cpuRead8(address) }
        cpuWrite8 = (address, data) => { return this.cpuWrite8(address, data) }
        cpuWrite32 = address => { return this.cpuWrite32(address) }
        saveIntercept = () => this.saveIntercept();

        this.processSave = this.debounce(() => this.saveIntercept());
    }

    cpuRead8(address) {

        if (address == -1000) {
            this.processSave();
            return;
        }

        console.log("Read 8 " + address);
        return this.warpHandler.onWarpBeingRead(address);
    }
    
    cpuWrite8(address, data) {
        console.log("Write 8 " + address);
        return this.warpHandler.onWarpBeingSet(address, data);
    }
    
    cpuWrite32(address) {
        console.log("Write 32 " + address);
        this.warpHandler.onHeaderBeingSet(address);
        return false;
    }

    saveIntercept(saveManager) {
        console.log("Save Intercept");
        GBAXG.saveManager.saveSlot3();
    }

    debounce(func, timeout = 800){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

}

class WarpHandler {

    constructor(randomiser, exposedEmulationCore, gameStateManager) {
        this.randomiser = randomiser;
        this.exposedEmulationCore = exposedEmulationCore;
        this.warpingState = WarpingState.NOT_WARPING;
        this.switchingState = SwitchingState.NOT_SWITCHING;
        this.gameStateManager = gameStateManager; 
        this.nextWarp = null;
        this.lastTrigger = null;
        this.randomWarpsEnabled = true;
        this.fromGameSpeed = 1;

        this.autoInitMode = false;
        this.autoInitCallback = () => {};

        this.warpsWherePositionNeedsFixing = new Map();
        this.warpsWherePositionNeedsFixing.set("E,0,1,5"    , [0x1E, 0x1B]);
        this.warpsWherePositionNeedsFixing.set("E,0,5,0"    , [0x1B, 0x07]);
        this.warpsWherePositionNeedsFixing.set("E,0,2,0"    , [0x08, 0x06]);
        this.warpsWherePositionNeedsFixing.set("E,0,7,5"    , [0x2D, 0x07]);
        this.warpsWherePositionNeedsFixing.set("E,0,7,9"    , [0x35, 0x1D]);
        this.warpsWherePositionNeedsFixing.set("E,0,7,4"    , [0x09, 0x07]);
        this.warpsWherePositionNeedsFixing.set("E,0,8,2"    , [0x12, 0x2A]);
        this.warpsWherePositionNeedsFixing.set("E,0,11,3"   , [0x11, 0x0E]);
        this.warpsWherePositionNeedsFixing.set("E,0,12,5"   , [0x09, 0x02]);
        this.warpsWherePositionNeedsFixing.set("E,0,14,4"   , [0x08, 0x02]);
        this.warpsWherePositionNeedsFixing.set("E,0,15,0"   , [0x08, 0x10]);
        this.warpsWherePositionNeedsFixing.set("E,0,26,0"   , [0x0D, 0x72]);
        this.warpsWherePositionNeedsFixing.set("E,11,0,2"   , [0x0E, 0x02]);
        this.warpsWherePositionNeedsFixing.set("E,14,9,2"   , [0x0D, 0x02]);
        this.warpsWherePositionNeedsFixing.set("E,14,10,2"  , [0x0d, 0x02]);
        this.warpsWherePositionNeedsFixing.set("E,16,10,2"  , [0x09, 0x02]);
        this.warpsWherePositionNeedsFixing.set("E,24,8,2"   , [0x1D, 0x0D]);
        this.warpsWherePositionNeedsFixing.set("E,24,8,3"   , [0x1C, 0x15]);
        this.warpsWherePositionNeedsFixing.set("E,24,9,0"   , [0x1D, 0x0D]);
        this.warpsWherePositionNeedsFixing.set("E,24,9,1"   , [0x1C, 0x15]);
        this.warpsWherePositionNeedsFixing.set("E,24,13,4"  , [0x10, 0x13]);
        this.warpsWherePositionNeedsFixing.set("E,24,16,4"  , [0x0B, 0x09]);
        this.warpsWherePositionNeedsFixing.set("E,24,16,2"  , [0x0A, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,24,17,5"  , [0x06, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,24,17,4"  , [0x0A, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,24,18,2"  , [0x0C, 0x0A]);
        this.warpsWherePositionNeedsFixing.set("E,24,18,3"  , [0x0C, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,24,19,3"  , [0x0C, 0x0A]);
        this.warpsWherePositionNeedsFixing.set("E,24,19,4"  , [0x0C, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,24,24,10" , [0x20, 0x13]);
        this.warpsWherePositionNeedsFixing.set("E,24,25,5"  , [0x05, 0x08]);
        this.warpsWherePositionNeedsFixing.set("E,24,25,9"  , [0x20, 0x14]);
        this.warpsWherePositionNeedsFixing.set("E,24,29,2"  , [0x06, 0x01]);
        this.warpsWherePositionNeedsFixing.set("E,24,78,0"  , [0x11, 0x0D]);
        this.warpsWherePositionNeedsFixing.set("E,24,81,0"  , [0x03, 0x01]);
        this.warpsWherePositionNeedsFixing.set("E,24,82,1"  , [0x07, 0x01]);
        this.warpsWherePositionNeedsFixing.set("E,24,95,0"  , [0x12, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,24,96,0"  , [0x12, 0x0C]);
        this.warpsWherePositionNeedsFixing.set("E,26,74,1"  , [0x05, 0x05]);
        this.warpsWherePositionNeedsFixing.set("E,26,87,0"  , [0x0E, 0x13]);
        this.warpsWherePositionNeedsFixing.set("E,0,10,5"   , [0x0A, 0x09]);
        this.warpsWherePositionNeedsFixing.set("E,16,0,1"   , [0x06, 0x03]);
        this.warpsWherePositionNeedsFixing.set("E,16,1,1"   , [0x06, 0x03]);
        this.warpsWherePositionNeedsFixing.set("E,16,2,1"   , [0x06, 0x03]);
        this.warpsWherePositionNeedsFixing.set("E,16,3,1"   , [0x06, 0x03]);

        this.warpsWherePositionNeedsFixing.set("FR,3,3,7"   , [0x01, 0x0D]);
        this.warpsWherePositionNeedsFixing.set("FR,3,10,3"  , [0x2E, 0x0D]);
        this.warpsWherePositionNeedsFixing.set("FR,3,10,1"  , [0x16, 0x0F]);
        this.warpsWherePositionNeedsFixing.set("FR,3,10,4"  , [0x1B, 0x16]);

        this.warpsWherePositionNeedsFixing.set("C,0,11,2"   , [0x11, 0x12]);
        this.warpsWherePositionNeedsFixing.set("C,0,11,6"   , [0x25, 0x0A]);
        this.warpsWherePositionNeedsFixing.set("C,0,13,1"   , [0x07, 0x0E]);
        this.warpsWherePositionNeedsFixing.set("C,0,5,7"    , [0x16, 0x04]);
        this.warpsWherePositionNeedsFixing.set("C,0,5,1"    , [0x15, 0x0F]);

        this.escalatorTriggers = new Set();
        this.escalatorTriggers.add("E,8,5,0"  );
        this.escalatorTriggers.add("E,9,12,0" );
        this.escalatorTriggers.add("E,10,6,0" );
        this.escalatorTriggers.add("E,11,6,0" );
        this.escalatorTriggers.add("E,12,3,0" );
        this.escalatorTriggers.add("E,13,7,0" );
        this.escalatorTriggers.add("E,14,4,0" );
        this.escalatorTriggers.add("E,15,3,0" );
        this.escalatorTriggers.add("E,16,13,0");
        this.escalatorTriggers.add("E,16,14,0");
        this.escalatorTriggers.add("E,2,3,0"  );
        this.escalatorTriggers.add("E,3,2,0"  );
        this.escalatorTriggers.add("E,4,6,0"  );
        this.escalatorTriggers.add("E,5,5,0"  );
        this.escalatorTriggers.add("E,6,5,0"  );
        this.escalatorTriggers.add("E,7,1,0"  );

        this.escalatorTriggers.add("FR,5,5,0"  );
        this.escalatorTriggers.add("FR,6,6,0"  );
        this.escalatorTriggers.add("FR,7,4,0"  );
        this.escalatorTriggers.add("FR,8,1,0"  );
        this.escalatorTriggers.add("FR,10,13,0");
        this.escalatorTriggers.add("FR,11,6,0" );
        this.escalatorTriggers.add("FR,12,6,0" );
        this.escalatorTriggers.add("FR,13,1,0" );
        this.escalatorTriggers.add("FR,16,1,0" );
        this.escalatorTriggers.add("FR,21,1,0" );

        this.escalatorTriggers.add("C,8,5,0"  );
        this.escalatorTriggers.add("C,24,94,0");
        this.escalatorTriggers.add("C,3,2,0"  );
        this.escalatorTriggers.add("C,11,6,0" );
        this.escalatorTriggers.add("C,9,12,0" );
        this.escalatorTriggers.add("C,10,6,0" );
        this.escalatorTriggers.add("C,4,6,0"  );
        this.escalatorTriggers.add("C,5,5,0"  );
        this.escalatorTriggers.add("C,13,7,0" );
        this.escalatorTriggers.add("C,16,14,0");
    }

    onWarpBeingSet(address, data) {

        if (!(address == (WarpHandler.EMERALD_CURRENT_BANK + 2) || address == (WarpHandler.FIRE_RED_CURRENT_BANK + 2))){
            // This check is 'safe' because the game+addr combo is already checked in c
            return false;
        }

        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        let trigger = this.getTargetWarpBeforeWarpSet(currentGame, data);

        if (this.autoInitMode) {
            this.doSaveStateBeforeWarp(address, data);
            setTimeout(() => GBAXG.exposedEmulationCore.pause_EmualationCore(), 200);
            this.autoInitMode = false;
            this.autoInitCallback();
            return false;
        }

        if (this.isHomeWarpTrigger(trigger)) {
            this.warpingState = WarpingState.SETTING_NEW_WARP_ADDRESS;
            this.doSaveStateBeforeWarp(address, data);
        } else if (this.warpingState == WarpingState.NOT_WARPING && data != 255) {
            this.warpingState = WarpingState.SETTING_NEW_WARP_ADDRESS;
            this.saveStateIfGoingToSwitchGame(currentGame, trigger, address, data);
        }

        return false;
    }

    saveStateIfGoingToSwitchGame(currentGame, trigger, address, data) {

        this.fromGameSpeed = this.exposedEmulationCore.getSpeed_EmulationCore();

        if (this.nextWarp != null) {
            this.doSaveStateBeforeWarp(address, data);
            return;
        }

        let redirect = this.randomiser.remappingData.get(trigger);

        if (redirect == null) {
            return;
        }

        if (currentGame != redirect.gameCode) {
            this.doSaveStateBeforeWarp(address, data);
        }
    }

    doSaveStateBeforeWarp(address, data) {
        this.exposedEmulationCore.saveState_EmulationCore(0);
    }

    getTargetWarpBeforeWarpSet(currentGame, nextWarp) {

        let nextBank = null;
        let nextMap = null;

        if (currentGame == "FR") {
            nextBank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_BANK);
            nextMap = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_MAP);
        } else {
            nextBank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK);
            nextMap = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_MAP);
        }

        return currentGame + "," + nextBank + "," + nextMap + "," + nextWarp;

    }

    getTargetWarp(currentGame) {

        let nextBank = null;
        let nextMap = null;
        let nextWarp = null;

        if (currentGame == "FR") {
            nextBank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_BANK);
            nextMap = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_MAP);
            nextWarp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_WARP);
        } else {
            nextBank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK);
            nextMap = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_MAP);
            nextWarp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_WARP);
        }

        return currentGame + "," + nextBank + "," + nextMap + "," + nextWarp;

    }

    isHomeWarpTrigger(trigger) {
        if (trigger == "FR,11,0,255" && !this.gameStateManager.varManager.isInSafari()) { 
            return true;
        }
        if (trigger == "E,23,0,255" && !this.gameStateManager.varManager.isInSafari()) { 
            return true;
        }
        if (trigger == "C,23,0,255") {
            return true;
        } 

        return false;
    }

    handleScriptOrRouteWarp(trigger) {
        if (trigger == "E,8,1,255") {
            // Special Handling when warping to normans gym after catch tutorial
            this.gameStateManager.varManager.writeGameVar(0x4085, 6);
            this.gameStateManager.varManager.setBaseFlag(0x2D6);
            this.gameStateManager.varManager.setBaseFlag(0x362);
        }
    }

    handleHomeWarp(trigger) {
        if (trigger == "FR,11,0,255" && this.nextWarp == null && !this.gameStateManager.varManager.isInSafari()) {
            // FireRed Home Warp
            this.nextWarp = new PKWarp(trigger, "FR", 4, 1, 0, null);
            this.gameStateManager.varManager.writeGameVar(0x406E, 0);
        } else if (trigger == "E,23,0,255" && this.nextWarp == null && !this.gameStateManager.varManager.isInSafari()) {
            // Emerald Home Warp
            this.nextWarp = new PKWarp(trigger, "E", 1, 3, 0, null);
            this.gameStateManager.varManager.writeGameVar(0x40A4, 0);
        } else if (trigger == "C,23,0,255" && this.nextWarp == null) {
            // Crystal Home Warp
            this.nextWarp = new PKWarp(trigger, "C", 1, 1, 0, null);
        }
    }

    onWarpBeingRead(address) {

        if (!(address == WarpHandler.EMERALD_CURRENT_BANK || address == WarpHandler.FIRE_RED_CURRENT_BANK)){
            // This check is 'safe' because the game+addr combo is already checked in c
            return false;
        }

        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        let trigger = this.getTargetWarp(currentGame);

        if (trigger.split(",")[3] == 255) {
            this.handleScriptOrRouteWarp(trigger);
        }

        if (this.warpingState == WarpingState.SAVE_STATE_LOAD) {
            this.doReverseWarp();
        } else if (this.warpingState == WarpingState.NOT_WARPING || this.warpingState == WarpingState.READ_FIRST_WARP_ADDRESS) {
            return false;
        } else if (this.switchingState == SwitchingState.PREPARING_TO_SWITCH) {
            return false;
        } else if (this.warpingState == WarpingState.SETTING_NEW_WARP_ADDRESS) {
            this.lastTrigger = trigger;
        }

        if (trigger.split(",")[3] == 255) {
            this.handleHomeWarp(trigger);
        }

        if (this.nextWarp == null && this.randomWarpsEnabled) {
            // Warp from remapping data
            this.nextWarp = this.randomiser.remappingData.get(trigger);
        }

        if (this.nextWarp == null) {
            // A vanilla warp
            this.warpingState = WarpingState.NOT_WARPING;
            return false;
        }

        if (currentGame != this.nextWarp.toRomCode) {
            this.switchingState = SwitchingState.PREPARING_TO_SWITCH;
            return false;
        }

        if (this.nextWarp != null) {

            if (currentGame == "FR") {
                this.exposedEmulationCore.writeCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_BANK, this.nextWarp.toBank);
                this.exposedEmulationCore.writeCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_MAP, this.nextWarp.toMap);
                this.exposedEmulationCore.writeCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_WARP, this.nextWarp.toWarpNo);
            } else {
                this.exposedEmulationCore.writeCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK, this.nextWarp.toBank);
                this.exposedEmulationCore.writeCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_MAP, this.nextWarp.toMap);
                this.exposedEmulationCore.writeCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_WARP, this.nextWarp.toWarpNo);
            }

            this.nextWarp = null;
        }

        this.warpingState = WarpingState.READ_FIRST_WARP_ADDRESS;

        return false;
    }

    doReverseWarp() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        let trigger = this.getTargetWarp(currentGame);
        let nextTriggerMapping = this.randomiser.remappingData.get(trigger);

        if (nextTriggerMapping == null) {
            console.warn("No mapping data for a warp. Falling back to last bank");

            let bank = 0;
            let map = 0;
            let warp = 0;

            if (currentGame == "FR") {
                bank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_LAST_BANK);
                map = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_LAST_BANK + 1);
                warp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_LAST_BANK + 2);
            } else {
                bank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_LAST_BANK);
                map = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_LAST_BANK + 1);
                warp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_LAST_BANK + 2);
            }

            if (warp == 255) {
                // If the last bank was done using a special warp just load to the first warp in that area
                warp = 0;
            }

            this.nextWarp = new PKWarp(trigger, currentGame, bank, map, warp, null);

        } else {
            let nextSource = this.randomiser.remappingData.get(trigger).source;
            let nextSourceParts = nextSource.split(",");
            this.nextWarp = new PKWarp(trigger, nextSourceParts[0], nextSourceParts[1], nextSourceParts[2], nextSourceParts[3], nextSource);
        }
    }

    setNextForcedWarp(game, bank, map, warp) {

        let gameCode = "FR";
        if (game == 1) {
            gameCode = "FR";
        } else if (game == 2) {
            gameCode = "C";
        } else if (game == 3) {
            gameCode = "E";
        }


        this.nextWarp = new PKWarp(null, gameCode, bank, map, warp, null)
    }

    onHeaderBeingSet(address) {

        if (!(address == WarpHandler.EMERALD_gMapHeader || address == WarpHandler.FIRE_RED_gMapHeader)){
            // This check is 'safe' because the game+addr combo is already checked in c
            return false;
        }

        if (this.warpingState == WarpingState.SETTING_NEW_WARP_ADDRESS && this.switchingState == SwitchingState.PREPARING_TO_SWITCH) {
            this.exposedEmulationCore.hideGame_EmulationCore();
            this.gameStateManager.extractData(); 
            this.exposedEmulationCore.loadState_EmulationCore(this.nextWarp.toRomCode, 0);
            let warpHandler = this;
            setTimeout(() => { 
                this.switchingState = SwitchingState.SWITCHED_STILL_HIDDEN;
                warpHandler.exposedEmulationCore.loadState_EmulationCore(this.nextWarp.toRomCode, 0);
            }, 100);
        } else if (! (this.warpingState == WarpingState.READ_FIRST_WARP_ADDRESS || 
                      this.warpingState == WarpingState.PRE_LOAD_HANDLING_DONE_1 || 
                      this.warpingState == WarpingState.PRE_LOAD_HANDLING_DONE_2)) {
            return false;
        } else if (this.switchingState == SwitchingState.SWITCHED_STILL_HIDDEN) {
            this.gameStateManager.injectData();
            this.exposedEmulationCore.showGame_EmulationCore();

            if (this.gameStateManager.walkThroughWalls) {
                this.exposedEmulationCore.disableWalls();
            } else {
                this.exposedEmulationCore.enableWalls();
            }

            this.switchingState = SwitchingState.NOT_SWITCHING;
        } else if (this.warpingState == WarpingState.READ_FIRST_WARP_ADDRESS) {
            this.postWarpPreMapLoadHandling();
            this.warpingState = WarpingState.PRE_LOAD_HANDLING_DONE_1;
        } else if (this.warpingState == WarpingState.PRE_LOAD_HANDLING_DONE_1) {
            this.warpingState = WarpingState.PRE_LOAD_HANDLING_DONE_2;
        } else if (this.warpingState == WarpingState.PRE_LOAD_HANDLING_DONE_2) {
            this.postWarpPostMapLoadHandling();
            this.warpingState = WarpingState.NOT_WARPING;
        }

        this.exposedEmulationCore.setSpeed_EmulationCore(this.fromGameSpeed);

        return false;
    }

    postWarpPreMapLoadHandling() {
        this.exposedEmulationCore.pause_EmualationCore();
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        let bank = 0;
        let map = 0;
        let warp = 0;
        let destination = null;

        if (currentGame === "E") {
            bank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK);
            map = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK + 1);
            warp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK + 2);
    
            destination = "E" + "," + bank + "," + map + "," + warp;
    
            // if (destination == "E,24,33,2") {
            //     // Seafloor caven stop walking on water
            //     forceStateAfterDelay(MOVEMENT_MODE_SURF, 1000);
            // } 
            
            if (destination == "E,16,0,0") {
                // E4 rooms needs to walk fowards when entering
                this.gameStateManager.varManager.writeGameVar(0x409C, 0);
            } else if (destination == "E,16,0,1")  {
                this.gameStateManager.varManager.writeGameVar(0x409C, 1);
            } else if (destination == "E,16,1,0") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 1);
            } else if (destination == "E,16,1,1") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 2);
            } else if (destination == "E,16,2,0") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 2);
            } else if (destination == "E,16,2,1") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 3);
            } else if (destination == "E,16,3,0") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 3);
            } else if (destination == "E,16,3,1") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 4);
            } else if (destination == "E,8,1,0") {
                // If catch tutorial hasn't been done we set to that
                // otherwise we set to battle state
                let petalburgState = this.gameStateManager.varManager.readGameVar(0x4057);
                if (petalburgState < 1) {
                    this.gameStateManager.varManager.writeGameVar(0x4085, 0)
                } else {
                    this.gameStateManager.varManager.writeGameVar(0x4085, 6)
                }
        
                // Unlock left of petalburg
                this.gameStateManager.varManager.writeGameVar(0x4057, 1);
            } else if (destination == "E,10,0,0") {
                    this.gameStateManager.varManager.clearBaseFlag(0x391);
            } else if (destination == "E,29,1,0" || destination == "E,29,1,1") {
                if (this.gameStateManager.varManager.readGameVar(0x4044) > 7) {
                    this.gameStateManager.varManager.writeGameVar(0x4044, 7);
                }
            } else if (destination == "E,14,7,0") {
                if (this.gameStateManager.varManager.readGameVar(0x40C6) == 0) {
                    this.gameStateManager.varManager.writeGameVar(0x40C6, 1);
                    this.gameStateManager.varManager.clearBaseFlag(0x3C7);
                }
            }
    
        }
    
        if (currentGame === "C") {
            bank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK);
            map = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK + 1);
            warp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.EMERALD_CURRENT_BANK + 2);
    
            destination = "C" + "," + bank + "," + map + "," + warp;
    
            if (destination == "C,16,0,0") {
                // E4 rooms needs to walk fowards when entering
                this.gameStateManager.varManager.writeGameVar(0x409C, 1);
            } else if (destination == "C,16,0,1")  {
                this.gameStateManager.varManager.writeGameVar(0x409C, 1);
            } else if (destination == "C,16,1,0") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 2);
            } else if (destination == "C,16,1,1") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 2);
            } else if (destination == "C,16,2,0") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 3);
            } else if (destination == "C,16,2,1") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 3);
            } else if (destination == "C,16,3,0") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 4);
            } else if (destination == "C,16,3,1") {
                this.gameStateManager.varManager.writeGameVar(0x409C, 4);
            }
    
        }
    
        if (currentGame === "FR") {
            bank = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_BANK);
            map = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_BANK + 1);
            warp = this.exposedEmulationCore.readCpu8_EmulationCore(WarpHandler.FIRE_RED_CURRENT_BANK + 2);
    
            destination = "FR" + "," + bank + "," + map + "," + warp;
            // if (destination == "FR,1,86,6" || destination == "FR,1,86,5" || destination == "FR,1,87,2" || destination == "FR,1,87,3") {
            //     // Seafoam islands stop walking on water
            //     forceStateAfterDelay(MOVEMENT_MODE_SURF, 3800);
            // }
            
            if (destination == "FR,1,75,0") {
                // E4 rooms needs to walk fowards when entering
                this.gameStateManager.varManager.writeGameVar(0x4068, 0);
            } else if (destination == "FR,1,75,1")  {
                this.gameStateManager.varManager.writeGameVar(0x4068, 1);
            } else if (destination == "FR,1,76,0") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 1);
            } else if (destination == "FR,1,76,1") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 2);
            } else if (destination == "FR,1,77,0") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 2);
            } else if (destination == "FR,1,77,1") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 3);
            } else if (destination == "FR,1,78,0") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 3);
            } else if (destination == "FR,1,78,1") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 4);
            } else if (destination == "FR,1,79,0") {
                this.gameStateManager.varManager.writeGameVar(0x4068, 4);
            }
        }

        this.exposedEmulationCore.play_EmualationCore();
    }

    postWarpPostMapLoadHandling() {

        this.exposedEmulationCore.pause_EmualationCore();
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();


        if (this.lastTrigger != null) {
            let destination = this.getTargetWarp(currentGame) 
            this.fixPlayerPosition(currentGame, destination);
        }

        this.exposedEmulationCore.play_EmualationCore();
    }

    fixPlayerPosition(currentGame, destination) {

        let positionForcing = this.warpsWherePositionNeedsFixing.get(destination) || null;
        let fromEscalator = this.escalatorTriggers.has(this.lastTrigger);
    
        if (!(positionForcing != null || fromEscalator)) {
            return;
        } 
    
        let xAddress = null;
        let yAddress = null;
    
        if (currentGame === "FR") {
    
            let save1Start = this.gameStateManager.getSaveBlock1("FR");
            xAddress = save1Start;
            yAddress = save1Start + 2;
    
        } else {
    
            let save1Start = this.gameStateManager.getSaveBlock1("E");
            xAddress = save1Start;
            yAddress = save1Start + 2;
        }
    
        let updatedXPos = null;
        let updatedYPos = null;
    
        if (positionForcing != null) {
            updatedXPos = positionForcing[0];
            updatedYPos = positionForcing[1];
        } else {
            updatedXPos = this.exposedEmulationCore.readCpu16_EmulationCore(xAddress);
            updatedYPos = this.exposedEmulationCore.readCpu16_EmulationCore(yAddress);
        }
    
        if (fromEscalator) {
            updatedXPos = updatedXPos - 1;
        }
    
        // set the new x/y;
        this.exposedEmulationCore.writeCpu16_EmulationCore(xAddress, updatedXPos);
        this.exposedEmulationCore.writeCpu16_EmulationCore(yAddress, updatedYPos);

    }

    runAutoInit(warpHandler, callback) {
        warpHandler.autoInitCallback = callback;
        warpHandler.autoInitMode = true;
    }

    static get FIRE_RED_LAST_BANK()     { return  0x2031DB4; }
    static get FIRE_RED_CURRENT_BANK()  { return  0x2031dbc; }
    static get FIRE_RED_CURRENT_MAP()   { return  0x2031dbd; }
    static get FIRE_RED_CURRENT_WARP()  { return  0x2031dbe; }
    static get EMERALD_LAST_BANK()      { return  0x20322DC; }
    static get EMERALD_CURRENT_BANK()   { return  0x20322e4; }
    static get EMERALD_CURRENT_MAP()    { return  0x20322e5; }
    static get EMERALD_CURRENT_WARP()   { return  0x20322e6; }
    static get EMERALD_gMapHeader()     { return  0x2037318; }
    static get FIRE_RED_gMapHeader()    { return  0x2036dfc; }
}

class WarpingState {

    // Game is not currently doing any warps
    static get NOT_WARPING () {
        return "NOT_WARPING";
    }

    // Game is not currently doing any warps
    static get SAVE_STATE_LOAD () {
        return "SAVE_STATE_LOAD";
    }
    

    // Game is writing to warp bank (i.e player is stepping on a warp tile)
    static get SETTING_NEW_WARP_ADDRESS () {
        return "SET_NEW_WARP_ADDRESS";
    }

    // Game is reading a value from warp bank for first time (i.e preparing to change maps)
    static get READ_FIRST_WARP_ADDRESS () {
        return "READ_FIRST_WARP_ADDRESS";
    }

    // Made any changes we need to before the load
    static get PRE_LOAD_HANDLING_DONE_1 () {
        return "PRE_LOAD_HANDLING_DONE_1";
    }

    // Made any changes we need to before the load
    static get PRE_LOAD_HANDLING_DONE_2 () {
        return "PRE_LOAD_HANDLING_DONE_2";
    }

}

class SwitchingState {

    static get NOT_SWITCHING () {
        return "NOT_SWITCHING";
    }

    static get PREPARING_TO_SWITCH () {
        return "PREPARING_TO_SWITCH";
    }

    static get SWITCHED_STILL_HIDDEN () {
        return "SWITCHED_STILL_HIDDEN";
    }

}

class GameStateManager {
    constructor(exposedEmulationCore) {
        this.exposedEmulationCore = exposedEmulationCore;
        this.trainerManager = new TrainerManager(this, exposedEmulationCore);
        this.bagManager = new BagManager(this, exposedEmulationCore);
        this.varManager = new VarManager(this, exposedEmulationCore);
        this.fromGame = null;
        this.toGame = null;
        this.walkThroughWalls = false;
    }

    extractData() {
        this.fromGame = this.exposedEmulationCore.getGame_EmulationCore();
        this.trainerManager.extractData();
        this.bagManager.extractData();
        this.varManager.extractFlags();
    }

    injectData() {
        this.toGame = this.exposedEmulationCore.getGame_EmulationCore();
        this.trainerManager.injectData();
        this.bagManager.injectData();
        this.varManager.injectFlags();
    }

    getSaveBlock1(game) {
        if (game == "FR") {
            return this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
        } else {
            return this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);
        }
    }

    getSaveBlock2(game) {
        if (game == "FR") {
            return this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
        } else {
            return this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
        }
    }

    getSaveBlock3(game) {
        if (game == "FR") {
            return this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_3_ADDR);
        } else {
            return this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_3_ADDR);
        }
    }

    readMemorySection(address, length) {
        let data = [];
        for (let i = 0; i<length; i++) {
            data.push(this.exposedEmulationCore.readCpu8_EmulationCore(address + i));
        }
        return data;
    }

    writeMemorySection(address, data, length) {
        for (let i = 0; i<length; i++) {
            this.exposedEmulationCore.writeCpu8_EmulationCore(address + i, data[i]);
        }
    }

    static get FIRE_RED_SAVE_BLOCK_1_ADDR()  { return  0x03005008; }
    static get FIRE_RED_SAVE_BLOCK_2_ADDR()  { return  0x0300500C; }
    static get FIRE_RED_SAVE_BLOCK_3_ADDR()  { return  0x03005010; }
    static get EMERALD_SAVE_BLOCK_1_ADDR()   { return  0x03005D8C; }
    static get EMERALD_SAVE_BLOCK_2_ADDR()   { return  0x03005d90; }
    static get EMERALD_SAVE_BLOCK_3_ADDR()   { return  0x03005d94; }
}

class TrainerManager {
    constructor(gameStateManager, exposedEmulationCore) {
        this.gameStateManager = gameStateManager;
        this.exposedEmulationCore = exposedEmulationCore;

        this.party = null;
        this.playerNameAndState = null;
        this.playTimeAndId = null;
        this.box1 = null;
    }

    extractData() {
        this.extractParty();
        this.extractPlayerNameAndState();
        this.extractIdAndPlayTime();
        this.extractBox1();
    }

    injectData() {
        this.injectParty();
        this.injectPlayerNameAndState();
        this.injectIdAndPlayTime();
        this.injectBox1();
    }

    extractParty() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            this.party = this.gameStateManager.readMemorySection(TrainerManager.FIRE_RED_PARTY_OFFSET, TrainerManager.PLAYER_PARTY_LENGTH);
        } else {
            this.party = this.gameStateManager.readMemorySection(TrainerManager.EMERALD_PARTY_OFFSET, TrainerManager.PLAYER_PARTY_LENGTH)
        }
    }

    extractPlayerNameAndState() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.NAME_STATE_OFFSET;
            this.playerNameAndState = this.gameStateManager.readMemorySection(playerNameAndStateOffset, TrainerManager.NAME_STATE_LENGTH);
        } else {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.NAME_STATE_OFFSET;
            this.playerNameAndState = this.gameStateManager.readMemorySection(playerNameAndStateOffset, TrainerManager.NAME_STATE_LENGTH);
        }
    }

    extractIdAndPlayTime() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.ID_TIME_OFFSET;
            this.playTimeAndId = this.gameStateManager.readMemorySection(playerNameAndStateOffset, TrainerManager.ID_TIME_LENGTH);
        } else {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.ID_TIME_OFFSET;
            this.playTimeAndId = this.gameStateManager.readMemorySection(playerNameAndStateOffset, TrainerManager.ID_TIME_LENGTH);
        }
    }

    extractBox1() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            let saveBlock3Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_3_ADDR);
            let playerNameAndStateOffset = saveBlock3Address + TrainerManager.BOX_OFFSET;
            this.box1 = this.gameStateManager.readMemorySection(playerNameAndStateOffset, TrainerManager.BOX_LENGTH);
        } else {
            let saveBlock3Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_3_ADDR);
            let playerNameAndStateOffset = saveBlock3Address + TrainerManager.BOX_OFFSET;
            this.box1 = this.gameStateManager.readMemorySection(playerNameAndStateOffset, TrainerManager.BOX_LENGTH);
        }
    }

    injectParty() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (this.party == null) {
            return;
        }

        if (currentGame == "FR") {
            this.gameStateManager.writeMemorySection(TrainerManager.FIRE_RED_PARTY_OFFSET, this.party, TrainerManager.PLAYER_PARTY_LENGTH);
        } else {
            this.gameStateManager.writeMemorySection(TrainerManager.EMERALD_PARTY_OFFSET, this.party, TrainerManager.PLAYER_PARTY_LENGTH)
        }
    }

    injectPlayerNameAndState() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.NAME_STATE_OFFSET;
            this.gameStateManager.writeMemorySection(playerNameAndStateOffset, this.playerNameAndState, TrainerManager.NAME_STATE_LENGTH);
        } else {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.NAME_STATE_OFFSET;
            this.gameStateManager.writeMemorySection(playerNameAndStateOffset, this.playerNameAndState, TrainerManager.NAME_STATE_LENGTH);
        }
    }

    injectIdAndPlayTime() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.ID_TIME_OFFSET;
            this.gameStateManager.writeMemorySection(playerNameAndStateOffset, this.playTimeAndId, TrainerManager.ID_TIME_LENGTH);
        } else {
            let saveBlock2Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
            let playerNameAndStateOffset = saveBlock2Address + TrainerManager.ID_TIME_OFFSET;
            this.gameStateManager.writeMemorySection(playerNameAndStateOffset, this.playTimeAndId, TrainerManager.ID_TIME_LENGTH);
        }
    }

    injectBox1() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();

        if (currentGame == "FR") {
            let saveBlock3Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_3_ADDR);
            let playerNameAndStateOffset = saveBlock3Address + TrainerManager.BOX_OFFSET;
            this.gameStateManager.writeMemorySection(playerNameAndStateOffset, this.box1, TrainerManager.BOX_LENGTH);
        } else {
            let saveBlock3Address = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_3_ADDR);
            let playerNameAndStateOffset = saveBlock3Address + TrainerManager.BOX_OFFSET;
            this.gameStateManager.writeMemorySection(playerNameAndStateOffset, this.box1, TrainerManager.BOX_LENGTH);
        }
    }

    static get FIRE_RED_PARTY_OFFSET()  { return  0x02024284; }
    static get EMERALD_PARTY_OFFSET()  { return  0x020244EC; }
    static get PLAYER_PARTY_LENGTH()  { return  0x258; }

    static get NAME_STATE_OFFSET()   { return  0; }
    static get NAME_STATE_LENGTH()   { return  9; }

    static get ID_TIME_OFFSET()   { return  10; }
    static get ID_TIME_LENGTH()   { return  12; }

    static get BOX_OFFSET()   { return  4; }
    static get BOX_LENGTH()   { return  2400; }

}

class VarManager {
    constructor(gameStateManager, exposedEmulationCore) {
        this.gameStateManager = gameStateManager;
        this.exposedEmulationCore = exposedEmulationCore;
        this.badgeSync = true;

        this.badge1 = null;
        this.badge2 = null;
        this.badge3 = null;
        this.badge4 = null;
        this.badge5 = null;
        this.badge6 = null;
        this.badge7 = null;
        this.badge8 = null;
        this.hasRunningShoes = null;
        this.HMState = null;
        this.repelSteps = null;
        this.starterChoice = null;
    }

    extractFlags() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "E") {
            this.extractEmeraldFlags();
        } 
        else if (currentGame == "C") {
            this.extractCrystalFlags();
        } else {
            this.extractFireRedFlags();
        }
    }

    injectFlags() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "E") {
            this.injectEmeraldFlags();
        } 
        else if (currentGame == "C") {
            this.injectCrystalFlags();
        } else {
            this.injectFireRedFlags();
        }
    }

    extractEmeraldFlags() {    
        this.badge1          = this.getSysFlag(VarManager.EMERALD_BADGE1_OFFSET);
        this.badge2          = this.getSysFlag(VarManager.EMERALD_BADGE2_OFFSET);
        this.badge3          = this.getSysFlag(VarManager.EMERALD_BADGE3_OFFSET);
        this.badge4          = this.getSysFlag(VarManager.EMERALD_BADGE4_OFFSET);
        this.badge5          = this.getSysFlag(VarManager.EMERALD_BADGE5_OFFSET);
        this.badge6          = this.getSysFlag(VarManager.EMERALD_BADGE6_OFFSET);
        this.badge7          = this.getSysFlag(VarManager.EMERALD_BADGE7_OFFSET);
        this.badge8          = this.getSysFlag(VarManager.EMERALD_BADGE8_OFFSET);
        this.hasRunningShoes = this.getSysFlag(VarManager.EMERALD_RUNNING_SHOE_OFFSET);
        
        this.HMState = new HMState();
        this.HMState.evaluate("E", this.badge1, this.badge2, this.badge3, this.badge4, this.badge5, this.badge6, this.badge7, this.badge8);
    
        this.repelSteps = this.readGameVar(VarManager.EMERALD_REPEL_STEPS_OFFSET);
        //this.starterChoice = readGameVar("E", EMERALD_STARTER_CHOICE_OFFSET);
    }
    
    extractCrystalFlags() {    
        this.badge1          = this.getSysFlag(VarManager.EMERALD_BADGE1_OFFSET);
        this.badge2          = this.getSysFlag(VarManager.EMERALD_BADGE2_OFFSET);
        this.badge3          = this.getSysFlag(VarManager.EMERALD_BADGE3_OFFSET);
        this.badge4          = this.getSysFlag(VarManager.EMERALD_BADGE4_OFFSET);
        this.badge5          = this.getSysFlag(VarManager.EMERALD_BADGE5_OFFSET);
        this.badge6          = this.getSysFlag(VarManager.EMERALD_BADGE6_OFFSET);
        this.badge7          = this.getSysFlag(VarManager.EMERALD_BADGE7_OFFSET);
        this.badge8          = this.getSysFlag(VarManager.EMERALD_BADGE8_OFFSET);
        this.hasRunningShoes = this.getSysFlag(VarManager.EMERALD_RUNNING_SHOE_OFFSET);
    
        this.HMState = new HMState();
        this.HMState.evaluate("C", this.badge1, this.badge2, this.badge3, this.badge4, this.badge5, this.badge6, this.badge7, this.badge8);
    
        this.repelSteps = this.readGameVar(VarManager.EMERALD_REPEL_STEPS_OFFSET);
        //this.starterChoice = readGameVar("C", EMERALD_STARTER_CHOICE_OFFSET);
    }
    
    extractFireRedFlags() {        
        this.badge1          = this.getSysFlag(VarManager.FIRE_RED_BADGE1_OFFSET);
        this.badge2          = this.getSysFlag(VarManager.FIRE_RED_BADGE2_OFFSET);
        this.badge3          = this.getSysFlag(VarManager.FIRE_RED_BADGE3_OFFSET);
        this.badge4          = this.getSysFlag(VarManager.FIRE_RED_BADGE4_OFFSET);
        this.badge5          = this.getSysFlag(VarManager.FIRE_RED_BADGE5_OFFSET);
        this.badge6          = this.getSysFlag(VarManager.FIRE_RED_BADGE6_OFFSET);
        this.badge7          = this.getSysFlag(VarManager.FIRE_RED_BADGE7_OFFSET);
        this.badge8          = this.getSysFlag(VarManager.FIRE_RED_BADGE8_OFFSET);
        this.hasRunningShoes = this.getSysFlag(VarManager.FIRE_RED_RUNNING_SHOE_OFFSET);
    
        this.HMState = new HMState();
        this.HMState.evaluate("FR", this.badge1, this.badge2, this.badge3, this.badge4, this.badge5, this.badge6, this.badge7, this.badge8);
    
        this.repelSteps = this.readGameVar(VarManager.FIRE_RED_REPEL_STEPS_OFFSET);
        this.starterChoice = this.readGameVar(VarManager.FIRE_RED_STARTER_CHOICE_OFFSET);
    }

    injectEmeraldFlags() {
    
        this.modifySysFlag(VarManager.EMERALD_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);
    
        // Enable national dex
        this.setSysFlag(VarManager.EMERALD_NATIONAL_DEX_OFFSET);
        this.writeGameVar(0x404E, 0x0302);
        // National dex magic number
        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
        this.exposedEmulationCore.writeCpu8_EmulationCore(save2Start + 26, 0xDA);
    
        // Open regi doors
        this.setBaseFlag(0xE4);
    
        // Open Devon Corp F1
        this.setBaseFlag(0x90, 1);
    
        // Not On Bike Path
        this.clearSysFlag(0x2B);
    
        // Open Sootopolis Gym Door
        this.setBaseFlag(0x9E);
    
        // Sootopolis always in nice state
        // We need to prevent locked doors, people standing around and lilycove dept roof being locked off
        this.writeGameVar(0x405E, 0);
        this.setBaseFlag(0x81);
    
        // Hide Steven and wallace in sootopolis
        this.setBaseFlag(0x3CD);
        this.setBaseFlag(0x330);
    
        // RRAQUAZA always available
        this.writeGameVar(0x40D7, 0);
        this.clearBaseFlag(0x50);
    
        // Show steven on the bridge if we don't have the devon scope
        this.clearBaseFlag(0x3CC);
        
        // Make sure the magma embelem can always be got
        // Hide Jagged Pass Magma guard
        this.setBaseFlag(0x34F);
        this.writeGameVar(0x40B9, 0);
    
        // Unblock Tunnlers rest house 
        this.setBaseFlag(0x8F);
    
        // Unblock Devon corp f1
        this.setBaseFlag(0x90);
    
        // Remove the brigde Kecleon so we can ride up from lilycove
        this.setBaseFlag(0x3CA);
    
        // Change Slateport state to 0 (to work around a glitch where game loops exiting the pokecenter)
        // This was needed for the IodineGBA scripted version it might not be needed in the rom hack
        this.writeGameVar(0x4058, 0);
    
        // Remove Team Aqua from slateport and above slateport
        this.setBaseFlag(0x372);
        this.setBaseFlag(0x384);
    
        if (this.badgeSync) {
            
            let badge1 = this.getSysFlag(VarManager.EMERALD_BADGE1_OFFSET);
            let badge2 = this.getSysFlag(VarManager.EMERALD_BADGE2_OFFSET);
            let badge3 = this.getSysFlag(VarManager.EMERALD_BADGE3_OFFSET);
            let badge4 = this.getSysFlag(VarManager.EMERALD_BADGE4_OFFSET);
            let badge5 = this.getSysFlag(VarManager.EMERALD_BADGE5_OFFSET);
            let badge6 = this.getSysFlag(VarManager.EMERALD_BADGE6_OFFSET);
            let badge7 = this.getSysFlag(VarManager.EMERALD_BADGE7_OFFSET);
            let badge8 = this.getSysFlag(VarManager.EMERALD_BADGE8_OFFSET);
    
            let updatedBadges = this.HMState.updateBadges("E", badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8);
    
            this.modifySysFlag(VarManager.EMERALD_BADGE1_OFFSET, +(updatedBadges[0] || badge1));
            this.modifySysFlag(VarManager.EMERALD_BADGE2_OFFSET, +(updatedBadges[1] || badge2));
            this.modifySysFlag(VarManager.EMERALD_BADGE3_OFFSET, +(updatedBadges[2] || badge3));
            this.modifySysFlag(VarManager.EMERALD_BADGE4_OFFSET, +(updatedBadges[3] || badge4));
            this.modifySysFlag(VarManager.EMERALD_BADGE5_OFFSET, +(updatedBadges[4] || badge5));
            this.modifySysFlag(VarManager.EMERALD_BADGE6_OFFSET, +(updatedBadges[5] || badge6));
            this.modifySysFlag(VarManager.EMERALD_BADGE7_OFFSET, +(updatedBadges[6] || badge7));
            this.modifySysFlag(VarManager.EMERALD_BADGE8_OFFSET, +(updatedBadges[7] || badge8));
    
        }
    
        this.writeGameVar(VarManager.EMERALD_REPEL_STEPS_OFFSET, this.repelSteps);
    
        if (this.starterChoice) {
            this.writeGameVar(VarManager.EMERALD_STARTER_CHOICE_OFFSET, this.starterChoice);
        }
    }
    
    injectCrystalFlags() {
        
        this.modifySysFlag(VarManager.EMERALD_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);
    
        // Enable national dex
        this.setSysFlag(VarManager.EMERALD_NATIONAL_DEX_OFFSET);
        this.writeGameVar(0x404E, 0x0302);
        // National dex magic number
        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
        this.exposedEmulationCore.writeCpu8_EmulationCore(save2Start + 26, 0xDA);
    
        if (this.badgeSync) {
            
            let badge1 = this.getSysFlag(VarManager.EMERALD_BADGE1_OFFSET);
            let badge2 = this.getSysFlag(VarManager.EMERALD_BADGE2_OFFSET);
            let badge3 = this.getSysFlag(VarManager.EMERALD_BADGE3_OFFSET);
            let badge4 = this.getSysFlag(VarManager.EMERALD_BADGE4_OFFSET);
            let badge5 = this.getSysFlag(VarManager.EMERALD_BADGE5_OFFSET);
            let badge6 = this.getSysFlag(VarManager.EMERALD_BADGE6_OFFSET);
            let badge7 = this.getSysFlag(VarManager.EMERALD_BADGE7_OFFSET);
            let badge8 = this.getSysFlag(VarManager.EMERALD_BADGE8_OFFSET);
    
            let updatedBadges = this.HMState.updateBadges("C", badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8);
    
            this.modifySysFlag(VarManager.EMERALD_BADGE1_OFFSET, +(updatedBadges[0] || badge1));
            this.modifySysFlag(VarManager.EMERALD_BADGE2_OFFSET, +(updatedBadges[1] || badge2));
            this.modifySysFlag(VarManager.EMERALD_BADGE3_OFFSET, +(updatedBadges[2] || badge3));
            this.modifySysFlag(VarManager.EMERALD_BADGE4_OFFSET, +(updatedBadges[3] || badge4));
            this.modifySysFlag(VarManager.EMERALD_BADGE5_OFFSET, +(updatedBadges[4] || badge5));
            this.modifySysFlag(VarManager.EMERALD_BADGE6_OFFSET, +(updatedBadges[5] || badge6));
            this.modifySysFlag(VarManager.EMERALD_BADGE7_OFFSET, +(updatedBadges[6] || badge7));
            this.modifySysFlag(VarManager.EMERALD_BADGE8_OFFSET, +(updatedBadges[7] || badge8));
            
        }
    
        this.writeGameVar(VarManager.EMERALD_REPEL_STEPS_OFFSET, this.repelSteps);
        // Enabling this disables all the battle with Silver
        //writeGameVar("C", EMERALD_STARTER_CHOICE_OFFSET, this.starterChoice);
    }
    
    injectFireRedFlags() {
        
        this.modifySysFlag(VarManager.FIRE_RED_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);
    
        // Enable national dex
        this.setSysFlag(VarManager.FIRE_RED_NATIONAL_DEX_OFFSET);
        this.writeGameVar(0x404E, 0x6258);
        // National dex magic number
        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
        this.exposedEmulationCore.writeCpu8_EmulationCore(save2Start + 27, 0xB9);
    
        // Not On Bike Path
        this.clearSysFlag(0x30);
    
        if (this.gameStateManager.bagManager.hasBike) {
            this.setBaseFlag(VarManager.FIRE_RED_BIKE_OBTAINED_OFFSET);
        }
    
        if (this.gameStateManager.bagManager.hasFlute) {
            this.setBaseFlag(VarManager.FIRE_RED_FLUTE_OBTAINED_OFFSET);
        }
    
        if (this.badgeSync) {
            
            let badge1 = this.getSysFlag(VarManager.FIRE_RED_BADGE1_OFFSET);
            let badge2 = this.getSysFlag(VarManager.FIRE_RED_BADGE2_OFFSET);
            let badge3 = this.getSysFlag(VarManager.FIRE_RED_BADGE3_OFFSET);
            let badge4 = this.getSysFlag(VarManager.FIRE_RED_BADGE4_OFFSET);
            let badge5 = this.getSysFlag(VarManager.FIRE_RED_BADGE5_OFFSET);
            let badge6 = this.getSysFlag(VarManager.FIRE_RED_BADGE6_OFFSET);
            let badge7 = this.getSysFlag(VarManager.FIRE_RED_BADGE7_OFFSET);
            let badge8 = this.getSysFlag(VarManager.FIRE_RED_BADGE8_OFFSET);
    
            let updatedBadges = this.HMState.updateBadges("FR", badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8);
    
            this.modifySysFlag(VarManager.FIRE_RED_BADGE1_OFFSET, +(updatedBadges[0] || badge1));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE2_OFFSET, +(updatedBadges[1] || badge2));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE3_OFFSET, +(updatedBadges[2] || badge3));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE4_OFFSET, +(updatedBadges[3] || badge4));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE5_OFFSET, +(updatedBadges[4] || badge5));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE6_OFFSET, +(updatedBadges[5] || badge6));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE7_OFFSET, +(updatedBadges[6] || badge7));
            this.modifySysFlag(VarManager.FIRE_RED_BADGE8_OFFSET, +(updatedBadges[7] || badge8));
            
        }
        
        this.writeGameVar(VarManager.FIRE_RED_REPEL_STEPS_OFFSET, this.repelSteps);
        //writeGameVar("FR", FIRE_RED_STARTER_CHOICE_OFFSET, this.starterChoice);
    }

    getFlag(sectionOffset, flagOffset) {

        let saveOffset = null;
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            saveOffset = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
        } else {
            saveOffset = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);  
        }

        let flagByte = this.exposedEmulationCore.readCpu8_EmulationCore(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1);
        let flagBit = flagOffset % 8;
        return !!+flagByte.toString(2).padStart(8, 0).split("").reverse()[flagBit];
    }
    
    setFlag(sectionOffset, flagOffset) {
        let saveOffset = null;
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            saveOffset = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
        } else {
            saveOffset = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);  
        }

        let flagByte = this.exposedEmulationCore.readCpu8_EmulationCore(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1);
        let flagBit = flagOffset % 8;
        let byteArr = flagByte.toString(2).padStart(8, 0).split("").reverse();
        byteArr[flagBit] = 1;
        this.exposedEmulationCore.writeCpu8_EmulationCore(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1, parseInt(byteArr.reverse().join(""), 2));
    }

    clearFlag(sectionOffset, flagOffset) {
        let saveOffset = null;
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            saveOffset = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
        } else {
            saveOffset = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);  
        }

        let flagByte = this.exposedEmulationCore.readCpu8_EmulationCore(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1);
        let flagBit = flagOffset % 8;
        let byteArr = flagByte.toString(2).padStart(8, 0).split("").reverse();
        byteArr[flagBit] = 0;
        this.exposedEmulationCore.writeCpu8_EmulationCore(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1, parseInt(byteArr.reverse().join(""), 2));
    }

    getBaseFlag(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            return this.getFlag(VarManager.FIRE_RED_BASE_FLAG_OFFSET, offset);
        } else {
            return this.getFlag(VarManager.EMERALD_BASE_FLAGS_OFFSET, offset);
        }
    }

    setBaseFlag(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            this.setFlag(VarManager.FIRE_RED_BASE_FLAG_OFFSET, offset);
        } else {
            this.setFlag(VarManager.EMERALD_BASE_FLAGS_OFFSET, offset);
        }
    }

    clearBaseFlag(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            this.clearFlag(VarManager.FIRE_RED_BASE_FLAG_OFFSET, offset);
        } else {
            this.clearFlag(VarManager.EMERALD_BASE_FLAGS_OFFSET, offset);
        }
    }

    modifyBaseFlag(offset, value) {
        if (value == 0) {
            this.setBaseFlag(offset);
        } else {
            this.clearBaseFlag(offset);
        }
    }

    getSysFlag(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            return this.getFlag(VarManager.FIRE_RED_SYS_FLAGS_OFFSET, offset);
        } else {
            return this.getFlag(VarManager.EMERALD_SYS_FLAGS_OFFSET, offset);
        }
    }

    setSysFlag(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            this.setFlag(VarManager.FIRE_RED_SYS_FLAGS_OFFSET, offset);
        } else {
            this.setFlag(VarManager.EMERALD_SYS_FLAGS_OFFSET, offset);
        }
    }

    clearSysFlag(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            this.clearFlag(VarManager.FIRE_RED_SYS_FLAGS_OFFSET, offset);
        } else {
            this.clearFlag(VarManager.EMERALD_SYS_FLAGS_OFFSET, offset);
        }
    }

    modifySysFlag(offset, value) {
        if (value == 0) {
            this.clearSysFlag(offset);
        } else {
            this.setSysFlag(offset);
        }
    }

    isInSafari() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            return this.getSysFlag(0);
        } else if (currentGame == "E"){
            return this.getSysFlag(0x2C);
        }
        return false;
    }

    giveBadge(badgeNo) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        let badgeOffset = null;

        if (currentGame == "FR") {
            if (badgeNo == 1)      { badgeOffset = VarManager.FIRE_RED_BADGE1_OFFSET } 
            else if (badgeNo == 2) { badgeOffset = VarManager.FIRE_RED_BADGE2_OFFSET } 
            else if (badgeNo == 3) { badgeOffset = VarManager.FIRE_RED_BADGE3_OFFSET } 
            else if (badgeNo == 4) { badgeOffset = VarManager.FIRE_RED_BADGE4_OFFSET } 
            else if (badgeNo == 5) { badgeOffset = VarManager.FIRE_RED_BADGE5_OFFSET } 
            else if (badgeNo == 6) { badgeOffset = VarManager.FIRE_RED_BADGE6_OFFSET } 
            else if (badgeNo == 7) { badgeOffset = VarManager.FIRE_RED_BADGE7_OFFSET } 
            else if (badgeNo == 8) { badgeOffset = VarManager.FIRE_RED_BADGE8_OFFSET }
        } else {
            if (badgeNo == 1)      { badgeOffset = VarManager.EMERALD_BADGE1_OFFSET} 
            else if (badgeNo == 2) { badgeOffset = VarManager.EMERALD_BADGE2_OFFSET} 
            else if (badgeNo == 3) { badgeOffset = VarManager.EMERALD_BADGE3_OFFSET} 
            else if (badgeNo == 4) { badgeOffset = VarManager.EMERALD_BADGE4_OFFSET} 
            else if (badgeNo == 5) { badgeOffset = VarManager.EMERALD_BADGE5_OFFSET} 
            else if (badgeNo == 6) { badgeOffset = VarManager.EMERALD_BADGE6_OFFSET} 
            else if (badgeNo == 7) { badgeOffset = VarManager.EMERALD_BADGE7_OFFSET} 
            else if (badgeNo == 8) { badgeOffset = VarManager.EMERALD_BADGE8_OFFSET}
        }

        this.setSysFlag(badgeOffset);
    }

    takeBadge(badgeNo) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        let badgeOffset = null;

        if (currentGame == "FR") {
            if (badgeNo == 1)      { badgeOffset = VarManager.FIRE_RED_BADGE1_OFFSET } 
            else if (badgeNo == 2) { badgeOffset = VarManager.FIRE_RED_BADGE2_OFFSET } 
            else if (badgeNo == 3) { badgeOffset = VarManager.FIRE_RED_BADGE3_OFFSET } 
            else if (badgeNo == 4) { badgeOffset = VarManager.FIRE_RED_BADGE4_OFFSET } 
            else if (badgeNo == 5) { badgeOffset = VarManager.FIRE_RED_BADGE5_OFFSET } 
            else if (badgeNo == 6) { badgeOffset = VarManager.FIRE_RED_BADGE6_OFFSET } 
            else if (badgeNo == 7) { badgeOffset = VarManager.FIRE_RED_BADGE7_OFFSET } 
            else if (badgeNo == 8) { badgeOffset = VarManager.FIRE_RED_BADGE8_OFFSET }
        } else {
            if (badgeNo == 1)      { badgeOffset = VarManager.EMERALD_BADGE1_OFFSET} 
            else if (badgeNo == 2) { badgeOffset = VarManager.EMERALD_BADGE2_OFFSET} 
            else if (badgeNo == 3) { badgeOffset = VarManager.EMERALD_BADGE3_OFFSET} 
            else if (badgeNo == 4) { badgeOffset = VarManager.EMERALD_BADGE4_OFFSET} 
            else if (badgeNo == 5) { badgeOffset = VarManager.EMERALD_BADGE5_OFFSET} 
            else if (badgeNo == 6) { badgeOffset = VarManager.EMERALD_BADGE6_OFFSET} 
            else if (badgeNo == 7) { badgeOffset = VarManager.EMERALD_BADGE7_OFFSET} 
            else if (badgeNo == 8) { badgeOffset = VarManager.EMERALD_BADGE8_OFFSET}
        }

        this.clearSysFlag(badgeOffset);
    }

    giveRunningShoes() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            this.setSysFlag(VarManager.FIRE_RED_RUNNING_SHOE_OFFSET);
        } else {
            this.setSysFlag(VarManager.EMERALD_RUNNING_SHOE_OFFSET);
        }
    }

    writeGameVar(offset, data) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
            let baseVarOffset = VarManager.FIRE_RED_BASE_VAR_OFFSET;
            this.exposedEmulationCore.writeCpu16_EmulationCore(save1Start + baseVarOffset + ((offset - 0x4000) * 2), data);
        } else {
            let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);        
            let baseVarOffset = VarManager.EMERALD_BASE_VAR_OFFSET;
            this.exposedEmulationCore.writeCpu16_EmulationCore(save1Start + baseVarOffset + ((offset - 0x4000) * 2), data);
        }
    }
    
    readGameVar(offset) {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "FR") {
            let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
            let baseVarOffset = VarManager.FIRE_RED_BASE_VAR_OFFSET;
            return this.exposedEmulationCore.readCpu16_EmulationCore(save1Start + baseVarOffset + ((offset - 0x4000) * 2));
        } else {
            let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);        
            let baseVarOffset = VarManager.EMERALD_BASE_VAR_OFFSET;
            return this.exposedEmulationCore.readCpu16_EmulationCore(save1Start + baseVarOffset + ((offset - 0x4000) * 2));
        }
    }

    static get FIRE_RED_BASE_FLAG_OFFSET()    { return 0xEE0 }
    static get FIRE_RED_SYS_FLAGS_OFFSET()    { return 0xFE0 }
    static get FIRE_RED_BADGE1_OFFSET()       { return 0x20  }
    static get FIRE_RED_BADGE2_OFFSET()       { return 0x21  }       
    static get FIRE_RED_BADGE3_OFFSET()       { return 0x22  }       
    static get FIRE_RED_BADGE4_OFFSET()       { return 0x23  }       
    static get FIRE_RED_BADGE5_OFFSET()       { return 0x24  }        
    static get FIRE_RED_BADGE6_OFFSET()       { return 0x25  }       
    static get FIRE_RED_BADGE7_OFFSET()       { return 0x26  }      
    static get FIRE_RED_BADGE8_OFFSET()       { return 0x27  }       
    static get FIRE_RED_RUNNING_SHOE_OFFSET() { return 0x2F  } 
    static get FIRE_RED_POKEDEX_OFFSET()      { return 0x29  }      
    static get FIRE_RED_NATIONAL_DEX_OFFSET() { return 0x40  }
    static get FIRE_RED_BADGE_OFFSETS() {return [VarManager.FIRE_RED_BADGE1_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE2_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE3_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE4_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE5_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE6_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE7_OFFSET, 
                                                 VarManager.FIRE_RED_BADGE8_OFFSET]}

    static get FIRE_RED_BIKE_OBTAINED_OFFSET() { return 0x271 }
    static get FIRE_RED_FLUTE_OBTAINED_OFFSET() { return 0x23D }

    static get EMERALD_BASE_FLAGS_OFFSET()   { return  0x1270 }      
    static get EMERALD_SYS_FLAGS_OFFSET()    { return  0x137C }      
    static get EMERALD_BADGE1_OFFSET()       { return  0x7    }   
    static get EMERALD_BADGE2_OFFSET()       { return  0x8    }   
    static get EMERALD_BADGE3_OFFSET()       { return  0x9    }   
    static get EMERALD_BADGE4_OFFSET()       { return  0xA    }   
    static get EMERALD_BADGE5_OFFSET()       { return  0xB    }   
    static get EMERALD_BADGE6_OFFSET()       { return  0xC    }   
    static get EMERALD_BADGE7_OFFSET()       { return  0xD    }   
    static get EMERALD_BADGE8_OFFSET()       { return  0xE    }   
    static get EMERALD_RUNNING_SHOE_OFFSET() { return  0x60   }    
    static get EMERALD_POKEDEX_OFFSET()      { return  0x1    }    
    static get EMERALD_NATIONAL_DEX_OFFSET() { return  0x36   }    
    static get EMERALD_BADGE_OFFSETS() { return [VarManager.EMERALD_BADGE1_OFFSET, 
                                                 VarManager.EMERALD_BADGE2_OFFSET, 
                                                 VarManager.EMERALD_BADGE3_OFFSET, 
                                                 VarManager.EMERALD_BADGE4_OFFSET, 
                                                 VarManager.EMERALD_BADGE5_OFFSET, 
                                                 VarManager.EMERALD_BADGE6_OFFSET, 
                                                 VarManager.EMERALD_BADGE7_OFFSET, 
                                                 VarManager.EMERALD_BADGE8_OFFSET]}

    static get EMERALD_BASE_VAR_OFFSET()  { return 0x139c }
    static get FIRE_RED_BASE_VAR_OFFSET() { return 0x1000 }

    static get EMERALD_REPEL_STEPS_OFFSET()  { return 0x4021 }
    static get FIRE_RED_REPEL_STEPS_OFFSET() { return 0x4020 }

    static get EMERALD_STARTER_CHOICE_OFFSET()  { return 0x4023}
    static get FIRE_RED_STARTER_CHOICE_OFFSET() { return 0x4031}
}

// EQUIVILENT BADGE UNLOCKS
/*           | FR    | C     | E     |
| Flash      | GYM 1 | GYM 1 | GYM 2 |   
| Cut        | GYM 2 | GYM 2 | GYM 1 |
| Fly        | GYM 3 | GYM 5 | GYM 6 |
| Strength   | GYM 4 | GYM 3 | GYM 4 |
| Surf       | GYM 5 | GYM 4 | GYM 5 |
| Rock Smash | GYM 6 |       | GYM 3 |
| Waterfall  | GYM 7 | GYM 8 | GYM 8 |
| Dive       |       |       | GYM 7 | 
| Whirlpool  |       | GYM 7 |       |
*/
class HMState {
    constructor() {
        this.canFlash     = false;
        this.canCut       = false;
        this.canFly       = false;
        this.canStrength  = false;
        this.canSurf      = false;
        this.canSmash     = false;
        this.canWaterfall = false;
        this.canDive      = false;
        this.canWhirlpool = false;
    }

    evaluate(game, badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8) {
        if (game == "E") {
            this.canFlash     = badge2;
            this.canCut       = badge1;
            this.canFly       = badge6;
            this.canStrength  = badge4;
            this.canSurf      = badge5;
            this.canSmash     = badge3;
            this.canWaterfall = badge8;
            this.canDive      = badge7;
            this.canWhirlpool = false;
        } 
        else if (game == "C") {
            this.canFlash     = badge1;
            this.canCut       = badge2;
            this.canFly       = badge5;
            this.canStrength  = badge3;
            this.canSurf      = badge4;
            this.canSmash     = false; // because there is no badge requirement
            this.canWaterfall = badge8;
            this.canDive      = false;
            this.canWhirlpool = badge7;
        } else {
            this.canFlash     = badge1;
            this.canCut       = badge2;
            this.canFly       = badge3;
            this.canStrength  = badge4;
            this.canSurf      = badge5;
            this.canSmash     = badge6;
            this.canWaterfall = badge7;
            this.canDive      = false;
            this.canWhirlpool = false;
        }
    }

    updateBadges(game, badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8) {

        let badges = [];
    
        if (game == "E") {
            badges[1 - 1] = +(badge1  || this.canCut);
            badges[2 - 1] = +(badge2  || this.canFlash);
            badges[3 - 1] = +(badge3  || this.canSmash);
            badges[4 - 1] = +(badge4  || this.canStrength);
            badges[5 - 1] = +(badge5  || this.canSurf);
            badges[6 - 1] = +(badge6  || this.canFly);
            badges[7 - 1] = +(badge7  || this.canDive);
            badges[8 - 1] = +(badge8  || this.canWaterfall);
        } 
        else if (game == "C") {
            badges[1 - 1] = +(badge1 || this.canFlash);
            badges[2 - 1] = +(badge2 || this.canCut);
            badges[3 - 1] = +(badge3 || this.canStrength);
            badges[4 - 1] = +(badge4 || this.canSurf);
            badges[5 - 1] = +(badge5 || this.canFly);
            badges[8 - 1] = +(badge8 || this.canWaterfall);
        } else {
            badges[1 - 1] = +(badge1  || this.canFlash);
            badges[2 - 1] = +(badge2  || this.canCut);
            badges[3 - 1] = +(badge3  || this.canFly);
            badges[4 - 1] = +(badge4  || this.canStrength);
            badges[5 - 1] = +(badge5  || this.canSurf);
            badges[6 - 1] = +(badge6  || this.canSmash);
            badges[7 - 1] = +(badge7  || this.canWaterfall);
        }
    
        return badges;
    }
    
}


class BagManager {
    constructor(gameStateManager, exposedEmulationCore) {
        this.gameStateManager = gameStateManager;
        this.exposedEmulationCore = exposedEmulationCore;

        this.money = null;

        this.itemPocket = new Map();
        this.keyItemsPocket = new Map();
        this.ballItemPocket = new Map();
        this.tmCase = new Map();
        this.berryPocket = new Map();

        this.hasFlute = false;
        this.hasBike = false;
    }

    extractData() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "E" || currentGame == "C") {
            this.extractEmeraldData();
        } else {
            this.extractFireRedData();
        }
    }

    injectData() {
        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        if (currentGame == "E" || currentGame == "C") {
            this.injectEmeraldData();
        } else {
            this.injectFireRedData();
        }
    }

    extractFireRedData() {
        this.itemPocket.clear();
        this.keyItemsPocket.clear();
        this.ballItemPocket.clear();
        this.tmCase.clear();
        this.berryPocket.clear();
    
        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
        let xorKey32 = this.exposedEmulationCore.readCpu32_EmulationCore(save2Start + BagManager.FIRE_RED_XOR_KEY_OFFSET);
        let xorKey16 = this.exposedEmulationCore.readCpu16_EmulationCore(save2Start + BagManager.FIRE_RED_XOR_KEY_OFFSET);
    
        let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
        this.money = this.exposedEmulationCore.readCpu32_EmulationCore(save1Start + BagManager.FIRE_RED_OBSF_MONEY_OFFSET) ^ xorKey32;
    
        // read items
        this.readItemSection(save1Start, BagManager.FIRE_RED_ITEM_OFFSET, BagManager.FIRE_RED_ITEM_LENGTH, this.itemPocket, xorKey16);
    
        // read key items
        this.readItemSection(save1Start, BagManager.FIRE_RED_KEY_ITEM_OFFSET, BagManager.FIRE_RED_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16);
    
        // read balls
        this.readItemSection(save1Start, BagManager.FIRE_RED_BALL_OFFSET, BagManager.FIRE_RED_BALL_LENGTH, this.ballItemPocket, xorKey16);
    
        // read tms
        this.readItemSection(save1Start, BagManager.FIRE_RED_TM_OFFSET, BagManager.FIRE_RED_TM_LENGTH, this.tmCase, xorKey16);
    
        // read berries
        this.readItemSection(save1Start, BagManager.FIRE_RED_BERRIES_OFFSET, BagManager.FIRE_RED_BERRIES_LENGTH, this.berryPocket, xorKey16);

        this.hasBike = ((this.keyItemsPocket.get(259) || 0) + (this.keyItemsPocket.get(272) || 0) + (this.keyItemsPocket.get(360) || 0)) > 0;
        this.hasFlute =  ((this.keyItemsPocket.get(36) || 0) + (this.keyItemsPocket.get(350) || 0)) > 0;
    }
    
    extractEmeraldData() {
        this.itemPocket.clear();
        this.keyItemsPocket.clear();
        this.ballItemPocket.clear();
        this.tmCase.clear();
        this.berryPocket.clear();
    
        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
        let xorKey32 = this.exposedEmulationCore.readCpu32_EmulationCore(save2Start + BagManager.EMERALD_XOR_KEY_OFFSET);
        let xorKey16 = this.exposedEmulationCore.readCpu16_EmulationCore(save2Start + BagManager.EMERALD_XOR_KEY_OFFSET);
    
        let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);
        this.money = this.exposedEmulationCore.readCpu32_EmulationCore(save1Start + BagManager.EMERALD_OBSF_MONEY_OFFSET) ^ xorKey32;
    
        // read items
        this.readItemSection(save1Start, BagManager.EMERALD_ITEM_OFFSET, BagManager.EMERALD_ITEM_LENGTH, this.itemPocket, xorKey16);
    
        // read key items
        this.readItemSection(save1Start, BagManager.EMERALD_KEY_ITEM_OFFSET, BagManager.EMERALD_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16);
    
        // read balls
        this.readItemSection(save1Start, BagManager.EMERALD_BALL_OFFSET, BagManager.EMERALD_BALL_LENGTH, this.ballItemPocket, xorKey16);
    
        // read tms
        this.readItemSection(save1Start, BagManager.EMERALD_TM_OFFSET, BagManager.EMERALD_TM_LENGTH, this.tmCase, xorKey16);
    
        // read berries
        this.readItemSection(save1Start, BagManager.EMERALD_BERRIES_OFFSET, BagManager.EMERALD_BERRIES_LENGTH, this.berryPocket, xorKey16);

        this.hasBike = ((this.keyItemsPocket.get(259) || 0) + (this.keyItemsPocket.get(272) || 0) + (this.keyItemsPocket.get(360) || 0)) > 0;
        this.hasFlute =  ((this.keyItemsPocket.get(36) || 0) + (this.keyItemsPocket.get(350) || 0)) > 0;
    }

    injectFireRedData() {

        let lastGame = this.gameStateManager.fromGame;

        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_2_ADDR);
        let xorKey32 = this.exposedEmulationCore.readCpu32_EmulationCore(save2Start + BagManager.FIRE_RED_XOR_KEY_OFFSET);
        let xorKey16 = this.exposedEmulationCore.readCpu16_EmulationCore(save2Start + BagManager.FIRE_RED_XOR_KEY_OFFSET);
    
        let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.FIRE_RED_SAVE_BLOCK_1_ADDR);
    
        this.exposedEmulationCore.writeCpu32_EmulationCore(save1Start + BagManager.FIRE_RED_OBSF_MONEY_OFFSET, this.money ^ xorKey32);
    
        // We need to give the player the berry pocket or tm case if they have some 
        if (this.berryPocket.size >= 1) {
            this.keyItemsPocket.set(365, 1); // one berry pouch
        }
        if (this.tmCase.size >= 1) {
            this.keyItemsPocket.set(364, 1); // one tm case
        }
    
        // If we have blue flute give pokeflute
        if (this.itemPocket.get(39)) {
            this.keyItemsPocket.set(350, 1);
        }

        // Give player all bikes if they have a bike
        if (this.hasBike) {
            this.keyItemsPocket.set(259, 1); 
            this.keyItemsPocket.set(272, 1);
            this.keyItemsPocket.set(360, 1);
        }
    
        if (lastGame == "C") {
            // Going from crystal to firered
            let hasRocksmash = this.tmCase.get(296);
            let hasWhirldpool = this.tmCase.get(344);
            let hasBodyslam = this.keyItemsPocket.get(347);
    
            this.tmCase.delete(296);
            this.tmCase.delete(344);
            this.keyItemsPocket.delete(347);
    
            if(hasRocksmash) this.tmCase.set(344, 1);
            if(hasWhirldpool) this.keyItemsPocket.set(347, 1); // Unused TM to represent whirldpool
            if(hasBodyslam) this.tmCase.set(296, 1); 
        } 
    
        // write items
        this.writeItemSection(save1Start, BagManager.FIRE_RED_ITEM_OFFSET, BagManager.FIRE_RED_ITEM_LENGTH, this.itemPocket, xorKey16, true);
    
        // write key items
        this.writeItemSection(save1Start, BagManager.FIRE_RED_KEY_ITEM_OFFSET, BagManager.FIRE_RED_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16, true);
    
        // write balls
        this.writeItemSection(save1Start, BagManager.FIRE_RED_BALL_OFFSET, BagManager.FIRE_RED_BALL_LENGTH, this.ballItemPocket, xorKey16, true);
    
        // write tms
        this.writeItemSection(save1Start, BagManager.FIRE_RED_TM_OFFSET, BagManager.FIRE_RED_TM_LENGTH, this.tmCase, xorKey16, true);
    
        // write berries
        this.writeItemSection(save1Start, BagManager.FIRE_RED_BERRIES_OFFSET, BagManager.FIRE_RED_BERRIES_LENGTH, this.berryPocket, xorKey16, true);
    }

    injectEmeraldData() {

        let game = this.gameStateManager.toGame;
        let lastGame = this.gameStateManager.fromGame;

        let save2Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_2_ADDR);
        let xorKey32 = this.exposedEmulationCore.readCpu32_EmulationCore(save2Start + BagManager.EMERALD_XOR_KEY_OFFSET);
        let xorKey16 = this.exposedEmulationCore.readCpu16_EmulationCore(save2Start + BagManager.EMERALD_XOR_KEY_OFFSET);
    
        let save1Start = this.exposedEmulationCore.readCpu32_EmulationCore(GameStateManager.EMERALD_SAVE_BLOCK_1_ADDR);
    
        this.exposedEmulationCore.writeCpu32_EmulationCore(save1Start + BagManager.EMERALD_OBSF_MONEY_OFFSET, this.money ^ xorKey32);
    
        // If we have a bike from fire red but not a mach/acro bike from emerald we should get a mach bike 
        // Give player all bikes if they have a bike
        if (this.hasBike) {
            this.keyItemsPocket.set(259, 1); 
            this.keyItemsPocket.set(272, 1);
            this.keyItemsPocket.set(360, 1);
        }
    
        // If we have HM06/TM08 we need to make sure it's the right hm
        // In Crystal HM06 is whirlpool and TM08 is Rocksmash
        // In Emerald and FireRed HM06 is  Rocksmash and TM08 is 'Bulk Up'
        if (game == "E" && lastGame == "C") {
            // Going from crystal to emerald
    
            let hasRocksmash = this.tmCase.get(296);
            let hasWhirldpool = this.tmCase.get(344);
            let hasBodyslam = this.keyItemsPocket.get(347);
    
            this.tmCase.delete(296);
            this.tmCase.delete(344);
            this.keyItemsPocket.delete(347);
    
            if(hasRocksmash) this.tmCase.set(344, 1);
            if(hasWhirldpool) this.keyItemsPocket.set(347, 1); // Unused TM to represent whirldpool
            if(hasBodyslam) this.tmCase.set(296, 1); 
    
        } else if (game == "C" && lastGame && lastGame != "C") {
    
            // Going from firered or emerald into crystal
            let hasRocksmash = this.tmCase.get(344);
            let hasWhirldpool = this.keyItemsPocket.get(347);
            let hasBodyslam = this.tmCase.get(296);
    
            this.tmCase.delete(296);
            this.tmCase.delete(344);
            this.keyItemsPocket.delete(347);
    
            if(hasRocksmash) this.tmCase.set(296, 1);
            if(hasWhirldpool) this.tmCase.set(344, 1); // Unused TM to represent bodyslam
            if(hasBodyslam) this.keyItemsPocket.set(347, 1); 
    
        }
    
        // write items
        this.writeItemSection(save1Start, BagManager.EMERALD_ITEM_OFFSET, BagManager.EMERALD_ITEM_LENGTH, this.itemPocket, xorKey16, true);
    
        // write key items
        this.writeItemSection(save1Start, BagManager.EMERALD_KEY_ITEM_OFFSET, BagManager.EMERALD_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16, true);
    
        // write balls
        this.writeItemSection(save1Start, BagManager.EMERALD_BALL_OFFSET, BagManager.EMERALD_BALL_LENGTH, this.ballItemPocket, xorKey16, true);
    
        // write tms
        this.writeItemSection(save1Start, BagManager.EMERALD_TM_OFFSET, BagManager.EMERALD_TM_LENGTH, this.tmCase, xorKey16, true);
    
        // write berries
        this.writeItemSection(save1Start, BagManager.EMERALD_BERRIES_OFFSET, BagManager.EMERALD_BERRIES_LENGTH, this.berryPocket, xorKey16, true);
    }

    readItemSection(save1Start, offset, length, storeTo, xorKey16) {
        for (let i = 0;  i < (length/4); i++) {
            let item = this.exposedEmulationCore.readCpu16_EmulationCore(save1Start + offset + (i*4));
    
            if (item != 0) {
    
                let quantity = this.exposedEmulationCore.readCpu16_EmulationCore(save1Start + offset + (i*4) + 2) ^ xorKey16;
                storeTo.set(item, quantity);
    
            }
        }
    }
    
    writeItemSection(save1Start, offset, length, store, xorKey16, clear) {
    
        var storeArr = [...store];
    
        for (let i = 0;  i < (length/4); i++) {
    
            if (storeArr.length > i) {
    
                let item = (storeArr[i])[0];
                let quantity = (storeArr[i])[1] ^ xorKey16;
    
                this.exposedEmulationCore.writeCpu16_EmulationCore(save1Start + offset + (i*4), item);
                this.exposedEmulationCore.writeCpu16_EmulationCore(save1Start + offset + (i*4) + 2, quantity);
    
            } else {
    
                // No more items to copy
                if(clear) {
                    let item = 0;
                    let quantity = 0 ^ xorKey16;
                    
                    this.exposedEmulationCore.writeCpu16_EmulationCore(save1Start + offset + (i*4), item);
                    this.exposedEmulationCore.writeCpu16_EmulationCore(save1Start + offset + (i*4) + 2, quantity);
                } else {
                    break;
                }
            }
        }
    }

    giveItem(itemName, amount) {
        let item = this.getItemData()[itemName];
        this.extractData();
        switch(item.pocket) {
            case "balls"    : this.ballItemPocket.set(item.number, amount); break;
            case "item"     : this.itemPocket.set(item.number, amount); break;
            case "berries"  : this.berryPocket.set(item.number, amount); break;
            case "key"      : this.keyItemsPocket.set(item.number, amount); break;
            case "tmhm"     : this.tmCase.set(item.number, amount); break;
        }
        this.injectData();
    }

    // MONEY 
    static get FIRE_RED_OBSF_MONEY_OFFSET() { return 0x0290  } //(0x0218)???
    static get FIRE_RED_OBSF_MONEY_LENGTH() { return 4       }     
    static get EMERALD_OBSF_MONEY_OFFSET()  { return 0x0490  } //(0x0494)???
    static get EMERALD_OBSF_MONEY_LENGTH()  { return 4       }     

    // XOR Key
    static get FIRE_RED_XOR_KEY_OFFSET() { return  0x0F20 }        
    static get FIRE_RED_XOR_KEY_LENGTH() { return  4      }   
    static get EMERALD_XOR_KEY_OFFSET()  { return  0xAC   }     
    static get EMERALD_XOR_KEY_LENGTH()  { return  4      }  

    // ITEM POCKET
    static get FIRE_RED_ITEM_OFFSET() { return 0x0310 }      
    static get FIRE_RED_ITEM_LENGTH() { return 168    }   
    static get EMERALD_ITEM_OFFSET()  { return 0x0560 }     
    static get EMERALD_ITEM_LENGTH()  { return 120    }  

    // KEY ITEM POCKET
    static get FIRE_RED_KEY_ITEM_OFFSET() { return 0x03B8 }
    static get FIRE_RED_KEY_ITEM_LENGTH() { return 120    }
    static get EMERALD_KEY_ITEM_OFFSET()  { return 0x05D8 }
    static get EMERALD_KEY_ITEM_LENGTH()  { return 120    }

    // BALLS
    static get FIRE_RED_BALL_OFFSET() { return  0x0430 }        
    static get FIRE_RED_BALL_LENGTH() { return  52     }    
    static get EMERALD_BALL_OFFSET()  { return  0x0650 }       
    static get EMERALD_BALL_LENGTH()  { return  64     }   

    // TM Case
    static get FIRE_RED_TM_OFFSET() { return 0x0464 }        
    static get FIRE_RED_TM_LENGTH() { return 232    }     
    static get EMERALD_TM_OFFSET()  { return 0x0690 }       
    static get EMERALD_TM_LENGTH()  { return 256    }    

    // Berry Pocket
    static get FIRE_RED_BERRIES_OFFSET() { return 0x054C }          
    static get FIRE_RED_BERRIES_LENGTH() { return 172    }       
    static get EMERALD_BERRIES_OFFSET()  { return 0x0790 }         
    static get EMERALD_BERRIES_LENGTH()  { return 184    } 

    getItemData() {
        return {
            "Nothing"      : { "number" :   0 }, 

            /* BALLS */
            "Master Ball"  : { "number" :   1,  "pocket" : "balls" },
            "Ultra Ball"   : { "number" :   2,  "pocket" : "balls" },     
            "Great Ball"   : { "number" :   3,  "pocket" : "balls" },     
            "Poké Ball"    : { "number" :   4,  "pocket" : "balls" },     
            "Safari Ball"  : { "number" :   5,  "pocket" : "balls" },     
            "Net Ball"     : { "number" :   6,  "pocket" : "balls" },     
            "Dive Ball"    : { "number" :   7,  "pocket" : "balls" },     
            "Nest Ball"    : { "number" :   8,  "pocket" : "balls" },     
            "Repeat Ball"  : { "number" :   9,  "pocket" : "balls" },     
            "Timer Ball"   : { "number" :  10,  "pocket" : "balls" },     
            "Luxury Ball"  : { "number" :  11,  "pocket" : "balls" },     
            "Premier Ball" : { "number" :  12,  "pocket" : "balls" },     

            /* USE ITEMS */
            "Potion"        : { "number" :  13, "pocket" : "item" }, 
            "Antidote "     : { "number" :  14, "pocket" : "item" }, 
            "Burn Heal"     : { "number" :  15, "pocket" : "item" },  
            "Ice Heal"      : { "number" :  16, "pocket" : "item" }, 
            "Awakening"     : { "number" :  17, "pocket" : "item" }, 
            "Paralyze Heal" : { "number" :  18, "pocket" : "item" }, 
            "Full Restore"  : { "number" :  19, "pocket" : "item" },  
            "Max Potion"    : { "number" :  20, "pocket" : "item" },  
            "Hyper Potion"  : { "number" :  21, "pocket" : "item" },  
            "Super Potion"  : { "number" :  22, "pocket" : "item" },  
            "Full Heal"     : { "number" :  23, "pocket" : "item" },  	
            "Revive"        : { "number" :  24, "pocket" : "item" }, 
            "Max Revive"    : { "number" :  25, "pocket" : "item" },  	
            "Fresh Water"   : { "number" :  26, "pocket" : "item" },  
            "Soda Pop"      : { "number" :  27, "pocket" : "item" },  
            "Lemonade"      : { "number" :  28, "pocket" : "item" }, 
            "Moomoo Milk"   : { "number" :  29, "pocket" : "item" },  
            "Energy Powder" : { "number" :  30, "pocket" : "item" },  	
            "Energy Root"   : { "number" :  31, "pocket" : "item" },  	
            "Heal Powder"   : { "number" :  32, "pocket" : "item" },  	
            "Revival Herb"  : { "number" :  33, "pocket" : "item" },  	
            "Ether 	Ether"  : { "number" :  34, "pocket" : "item" },  	
            "Max Ether"     : { "number" :  35, "pocket" : "item" },  	
            "Elixir"        : { "number" :  36, "pocket" : "item" }, 
            "Max Elixir"    : { "number" :  37, "pocket" : "item" },  
            "Lava Cookie"   : { "number" :  38, "pocket" : "item" },  
            "Blue Flute"    : { "number" :  39, "pocket" : "item" },  	
            "Yellow Flute"  : { "number" :  40, "pocket" : "item" },  	
            "Red Flute"     : { "number" :  41, "pocket" : "item" },  	
            "Black Flute"   : { "number" :  42, "pocket" : "item" },  
            "White Flute"   : { "number" :  43, "pocket" : "item" },  
            "Berry Juice"   : { "number" :  44, "pocket" : "item" },  
            "Sacred Ash"    : { "number" :  45, "pocket" : "item" },  
            "Shoal Salt"    : { "number" :  46, "pocket" : "item" },  	
            "Shoal Shell"   : { "number" :  47, "pocket" : "item" },  
            "Red Shard"     : { "number" :  48, "pocket" : "item" },  	
            "Blue Shard"    : { "number" :  49, "pocket" : "item" },  	 
            "Yellow Shard"  : { "number" :  50, "pocket" : "item" },  	 
            "Green Shard"   : { "number" :  51, "pocket" : "item" },

            "Mystery Egg"    : { "number" :  52, "pocket" : "key" },  

            "Red Apricorn"   : { "number" :  53, "pocket" : "item" }, 
            "Yellow Apricorn": { "number" :  54, "pocket" : "item" },  
            "Blue Apricorn"  : { "number" :  55, "pocket" : "item" },  
            "Green Apricorn" : { "number" :  56, "pocket" : "item" },  
            "Pink Apricorn"  : { "number" :  57, "pocket" : "item" },  
            "White Apricorn" : { "number" :  58, "pocket" : "item" },
            "Black Apricorn" : { "number" :  59, "pocket" : "item" }, 

            "Level Ball"     : { "number" :  60, "pocket" : "balls" },  
            "Lure Ball"      : { "number" :  61, "pocket" : "balls" },
            "Moon Ball"      : { "number" :  62, "pocket" : "balls" },      

            "HP Up"         : { "number" :  63, "pocket" : "item" }, 
            "Protein"       : { "number" :  64, "pocket" : "item" }, 
            "Iron"          : { "number" :  65, "pocket" : "item" }, 
            "Carbos"        : { "number" :  66, "pocket" : "item" }, 
            "Calcium"       : { "number" :  67, "pocket" : "item" }, 
            "Rare Candy"    : { "number" :  68, "pocket" : "item" }, 
            "PP Up"         : { "number" :  69, "pocket" : "item" }, 
            "Zinc"          : { "number" :  70, "pocket" : "item" }, 
            "PP Max"        : { "number" :  71, "pocket" : "item" }, 

            "Guard Spec"    : { "number" :  73, "pocket" : "item" }, 
            "Dire Hit"      : { "number" :  74, "pocket" : "item" }, 
            "X Attack"      : { "number" :  75, "pocket" : "item" }, 
            "X Defense"     : { "number" :  76, "pocket" : "item" }, 
            "X Speed"       : { "number" :  77, "pocket" : "item" }, 
            "X Accuracy"    : { "number" :  78, "pocket" : "item" }, 
            "X Sp. Atk"     : { "number" :  79, "pocket" : "item" }, 
            "Poké Doll"     : { "number" :  80, "pocket" : "item" }, 
            "Fluffy Tail"   : { "number" :  81, "pocket" : "item" }, 

            "Super Repel"   : { "number" :  83, "pocket" : "item" }, 
            "Max Repel"     : { "number" :  84, "pocket" : "item" }, 
            "Escape Rope"   : { "number" :  85, "pocket" : "item" }, 
            "Repel"         : { "number" :  86, "pocket" : "item" }, 

            "Heavy Ball"    : { "number" :  87, "pocket" : "balls" },  
            "Fast Ball"     : { "number" :  88, "pocket" : "balls" },
            "Park Ball"     : { "number" :  89, "pocket" : "balls" },   

            "Egg Ticket"    : { "number" :  90, "pocket" : "key" },

            "Sun Stone"     : { "number" :  93, "pocket" : "item" },  
            "Moon Stone"    : { "number" :  94, "pocket" : "item" },  
            "Fire Stone"    : { "number" :  95, "pocket" : "item" },  
            "Thunder Stone" : { "number" :  96, "pocket" : "item" },  	
            "Water Stone"   : { "number" :  97, "pocket" : "item" },  	
            "Leaf Stone"    : { "number" :  98, "pocket" : "item" },  

            "Rage Candy Bar" : { "number" : 99 , "pocket" : "item" },  	
            "Slowpoke Tail"  : { "number" : 102, "pocket" : "item" }, 

            "Red Scale"      : { "number" : 101, "pocket" : "key" },  	
            "Clear Bell"     : { "number" : 102, "pocket" : "key" }, 

            "Tiny Mushroom" : { "number" : 103, "pocket" : "item" },  	
            "Big Mushroom " : { "number" : 104, "pocket" : "item" }, 

            "Pearl"         : { "number" : 106, "pocket" : "item" }, 
            "Big Pearl"     : { "number" : 107, "pocket" : "item" }, 
            "Stardust"      : { "number" : 108, "pocket" : "item" }, 
            "Star Piece"    : { "number" : 109, "pocket" : "item" }, 
            "Nugget"        : { "number" : 110, "pocket" : "item" }, 
            "Heart Scale"   : { "number" : 111, "pocket" : "item" }, 

            "Friend Ball"   : { "number" :  112, "pocket" : "balls" },
            "Love Ball"     : { "number" :  113, "pocket" : "balls" },  

            "Orange Mail"   : { "number" : 121, "pocket" : "item" },      
            "Harbor Mail"   : { "number" : 122, "pocket" : "item" },      
            "Glitter Mail"  : { "number" : 123, "pocket" : "item" },     
            "Mech Mail"     : { "number" : 124, "pocket" : "item" },        
            "Wood Mail"     : { "number" : 125, "pocket" : "item" },        
            "Wave Mail"     : { "number" : 126, "pocket" : "item" },        
            "Bead Mail"     : { "number" : 127, "pocket" : "item" },        
            "Shadow Mail"   : { "number" : 128, "pocket" : "item" },      
            "Tropic Mail"   : { "number" : 129, "pocket" : "item" },      
            "Dream Mail"    : { "number" : 130, "pocket" : "item" },       
            "Fab Mail"      : { "number" : 131, "pocket" : "item" },         
            "Retro Mail"    : { "number" : 132, "pocket" : "item" },       

            /* BERRIES */
            "Cheri Berry"   : { "number" : 133, "pocket" : "berries" },     
            "Chesto Berry"  : { "number" : 134, "pocket" : "berries" },    
            "Pecha Berry"   : { "number" : 135, "pocket" : "berries" },     
            "Rawst Berry"   : { "number" : 136, "pocket" : "berries" },     
            "Aspear Berry"  : { "number" : 137, "pocket" : "berries" },    
            "Leppa Berry"   : { "number" : 138, "pocket" : "berries" },     
            "Oran Berry"    : { "number" : 139, "pocket" : "berries" },      
            "Persim Berry"  : { "number" : 140, "pocket" : "berries" },    
            "Lum Berry"     : { "number" : 141, "pocket" : "berries" },       
            "Sitrus Berry"  : { "number" : 142, "pocket" : "berries" },    
            "Figy Berry"    : { "number" : 143, "pocket" : "berries" },      
            "Wiki Berry"    : { "number" : 144, "pocket" : "berries" },      
            "Mago Berry"    : { "number" : 145, "pocket" : "berries" },      
            "Aguav Berry"   : { "number" : 146, "pocket" : "berries" },     
            "Iapapa Berry"  : { "number" : 147, "pocket" : "berries" },    
            "Razz Berry"    : { "number" : 148, "pocket" : "berries" },      
            "Bluk Berry"    : { "number" : 149, "pocket" : "berries" },      
            "Nanab Berry"   : { "number" : 150, "pocket" : "berries" },     
            "Wepear Berry"  : { "number" : 151, "pocket" : "berries" },    
            "Pinap Berry"   : { "number" : 152, "pocket" : "berries" },     
            "Pomeg Berry"   : { "number" : 153, "pocket" : "berries" },     
            "Kelpsy Berry"  : { "number" : 154, "pocket" : "berries" },    
            "Qualot Berry"  : { "number" : 155, "pocket" : "berries" },    
            "Hondew Berry"  : { "number" : 156, "pocket" : "berries" },    
            "Grepa Berry"   : { "number" : 157, "pocket" : "berries" },     
            "Tamato Berry"  : { "number" : 158, "pocket" : "berries" },    
            "Cornn Berry"   : { "number" : 159, "pocket" : "berries" },     
            "Magost Berry"  : { "number" : 160, "pocket" : "berries" },    
            "Rabuta Berry"  : { "number" : 161, "pocket" : "berries" },    
            "Nomel Berry"   : { "number" : 162, "pocket" : "berries" },     
            "Spelon Berry"  : { "number" : 163, "pocket" : "berries" },    
            "Pamtre Berry"  : { "number" : 164, "pocket" : "berries" },    
            "Watmel Berry"  : { "number" : 165, "pocket" : "berries" },    
            "Durin Berry"   : { "number" : 166, "pocket" : "berries" },     
            "Belue Berry"   : { "number" : 167, "pocket" : "berries" },     
            "Liechi Berry"  : { "number" : 168, "pocket" : "berries" },    
            "Ganlon Berry"  : { "number" : 169, "pocket" : "berries" },    
            "Salac Berry"   : { "number" : 170, "pocket" : "berries" },     
            "Petaya Berry"  : { "number" : 171, "pocket" : "berries" },    
            "Apicot Berry"  : { "number" : 172, "pocket" : "berries" },    
            "Lansat Berry"  : { "number" : 173, "pocket" : "berries" },    
            "Starf Berry"   : { "number" : 174, "pocket" : "berries" },  
            "Enigma Berry"  : { "number" : 175, "pocket" : "berries" }, 

            /* HOLD ITEMS */
            "Bright Powder" : { "number" : 179, "pocket" : "item" },  	
            "White Herb"    : { "number" : 180, "pocket" : "item" },  	
            "Macho Brace"   : { "number" : 181, "pocket" : "item" },  
            "Exp. Share"    : { "number" : 182, "pocket" : "item" },  
            "Quick Claw"    : { "number" : 183, "pocket" : "item" },  	
            "Soothe Bell"   : { "number" : 184, "pocket" : "item" },  	
            "Mental Herb"   : { "number" : 185, "pocket" : "item" },  	
            "Choice Band"   : { "number" : 186, "pocket" : "item" },  	
            "King's Rock"   : { "number" : 187, "pocket" : "item" }, 
            "SilverPowder"  : { "number" : 188, "pocket" : "item" },  	
            "Amulet Coin"   : { "number" : 189, "pocket" : "item" },  
            "Cleanse Tag"   : { "number" : 190, "pocket" : "item" },  
            "Soul Dew"      : { "number" : 191, "pocket" : "item" },  
            "Deep Sea Tooth": { "number" : 192, "pocket" : "item" },  
            "Deep Sea Scale": { "number" : 193, "pocket" : "item" },  
            "Smoke Ball"    : { "number" : 194, "pocket" : "item" },  
            "Everstone"     : { "number" : 195, "pocket" : "item" },  	
            "Focus Band"    : { "number" : 196, "pocket" : "item" },  	
            "Lucky Egg"     : { "number" : 197, "pocket" : "item" },  	
            "Scope Lens"    : { "number" : 198, "pocket" : "item" },  	
            "Metal Coat"    : { "number" : 199, "pocket" : "item" },  	
            "Leftovers"     : { "number" : 200, "pocket" : "item" },  	
            "Dragon Scale"  : { "number" : 201, "pocket" : "item" },  	
            "Light Ball"    : { "number" : 202, "pocket" : "item" },  	
            "Soft Sand"     : { "number" : 203, "pocket" : "item" },  	
            "Hard Stone"    : { "number" : 204, "pocket" : "item" },  
            "Miracle Seed"  : { "number" : 205, "pocket" : "item" },  
            "Black Glasses" : { "number" : 206, "pocket" : "item" },  	
            "Black Belt"    : { "number" : 207, "pocket" : "item" },  
            "Magnet"        : { "number" : 208, "pocket" : "item" },  
            "Mystic Water"  : { "number" : 209, "pocket" : "item" },  
            "Sharp Beak"    : { "number" : 210, "pocket" : "item" },  	
            "Poison Barb"   : { "number" : 211, "pocket" : "item" },  	
            "Never-Melt Ice": { "number" : 212, "pocket" : "item" }, 
            "Spell Tag"     : { "number" : 213, "pocket" : "item" },  	
            "Twisted Spoon" : { "number" : 214, "pocket" : "item" },  
            "Charcoal"      : { "number" : 215, "pocket" : "item" },  	
            "Dragon Fang"   : { "number" : 216, "pocket" : "item" },  	
            "Silk Scarf"    : { "number" : 217, "pocket" : "item" },  
            "Up-Grade"      : { "number" : 218, "pocket" : "item" },  	
            "Shell Bell"    : { "number" : 219, "pocket" : "item" },  	
            "Sea Incense"   : { "number" : 220, "pocket" : "item" },  
            "Lax Incense"   : { "number" : 221, "pocket" : "item" },  
            "Lucky Punch"   : { "number" : 222, "pocket" : "item" },  
            "Metal Powder"  : { "number" : 223, "pocket" : "item" }, 
            "Thick Club"    : { "number" : 224, "pocket" : "item" },  
            "Stick"         : { "number" : 225, "pocket" : "item" },  

            "Red Scarf"     : { "number" : 254, "pocket" : "item" }, 
            "Blue Scarf"    : { "number" : 255, "pocket" : "item" },  
            "Pink Scarf"    : { "number" : 256, "pocket" : "item" }, 
            "Green Scarf"   : { "number" : 257, "pocket" : "item" },  	
            "Yellow Scarf"  : { "number" : 258, "pocket" : "item" },  

            /* KEY ITEMS */
            "Mach Bike"     : { "number" : 259, "pocket" : "key" },
            "Coin Case"     : { "number" : 260, "pocket" : "key" },  	
            "Itemfinder"    : { "number" : 261, "pocket" : "key" },  	
            "Old Rod"       : { "number" : 262, "pocket" : "key" },  	
            "Good Rod"      : { "number" : 263, "pocket" : "key" },  	
            "Super Rod"     : { "number" : 264, "pocket" : "key" },  	
            "S.S. Ticket"   : { "number" : 265, "pocket" : "key" },  	
            "Contest Pass"  : { "number" : 266, "pocket" : "key" },

            "GB Player"     : { "number" : 267, "pocket" : "key" }, 

            "Wailmer Pail"   : { "number" : 268, "pocket" : "key" },   	
            "Devon Parts"    : { "number" : 269, "pocket" : "key" },   
            "Soot Sack"      : { "number" : 270, "pocket" : "key" },   	
            "Basement Key"   : { "number" : 271, "pocket" : "key" },   
            "Acro Bike"      : { "number" : 272, "pocket" : "key" },   
            "Pokéblock Case" : { "number" : 273, "pocket" : "key" },   
            "Letter"         : { "number" : 274, "pocket" : "key" },   
            "Eon Ticket"     : { "number" : 275, "pocket" : "key" },   
            "Red Orb"        : { "number" : 276, "pocket" : "key" },   
            "Blue Orb"       : { "number" : 277, "pocket" : "key" },   
            "Scanner"        : { "number" : 278, "pocket" : "key" },   	
            "Go-Goggles"     : { "number" : 279, "pocket" : "key" },   
            "Meteorite"      : { "number" : 280, "pocket" : "key" },   
            "Key to Room 1"  : { "number" : 281, "pocket" : "key" },   
            "Key to Room 2"  : { "number" : 282, "pocket" : "key" },   
            "Key to Room 4"  : { "number" : 283, "pocket" : "key" },   
            "Key to Room 6"  : { "number" : 284, "pocket" : "key" },   
            "Storage Key"    : { "number" : 285, "pocket" : "key" },   
            "Root Fossil"    : { "number" : 286, "pocket" : "key" },   
            "Claw Fossil"    : { "number" : 287, "pocket" : "key" },   
            "Devon Scope"    : { "number" : 288, "pocket" : "key" },  

            /* TM/HM */
            "TM01"   : { "number" : 289,  "pocket" : "tmhm" },
            "TM02"   : { "number" : 290,  "pocket" : "tmhm" },
            "TM03"   : { "number" : 291,  "pocket" : "tmhm" },
            "TM04"   : { "number" : 292,  "pocket" : "tmhm" },
            "TM05"   : { "number" : 293,  "pocket" : "tmhm" },
            "TM06"   : { "number" : 294,  "pocket" : "tmhm" },
            "TM07"   : { "number" : 295,  "pocket" : "tmhm" },
            "TM08"   : { "number" : 296,  "pocket" : "tmhm" },
            "TM09"   : { "number" : 297,  "pocket" : "tmhm" },
            "TM10"   : { "number" : 298,  "pocket" : "tmhm" },
            "TM11"   : { "number" : 299,  "pocket" : "tmhm" },
            "TM12"   : { "number" : 300,  "pocket" : "tmhm" },
            "TM13"   : { "number" : 301,  "pocket" : "tmhm" },
            "TM14"   : { "number" : 302,  "pocket" : "tmhm" },
            "TM15"   : { "number" : 303,  "pocket" : "tmhm" },
            "TM16"   : { "number" : 304,  "pocket" : "tmhm" },
            "TM17"   : { "number" : 305,  "pocket" : "tmhm" },
            "TM18"   : { "number" : 306,  "pocket" : "tmhm" },
            "TM19"   : { "number" : 307,  "pocket" : "tmhm" },
            "TM20"   : { "number" : 308,  "pocket" : "tmhm" },
            "TM21"   : { "number" : 309,  "pocket" : "tmhm" },
            "TM22"   : { "number" : 310,  "pocket" : "tmhm" },
            "TM23"   : { "number" : 311,  "pocket" : "tmhm" },
            "TM24"   : { "number" : 312,  "pocket" : "tmhm" },
            "TM25"   : { "number" : 313,  "pocket" : "tmhm" },
            "TM26"   : { "number" : 314,  "pocket" : "tmhm" },
            "TM27"   : { "number" : 315,  "pocket" : "tmhm" },
            "TM28"   : { "number" : 316,  "pocket" : "tmhm" },
            "TM29"   : { "number" : 317,  "pocket" : "tmhm" },
            "TM30"   : { "number" : 318,  "pocket" : "tmhm" },
            "TM31"   : { "number" : 319,  "pocket" : "tmhm" },
            "TM32"   : { "number" : 320,  "pocket" : "tmhm" },
            "TM33"   : { "number" : 321,  "pocket" : "tmhm" },
            "TM34"   : { "number" : 322,  "pocket" : "tmhm" },
            "TM35"   : { "number" : 323,  "pocket" : "tmhm" },
            "TM36"   : { "number" : 324,  "pocket" : "tmhm" },
            "TM37"   : { "number" : 325,  "pocket" : "tmhm" },
            "TM38"   : { "number" : 326,  "pocket" : "tmhm" },
            "TM39"   : { "number" : 327,  "pocket" : "tmhm" },
            "TM40"   : { "number" : 328,  "pocket" : "tmhm" },
            "TM41"   : { "number" : 329,  "pocket" : "tmhm" },
            "TM42"   : { "number" : 330,  "pocket" : "tmhm" },
            "TM43"   : { "number" : 331,  "pocket" : "tmhm" },
            "TM44"   : { "number" : 332,  "pocket" : "tmhm" },
            "TM45"   : { "number" : 333,  "pocket" : "tmhm" },
            "TM46"   : { "number" : 334,  "pocket" : "tmhm" },
            "TM47"   : { "number" : 335,  "pocket" : "tmhm" },
            "TM48"   : { "number" : 336,  "pocket" : "tmhm" },
            "TM49"   : { "number" : 337,  "pocket" : "tmhm" },
            "TM50"   : { "number" : 338,  "pocket" : "tmhm" },
            "HM01"   : { "number" : 339,  "pocket" : "tmhm" },
            "HM02"   : { "number" : 340,  "pocket" : "tmhm" },
            "HM03"   : { "number" : 341,  "pocket" : "tmhm" },
            "HM04"   : { "number" : 342,  "pocket" : "tmhm" },
            "HM05"   : { "number" : 343,  "pocket" : "tmhm" },
            "HM06"   : { "number" : 344,  "pocket" : "tmhm" },
            "HM07"   : { "number" : 345,  "pocket" : "tmhm" },
            "HM08"   : { "number" : 346,  "pocket" : "tmhm" },

            /* KEY (SPECIAL) */
            "Oak's Parcel"        : { "number" : 349, "pocket" : "key"},
            "Poké Flute"          : { "number" : 350, "pocket" : "key"},
            "Secret Key"          : { "number" : 351, "pocket" : "key"},
            "Bike Voucher"        : { "number" : 352, "pocket" : "key"},
            "Gold Teeth"          : { "number" : 353, "pocket" : "key"},
            "Old Amber"           : { "number" : 354, "pocket" : "key"},
            "Card Key"            : { "number" : 355, "pocket" : "key"},
            "Lift Key"            : { "number" : 356, "pocket" : "key"},
            "Helix Fossil"        : { "number" : 357, "pocket" : "key"},
            "Dome Fossil"         : { "number" : 358, "pocket" : "key"},
            "SilphScope"          : { "number" : 359, "pocket" : "key"},
            "Bicycle"             : { "number" : 360, "pocket" : "key"},
            "Town Map"            : { "number" : 361, "pocket" : "key"},
            "Vs. Seeker "         : { "number" : 362, "pocket" : "key"},
            "Fame Checker"        : { "number" : 363, "pocket" : "key"},
            "TM Case"             : { "number" : 364, "pocket" : "key"},
            "Berry Pouch"         : { "number" : 365, "pocket" : "key"},
            "Teachy TV"           : { "number" : 366, "pocket" : "key"},
            "Tri-Pass"            : { "number" : 367, "pocket" : "key"},
            "Rainbow Pass"        : { "number" : 368, "pocket" : "key"},
            "Tea"                 : { "number" : 369, "pocket" : "key"},
            "MysticTicket"        : { "number" : 370, "pocket" : "key"},
            "AuroraTicket"        : { "number" : 371, "pocket" : "key"},
            "Powder Jar"          : { "number" : 372, "pocket" : "key"},
            "Ruby"                : { "number" : 373, "pocket" : "key"},
            "Sapphire"            : { "number" : 374, "pocket" : "key"},
            "Magma Emblem"        : { "number" : 375, "pocket" : "key"},
            "Old Sea Map"         : { "number" : 376, "pocket" : "key"}
            
        }
    }
    
}


export default RamHook;