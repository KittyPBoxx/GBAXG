/**
 *  Handle expanding roms to add additional data from other roms and creadting expansions from existing roms
 */
 function ExpansionPack() {
    this.expansion = [];
    this.nameExpanstionData = new Map();
}

ExpansionPack.prototype.addToRom = function(romCode) {
    let ROM = IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM;

    let freeMemoryStart = this.getPatchPointStart(romCode);


    if (freeMemoryStart + this.expansion.length > ROM.length) {

        // Appending to the rom (i.e for a 16mb rom we can increase the size upto 32mb)
        var mergedArray = new Uint8Array(freeMemoryStart + this.expansion.length);
        mergedArray.set(ROM);
        mergedArray.set(this.expansion, freeMemoryStart);
    
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROMLength = freeMemoryStart + this.expansion.length;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM =  mergedArray;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM);

    } else {

        // Splicing into (i.e rom is already 32mb so when have to write into a block of free space)
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM.set(this.expansion, freeMemoryStart);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM);

    }

}

ExpansionPack.prototype.getExpansionPtr = function(expansionName, romCode) {
    let expansion = this.nameExpanstionData.get(expansionName);
    return expansion.offset + 0x08000000 + this.getPatchPointStart(romCode);
}

ExpansionPack.prototype.patchRomPtr32 = function (romCode, ptrAddress, newPtr) {
    let davaView = new DataView(new Uint32Array([newPtr]).buffer);

    IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).patchROM8(ptrAddress, davaView.getUint8(0, true));
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).patchROM8(ptrAddress + 1, davaView.getUint8(1, true));
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).patchROM8(ptrAddress + 2, davaView.getUint8(2, true));
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).patchROM8(ptrAddress + 3, davaView.getUint8(3, true));

    IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM);
}

ExpansionPack.prototype.patchRomPtr32ByName = function (romCode, ptrAddress, name) {
    let newPtr = this.getExpansionPtr(name, romCode);
    this.patchRomPtr32(romCode, ptrAddress, newPtr);
}

ExpansionPack.prototype.addElementToExpansion = function(name, romCode, offsetInRom, length) {
    let startAddress = offsetInRom;
    let endAddress = startAddress + length;
    let data = IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM.slice(startAddress, endAddress);
    let offset = this.expansion.length; 
    this.expansion = this.expansion.concat(Array.from(data));
    this.nameExpanstionData.set(name, new ExpansionData(name, offset, Array.from(data)))
} 

ExpansionPack.prototype.getPatchPointStart = function (romCode) {
    if (romCode == "FR" || romCode == "E") {
        return 0x1000000;
    } else {
        return 0x09E0C630 - 0x08000000;
    }
}

function ExpansionData(name, offset, data) {
    this.name = name;
    this.offset = offset;
    this.data = data;
}

ExpansionData.prototype.getLength = function() {
    return this.data.length;
}

var exp = null;
async function patchSprites() {

    if (exp || IodineGUI.Iodine.IOCore.cartridge.cartriges.size != 3) {
        return;
    }


    exp = new ExpansionPack();
    
    var isPatchedFireRed = IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC];

    Object.keys(FR_1_0_GIRL_WALK_SPRITE_DATA).forEach(k => {
        let versionOffset = 0;
        if (isPatchedFireRed) {
            versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
        }
        exp.addElementToExpansion("fr_girl_" + k, "FR", (versionOffset + FR_1_0_GIRL_WALK_SPRITE_DATA[k]) - 0x08000000, 256);
    });

    Object.keys(FR_1_0_BOY_WALK_SPRITE_DATA).forEach(k => {
        let versionOffset = 0;
        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
        }
        exp.addElementToExpansion("fr_boy_" + k, "FR", (versionOffset + FR_1_0_BOY_WALK_SPRITE_DATA[k]) - 0x08000000, 256);
    });
    
    exp.addToRom("C");
    Object.keys(FR_1_0_GIRL_WALK_SPRITE_PTRS).forEach(k => {
        exp.patchRomPtr32ByName("C", FR_1_0_GIRL_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_girl_" + k);
    });
    Object.keys(FR_1_0_BOY_WALK_SPRITE_PTRS).forEach(k => {
        exp.patchRomPtr32ByName("C", FR_1_0_BOY_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_boy_" + k);
    });

    exp.addToRom("E");
    Object.keys(E_1_0_GIRL_WALK_SPRITE_PTRS).forEach(k => {
        exp.patchRomPtr32ByName("E", E_1_0_GIRL_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_girl_" + k);
    });
    Object.keys(E_1_0_BOY_WALK_SPRITE_PTRS).forEach(k => {
        exp.patchRomPtr32ByName("E", E_1_0_BOY_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_boy_" + k);
    });


    /* Colour pallets */
    var fireRedPalletOffset = isPatchedFireRed ? FR_1_1_GIRL_PALLET_DATA_BASE_OFFSET : FR_1_0_GIRL_PALLET_DATA_BASE_OFFSET;

    let palletData = [];
    for (i = 0; i < FR_1_0_GIRL_PALLET_DATA_LENGTH; i++) {
        let index = fireRedPalletOffset + i - 0x08000000;
        palletData.push(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[index]);
    }

    // EMERALD
    for (i = 0; i < palletData.length; i++) {
        let index = E_1_0_GIRL_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(index, palletData[i]);
    }
    for (i = 0; i < palletData.length; i++) {
        let index = E_1_0_BOY_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(index, palletData[i]);
    }
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM);

    // CRYSTAL
    for (i = 0; i < palletData.length; i++) {
        let index = C_1_0_GIRL_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(index, palletData[i]);
    }
    for (i = 0; i < palletData.length; i++) {
        let index = C_1_0_BOY_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(index, palletData[i]);
    }
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);
}
