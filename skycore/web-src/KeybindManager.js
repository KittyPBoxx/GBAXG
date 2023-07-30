class KeybindManager {

    constructor(commandExecutor) {
        this.configFileName = '/offline/user_keybinds.json';
        this.commandExecutor = commandExecutor;
        this.freezeClic = false;
        this.disableInput = false;
        this.listenForInput = false;

        this.keybinds = new Map();
        this.keybinds.set("AKey"     , new Keybind("button" , "AKey"     , "KeyK", "button2" ));
        this.keybinds.set("BKey"     , new Keybind("button" , "BKey"     , "KeyL", "button1" ));
        this.keybinds.set("LKey"     , new Keybind("button" , "LKey"     , "KeyU", "button4" ));
        this.keybinds.set("RKey"     , new Keybind("button" , "RKey"     , "KeyP", "button5" ));
        this.keybinds.set("UpKey"    , new Keybind("button" , "UpKey"    , "KeyW", "up0"     ));
        this.keybinds.set("DownKey"  , new Keybind("button" , "DownKey"  , "KeyS", "down0"   ));
        this.keybinds.set("LeftKey"  , new Keybind("button" , "LeftKey"  , "KeyA", "left0"   ));
        this.keybinds.set("RightKey" , new Keybind("button" , "RightKey" , "KeyD", "right0"  ));
        this.keybinds.set("StartKey" , new Keybind("button" , "StartKey" , "KeyI", "button12"));
        this.keybinds.set("SelectKey", new Keybind("button" , "SelectKey", "KeyO", "button9" ));
        this.keybinds.set("AltAKey"  , new Keybind("button" , "AltAKey"  , "KeyV", null      ));
        this.keybinds.set("AltBKey"  , new Keybind("button" , "AltBKey"  , "KeyB", null      ));
        this.keybinds.set("TurboAKey", new Keybind("button" , "TurboAKey", "KeyN", null      ));
        this.keybinds.set("TurboBKey", new Keybind("button" , "TurboBKey", "KeyM", null      ));
        this.keybinds.set("Reset"    , new Keybind("command", "Reset"    , "KeyR", null      ));

        this.keybindChangeCallbacks = new Map();
    }

    addListeners() {
        document.addEventListener("click", e => {
            if (this.freezeClic) {
                e.stopPropagation();
                e.preventDefault();
            }
        }, true);

        document.addEventListener('keydown', e => this.doInput(e.code, true, false));
        document.addEventListener('keyup', e => this.doInput(e.code, false, false));

        gameControl.on('connect', gamepad => { 

            for (var i = 0; i < gamepad.buttons; i++) {
                const btnRef = "button" + i;
                gamepad.before("button" + i, () => this.doInput(btnRef, true, true));
                gamepad.after("button" + i, () => this.doInput(btnRef, false, true));
            }
        
            for (var i = 0; i < gamepad.axes; i++) {
        
                const upRef = "up" + i;
                gamepad.before("up" + i, () => this.doInput(upRef, true, true));
                gamepad.after("up" + i, () => this.doInput(upRef, false, true));
        
                const downRef = "down" + i;
                gamepad.before("down" + i, () => this.doInput(downRef, true, true));
                gamepad.after("down" + i, () => this.doInput(downRef, false, true));
        
                const leftRef = "left" + i;
                gamepad.before("left" + i, () => this.doInput(leftRef, true, true));
                gamepad.after("left" + i, () => this.doInput(leftRef, false, true));
        
                const rightRef = "right" + i;
                gamepad.before("right" + i, () => this.doInput(rightRef, true, true));
                gamepad.after("right" + i, () => this.doInput(rightRef, false, true));
            }
        
        });
    }

    startListenFor(command, isGamepad) {

        this.freezeClic = true;
        this.listenForInput = {'isGamepad': isGamepad, 
                               'command': command}

    }

    loadSavedKeybinds() {
        try {
            let settings = FS.readFile(this.configFileName, { encoding: "utf8" });
            let savedSettings = new Map(JSON.parse(settings));
            savedSettings.forEach((value, key) => savedSettings.set(key, new Keybind(value.type, value.command, value.kbd, value.gmpd)))
            this.keybinds = new Map([...this.keybinds, ...savedSettings]);
        } catch (e) {
            //this.saveKeybinds();
        };
    }

    saveKeybinds() {
        let configFile = JSON.stringify(Array.from(this.keybinds.entries()), null, 2).replace(/([\"|(null)|\{],?)\n/g, "$1");
        FS.writeFile(this.configFileName, configFile);
        FS.syncfs(function (err) {});
    }

    doInput(code, isDown, isGamepad) {
        
        if (this.disableInput) { return; }

        if (this.listenForInput) {

            if (this.listenForInput.isGamepad) {

                this.keybinds.get(this.listenForInput.command).gmpd = code;

            } else {

                this.keybinds.get(this.listenForInput.command).kbd = code;

            }
            
            this.listenForInput = false;
            this.freezeClic = false;

            this.saveKeybinds();
            this.keybindChangeCallbacks.forEach((callback, mapKey)  => callback())

        } else {

            this.keybinds.forEach(keybind => {

                if (keybind.matches(isGamepad, code)) {

                    this.commandExecutor.execute(keybind.getCommandName(isDown, code));

                }

            });

        }

    }

}

class Keybind {
    constructor (type, command, kbd, gmpd) {
        this.type = type;
        this.command = command;
        this.kbd = kbd;
        this.gmpd = gmpd;
    }

    matches(isGmpd, code) {
        return isGmpd ? this.gmpd == code : this.kbd == code; 
    }

    getCommandName(isDown, code) {

        if (this.type == "button" && isDown) {

            return this.command + "Down";

        } else if (this.type == "button" && !isDown) {

            return this.command + "Up";

        }
         
        return this.command;
    }
}

export default KeybindManager;