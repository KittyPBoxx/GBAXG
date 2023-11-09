import { h, render, Component } from '../web-src/preact-10.14.0.mjs';
import htm from '../web-src/htm-3.0.2.mjs';
const html = htm.bind(h);

class UI extends Component {

    constructor(root, gbaxg) {
        super();
        this.gbaxg = gbaxg;
        this.root = root;
        this.romTab = new RomTab(this.gbaxg.romLoader, this.gbaxg.saveManager);
        this.patchesTab = new PatchesTab(this.gbaxg.romLoader, this.gbaxg.keybindManager);
        this.controlsTab = new ControlsTab(this, this.gbaxg.keybindManager);
        this.savesTab = new SavesTab(this, this.gbaxg.saveManager);
        this.warpsTab = new WarpsTab(this.gbaxg.keybindManager, this.gbaxg.randomiser, this.gbaxg.ramHook);
        this.hackTab = new HacksTab(this.gbaxg.keybindManager, this.gbaxg.ramHook);
        this.coopTab = new CoopTab();
        this.systemTab = new SystemTab(this.gbaxg.exposedEmulationCore);
        this.hintsTab = new HintsTab(this.gbaxg.randomiser);
        this.isVisible = true;
        this.lastActiveId = "roms";
        this.reselectRequired = false;
    }

    toggleVisibility(elmnt) 
    {
        if (elmnt.isVisible) {
            this.reselectRequired = false;
            document.getElementById("container").style.height = "96%";
            elmnt.lastActiveId = elmnt.root.querySelector('sl-tab-group').activeTab.getAttribute('panel');
        } else {
            this.reselectRequired = true;
        }

        elmnt.isVisible = !elmnt.isVisible;
        this.draw();
    }

    updateShadowStyles() {
        let sheet = new CSSStyleSheet
        let shadowStyles = `::-webkit-scrollbar {
                                width: 20px;
                            }
                            
                            /* Track */
                            ::-webkit-scrollbar-track {
                            background: #141414;
                            }
                            
                            /* Handle */
                            ::-webkit-scrollbar-thumb {
                            background: #424242;
                            border-radius: 2px;
                            }
                            
                            /* Handle on hover */
                            ::-webkit-scrollbar-thumb:hover {
                            background: #555555;
                            }`;
        sheet.replaceSync(shadowStyles);                   
        customElements.whenDefined('sl-tab-group').then(() => {
            document.querySelectorAll('sl-tab-group').forEach(group => {
                group.shadowRoot.adoptedStyleSheets = [...group.shadowRoot.adoptedStyleSheets, sheet];
            });
        });
    }

    render() {
        return html`<sl-tab-group placement="start" class="tab-group" data-hidden=${!this.isVisible}>
                      <sl-tab slot="nav" class="toggleable" panel="${this.romTab.id}">${this.romTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.patchesTab.id}">${this.patchesTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.controlsTab.id}">${this.controlsTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.savesTab.id}">${this.savesTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.warpsTab.id}">${this.warpsTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.hackTab.id}">${this.hackTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.systemTab.id}">${this.systemTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" style="display:none" panel="${this.coopTab.id}">${this.coopTab.title}</sl-tab>
                      <sl-tab slot="nav" class="toggleable" panel="${this.hintsTab.id}">${this.hintsTab.title}</sl-tab>
                      <sl-tab slot="nav" panel="hide" onClick="${() => this.toggleVisibility(this)}">${this.isVisible ? "Hide" : "Show"}</sl-tab>
                    
                      <sl-tab-panel name="${this.romTab.id}">${this.romTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.patchesTab.id}">${this.patchesTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.controlsTab.id}">${this.controlsTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.savesTab.id}">${this.savesTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.warpsTab.id}">${this.warpsTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.hackTab.id}">${this.hackTab.render()}</sl-tab-panel>
                      <sl-tab-panel style="display:none" name="${this.coopTab.id}">${this.coopTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.systemTab.id}">${this.systemTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="${this.hintsTab.id}">${this.hintsTab.render()}</sl-tab-panel>
                      <sl-tab-panel name="hide"></sl-tab-panel>
                    </sl-tab-group>`;
    }

    draw() {
        this.romTab.clear();
        render(html`${this.render()}`, this.root);
        this.updateShadowStyles();
    }
}

export default UI;

class RomTab extends Component {

    constructor(romLoader, saveManager) {
        super();
        this.romLoader = romLoader;
        this.saveManager = saveManager;
        this.id = "roms";
        this.title = "ROMS";
        this.biosUpload = new RomUpload("gba_bios", "BIOS", ".bin", "Recommmended", romLoader, () => this.notifyStatusChange(this));
        this.frUpload = new RomUpload("FR", "FIRE RED 1.1", ".gba", "Not Loaded", romLoader, () => this.notifyStatusChange(this));
        this.cUpload = new RomUpload("C", "CRYSTAL DUST V2", ".gba", "Not Loaded", romLoader, () => this.notifyStatusChange(this));
        this.eUpload = new RomUpload("E", "EMERALD", ".gba", "Not Loaded", romLoader, () => this.notifyStatusChange(this));

        this.startGameButton = preact.createRef();
        this.resetGameButton = preact.createRef();
    }

    clear() {
        this.biosUpload.clear();
        this.frUpload.clear();
        this.cUpload.clear();
        this.eUpload.clear();
    }

    notifyStatusChange(elmnt) {
        if (!(elmnt.startGameButton.current && elmnt.resetGameButton.current)) {
            return;
        }

        if (elmnt.frUpload.status == "Loaded" && elmnt.cUpload.status == "Loaded" && elmnt.eUpload.status == "Loaded") {
            elmnt.startGameButton.current.removeAttribute("disabled");
            elmnt.resetGameButton.current.removeAttribute("disabled");
        } else {
            elmnt.startGameButton.current.setAttribute("disabled", true);
            elmnt.resetGameButton.current.setAttribute("disabled", true);
        }
    }

    render() {
        return html`<div class="rom-form-container">
                        <form class="input-files">
                            <table>
                                <tr>
                                   ${this.biosUpload.render()}
                                 </tr>
                                 <tr>
                                    ${this.frUpload.render()}
                                 </tr>
                                 <tr>
                                    ${this.cUpload.render()} 
                                 </tr>
                                 <tr>
                                    ${this.eUpload.render()}   
                                </tr>
                            </table>
                        </form>
                        <div class="playButtons">
                            <sl-button disabled ref="${this.startGameButton}" onClick="${() => this.saveManager.startGameOrReset()}" variant="success" outline>Start Game</sl-button>
                            <sl-button disabled ref="${this.resetGameButton}" onClick="${() => this.saveManager.startGameOrReset()}" variant="default" outline>Reset</sl-button>        
                        </div>
                    </div>
                    <sl-alert class="reset-info" open>
                        <sl-icon slot="icon" name="info-circle"></sl-icon>
                        <small>Use Button/Hotkey for resets\n (not soft reset)</small>
                    </sl-alert>
                    <span class="version-text">1.0.4-ALPHA</span>
                    <div class="reset-to-button-group">
                        <sl-button class="reset-to-button" onClick="${() => {_ShowGame(); _SetGame(0); setTimeout(() => _Reset(), 100);}}" outline variant="neutral" size="small">Reset To Fire Red</sl-button>
                        <sl-button class="reset-to-button" onClick="${() => {_ShowGame(); _SetGame(1); setTimeout(() => _Reset(), 100);}}" outline variant="neutral" size="small">Reset To Crystal</sl-button>
                        <sl-button class="reset-to-button" onClick="${() => {_ShowGame(); _SetGame(2); setTimeout(() => _Reset(), 100);}}" outline variant="neutral" size="small">Reset To Emerald</sl-button>
                        <sl-button class="deleteDataButton" onClick="${() => this.deleteAllRoms()}" variant="danger" outline>Clear Stored ROMS</sl-button>
                    </div>`;
    }

    deleteAllRoms() {
        this.romLoader.deleteAllRoms();

        this.biosUpload.reset("Recommended");
        this.frUpload.reset("Not Loaded");
        this.cUpload.reset("Not Loaded");
        this.eUpload.reset("Not Loaded");
    }
}

class RomUpload extends Component {

    constructor(code, title, ext, defaultState, romLoader, onChangeCallback) {
        super();
        this.romLoader = romLoader;
        this.code = code;
        this.title = title;
        this.ext = ext;
        this.status = defaultState;
        this.isAlreadyLoaded = false;
        this.onChangeCallback = onChangeCallback;
    }

    clear() {

        if (!document.getElementById("rom-status-" + this.code)) {
            return;
        }

        document.getElementById("rom-status-" + this.code).innerHTML = "";
    }

    shouldComponentUpdate() {

        if (this.isAlreadyLoaded) {
            return;
        }
 
        this.isAlreadyLoaded = this.romLoader.isLoaded(this.code, this.ext);
        console.log(this.code + this.ext + "exists?" + this.isAlreadyLoaded);
        
        if (this.isAlreadyLoaded) {
            this.status = "Loaded";
            this.onChangeCallback();
        }
    }

    reset(status) {
        this.status = status;
        this.isAlreadyLoaded = false;
        document.getElementById("rom-status-" + this.code).innerHTML = "";
        document.getElementById("rom-status-" + this.code).innerHTML = this.status;
        document.getElementById("rom-" + this.code).value = null;
        this.onChangeCallback();
    }

    render() {
        this.shouldComponentUpdate(); // uh.... I guess we havn't hooked lifecycles up to work correctly
        return html`<td class="fileInput">
                       <label for="rom-${this.code}">${this.title}</label>
                       <input onchange="${e => this.fileLoaded(e, this)}" id="rom-${this.code}" type="file" accept="${this.ext}"/>
                    </td>
                    <td>
                        <span id="rom-status-${this.code}">${this.status}</span>
                    </td>`;
    }

    setStatusText(elmnt, text) {
        elmnt.status = text;
        document.getElementById("rom-status-" + elmnt.code).innerHTML = "";
        document.getElementById("rom-status-" + elmnt.code).innerHTML = elmnt.status;
        elmnt.onChangeCallback();
    }

    fileLoaded(e, uploadComponent) {

        if (uploadComponent.romLoader.loadingInProgress) {
            alert("Another rom is currently loadeing...");
            console.warn("Cannot load two roms at the same time")
            e.target.value = null;
            return;
        }

        let reader= new FileReader();
        let file = e.target.files[0];

        function print_file(e) {
            document.getElementById("rom-status-" + uploadComponent.code).innerHTML = "";
            uploadComponent.romLoader.loadRom(reader.result, uploadComponent.code, uploadComponent.ext, (text) => uploadComponent.setStatusText(uploadComponent, text));
        }

        reader.addEventListener('loadend', print_file);
        reader.readAsArrayBuffer(file);         
    }

}

class PatchesTab extends Component {

    constructor(romLoader, keybindManager) {
        super();
        this.romLoader = romLoader;
        this.keybindManager = keybindManager;
        this.id = "patches";
        this.title = "Patches";
    }

    toggleEarlyBalls(e, elmnt) {
        elmnt.romLoader.romPatcher.earlyBalls = e.target.checked;
    }

    togglePerfectCatchRate(e, elmnt) {
        elmnt.romLoader.romPatcher.perfectCatchRate = e.target.checked;
    }

    toggleInstantText(e, elmnt) {
        elmnt.romLoader.romPatcher.instantText = e.target.checked;
    }

    toggleRunIndoors(e, elmnt) {
        elmnt.romLoader.romPatcher.runIndoors = e.target.checked;
    }

    toggleNoExp(e, elmnt) {
        elmnt.romLoader.romPatcher.noExp = e.target.checked;
    }

    toggleNoExp(e, elmnt) {
        elmnt.romLoader.romPatcher.noExp = e.target.checked;
    }

    toggleNoFRFlashbacks(e, elmnt) {
        elmnt.romLoader.romPatcher.noFRFlashbacks = e.target.checked;
    }

    toggleNoDarkInCaves(e, elmnt) {
        elmnt.romLoader.romPatcher.neverDarkInCaves = e.target.checked;
    }

    toggleSpeedCodes(e, elmnt) {
        elmnt.romLoader.romPatcher.ultrSpeedCodes = e.target.checked;
    }

    toggleHQMixer(e, elmnt) {
        elmnt.romLoader.romPatcher.hqMixer = e.target.checked;
    }

    toggleBoostPerformance(e, elmnt) {
        elmnt.romLoader.romPatcher.boostPerformance = e.target.checked;
    }

    handleKeydown(elmnt, e) {
        let currentIndex = e.target.shadowRoot.querySelector("input").value.length;
        let value = e.target.value;

        if (e.keyCode == 191 && e.shiftKey){
            e.target.value = value.substring(0, currentIndex) + "?" + value.substring(currentIndex);
        } else if (e.keyCode == 49 && e.shiftKey){
            e.target.value = value.substring(0, currentIndex) + "!" + value.substring(currentIndex);
        } else if (e.keyCode == 57 && e.shiftKey){
            e.target.value = value.substring(0, currentIndex) + "(" + value.substring(currentIndex);
        } else if (e.keyCode == 48 && e.shiftKey){
            e.target.value = value.substring(0, currentIndex) + ")" + value.substring(currentIndex);
        } else if (e.keyCode == 188){
            e.target.value = value.substring(0, currentIndex) + "," + value.substring(currentIndex);
        } else if (e.keyCode == 32){
            e.target.value = value.substring(0, currentIndex) + " " + value.substring(currentIndex);
        } else if (e.keyCode == 190) {
            e.target.value = value.substring(0, currentIndex) + "." + value.substring(currentIndex);
        } else if ((e.keyCode >= 48 && e.keyCode <= 57)) {
            e.target.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            e.target.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
        } else if (e.key == "Backspace" && value.length > 0) {
            if (currentIndex == null) {
                e.target.value = "";
            } else {
                e.target.value = value.substring(0, currentIndex - 1) + value.substring(currentIndex, value.length);
            }
        } 

        elmnt.romLoader.romPatcher.bossText = value.substring(0, 31);
    }

    render() {
        return html`<div class="patch-list-container">
                        <form class="patch-list">
                            <table>
                                <tr>
                                    <td>Early Balls</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleEarlyBalls(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>100% Catch Rate</td>
                                    <td><sl-checkbox onClick="${(e) => this.togglePerfectCatchRate(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>Instant Text</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleInstantText(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>Run Indoors</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleRunIndoors(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>No Exp</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleNoExp(e, this)}"></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>No FR Flashbacks</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleNoFRFlashbacks(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>Caves Never Dark</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleNoDarkInCaves(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>Utra Speed Codes</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleSpeedCodes(e, this)}"></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>Ipatix HQ Mixer</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleHQMixer(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr>
                                    <td>Boost Performance</td>
                                    <td><sl-checkbox onClick="${(e) => this.toggleBoostPerformance(e, this)}" checked></sl-checkbox></td>
                                </tr>
                                <tr style="display:none">
                                    <td>Player Sprite</td>
                                    <td>
                                        <sl-radio-group name="a" value="1">
                                            <sl-radio-button value="1">FR</sl-radio-button>
                                            <sl-radio-button value="2">CD</sl-radio-button>
                                            <sl-radio-button value="3">EM</sl-radio-button>
                                        </sl-radio-group>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Randomise Pokemon</td>
                                    <td><sl-button href="../../upr/UniversalPokemonRandomizer-gbaxg-0.11.3-alpha.zip" target="_blank">Get UPR</sl-button></td>
                                </tr>
                            </table>
                            <sl-input class="final-text-input" label="Final Text:" help-text="What will the final boss say after you win?" onkeydown="${e => this.handleKeydown(this, e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" maxlength="30" value="LIKE AND SUBSCRIBE" clearable></sl-input>
                        </form>
                        <sl-alert class="patch-info" open>
                            <sl-icon slot="icon" name="info-circle"></sl-icon>
                            Patches applied on rom load. \n They cannot be changed later. \n\n If the checksum is not original\n  randomizer settings will be \n used.
                        </sl-alert>
                    </div>`;
    }

}

class ControlsTab extends Component {

    constructor(root, keybindManager) {
        super();
        this.root = root;
        this.keybindManager = keybindManager;
        this.id = "controls"
        this.title = "Controls";

        this.keybindManager.keybindChangeCallbacks.set("updateUI", (bind, key) => {
            let elements = document.querySelectorAll(".keybind-table td[data-command=" + bind + "]");
            elements.forEach(e => {
                if (e.innerHTML == "...") {
                    e.innerHTML = key.replace("Key", "");
                }
            })
            root.draw()
        });
    }

    generateKeybindElements(controlTab) {

        let table = document.createElement("table");
        table.className = "keybind-table";

        [...controlTab.keybindManager.keybinds.values()].forEach(binding => {
          
            let row = table.insertRow(table.rows.length);
          
            let keyCell = row.insertCell(0);
            keyCell.innerHTML = `<td>&nbsp;${binding.command.replace("Key", "")}</td>`;
          
            let kbdCell = row.insertCell(1);
            kbdCell.innerHTML = `<td>&nbsp;<span>${binding.kbd.replace("Key", "") || "N/A"}</span></td>`;
            kbdCell.setAttribute("data-command", binding.command);
            kbdCell.setAttribute("data-type", binding.type);
            kbdCell.setAttribute("onClick", 'this.innerHTML = "...";window.GBAXG.keybindManager.startListenFor("' + binding.command + '", false)');
          
            let gmpdCell = row.insertCell(2);
            gmpdCell.innerHTML = `<td>&nbsp;<span>${binding.gmpd || "N/A"}</span></td>`;
            gmpdCell.setAttribute("data-command", binding.command);
            gmpdCell.setAttribute("data-type", binding.type);
            gmpdCell.setAttribute("onClick", 'this.innerHTML = "...";window.GBAXG.keybindManager.startListenFor("' + binding.command + '", true)');
        });

        return { __html: table.outerHTML };
    }

    render() {
        return html`<div dangerouslySetInnerHTML=${this.generateKeybindElements(this)}>                            
                    </div>
                    <sl-button onClick="${() => {FS.unlink('/offline/user_keybinds.json'); FS.syncfs(function (err) {}); window.location.reload(true)}}">Reset Keybinds</sl-button>
                    `;
    }

}

class SavesTab extends Component {

    constructor(root, saveManager) {
        super();
        this.root = root;
        this.saveManager = saveManager;
        this.id = "saves";
        this.title = "Saves";

        // TODO: we should store this somewhere and init
        this.emptyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        this.state1Preview = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        this.state2Preview = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        
    }

    clearAllSaves(element) {
        element.saveManager.clearAllSaveData();
        document.querySelectorAll(".saves-form img").forEach(e => e.src = element.emptyImage);
        element.root.romTab.deleteAllRoms();
    }

    saveSlot1(element) {
        element.saveManager.saveSlot1();
        this.state1Preview = this.createPreviewImage(element, 1);
        document.getElementById("saveState1Preiew").src = this.state1Preview;
    }

    loadSlot1(element) {
        element.saveManager.loadSlot1();
    }

    saveSlot2(element) {
        element.saveManager.saveSlot2();
        this.state2Preview = this.createPreviewImage(element, 2);
        document.getElementById("saveState2Preiew").src = this.state2Preview;
    }

    loadSlot2(element) {
        element.saveManager.loadSlot2();
    }

    createPreviewImage(element, slot) {

        try {
            // TODO: The image data should probably be returned from the save function rather than having the logic here
            let currentGame = element.saveManager.exposedCore.getGame_EmulationCore();
            let image = FS.readFile('/offline/' + currentGame + '.slot' + slot + '.state.png');
            return URL.createObjectURL(new Blob([image.buffer], { type: 'image/png' } /* (1) */));
        } catch (e) {}
        
        return element.emptyImage;
    }

    render() {
        return html`<div>
                        <form class="saves-form">
                            <table>
                                <tr>
                                    <td colspan="2">
                                        <div class="save-info-layout">
                                            <span>Autosave</span>
                                            <sl-button onClick="${() => this.saveManager.resetToLastSaveState()}">Load</sl-button>
                                        </div>
                                    </td>
                                    <td colspan="2">
                                        <div class="save-info-layout">
                                            <span>Last Save</span>
                                            <sl-button onClick="${() => this.saveManager.resetToLastSave()}">Load</sl-button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="save-info-layout">
                                        <span>Slot 1</span>
                                        <sl-button onClick="${() => this.saveSlot1(this)}">Save</sl-button>
                                        <sl-button onClick="${() => this.loadSlot1(this)}">Load</sl-button>
                                    </td>
                                    <td class="save-image">
                                        <sl-card class="card-header">
                                            <img slot="image" id="saveState1Preiew" style="width:60px" width="60" height="40" src="${this.state1Preview}"/>
                                        </sl-card>
                                    </td>
                                    <td class="save-info-layout">
                                        <span>Slot 2</span>
                                        <sl-button onClick="${() => this.saveSlot2(this)}">Save</sl-button>
                                        <sl-button onClick="${() => this.loadSlot2(this)}">Load</sl-button>
                                    </td>
                                    <td class="save-image">
                                        <sl-card class="card-header">
                                            <img slot="image" id="saveState2Preiew" style="width:60px" width="60" height="40" src="${this.state2Preview}"/>
                                        </sl-card>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <div class="recovery-buttons">
                            <sl-button onClick="${() => {_ShowGame(); _SetGame(0); setTimeout(() => _ShowGame(), 1000);}}" outline variant="neutral" size="small">Recover FR</sl-button>
                            <sl-button onClick="${() => {_ShowGame(); _SetGame(1); setTimeout(() => _ShowGame(), 1000);}}" outline variant="neutral" size="small">Recover C</sl-button>
                            <sl-button onClick="${() => {_ShowGame(); _SetGame(2); setTimeout(() => _ShowGame(), 1000);}}" outline variant="neutral" size="small">Recover E</sl-button>
                        </div>
                        <div class="save-buttons">
                            <div class="button-style-file-input save-input">
                                <label for="import-save">Import Save</label>
                                <input onchange="${(e) => this.saveManager.importSave(e.target.files[0])}" id="import-save" type="file" accept=".zip"/>
                            </div>
                            <sl-button onClick="${() => this.saveManager.exportSave()}" outline>Export Save</sl-button>
                            <sl-button onClick="${() => this.clearAllSaves(this)}" variant="danger" outline>Clear Saves/ROMS</sl-button>
                        </div>
                    </div>`;
    }

}

class WarpsTab extends Component {

    constructor(keybindManager, randomiser, ramHook) {
        super();
        this.id = "warps";
        this.title = "Warps";
        this.keybindManager = keybindManager;
        this.randomiser = randomiser;
        this.ramHook = ramHook;
        this.autoCompleteLocations = new AutoComplete(keybindManager, Object.keys(randomiser.keyLocations), "Palette Town", e => this.onWarpAutoComplete(e, this));

        this.kantoLevel = preact.createRef();
        this.johtoLevel = preact.createRef();
        this.hoennLevel = preact.createRef();

        this.seedInput = preact.createRef();

        this.statusDisplay = preact.createRef();
        this.randomiser.updateProgressText = (text) => this.statusDisplay.current.innerHTML = text;
        this.randomiser.onConfigChanged = () => {
            this.kantoLevel.current.value = this.randomiser.kantoLevel;
            this.johtoLevel.current.value = this.randomiser.johtoLevel;
            this.hoennLevel.current.value = this.randomiser.hoennLevel;
            
            this.seedInput.current.value = this.randomiser.seed;
        }

        this.gameSelect = preact.createRef();
        this.bankSelect = preact.createRef();
        this.mapSelect = preact.createRef();
        this.warpSelect = preact.createRef();
    
    }

    handleKeydown(e) {

        let currentIndex = e.target.shadowRoot.querySelector("input").value.length;
        let value = e.target.value;

        if (e.keyCode >= 48 && e.keyCode <= 57) {
            e.target.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            e.target.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
        } else if (e.key == "Backspace" && value.length > 0) {
            if (currentIndex == null) {
                e.target.value = "";
            } else {
                e.target.value = value.substring(0, currentIndex - 1) + value.substring(currentIndex, value.length);
            }
        } 

    }

    remapWarps(elmnt) {

        elmnt.randomiser.config.kantoLevel = elmnt.kantoLevel.current.value;
        elmnt.randomiser.config.johtoLevel = elmnt.johtoLevel.current.value;
        elmnt.randomiser.config.hoennLevel = elmnt.hoennLevel.current.value;
      
        elmnt.randomiser.seed = elmnt.seedInput.current.value;
        elmnt.randomiser.mapWarps(elmnt.randomiser.seed); 
    }

    randomSeed(elmnt) {
        elmnt.seedInput.current.value = Math.random().toString(36).substr(2, 6);
    }

    onWarpAutoComplete(selection, elmnt) {
        let data = elmnt.randomiser.keyLocations[selection];
        if (data) {
            let dataParts = data.split(",");
            if (dataParts[0] == "FR") {
                elmnt.gameSelect.current.value = "1";
            } else if (dataParts[0] == "C") {
                elmnt.gameSelect.current.value = "2";
            } else if (dataParts[0] == "E") {
                elmnt.gameSelect.current.value = "3";
            }

            elmnt.bankSelect.current.value = dataParts[1];
            elmnt.mapSelect.current.value = dataParts[2];
            elmnt.warpSelect.current.value = dataParts[3];
        }
    }

    forceNextWarp(elmnt) {
        elmnt.ramHook.warpHandler.setNextForcedWarp(elmnt.gameSelect.current.value, elmnt.bankSelect.current.value, elmnt.mapSelect.current.value, elmnt.warpSelect.current.value);
    }

    toggleWarpsEnabled(e, elmnt) {
        elmnt.ramHook.warpHandler.randomWarpsEnabled = e.target.checked;
    }

    toggleRemoveExtraDeadends(e, elmnt) {
        elmnt.randomiser.config.extraDeadendRemoval = e.target.checked;
    }

    render() {
        return html`<div>
                        <form class="warp-options">
                            <table>
                                <tr>
                                    <td><sl-switch onClick="${(e) => this.toggleRemoveExtraDeadends(e, this)}" checked>Remove Extra Deadends</sl-switch></td>
                                </tr>
                            </table>
                            <table class="warp-selection">
                                <tr>
                                    <td>
                                        <sl-select ref="${this.kantoLevel}" label="Kanto Warps" value="9">
                                            <sl-option value="1">To Gym 1</sl-option>
                                            <sl-option value="2">To Gym 2</sl-option>
                                            <sl-option value="3">To Gym 3</sl-option>
                                            <sl-option value="4">To Gym 4</sl-option>
                                            <sl-option value="5">To Gym 5</sl-option>
                                            <sl-option value="6">To Gym 6</sl-option>
                                            <sl-option value="7">To Gym 7</sl-option>
                                            <sl-option value="8">To Gym 8</sl-option>
                                            <sl-option value="9">To Champ</sl-option>
                                        </sl-select>
                                    </td>
                                    <td>
                                        <sl-select ref="${this.johtoLevel}" label="Johto Warps" value="9">
                                            <sl-option value="1">To Gym 1</sl-option>
                                            <sl-option value="2">To Gym 2</sl-option>
                                            <sl-option value="3">To Gym 3</sl-option>
                                            <sl-option value="4">To Gym 4</sl-option>
                                            <sl-option value="5">To Gym 5</sl-option>
                                            <sl-option value="6">To Gym 6</sl-option>
                                            <sl-option value="7">To Gym 7</sl-option>
                                            <sl-option value="8">To Gym 8</sl-option>
                                            <sl-option value="9">To Champ</sl-option>
                                        </sl-select>
                                    </td>
                                    <td>
                                        <sl-select ref="${this.hoennLevel}" label="Hoenn Warps" value="9">
                                            <sl-option value="1">To Gym 1</sl-option>
                                            <sl-option value="2">To Gym 2</sl-option>
                                            <sl-option value="3">To Gym 3</sl-option>
                                            <sl-option value="4">To Gym 4</sl-option>
                                            <sl-option value="5">To Gym 5</sl-option>
                                            <sl-option value="6">To Gym 6</sl-option>
                                            <sl-option value="7">To Gym 7</sl-option>
                                            <sl-option value="8">To Gym 8</sl-option>
                                            <sl-option value="9">To Champ</sl-option>
                                        </sl-select>
                                    </td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td><sl-input ref="${this.seedInput}" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" value="${this.randomiser.seed}" placeholder="seed"></sl-input></td>
                                    <td><sl-button onClick="${() => this.randomSeed(this)}">New Seed</sl-button></td>
                                    <td><sl-button onClick="${() => this.remapWarps(this)}">Randomise Warps</sl-button></td>
                                </tr>
                            </table>
                            <span id="warp-status" ref="${this.statusDisplay}" class="status-display">${this.randomiser.hash ? "" : "Status: Not Randomised"}</span>
                            <hr></hr>
                            <table>
                                <tr>
                                    <td><sl-switch onClick="${(e) => this.toggleWarpsEnabled(e, this)}" checked>Random Warps Enabled</sl-switch></td>
                                </tr>
                            </table>
                            <table class="location-selections">
                                <tr>
                                    <td>
                                        ${this.autoCompleteLocations.render()}
                                    </td>
                                    <td><sl-button onClick="${() => this.forceNextWarp(this)}">Force Next Warp</sl-button></td>
                                </tr>
                            </table>
                            <table class="location-selections">
                                <tr class="warp-id-select">
                                    <td>
                                        <sl-select ref="${this.gameSelect}" label="Game" value="1">
                                            <sl-option value="1">FR</sl-option>
                                            <sl-option value="2">C</sl-option>
                                            <sl-option value="3">E</sl-option>
                                        </sl-select>
                                        <sl-input ref="${this.bankSelect}" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" type="number" min="0" value="3" label="Bank"></<sl-input>
                                        <sl-input ref="${this.mapSelect}" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" type="number" min="0" value="1" label="Map"></<sl-input>
                                        <sl-input ref="${this.warpSelect}" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" type="number" min="0" value="0" label="Warp"></<sl-input>
                                    </td>
                                </tr>
                            </table>
                            <hr></hr>
                            <table>
                                <tr>
                                    <td><sl-button onClick="${() => this.randomiser.exportMapping()}">Export Mapping</sl-button></td>
                                    <td> 
                                        <div class="button-style-file-input">
                                            <label for="import-mapping">Import Mapping</label>
                                            <input onchange="${(e) => this.randomiser.importMapping(e.target.files[0])}" id="import-mapping" type="file" accept=".json"/>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>`;
    }

}

class AutoComplete extends Component {

    constructor(keybindManager, options, placeholder, onChangeCallback) {
        super();
        this.keybindManager = keybindManager;
        this.options = options;
        this.filterText = "";
        this.selectInput = preact.createRef();
        this.textInput = preact.createRef();
        this.maxOptions = 3;
        this.placeholder = placeholder;
        this.onChangeCallback = onChangeCallback;
    }

    getTextInputStyles() {
        return `z-index: 4; position: absolute; width: 15em;`
    }

    getSelectInputStyles() {
        return `position: absolute;top: 0;width: 15em;}`
    }

    createSelectOptions(elmnt) {
        if (elmnt.filterText == "") {
            this.selectInput.current.hide()
        } else {
            let options = elmnt.options.filter(o => o.toUpperCase().replaceAll(" ", "_").includes(elmnt.filterText.replaceAll(" ", "_"))).slice(0,elmnt.maxOptions);

            for (let i = 0; i < elmnt.maxOptions; i++) {

                let optionElement = this.selectInput.current.querySelector(`sl-option[data-list-index="${i}"]`);

                if (options[i]) {
                    optionElement.style.display = "block";
                    optionElement.shadowRoot.querySelector("slot[part=label]").innerHTML = options[i];
                } else {
                    optionElement.style.display = "none";
                }

            }

            if (options.length > 0 && !this.selectInput.current.open) {
                this.selectInput.current.show();
            } else if (options.length <= 0) {
                this.selectInput.current.hide();
            }
        }
    }

    handleKeydown(e, elmnt) {

        let currentIndex = elmnt.textInput.current.shadowRoot.querySelector("input").selectionStart;
        let value = elmnt.textInput.current.value;

        if (e.keyCode >= 48 && e.keyCode <= 57) {
            elmnt.textInput.current.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
            elmnt.filterText =  elmnt.textInput.current.value;
            elmnt.createSelectOptions(elmnt);
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            elmnt.textInput.current.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
            elmnt.filterText =  elmnt.textInput.current.value;
            elmnt.createSelectOptions(elmnt);
        } else if (e.key == "Backspace" && value.length > 0) {
            elmnt.textInput.current.value = value.substring(0, currentIndex - 1) + value.substring(currentIndex, value.length);
            elmnt.filterText =  elmnt.textInput.current.value;
            elmnt.createSelectOptions(elmnt);
        } else if (e.keyCode == 32){
            e.target.value = value.substring(0, currentIndex) + "_" + value.substring(currentIndex);
        } 

        this.valueChange(elmnt);
    }

    handleSelectChange(e, elmnt) {
        let selectIndex = parseInt(e.target.value) || 1;
        let selectedValue = elmnt.selectInput.current.querySelector(`sl-option[data-list-index="${selectIndex - 1}"]`).shadowRoot.querySelector("slot[part=label]").innerHTML;
        elmnt.filterText = selectedValue;
        elmnt.textInput.current.value = selectedValue;
        this.valueChange(elmnt);
    }

    valueChange(elmnt) {
        if (elmnt.textInput.current && elmnt.textInput.current.value != "") {
            this.onChangeCallback(elmnt.textInput.current.value);
        }
    }

    render() {
        return html`<div style="position:relative;height: var(--sl-input-height-medium);width:15em"> 
                        <sl-input placeholder="${this.placeholder}" style="${this.getTextInputStyles()}" ref="${this.textInput}" onkeydown="${e => this.handleKeydown(e, this)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" clearable></sl-input>
                        <sl-select onclick="${e => this.handleSelectChange(e, this)}" style="${this.getSelectInputStyles()}" ref="${this.selectInput}" onkeydown="${e => this.handleKeydown(e, this)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() =>  this.textInput.current.focus()}">
                            <sl-option data-list-index="0" value="1"></sl-option>
                            <sl-option data-list-index="1" value="2"></sl-option>
                            <sl-option data-list-index="2" value="3"></sl-option>
                        </sl-select>
                    </div>`
    }
}

class HacksTab extends Component {

    constructor(keybindManager, ramHook) {
        super();
        this.id = "hacks";
        this.title = "Flags";
        this.keybindManager = keybindManager;
        this.ramHook = ramHook;
        this.autoCompleteItems = new AutoComplete(keybindManager, Object.keys(ramHook.gameStateManager.bagManager.getItemData()), "Item", () => {});
        this.autoCompleteVariables = new AutoComplete(keybindManager, [""], "Variables (no.)", () => {});
        this.autoCompleteFlags = new AutoComplete(keybindManager, [""], "Flags (no.)", () => {});

        this.itemQuantityInput = preact.createRef();
        this.varValueInput = preact.createRef();
        this.badgeInput = preact.createRef();
    }

    handleKeydown(e, elmnt) {

        if (!elmnt) {
            elmnt = e.target;
        } else {
            elmnt = elmnt.textInput.current;
        }

        let currentIndex = elmnt.shadowRoot.querySelector("input").selectionStart;
        let value = elmnt.value;

        if (e.keyCode >= 48 && e.keyCode <= 57) {
            elmnt.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
            elmnt.filterText =  elmnt.value;
            elmnt.createSelectOptions && elmnt.createSelectOptions(elmnt);
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            elmnt.value = value.substring(0, currentIndex) + String.fromCharCode(e.keyCode) + value.substring(currentIndex);
            elmnt.filterText = elmnt.value;
            elmnt.createSelectOptions && elmnt.createSelectOptions(elmnt);
        } else if (e.key == "Backspace" && value.length > 0) {
            if (currentIndex) {
                elmnt.value = value.substring(0, currentIndex - 1) + value.substring(currentIndex, value.length);
            } else {
                elmnt.value = value.substring(0, Math.max(value.length - 1, 0));
            }
            
            elmnt.filterText =  elmnt.value;
            elmnt.createSelectOptions && elmnt.createSelectOptions(elmnt);
        } 

        this.valueChange && this.valueChange(elmnt);
    }

    giveItem(e, elmnt) {
        let item = this.autoCompleteItems.textInput.current.value;
        let amount = this.itemQuantityInput.current.value;
        elmnt.ramHook.gameStateManager.bagManager.giveItem(item, amount);
    }

    toggleHmBadgeSync(e, elmnt) {
        elmnt.ramHook.gameStateManager.varManager.badgeSync = e.target.checked;
    }

    giveBadge(e, elmnt) {
        let badge = this.badgeInput.current.value;
        elmnt.ramHook.gameStateManager.varManager.giveBadge(badge);
    }

    takeBadge(e, elmnt) {
        let badge = this.badgeInput.current.value;
        elmnt.ramHook.gameStateManager.varManager.takeBadge(badge);
    }

    updateVar(e, elmnt) {
        let offset = this.autoCompleteVariables.textInput.current.value;
        let value = this.varValueInput.current.value;
        elmnt.ramHook.gameStateManager.varManager.writeGameVar(offset, value);
    }

    setFlag(e, elmnt) {
        let offset = this.autoCompleteFlags.textInput.current.value;
        let value = this.varValueInput.current.value;
        elmnt.ramHook.gameStateManager.varManager.setSysFlag(offset, value);
    }

    clearFlag(e, elmnt) {
        let offset = this.autoCompleteFlags.textInput.current.value;
        let value = this.varValueInput.current.value;
        elmnt.ramHook.gameStateManager.varManager.clearSysFlag(offset, value);
    }

    toggleWalkThroughWalls(e, elmnt) {
        elmnt.ramHook.gameStateManager.walkThroughWalls = e.target.checked;
        if (e.target.checked) {
            elmnt.ramHook.exposedEmulationCore.disableWalls();
        } else {
            elmnt.ramHook.exposedEmulationCore.enableWalls();
        }
    }

    giveRunningShoes(e, elmnt) { 
        elmnt.ramHook.gameStateManager.varManager.giveRunningShoes();
    }

    render() {
        return html`<div class="hacks-tab">
                        <sl-switch onClick="${(e) => this.toggleHmBadgeSync(e, this)}" c checked>HM Badge Sync</sl-switch>
                        <hr></hr>
                        <span>ITEMS:</span>
                        <table>
                            <tr>
                                <td>${this.autoCompleteItems.render()}</td>
                                <td><sl-input ref="${this.itemQuantityInput}" class="input-amount" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" type="number" min="0" value="1"></<sl-input></td>
                                <td><sl-button onClick="${(e) => this.giveItem(e, this)}">Add To Bag</sl-button></td>
                            </tr>
                        </table>
                        <hr></hr>
                        <span>BADGES:</span>
                        <table>
                            <tr>
                                <td><sl-input ref="${this.badgeInput}" class="input-amount" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" type="number" min="1" max="8" value="1"></<sl-input></td>
                                <td><td><sl-button onClick="${(e) => this.takeBadge(e, this)}">Take</sl-button></td></td>
                                <td><sl-button onClick="${(e) => this.giveBadge(e, this)}">Give</sl-button></td>
                            </tr>
                        </table>
                        <hr></hr>
                        <span>EXTRA:</span>
                        <table>
                            <tr>
                                <td><sl-switch onClick="${(e) => this.toggleWalkThroughWalls(e, this)}">Walk Through Walls</sl-switch></td>
                                <td><td><sl-button onClick="${(e) => this.giveRunningShoes(e, this)}">Give Running Shoes</sl-button></td></td>
                            </tr>
                        </table>
                        <hr></hr>
                        <span>FLAGS:</span>
                        <table>
                            <tr>
                                <td>${this.autoCompleteFlags.render()}</td>
                                <td><td><sl-button onClick="${(e) => this.setFlag(e, this)}">Set</sl-button></td></td>
                                <td><sl-button onClick="${(e) => this.clearFlag(e, this)}">Clear</sl-button></td>
                            </tr>
                        </table>
                        <hr></hr>
                        <span>VARS:</span>
                        <table>
                            <tr>
                                <td>${this.autoCompleteVariables.render()}</td>
                                <td><sl-input ref="${this.varValueInput}" class="input-amount" onkeydown="${e => this.handleKeydown(e)}" onfocusin="${() => this.keybindManager.disableInput = true}" onfocusout="${() => this.keybindManager.disableInput = false}" type="number" min="0" value="0"></<sl-input></td>
                                <td><sl-button onClick="${(e) => this.updateVar(e, this)}">Update</sl-button></td>
                            </tr>
                        </table>
                    </div>`;
    }

}

class CoopTab extends Component {

    constructor() {
        super();
        this.id = "coop";
        this.title = "Co-Op";
    }

    render() {
        return html`<div style="color: #d3d3d3;">Coming Soon...</div>`;
    }

}

class SystemTab extends Component {

    constructor(exposedEmulationCore) {
        super();
        this.exposedEmulationCore = exposedEmulationCore;
        this.id = "system";
        this.title = "System";
    }

    // TODO: init these all to the right values from the settings file

    render() {
        return html`<div class="av-controls">
                        <sl-radio-group label="Screen Mode" name="screenMode" value="4">
                            <sl-radio onClick="${() => this.exposedEmulationCore.setVideoFilter_EmulationCore(0)}" value="1">RAW</sl-radio>
                            <sl-radio onClick="${() => this.exposedEmulationCore.setVideoFilter_EmulationCore(1)}" value="2">SCALE</sl-radio>
                            <sl-radio onClick="${() => this.exposedEmulationCore.setVideoFilter_EmulationCore(2)}" value="3">LCD</sl-radio>
                            <sl-radio onClick="${() => this.exposedEmulationCore.setVideoFilter_EmulationCore(3)}" value="4">SUBPIXEL</sl-radio>
                            <sl-radio onClick="${() => this.exposedEmulationCore.setVideoFilter_EmulationCore(4)}" value="5">XBR</sl-radio>
                        </sl-radio-group>
                        <sl-radio-group label="Colour Mode" name="colorMode" value="2">
                            <sl-radio onClick="${() => this.exposedEmulationCore.setColorCorrection_EmulationCore(0)}" value="1">RAW</sl-radio>
                            <sl-radio onClick="${() => this.exposedEmulationCore.setColorCorrection_EmulationCore(1)}" value="2">CC</sl-radio>
                        </sl-radio-group>
                        <sl-input style="max-width:8em;" onmouseup="${e => this.exposedEmulationCore.setTime_EmulationCore(e.target.value)}" type="number" min="0" value="0" label="RTC Offset.">
                            <span slot="suffix">hrs+</span>
                        </<sl-input>
                    </div>`;
    }

}

class HintsTab extends Component {

    constructor(randomiser) {
        super();
        this.id = "hints";
        this.title = "Hints";
        this.randomiser = randomiser;
    }

    displayHint(e, elmnt) {
        let target = document.getElementById(e.getAttribute("data-target"));
        let hint = elmnt.randomiser.getHint(e.getAttribute("data-location"));
        target.innerHTML = hint;
    }

    generateKeybindElements(hintsTab) {

        let table = document.createElement("table");
        table.className = "hint-table";

        Object.entries(hintsTab.randomiser.hintableLocations).forEach(e => {
          let row = table.insertRow(table.rows.length);
      
          let nameCell = row.insertCell(0);
          nameCell.innerHTML = `<td>&nbsp;${e[0]}</td>`;
      
          let buttonCell = row.insertCell(1);
          buttonCell.innerHTML = `<td>&nbsp;<span>Show Hint</span></td>`;
          buttonCell.setAttribute("data-location", e[1]);
          buttonCell.setAttribute("data-target", `hint-table-${e[0].replaceAll(" ", "-")}`)
          buttonCell.setAttribute("onClick", 'window.GBAXG.ui.hintsTab.displayHint(this, window.GBAXG.ui.hintsTab)');
      
          let hintCell = row.insertCell(2);
          hintCell.setAttribute("id", `hint-table-${e[0].replaceAll(" ", "-")}`)
          hintCell.innerHTML = `<td>&nbsp;...</td>`;
        })

        return { __html: table.outerHTML };
    }

    render() {
        return html`<div class="full-solutions-container">
                        <sl-button disabled>Generate Full Solutions</sl-button>
                        <span>(This may take some time)</span>
                    </div>
                    <div dangerouslySetInnerHTML=${this.generateKeybindElements(this)}>                            
                    </div>`;
    }


}