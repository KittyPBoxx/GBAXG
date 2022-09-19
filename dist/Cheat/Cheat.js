/**
 * Random Warp Script
 */

// Ruby/Saphire (0x020297f0) 

var isWarping = false;
var randomWarpsEnabled = true;


const EMERALD_PARTY_OFFSET = 0x020244EC;
const FIRE_RED_PARTY_OFFSET = 0x02024284;
const PLAYER_PARTY_LENGTH = 0x258;


 GameBoyAdvanceCPU.prototype.write8WithoutIntercept = GameBoyAdvanceCPU.prototype.write8;
 GameBoyAdvanceCPU.prototype.write8 = function (address, data) { 

    if ((address == 0x2031dbe) && 
        (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))
    {
        isWarping = randomWarpsEnabled;
    } 
    else if ((address == 0x20322e6) && IodineGUI.Iodine.IOCore.cartridge.romCode === "E") 
    {
        isWarping = randomWarpsEnabled;
    }

    this.write8WithoutIntercept(address, data);

 }

function PKWarp(trigger, romCode, d1, d2, d3) {
    this.trigger = trigger;
    this.toRomCode = romCode;
    this.toD1 = d1;
    this.toD2 = d2;
    this.toD3 = d3;
}

let warpRedirections = new Map();
warpRedirections.set('E1,1,0' , new PKWarp('E1,1,0', 'FR', 3, 0, 1));
warpRedirections.set('FR3,0,1', new PKWarp('FR3,0,1', 'E', 1, 1, 0));
warpRedirections.set('E1,2,2' , new PKWarp('E1,2,2', 'E', 1, 1, 0));

GameBoyAdvanceCPU.prototype.read8WithoutIntercept = GameBoyAdvanceCPU.prototype.read8;
GameBoyAdvanceCPU.prototype.read8 = function (address) {


    if (!isWarping) return this.read8WithoutIntercept(address);

    if (address == 0x2031dbc && (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))
    {
        // Base game FR/LG
        address = this.handleWarpRedirection(address, IodineGUI.Iodine.IOCore.cartridge.romCode);
    } 
    else if (address == 0x20322e4 && IodineGUI.Iodine.IOCore.cartridge.romCode === "E") 
    {
        // Base game Emerald
        address = this.handleWarpRedirection(address, IodineGUI.Iodine.IOCore.cartridge.romCode);
    }

    return this.read8WithoutIntercept(address);
}

GameBoyAdvanceCPU.prototype.handleWarpRedirection = function (address, romCode) {

    let d1 = this.read8WithoutIntercept(address);
    let d2 = this.read8WithoutIntercept(address + 1);
    let d3 = this.read8WithoutIntercept(address + 2);

    // Avoid scripted warps, route connections without zone e.t.c
    if (d3 == 255) { return address; }

    let trigger = romCode + d1 + "," + d2 + "," + d3;
    let pkWarp = warpRedirections.get(trigger);

    console.log("Warping triggered " + trigger); 

    if (pkWarp) {
        IodineGUI.Iodine.pause();

        IodineGUI.Iodine.saveStateManager.saveState(romCode);

        let partySlice = readWRAMSlice(IodineGUI.Iodine.IOCore.cartridge.romCode == "E" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH);
        quickHideScreen();
        IodineGUI.Iodine.saveStateManager.loadState(pkWarp.toRomCode);

        if (pkWarp.toRomCode == "E") {
            this.write8(0x20322e4, pkWarp.toD1);
            this.write8(0x20322e5, pkWarp.toD2);
            this.write8(0x20322e6, pkWarp.toD3);
            IodineGUI.Iodine.play();
            address = 0x20322e4;
        } else {
            this.write8(0x2031dbc, pkWarp.toD1);
            this.write8(0x2031dbd, pkWarp.toD2);
            this.write8(0x2031dbe, pkWarp.toD3);
            IodineGUI.Iodine.play();
            address = 0x2031dbc;
        }
        spliceWRAM(IodineGUI.Iodine.IOCore.cartridge.romCode == "E" ? EMERALD_PARTY_OFFSET : FIRE_RED_PARTY_OFFSET, PLAYER_PARTY_LENGTH, partySlice);

        IodineGUI.Iodine.play();
    }

    isWarping = false;
    return address;
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

var walkThroughWalls = false;
GameBoyAdvanceMultiCartridge.prototype.readROM16WithoutIntercept = GameBoyAdvanceMultiCartridge.prototype.readROM16;
GameBoyAdvanceMultiCartridge.prototype.readROM16 = function (address) {

    if (!walkThroughWalls) { return this.readROM16WithoutIntercept(address); }

    /* FireRed 1.0 and 1.1 have different addresses */
    if ((address == 364098 || address == 364078) && this.romCode == "FR") { 
        return 0x2100; 
    } else if (address == 364078 && this.romCode == "C") {
        return 0x2100; 
    } else if (address == 601094 && this.romCode == "E") {
        return 0x2000;
    }
    
    return this.readROM16WithoutIntercept(address);
}
