/**
 * Random Warp Script
 */

// Ruby/Saphire (0x020297f0) where to find current warp

var isWarping = false;
var switchingGameState = 0; // 0 - Not Switching Game, 
                            // 1 - Playing exit transition before switch
                            // 2 - Playing enterance after switch 
var randomWarpsEnabled = true;

/******************/
/* Warp Addresses */
/******************/
/**
 *  Order of events for a warp script
 * 
 *  1) A player steps on a warp tile
 *  2) A write8 is perforemed to bank, then map, then warp for current game
 *  3) Several read8s are performed to bank, then map, then warp 
 *  4) Exit animation is played (i.e walking through a door) and screen fades to black
 *  5) A write32 is done to the last bank address
 *  6) New map is loaded and fades in then enterance animation is played 
 * 
 * 
 *  Warp flow:
 * 
 *  Within game:
 *  Wait for write to warp address -> switch to warping state -> wait for next read from warp address -> make save state -> before reading overwrite it -> continue  
 * 
 *  To another game:
 *  Wait for write to warp address -> switch to warping state -> wait for next read from warp address -> take a save state -> increment game state -> resume playing ->
 *  wait for write to previous warp address (player exit map in first game) -> load state from different game (copying data accross) that was take just before warp ->
 *  make screen black -> overwrite next warp location -> increment warp state ->  wait for write to previous warp address (player exit map in load state from second game) -> 
 *  make screen visible -> continue
 */
const FIRE_RED_LAST_BANK = 0x2031DB4;

const FIRE_RED_CURRENT_BANK = 0x2031dbc;
const FIRE_RED_CURRENT_MAP  = 0x2031dbd;
const FIRE_RED_CURRENT_WARP = 0x2031dbe;

const EMERALD_LAST_BANK = 0x020322DC;

const EMERALD_CURRENT_BANK = 0x20322e4;
const EMERALD_CURRENT_MAP  = 0x20322e5;
const EMERALD_CURRENT_WARP = 0x20322e6;

const EMERALD_MAP_TYPE = 0x203732F; // Used for enabling teleports/fly anywhere (0x2 for city, 0x4 for underground) 
const FIRE_RED_MAP_TYPE = 0x2036E13; 

const EMERALD_gMapHeader = 0x02037318;
const FIRE_RED_gMapHeader = 0x02036dfc;

var flagManager; // only global to help debugging
var isInSafari = false;
var volumeBeforeWarp = null;
var originalBeforeWarpId = null;
GameBoyAdvanceCPU.prototype.write32WithoutIntercept = GameBoyAdvanceCPU.prototype.write32;
GameBoyAdvanceCPU.prototype.write32 = function (address, data) { 

    if (switchingGameState != 0) {

        if (switchingGameState == 1) {

            if (((address == FIRE_RED_LAST_BANK) &&  IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") || 
                ((address == EMERALD_LAST_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))))  {

                    IodineGUI.Iodine.pause();
                    let beforeRomCode = IodineGUI.Iodine.IOCore.cartridge.romCode;
                    let partySlice = readWRAMSlice(beforeRomCode == "E" || beforeRomCode == "C" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH);
                    let playerNameAndState = dynamicMemorySlice(beforeRomCode == "E" || beforeRomCode == "C" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, NAME_STATE_OFFSET, NAME_STATE_LENGTH);
                    let idAndPlayTime = dynamicMemorySlice(beforeRomCode == "E" || beforeRomCode == "C" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, ID_TIME_OFFSET, ID_TIME_LENGTH);
                    let box1 = dynamicMemorySlice(beforeRomCode == "E" || beforeRomCode == "C" ? EMERALD_SAVE_3_PTR : FIRE_RED_SAVE_3_PTR, 4, BOX_LENGTH);

                    let bagStoreage = new BagStoreage();
                    bagStoreage.readData(beforeRomCode);

                    flagManager = new FlagManager(bagStoreage.hasBike(), bagStoreage.hasFlute());
                    flagManager.readFlags(beforeRomCode);
        
                    IodineGUI.Iodine.saveStateManager.loadState(gameSwitchingWarp.toRomCode);
        
                    if (gameSwitchingWarp.toRomCode == "E" || gameSwitchingWarp.toRomCode == "C") {

                        originalBeforeWarpId = getDesitnation();

                        this.write8(EMERALD_CURRENT_BANK, gameSwitchingWarp.toBank);
                        this.write8(EMERALD_CURRENT_MAP, gameSwitchingWarp.toMap);
                        this.write8(EMERALD_CURRENT_WARP, gameSwitchingWarp.toWarpNo);
                    } else {

                        originalBeforeWarpId = getDesitnation();

                        this.write8(FIRE_RED_CURRENT_BANK, gameSwitchingWarp.toBank);
                        this.write8(FIRE_RED_CURRENT_MAP, gameSwitchingWarp.toMap);
                        this.write8(FIRE_RED_CURRENT_WARP, gameSwitchingWarp.toWarpNo);
                    }
                    let currentRomCode = IodineGUI.Iodine.IOCore.cartridge.romCode; // Changed becuase of load state
                    spliceWRAM(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH, partySlice);
                    dynamicMemorySplice(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, NAME_STATE_OFFSET, NAME_STATE_LENGTH, playerNameAndState);
                    dynamicMemorySplice(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, ID_TIME_OFFSET, ID_TIME_LENGTH, idAndPlayTime);
                    dynamicMemorySplice(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_SAVE_3_PTR : FIRE_RED_SAVE_3_PTR, 4, BOX_LENGTH, box1)

                    bagStoreage.writeData(currentRomCode, beforeRomCode, true);
                    flagManager.writeFlags(currentRomCode, beforeRomCode, true)
        
                    IodineGUI.mixerInput.volume = 0.0;
                    switchingGameState = 2;
                    let elmnt = document.getElementById("emulator_target");
                    elmnt.classList.add("faded")
                    IodineGUI.Iodine.play();
                    return;

            }

        }

        if (switchingGameState == 2) {
            if (((address == FIRE_RED_LAST_BANK) &&  IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") || 
            ((address == EMERALD_LAST_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))))  {

                switchingGameState = 3;
                isWarping = false;
                gameSwitchingWarp = null;
            }
        }

        if ((switchingGameState == 3 || switchingGameState == 4) && (address == FIRE_RED_gMapHeader) &&  IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {
    
            if (switchingGameState == 4) {
                fixPlayerPositionInWarp();
                switchingGameState = 0;
                IodineGUI.mixerInput.volume = volumeBeforeWarp;
                let elmnt = document.getElementById("emulator_target");
                elmnt.classList.remove("faded");
            } else {
                switchingGameState = 4;
            }
    
        } else if ((switchingGameState == 3 || switchingGameState == 4) && (address == EMERALD_gMapHeader && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))) {
    
            if (switchingGameState == 4) {
                fixPlayerPositionInWarp();
                switchingGameState = 0;
                IodineGUI.mixerInput.volume = volumeBeforeWarp;
                let elmnt = document.getElementById("emulator_target");
                elmnt.classList.remove("faded");
            } else {
                switchingGameState = 4;
            }
        }
    
    }



    if (address == FIRE_RED_LAST_BANK &&  IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {

        isInSafari = new FlagManager().getFlag(IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR), FIRE_RED_SYS_FLAGS_OFFSET, 0);
        specialPostWarpHandling();

    } else if (address == EMERALD_LAST_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E"))  {

        isInSafari = new FlagManager().getFlag(IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR), EMERALD_SYS_FLAGS_OFFSET, 0x2C)
        specialPostWarpHandling();
    } else if (address == EMERALD_LAST_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))  {

        specialPostWarpHandling();
    }


    this.write32WithoutIntercept(address, data);
}

function getDesitnation() {


    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {
        let bank = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(FIRE_RED_CURRENT_BANK);
        let map = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(FIRE_RED_CURRENT_BANK + 1);
        let warpNo = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(FIRE_RED_CURRENT_BANK + 2);

        return "FR" + "," + bank + "," + map + "," + warpNo;
    } else if (IodineGUI.Iodine.IOCore.cartridge.romCode === "E") {

        let bank = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK);
        let map = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 1);
        let warpNo = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 2);
    
        return destination = "E" + "," + bank + "," + map + "," + warpNo;

    } else if (IodineGUI.Iodine.IOCore.cartridge.romCode === "C") {

        let bank = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK);
        let map = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 1);
        let warpNo = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 2);
    
        return destination = "C" + "," + bank + "," + map + "," + warpNo;

    }

    return null;

}

function fixPlayerPositionInWarp() {

    let positionForcing = warpsNeedingPositionForces.get(getDesitnation()) || null;
    let fromEscalator = escalatorTriggers.has(originalBeforeWarpId);

    if (!(positionForcing != null || fromEscalator)) {
        return;
    } 

    let xAddress = null;
    let yAddress = null;

    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {

        let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);
        xAddress = save1Start;
        yAddress = save1Start + 2;

    } else {

        let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);
        xAddress = save1Start;
        yAddress = save1Start + 2;
    }

    let updatedXPos = null;
    let updatedYPos = null;

    if (positionForcing != null) {
        updatedXPos = positionForcing[0];
        updatedYPos = positionForcing[1];
    } else {
        updatedXPos = IodineGUI.Iodine.IOCore.cpu.read16(xAddress);
        updatedYPos = IodineGUI.Iodine.IOCore.cpu.read16(yAddress);
    }

    if (fromEscalator) {
        updatedXPos = updatedXPos - 1;
    }

    // set the new x/y;
    IodineGUI.Iodine.IOCore.cpu.write16(xAddress, updatedXPos);
    IodineGUI.Iodine.IOCore.cpu.write16(yAddress, updatedYPos);

    originalBeforeWarpId = null;
}

var warpsNeedingPositionForces = new Map();
warpsNeedingPositionForces.set("E,0,1,5"    , [0x1E, 0x1B]);
warpsNeedingPositionForces.set("E,0,5,0"    , [0x1B, 0x07]);
warpsNeedingPositionForces.set("E,0,2,0"    , [0x08, 0x06]);
warpsNeedingPositionForces.set("E,0,7,5"    , [0x2D, 0x07]);
warpsNeedingPositionForces.set("E,0,7,9"    , [0x35, 0x1D]);
warpsNeedingPositionForces.set("E,0,7,4"    , [0x09, 0x07]);
warpsNeedingPositionForces.set("E,0,8,2"    , [0x12, 0x2A]);
warpsNeedingPositionForces.set("E,0,11,3"   , [0x11, 0x0E]);
warpsNeedingPositionForces.set("E,0,12,5"   , [0x09, 0x02]);
warpsNeedingPositionForces.set("E,0,14,4"   , [0x08, 0x02]);
warpsNeedingPositionForces.set("E,0,15,0"   , [0x08, 0x10]);
warpsNeedingPositionForces.set("E,0,26,0"   , [0x0D, 0x72]);
warpsNeedingPositionForces.set("E,11,0,2"   , [0x0E, 0x02]);
warpsNeedingPositionForces.set("E,14,9,2"   , [0x0D, 0x02]);
warpsNeedingPositionForces.set("E,14,10,2"  , [0x0d, 0x02]);
warpsNeedingPositionForces.set("E,16,10,2"  , [0x09, 0x02]);
warpsNeedingPositionForces.set("E,24,8,2"   , [0x1D, 0x0D]);
warpsNeedingPositionForces.set("E,24,8,3"   , [0x1C, 0x15]);
warpsNeedingPositionForces.set("E,24,9,0"   , [0x1D, 0x0D]);
warpsNeedingPositionForces.set("E,24,9,1"   , [0x1C, 0x15]);
warpsNeedingPositionForces.set("E,24,13,4"  , [0x10, 0x13]);
warpsNeedingPositionForces.set("E,24,16,4"  , [0x0B, 0x09]);
warpsNeedingPositionForces.set("E,24,16,2"  , [0x0A, 0x0C]);
warpsNeedingPositionForces.set("E,24,17,5"  , [0x06, 0x0C]);
warpsNeedingPositionForces.set("E,24,17,4"  , [0x0A, 0x0C]);
warpsNeedingPositionForces.set("E,24,18,2"  , [0x0C, 0x0A]);
warpsNeedingPositionForces.set("E,24,18,3"  , [0x0C, 0x0C]);
warpsNeedingPositionForces.set("E,24,19,3"  , [0x0C, 0x0A]);
warpsNeedingPositionForces.set("E,24,19,4"  , [0x0C, 0x0C]);
warpsNeedingPositionForces.set("E,24,24,10" , [0x20, 0x13]);
warpsNeedingPositionForces.set("E,24,25,5"  , [0x05, 0x08]);
warpsNeedingPositionForces.set("E,24,25,9"  , [0x20, 0x14]);
warpsNeedingPositionForces.set("E,24,29,2"  , [0x06, 0x01]);
warpsNeedingPositionForces.set("E,24,78,0"  , [0x11, 0x0D]);
warpsNeedingPositionForces.set("E,24,81,0"  , [0x03, 0x01]);
warpsNeedingPositionForces.set("E,24,82,1"  , [0x07, 0x01]);
warpsNeedingPositionForces.set("E,24,95,0"  , [0x12, 0x0C]);
warpsNeedingPositionForces.set("E,24,96,0"  , [0x12, 0x0C]);
warpsNeedingPositionForces.set("E,26,74,1"  , [0x05, 0x05]);
warpsNeedingPositionForces.set("E,26,87,0"  , [0x0E, 0x13]);
warpsNeedingPositionForces.set("E,0,10,5"   , [0x0A, 0x09]);
warpsNeedingPositionForces.set("E,16,0,1"   , [0x06, 0x03]);
warpsNeedingPositionForces.set("E,16,1,1"   , [0x06, 0x03]);
warpsNeedingPositionForces.set("E,16,2,1"   , [0x06, 0x03]);
warpsNeedingPositionForces.set("E,16,3,1"   , [0x06, 0x03]);

warpsNeedingPositionForces.set("FR,3,3,7"   , [0x01, 0x0D]);
warpsNeedingPositionForces.set("FR,3,10,3"  , [0x2E, 0x0D]);
warpsNeedingPositionForces.set("FR,3,10,1"  , [0x16, 0x0F]);
warpsNeedingPositionForces.set("FR,3,10,4"  , [0x1B, 0x16]);

warpsNeedingPositionForces.set("C,0,11,2"   , [0x11, 0x12]);
warpsNeedingPositionForces.set("C,0,11,6"   , [0x25, 0x0A]);
warpsNeedingPositionForces.set("C,0,13,1"   , [0x07, 0x0E]);
warpsNeedingPositionForces.set("C,0,5,7"    , [0x16, 0x04]);
warpsNeedingPositionForces.set("C,0,5,1"    , [0x15, 0x0F]);

var escalatorTriggers = new Set();
escalatorTriggers.add("E,8,5,0"  );
escalatorTriggers.add("E,9,12,0" );
escalatorTriggers.add("E,10,6,0" );
escalatorTriggers.add("E,11,6,0" );
escalatorTriggers.add("E,12,3,0" );
escalatorTriggers.add("E,13,7,0" );
escalatorTriggers.add("E,14,4,0" );
escalatorTriggers.add("E,15,3,0" );
escalatorTriggers.add("E,16,13,0");
escalatorTriggers.add("E,16,14,0");
escalatorTriggers.add("E,2,3,0"  );
escalatorTriggers.add("E,3,2,0"  );
escalatorTriggers.add("E,4,6,0"  );
escalatorTriggers.add("E,5,5,0"  );
escalatorTriggers.add("E,6,5,0"  );
escalatorTriggers.add("E,7,1,0"  );

escalatorTriggers.add("FR,5,5,0");
escalatorTriggers.add("FR,6,6,0");
escalatorTriggers.add("FR,7,4,0");
escalatorTriggers.add("FR,8,1,0");
escalatorTriggers.add("FR,10,13,0");
escalatorTriggers.add("FR,11,6,0");
escalatorTriggers.add("FR,12,6,0");
escalatorTriggers.add("FR,13,1,0");
escalatorTriggers.add("FR,16,1,0");
escalatorTriggers.add("FR,21,1,0");

escalatorTriggers.add("C,8,5,0");
escalatorTriggers.add("C,24,94,0");
escalatorTriggers.add("C,3,2,0");
escalatorTriggers.add("C,11,6,0");
escalatorTriggers.add("C,9,12,0");
escalatorTriggers.add("C,10,6,0");
escalatorTriggers.add("C,4,6,0");
escalatorTriggers.add("C,5,5,0");
escalatorTriggers.add("C,13,7,0");
escalatorTriggers.add("C,16,14,0");


// GameBoyAdvanceCPU.prototype.write16WithoutIntercept = GameBoyAdvanceCPU.prototype.write16;
// GameBoyAdvanceCPU.prototype.write16 = function (address, data) { 

//     if (address == EMERALD_LAST_BANK) {
//         console.log("writing 16");
//     }

//     this.write16WithoutIntercept(address, data);
// }

 GameBoyAdvanceCPU.prototype.write8WithoutIntercept = GameBoyAdvanceCPU.prototype.write8;
 GameBoyAdvanceCPU.prototype.write8 = function (address, data) { 

    if ((address == FIRE_RED_CURRENT_WARP) && IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" )
    {
        isWarping = randomWarpsEnabled || forceNextWarp;
    } 
    else if ((address == EMERALD_CURRENT_WARP) && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C")) 
    {
        isWarping = randomWarpsEnabled || forceNextWarp;
    } 
    
    this.write8WithoutIntercept(address, data);

 }


const EMERALD_MOVEMENT_MODE_OFFSET = 0x02037590;
const FIRE_RED_MOVEMENT_MODE_OFFSET = 0x02037078;
const MOVEMENT_MODE_WALK = 0x01;
const MOVEMENT_MODE_BIKE = 0x02;
const MOVEMENT_MODE_SURF = 0x08;
var autoBike = false; 
var teleportAnywhere = false;

GameBoyAdvanceCPU.prototype.read8WithoutIntercept = GameBoyAdvanceCPU.prototype.read8;
GameBoyAdvanceCPU.prototype.read8 = function (address) {

    if (autoBike) {
        if (address == FIRE_RED_MOVEMENT_MODE_OFFSET && IodineGUI.Iodine.IOCore.cartridge.romCode === "FR"){
            let current = this.read8WithoutIntercept(address);
            return current <= MOVEMENT_MODE_WALK ? MOVEMENT_MODE_BIKE : current;
        } else if (address == EMERALD_MOVEMENT_MODE_OFFSET){
            let current = this.read8WithoutIntercept(address);
            return current <= MOVEMENT_MODE_WALK ? MOVEMENT_MODE_BIKE : current;
        }
    }

    if (teleportAnywhere) {
        if (address == FIRE_RED_MAP_TYPE && IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {
            return 2;
        } else if (address == EMERALD_MAP_TYPE){
            return 2;
        }
    }

    if (!isWarping) return this.read8WithoutIntercept(address);

    if (address == FIRE_RED_CURRENT_BANK && IodineGUI.Iodine.IOCore.cartridge.romCode === "FR")
    {
        // Base game FR/LG
        address = this.handleWarpRedirection(address, IodineGUI.Iodine.IOCore.cartridge.romCode);
    } 
    else if (address == EMERALD_CURRENT_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C")) 
    {
        // Base game Emerald
        address = this.handleWarpRedirection(address, IodineGUI.Iodine.IOCore.cartridge.romCode);
    }

    return this.read8WithoutIntercept(address);
}

var gameSwitchingWarp = null;
var reverseNextWarp = false; // Set true when loading a save state that was going through a warp
var forceNextWarp = null;
GameBoyAdvanceCPU.prototype.handleWarpRedirection = function (address, romCode) {

    let bank = this.read8WithoutIntercept(address);
    let map = this.read8WithoutIntercept(address + 1);
    let warpNo = this.read8WithoutIntercept(address + 2);
    

    let usingHomeWarp = this.handelHomeWarp(romCode, bank, map, warpNo);
    
    if (warpNo == 255 && !usingHomeWarp) { 

        // Special Fix for norman after the tutorial
        if (romCode + "," + bank + "," + map + "," + warpNo == "E,8,1,255") {
            writeGameVar("E", 0x4085, 6);
            modifyBaseFlag("E", 0x2D6, 1);
            modifyBaseFlag("E", 0x362, 1);
        }

        originalBeforeWarpId = null;

        // Avoid scripted warps, route connections without zone e.t.c
        return address; 
    }

    if (switchingGameState == 2 || switchingGameState==1) { return address }

    volumeBeforeWarp = IodineGUI.mixerInput.volume; 
    let pkWarp = null;
    let trigger = romCode + "," + bank + "," + map + "," + warpNo;

    if (forceNextWarp) {
        let toParts = forceNextWarp.split(",");
        pkWarp = new PKWarp(trigger, toParts[0], toParts[1], toParts[2], toParts[3], forceNextWarp)
        reverseNextWarp = false;
        forceNextWarp = null;
        originalBeforeWarpId = null;
    } else if(reverseNextWarp && warpList.get(trigger)) {
        let source = warpList.get(trigger).source;
        let toParts = source.split(",");
        pkWarp = new PKWarp(trigger, toParts[0], toParts[1], toParts[2], toParts[3], source)
        reverseNextWarp = false;
    } else {
        pkWarp = warpList.get(trigger);
        console.log("Warping triggered for " + trigger); 
    }

    if (pkWarp) {

        pkWarp = specialPreWarpHandling(pkWarp);

        IodineGUI.Iodine.pause();

        IodineGUI.Iodine.saveStateManager.saveState(romCode, true);
        if (pkWarp.toRomCode[0] != pkWarp.trigger[0]) {
            // Switching Games
            switchingGameState = 1;
            gameSwitchingWarp = pkWarp;
            address = pkWarp.toRomCode == "E" || pkWarp.toRomCode == "C" ? EMERALD_CURRENT_BANK : FIRE_RED_CURRENT_BANK;
        } else {

            if (pkWarp.toRomCode == "E" || pkWarp.toRomCode == "C") {

                originalBeforeWarpId = getDesitnation();

                this.write8(EMERALD_CURRENT_BANK, pkWarp.toBank);
                this.write8(EMERALD_CURRENT_MAP, pkWarp.toMap);
                this.write8(EMERALD_CURRENT_WARP, pkWarp.toWarpNo);
                address = EMERALD_CURRENT_BANK;
            } else {

                originalBeforeWarpId = getDesitnation();

                this.write8(FIRE_RED_CURRENT_BANK, pkWarp.toBank);
                this.write8(FIRE_RED_CURRENT_MAP, pkWarp.toMap);
                this.write8(FIRE_RED_CURRENT_WARP, pkWarp.toWarpNo);
                address = FIRE_RED_CURRENT_BANK;
            }

            switchingGameState = 3;

        }

        specialDuringWarpHandling(pkWarp);

        IodineGUI.Iodine.play();

        console.log("Warping sending to " + pkWarp.toRomCode + "," + pkWarp.toBank + "," + pkWarp.toMap + "," + pkWarp.toWarpNo); 
    } else {
        console.log("Warping sending to vanilla"); 
    }
    
    isWarping = false;

    return address;
}

// Home Warp function use the same script as the safari zone 
// If we are currently in the safari zone we run the script normally otherwise we modify the location to send us home
GameBoyAdvanceCPU.prototype.handelHomeWarp = function(romCode, bank, map, warpNo) {

    if (romCode == "FR" && bank == 11 && map == 0 && warpNo == 255) {

        if (!isInSafari) {
            forceNextWarp = forceNextWarp || "FR,4,1,0";
            writeGameVar("FR", 0x406E, 0);
            return true;
        }

    } else if (romCode == "E" && bank == 23 && map == 0 && warpNo == 255) {

        if (!isInSafari) {
            forceNextWarp = forceNextWarp || "E,1,3,0";
            writeGameVar("E", 0x40A4, 0);
            return true;
        }
        
    } else if (romCode == "C" && bank == 23 && map == 0 && warpNo == 255) {

        // No Safari, I don't think the bug catching contest retirement works the same
        forceNextWarp = forceNextWarp || "C,1,1,0";
        return true;

    }

    return false;
}

// Some warps may need special handling to avoid bugs
/*
*   PreWarp handling takes place as soon as a warps has been triggered. This is useful if you need to alter the location
*   that a warp would be going to
*/
function specialPreWarpHandling(pkwarp) {

    // let destination = pkwarp.toRomCode + "," + pkwarp.toBank + "," + pkwarp.toMap + "," + pkwarp.toWarpNo;

    return pkwarp;
}

/*
*   DuringWarp handling takes place before the warp had happened but after the new rom has been loaded
*   This is useful for when you need to set a flag/var in  a game you are loading before the new map loads
*/
function specialDuringWarpHandling(pkwarp) {
    
    let destination = pkwarp.toRomCode + "," + pkwarp.toBank + "," + pkwarp.toMap + "," + pkwarp.toWarpNo;

    if (pkwarp.toRomCode == "E") {
        // Open Regi Caves

        // Show Mirage Tower

        // Make sure it dosn't think we are on cycling road

        // Make sure guy is moved from from devon corp floor one
        
        // If trickmaster reached end state we need to reset him

        // If muesum defeated we need to open up that warp in slateport

        // If Petalburg Gym make either catch tutorial or battle
        if (destination == "E,8,1,0") {
            // If catch tutorial hasn't been done we set to that
            // otherwise we set to battle state
            let petalburgState = readGameVar("E", 0x4057);
            if (petalburgState < 1) {
                writeGameVar("E", 0x4085, 0)
            } else {
                writeGameVar("E", 0x4085, 6)
            }
    
            // Unlock left of petalburg
            writeGameVar("E", 0x4057, 1);
        } 

        // If Mauville Gym make battle
        if (destination == "E,10,0,0") {
            new FlagManager().setFlag(IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR), 0x1270, 0x391, 0);
        }

        // Make Sure the trick master won't crash the game
        if (destination == "E,29,1,0" || destination == "E,29,1,1") {
            if (readGameVar("E", 0x4044) > 7) {
                writeGameVar("E", 0x4044, 7);
            }
        } else if (destination == "E,14,7,0") {
            if (readGameVar("E", 0x40C6) == 0) {
                writeGameVar("E", 0x40C6, 1);
                modifyBaseFlag("E", 0x3C7, 0);
            }
        }

        // Make sure we can get waterfall
    }

}

/*
*   PostWarp handling takes place after the warp has finished
*   This is useful for when you need to trigger an event after the new map has loaded
*/
function specialPostWarpHandling() {

    // Need to pass in the current warp address
    // Fix the "Jesus warps" in seafloor cavern for emerald

    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "E") {
        let bank = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK);
        let map = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 1);
        let warpNo = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 2);

        let destination = "E" + "," + bank + "," + map + "," + warpNo;

        if (destination == "E,24,33,2") {
            // Seafloor caven stop walking on water
            forceStateAfterDelay(MOVEMENT_MODE_SURF, 1000);
        } else if (destination == "E,0,4,1" || destination == "E,0,4,4" || destination == "E,0,4,5" || destination == "E,0,4,6" || destination == "E,0,4,7" || destination == "E,0,4,8" || 
                   destination == "E,0,15,0" || destination == "E,0,15,1" || destination == "E,0,15,2" || destination == "E,0,15,3" || destination == "E,0,15,4" || destination == "E,0,15,") {
            if (document.getElementById("autoBike").checked) {
                M.toast({html: 'Auto Bike Off', displayLength:1000 });
                document.getElementById("autoBike").click();
            }
            // Somewhere we can't use a bike (fortree or pacifidlog)
            forceStateAfterDelay(MOVEMENT_MODE_WALK, 1000);
        } else if (destination == "E,16,0,0") {
            // E4 rooms needs to walk fowards when entering
            writeGameVar("E", 0x409C, 0);
        } else if (destination == "E,16,0,1")  {
            writeGameVar("E", 0x409C, 1);
        } else if (destination == "E,16,1,0") {
            writeGameVar("E", 0x409C, 1);
        } else if (destination == "E,16,1,1") {
            writeGameVar("E", 0x409C, 2);
        } else if (destination == "E,16,2,0") {
            writeGameVar("E", 0x409C, 2);
        } else if (destination == "E,16,2,1") {
            writeGameVar("E", 0x409C, 3);
        } else if (destination == "E,16,3,0") {
            writeGameVar("E", 0x409C, 3);
        } else if (destination == "E,16,3,1") {
            writeGameVar("E", 0x409C, 4);
        }

    }

    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "C") {
        let bank = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK);
        let map = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 1);
        let warpNo = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(EMERALD_CURRENT_BANK + 2);

        let destination = "C" + "," + bank + "," + map + "," + warpNo;

        if (destination == "C,16,0,0") {
            // E4 rooms needs to walk fowards when entering
            writeGameVar("C", 0x409C, 1);
        } else if (destination == "C,16,0,1")  {
            writeGameVar("C", 0x409C, 1);
        } else if (destination == "C,16,1,0") {
            writeGameVar("C", 0x409C, 2);
        } else if (destination == "C,16,1,1") {
            writeGameVar("C", 0x409C, 2);
        } else if (destination == "C,16,2,0") {
            writeGameVar("C", 0x409C, 3);
        } else if (destination == "C,16,2,1") {
            writeGameVar("C", 0x409C, 3);
        } else if (destination == "C,16,3,0") {
            writeGameVar("C", 0x409C, 4);
        } else if (destination == "C,16,3,1") {
            writeGameVar("C", 0x409C, 4);
        }

    }

    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {
        let bank = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(FIRE_RED_CURRENT_BANK);
        let map = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(FIRE_RED_CURRENT_BANK + 1);
        let warpNo = IodineGUI.Iodine.IOCore.cpu.read8WithoutIntercept(FIRE_RED_CURRENT_BANK + 2);

        let destination = "FR" + "," + bank + "," + map + "," + warpNo;
        if (destination == "FR,1,86,6" || destination == "FR,1,86,5" || destination == "FR,1,87,2" || destination == "FR,1,87,3") {
            // Seafoam islands stop walking on water
            forceStateAfterDelay(MOVEMENT_MODE_SURF, 3800);
        } else if (destination == "FR,1,75,0") {
            // E4 rooms needs to walk fowards when entering
            writeGameVar("FR", 0x4068, 0);
        } else if (destination == "FR,1,75,1")  {
            writeGameVar("FR", 0x4068, 1);
        } else if (destination == "FR,1,76,0") {
            writeGameVar("FR", 0x4068, 1);
        } else if (destination == "FR,1,76,1") {
            writeGameVar("FR", 0x4068, 2);
        } else if (destination == "FR,1,77,0") {
            writeGameVar("FR", 0x4068, 2);
        } else if (destination == "FR,1,77,1") {
            writeGameVar("FR", 0x4068, 3);
        } else if (destination == "FR,1,78,0") {
            writeGameVar("FR", 0x4068, 3);
        } else if (destination == "FR,1,78,1") {
            writeGameVar("FR", 0x4068, 4);
        } else if (destination == "FR,1,79,0") {
            writeGameVar("FR", 0x4068, 4);
        }
    }
}

async function forceStateAfterDelay(movementMode, delayTime) {
    await delay(delayTime/IodineGUI.Iodine.getSpeed());
    forcePlayerState(movementMode);
}

async function quickSpeedUp(duration) {
    let currentSpeed = IodineGUI.Iodine.getSpeed();
    IodineGUI.Iodine.setSpeed(4);
    let volumeBefore = IodineGUI.mixerInput.volume;
    IodineGUI.mixerInput.volume = 0.0
    await delay(duration);
    IodineGUI.Iodine.setSpeed(currentSpeed);
    IodineGUI.mixerInput.volume = volumeBefore
}

function quickHideScreen() {
    let elmnt = document.getElementById("emulator_target");
    elmnt.classList.remove("quick-hide");
    elmnt.offsetWidth
    elmnt.classList.add("quick-hide")
}

function readWRAMSlice(address, length) {
    let startAddress = (address - 0x02000000);
    let endAddress = startAddress + length;
    return IodineGUI.Iodine.IOCore.memory.externalRAM.slice(startAddress, endAddress);
}
function spliceWRAM(address, length, data) {
    let startAddress = (address - 0x02000000);
    for (let i = 0; i<length; i++) {
        IodineGUI.Iodine.IOCore.memory.externalRAM[startAddress + i] = data[i];
    }
}


/***********************/
/* Dynamic rom patches */  
/***********************/
/**
 * Patches out an area in the ROM 
 */
var walkThroughWalls = false;
var runIndoors = true;
var frWallsOffset = 364078; // set to 364098 for 1.1 version
var frRunIndoorsOffset = 0xBD494; //  set to 0xBD4A8 for 1.1 version

GameBoyAdvanceMultiCartridge.prototype.initializeWithoutIntercept = GameBoyAdvanceMultiCartridge.prototype.initialize;
GameBoyAdvanceMultiCartridge.prototype.initialize = function (startingRom) {
    this.initializeWithoutIntercept(startingRom);

    // if 0x(80000)BC == 1 then we have US 1.1 instead of US 1.0
    if (this.cartriges.get("FR") && this.cartriges.get("FR").ROM[0xBC]) {
        frWallsOffset = 364098
        frRunIndoorsOffset = 0xBD4A8;
    }
} 

GameBoyAdvanceMultiCartridge.prototype.readROM16WithoutIntercept = GameBoyAdvanceMultiCartridge.prototype.readROM16;
GameBoyAdvanceMultiCartridge.prototype.readROM16 = function (address) {

    if (!walkThroughWalls && !runIndoors) { return this.readROM16WithoutIntercept(address); }

    if (walkThroughWalls) {
        if (address == frWallsOffset && this.romCode == "FR") { 
            return 0x2100; 
        } else if (address == 601094 && this.romCode == "C") {
            return 0x2000; 
        } else if (address == 601094 && this.romCode == "E") {
            return 0x2000;
        }
    }

    if (runIndoors) {
        if (address == frRunIndoorsOffset && this.romCode == "FR") { 
            return 0x00; 
        } else if (address == 0x11A1E8 && this.romCode == "C") {
            return 0x00; 
        } else if (address == 0x11A1E8 && this.romCode == "E") {
            return 0x00;
        }
    }

    return this.readROM16WithoutIntercept(address);
}

var currentlySaving = false;
GameBoyAdvanceMultiCartridge.prototype.readROM8WithoutIntercept = GameBoyAdvanceMultiCartridge.prototype.readROM8;
GameBoyAdvanceMultiCartridge.prototype.readROM8 = function (address) {

    if (currentlySaving) {

        if (this.cartriges.get("FR") && this.cartriges.get("FR").ROM[0xBC] &&  ((address == 1857210 || address == 4305130 || address == 4306233 || address == 0x0416138))) {
            syncSaveStateSaves();
        } else if (this.cartriges.get("FR") && (address == 1857098 || address == 4305018 || address == 4306121 || address == 0x0416138)) {
            syncSaveStateSaves();
        } else if ((address == 2681225 || address == 2918453 || address == 6214600)) {
            syncSaveStateSaves();
        } else if (address == 0x05e8c14) {
            saveAfterDelay();
        }
    }

    return this.readROM8WithoutIntercept(address);
}

async function saveAfterDelay() {
    currentlySaving = true;
    await delay(3000);
    syncSaveStateSaves();
}

// FIRE RED - isSurfing 0x02036e40 (0x33 = on land, 0x11 on water)
// EMERALD -            0x0203735B
const FIRE_RED_CURRENT_GROUND_OFFSET = 0x02036e43;
const EMERALD_CURRENT_GROUND_OFFSET = 0x0203735B;
const CURRENT_GROUND_LAND = 0x33;
const CURRENT_GROUND_WATER = 0x11;
const CURRENT_GROUND_LADDER = 0x30;
const CURRENT_GROUND_ELEVATED = 0x44;

const EMERALD_STATE_OFFSET = 0x02037591;
const FIRE_RED_STATE_OFFSET = 0x02037079;
function forcePlayerState(state) {

    if(!IodineGUI.Iodine.IOCore) return;

    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") { 
        //IodineGUI.Iodine.IOCore.cpu.write8(FIRE_RED_MOVEMENT_MODE_OFFSET, state);
        IodineGUI.Iodine.IOCore.cpu.write8(FIRE_RED_STATE_OFFSET, state); 
        if (state == MOVEMENT_MODE_SURF) {
            IodineGUI.Iodine.IOCore.cpu.write8(FIRE_RED_CURRENT_GROUND_OFFSET, CURRENT_GROUND_WATER); 
        } else {
            IodineGUI.Iodine.IOCore.cpu.write8(FIRE_RED_CURRENT_GROUND_OFFSET, CURRENT_GROUND_LAND); 
        }
    } else if (IodineGUI.Iodine.IOCore.cartridge.romCode === "C") {
        IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_MOVEMENT_MODE_OFFSET, state);
        IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_STATE_OFFSET, state); 
        if (state == MOVEMENT_MODE_SURF) {
            IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_CURRENT_GROUND_OFFSET, CURRENT_GROUND_WATER); 
        } else {
            IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_CURRENT_GROUND_OFFSET, CURRENT_GROUND_LAND); 
        }
    } else if (IodineGUI.Iodine.IOCore.cartridge.romCode === "E") {
        IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_MOVEMENT_MODE_OFFSET, state);
        IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_STATE_OFFSET, state); 
        if (state == MOVEMENT_MODE_SURF) {
            IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_CURRENT_GROUND_OFFSET, CURRENT_GROUND_WATER); 
        } else if (IodineGUI.Iodine.IOCore.cpu.read8(EMERALD_CURRENT_GROUND_OFFSET) == CURRENT_GROUND_ELEVATED) {
            IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_CURRENT_GROUND_OFFSET, CURRENT_GROUND_ELEVATED); 
        } else {
            IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_CURRENT_GROUND_OFFSET, CURRENT_GROUND_LADDER); 
        }
    }
}

function whiteoutTeam() {
    if (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") { 
        // Poison First Mon
        IodineGUI.Iodine.IOCore.cpu.write8(FIRE_RED_PARTY_OFFSET + 80, 0x08);
        // Set First Mon HP to 1 
        IodineGUI.Iodine.IOCore.cpu.write16(FIRE_RED_PARTY_OFFSET + 86, 0x01);
        // Set other mons fainted
        IodineGUI.Iodine.IOCore.cpu.write16(FIRE_RED_PARTY_OFFSET + 86 + 100, 0x00);
        IodineGUI.Iodine.IOCore.cpu.write16(FIRE_RED_PARTY_OFFSET + 86 + 200, 0x00);
        IodineGUI.Iodine.IOCore.cpu.write16(FIRE_RED_PARTY_OFFSET + 86 + 300, 0x00);
        IodineGUI.Iodine.IOCore.cpu.write16(FIRE_RED_PARTY_OFFSET + 86 + 400, 0x00);
        IodineGUI.Iodine.IOCore.cpu.write16(FIRE_RED_PARTY_OFFSET + 86 + 500, 0x00);
    } else if (IodineGUI.Iodine.IOCore.cartridge.romCode === "C" || IodineGUI.Iodine.IOCore.cartridge.romCode === "E") {
       // Poison First Mon
       IodineGUI.Iodine.IOCore.cpu.write8(EMERALD_PARTY_OFFSET + 80, 0x08);
       // Set First Mon HP to 1 
       IodineGUI.Iodine.IOCore.cpu.write16(EMERALD_PARTY_OFFSET + 86, 0x01);
       // Set other mons fainted
       IodineGUI.Iodine.IOCore.cpu.write16(EMERALD_PARTY_OFFSET + 86 + 100, 0x00);
       IodineGUI.Iodine.IOCore.cpu.write16(EMERALD_PARTY_OFFSET + 86 + 200, 0x00);
       IodineGUI.Iodine.IOCore.cpu.write16(EMERALD_PARTY_OFFSET + 86 + 300, 0x00);
       IodineGUI.Iodine.IOCore.cpu.write16(EMERALD_PARTY_OFFSET + 86 + 400, 0x00);
       IodineGUI.Iodine.IOCore.cpu.write16(EMERALD_PARTY_OFFSET + 86 + 500, 0x00);
    }
}

function dynamicMemorySlice(dynamicPointer, offsetInDynamic, length) {
    let dynamicBlock = IodineGUI.Iodine.IOCore.cpu.read32(dynamicPointer);
    let startAddress = (dynamicBlock + offsetInDynamic - 0x02000000);
    let endAddress = startAddress + length;
    return IodineGUI.Iodine.IOCore.memory.externalRAM.slice(startAddress, endAddress);    
}

function dynamicMemorySplice(dynamicPointer, offsetInDynamic, length, data) {
    let dynamicBlock = IodineGUI.Iodine.IOCore.cpu.read32(dynamicPointer);
    let startAddress = (dynamicBlock + offsetInDynamic - 0x02000000);
    for (let i = 0; i<length; i++) {
        IodineGUI.Iodine.IOCore.memory.externalRAM[startAddress + i] = data[i];
    }
}


/******************/
/* Data Addresses */
/******************/
/**
 *  Addresses for save data, Team is not copied here because we use where it is statically stored in memory
 *  Addresses are offsets from the 32bit addresses that can be found using the pointers (ptr locations are static)
 *  Money is xor'd against 32bit xor key, item quantity is xor'd against the first 2 bytes of that key.
 *  
 *  Dynamicly Addressed memory means the three sections of data move in memory (hence we need to look the up with ptrs)
 *  These change each time the bag is accessed or a warp is triggered (and at various other times)
 * 
 *  There are 3 dynamic sections. SAV1 (mostly relating to team and items)
 *  SAV2 (storing the xor key, and trainer data, play time, settings, seen mons e.t.c)
 *  We don't deal with SAV3 but it's mostly boxed pokemon / box config   
 */

const EMERALD_PARTY_OFFSET = 0x020244EC;
const FIRE_RED_PARTY_OFFSET = 0x02024284;
const PLAYER_PARTY_LENGTH = 0x258;

// DYNAMIC SAV1 PTRs
const FIRE_RED_SAVE_1_PTR = 0x03005008;
const EMERALD_SAVE_1_PTR = 0x03005D8C;
// MONEY 
const FIRE_RED_OBSF_MONEY_OFFSET = 0x0290; //(0x0218)???
const FIRE_RED_OBSF_MONEY_LENGTH = 4;
const EMERALD_OBSF_MONEY_OFFSET = 0x0490; //(0x0494)???
const EMERALD_OBSF_MONEY_LENGTH = 4;

// DYNAMIC SAV2 PTRs
const FIRE_RED_SAVE_2_PTR = 0x0300500C;
const EMERALD_SAVE_2_PTR = 0x03005d90;
// Name + Gender / If on bike or surfing
const NAME_STATE_OFFSET = 0;
const NAME_STATE_LENGTH = 9;
// Trainer id and time (last 3 bytes button mode + text speed + sound/battle scene)
const ID_TIME_OFFSET = 10;
const ID_TIME_LENGTH = 12;
// XOR Key
const FIRE_RED_XOR_KEY_OFFSET = 0x0F20;
const FIRE_RED_XOR_KEY_LENGTH = 4;
const EMERALD_XOR_KEY_OFFSET = 0xAC;
const EMERALD_XOR_KEY_LENGTH = 4;

// ITEM POCKET
const FIRE_RED_ITEM_OFFSET = 0x0310;
const FIRE_RED_ITEM_LENGTH = 168;
const EMERALD_ITEM_OFFSET = 0x0560;
const EMERALD_ITEM_LENGTH = 120;

// KEY ITEM POCKET
const FIRE_RED_KEY_ITEM_OFFSET = 0x03B8;
const FIRE_RED_KEY_ITEM_LENGTH = 120;
const EMERALD_KEY_ITEM_OFFSET = 0x05D8;
const EMERALD_KEY_ITEM_LENGTH = 120;

// BALLS
const FIRE_RED_BALL_OFFSET = 0x0430;
const FIRE_RED_BALL_LENGTH = 52;
const EMERALD_BALL_OFFSET = 0x0650;
const EMERALD_BALL_LENGTH = 64;

// TM Case
const FIRE_RED_TM_OFFSET = 0x0464;
const FIRE_RED_TM_LENGTH = 232;
const EMERALD_TM_OFFSET = 0x0690;
const EMERALD_TM_LENGTH = 256;

// Berry Pocket
const FIRE_RED_BERRIES_OFFSET = 0x054C;
const FIRE_RED_BERRIES_LENGTH = 172;
const EMERALD_BERRIES_OFFSET = 0x0790;
const EMERALD_BERRIES_LENGTH = 184;

// DYNAMIC SAV3 PTRs
const FIRE_RED_SAVE_3_PTR = 0x03005010;
const EMERALD_SAVE_3_PTR = 0x03005d94;

const BOX_LENGTH = 2400;

/**************************/
/* Bag Storage Management */
/**************************/
/**
 * 
 *  Bag storeage requires special handling as quantities are xor'd with a special key 
 *  that changes and will be different for each game
 * 
 *  Additionally, storage size differs between games for now excess items will just be 
 *  lost so we don't have to worry about storing additional item data outside the games
 * 
 *  Additionally, additionally we do some special handling like, give the berry pouch if 
 *  berries are already collected, or give a bike if they have one in the other game
 *
 */

function BagStoreage() {
    this.money = null;
    //this.coins = null;

    //this.pcItems = new Map();
    this.itemPocket = new Map();
    this.keyItemsPocket = new Map();
    this.ballItemPocket = new Map();
    this.tmCase = new Map();
    this.berryPocket = new Map();
}

BagStoreage.prototype.readData = function (game) {
    if (game == "E" || game == "C") {
        this.readEmeraldData();
    } else {
        this.readFireRedData();
    }
}

BagStoreage.prototype.readFireRedData = function () {
    this.itemPocket.clear();
    this.keyItemsPocket.clear();
    this.ballItemPocket.clear();
    this.tmCase.clear();
    this.berryPocket.clear();

    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_2_PTR);
    let xorKey32 = IodineGUI.Iodine.IOCore.cpu.read32(save2Start + FIRE_RED_XOR_KEY_OFFSET);
    let xorKey16 = IodineGUI.Iodine.IOCore.cpu.read16(save2Start + FIRE_RED_XOR_KEY_OFFSET);

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);
    this.money = IodineGUI.Iodine.IOCore.cpu.read32(save1Start + FIRE_RED_OBSF_MONEY_OFFSET) ^ xorKey32;

    // read items
    this.readItemSection(save1Start, FIRE_RED_ITEM_OFFSET, FIRE_RED_ITEM_LENGTH, this.itemPocket, xorKey16);

    // read key items
    this.readItemSection(save1Start, FIRE_RED_KEY_ITEM_OFFSET, FIRE_RED_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16);

    // read balls
    this.readItemSection(save1Start, FIRE_RED_BALL_OFFSET, FIRE_RED_BALL_LENGTH, this.ballItemPocket, xorKey16);

    // read tms
    this.readItemSection(save1Start, FIRE_RED_TM_OFFSET, FIRE_RED_TM_LENGTH, this.tmCase, xorKey16);

    // read berries
    this.readItemSection(save1Start, FIRE_RED_BERRIES_OFFSET, FIRE_RED_BERRIES_LENGTH, this.berryPocket, xorKey16);
}

BagStoreage.prototype.readEmeraldData = function () {
    this.itemPocket.clear();
    this.keyItemsPocket.clear();
    this.ballItemPocket.clear();
    this.tmCase.clear();
    this.berryPocket.clear();

    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_2_PTR);
    let xorKey32 = IodineGUI.Iodine.IOCore.cpu.read32(save2Start + EMERALD_XOR_KEY_OFFSET);
    let xorKey16 = IodineGUI.Iodine.IOCore.cpu.read16(save2Start + EMERALD_XOR_KEY_OFFSET);

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);
    this.money = IodineGUI.Iodine.IOCore.cpu.read32(save1Start + EMERALD_OBSF_MONEY_OFFSET) ^ xorKey32;

    // read items
    this.readItemSection(save1Start, EMERALD_ITEM_OFFSET, EMERALD_ITEM_LENGTH, this.itemPocket, xorKey16);

    // read key items
    this.readItemSection(save1Start, EMERALD_KEY_ITEM_OFFSET, EMERALD_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16);

    // read balls
    this.readItemSection(save1Start, EMERALD_BALL_OFFSET, EMERALD_BALL_LENGTH, this.ballItemPocket, xorKey16);

    // read tms
    this.readItemSection(save1Start, EMERALD_TM_OFFSET, EMERALD_TM_LENGTH, this.tmCase, xorKey16);

    // read berries
    this.readItemSection(save1Start, EMERALD_BERRIES_OFFSET, EMERALD_BERRIES_LENGTH, this.berryPocket, xorKey16);
}

BagStoreage.prototype.writeData = function (game, lastGame, isLoadingScreen) {
    if (game == "E" || game == "C") {
        this.writeDataToEmerald(game, lastGame, isLoadingScreen);
    } else {
        this.writeDataToFireRed(game, lastGame, isLoadingScreen);
    }
}


BagStoreage.prototype.writeDataToFireRed = function (game, lastGame, isLoadingScreen) {
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_2_PTR);
    let xorKey32 = IodineGUI.Iodine.IOCore.cpu.read32(save2Start + FIRE_RED_XOR_KEY_OFFSET);
    let xorKey16 = IodineGUI.Iodine.IOCore.cpu.read16(save2Start + FIRE_RED_XOR_KEY_OFFSET);

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);

    IodineGUI.Iodine.IOCore.cpu.write32(save1Start + FIRE_RED_OBSF_MONEY_OFFSET, this.money ^ xorKey32);

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
    this.writeItemSection(save1Start, FIRE_RED_ITEM_OFFSET, FIRE_RED_ITEM_LENGTH, this.itemPocket, xorKey16, isLoadingScreen);

    // write key items
    this.writeItemSection(save1Start, FIRE_RED_KEY_ITEM_OFFSET, FIRE_RED_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16, false);

    // write balls
    this.writeItemSection(save1Start, FIRE_RED_BALL_OFFSET, FIRE_RED_BALL_LENGTH, this.ballItemPocket, xorKey16, isLoadingScreen);

    // write tms
    this.writeItemSection(save1Start, FIRE_RED_TM_OFFSET, FIRE_RED_TM_LENGTH, this.tmCase, xorKey16, isLoadingScreen);

    // write berries
    this.writeItemSection(save1Start, FIRE_RED_BERRIES_OFFSET, FIRE_RED_BERRIES_LENGTH, this.berryPocket, xorKey16, isLoadingScreen);
}

BagStoreage.prototype.writeDataToEmerald = function (game, lastGame, isLoadingScreen) {
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_2_PTR);
    let xorKey32 = IodineGUI.Iodine.IOCore.cpu.read32(save2Start + EMERALD_XOR_KEY_OFFSET);
    let xorKey16 = IodineGUI.Iodine.IOCore.cpu.read16(save2Start + EMERALD_XOR_KEY_OFFSET);

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    IodineGUI.Iodine.IOCore.cpu.write32(save1Start + EMERALD_OBSF_MONEY_OFFSET, this.money ^ xorKey32);

    // If we have a bike from fire red but not a mach/acro bike from emerald we should get a mach bike 
    if (this.keyItemsPocket.get(360) && !this.keyItemsPocket.get(259) && !this.keyItemsPocket.get(272)) {
        this.keyItemsPocket.set(259, 1);
        this.keyItemsPocket.get(272, 1);
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
    this.writeItemSection(save1Start, EMERALD_ITEM_OFFSET, EMERALD_ITEM_LENGTH, this.itemPocket, xorKey16, isLoadingScreen);

    // write key items
    this.writeItemSection(save1Start, EMERALD_KEY_ITEM_OFFSET, EMERALD_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16, false);

    // write balls
    this.writeItemSection(save1Start, EMERALD_BALL_OFFSET, EMERALD_BALL_LENGTH, this.ballItemPocket, xorKey16, isLoadingScreen);

    // write tms
    this.writeItemSection(save1Start, EMERALD_TM_OFFSET, EMERALD_TM_LENGTH, this.tmCase, xorKey16, false);

    // write berries
    this.writeItemSection(save1Start, EMERALD_BERRIES_OFFSET, EMERALD_BERRIES_LENGTH, this.berryPocket, xorKey16, isLoadingScreen);
}

BagStoreage.prototype.readItemSection = function(save1Start, offset, length, storeTo, xorKey16) {
    for (let i = 0;  i < offset + length; i+=4) {
        let item = IodineGUI.Iodine.IOCore.cpu.read16(save1Start + offset + i);

        if (item != 0) {

            let quantity = IodineGUI.Iodine.IOCore.cpu.read16(save1Start + offset + i + 2) ^ xorKey16;
            storeTo.set(item, quantity);

        }
    }
}

BagStoreage.prototype.writeItemSection = function(save1Start, offset, length, store, xorKey16, clear) {

    var storeArr = [...store];

    for (let i = 0;  i < offset + length; i+=4) {

        let index = i / 4;
        if (storeArr.length > index) {

            let item = (storeArr[i / 4])[0];
            let quantity = (storeArr[i / 4])[1] ^ xorKey16;

            IodineGUI.Iodine.IOCore.cpu.write16(save1Start + offset + i, item);
            IodineGUI.Iodine.IOCore.cpu.write16(save1Start + offset + i + 2, quantity);

        } else {

            // No more items to copy
            if(clear) {
                let item = ITEM_DATA.Nothing.number;
                let quantity = 0 ^ xorKey16;
                
                IodineGUI.Iodine.IOCore.cpu.write16(save1Start + offset + i, item);
                IodineGUI.Iodine.IOCore.cpu.write16(save1Start + offset + i + 2, quantity);
            } else {
                break;
            }
        }
    }
}

BagStoreage.prototype.hasBike = function () {
    // Add up quantities of any bikes
    return ((this.keyItemsPocket.get(259) || 0) + (this.keyItemsPocket.get(272) || 0) + (this.keyItemsPocket.get(360) || 0)) > 0
}

BagStoreage.prototype.hasFlute = function () {
    // Add up quantities of any flutes
    return ((this.keyItemsPocket.get(36) || 0) + (this.keyItemsPocket.get(350) || 0)) > 0
}

/*******************/
/* Flag Management */
/*******************/
var badgeSync = true;

// This handles any general vars/flags that need to be transfered when switching games

// IN DYNAMIC SAV1
// The equations are so the offsets line up the the flags defined in the decomp projects
// https://github.com/pret/pokefirered/blob/master/include/constants/flags.h
// https://github.com/pret/pokeemerald/blob/master/include/constants/flags.h
// https://github.com/pret/pokefirered/blob/master/include/constants/vars.h
// https://github.com/pret/pokeemerald/blob/master/include/constants/vars.h
const FIRE_RED_BASE_FLAG_OFFSET    = 0xEE0;
const FIRE_RED_SYS_FLAGS_OFFSET    = 0xFE0;
const FIRE_RED_BADGE1_OFFSET       = 0x20;
const FIRE_RED_BADGE2_OFFSET       = 0x21;
const FIRE_RED_BADGE3_OFFSET       = 0x22;
const FIRE_RED_BADGE4_OFFSET       = 0x23;
const FIRE_RED_BADGE5_OFFSET       = 0x24;
const FIRE_RED_BADGE6_OFFSET       = 0x25;
const FIRE_RED_BADGE7_OFFSET       = 0x26;
const FIRE_RED_BADGE8_OFFSET       = 0x27;
const FIRE_RED_RUNNING_SHOE_OFFSET = 0x2F;
const FIRE_RED_POKEDEX_OFFSET      = 0x29; 
const FIRE_RED_NATIONAL_DEX_OFFSET = 0x40;
const FIRE_RED_BADGE_OFFSETS = [FIRE_RED_BADGE1_OFFSET, 
                                FIRE_RED_BADGE2_OFFSET, 
                                FIRE_RED_BADGE3_OFFSET, 
                                FIRE_RED_BADGE4_OFFSET, 
                                FIRE_RED_BADGE5_OFFSET, 
                                FIRE_RED_BADGE6_OFFSET, 
                                FIRE_RED_BADGE7_OFFSET, 
                                FIRE_RED_BADGE8_OFFSET];
const FIRE_RED_BIKE_OBTAINED_OFFSET = 0x271;
const FIRE_RED_FLUTE_OBTAINED_OFFSET = 0x23D;

const EMERALD_BASE_FLAGS_OFFSET   = 0x1270;
const EMERALD_SYS_FLAGS_OFFSET    = 0x137C;
const EMERALD_BADGE1_OFFSET       = 0x7;
const EMERALD_BADGE2_OFFSET       = 0x8;
const EMERALD_BADGE3_OFFSET       = 0x9;
const EMERALD_BADGE4_OFFSET       = 0xA;
const EMERALD_BADGE5_OFFSET       = 0xB;
const EMERALD_BADGE6_OFFSET       = 0xC;
const EMERALD_BADGE7_OFFSET       = 0xD;
const EMERALD_BADGE8_OFFSET       = 0xE;
const EMERALD_RUNNING_SHOE_OFFSET = 0x60;
const EMERALD_POKEDEX_OFFSET      = 0x1; 
const EMERALD_NATIONAL_DEX_OFFSET = 0x36;
const EMERALD_BADGE_OFFSETS = [EMERALD_BADGE1_OFFSET, 
                               EMERALD_BADGE2_OFFSET, 
                               EMERALD_BADGE3_OFFSET, 
                               EMERALD_BADGE4_OFFSET, 
                               EMERALD_BADGE5_OFFSET, 
                               EMERALD_BADGE6_OFFSET, 
                               EMERALD_BADGE7_OFFSET, 
                               EMERALD_BADGE8_OFFSET];

const EMERALD_BASE_VAR_OFFSET = 0x139c;
const FIRE_RED_BASE_VAR_OFFSET = 0x1000;

const EMERALD_REPEL_STEPS_OFFSET = 0x4021;
const FIRE_RED_REPEL_STEPS_OFFSET = 0x4020;

const EMERALD_STARTER_CHOICE_OFFSET = 0x4023;
const FIRE_RED_STARTER_CHOICE_OFFSET = 0x4031;

function FlagManager(hasBike, hasFlute) {
    this.badge1 = null;
    this.badge2 = null;
    this.badge3 = null;
    this.badge4 = null;
    this.badge5 = null;
    this.badge6 = null;
    this.badge7 = null;
    this.badge8 = null;
    this.hasRunningShoes = null;
    this.hasFlute = hasFlute;
    this.HMState = null;
    this.hasBike = hasBike;
    this.repelSteps = null;
    this.starterChoice = null;
}

FlagManager.prototype.getFlag = function (saveOffset, sectionOffset, flagOffset) {

    let flagByte = IodineGUI.Iodine.IOCore.cpu.read8(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1);
    let flagBit = flagOffset % 8;

    return !!+flagByte.toString(2).padStart(8, 0).split("").reverse()[flagBit];
}

FlagManager.prototype.setFlag = function (saveOffset, sectionOffset, flagOffset, value) {

    let flagByte = IodineGUI.Iodine.IOCore.cpu.read8(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1);
    let flagBit = flagOffset % 8;

    let byteArr = flagByte.toString(2).padStart(8, 0).split("").reverse();
    byteArr[flagBit] = value;

    IodineGUI.Iodine.IOCore.cpu.write8(saveOffset + sectionOffset + Math.ceil((flagOffset + 1) / 8) - 1, parseInt(byteArr.reverse().join(""), 2));

}

FlagManager.prototype.readFlags = function (game) {
    if (game == "E") {
        this.readEmeraldFlags();
    } 
    else if (game == "C") {
        this.readCrystalFlags();
    } else {
        this.readFireRedFlags();
    }
}

FlagManager.prototype.readEmeraldFlags = function () {
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    this.badge1          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE1_OFFSET);
    this.badge2          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE2_OFFSET);
    this.badge3          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE3_OFFSET);
    this.badge4          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE4_OFFSET);
    this.badge5          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE5_OFFSET);
    this.badge6          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE6_OFFSET);
    this.badge7          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE7_OFFSET);
    this.badge8          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE8_OFFSET);
    this.hasRunningShoes = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_RUNNING_SHOE_OFFSET);
    
    this.HMState = new HMState();
    this.HMState.evaluate("E", this.badge1, this.badge2, this.badge3, this.badge4, this.badge5, this.badge6, this.badge7, this.badge8);

    this.repelSteps = readGameVar("E", EMERALD_REPEL_STEPS_OFFSET);
    //this.starterChoice = readGameVar("E", EMERALD_STARTER_CHOICE_OFFSET);
}

FlagManager.prototype.readCrystalFlags = function () {
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    this.badge1          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE1_OFFSET);
    this.badge2          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE2_OFFSET);
    this.badge3          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE3_OFFSET);
    this.badge4          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE4_OFFSET);
    this.badge5          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE5_OFFSET);
    this.badge6          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE6_OFFSET);
    this.badge7          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE7_OFFSET);
    this.badge8          = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE8_OFFSET);
    this.hasRunningShoes = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_RUNNING_SHOE_OFFSET);

    this.HMState = new HMState();
    this.HMState.evaluate("C", this.badge1, this.badge2, this.badge3, this.badge4, this.badge5, this.badge6, this.badge7, this.badge8);

    this.repelSteps = readGameVar("C", EMERALD_REPEL_STEPS_OFFSET);
    //this.starterChoice = readGameVar("C", EMERALD_STARTER_CHOICE_OFFSET);
}

FlagManager.prototype.readFireRedFlags = function () {
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);
    
    this.badge1          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE1_OFFSET);
    this.badge2          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE2_OFFSET);
    this.badge3          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE3_OFFSET);
    this.badge4          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE4_OFFSET);
    this.badge5          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE5_OFFSET);
    this.badge6          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE6_OFFSET);
    this.badge7          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE7_OFFSET);
    this.badge8          = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE8_OFFSET);
    this.hasRunningShoes = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_RUNNING_SHOE_OFFSET);

    this.HMState = new HMState();
    this.HMState.evaluate("FR", this.badge1, this.badge2, this.badge3, this.badge4, this.badge5, this.badge6, this.badge7, this.badge8);

    this.repelSteps = readGameVar("FR", FIRE_RED_REPEL_STEPS_OFFSET);
    this.starterChoice = readGameVar("FR", FIRE_RED_STARTER_CHOICE_OFFSET);
}

FlagManager.prototype.writeFlags = function (game, lastGame) {
    if (game == "E") {
        this.writeEmeraldFlags();
    } 
    else if (game == "C") {
        this.writeCrystalFlags();
    } else {
        this.writeFireRedFlags();
    }
}

FlagManager.prototype.writeEmeraldFlags = function () {

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);

    // Enable national dex
    this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_NATIONAL_DEX_OFFSET, 1);
    writeGameVar("E", 0x404E, 0x0302);
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_2_PTR);
    IodineGUI.Iodine.IOCore.cpu.write8(save2Start + 26, 0xDA);

    // Open regi doors
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0xE4, 1);

    // Open Devon Corp F1
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x90, 1);

    // Not On Bike Path
    modifySystemFlag("E", 0x2B, 0);

    // Open Sootopolis Gym Door
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x9E, 1);

    // Sootopolis always in nice state
    // We need to prevent locked doors, people standing around and lilycove dept roof being locked off
    writeGameVar("E", EMERALD_BASE_FLAGS_OFFSET, 0x405E, 0);
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x81, 1);

    // Hide Steven and wallace in sootopolis
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x3CD, 1);
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x330, 1);

    // RRAQUAZA always available
    writeGameVar("E", EMERALD_BASE_FLAGS_OFFSET, 0x40D7, 0);
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x50, 0);

    // Show steven on the bridge if we don't have the devon scope
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x3CC, 0);
    
    // Make sure the magma embelem can always be got
    // Hide Jagged Pass Magma guard
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x34F, 1);
    writeGameVar("E", EMERALD_BASE_FLAGS_OFFSET, 0x40B9, 0);

    // Unblock Tunnlers rest house 
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x8F, 1);

    // Unblock Devon corp f1
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x90, 1);

    // Remove the brigde Kecleon so we can ride up from lilycove
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x3CA, 1);

    // Change Slateport state to 0 (to work around a glitch where game loops exiting the pokecenter)
    // This was needed for the IodineGBA scripted version it might not be needed in the rom hack
    writeGameVar("E", EMERALD_BASE_FLAGS_OFFSET, 0x4058, 0);

    // Remove Team Aqua from slateport and above slateport
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x372, 1);
    this.setFlag(save1Start, EMERALD_BASE_FLAGS_OFFSET, 0x384, 1);

    if (badgeSync) {
        
        let badge1 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE1_OFFSET);
        let badge2 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE2_OFFSET);
        let badge3 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE3_OFFSET);
        let badge4 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE4_OFFSET);
        let badge5 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE5_OFFSET);
        let badge6 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE6_OFFSET);
        let badge7 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE7_OFFSET);
        let badge8 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE8_OFFSET);

        let updatedBadges = this.HMState.updateBadges("E", badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8);

        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE1_OFFSET, +(updatedBadges[0] || badge1));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE2_OFFSET, +(updatedBadges[1] || badge2));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE3_OFFSET, +(updatedBadges[2] || badge3));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE4_OFFSET, +(updatedBadges[3] || badge4));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE5_OFFSET, +(updatedBadges[4] || badge5));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE6_OFFSET, +(updatedBadges[5] || badge6));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE7_OFFSET, +(updatedBadges[6] || badge7));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE8_OFFSET, +(updatedBadges[7] || badge8));

    }

    writeGameVar("E", EMERALD_REPEL_STEPS_OFFSET, this.repelSteps);

    if (this.starterChoice) {
        writeGameVar("E", EMERALD_STARTER_CHOICE_OFFSET, this.starterChoice);
    }
}

FlagManager.prototype.writeCrystalFlags = function () {

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);

    // Enable national dex
    this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_NATIONAL_DEX_OFFSET, 1);
    writeGameVar("E", 0x404E, 0x0302);
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_2_PTR);
    IodineGUI.Iodine.IOCore.cpu.write8(save2Start + 26, 0xDA);

    if (badgeSync) {
        
        let badge1 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE1_OFFSET);
        let badge2 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE2_OFFSET);
        let badge3 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE3_OFFSET);
        let badge4 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE4_OFFSET);
        let badge5 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE5_OFFSET);
        let badge6 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE6_OFFSET);
        let badge7 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE7_OFFSET);
        let badge8 = this.getFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE8_OFFSET);

        let updatedBadges = this.HMState.updateBadges("C", badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8);

        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE1_OFFSET, +(updatedBadges[0] || badge1));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE2_OFFSET, +(updatedBadges[1] || badge2));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE3_OFFSET, +(updatedBadges[2] || badge3));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE4_OFFSET, +(updatedBadges[3] || badge4));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE5_OFFSET, +(updatedBadges[4] || badge5));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE6_OFFSET, +(updatedBadges[5] || badge6));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE7_OFFSET, +(updatedBadges[6] || badge7));
        this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_BADGE8_OFFSET, +(updatedBadges[7] || badge8));
        
    }

    writeGameVar("C", EMERALD_REPEL_STEPS_OFFSET, this.repelSteps);
    // Enabling this disables all the battle with Silver
    //writeGameVar("C", EMERALD_STARTER_CHOICE_OFFSET, this.starterChoice);
}

FlagManager.prototype.writeFireRedFlags = function () {

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);

    this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);

    // Enable national dex
    this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_NATIONAL_DEX_OFFSET, 1);
    writeGameVar("FR", 0x404E, 0x6258);
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_2_PTR);
    IodineGUI.Iodine.IOCore.cpu.write8(save2Start + 27, 0xB9);

    // Not On Bike Path
    modifySystemFlag("FR", 0x30, 0);

    if (this.hasBike) {
        this.setFlag(save1Start, FIRE_RED_BASE_FLAG_OFFSET, FIRE_RED_BIKE_OBTAINED_OFFSET, 1);
    }

    if (this.hasFlute) {
        this.setFlag(save1Start, FIRE_RED_BASE_FLAG_OFFSET, FIRE_RED_FLUTE_OBTAINED_OFFSET, 1);
    }

    if (badgeSync) {
        
        let badge1 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE1_OFFSET);
        let badge2 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE2_OFFSET);
        let badge3 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE3_OFFSET);
        let badge4 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE4_OFFSET);
        let badge5 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE5_OFFSET);
        let badge6 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE6_OFFSET);
        let badge7 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE7_OFFSET);
        let badge8 = this.getFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE8_OFFSET);

        let updatedBadges = this.HMState.updateBadges("FR", badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8);

        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE1_OFFSET, +(updatedBadges[0] || badge1));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE2_OFFSET, +(updatedBadges[1] || badge2));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE3_OFFSET, +(updatedBadges[2] || badge3));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE4_OFFSET, +(updatedBadges[3] || badge4));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE5_OFFSET, +(updatedBadges[4] || badge5));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE6_OFFSET, +(updatedBadges[5] || badge6));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE7_OFFSET, +(updatedBadges[6] || badge7));
        this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_BADGE8_OFFSET, +(updatedBadges[7] || badge8));
        
    }
    
    writeGameVar("FR", FIRE_RED_REPEL_STEPS_OFFSET, this.repelSteps);
    //writeGameVar("FR", FIRE_RED_STARTER_CHOICE_OFFSET, this.starterChoice);
}

function modifyBadge(game, badgeNumber, shouldGiveOrRemoveBit) {

    let badgeOffsets = game == "FR" ? FIRE_RED_BADGE_OFFSETS : EMERALD_BADGE_OFFSETS
    modifySystemFlag(game, badgeOffsets[badgeNumber - 1], shouldGiveOrRemoveBit);

}

function modifyRunningShoes(game, shouldGiveOrRemoveBit) {

    let offset = game == "FR" ? FIRE_RED_RUNNING_SHOE_OFFSET : EMERALD_RUNNING_SHOE_OFFSET
    modifySystemFlag(game, offset, shouldGiveOrRemoveBit);

}

function modifySystemFlag(game, offset, shouldGiveOrRemoveBit) {

    let manager = new FlagManager();
    manager.readFlags(game);

    let savePtr = game == "FR" ? FIRE_RED_SAVE_1_PTR : EMERALD_SAVE_1_PTR;
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(savePtr);

    let sysFlagOffset = game == "FR" ? FIRE_RED_SYS_FLAGS_OFFSET : EMERALD_SYS_FLAGS_OFFSET;

    manager.setFlag(save1Start, sysFlagOffset, offset, shouldGiveOrRemoveBit);

}

function modifyBaseFlag(game, offset, shouldGiveOrRemoveBit) {

    let manager = new FlagManager();
    manager.readFlags(game);

    let savePtr = game == "FR" ? FIRE_RED_SAVE_1_PTR : EMERALD_SAVE_1_PTR;
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(savePtr);

    let sysFlagOffset = game == "FR" ? FIRE_RED_BASE_FLAG_OFFSET : EMERALD_BASE_FLAGS_OFFSET;

    manager.setFlag(save1Start, sysFlagOffset, offset, shouldGiveOrRemoveBit);

}

function readSystemFlag(game, offset) {

    let manager = new FlagManager();
    manager.readFlags(game);

    let savePtr = game == "FR" ? FIRE_RED_SAVE_1_PTR : EMERALD_SAVE_1_PTR;
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(savePtr);

    let sysFlagOffset = game == "FR" ? FIRE_RED_SYS_FLAGS_OFFSET : EMERALD_SYS_FLAGS_OFFSET;

    return manager.getFlag(save1Start, sysFlagOffset, offset);

}
function writeGameVar(game, offset, data) {

    let savePtr = game == "FR" ? FIRE_RED_SAVE_1_PTR : EMERALD_SAVE_1_PTR;
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(savePtr);

    let baseVarOffset = game == "FR" ? FIRE_RED_BASE_VAR_OFFSET : EMERALD_BASE_VAR_OFFSET;

    IodineGUI.Iodine.IOCore.cpu.write16(save1Start + baseVarOffset + ((offset - 0x4000) * 2), data);
}

function readGameVar(game, offset) {

    let savePtr = game == "FR" ? FIRE_RED_SAVE_1_PTR : EMERALD_SAVE_1_PTR;
    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(savePtr);

    let baseVarOffset = game == "FR" ? FIRE_RED_BASE_VAR_OFFSET : EMERALD_BASE_VAR_OFFSET;

    return IodineGUI.Iodine.IOCore.cpu.read16(save1Start + baseVarOffset + ((offset - 0x4000) * 2));
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
function HMState() {
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

HMState.prototype.evaluate = function (game, badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8) {
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

HMState.prototype.updateBadges = function (game, badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8) {

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