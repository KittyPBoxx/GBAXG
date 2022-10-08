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

GameBoyAdvanceCPU.prototype.write32WithoutIntercept = GameBoyAdvanceCPU.prototype.write32;
GameBoyAdvanceCPU.prototype.write32 = function (address, data) { 

    if (switchingGameState != 0) {

        if (switchingGameState == 1) {

            if (((address == FIRE_RED_LAST_BANK) &&  (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C")) || 
                ((address == EMERALD_LAST_BANK && IodineGUI.Iodine.IOCore.cartridge.romCode === "E")))  {

                    IodineGUI.Iodine.pause();
                    let currentRomCode = IodineGUI.Iodine.IOCore.cartridge.romCode;
                    let partySlice = readWRAMSlice(currentRomCode == "E" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH);
                    let playerNameAndState = dynamicMemorySlice(currentRomCode == "E" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, NAME_STATE_OFFSET, NAME_STATE_LENGTH);
                    let idAndPlayTime = dynamicMemorySlice(currentRomCode == "E" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, ID_TIME_OFFSET, ID_TIME_LENGTH);
                    let bagStoreage = new BagStoreage();
                    bagStoreage.readData(currentRomCode);
        
                    IodineGUI.Iodine.saveStateManager.loadState(gameSwitchingWarp.toRomCode);
        
                    if (gameSwitchingWarp.toRomCode == "E") {
                        this.write8(EMERALD_CURRENT_BANK, gameSwitchingWarp.toBank);
                        this.write8(EMERALD_CURRENT_MAP, gameSwitchingWarp.toMap);
                        this.write8(EMERALD_CURRENT_WARP, gameSwitchingWarp.toWarpNo);
                    } else {
                        this.write8(FIRE_RED_CURRENT_BANK, gameSwitchingWarp.toBank);
                        this.write8(FIRE_RED_CURRENT_MAP, gameSwitchingWarp.toMap);
                        this.write8(FIRE_RED_CURRENT_WARP, gameSwitchingWarp.toWarpNo);
                    }
                    currentRomCode = IodineGUI.Iodine.IOCore.cartridge.romCode; // Changed becuase of load state
                    spliceWRAM(currentRomCode == "E" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH, partySlice);
                    dynamicMemorySplice(currentRomCode == "E" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, NAME_STATE_OFFSET, NAME_STATE_LENGTH, playerNameAndState);
                    dynamicMemorySplice(currentRomCode == "E" ? EMERALD_SAVE_2_PTR : FIRE_RED_SAVE_2_PTR, ID_TIME_OFFSET, ID_TIME_LENGTH, idAndPlayTime);
                    bagStoreage.writeData(currentRomCode);
        
                    IodineGUI.mixerInput.volume = 0.0
                    switchingGameState = 2;
                    let elmnt = document.getElementById("emulator_target");
                    elmnt.classList.add("faded")
                    IodineGUI.Iodine.play();
                    return;

            }

        }


        if (switchingGameState == 2) {
            if (((address == FIRE_RED_LAST_BANK) &&  (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C")) || 
            ((address == EMERALD_LAST_BANK && IodineGUI.Iodine.IOCore.cartridge.romCode === "E")))  {

                IodineGUI.mixerInput.volume = 0.1;
                let elmnt = document.getElementById("emulator_target");
                elmnt.classList.remove("faded");
                switchingGameState = 0;
                isWarping = false;
                gameSwitchingWarp = null;

            }
        }

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

    if ((address == FIRE_RED_CURRENT_WARP) && 
        (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))
    {
        isWarping = randomWarpsEnabled;
    } 
    else if ((address == EMERALD_CURRENT_WARP) && IodineGUI.Iodine.IOCore.cartridge.romCode === "E") 
    {
        isWarping = randomWarpsEnabled;
    } 
    
    this.write8WithoutIntercept(address, data);

 }

GameBoyAdvanceCPU.prototype.read8WithoutIntercept = GameBoyAdvanceCPU.prototype.read8;
GameBoyAdvanceCPU.prototype.read8 = function (address) {


    if (!isWarping) return this.read8WithoutIntercept(address);

    if (address == FIRE_RED_CURRENT_BANK && (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))
    {
        // Base game FR/LG
        address = this.handleWarpRedirection(address, IodineGUI.Iodine.IOCore.cartridge.romCode);
    } 
    else if (address == EMERALD_CURRENT_BANK && IodineGUI.Iodine.IOCore.cartridge.romCode === "E") 
    {
        // Base game Emerald
        address = this.handleWarpRedirection(address, IodineGUI.Iodine.IOCore.cartridge.romCode);
    }

    return this.read8WithoutIntercept(address);
}

var gameSwitchingWarp = null;
GameBoyAdvanceCPU.prototype.handleWarpRedirection = function (address, romCode) {

    let bank = this.read8WithoutIntercept(address);
    let map = this.read8WithoutIntercept(address + 1);
    let warpNo = this.read8WithoutIntercept(address + 2);

    // Avoid scripted warps, route connections without zone e.t.c
    if (warpNo == 255) { return address; }
    if (switchingGameState == 2 || switchingGameState==1) { return address }

    let trigger = romCode + "," + bank + "," + map + "," + warpNo;
    let pkWarp = warpList.get(trigger);

    console.log("Warping triggered for " + trigger); 

    if (pkWarp) {

        IodineGUI.Iodine.pause();

        IodineGUI.Iodine.saveStateManager.saveState(romCode, true);
        if (!pkWarp.isInternal()) {
            switchingGameState = 1;
            gameSwitchingWarp = pkWarp;
            address = pkWarp.toRomCode == "E" ? EMERALD_CURRENT_BANK : FIRE_RED_CURRENT_BANK;
        } else {

            if (pkWarp.toRomCode == "E") {
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


/**********************/
/* Walk through walls */  
/**********************/
/**
 * Patches out an area in the ROM 
 */
var walkThroughWalls = false;
var frOffset = 364078; // set to 364098 for 1.1 version

GameBoyAdvanceMultiCartridge.prototype.initializeWithoutIntercept = GameBoyAdvanceMultiCartridge.prototype.initialize;
GameBoyAdvanceMultiCartridge.prototype.initialize = function (startingRom) {
    this.initializeWithoutIntercept(startingRom);

    // if 0x(80000)BC == 1 then we have US 1.1 instead of US 1.0
    if (this.cartriges.get("FR") && this.cartriges.get("FR").ROM[0xBC]) {
        frOffset = 364098
    }
} 

GameBoyAdvanceMultiCartridge.prototype.readROM16WithoutIntercept = GameBoyAdvanceMultiCartridge.prototype.readROM16;
GameBoyAdvanceMultiCartridge.prototype.readROM16 = function (address) {

    if (!walkThroughWalls) { return this.readROM16WithoutIntercept(address); }

    if (address == frOffset && this.romCode == "FR") { 
        return 0x2100; 
    } else if (address == 364078 && this.romCode == "C") {
        return 0x2100; 
    } else if (address == 601094 && this.romCode == "E") {
        return 0x2000;
    }
    
    return this.readROM16WithoutIntercept(address);
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
// Trainer id and time (last 2 bytes button mode + text speed)
const ID_TIME_OFFSET = 10;
const ID_TIME_LENGTH = 11;
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
    if (game == "E") {
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

BagStoreage.prototype.writeData = function (game) {
    if (game == "E") {
        this.writeDataToEmerald();
    } else {
        this.writeDataToFireRed();
    }
}


BagStoreage.prototype.writeDataToFireRed = function () {
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_2_PTR);
    let xorKey32 = IodineGUI.Iodine.IOCore.cpu.read32(save2Start + FIRE_RED_XOR_KEY_OFFSET);
    let xorKey16 = IodineGUI.Iodine.IOCore.cpu.read16(save2Start + FIRE_RED_XOR_KEY_OFFSET);

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(FIRE_RED_SAVE_1_PTR);

    IodineGUI.Iodine.IOCore.cpu.write32(save1Start + FIRE_RED_OBSF_MONEY_OFFSET, this.money ^ xorKey32);

    // We need to give the player the berry pocket or tm case if they have some 
    if (this.berryPocket.size > 1) {
        this.keyItemsPocket.set(365, 1); // one berry pouch
    }
    if (this.tmCase.size > 1) {
        this.tmCase.set(364, 1); // one tm case
    }
    

    // write items
    this.writeItemSection(save1Start, FIRE_RED_ITEM_OFFSET, FIRE_RED_ITEM_LENGTH, this.itemPocket, xorKey16);

    // write key items
    this.writeItemSection(save1Start, FIRE_RED_KEY_ITEM_OFFSET, FIRE_RED_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16);

    // write balls
    this.writeItemSection(save1Start, FIRE_RED_BALL_OFFSET, FIRE_RED_BALL_LENGTH, this.ballItemPocket, xorKey16);

    // write tms
    this.writeItemSection(save1Start, FIRE_RED_TM_OFFSET, FIRE_RED_TM_LENGTH, this.tmCase, xorKey16);

    // write berries
    this.writeItemSection(save1Start, FIRE_RED_BERRIES_OFFSET, FIRE_RED_BERRIES_LENGTH, this.berryPocket, xorKey16);
}

BagStoreage.prototype.writeDataToEmerald = function () {
    let save2Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_2_PTR);
    let xorKey32 = IodineGUI.Iodine.IOCore.cpu.read32(save2Start + EMERALD_XOR_KEY_OFFSET);
    let xorKey16 = IodineGUI.Iodine.IOCore.cpu.read16(save2Start + EMERALD_XOR_KEY_OFFSET);

    let save1Start = IodineGUI.Iodine.IOCore.cpu.read32(EMERALD_SAVE_1_PTR);

    IodineGUI.Iodine.IOCore.cpu.write32(save1Start + EMERALD_OBSF_MONEY_OFFSET, this.money ^ xorKey32);

    // If we have a bike from fire red but not a mach/acro bike from emerald we should get a mach bike 
    if (this.keyItemsPocket.get(360) && !this.keyItemsPocket.get(259) && !this.keyItemsPocket.get(272)) {
        this.keyItemsPocket.set(259, 1);
    }

    // write items
    this.writeItemSection(save1Start, EMERALD_ITEM_OFFSET, EMERALD_ITEM_LENGTH, this.itemPocket, xorKey16);

    // write key items
    this.writeItemSection(save1Start, EMERALD_KEY_ITEM_OFFSET, EMERALD_KEY_ITEM_LENGTH, this.keyItemsPocket, xorKey16);

    // write balls
    this.writeItemSection(save1Start, EMERALD_BALL_OFFSET, EMERALD_BALL_LENGTH, this.ballItemPocket, xorKey16);

    // write tms
    this.writeItemSection(save1Start, EMERALD_TM_OFFSET, EMERALD_TM_LENGTH, this.tmCase, xorKey16);

    // write berries
    this.writeItemSection(save1Start, EMERALD_BERRIES_OFFSET, EMERALD_BERRIES_LENGTH, this.berryPocket, xorKey16);
}

BagStoreage.prototype.readItemSection = function(save1Start, offset, length, storeTo, xorKey16) {
    for (let i = 0;  i < offset + length; i+=4) {
        let item = IodineGUI.Iodine.IOCore.cpu.read16(save1Start + offset + i);

        if (item == 0) { break; }

        let ballQuantity = IodineGUI.Iodine.IOCore.cpu.read16(save1Start + offset + i + 2) ^ xorKey16;
        storeTo.set(item, ballQuantity);
    }
}

BagStoreage.prototype.writeItemSection = function(save1Start, offset, length, store, xorKey16) {

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
            break;
        }
    }
}