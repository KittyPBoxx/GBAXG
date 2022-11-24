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

ExpansionPack.prototype.getPatchPointStart = function (romCode) {
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
async function patchSprites() {

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.size != 3) {
        return;
    }


    var isPatchedFireRed = IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC];

    if (exp == null) {
        exp = new ExpansionPack();
        
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
    }

    

    /* COPY DATA TO CRYSTAL */
    exp.addToRom("C");
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


    /* COPY DATA TO EMERALD */
    exp.addToRom("E");
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


    /* COPY COLOUR PALLETS FROM FIRE RED */
    var fireRedPalletOffset = isPatchedFireRed ? FR_1_1_GIRL_PALLET_DATA_BASE_OFFSET : FR_1_0_GIRL_PALLET_DATA_BASE_OFFSET;

    let palletData = [];
    for (i = 0; i < FR_1_0_GIRL_PALLET_DATA_LENGTH; i++) {
        let index = fireRedPalletOffset + i - 0x08000000;
        palletData.push(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[index]);
    }

    /* COPY COLOUR PALLETS TO EMERALD */
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

    /* COPY COLOUR PALLETS TO CRYSTAL */
    for (i = 0; i < palletData.length; i++) {
        let index = C_1_0_GIRL_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(index, palletData[i]);
    }
    for (i = 0; i < palletData.length; i++) {
        let index = E_1_0_BOY_PALLET_DATA_BASE_OFFSET + i - 0x08000000;
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(index, palletData[i]);
    }
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM16 = getUint16View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM32 = getInt32View(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);
}
