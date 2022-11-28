"use strict";
/*
 Copyright (C) 2012-2019 Grant Galitz

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function registerGUIEvents() {

    addEvent("change", document.getElementById("fr_rom_load"), e => {
        fileLoadROM(e.target.files, "FR")

        if (document.getElementById("FRAutoInit").checked) {
            document.getElementById("c_btn").classList.add("disabled");
            document.getElementById("e_btn").classList.add("disabled");
            document.getElementById("play").classList.add("disabled"); 
            document.getElementById("fr-status").innerHTML = "(Initialising...)";  
    
            doSaveStateInit("FR");
        } else {
            document.getElementById("play").classList.remove("disabled");  
            document.getElementById("fr-status").innerHTML = "(Ready)";  
        }
    });
    addEvent("change", document.getElementById("c_rom_load"), e => {
        fileLoadROM(e.target.files, "C")

        if (document.getElementById("CAutoInit").checked) {
            document.getElementById("fr_btn").classList.add("disabled");
            document.getElementById("e_btn").classList.add("disabled");
            document.getElementById("play").classList.add("disabled"); 
            document.getElementById("c-status").innerHTML = "(Initialising...)";  

            doSaveStateInit("C");
        } else {
            document.getElementById("play").classList.remove("disabled");  
            document.getElementById("c-status").innerHTML = "(Ready)";  
        }
    });
    addEvent("change", document.getElementById("e_rom_load"), e => {
        fileLoadROM(e.target.files, "E")
        
        if (document.getElementById("EAutoInit").checked) {
            document.getElementById("fr_btn").classList.add("disabled");
            document.getElementById("c_btn").classList.add("disabled");
            document.getElementById("play").classList.add("disabled"); 
            document.getElementById("e-status").innerHTML = "(Initialising...)";  

            doSaveStateInit("E");
        } else {
            document.getElementById("play").classList.remove("disabled");  
            document.getElementById("e-status").innerHTML = "(Ready)";  
        }
    });
    addEvent("change", document.getElementById("bios_load"), fileLoadBIOS);
  
    IodineGUI.Iodine.attachPlayStatusHandler(updatePlayButton);
    addEvent("click", document.getElementById("play"), () => {
        document.getElementById("emulator_target").style.visibility = "visible";
        toggleMenu(); 
        IodineGUI.Iodine.enableAudio();
        IodineGUI.Iodine.audio.volume = 0.1;
        initAndStart();
    });
    addEvent("click", document.getElementById("reset"), () => {
        toggleMenu();
        IodineGUI.Iodine.NEXT_ROM = IodineGUI.Iodine.IOCore.cartridge.romCode;
        restartFromLastSave();
    });
    addEvent("click", document.getElementById("eraseAll"), () => {
        localStorage.clear();
        storageManager.delete("lastLoadedRom");

        storageManager.delete("LATEST");

        storageManager.delete("MS1");
        storageManager.delete("MS2");
        storageManager.delete("MS3");

        document.getElementById("saveState1Preiew").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        document.getElementById("saveState2Preiew").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        document.getElementById("saveState3Preiew").src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

        storageManager.delete("SSFR");
        storageManager.delete("SSC");
        storageManager.delete("SSE").then(() => location.reload(), () => location.reload());
    });
    addEvent("click", document.getElementById("eraseKeybinds"), () => {
        storageManager.delete("keybinds").then(() => location.reload(), () => location.reload());
    });

    addEvent("click", document.getElementById("exportLastSave"), () => exportLastSaveData());
    addEvent("change", document.getElementById("latest_save_load"), importLastSaveData);

    /* SEASON BUTTONS */
    addEvent("click", document.getElementById("spring"), () => {
        document.querySelectorAll(".season").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getMonth = () => { return 4; }
        document.getElementById("spring").classList.add("active");
    });
    addEvent("click", document.getElementById("summer"), () => {
        document.querySelectorAll(".season").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getMonth = () => { return 7; }
        document.getElementById("summer").classList.add("active");
    });
    addEvent("click", document.getElementById("autumn"), () => {
        document.querySelectorAll(".season").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getMonth = () => { return 10; }
        document.getElementById("autumn").classList.add("active");
    });
    addEvent("click", document.getElementById("winter"), () => {
        document.querySelectorAll(".season").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getMonth = () => { return 1; }
        document.getElementById("winter").classList.add("active");
    });

    /* TIME BUTONS */
    addEvent("click", document.getElementById("sunrise"), () => {
        document.querySelectorAll(".time").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getHour = () =>  { return 6; }
        document.getElementById("sunrise").classList.add("active");
    });
    addEvent("click", document.getElementById("day"), () => {
        document.querySelectorAll(".time").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getHour = () =>  { return 13; }
        document.getElementById("day").classList.add("active");
    });
    addEvent("click", document.getElementById("sunset"), () => {
        document.querySelectorAll(".time").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getHour = () =>  { return 18; }
        document.getElementById("sunset").classList.add("active");
    });
    addEvent("click", document.getElementById("night"), () => {
        document.querySelectorAll(".time").forEach(e => e.classList.remove("active"));
        GameBoyAdvanceRTC.prototype.getHour = () =>  { return 23; }
        document.getElementById("night").classList.add("active");
    });

    /* SYSTEM TIME TOGGLE */
    addEvent("click", document.getElementById("systemTimeCheckbox"), () => {
        const shouldUseSystemTime = document.getElementById("systemTimeCheckbox").checked;
        GameBoyAdvanceRTC.prototype.useSystemTime = () =>  { return shouldUseSystemTime; }
    });


    addEvent("click", document.getElementById("enableWarpsCheckbox"), () => {
        randomWarpsEnabled = document.getElementById("enableWarpsCheckbox").checked;
    })


    addEvent("click", document.getElementById("disableWalls"), () => {
        walkThroughWalls = document.getElementById("disableWalls").checked;
    });

    document.querySelectorAll(".speedup").forEach(e => {
        addEvent("click", e, () => {
            document.querySelectorAll(".speedup").forEach(e => e.classList.remove("active"));
            speedUpSpeed = e.getAttribute("data-value");
            e.classList.add("active")
            IodineGUI.Iodine.setSpeed(IodineGUI.Iodine.getSpeed() == 1 ? 1 : speedUpSpeed)
        })
    });


    addEvent("click", document.getElementById("current_manual"), () => {
        IodineGUI.Iodine.saveStateManager.loadMultiState("LATEST");
        toggleMenu(); 
    });
    addEvent("click", document.getElementById("current"), () => {
        loadedAndStarted = false;
        initAndStart();
    });
    addEvent("click", document.getElementById("exitFR"), () => {
        loadedAndStarted = false;
        delayedSaveStateLoad("FR");
    });
    addEvent("click", document.getElementById("exitC"), () => {
        loadedAndStarted = false;
        delayedSaveStateLoad("C");
    });
    addEvent("click", document.getElementById("exitE"), () => {
        loadedAndStarted = false;
        delayedSaveStateLoad("E");
    });


    addEvent("click", document.getElementById("saveState1Save"), () => {
        let preview = IodineGUI.Iodine.saveStateManager.saveMultiState("MS1").preview;
        document.getElementById("saveState1Preiew").src = preview;
    });
    addEvent("click", document.getElementById("saveState1Load"), () => {
        IodineGUI.Iodine.saveStateManager.loadMultiState("MS1");
        toggleMenu(); 
    });
    addEvent("click", document.getElementById("saveState2Save"), () => {
        let preview = IodineGUI.Iodine.saveStateManager.saveMultiState("MS2").preview;
        document.getElementById("saveState2Preiew").src = preview;
    });
    addEvent("click", document.getElementById("saveState2Load"), () => {
        IodineGUI.Iodine.saveStateManager.loadMultiState("MS2");
        toggleMenu(); 
    });
    addEvent("click", document.getElementById("saveState3Save"), () => {
        let preview = IodineGUI.Iodine.saveStateManager.saveMultiState("MS3").preview;
        document.getElementById("saveState3Preiew").src = preview;
    });
    addEvent("click", document.getElementById("saveState3Load"), () => {
        IodineGUI.Iodine.saveStateManager.loadMultiState("MS3");
        toggleMenu(); 
    });

    addEvent("click", document.getElementById("remapWarps"), () => {
        let seed = document.getElementById("input_seed_text").value;
        mapWarps(seed);
        M.toast({html: warpList.size + ' warps were mapped', displayLength:1000});
    });

    addEvent("click", document.getElementById("export_mapping"), () => exportMapping());

    addEvent("change", document.getElementById("import_mapping"), importMapping);

    addEvent("click", document.getElementById("FRShown"), () => {
        let elmnt = document.getElementById("fr-group");
        elmnt.classList.contains("hide") ? elmnt.classList.remove("hide") : elmnt.classList.add("hide");
    });

    addEvent("click", document.getElementById("CShown"), () => {
        let elmnt = document.getElementById("c-group");
        elmnt.classList.contains("hide") ? elmnt.classList.remove("hide") : elmnt.classList.add("hide");
    });

    addEvent("click", document.getElementById("EShown"), () => {
        let elmnt = document.getElementById("e-group");
        elmnt.classList.contains("hide") ? elmnt.classList.remove("hide") : elmnt.classList.add("hide");
    });

    addEvent("click", document.getElementById("FRBoot"), () => {
        IodineGUI.NEXT_ROM = "FR";
        document.querySelectorAll(".bootRadio").forEach(e => e.removeAttribute("checked"));
        document.getElementById("FRBoot").setAttribute("checked", true);
    });

    addEvent("click", document.getElementById("CBoot"), () => {
        IodineGUI.NEXT_ROM = "C";
        document.querySelectorAll(".bootRadio").forEach(e => e.removeAttribute("checked"));
        document.getElementById("CBoot").setAttribute("checked",  true);
    });

    addEvent("click", document.getElementById("EBoot"), () => {
        IodineGUI.NEXT_ROM = "E";
        document.querySelectorAll(".bootRadio").forEach(e => e.removeAttribute("checked"));
        document.getElementById("EBoot").setAttribute("checked", true);
    });

    addEvent("click", document.getElementById("opts"), () => {
        let elmnt = document.getElementById("opts-table");
        elmnt.classList.contains("hide") ? elmnt.classList.remove("hide") : elmnt.classList.add("hide");
    });

    addEvent("click", document.getElementById("addToBag"), () => {
        let itemName = document.getElementById("autocomplete-items").value;
        let quant = document.getElementById("item-quantity-input").value;
        let item = ITEM_DATA[itemName];

        let bag = new BagStoreage();
        bag.readData(IodineGUI.Iodine.IOCore.cartridge.romCode);

        switch(item.pocket) {
            case "balls"    : bag.ballItemPocket.set(item.number, quant); break;
            case "item"     : bag.itemPocket.set(item.number, quant); break;
            case "berries " : bag.berryPocket.set(item.number, quant); break;
            case "key"      : bag.keyItemsPocket.set(item.number, quant); break;
            case "tmhm"     : bag.tmCase.set(item.number, quant); break;
        }

        bag.writeData(IodineGUI.Iodine.IOCore.cartridge.romCode);
    });

    addEvent("click", document.getElementById("item-quantity-input-inc"), () => incNumeric("item-quantity-input"));
    addEvent("click", document.getElementById("item-quantity-input-dec"), () => decNumeric("item-quantity-input"));

    document.getElementById("item-quantity-input").addEventListener('input', (e) => {
        let elmnt = e.target;
        let value = elmnt.value;
        let newValue = Math.max(+value, elmnt.getAttribute("min"));
        newValue = Math.min(+value, elmnt.getAttribute("max"));
        elmnt.setAttribute("value", newValue)
        elmnt.value = newValue;
    });

    addEvent("click", document.getElementById("autoBike"), () => {
        autoBike = document.getElementById("autoBike").checked;
    });

    addEvent("click", document.getElementById("forceWalk"), () => forcePlayerState(MOVEMENT_MODE_WALK));
    addEvent("click", document.getElementById("forceBike"), () => forcePlayerState(MOVEMENT_MODE_BIKE));
    addEvent("click", document.getElementById("forceSurf"), () => forcePlayerState(MOVEMENT_MODE_SURF));
    addEvent("click", document.getElementById("forceWhiteout"), () => whiteoutTeam());

    addEvent("click", document.getElementById("bank-value-input-inc"), () => incNumeric("bank-value-input"));
    addEvent("click", document.getElementById("bank-value-input-dec"), () => decNumeric("bank-value-input"));

    addEvent("click", document.getElementById("map-value-input-inc"), () => incNumeric("map-value-input"));
    addEvent("click", document.getElementById("map-value-input-dec"), () => decNumeric("map-value-input"));

    addEvent("click", document.getElementById("warp-value-input-inc"), () => incNumeric("warp-value-input"));
    addEvent("click", document.getElementById("warp-value-input-dec"), () => decNumeric("warp-value-input"));

    addEvent("click", document.getElementById("overrideNextWarp"), () => {
        let game = document.getElementById("game-value-input").value;
        let bank = document.getElementById("bank-value-input").value;
        let map = document.getElementById("map-value-input").value;
        let warp = document.getElementById("warp-value-input").value;
        forceNextWarp = game + "," + bank + "," + map + "," + warp;
    });

    addEvent("resize", window, resizeCanvasFunc);

    //Run on init as well:
    storageManager.find("RANDOM_MAPPING", () => {
        document.getElementById("input_seed_text").value = "KITTY";
        mapWarps("KITTY");
    }).then(warpListData => {
        if (warpListData) updateWarpListData(warpListData)
    });    

    resizeCanvasFunc();
}
function registerDefaultSettings() {

}
function saveKeyBindings() {
    setValue("key_a", IodineGUI.defaults.keyZonesGBA[0] | 0);
    setValue("key_b", IodineGUI.defaults.keyZonesGBA[1] | 0);
    setValue("key_select", IodineGUI.defaults.keyZonesGBA[2] | 0);
    setValue("key_start", IodineGUI.defaults.keyZonesGBA[3] | 0);
    setValue("key_right", IodineGUI.defaults.keyZonesGBA[4] | 0);
    setValue("key_left", IodineGUI.defaults.keyZonesGBA[5] | 0);
    setValue("key_up", IodineGUI.defaults.keyZonesGBA[6] | 0);
    setValue("key_down", IodineGUI.defaults.keyZonesGBA[7] | 0);
    setValue("key_r", IodineGUI.defaults.keyZonesGBA[8] | 0);
    setValue("key_l", IodineGUI.defaults.keyZonesGBA[9] | 0);
    setValue("key_volumedown", IodineGUI.defaults.keyZonesControl[0] | 0);
    setValue("key_volumeup", IodineGUI.defaults.keyZonesControl[1] | 0);
    setValue("key_speedup", IodineGUI.defaults.keyZonesControl[2] | 0);
    setValue("key_slowdown", IodineGUI.defaults.keyZonesControl[3] | 0);
    setValue("key_speedreset", IodineGUI.defaults.keyZonesControl[4] | 0);
    setValue("key_fullscreen", IodineGUI.defaults.keyZonesControl[5] | 0);
    setValue("key_playpause", IodineGUI.defaults.keyZonesControl[6] | 0);
    setValue("key_restart", IodineGUI.defaults.keyZonesControl[7] | 0);
}

function updatePlayButton(isPlaying) {
    isPlaying = isPlaying | 0;
    if ((isPlaying | 0) == 1) {
        //document.getElementById("play").className = "hide";
        //document.getElementById("pause").className = "show";
        //document.getElementById("menu").className = "playing";
        if (!IodineGUI.coreTimerID) {
            startTimer();
        }
        IodineGUI.isPlaying = true;
    }
    else {
        //document.getElementById("pause").className = "hide";
        //document.getElementById("play").className = "show";
        //document.getElementById("menu").className = "paused";
        if (IodineGUI.coreTimerID) {
            clearInterval(IodineGUI.coreTimerID);
            IodineGUI.coreTimerID = null;
        }
        IodineGUI.isPlaying = false;
    }
}
function visibilityChangeHandle() {
    //processVisibilityChange(document.hidden);
}
function mozVisibilityChangeHandle() {
    //processVisibilityChange(document.mozHidden);
}
function msVisibilityChangeHandle() {
    //processVisibilityChange(document.msHidden);
}
function webkitVisibilityChangeHandle() {
    //processVisibilityChange(document.webkitHidden);
}
function processVisibilityChange(isHidden) {
    // if (!isHidden) {
    //     if (IodineGUI.suspended) {
    //         IodineGUI.suspended = false;
    //         IodineGUI.Iodine.play();
    //     }
    // }
    // else {
    //     if (document.getElementById("play").className == "hide") {
    //         IodineGUI.Iodine.pause();
    //         IodineGUI.suspended = true;
    //     }
    // }
}
function stepVolume(delta) {
    var volume = document.getElementById("volume").value / 100;
    volume = Math.min(Math.max(volume + delta, 0), 1);
    IodineGUI.mixerInput.setVolume(volume);
    document.getElementById("volume").value = Math.round(volume * 100);
}
function volChangeFunc() {
    var volume = Math.min(Math.max(parseInt(this.value), 0), 100) * 0.01;
    setValue("volume", +volume);
    IodineGUI.mixerInput.setVolume(+volume);
};
function speedChangeFunc() {
    var speed = Math.min(Math.max(parseInt(this.value), 0), 100) / 50;
    speed = speed * speed;
    IodineGUI.Iodine.setSpeed(+speed);
}
function writeRedTemporaryText(textString) {
    // if (IodineGUI.GUITimerID) {
    //     clearTimeout(IodineGUI.GUITimerID);
    // }
    // document.getElementById("tempMessage").style.display = "block";
    // document.getElementById("tempMessage").textContent = textString;
    // IodineGUI.GUITimerID = setTimeout(clearTempString, 5000);
}
function clearTempString() {
    document.getElementById("tempMessage").style.display = "none";
}
function resizeCanvasFunc() {
    var container = document.getElementById("main");
    var containerHeight = container.clientHeight || container.offsetHeight || 0;
    var containerWidth = container.clientWidth || container.offsetWidth || 0;
    if (containerHeight > 0 && containerWidth > 0) {
        var canvas = document.getElementById("emulator_target");
        var maxWidth = Math.floor(containerHeight * 1.5);
        var maxHeight = Math.floor(containerWidth / 1.5);
        var height = Math.min(maxHeight, containerHeight);
        var width = Math.min(maxWidth, containerWidth);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }
}
function rebuildSavesMenu(e) {
    // if (didNotEnter(document.getElementById("saves_menu_container"), e)) {
    //     ExportSave();
    //     rebuildExistingSaves();
    //     if (e.preventDefault) {
    //        e.preventDefault();
    //     }
    // }
}
function rebuildExistingSaves() {
    // var menu = document.getElementById("existing_saves_list");
    // ExportSave();
    // removeChildNodes(menu);
    // var keys = getSavesKeys();
    // while (keys.length > 0) {
    //     addExistingSaveItem(menu, keys.shift());
    // }
}
function addExistingSaveItem(menu, key) {
    var listItem = document.createElement("li");
    listItem.className = "nowrap";
    var spanItem = document.createElement("span");
    spanItem.textContent = decodeKeyType(key);
    listItem.appendChild(spanItem);
    var submenu = document.createElement("ul");
    var submenuItem = document.createElement("li");
    submenuItem.className = "nowrap";
    addEvent("click", submenuItem, function () {
        deleteValue(key);
        rebuildExistingSaves();
    });
    var submenuSpan = document.createElement("span");
    submenuSpan.textContent = "Delete";
    submenuItem.appendChild(submenuSpan);
    submenu.appendChild(submenuItem);
    var submenuItem2 = document.createElement("li");
    submenuItem2.className = "nowrap";
    var link1 = document.createElement("a");
    link1.href = "data:application/octet-stream;base64," + base64(generateBlob(key, findValue(key)));
    link1.download = key + "_" + ((new Date()).getTime()) + ".export";
    link1.textContent = "Download as import compatible";
    submenuItem2.appendChild(link1);
    submenu.appendChild(submenuItem2);
    var submenuItem3 = document.createElement("li");
    submenuItem3.className = "nowrap";
    var link2 = document.createElement("a");
    //Saves are already encoded in base64:
    link2.href = "data:application/octet-stream;base64," + findValue(key);
    link2.download = key + "_" + ((new Date()).getTime()) + ".sav";
    link2.textContent = "Download as raw binary";
    submenuItem3.appendChild(link2);
    submenu.appendChild(submenuItem3);
    listItem.appendChild(submenu);
    menu.appendChild(listItem);
}
function decodeKeyType(key) {
    if (key.substring(0, 15) == "SAVE_TYPE_GUID_") {
        return "Game \"" + key.substring(15) + "\" Type Code";
    }
    else if (key.substring(0, 10) == "SAVE_GUID_") {
        return "Game \"" + key.substring(10) + "\" Cartridge Data";
    }
    else if (key.substring(0, 15) == "SAVE_RTC_GUID_") {
        return "Game \"" + key.substring(15) + "\" RTC Data";
    }
    return key;
}
//Some wrappers and extensions for non-DOM3 browsers:
function removeChildNodes(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
function didNotEnter(oElement, event) {
    var target = (typeof event.target != "undefined") ? event.target : event.srcElement;
    while (target) {
        if (isSameNode(target, oElement)) {
            return false;
        }
        target = target.parentElement;
    }
	return true;
}
function isSameNode(oCheck1, oCheck2) {
	return (typeof oCheck1.isSameNode == "function") ? oCheck1.isSameNode(oCheck2) : (oCheck1 === oCheck2);
}
function addEvent(sEvent, oElement, fListener) {
    try {
        oElement.addEventListener(sEvent, fListener, false);
    }
    catch (error) {
        oElement.attachEvent("on" + sEvent, fListener);    //Pity for IE.
    }
}
function removeEvent(sEvent, oElement, fListener) {
    try {
        oElement.removeEventListener(sEvent, fListener, false);
    }
    catch (error) {
        oElement.detachEvent("on" + sEvent, fListener);    //Pity for IE.
    }
}
function incNumeric(id) {
    let elmnt = document.getElementById(id);
    let max = elmnt.getAttribute("max");
    let value = elmnt.getAttribute("value");
    let newValue = Math.min(+value + 1, max);
    elmnt.setAttribute("value", newValue)
    elmnt.value = newValue;
}
function decNumeric(id) {
    let elmnt = document.getElementById(id);
    let min = elmnt.getAttribute("min");
    let value = elmnt.getAttribute("value");
    let newValue = Math.max(+value - 1, min);
    elmnt.setAttribute("value", newValue)
    elmnt.value = newValue;
}