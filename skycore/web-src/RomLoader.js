class RomLoader {

    constructor(exposedEmulationCore, commandExecutor, ramHook) {
        
        this.exposedEmulationCore = exposedEmulationCore;
        this.commandExecutor = commandExecutor;
        this.ramHook = ramHook;
        this.romPatcher = new RomPatcher(this);
        this.romsNeedingAutoInit = ["E", "C"];
        this.loadingInProgress = false;
    }

    isLoaded(code, extension) {

        try {
            return !!FS.stat('/offline/' + code + extension);
        } catch (e) {
            // Do nothing. File Exists returns false. So exception flow control... or I'd have to query the indexdb
        };

        return false;
    }

    loadRom(data, code, extension, textUpdateFunction) {
        this.loadingInProgress = true;
        const uint8_view = new Uint8Array(data);
        this.romPatcher.setRom(uint8_view, code, extension, textUpdateFunction);
    }

    persistRom(data, code, extension, textUpdateFunction) {
        let out_file = '/offline/' + code + extension;
        FS.writeFile(out_file, data);
        FS.syncfs(function (err) {});

        if (this.romsNeedingAutoInit.includes(code)) {
            textUpdateFunction("Loading...");
            this.autoInitRom(code, textUpdateFunction);
        } else {
            textUpdateFunction("Loaded");
            this.loadingInProgress = false;
        }
    }

    deleteAllRoms() {
        FS.readdir('/offline/').forEach(file => {
            if (file.endsWith(".gba") || file.endsWith("bios.bin")) {
                console.log("Deleting " + file);
                FS.unlink('/offline/' + file);
            }
        });
        try {
            FS.unlink('/offline/recent_games.txt');
        } catch(e) {
            // it might not exist
        }
        
        FS.syncfs(function (err) {});
    }

    autoInitRom(code, textUpdateFunction) {
        try {
            FS.stat("/offline/" + code + ".slot0.state.png");
            textUpdateFunction("Loaded");
            this.loadingInProgress = false;
        } catch (e) {
            this.getDefaultSaveFileThen(this, code, textUpdateFunction);
        }
    }

    getDefaultSaveFileThen(romLoader, code, textUpdateFunction) {
        let defaultSavePath = this.getDefaultSavePathForCode(code);
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", defaultSavePath, true);
        xmlhttp.responseType = "arraybuffer";

        xmlhttp.onload = (event) => {
            const file = xmlhttp.response; // Note: not req.responseText
            if (file) {
                var zip = new JSZip();
                zip.loadAsync(file).then(function(zip) {
                    // There should only be 1 save file in the zip folder
                    Object.keys(zip.files).forEach(function (filename) {
                        zip.files[filename].async('arraybuffer').then(function (fileDataBuffer) {
                            romLoader.createFirstSaveAndStateForRom(romLoader, code, filename, new Uint8Array(fileDataBuffer), textUpdateFunction);
                        })
                    });
                })
            }
        };
    
        xmlhttp.send(null);
    }

    createFirstSaveAndStateForRom(romLoader, code, fileName, fileData, textUpdateFunction) {
        FS.writeFile('/offline/' + fileName, fileData);
        FS.syncfs(function (err) {});
        romLoader.exposedEmulationCore.hideGame_EmulationCore();
        romLoader.exposedEmulationCore.setGame_EmulationCore(code, -1);
        romLoader.autoInitFinished = false;
        romLoader.ramHook.warpHandler.runAutoInit(romLoader.ramHook.warpHandler, () => romLoader.autoInitFinished = true);
        romLoader.loopGameInput(romLoader, 0, textUpdateFunction)
        romLoader.exposedEmulationCore.setSpeed_EmulationCore(4);
    }

    loopGameInput(romLoader, counter, textUpdateFunction){
        if(counter < 6000 && !romLoader.autoInitFinished){
          setTimeout(function(){
            counter++;
            romLoader.commandExecutor.execute("A");
            romLoader.commandExecutor.execute("Up");
            romLoader.loopGameInput(romLoader, counter, textUpdateFunction);
          }, 100);
        } else if (counter > 6000) {
            textUpdateFunction("Failed");
        } else {
            romLoader.exposedEmulationCore.setSpeed_EmulationCore(1);
            romLoader.loadingInProgress = false;
            textUpdateFunction("Loaded");
        }
    }

    getDefaultSavePathForCode(code) {
        return "../../web-src/default_saves/" + code + ".sav.zip";
    }
}

class RomPatcher {

    constructor(loader) {

        this.loader = loader;

        this.ROM = null;
        this.md5 = null;

        // Inline Patches
        this.earlyBalls = true;
        this.perfectCatchRate = true;
        this.runIndoors = true;
        this.noExp = false;
        this.neverDarkInCaves = true;
        this.ultrSpeedCodes = false;
        this.noFRFlashbacks = true;
       
        // File Patches
        this.instantText = true;
        this.hqMixer = true;
        this.playerSprite = "C";

        this.VANILLA_CRYSTAL_MD5 = "ef47f6528875dc3de037e75bba6a0ecb";
        this.VANILLA_EMERALD_MD5 = "605b89b67018abcea91e693a4dd25be3";

        this.bossText = "LIKE AND SUBSCRIBE";
    }


    /*
    *   @param - Uint8Array rom
    */
    setRom(rom, code, extension, textUpdateFunction) {
        this.ROM = this.getROMArray(rom);
        this.md5 = md5(this.ROM);
        this.patchAndPersistGame(code, extension, textUpdateFunction);
    }

    applyPatchFile(condition, path, callback) {

        if (!condition) {
            callback();
            return;
        }
    
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", path, true);
        xmlhttp.responseType = "arraybuffer";
    
        xmlhttp.onload = (event) => {
            const arrayBuffer = xmlhttp.response; // Note: not req.responseText
            if (arrayBuffer) {
                this.ROM = new Uint8Array(new LibPatcher().applyPatch(this.ROM, arrayBuffer, true));
            }
            callback();
          };
    
        xmlhttp.send(null);
    
    }
    

    getROMArray(old_array) {
        this.ROMLength = Math.min((old_array.length >> 2) << 2, 0x2000000);
        this.EEPROMStart = ((this.ROMLength | 0) > 0x1000000) ? Math.max(this.ROMLength | 0, 0x1FFFF00) : 0x1000000;
        var newArray = new Uint8Array(this.ROMLength | 0);
        for (var index = 0; (index | 0) < (this.ROMLength | 0); index = ((index | 0) + 1) | 0) {
            newArray[index | 0] = old_array[index | 0] | 0;
        }
        return newArray;
    }

    decodeName() {
        this.name = "GUID_";
        if ((this.ROMLength | 0) >= 0xC0) {
            for (var address = 0xAC; (address | 0) < 0xB3; address = ((address | 0) + 1) | 0) {
                if ((this.ROM[address | 0] | 0) > 0) {
                    this.name += String.fromCharCode(this.ROM[address | 0] | 0);
                }
                else {
                    this.name += "_";
                }
            }
        }
    }

    patchSectionOfRom(startOffset, data, romCode) {
        for (var i = 0; i < data.length; i++) {
            this.patchROM8(startOffset + i, data[i]);
        }
    }

    patchROM8(address, data) {
        address = address | 0;
        if ((address | 0) < (this.ROMLength | 0)) {
            this.ROM[address & 0x1FFFFFF] = data;
        }
    } 

    patchAndPersistGame(code, extension, textUpdateFunction) {
        if (code == "E") {
            textUpdateFunction("Patching");
            this.patchEmerald(textUpdateFunction);
        } else if (code == "C") {
            textUpdateFunction("Patching");
            this.patchCrystal(textUpdateFunction);
        } else if (code == "FR") {
            textUpdateFunction("Patching");
            this.patchFireRed(textUpdateFunction);
        } else {
            this.loader.persistRom(this.ROM, code, extension, textUpdateFunction);
        }
    }

    patchEmerald(textUpdateFunction) {

        /* FIX NON UNIQUE WARPS */

        // (24,24,20, 24,24,23) -> 24,24,17
        // First Duplicate Warp in aquas hideout
        this.patchROM8(0x0853550D - 0x08000000, 0x32);

        // (24,24,9, 24,24,14, 24,24,21) -> 24,24,12
        // Second duplicate Warp in aquas hideout
        this.patchROM8(0x085354FD - 0x08000000, 0x33);
        // Thrid duplicate warp in team aquas hideout
        this.patchROM8(0x085354C5 - 0x08000000, 0x34);
        
        // (24,24,7, 24,25,9) -> 24,24,4
        // Fourth duplicate warp in team aquas hideout
        this.patchROM8(0x08535609 - 0x08000000, 0x35);
        
        // (24,31,3, 24,28,0, 24,33,2) -> 24,27,1
        // Duplicate Warp in seafloor cavern
        this.patchROM8(0x085359E1 - 0x08000000, 0x32);
        // Second Duplicate seafloor cavern warp
        this.patchROM8(0x08535AC9 - 0x08000000, 0x46);

        // Patch in cave of origin caves (from ruby/saphire) not present in emerald
        this.patchROM8(0x08535d4E - 0x08000000, 0x27);
        this.patchROM8(0x08535dEE - 0x08000000, 0x29);  

        /* GAME FIXES */

        // Move route 116 tunnler from in front of house to help avoid progression locks
        this.patchROM8(0x0852a69c - 0x08000000, 0x25);

        // Patch Sidney Room to avoid softlock by auto walk  
        this.patchROM8(0x0842d53D - 0x08000000, 0x32);
        
        // Seafloor Cavern tide room prevent getting automatically pushed through the door
        this.patchROM8(0x084378A4 - 0x08000000, 0x70);
        this.patchROM8(0x084378A5 - 0x08000000, 0x11);
        
        // Make Sure You can always obtain waterfall
        this.patchROM8(0x08527315 - 0x08000000, 0x85);
        this.patchROM8(0x08527318 - 0x08000000, 0x20);
        this.patchROM8(0x0852731A - 0x08000000, 0x21);
        
        this.patchROM8(0x08527324 - 0x08000000, 0x6f);
        this.patchROM8(0x08527325 - 0x08000000, 0x64);
        
        // Make sure archie will never block off the gym
        this.patchROM8(0x527498, 0x20);
        
        // Make sure wallace won't stand in front of the cave
        this.patchROM8(0x5274b0, 0x1d);
        this.patchROM8(0x5274b2, 0x14);
        
        // Make sure we can go backwards through the trick master house
        this.patchROM8(0x26ad12, 0x0B);
        this.patchROM8(0x26ad14, 0x00);
        
        // Patch magma grunts so they don't block the cable car
        this.patchROM8(0x529978, 0x1B);
        this.patchROM8(0x52997A, 0x1C);
        this.patchROM8(0x52997D, 0x08);
        
        this.patchROM8(0x5299f0, 0x1E);
        this.patchROM8(0x5299f2, 0x1C);
        this.patchROM8(0x5299f5, 0x08);
        
        // Mossdeep Magma dissapear from both sides 
        this.patchROM8(0x527240, 0x29);
        
        this.patchROM8(0x527250, 0x28);
        
        this.patchROM8(0x527260, 0x3a);
        this.patchROM8(0x527262, 0x1d);
        
        this.patchROM8(0x527270, 0x39);
        this.patchROM8(0x527272, 0x1d);
        
        // Stop aqua guard blocking base
        this.patchROM8(0x535308, 0x14);
        this.patchROM8(0x53530a, 0x02);
        this.patchROM8(0x535320, 0x18);
        this.patchROM8(0x535322, 0x02);
        
        // Talk to aqua outside safari makes them leave
        this.patchSectionOfRom(0x52bb2c, [0x18, 0x5e, 0x1f, 0x08] , "E");
        this.patchSectionOfRom(0x52bb5c, [0x18, 0x5e, 0x1f, 0x08] , "E");
     
        // Make Mirage Tower always present
        this.patchROM8(0x1be7eC, 0xa9);
        
        // Open the meteor falls door
        this.patchROM8(0x42e8e4, 0x46);
        this.patchROM8(0x42e920, 0x4e);
        this.patchROM8(0x42e921, 0x32);
        
        // Open All E4 Back Doors
        this.patchROM8(0x42d522, 0x44);
        this.patchROM8(0x42d523, 0x07);
        this.patchROM8(0x42d53C, 0x45);
        this.patchROM8(0x42d53D, 0x33);
        
        this.patchROM8(0x42d6ae, 0x44);
        this.patchROM8(0x42d6af, 0x07);
        this.patchROM8(0x42d6c8, 0x45);
        this.patchROM8(0x42d6c9, 0x33); 
        
        this.patchROM8(0x42d83a, 0x44);
        this.patchROM8(0x42d83b, 0x07);
        this.patchROM8(0x42d854, 0x45);
        this.patchROM8(0x42d855, 0x33); 
        
        this.patchROM8(0x42d83a, 0x44);
        this.patchROM8(0x42d83b, 0x07);
        this.patchROM8(0x42d854, 0x45);
        this.patchROM8(0x42d855, 0x33); 
        
        this.patchROM8(0x42d9c6, 0x44);
        this.patchROM8(0x42d9c7, 0x07);
        this.patchROM8(0x42d9e0, 0x45);
        this.patchROM8(0x42d9e1, 0x33); 
        
        this.patchROM8(0x42d9c6, 0x44);
        this.patchROM8(0x42d9c7, 0x07);
        this.patchROM8(0x42d9e0, 0x45);
        this.patchROM8(0x42d9e1, 0x33); 
        
        this.patchROM8(0x42dc6e, 0x22);
        this.patchROM8(0x42dc70, 0x47);
        this.patchROM8(0x42dc72, 0x22);
        
        // Open All Front Doors
        this.patchSectionOfRom(0x42d63E, [0x1,0x32,0x44,0x33,0x03,0x32,0xd7,0x06,0xd5,0x06,0xd6,0x06,0xd5,0x06,0xd6,0x06,0x48,0x07,0x49,0x07,0x48,0x07,0x49,0x07,0xe6,0x06,0x09,0x32,0x45,0x33,0x0b,0x32,0xdf,0x06] , "E");
        
        this.patchSectionOfRom(0x42d7ca, [0x01, 0x32, 0x44, 0x33, 0x03, 0x32] , "E");
        this.patchSectionOfRom(0x42d7e4, [0x09, 0x32, 0x45, 0x33, 0x0b, 0x32, 0xdf, 0x06, 0x48, 0x07, 0x49, 0x07] , "E");
        
        this.patchSectionOfRom(0x42d956, [0x01, 0x32, 0x44, 0x33, 0x03, 0x32, 0xd7, 0x06, 0xd5, 0x06] , "E");
        this.patchSectionOfRom(0x42d970, [0x09, 0x32, 0x45, 0x33, 0x0b, 0x32, 0xdf, 0x06, 0x48, 0x07, 0x49, 0x07, 0x48, 0x07, 0x49, 0x07] , "E");
        
        this.patchSectionOfRom(0x42dae2, [0x01, 0x32, 0x44, 0x33, 0x03, 0x32, 0xd7, 0x06, 0xd5, 0x06, 0xd6, 0x06, 0xd5, 0x06] , "E");
        this.patchSectionOfRom(0x42dafc, [0x09, 0x32, 0x45, 0x33, 0x0b] , "E");
        
        // Make sure walking into room works correctly
        this.patchROM8(0x227f27, 0x00);
        this.patchROM8(0x227f28, 0x00); 
        this.patchROM8(0x227f29, 0x00); 
        this.patchROM8(0x227f3E, 0x9c); 
        
        this.patchROM8(0x228184, 0x9c);
        this.patchROM8(0x228186, 0x01); 
        this.patchROM8(0x2281b4, 0x00); 
        this.patchROM8(0x2281b5, 0x00);
        this.patchROM8(0x2281b6, 0x00);  
        
        this.patchROM8(0x228422, 0x9c);
        this.patchROM8(0x228424, 0x02); 
        this.patchROM8(0x228452, 0x00);
        this.patchROM8(0x228453, 0x00);
        this.patchROM8(0x228454, 0x00);  
     
        this.patchROM8(0x2286ac, 0x9c);
        this.patchROM8(0x2286ae, 0x03); 
        this.patchROM8(0x2286dc, 0x00);
        this.patchROM8(0x2286dd, 0x00);
        this.patchROM8(0x2286de, 0x00); 
        
        // Patch so front doors don't lock beind you
        this.patchROM8(0x272487, 0x01);
        this.patchROM8(0x272490, 0x44);
        this.patchROM8(0x272491, 0x03);
        this.patchROM8(0x272492, 0x00);
        this.patchROM8(0x272499, 0x03);
        this.patchROM8(0x2724a2, 0x09);
        this.patchROM8(0x2724a9, 0x0d);
        this.patchROM8(0x2724ab, 0x45);
        this.patchROM8(0x2724ac, 0x03);
        this.patchROM8(0x2724ad, 0x00);
        this.patchROM8(0x2724b4, 0x0b);
        
        // Don't start champion fight right away but on talk
        this.patchROM8(0x228a3c, 0x0f);
        this.patchROM8(0x228a42, 0x27);
        
        this.patchROM8(0x533710, 0x45);
        this.patchROM8(0x533711, 0x8a);
        this.patchROM8(0x533712, 0x22);
        this.patchROM8(0x533713, 0x08);
        
        // Make sure slateport dock is alway available
        this.patchROM8(0x526290, 0x1e);
        this.patchROM8(0x526295, 0x0b);
        
        this.patchROM8(0x5262a8, 0x1d);
        this.patchROM8(0x5262aa, 0x0d);
        this.patchROM8(0x5262ad, 0x08);
        
        this.patchROM8(0x5262c0, 0x1d);
        this.patchROM8(0x5262c2, 0x0e);
        this.patchROM8(0x5262c5, 0x07);
        
        // Remove Darkness from Caves
        if (this.neverDarkInCaves) {
            this.patchROM8(0x0854d8, 0x08);
        }
        
        // Instant Catch
        if (this.perfectCatchRate) {
            this.patchROM8(0x5652a, 0x00);
            this.patchROM8(0x5652d, 0xd0);
            this.patchROM8(0x5660e, 0x00);
            this.patchROM8(0x56611, 0xd0);
        }

        // Run Indoors
        if (this.runIndoors) {
            this.patchROM8(0x11A1E8, 0x00); 
        }

        // No EXP
        if (this.noExp) {
            this.patchROM8(0x4a4a4, 0xc2);
            this.patchROM8(0x4a4a5, 0x7e);
            this.patchROM8(0x4a4ac, 0xff);
        }

        // Speedup Codes 
        if (this.ultrSpeedCodes) {
            this.patchSectionOfRom(0x8ae, [0x08,0x49] , "E");
            this.patchSectionOfRom(0x8b0, [0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b,0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20] , "E");
            this.patchSectionOfRom(0x8c0, [0x08,0x40,0x00,0x28,0x01,0xd0,0xe6,0xf2,0xff,0xfb,0x01,0xbc,0x00,0x47,0x00,0x00] , "E");
            this.patchSectionOfRom(0x8d0, [0xc0,0x22,0x00,0x03,0xfe,0xff,0x00,0x00,0xd4,0x7f,0x03,0x02,0x01,0x49,0x08,0x60] , "E"); 
        }

        // Patch Escape Option in menu
        let bedWarpMessage = RomPatcher.convertMessageToHex("WARP");
        let confirmMessage = RomPatcher.convertMessageToHex("Would you like to exit from this\\area right now?");

        let menuExitFunctionPtrE = 0x51057C;
        let menuRetireFunctionPtrE = [0x75,0xFD,0x09,0x08];
        this.patchSectionOfRom(menuExitFunctionPtrE, menuRetireFunctionPtrE, "E");

        let confirmMessageStartOffsetE = 0x2A4BF4;
        let menuExitTextPtrAddressE = 0x5EE6EE;

        this.patchSectionOfRom(menuExitTextPtrAddressE, bedWarpMessage, "E");
        this.patchSectionOfRom(confirmMessageStartOffsetE, confirmMessage, "E");


        // Patch Red Sad Text
        this.patchSectionOfRom(0x23B358, RomPatcher.convertMessageToHex("RED: " + this.bossText), "E");

        
        // File Patches
        let isInstantText = this.instantText;
        let hqAudio = this.hqMixer;
        let patcher = this;


        patcher.applyPatchFile(true, "../../web-src/patches/e_c_sprites.xdelta", () => {
            patcher.applyPatchFile(hqAudio, "../../web-src/patches/e_hq_audio.xdelta", () => {
                patcher.applyPatchFile(isInstantText, "../../web-src/patches/e_instant_text.xdelta", () => {
                    // If the rom is randomised we need to apply the randomised red patch otherwise the one with vanilla red pokemon
                    let patchPath = patcher.VANILLA_EMERALD_MD5 == patcher.md5 ? "../../web-src/patches/e_red_vanilla.xdelta" : "../../web-src/patches/e_red_randomised.xdelta";
                    console.log("patching using patch:" + patchPath);
                     patcher.applyPatchFile(true, patchPath, () => {
                        patcher.loader.persistRom(patcher.ROM, "E", ".gba", textUpdateFunction);
                     });
                });
            });
        });
    }

    patchCrystal(textUpdateFunction) {

        /* FIX NON UNIQUE WARPS */

        /* GAME FIXES */
                // Fix issue with morty not appearing in the gym due to sequence breaks
        // Hide the original morty and disguse him as wall art & make the enterance guy a new morty
        this.patchROM8(0x08e511ed - 0x08000000, 0x80);
        this.patchROM8(0x08e511F2 - 0x08000000, 0x02); 

        this.patchROM8(0x08e51265 - 0x08000000, 0x80);
        this.patchROM8(0x08e51268 - 0x08000000, 0x05);
        this.patchROM8(0x08e5126A - 0x08000000, 0x02);

        this.patchROM8(0x08e51274 - 0x08000000, 0xf0);
        this.patchROM8(0x08e51275 - 0x08000000, 0x63);

        // Patch Crashing route 30 pidgey
        this.patchROM8(0x08f3c9a8 - 0x08000000, 0x76);
        this.patchROM8(0x08f3c9a9 - 0x08000000, 0x73);
        this.patchROM8(0x08f3c9aa - 0x08000000, 0xe8);

        // Patch blue magma sprites that sometimes appear in ruins of alph to be guards and move them off the map
        this.patchROM8(0x08e70a81 - 0x08000000, 0x0d);
        this.patchROM8(0x08e70a84 - 0x08000000, 0x1c);
        this.patchROM8(0x08e70a86 - 0x08000000, 0x01);

        this.patchROM8(0x08e70ab1 - 0x08000000, 0x0d);
        this.patchROM8(0x08e70ab4 - 0x08000000, 0x1c);
        this.patchROM8(0x08e70ab6 - 0x08000000, 0x01);

        // Patch Azalea Town crashing red into a slowpoke
        this.patchROM8(0x08f5888d - 0x08000000, 0xd0);

        this.patchROM8(0x08f5889c - 0x08000000, 0xf1);
        this.patchROM8(0x08f5889d - 0x08000000, 0xda);
        this.patchROM8(0x08f5889e - 0x08000000, 0xe8);

        // Move Slowpoke well guard 1 over to avoid progression locks
        this.patchROM8(0x08f587e8 - 0x08000000, 0x24);

        // Route 34 connector crashing red into a far fetched
        this.patchROM8(0x08e933ed - 0x08000000, 0xcb);

        this.patchROM8(0x08e933fc - 0x08000000, 0x76);
        this.patchROM8(0x08e933fd - 0x08000000, 0x73);
        this.patchROM8(0x08e933fe - 0x08000000, 0xe8);  
        
        // Fix goldenrod rocket positions
        this.patchROM8(0x08e9884C - 0x08000000, 0x11);
        this.patchROM8(0x08e9884E - 0x08000000, 0x18);

        this.patchROM8(0x08e9884E - 0x08000000, 0x10);

        this.patchROM8(0x08e9890C - 0x08000000, 0x1C);
        this.patchROM8(0x08e9890E - 0x08000000, 0x17);

        this.patchROM8(0x08e98926 - 0x08000000, 0x17);

        this.patchROM8(0x08e98954 - 0x08000000, 0x1B);
        this.patchROM8(0x08e98956 - 0x08000000, 0x0B);

        this.patchROM8(0x08e9896C - 0x08000000, 0x1B);
        this.patchROM8(0x08e9896E - 0x08000000, 0x0B);

        // Make sure ice path puzzle floor can always be done
        this.patchROM8(0x08f3f5ee - 0x08000000, 0xc7);
        this.patchROM8(0x08f3f5ef - 0x08000000, 0x06);

        this.patchROM8(0x08f3f6a0 - 0x08000000, 0xc7);
        this.patchROM8(0x08f3f6a1 - 0x08000000, 0x06);

        this.patchROM8(0x08f3f78e - 0x08000000, 0xc7);
        this.patchROM8(0x08f3f78f - 0x08000000, 0x06);

        this.patchROM8(0x08f3f7d0 - 0x08000000, 0xc7);
        this.patchROM8(0x08f3f7d1 - 0x08000000, 0x06);

        // Make sure walking into E4 room works correctly
        this.patchROM8(0x227f27, 0x00);
        this.patchROM8(0x227f28, 0x00); 
        this.patchROM8(0x227f29, 0x00); 
        this.patchROM8(0x227f3E, 0x9c); 
 
        this.patchROM8(0x228184, 0x9c);
        this.patchROM8(0x228186, 0x01); 
        this.patchROM8(0x2281b4, 0x00); 
        this.patchROM8(0x2281b5, 0x00);
        this.patchROM8(0x2281b6, 0x00);  
 
        this.patchROM8(0x228422, 0x9c);
        this.patchROM8(0x228424, 0x02); 
        this.patchROM8(0x228452, 0x00);
        this.patchROM8(0x228453, 0x00);
        this.patchROM8(0x228454, 0x00);  
        
        this.patchROM8(0x2286ac, 0x9c);
        this.patchROM8(0x2286ae, 0x03); 
        this.patchROM8(0x2286dc, 0x00);
        this.patchROM8(0x2286dd, 0x00);
        this.patchROM8(0x2286de, 0x00); 

        // Keep All the crystal doors open
        this.patchROM8(0xf150da, 0x0e); 
        this.patchROM8(0xf150f4, 0x16);
        this.patchROM8(0xf150f5, 0x32);

        this.patchSectionOfRom(0xf152a2, [0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30,0x08,0x06,0x79,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf152b0, [0x79,0x30,0x08,0x06,0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30,0x81,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf152c0, [0x81,0x30,0x81,0x30,0x81,0x30,0x88,0x30,0x89,0x30,0x8a,0x30,0x81,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf152d0, [0x81,0x30,0x81,0x30,0x81,0x30,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04] , "C");
        this.patchSectionOfRom(0xf152e0, [0x1a,0x04,0x1b,0x04,0x1c,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04] , "C");

        this.patchROM8(0xf64f5a, 0x0e); 
        this.patchROM8(0xf64f74, 0x16);
        this.patchROM8(0xf64f75, 0x32);

        this.patchSectionOfRom(0xf65122, [0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30,0x08,0x06,0x79,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf65130, [0x79,0x30,0x08,0x06,0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30,0x81,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf65140, [0x81,0x30,0x81,0x30,0x81,0x30,0x88,0x30,0x89,0x30,0x8a,0x30,0x81,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf65150, [0x81,0x30,0x81,0x30,0x81,0x30,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04] , "C");
        this.patchSectionOfRom(0xf65160, [0x1a,0x04,0x1b,0x04,0x1c,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04] , "C");

        this.patchROM8(0xf65196, 0x0e); 
        this.patchROM8(0xf651b0, 0x16);
        this.patchROM8(0xf651b1, 0x32);

        this.patchSectionOfRom(0xf6535E, [0x79,0x30] , "C");
        this.patchSectionOfRom(0xf65360, [0x79,0x30,0x79,0x30,0x79,0x30,0x08,0x06,0x79,0x30,0x81,0x30,0x79,0x30,0x08,0x06] , "C");
        this.patchSectionOfRom(0xf65370, [0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30,0x81,0x30,0x81,0x30,0x81,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf65380, [0x81,0x30,0x88,0x30,0x89,0x30,0x8a,0x30,0x81,0x30,0x81,0x30,0x81,0x30,0x81,0x30] , "C");
        this.patchSectionOfRom(0xf65390, [0x81,0x30,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x1a,0x04,0x1b,0x04] , "C");
        this.patchSectionOfRom(0xf653a0, [0x1c,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x08,0x04,0x03,0x07] , "C");

        this.patchROM8(0xf65e0e, 0x0e); 
        this.patchROM8(0xf65e28, 0x16);
        this.patchROM8(0xf65e29, 0x32);

        this.patchSectionOfRom(0xf65fd6, [0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30,0x08,0x06] , "C");
        this.patchSectionOfRom(0xf65fe0, [0x79,0x30,0x81,0x30,0x79,0x30,0x08,0x06,0x79,0x30,0x79,0x30,0x79,0x30,0x79,0x30] , "C");
        this.patchSectionOfRom(0xf65ff0, [0x81,0x30,0x81,0x30,0x81,0x30,0x81,0x30,0x81,0x30,0x88,0x30,0x89,0x30,0x8a,0x30] , "C");
        this.patchSectionOfRom(0xf66000, [0x81,0x30,0x81,0x30,0x81,0x30,0x81,0x30,0x81,0x30,0x08,0x04,0x08,0x04,0x08,0x04] , "C");
        this.patchSectionOfRom(0xf66010, [0x08,0x04,0x08,0x04,0x1a,0x04,0x1b,0x04,0x1c,0x04,0x08,0x04,0x08,0x04,0x08,0x04] , "C");

        // Don't auto battle lance
        this.patchSectionOfRom(0x533710, [0xcb,0xd0,0x9e,0x08] , "C");

        this.patchROM8(0x533767, 0x08);
        this.patchROM8(0x53376b, 0x08);

        this.patchROM8(0x9ed0d4, 0x70);
        this.patchROM8(0x9ed0d5, 0x77);

        this.patchSectionOfRom(0xf0ca81, [0x00,0xff,0xff,0xff,0xff,0xff] , "C");

        this.patchROM8(0xf656de, 0x16);

        // Prevent Rage Candy bar guy stopping you
        this.patchROM8(0xf18bbe, 0x0a);

        // Patch out regie rock
        this.patchROM8(0xf35bac, 0xc9);
        this.patchROM8(0xf35bad, 0x9f);
        this.patchROM8(0xf35bae, 0x9d);

        // Allow Digging in rocket hideout
        this.patchROM8(0x4840eb, 0x04);
        this.patchROM8(0x4840ee, 0xFF);

        this.patchROM8(0x484107, 0x04);
        this.patchROM8(0x48410A, 0xFF);

        this.patchROM8(0x484123, 0x04);
        this.patchROM8(0x484126, 0xFF);

        // Remove Darkness from Caves
        if (this.neverDarkInCaves) {
            this.patchROM8(0x0854d8, 0x08);
        }

        // Instant Catch
        if (this.perfectCatchRate) {
            this.patchROM8(0x5652a, 0x00);
            this.patchROM8(0x5652d, 0xd0);
            this.patchROM8(0x5660e, 0x00);
            this.patchROM8(0x56611, 0xd0);
        }


        // Randomise pokemon that get missed by upr
        if (this.md5 != this.VANILLA_CRYSTAL_MD5) {
            this.patchROM8(0xe7517F, (RomPatcher.getHash(this.md5 + "SUDOWOODO") % 250) + 1);
            this.patchROM8(0x9e2279, (RomPatcher.getHash(this.md5 + "SUICUNE") % 250) + 1);
            this.patchROM8(0x9d9032, (RomPatcher.getHash(this.md5 + "ELECTRODE") % 250) + 1);
            this.patchROM8(0x9d6902, (RomPatcher.getHash(this.md5 + "GYARADOS") % 250) + 1);
        }

        // Run indoors
        if (this.runIndoors) {
            this.patchROM8(0x11A1E8, 0x00); 
        }

        // No EXP
        if (this.noExp) {
            this.patchROM8(0x4a4a4, 0xc2);
            this.patchROM8(0x4a4a5, 0x7e);
            this.patchROM8(0x4a4ac, 0xff);
        }

        // Speedup Codes
        if (this.ultrSpeedCodes) {
            this.patchSectionOfRom(0x8ae, [0x08,0x49] , "C");
            this.patchSectionOfRom(0x8b0, [0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b,0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20] , "C");
            this.patchSectionOfRom(0x8c0, [0x08,0x40,0x00,0x28,0x01,0xd0,0xe6,0xf2,0xff,0xfb,0x01,0xbc,0x00,0x47,0x00,0x00] , "C");
            this.patchSectionOfRom(0x8d0, [0xc0,0x22,0x00,0x03,0xfe,0xff,0x00,0x00,0xd4,0x7f,0x03,0x02,0x01,0x49,0x08,0x60] , "C"); 
        }

        // Tweak the battle music to be a little less dank
        this.patchROM8(0xe5f5d4, 0x18);
        this.patchROM8(0xe5f607, 0x18);
        this.patchROM8(0xe5f611, 0x18);
        this.patchROM8(0xe5f6b9, 0x18);

        // Warp Home from menu
        let bedWarpMessage = RomPatcher.convertMessageToHex("WARP");
        let confirmMessage = RomPatcher.convertMessageToHex("Would you like to exit from this\\area right now?");

        let menuExitFunctionPtrC = 0xF74E8C;
        let menuRetireFunctionPtrAddressC = [0x75,0xFD,0x09,0x08];

        this.patchSectionOfRom(menuExitFunctionPtrC, menuRetireFunctionPtrAddressC, "C");

        let confirmMessageStartOffsetC = 0x2A4BF4;
        let menuExitTextPtrC = 0x5EE6EE;

        this.patchSectionOfRom(menuExitTextPtrC, bedWarpMessage, "C");
        this.patchSectionOfRom(confirmMessageStartOffsetC, confirmMessage, "C");

        // File Patches
        let isInstantText = this.instantText;
        let hqAudio = this.hqMixer;
        let patcher = this;

        patcher.applyPatchFile(true, "../../web-src/patches/c_fix_sprites.xdelta", () => {
            patcher.applyPatchFile(hqAudio, "../../web-src/patches/c_hq_audio.xdelta", () => {
                patcher.applyPatchFile(isInstantText, "../../web-src/patches/c_instant_text.xdelta", () => {
                    patcher.loader.persistRom(patcher.ROM, "C", ".gba", textUpdateFunction);
                });
            });
        });
    }

    patchFireRed(textUpdateFunction) {

        /* FIX NON UNIQUE WARPS */
        
        // Pokemon Mansion Exit
        this.patchROM8(0x083B0C95 - 0x08000000, 0x32);

        /* GAME FIXES */

        // Move cerulean cave blocker to avoid soft locks before you get surf
        this.patchROM8(0x083B531C - 0x08000000, 0x00);

        // Patch Lorilei room to avoid softlock by auto walk
        this.patchROM8(0x0831f0d5 - 0x08000000, 0x32);

        // Remove Darkness from Caves
        if (this.neverDarkInCaves) {
            this.patchROM8(0x3C6946, 0xc8);
            this.patchROM8(0x3C6948, 0xc8);
            this.patchROM8(0x3C694A, 0xc8);
            this.patchROM8(0x3C694C, 0xc8);
        }

        // Patch victory road barriers
        this.patchROM8(0x160f99, 0xd1);
        this.patchROM8(0x160f9A, 0x02);
        this.patchROM8(0x160f9B, 0x00);
        this.patchROM8(0x160fa2, 0xe1);
        this.patchROM8(0x160fa3, 0x02);
        this.patchROM8(0x160fa4, 0x00);

        this.patchROM8(0x16102c, 0xd1);
        this.patchROM8(0x16102d, 0x02);
        this.patchROM8(0x16102e, 0x00);
        this.patchROM8(0x161035, 0xe1);
        this.patchROM8(0x161036, 0x02);
        this.patchROM8(0x161037, 0x00);

        this.patchROM8(0x16103f, 0xd1);
        this.patchROM8(0x161040, 0x02);
        this.patchROM8(0x161041, 0x00);
        this.patchROM8(0x161048, 0xe1);
        this.patchROM8(0x161049, 0x02);
        this.patchROM8(0x16104a, 0x00);

        this.patchROM8(0x161139, 0xd1);
        this.patchROM8(0x16113a, 0x02);
        this.patchROM8(0x16113b, 0x00);
        this.patchROM8(0x161142, 0xe1);
        this.patchROM8(0x161143, 0x02);
        this.patchROM8(0x161144, 0x00);

        // Instant Catch
        if (this.perfectCatchRate) {
            this.patchROM8(0x2d696, 0x00);
            this.patchROM8(0x2d699, 0xd0);
            this.patchROM8(0x2d77a, 0x00);
            this.patchROM8(0x2d77d, 0xd0);
        }

        // Always open the champion room door
        this.patchROM8(0x31fc3e, 0x8a);
        this.patchROM8(0x31fc3f, 0x02);
        this.patchROM8(0x31fc40, 0x8e);
        this.patchROM8(0x31fc41, 0x02);
        this.patchROM8(0x31fc42, 0x8c);
        this.patchROM8(0x31fc43, 0x02);

        this.patchROM8(0x31fc58, 0x95);
        this.patchROM8(0x31fc59, 0x02);
        this.patchROM8(0x31fc5a, 0x96);
        this.patchROM8(0x31fc5b, 0x32);
        this.patchROM8(0x31fc5c, 0x97);
        this.patchROM8(0x31fc5d, 0x02);

        // Champion Fight on talk
        this.patchROM8(0x3b19f8, 0xee);
        this.patchROM8(0x3b19f9, 0x2b);
        this.patchROM8(0x3b19fa, 0x16);
        this.patchROM8(0x3b19fb, 0x08);

        // Dont start fight on enter
        this.patchROM8(0x162b65, 0x3d);
        this.patchROM8(0x162b66, 0x26);

        this.patchROM8(0x162bf7, 0x61);
        this.patchROM8(0x162bf8, 0x76);
        this.patchROM8(0x162bf9, 0x1a);

        // Don't Lock E4 Room Doors
        this.patchROM8(0x1a7619, 0x8a);
        this.patchROM8(0x1a7622, 0x8e);
        this.patchROM8(0x1a7624, 0x00);
        this.patchROM8(0x1a762b, 0x8c);
        this.patchROM8(0x1a7634, 0x95);
        this.patchROM8(0x1a763d, 0x96);
        this.patchROM8(0x1a763f, 0x00);
        this.patchROM8(0x1a7646, 0x97);

        // Knock through lance's wall
        this.patchROM8(0x31f70e, 0x40);
        this.patchROM8(0x31f70f, 0x07);
        this.patchROM8(0x31f710, 0x36);
        this.patchROM8(0x31f711, 0x07);

        this.patchROM8(0x31f746, 0x48);
        this.patchROM8(0x31f747, 0x07);
        this.patchROM8(0x31f748, 0x3e);
        this.patchROM8(0x31f749, 0x07);

        this.patchROM8(0x31f77c, 0x10);
        this.patchROM8(0x31f77d, 0x33);
        this.patchROM8(0x31f77e, 0x10);
        this.patchROM8(0x31f77f, 0x33);

        this.patchROM8(0x31f780, 0x10);
        this.patchROM8(0x31f781, 0x33);
        this.patchROM8(0x31f782, 0x10);
        this.patchROM8(0x31f783, 0x33);

        this.patchROM8(0x31f802, 0x96);
        this.patchROM8(0x31f803, 0x32);

        // Open All E4 back doors by default
        this.patchROM8(0x31f0ba, 0x8e);
        this.patchROM8(0x31f0d4, 0x96);
        this.patchROM8(0x31f0d5, 0x32);

        this.patchROM8(0x31f232, 0x8e);
        this.patchROM8(0x31f24c, 0x96);
        this.patchROM8(0x31f24d, 0x32);

        this.patchROM8(0x31f3aa, 0x8e);
        this.patchROM8(0x31f3c4, 0x96);
        this.patchROM8(0x31f3c5, 0x32);

        this.patchROM8(0x31f5e8, 0x8e);
        this.patchROM8(0x31f620, 0x96);
        this.patchROM8(0x31f621, 0x32);

        // Prevent walk north when entering the back door
        this.patchROM8(0x16262e, 0x68);
        this.patchROM8(0x16262f, 0x40);

        this.patchROM8(0x16273e, 0x68);
        this.patchROM8(0x16273f, 0x40);
        this.patchROM8(0x162740, 0x01);

        this.patchROM8(0x1628c9, 0x68);
        this.patchROM8(0x1628ca, 0x40);
        this.patchROM8(0x1628cb, 0x02);

        this.patchROM8(0x1629e6, 0x68);
        this.patchROM8(0x1629e7, 0x40);
        this.patchROM8(0x1629e8, 0x03);

        // Make sure Barriers always down and lift card can always be collected and giovani always present
        this.patchROM8(0x3afc14, 0x00);
        this.patchROM8(0x16121d, 0xe2);

        this.patchROM8(0x1673ed, 0x20);

        this.patchROM8(0x161384, 0x19);
        this.patchROM8(0x161385, 0x15);

        this.patchROM8(0x3afbcc, 0x00);
        
        // Early Balls
        // if (this.earlyBalls) {                                
        //     this.patchSectionOfRom(0x169550, [0x0,0x96,0x96,0x16,0x08,0x21,0x02,0x40,0x02,0x00,0x07,0x01,0x96,0x96,0x16,0x08], "FR");
        //     this.patchROM8(0x169567, 0x96);
        //     this.patchROM8(0x169568, 0x96);
        // }

        // Run Indoors
        if (this.runIndoors) {
            this.patchROM8(0xBD4A8, 0x00); 
        }

        // No EXP
        if (this.noExp) {
            this.patchROM8(0x21bf4, 0x02);
            this.patchROM8(0x21bf5, 0x7e);
            this.patchROM8(0x21bfc, 0xff);
        }

        // Speedup Codes
        if (this.ultrSpeedCodes) {
            this.patchSectionOfRom(0x8ae, [0x08,0x49,0x8a,0x8b,0x08,0x48,0x10,0x40,0x8a,0x8b] , "FR");
            this.patchSectionOfRom(0x8b0, [0x88,0x83,0x07,0x48,0xc1,0x79,0x80,0x20,0x08,0x40,0x00,0x28,0x01,0xd0,0xe3,0xf1] , "FR");
            this.patchSectionOfRom(0x8c0, [0xa7,0xf9,0x01,0xbc,0x00,0x47,0x00,0x00,0xf0,0x30,0x00,0x03,0xfe,0xff,0x00,0x00] , "FR");
            this.patchSectionOfRom(0x8d0, [0xb8,0x7a,0x03,0x02,0x01,0x49,0x08,0x62,0x70,0x47,0x00,0x00,0xf0,0x30,0x00,0x03] , "FR");
        }

        // Disable story log flashbacks
        if(this.noFRFlashbacks) {
            this.patchSectionOfRom(0x110fcc, [0x00,0x1C,0x0F,0xE0] , "FR");
        }

        // Warp from menu
        let bedWarpMessage = RomPatcher.convertMessageToHex("WARP");
        let confirmMessage = RomPatcher.convertMessageToHex("Would you like to exit from this\\area right now?");
        let menuDescription = RomPatcher.convertMessageToHex("Warp into your bedroom.");

        let menuExitFunctionPtrF = 0x3A73E8
        let retirePtr = [0x69,0xf5,0x06,0x08];

        this.patchSectionOfRom(menuExitFunctionPtrF, retirePtr, "FR");

        let menuExitTextPtrAddrF        = 0x41630D;
        let confirmMessageStartOffsetF  = 0x1BFC5C;
        let menuDescriptionStartOffsetF = 0x41A169;

        this.patchSectionOfRom(menuExitTextPtrAddrF, bedWarpMessage, "FR");
        this.patchSectionOfRom(confirmMessageStartOffsetF, confirmMessage, "FR");
        this.patchSectionOfRom(menuDescriptionStartOffsetF, menuDescription, "FR");

        // File Patches
        let isInstantText = this.instantText;
        let hqAudio = this.hqMixer; // TODO: this is broken (the patch is for 1.0 maybe?)
        let earlyBalls = this.earlyBalls;
        let patcher = this;
        
        patcher.applyPatchFile(true, "../../web-src/patches/fr_c_sprites.xdelta", () => {
            patcher.applyPatchFile(false, "../../web-src/patches/fr_hq_audio.xdelta", () => {
                patcher.applyPatchFile(earlyBalls, "../../web-src/patches/fr_early_balls.xdelta", () => {
                    patcher.applyPatchFile(isInstantText, "../../web-src/patches/fr_instant_text.xdelta", () => {
                        patcher.loader.persistRom(patcher.ROM, "FR", ".gba", textUpdateFunction);
                    });
                });
            });
        });
    }

    static isLittleEndian() {
            var test = new Int32Array(1);
            test[0] = 1;
            var test2 = new Uint16Array(test);
            if (test2[0] == 1) {
                return true;
            }
        return false;
    }

    static getHash(input){
        var hash = 0, len = input.length;
        for (var i = 0; i < len; i++) {
          hash  = ((hash << 5) - hash) + input.charCodeAt(i);
          hash |= 0; // to 32bit integer
        }
        return hash;
    }

    static convertMessageToHex(message) {

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
        charHex.set(":"    , 0xF0);
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

        let hex = [];
        message.split("").forEach(char => (charHex.get(char) != undefined) && hex.push(charHex.get(char)))
        hex.push(charHex.get("END"));
        return hex;
    }

}

export default RomLoader;