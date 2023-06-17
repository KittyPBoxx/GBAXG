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
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).ROM =  IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).getROMArray(mergedArray);
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
var usingInstantText = true;
var usingNoExp = false;
var useSpeedupCodes = false;
async function patchExpansionData() {


    if (!IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {
        return;
    }

    /* Currently we do patching of crystals statics based on the md5 / to detect if it's vanilla. So we need to do that first before any other patching */
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {
        let crystalMD5 = md5(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").ROM);

        if (crystalMD5 != "ef47f6528875dc3de037e75bba6a0ecb") {
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0xe7517F, (getHash(crystalMD5 + "SUDOWOODO") % 250) + 1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x9e2279, (getHash(crystalMD5 + "SUICUNE") % 250) + 1);
        }
    }


    var isPatchedFireRed = IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC];


        exp = new ExpansionPack();
        expfr = new ExpansionPack();

        /***********************/
        /** NEW DATA PATCHING **/
        /***********************/
        
        exp.addNewDataToExpansion("instantText", instantTextE);
        expfr.addNewDataToExpansion("instantText", instantTextFR);


        // Patch in the menu warping scrips
        let bedWarpMessage = convertMessageToHex("WARP");
        let confirmMessage = convertMessageToHex("Would you like to exit from this\\area right now?");
        let menuDescription = convertMessageToHex("Warp into your bedroom.");

        if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

            let menuExitFunctionPtrC = 0xF74E8C;
            let menuRetireFunctionPtrC = 0xF74E94;
    
            exp.patchRomPtr32("C", menuExitFunctionPtrC, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").readROM32(menuRetireFunctionPtrC));

            let confirmMessageStartOffsetC = 0x2A4BF4;
            let menuExitTextPtrC = 0xF74E88;

            patchSectionOfRom(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").readROM32(menuExitTextPtrC) - 0x08000000, bedWarpMessage, "C");
            patchSectionOfRom(confirmMessageStartOffsetC, confirmMessage, "C");
    
        }
    
        if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

            let menuExitFunctionPtrE = 0x51057C;
            let menuRetireFunctionPtrE = 0x510584;
    
            exp.patchRomPtr32("E", menuExitFunctionPtrE, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(menuRetireFunctionPtrE));

            let confirmMessageStartOffsetE = 0x2A4BF4;
            let menuExitTextPtrE = 0x510578;

            patchSectionOfRom(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(menuExitTextPtrE) - 0x08000000, bedWarpMessage, "E");
            patchSectionOfRom(confirmMessageStartOffsetE, confirmMessage, "E");
            
        }
    
        if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

            let isPatched = IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC];
            let menuExitFunctionPtrF   = isPatched ?  0x3A73E8 : 0x3A7378;
            let menuRetireFunctionPtrF = isPatched ?  0x3A73F0 : 0x3A7380;
    
            expfr.patchRomPtr32("FR", menuExitFunctionPtrF, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").readROM32(menuRetireFunctionPtrF));

            let menuExitTextPtrF            = isPatched ? 0x3A73E4 : 0x3A7374;
            let confirmMessageStartOffsetF  = isPatched ? 0x1BFC5C : 0x1BFBE9;
            let menuDescriptionStartOffsetF = isPatched ? 0x41A169 : 0x41A0F9;
    
            patchSectionOfRom(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").readROM32(menuExitTextPtrF) - 0x08000000, bedWarpMessage, "FR");
            patchSectionOfRom(confirmMessageStartOffsetF, confirmMessage, "FR");
            patchSectionOfRom(menuDescriptionStartOffsetF, menuDescription, "FR");
        }

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

        // ACRO
        Object.keys(FR_1_0_GIRL_ACRO_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_girl_acro_" + k, "FR", (versionOffset + FR_1_0_GIRL_BIKE_SPRITE_DATA[k]) - 0x08000000, 1024);
        });

        Object.keys(FR_1_0_BOY_ACRO_SPRITE_DATA).forEach(k => {
            let versionOffset = 0;
            if (isPatchedFireRed) {
                versionOffset = FR_1_1_SPRITE_OFFSET_SHIFT;
            }
            exp.addElementToExpansion("fr_boy_acro_" + k, "FR", (versionOffset + FR_1_0_BOY_BIKE_SPRITE_DATA[k]) - 0x08000000, 1024);
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
        Object.keys(E_1_0_GIRL_ACRO_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_GIRL_ACRO_SPRITE_PTRS[k] - 0x08000000, "fr_girl_acro_" + k);
        });
        Object.keys(E_1_0_BOY_BIKE_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_BIKE_SPRITE_PTRS[k] - 0x08000000, "fr_boy_bike_" + k);
        });
        Object.keys(E_1_0_BOY_ACRO_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("C", E_1_0_BOY_ACRO_SPRITE_PTRS[k] - 0x08000000, "fr_boy_acro_" + k);
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
        Object.keys(E_1_0_GIRL_ACRO_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_GIRL_ACRO_SPRITE_PTRS[k] - 0x08000000, "fr_girl_acro_" + k);
        });
        Object.keys(E_1_0_BOY_BIKE_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_BIKE_SPRITE_PTRS[k] - 0x08000000, "fr_boy_bike_" + k);
        });
        Object.keys(E_1_0_BOY_ACRO_SPRITE_PTRS).forEach(k => {
            exp.patchRomPtr32ByName("E", E_1_0_BOY_ACRO_SPRITE_PTRS[k] - 0x08000000, "fr_boy_acro_" + k);
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

        //Fix Emerald Trainer Sprites
        exp.patchRomPtr32("E", EMERALD_BRANDON_TRAINER_SPRITE_PTR, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(EMERALD_RED_TRAINER_SPRITE_PTR));
        exp.patchRomPtr32("E", EMERALD_MAY_TRAINER_SPRITE_PTR, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(EMERALD_LEAF_TRAINER_SPRITE_PTR));

        exp.patchRomPtr32("E", EMERALD_BRANDON_TRAINER_PALLET_PTR, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(EMERALD_RED_TRAINER_PALLET_PTR));
        exp.patchRomPtr32("E", EMERALD_MAY_TRAINER_PALLET_PTR, IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").readROM32(EMERALD_LEAF_TRAINER_PALLET_PTR));

        //Backsprites
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

        // Partially fix reflection pallets
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2c, 0xfc);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2d, 0x45);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2e, 0xfc);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x499c2f, 0x45);

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

    if (usingInstantText) {
        patchInInstantText();
    }

    if (usingNoExp) {
        patchInNoExp();
    }

    if (useSpeedupCodes) {
        patchInSpeedupCodes();
    } else {
        document.getElementById("speedCodes").setAttribute("disabled", true);
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

    if (IodineGUI.Iodine.IOCore == undefined || IodineGUI.Iodine.IOCore.cartridge.cartriges.size == 0) {
        return false;
    }

    usingInstantText = true;

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

    return true;

}

function patchOutInstantText() {

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.size == 0) {
        return;
    }

    usingInstantText = false;

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

function patchInNoExp() {

    if (IodineGUI.Iodine.IOCore == undefined || IodineGUI.Iodine.IOCore.cartridge.cartriges.size == 0) {
        return false;
    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            // dealing with 1.1
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x21bf4, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x21bf5, 0x7e);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x21bfc, 0xff);

    
        } else {
            // TODO support instant text for Fire Red 1.0
        }

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4a4a4, 0xc2);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4a4a5, 0x7e);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4a4ac, 0xff);

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a4a4, 0x02);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a4a5, 0x7e);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a4ac, 0xff);

    }

    return true;
}

function patchOutNoExp() {

    if (IodineGUI.Iodine.IOCore == undefined || IodineGUI.Iodine.IOCore.cartridge.cartriges.size == 0) {
        return false;
    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            // dealing with 1.1
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x21bf4, 0x42);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x21bf5, 0x7a);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x21bfc, 0xff);

    
        } else {
            // TODO support instant text for Fire Red 1.0
        }

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4a4a4, 0x42);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4a4a5, 0x7a);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x4a4ac, 0x07);

    }
    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a4a4, 0x42);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a4a5, 0x7a);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x4a4ac, 0x07);

    }

    return true;

}

function patchInSpeedupCodes() {

    IodineGUI.Iodine.forceBiosFile = true;

    if (!IodineGUI.Iodine.IOCore) {
        return;
    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        patchSectionOfRom(0x8ae, [0x08,0x49] , "E");
        patchSectionOfRom(0x8b0, [0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b,0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20] , "E");
        patchSectionOfRom(0x8c0, [0x08,0x40,0x00,0x28,0x01,0xd0,0xe6,0xf2,0xff,0xfb,0x01,0xbc,0x00,0x47,0x00,0x00] , "E");
        patchSectionOfRom(0x8d0, [0xc0,0x22,0x00,0x03,0xfe,0xff,0x00,0x00,0xd4,0x7f,0x03,0x02,0x01,0x49,0x08,0x60] , "E");

    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        patchSectionOfRom(0x8ae, [0x08,0x49] , "C");
        patchSectionOfRom(0x8b0, [0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b,0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20] , "C");
        patchSectionOfRom(0x8c0, [0x08,0x40,0x00,0x28,0x01,0xd0,0xe6,0xf2,0xff,0xfb,0x01,0xbc,0x00,0x47,0x00,0x00] , "C");
        patchSectionOfRom(0x8d0, [0xc0,0x22,0x00,0x03,0xfe,0xff,0x00,0x00,0xd4,0x7f,0x03,0x02,0x01,0x49,0x08,0x60] , "C");

    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        patchSectionOfRom(0x8ae, [0x08,0x49,0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b] , "FR");
        patchSectionOfRom(0x8b0, [0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20,0x08,0x40,0x00,0x28,0x01,0xd0,0xe3,0xf1] , "FR");
        patchSectionOfRom(0x8c0, [0xa7,0xf9,0x01,0xbc,0x00,0x47,0x00,0x00,0xf0,0x30,0x00,0x03,0xfe,0xff,0x00,0x00] , "FR");
        patchSectionOfRom(0x8d0, [0xb8,0x7a,0x03,0x02,0x01,0x49,0x08,0x62,0x70,0x47,0x00,0x00,0xf0,0x30,0x00,0x03] , "FR");

    }

}

function patchOutSpeedupCodes() {

    if (!IodineGUI.Iodine.IOCore) {
        return;
    }

    IodineGUI.Iodine.forceBiosFile = true;

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        patchSectionOfRom(0x8ae, [0x08,0x49] , "E");
        patchSectionOfRom(0x8b0, [0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b,0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20] , "E");
        patchSectionOfRom(0x8c0, [0x08,0x40,0x00,0x28,0x01,0xd1,0xe6,0xf2,0xff,0xfb,0x01,0xbc,0x00,0x47,0x00,0x00] , "E");
        patchSectionOfRom(0x8d0, [0xc0,0x22,0x00,0x03,0xfe,0xff,0x00,0x00,0xf4,0x2f,0x02,0x02,0x01,0x49,0x08,0x60] , "E");

    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        patchSectionOfRom(0x8ae, [0x08,0x49] , "C");
        patchSectionOfRom(0x8b0, [0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b,0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20] , "C");
        patchSectionOfRom(0x8c0, [0x08,0x40,0x00,0x28,0x01,0xd1,0xe6,0xf2,0xff,0xfb,0x01,0xbc,0x00,0x47,0x00,0x00] , "C");
        patchSectionOfRom(0x8d0, [0xc0,0x22,0x00,0x03,0xfe,0xff,0x00,0x00,0xf4,0x2f,0x02,0x02,0x01,0x49,0x08,0x60] , "C");

    }

    if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        patchSectionOfRom(0x8ae, [0x08,0x49,0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b] , "FR");
        patchSectionOfRom(0x8b0, [0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20,0x08,0x40,0x00,0x28,0x01,0xd1,0xe3,0xf1] , "FR");
        patchSectionOfRom(0x8c0, [0xa7,0xf9,0x01,0xbc,0x00,0x47,0x00,0x00,0xf0,0x30,0x00,0x03,0xfe,0xff,0x00,0x00] , "FR");
        patchSectionOfRom(0x8d0, [0x78,0x3d,0x02,0x02,0x01,0x49,0x08,0x62,0x70,0x47,0x00,0x00,0xf0,0x30,0x00,0x03] , "FR");

    }
}

function patchSectionOfRom(startOffset, data, romCode) {

    for (var i = 0; i < data.length; i++) {
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get(romCode).patchROM8(startOffset + i, data[i]);
    }

}


var charHex = new Map();
charHex.set(" "    , 0x00);
// charHex.set("À"    , 0x01);
// charHex.set("Á"    , 0x02);
// charHex.set("Â"    , 0x03);
// charHex.set("Ç"    , 0x04);
// charHex.set("È"    , 0x05);
// charHex.set("É"    , 0x06);
// charHex.set("Ê"    , 0x07);
// charHex.set("Ë"    , 0x08);
// charHex.set("Ì"    , 0x09);
// charHex.set("Î"    , 0x0B);
// charHex.set("Ï"    , 0x0C);
// charHex.set("Ò"    , 0x0D);
// charHex.set("Ó"    , 0x0E);
// charHex.set("Ô"    , 0x0F);
// charHex.set("Œ"    , 0x10);
// charHex.set("Ù"    , 0x11);
// charHex.set("Ú"    , 0x12);
// charHex.set("Û"    , 0x13);
// charHex.set("Ñ"    , 0x14);
// charHex.set("ß"    , 0x15);
// charHex.set("à"    , 0x16);
// charHex.set("á"    , 0x17);
// charHex.set("ç"    , 0x19);
// charHex.set("è"    , 0x1A);
// charHex.set("é"    , 0x1B);
// charHex.set("ê"    , 0x1C);
// charHex.set("ë"    , 0x1D);
// charHex.set("ì"    , 0x1E);
// charHex.set("î"    , 0x20);
// charHex.set("ï"    , 0x21);
// charHex.set("ò"    , 0x22);
// charHex.set("ó"    , 0x23);
// charHex.set("ô"    , 0x24);
// charHex.set("œ"    , 0x25);
// charHex.set("ù"    , 0x26);
// charHex.set("ú"    , 0x27);
// charHex.set("û"    , 0x28);
// charHex.set("ñ"    , 0x29);
// charHex.set("º"    , 0x2A);
// charHex.set("ª"    , 0x2B);
// charHex.set("&"    , 0x2D);
// charHex.set("+"    , 0x2E);
// charHex.set("Lv"   , 0x34);
charHex.set("="    , 0x35);
// charHex.set(";"    , 0x36);
// charHex.set("¿"    , 0x51);
// charHex.set("¡"    , 0x52);
// charHex.set("pk"   , 0x53);
// charHex.set("mn"   , 0x54);
// charHex.set("po"   , 0x55);
// charHex.set("ké"   , 0x56);
// charHex.set("bl"   , 0x57);
// charHex.set("oc"   , 0x58);
// charHex.set("k"    , 0x59);
// charHex.set("Í"    , 0x5A);
charHex.set("%"    , 0x5B);
charHex.set("("    , 0x5C);
charHex.set(")"    , 0x5D);
// charHex.set("â"    , 0x68);
// charHex.set("í"    , 0x6F);
// charHex.set("U"    , 0x79);
// charHex.set("D"    , 0x7A);
// charHex.set("L"    , 0x7B);
// charHex.set("R"    , 0x7C);
charHex.set("<"    , 0x85);
charHex.set(">"    , 0x86);
charHex.set("0"    , 0xA1);
charHex.set("1"    , 0xA2);
charHex.set("2"    , 0xA3);
charHex.set("3"    , 0xA4);
charHex.set("4"    , 0xA5);
charHex.set("5"    , 0xA6);
charHex.set("6"    , 0xA7);
charHex.set("7"    , 0xA8);
charHex.set("8"    , 0xA9);
charHex.set("9"    , 0xAA);
charHex.set("!"    , 0xAB);
charHex.set("?"    , 0xAC);
charHex.set("."    , 0xAD);
charHex.set("-"    , 0xAE);
charHex.set("·"    , 0xAF);
charHex.set("."    , 0xB0);
// charHex.set("''"   , 0xB1);
// charHex.set("'"    , 0xB2);
// charHex.set("'"    , 0xB3);
// charHex.set("'"    , 0xB4);
charHex.set("m"    , 0xB5);
charHex.set("f"    , 0xB6);
charHex.set("$"    , 0xB7);
charHex.set(","    , 0xB8);
charHex.set("x"    , 0xB9);   
charHex.set("/"    , 0xBA);
charHex.set("A"    , 0xBB);
charHex.set("B"    , 0xBC);
charHex.set("C"    , 0xBD);
charHex.set("D"    , 0xBE);
charHex.set("E"    , 0xBF);
charHex.set("F"    , 0xC0);
charHex.set("G"    , 0xC1);
charHex.set("H"    , 0xC2);
charHex.set("I"    , 0xC3);
charHex.set("J"    , 0xC4);
charHex.set("K"    , 0xC5);
charHex.set("L"    , 0xC6);
charHex.set("M"    , 0xC7);
charHex.set("N"    , 0xC8);
charHex.set("O"    , 0xC9);
charHex.set("P"    , 0xCA);
charHex.set("Q"    , 0xCB);
charHex.set("R"    , 0xCC);
charHex.set("S"    , 0xCD);
charHex.set("T"    , 0xCE);
charHex.set("U"    , 0xCF);
charHex.set("V"    , 0xD0);
charHex.set("W"    , 0xD1);
charHex.set("X"    , 0xD2);
charHex.set("Y"    , 0xD3);
charHex.set("Z"    , 0xD4);
charHex.set("a"    , 0xD5);
charHex.set("b"    , 0xD6);
charHex.set("c"    , 0xD7);
charHex.set("d"    , 0xD8);
charHex.set("e"    , 0xD9);
charHex.set("f"    , 0xDA);
charHex.set("g"    , 0xDB);
charHex.set("h"    , 0xDC);
charHex.set("i"    , 0xDD);
charHex.set("j"    , 0xDE);
charHex.set("k"    , 0xDF);
charHex.set("l"    , 0xE0);
charHex.set("m"    , 0xE1);
charHex.set("n"    , 0xE2);
charHex.set("o"    , 0xE3);
charHex.set("p"    , 0xE4);
charHex.set("q"    , 0xE5);
charHex.set("r"    , 0xE6);
charHex.set("s"    , 0xE7);
charHex.set("t"    , 0xE8);
charHex.set("u"    , 0xE9);
charHex.set("v"    , 0xEA);
charHex.set("w"    , 0xEB);
charHex.set("x"    , 0xEC);
charHex.set("y"    , 0xED);
charHex.set("z"    , 0xEE);
// charHex.set(">"    , 0xEF);
// charHex.set(":"    , 0xF0);
// charHex.set("Ä"    , 0xF1);
// charHex.set("Ö"    , 0xF2);
// charHex.set("Ü"    , 0xF3);
// charHex.set("ä"    , 0xF4);
// charHex.set("ö"    , 0xF5);
// charHex.set("ü"    , 0xF6);
// charHex.set("u"    , 0xF7);
// charHex.set("d"    , 0xF8);
// charHex.set("l"    , 0xF9); 
charHex.set("\\"  , 0xFE); // New Line
charHex.set("END"  , 0xFF); // End of String

function convertMessageToHex(message) {

    let hex = []
    message.split("").forEach(char => (charHex.get(char) != undefined) && hex.push(charHex.get(char)))
    hex.push(charHex.get("END"));
    return hex;

}