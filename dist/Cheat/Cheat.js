/**
 * Random Warp Script
 */

// Ruby/Saphire (0x020297f0) 

let isWarping = false

 GameBoyAdvanceCPU.prototype.write8WithoutIntercept = GameBoyAdvanceCPU.prototype.write8;
 GameBoyAdvanceCPU.prototype.write8 = function (address, data) {
 
    if ((address == 0x2031dbe) && 
        (IodineGUI.Iodine.IOCore.cartridge.romCode === "FR" || IodineGUI.Iodine.IOCore.cartridge.romCode === "C"))
    {
        isWarping = true;
    } 
    else if ((address == 0x20322e6) && IodineGUI.Iodine.IOCore.cartridge.romCode === "E") 
    {
        isWarping = true;
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

    let trigger = romCode + d1 + "," + d2 + "," + d3;
    let pkWarp = warpRedirections.get(trigger);

    console.log("Warping triggered " + trigger); 

    IodineGUI.Iodine.pause();
    initSaveStateManager();
    saveStateManager.saveState(romCode);

    if (pkWarp) {

        quickHideScreen();
        saveStateManager.loadState(pkWarp.toRomCode);

        if (pkWarp.romCode == "E") {
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

    }

    isWarping = false;
    IodineGUI.Iodine.play();
    return address;
}

function quickHideScreen() {
    let elmnt = document.getElementById("emulator_target");
    elmnt.classList.remove("quick-hide");
    elmnt.offsetWidth
    elmnt.classList.add("quick-hide")
}
 

