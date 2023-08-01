class SaveManager {

    constructor(exposedCore, ramHook) {
        this.exposedCore = exposedCore;
        this.ramHook = ramHook;
    }

    resetToLastSave() {

        let latestSavedGame = "/offline/FR.sav"
        let latestCurrentDate = null;

        FS.readdir('/offline/').forEach(file => {

            if (file.endsWith(".sav") ) {
                if (latestCurrentDate == null || new Date(FS.stat('/offline/' + file).mtime) > latestCurrentDate) {
                    latestCurrentDate = new Date(FS.stat('/offline/' + file).mtime);
                    latestSavedGame = file;
                }
            }

        });

        this.exposedCore.showGame_EmulationCore();

        if (latestSavedGame.endsWith("E.sav")) {
            this.exposedCore.setGame_EmulationCore("E", -1);
        } else if (latestSavedGame.endsWith("C.sav")) {
            this.exposedCore.setGame_EmulationCore("C", -1);
        } else {
            this.exposedCore.setGame_EmulationCore("FR", -1);
        }

    }

    startGameOrReset() {

        try {
            FS.stat("/offline/FR.slot0.state.png");
            this.resetToLastSave();
            this.exposedCore.showGame_EmulationCore();
        } catch (e) {
            this.exposedCore.showGame_EmulationCore();
            this.exposedCore.setGame_EmulationCore("FR", -1);
            this.exposedCore.showGame_EmulationCore();
        }
        
    }

    resetToLastSaveState() {

        let latestSavedGame = "/offline/FR.slot0.state.png"
        let latestCurrentDate = null;

        FS.readdir('/offline/').forEach(file => {

            if (file.endsWith(".slot0.state.png") ) {
                if (latestCurrentDate == null || new Date(FS.stat('/offline/' + file).mtime) > latestCurrentDate) {
                    latestCurrentDate = new Date(FS.stat('/offline/' + file).mtime);
                    latestSavedGame = file;
                }
            }

        });

        this.exposedCore.showGame_EmulationCore();
        this.ramHook.warpHandler.warpingState = "SAVE_STATE_LOAD";

        if (latestSavedGame.endsWith("E.slot0.state.png")) {
            this.exposedCore.loadState_EmulationCore("E", 0);
        } else if (latestSavedGame.endsWith("C.slot0.state.png")) {
            this.exposedCore.loadState_EmulationCore("C", 0);
        } else {
            this.exposedCore.loadState_EmulationCore("FR", 0);
        }

        
    }

    saveSlot1() {
        this.exposedCore.saveState_EmulationCore(3);

        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        FS.writeFile('/offline/slot3_conf.json', JSON.stringify({ game: currentGame}));

        FS.readdir('/offline/').forEach(file => {
            if (file.endsWith(".slot0.state.png") && !file.endsWith(currentGame + ".slot0.state.png")) {
                let newName = file.replace("slot0", "slot3");
                FS.writeFile('/offline/' + newName, FS.readFile('/offline/' + file));
            }
        });

        FS.syncfs(function (err) {});
    }

    loadSlot1() {

        FS.readdir('/offline/').forEach(file => {
            if (file.endsWith(".slot3.state.png") ) {
                let newName = file.replace("slot3", "slot0");
                FS.writeFile('/offline/' + newName, FS.readFile('/offline/' + file));
            }
        });

        FS.syncfs(function (err) {});

        try {
            let conf = FS.readFile('/offline/slot3_conf.json', { encoding: "utf8" });
            this.exposedCore.loadState_EmulationCore(JSON.parse(conf).game, 0);
        } catch (e) {}
        

    }

    saveSlot2() {
        this.exposedCore.saveState_EmulationCore(4);

        let currentGame = this.exposedEmulationCore.getGame_EmulationCore();
        FS.writeFile('/offline/slot4_conf.json', JSON.stringify({ game: currentGame}));

        FS.readdir('/offline/').forEach(file => {
            if (file.endsWith(".slot0.state.png") && !file.endsWith(currentGame + ".slot0.state.png")) {
                let newName = file.replace("slot0", "slot4");
                FS.writeFile('/offline/' + newName, FS.readFile('/offline/' + file));
            }
        });

        FS.syncfs(function (err) {});
    }

    loadSlot2() {

        FS.readdir('/offline/').forEach(file => {
            if (file.endsWith(".slot4.state.png") ) {
                let newName = file.replace("slot4", "slot0");
                FS.writeFile('/offline/' + newName, FS.readFile('/offline/' + file));
            }
        });

        FS.syncfs(function (err) {});

        try {
            let conf = FS.readFile('/offline/slot4_conf.json', { encoding: "utf8" });
            this.exposedCore.loadState_EmulationCore(JSON.parse(conf).game, 0);
        } catch (e) {}

    }

    importSave(file) {

        var zip = new JSZip();
        let saveManager = this;
        zip.loadAsync(file).then(function(zip) {
            Object.keys(zip.files).forEach(function (filename) {
                zip.files[filename].async('Uint8Array').then(function (fileData) {
                    if (filename.endsWith(".sav") || filename.endsWith(".png")) {
                        let out_file = '/offline/' + filename;
                        FS.writeFile(out_file, fileData);
                    }
                }).then(() => {
                    zip.files[filename].async('string').then(function (fileData) {
                        if (filename.endsWith(".json")) {
                            let config = JSON.parse(fileData.replaceAll("'", "\""));
                            let latestSavedGame = config.bootSave;
                            if (latestSavedGame.endsWith("E.sav")) {
                                saveManager.exposedCore.setGame_EmulationCore("E", 0);
                            } else if (latestSavedGame.endsWith("C.sav")) {
                                saveManager.exposedCore.setGame_EmulationCore("C", 0);
                            } else {
                                saveManager.exposedCore.setGame_EmulationCore("FR", 0);
                            }
                        }
                    }).then(() => {
                        FS.syncfs(function (err) {});
                    });
                });
            });
        });
    }

    exportSave() {

        let zip = new JSZip();
        let latestSavedGame = "/offline/FR.sav"
        let latestCurrentDate = null;
        let saveManager = this;
        
        FS.readdir('/offline/').forEach(file => {

            if (file.endsWith(".slot0.state.png")) {
                zip.file(file, FS.readFile('/offline/' + file), {binary: true});
            } else if (file.endsWith(".sav") ) {
                if (latestCurrentDate == null || new Date(FS.stat('/offline/' + file).mtime) > latestCurrentDate) {
                    latestCurrentDate = new Date(FS.stat('/offline/' + file).mtime);
                    latestSavedGame = file;
                }
                zip.file(file, FS.readFile('/offline/' + file), {binary: true});
            }
        });

        zip.file("conf.json", "{'bootSave': '" + latestSavedGame + "'}");

        zip.generateAsync({type:"blob", compression: "DEFLATE"})
        .then(function(content) {
            saveManager.saveToFile(saveManager.readableDate() + "GBAXG_SAVE.zip", content, "application/zip");
        });

    }

    clearAllSaveData() {
        FS.readdir('/offline/').forEach(file => {
            if (file.endsWith(".sav") || file.endsWith(".png") || file.endsWith("_conf.json")) {
                console.log("Deleting " + file);
                FS.unlink('/offline/' + file);
            }
        });
        
        FS.syncfs(function (err) {});
    }

    saveToFile(name, data, type) {
        var element = document.createElement('a');
        element.setAttribute('href', URL.createObjectURL(new Blob( [data], {"type":type} )));
        element.setAttribute('download', name);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
    }

    readableDate() {
        return new Date().toISOString().replace("T", "_").replace("Z", "").substring(0, 16);
    }
}

export default SaveManager;