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


var flagManager; // only global to help debugging
var isInSafari = false;
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

                    let bagStoreage = new BagStoreage();
                    bagStoreage.readData(beforeRomCode);

                    flagManager = new FlagManager(bagStoreage.hasBike());
                    flagManager.readFlags(beforeRomCode);
        
                    IodineGUI.Iodine.saveStateManager.loadState(gameSwitchingWarp.toRomCode);
        
                    if (gameSwitchingWarp.toRomCode == "E" || gameSwitchingWarp.toRomCode == "C") {
                        this.write8(EMERALD_CURRENT_BANK, gameSwitchingWarp.toBank);
                        this.write8(EMERALD_CURRENT_MAP, gameSwitchingWarp.toMap);
                        this.write8(EMERALD_CURRENT_WARP, gameSwitchingWarp.toWarpNo);
                    } else {
                        this.write8(FIRE_RED_CURRENT_BANK, gameSwitchingWarp.toBank);
                        this.write8(FIRE_RED_CURRENT_MAP, gameSwitchingWarp.toMap);
                        this.write8(FIRE_RED_CURRENT_WARP, gameSwitchingWarp.toWarpNo);
                    }
                    let currentRomCode = IodineGUI.Iodine.IOCore.cartridge.romCode; // Changed becuase of load state
                    spliceWRAM(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH, partySlice);
                    dynamicMemorySplice(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, NAME_STATE_OFFSET, NAME_STATE_LENGTH, playerNameAndState);
                    dynamicMemorySplice(currentRomCode == "E" || currentRomCode == "C" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, ID_TIME_OFFSET, ID_TIME_LENGTH, idAndPlayTime);

                    bagStoreage.writeData(currentRomCode, beforeRomCode);
                    flagManager.writeFlags(currentRomCode, beforeRomCode)
        
                    IodineGUI.mixerInput.volume = 0.0
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

                IodineGUI.mixerInput.volume = 0.1;
                let elmnt = document.getElementById("emulator_target");
                elmnt.classList.remove("faded");
                switchingGameState = 0;
                isWarping = false;
                gameSwitchingWarp = null;

            }
        }

    }

    if (address == FIRE_RED_LAST_BANK &&  IodineGUI.Iodine.IOCore.cartridge.romCode === "FR") {

        isInSafari = new FlagManager().getFlag(IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR), FIRE_RED_SYS_FLAGS_OFFSET, 0);

    } else if (address == EMERALD_LAST_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "E"))  {

        isInSafari = new FlagManager().getFlag(IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR), EMERALD_SYS_FLAGS_OFFSET, 0x2C)

    }


    this.write32WithoutIntercept(address, data);
}

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
        // Avoid scripted warps, route connections without zone e.t.c
        return address; 
    }

    if (switchingGameState == 2 || switchingGameState==1) { return address }


    let pkWarp = null;
    let trigger = romCode + "," + bank + "," + map + "," + warpNo;

    if (forceNextWarp) {
        let toParts = forceNextWarp.split(",");
        pkWarp = new PKWarp(trigger, toParts[0], toParts[1], toParts[2], toParts[3], forceNextWarp)
        reverseNextWarp = false;
        forceNextWarp = null;
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

        pkWarp = specialWarpHandling(pkWarp);

        IodineGUI.Iodine.pause();

        IodineGUI.Iodine.saveStateManager.saveState(romCode, true);
        if (pkWarp.toRomCode[0] != pkWarp.trigger[0]) {
            // Switching Games
            switchingGameState = 1;
            gameSwitchingWarp = pkWarp;
            address = pkWarp.toRomCode == "E" || pkWarp.toRomCode == "C" ? EMERALD_CURRENT_BANK : FIRE_RED_CURRENT_BANK;
        } else {

            if (pkWarp.toRomCode == "E" || pkWarp.toRomCode == "C") {
                this.write8(EMERALD_CURRENT_BANK, pkWarp.toBank);
                this.write8(EMERALD_CURRENT_MAP, pkWarp.toMap);
                this.write8(EMERALD_CURRENT_WARP, pkWarp.toWarpNo);
                address = EMERALD_CURRENT_BANK;
            } else {
                this.write8(FIRE_RED_CURRENT_BANK, pkWarp.toBank);
                this.write8(FIRE_RED_CURRENT_MAP, pkWarp.toMap);
                this.write8(FIRE_RED_CURRENT_WARP, pkWarp.toWarpNo);
                address = FIRE_RED_CURRENT_BANK;
            }

        }

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
function specialWarpHandling(pkwarp) {

    let destination = pkwarp.toRomCode + "," + pkwarp.toBank + "," + pkwarp.toMap + "," + pkwarp.toWarpNo;

    if (destination == "E,16,0,1") {
        pkwarp.toWarpNo = 2;
    } else if (destination == "C,16,0,1") {
        pkwarp.toWarpNo = 2;
    } else if (destination == "FR,1,75,1") {
        pkwarp.toWarpNo = 2;
    }

    return pkwarp;
}

async function quickSpeedUp(duration) {
    let currentSpeed = IodineGUI.Iodine.getSpeed();
    IodineGUI.Iodine.setSpeed(4);
    IodineGUI.mixerInput.volume = 0.0
    await delay(duration);
    IodineGUI.Iodine.setSpeed(currentSpeed);
    IodineGUI.mixerInput.volume = 0.1
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
var runIndoors = false;
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

        if (this.cartriges.get("FR") && this.cartriges.get("FR").ROM[0xBC] &&  ((address == 1857210 || address == 4305130 || address == 4306233))) {
            syncSaveStateSaves();
        } else if (this.cartriges.get("FR") && (address == 1857098 || address == 4305018 || address == 4306121)) {
            syncSaveStateSaves();
        } else if ((address == 2681225 || address == 2918453 || address == 6214600)) {
            syncSaveStateSaves();
        }
    }

    return this.readROM8WithoutIntercept(address);
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

BagStoreage.prototype.writeData = function (game, lastGame) {
    if (game == "E" || game == "C") {
        this.writeDataToEmerald(game, lastGame);
    } else {
        this.writeDataToFireRed(game, lastGame);
    }
}


BagStoreage.prototype.writeDataToFireRed = function (game, lastGame) {
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
    this.writeItemSection(save1Start, FIRE_RED_ITEM_OFFSET, FIRE_RED_ITEM_LENGTH, this.itemPocket, xorKey16, true);

    // write key items
    this.writeItemSection(save1Start, FIRE_RED_KEY_ITEM_OFFSET, FIRE_RED_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16, false);

    // write balls
    this.writeItemSection(save1Start, FIRE_RED_BALL_OFFSET, FIRE_RED_BALL_LENGTH, this.ballItemPocket, xorKey16, true);

    // write tms
    this.writeItemSection(save1Start, FIRE_RED_TM_OFFSET, FIRE_RED_TM_LENGTH, this.tmCase, xorKey16, true);

    // write berries
    this.writeItemSection(save1Start, FIRE_RED_BERRIES_OFFSET, FIRE_RED_BERRIES_LENGTH, this.berryPocket, xorKey16, true);
}

BagStoreage.prototype.writeDataToEmerald = function (game, lastGame) {
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
    this.writeItemSection(save1Start, EMERALD_ITEM_OFFSET, EMERALD_ITEM_LENGTH, this.itemPocket, xorKey16, true);

    // write key items
    this.writeItemSection(save1Start, EMERALD_KEY_ITEM_OFFSET, EMERALD_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16, false);

    // write balls
    this.writeItemSection(save1Start, EMERALD_BALL_OFFSET, EMERALD_BALL_LENGTH, this.ballItemPocket, xorKey16, true);

    // write tms
    this.writeItemSection(save1Start, EMERALD_TM_OFFSET, EMERALD_TM_LENGTH, this.tmCase, xorKey16, true);

    // write berries
    this.writeItemSection(save1Start, EMERALD_BERRIES_OFFSET, EMERALD_BERRIES_LENGTH, this.berryPocket, xorKey16, true);
}

BagStoreage.prototype.readItemSection = function(save1Start, offset, length, storeTo, xorKey16) {
    for (let i = 0;  i < offset + length; i+=4) {
        let item = IodineGUI.Iodine.IOCore.cpu.read16(save1Start + offset + i);

        if (item == 0) { break; }

        let ballQuantity = IodineGUI.Iodine.IOCore.cpu.read16(save1Start + offset + i + 2) ^ xorKey16;
        storeTo.set(item, ballQuantity);
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
const FIRE_RED_BADGE_OFFSETS = [FIRE_RED_BADGE1_OFFSET, 
                                FIRE_RED_BADGE2_OFFSET, 
                                FIRE_RED_BADGE3_OFFSET, 
                                FIRE_RED_BADGE4_OFFSET, 
                                FIRE_RED_BADGE5_OFFSET, 
                                FIRE_RED_BADGE6_OFFSET, 
                                FIRE_RED_BADGE7_OFFSET, 
                                FIRE_RED_BADGE8_OFFSET];
const FIRE_RED_BIKE_OBTAINED_OFFSET = 0x271;

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

function FlagManager(hasBike) {
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
    this.starterChoice = readGameVar("E", EMERALD_STARTER_CHOICE_OFFSET);
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
    this.starterChoice = readGameVar("C", EMERALD_STARTER_CHOICE_OFFSET);
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
    writeGameVar("E", EMERALD_STARTER_CHOICE_OFFSET, this.starterChoice);
}

FlagManager.prototype.writeCrystalFlags = function () {

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    this.setFlag(save1Start, EMERALD_SYS_FLAGS_OFFSET, EMERALD_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);

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
    writeGameVar("C", EMERALD_STARTER_CHOICE_OFFSET, this.starterChoice);
}

FlagManager.prototype.writeFireRedFlags = function () {

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);

    this.setFlag(save1Start, FIRE_RED_SYS_FLAGS_OFFSET, FIRE_RED_RUNNING_SHOE_OFFSET, +this.hasRunningShoes);

    if (this.hasBike) {
        this.setFlag(save1Start, FIRE_RED_BASE_FLAG_OFFSET, FIRE_RED_BIKE_OBTAINED_OFFSET, 1);
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
    writeGameVar("FR", FIRE_RED_STARTER_CHOICE_OFFSET, this.starterChoice);
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