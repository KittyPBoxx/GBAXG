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

ExpansionPack.prototype.addElementToExpansion = function(name, romCode, offsetInRom, length, transform = null) {
    let startAddress = offsetInRom;
    let endAddress = startAddress + length;
    let data = IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM.slice(startAddress, endAddress);
    if (transform) {
        data = transform.apply(null, [data]);
    }
    let offset = this.expansion.length; 
    this.expansion = this.expansion.concat(Array.from(data));
    this.nameExpanstionData.set(name, new ExpansionData(name, offset, Array.from(data)))
} 

ExpansionPack.prototype.addNewDataToExpansion = function(name, data) {
    let offset = this.expansion.length; 
    this.expansion = this.expansion.concat(Array.from(data));
    this.nameExpanstionData.set(name, new ExpansionData(name, offset, Array.from(data)))
} 

ExpansionPack.prototype.getPatchPointStart = function (romCode) {
    // For a 16mb rom we can just append to the end for 32mb+ roms we might need to find some free space to patch into
    return 0x1000000;
}

function ExpansionData(name, offset, data) {
    this.name = name;
    this.offset = offset;
    this.data = data;
}

ExpansionData.prototype.getLength = function() {
    return this.data.length;
}

/* 
    Sprites data is stored as 8x8 blocks (top -> bottom, left -> right) from the top left
    Each pixle is 4 BITS i.e each byte represents 2 pixels
    We need to transpose
    [1, 2]       [1 , 2 , 3 , 4 ]
    [3, 4]   ->  [5 , 6 , 7 , 8 ]
    [5, 6]       [9 , 10, 11, 12]
    [7, 8]       [13, 14, 15, 16]
    by padding with 0's
*/
function sprite16x32To32x32(data) {
    let newSpriteData = [];

    // ROW 1

        // BLOCK 1
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

        // BLOCK 2
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (0*8*8/2)]);
        } 

        // BLOCK 3
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (1*8*8/2)]);
        } 

        // BLOCK 4
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

    // ROW 2

        // BLOCK 5
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

        // BLOCK 6
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (2*8*8/2)]);
        } 

        // BLOCK 7
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (3*8*8/2)]);
        } 

        // BLOCK 8
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

    // ROW 3

        // BLOCK 9
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

        // BLOCK 10
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (4*8*8/2)]);
        } 

        // BLOCK 11
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (5*8*8/2)]);
        } 

        // BLOCK 12
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        }

    // ROW 4

        // BLOCK 13
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

        // BLOCK 14
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (6*8*8/2)]);
        } 

        // BLOCK 15
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(data[i + (7*8*8/2)]);
        } 

        // BLOCK 16
        for (var i = 0; i < 8*8/2; i++) {
            newSpriteData.push(0);
        } 

    return newSpriteData;
}

var exp = null;
var expfr = null;
async function patchExpansionData() {

    if (!IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {
        return;
    }


    var isPatchedFireRed = IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC];

    if (exp == null) {
        exp = new ExpansionPack();
        expfr = new ExpansionPack();

        /***********************/
        /** NEW DATA PATCHING **/
        /***********************/
        
        exp.addNewDataToExpansion("instantText", instantTextE);
        expfr.addNewDataToExpansion("instantText", instantTextFR);

        /*********************/
        /** SPRITE PATCHING **/
        /*********************/

        /* COPY DATA FROM FIRE RED */

        // WALKING

        Object.keys(FR_1_0_GIRL_WALK_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_girl_" + k, "FR", (versionOffset + FR_1_0_GIRL_WALK_SPRITE_DATA[k]) - 0x08000000, 256);
        });

        Object.keys(FR_1_0_BOY_WALK_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_boy_" + k, "FR", (versionOffset + FR_1_0_BOY_WALK_SPRITE_DATA[k]) - 0x08000000, 256);
        });

        // BIKING 
        Object.keys(FR_1_0_GIRL_BIKE_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_girl_bike_" + k, "FR", (versionOffset + FR_1_0_GIRL_BIKE_SPRITE_DATA[k]) - 0x08000000, 512);
        });

        Object.keys(FR_1_0_BOY_BIKE_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_boy_bike_" + k, "FR", (versionOffset + FR_1_0_BOY_BIKE_SPRITE_DATA[k]) - 0x08000000, 512);
        });

        // SURFING 
        Object.keys(FR_1_0_GIRL_SURF_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_girl_surf_" + k, "FR", (versionOffset + FR_1_0_GIRL_SURF_SPRITE_DATA[k]) - 0x08000000, 256, sprite16x32To32x32);
        });

        Object.keys(FR_1_0_BOY_SURF_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_boy_surf_" + k, "FR", (versionOffset + FR_1_0_BOY_SURF_SPRITE_DATA[k]) - 0x08000000, 256, sprite16x32To32x32);
        });

        // USE ITEM
        Object.keys(FR_1_0_GIRL_BAG_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_girl_bag_" + k, "FR", (versionOffset + FR_1_0_GIRL_BAG_SPRITE_DATA[k]) - 0x08000000, 256, sprite16x32To32x32);
        });

        Object.keys(FR_1_0_BOY_BAG_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_boy_bag_" + k, "FR", (versionOffset + FR_1_0_BOY_BAG_SPRITE_DATA[k]) - 0x08000000, 256, sprite16x32To32x32);
        });

        // FISHING
        Object.keys(FR_1_0_GIRL_FISHING_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_girl_fishing_" + k, "FR", (versionOffset + FR_1_0_GIRL_FISHING_SPRITE_DATA[k]) - 0x08000000, 512);
        });

        Object.keys(FR_1_0_BOY_FISHING_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_boy_fishing_" + k, "FR", (versionOffset + FR_1_0_BOY_FISHING_SPRITE_DATA[k]) - 0x08000000, 512);
        });

        // Backsprites
        Object.keys(FR_BACKSPRITE_DATA).forEach(k => {
            exp.addElementToExpansion("fr_backsprite" + k, "FR", (FR_BACKSPRITE_DATA[k]) - 0x08000000, FR_BACKSPRITE_DATA_LENGTH);
        });
    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {
    
        /* COPY DATA TO CRYSTAL */
        Object.keys(E_1_0_GIRL_WALK_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_GIRL_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_girl_" + k);
        });
        Object.keys(E_1_0_BOY_WALK_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_boy_" + k);
        });
        Object.keys(E_1_0_GIRL_BIKE_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_GIRL_BIKE_SPRITE_PTRS[k] - 0x08000000, "fr_girl_bike_" + k);
        });
        Object.keys(E_1_0_BOY_BIKE_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_BIKE_SPRITE_PTRS[k] - 0x08000000, "fr_boy_bike_" + k);
        });
        Object.keys(E_1_0_GIRL_SURF_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_GIRL_SURF_SPRITE_PTRS[k] - 0x08000000, "fr_girl_surf_" + k);
        });
        Object.keys(E_1_0_BOY_SURF_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_SURF_SPRITE_PTRS[k] - 0x08000000, "fr_boy_surf_" + k);
        });
        Object.keys(E_1_0_GIRL_BAG_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_GIRL_BAG_SPRITE_PTRS[k] - 0x08000000, "fr_girl_bag_" + k);
        });
        Object.keys(E_1_0_BOY_BAG_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_BAG_SPRITE_PTRS[k] - 0x08000000, "fr_boy_bag_" + k);
        });
        Object.keys(E_1_0_GIRL_FISHING_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_GIRL_FISHING_SPRITE_PTRS[k] - 0x08000000, "fr_girl_fishing_" + k);
        });
        Object.keys(E_1_0_BOY_FISHING_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_FISHING_SPRITE_PTRS[k] - 0x08000000, "fr_boy_fishing_" + k);
        });

        // Backsprites
        Object.keys(C_BACKSPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", C_BACKSPRITE_PTRS[k] - 0x08000000, "fr_backsprite" + k);
        });

    }


    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        /* COPY DATA TO EMERALD */
        Object.keys(E_1_0_GIRL_WALK_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_GIRL_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_girl_" + k);
        });
        Object.keys(E_1_0_BOY_WALK_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_WALK_SPRITE_PTRS[k] - 0x08000000, "fr_boy_" + k);
        });
        Object.keys(E_1_0_GIRL_BIKE_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_GIRL_BIKE_SPRITE_PTRS[k] - 0x08000000, "fr_girl_bike_" + k);
        });
        Object.keys(E_1_0_BOY_BIKE_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_BIKE_SPRITE_PTRS[k] - 0x08000000, "fr_boy_bike_" + k);
        });
        Object.keys(E_1_0_GIRL_SURF_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_GIRL_SURF_SPRITE_PTRS[k] - 0x08000000, "fr_girl_surf_" + k);
        });
        Object.keys(E_1_0_BOY_SURF_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_SURF_SPRITE_PTRS[k] - 0x08000000, "fr_boy_surf_" + k);
        });
        Object.keys(E_1_0_GIRL_BAG_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_GIRL_BAG_SPRITE_PTRS[k] - 0x08000000, "fr_girl_bag_" + k);
        });
        Object.keys(E_1_0_BOY_BAG_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_BAG_SPRITE_PTRS[k] - 0x08000000, "fr_boy_bag_" + k);
        });
        Object.keys(E_1_0_GIRL_FISHING_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_GIRL_FISHING_SPRITE_PTRS[k] - 0x08000000, "fr_girl_fishing_" + k);
        });
        Object.keys(E_1_0_BOY_FISHING_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_FISHING_SPRITE_PTRS[k] - 0x08000000, "fr_boy_fishing_" + k);
        });

        // Fix Emerald Trainer Sprites
        exp.patchRomPtr32("E", EMERALD_BRANDON_TRAINER_SPRITE_PTR, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(EMERALD_RED_TRAINER_SPRITE_PTR));
        exp.patchRomPtr32("E", EMERALD_MAY_TRAINER_SPRITE_PTR, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(EMERALD_LEAF_TRAINER_SPRITE_PTR));

        // Backsprites
        Object.keys(E_BACKSPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_BACKSPRITE_PTRS[k] - 0x08000000, "fr_backsprite" + k);
        });

    }


    /* COPY COLOUR PALLETS FROM FIRE RED */
    var fireRedPalletOffset = isPatchedFireRed ? FR_1_1_GIRL_PALLET_DATA_BASE_OFFSET : FR_1_0_GIRL_PALLET_DATA_BASE_OFFSET;

    let overworldPalletData = []; // In  FireRed boy and Girl use the same overworld pallet
    let girlBackspritePalletData = [];
    let boyBackspritePalletData = [];
    for (i = 0; i < FR_1_0_GIRL_PALLET_DATA_LENGTH; i++) {
        let index = fireRedPalletOffset + i - 0x08000000;
        overworldPalletData.push(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[index]);
    }

    for (i = 0; i < BACKSPRITES_PALLET_LENGTH; i++) {
        let girlBackspriteIndex = FR_GIRL_BACKSPRITE_PALLET_OFFSET + i - 0x08000000;
        girlBackspritePalletData.push(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[girlBackspriteIndex]);

        let boyBackspriteIndex = FR_BOY_BACKSPRITE_PALLET_OFFSET + i - 0x08000000;
        boyBackspritePalletData.push(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[boyBackspriteIndex]);
    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        /* COPY COLOUR PALLETS TO EMERALD */
        for (i = 0; i < overworldPalletData.length; i++) {
            let girlOverworldIndex = E_1_0_GIRL_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(girlOverworldIndex, overworldPalletData[i]);

            let boyOverworldIndex = E_1_0_BOY_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(boyOverworldIndex, overworldPalletData[i]);
        }
        for (i = 0; i < BACKSPRITES_PALLET_LENGTH; i++) {
            let girlBackspriteIndex = E_GIRL_BACKSPRITE_PALLET_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(girlBackspriteIndex, girlBackspritePalletData[i]);

            let boyBackspriteIndex = E_BOY_BACKSPRITE_PALLET_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(boyBackspriteIndex, boyBackspritePalletData[i]);
        }
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").ROM);

        // Partially fix reflection pallets
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2c, 0xfc);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2d, 0x45);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2e, 0xfc);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2, 0x45);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a42ac, 0x9b77);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a42ad, 0x9b77);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a42ae, 0x9b77);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a42af, 0x9b77);
    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        /* COPY COLOUR PALLETS TO CRYSTAL */
        for (i = 0; i < overworldPalletData.length; i++) {
            let girlOverworldIndex = C_1_0_GIRL_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(girlOverworldIndex, overworldPalletData[i]);

            let boyOverworldIndex = C_1_0_BOY_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(boyOverworldIndex, overworldPalletData[i]);
        }

        for (i = 0; i < BACKSPRITES_PALLET_LENGTH; i++) {
            let girlBackspriteIndex = C_GIRL_BACKSPRITE_PALLET_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(girlBackspriteIndex, girlBackspritePalletData[i]);

            let boyBackspriteIndex = C_BOY_BACKSPRITE_PALLET_OFFSET + i - 0x08000000;
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(boyBackspriteIndex, boyBackspritePalletData[i]);
        }
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);

    }


    /*************************************/
    /** Add the expansion into the roms **/
    /*************************************/

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {
        expfr.addToRom("FR");
    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {
        exp.addToRom("C");
    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {
        exp.addToRom("E");
    }
}

var instantTextE = [0xf0, 0xb5, 0x4f, 0x46, 0x46, 0x46, 0xc0, 0xb4, 0x0c, 0x48, 0x00, 0x78, 0x00, 0x28,  0x46, 0xd1,
                   0x0b, 0x4e, 0x00, 0x20, 0x81, 0x46, 0x80, 0x46, 0x34, 0x1d, 0x35, 0x1c, 0x00, 0x27,  0xe0, 0x7d,
                   0x00, 0x28, 0x2f, 0xd0, 0x28, 0x1c, 0x00, 0xf0, 0x4b, 0xf8, 0x00, 0x04, 0x00, 0x0c,  0x01, 0x28,
                   0x25, 0xd0, 0x01, 0x28, 0x06, 0xdc, 0x00, 0x28, 0x07, 0xd0, 0x25, 0xe0, 0x84, 0x2f,  0x00, 0x03,
                   0xb0, 0x01, 0x02, 0x02, 0x03, 0x28, 0x0f, 0xd0, 0x1e, 0xe0, 0x20, 0x78, 0x02, 0x21,  0x00, 0xf0,
                   0x3f, 0xf8, 0x30, 0x1c, 0x10, 0x30, 0x38, 0x18, 0x02, 0x68, 0x00, 0x2a, 0x14, 0xd0,  0x28, 0x1c,
                   0x00, 0x21, 0x00, 0xf0, 0x25, 0xf8, 0x0f, 0xe0, 0x30, 0x1c, 0x10, 0x30, 0x38, 0x18,  0x02, 0x68,
                   0x00, 0x2a, 0x14, 0xd0, 0x28, 0x1c, 0x03, 0x21, 0x00, 0xf0, 0x1a, 0xf8, 0x0f, 0xe0,  0x00, 0x20,
                   0xe0, 0x75, 0x0c, 0xe0, 0x01, 0x20, 0x81, 0x44, 0x24, 0x34, 0x24, 0x35, 0x24, 0x37,  0x01, 0x20,
                   0x80, 0x44, 0x40, 0x46, 0x1f, 0x28, 0xc2, 0xdd, 0x48, 0x46, 0x20, 0x28, 0xb9, 0xd1,  0x18, 0xbc,
                   0x98, 0x46, 0xa1, 0x46, 0xf0, 0xbc, 0x01, 0xbc, 0x00, 0x47, 0x00, 0x00, 0x00, 0x00,  0x00, 0x00,
                   0x78, 0x47, 0xc0, 0x46, 0x00, 0xc0, 0x9f, 0xe5, 0x1c, 0xff, 0x2f, 0xe1, 0xd9, 0x70,  0x2e, 0x08,
                   0x78, 0x47, 0xc0, 0x46, 0x00, 0xc0, 0x9f, 0xe5, 0x1c, 0xff, 0x2f, 0xe1, 0x19, 0x48,  0x00, 0x08,
                   0x78, 0x47, 0xc0, 0x46, 0x00, 0xc0, 0x9f, 0xe5, 0x1c, 0xff, 0x2f, 0xe1, 0x59, 0x36,  0x00, 0x08];

var instantTextFR = [0xf0, 0xb5, 0x4f, 0x46, 0x46, 0x46, 0xc0, 0xb4, 0x0a, 0x4e, 0x00, 0x20, 0x81, 0x46, 0x80, 0x46,        
                    0x34, 0x1d, 0x35, 0x1c, 0x00, 0x27, 0xe0, 0x7d, 0x00, 0x28, 0x2d, 0xd0, 0x28, 0x1c, 0x00, 0xf0,        
                    0x4f, 0xf8, 0x00, 0x04, 0x00, 0x0c, 0x01, 0x28, 0x23, 0xd0, 0x01, 0x28, 0x04, 0xdc, 0x00, 0x28,        
                    0x05, 0xd0, 0x23, 0xe0, 0x34, 0x00, 0x02, 0x02, 0x03, 0x28, 0x0f, 0xd0, 0x1e, 0xe0, 0x20, 0x78,        
                    0x02, 0x21, 0x00, 0xf0, 0x35, 0xf8, 0x30, 0x1c, 0x10, 0x30, 0x38, 0x18, 0x02, 0x68, 0x00, 0x2a,        
                    0x14, 0xd0, 0x28, 0x1c, 0x00, 0x21, 0x00, 0xf0, 0x23, 0xf8, 0x0f, 0xe0, 0x30, 0x1c, 0x10, 0x30,        
                    0x38, 0x18, 0x02, 0x68, 0x00, 0x2a, 0x14, 0xd0, 0x28, 0x1c, 0x03, 0x21, 0x00, 0xf0, 0x18, 0xf8,        
                    0x0f, 0xe0, 0x00, 0x20, 0xe0, 0x75, 0x0c, 0xe0, 0x01, 0x20, 0x81, 0x44, 0x24, 0x34, 0x24, 0x35,        
                    0x24, 0x37, 0x01, 0x20, 0x80, 0x44, 0x40, 0x46, 0x1f, 0x28, 0xc4, 0xdd, 0x48, 0x46, 0x20, 0x28,        
                    0xbb, 0xd1, 0x18, 0xbc, 0x98, 0x46, 0xa1, 0x46, 0xf0, 0xbc, 0x01, 0xbc, 0x00, 0x47, 0x00, 0x00,        
                    0x78, 0x47, 0xc0, 0x46, 0x00, 0xc0, 0x9f, 0xe5, 0x1c, 0xff, 0x2f, 0xe1, 0x20, 0x3c, 0x1e, 0x08,        
                    0x78, 0x47, 0xc0, 0x46, 0x00, 0xc0, 0x9f, 0xe5, 0x1c, 0xff, 0x2f, 0xe1, 0x35, 0x3f, 0x00, 0x08,        
                    0x78, 0x47, 0xc0, 0x46, 0x00, 0xc0, 0x9f, 0xe5, 0x1c, 0xff, 0x2f, 0xe1, 0x91, 0x2e, 0x00, 0x08]

function patchInInstantText() {

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            // dealing with 1.1
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x41f498, 0x01);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x41f499, 0x01);
    
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dfc  , 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dfd  , 0x4a);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dfe  , 0x10);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dff  , 0x47);
    
            let ptrAddress = expfr.getExpansionPtr("instantText", "FR").toString(16).padStart(8, 0).split("");
    
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e00  , parseInt(ptrAddress[6] + ptrAddress[7], 16) + 1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e01  , parseInt(ptrAddress[4] + ptrAddress[5], 16)    );
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e02  , parseInt(ptrAddress[2] + ptrAddress[3], 16)    );
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e03  , parseInt(ptrAddress[0] + ptrAddress[1], 16)    );

        } else {
            // TODO support instant text for Fire Red 1.0
        }

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x60f094, 0x01);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x60f095, 0x01);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4778  , 0x00);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4779  , 0x4a);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477A  , 0x10);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477B  , 0x47);

        let ptrAddress = exp.getExpansionPtr("instantText", "C").toString(16).padStart(8, 0).split("");

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477C  , parseInt(ptrAddress[6] + ptrAddress[7], 16) + 1);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477D  , parseInt(ptrAddress[4] + ptrAddress[5], 16)    );
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477E  , parseInt(ptrAddress[2] + ptrAddress[3], 16)    );
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477F  , parseInt(ptrAddress[0] + ptrAddress[1], 16)    );

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x60f094, 0x01);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x60f095, 0x01);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4778  , 0x00);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4779  , 0x4a);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477A  , 0x10);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477B  , 0x47);

        let ptrAddress = exp.getExpansionPtr("instantText", "E").toString(16).padStart(8, 0).split("");

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477C  , parseInt(ptrAddress[6] + ptrAddress[7], 16) + 1);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477D  , parseInt(ptrAddress[4] + ptrAddress[5], 16)    );
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477E  , parseInt(ptrAddress[2] + ptrAddress[3], 16)    );
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477F  , parseInt(ptrAddress[0] + ptrAddress[1], 16)    );
        
    }

}

function patchOutInstantText() {

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            // dealing with 1.1
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x41f498, 0x08);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x41f499, 0x04);
    
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dfc  , 0xf0);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dfd  , 0xb5);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dfe  , 0x47);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2dff  , 0x46);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e00  , 0x80);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e01  , 0xb4);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e02  , 0x0a);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2e03  , 0x48);

        } else {
            // TODO support instant text for Fire Red 1.0
        }

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x60f094, 0x08);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x60f095, 0x04);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4778  , 0xf0);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4779  , 0xb5);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477A  , 0x47);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477B  , 0x46);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477C  , 0x80);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477D  , 0xb4);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477E  , 0x0c);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x477F  , 0x48);

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x60f094, 0x08);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x60f095, 0x04);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4778  , 0xf0);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4779  , 0xb5);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477A  , 0x47);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477B  , 0x46);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477C  , 0x80);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477D  , 0xb4);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477E  , 0x0c);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x477F  , 0x48);

    }
}