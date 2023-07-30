class ExposedEmulationCore {

    constructor() {
        this.lastSetGame = "FR";
    }

    pause_EmualationCore() {
        _Pause();
    }
    
    play_EmualationCore() {
        _Play();
    }
    
    reset_EmualationCore() {
        _Reset();
    }

    setTime_EmulationCore(hour) {
        console.log("timeUpdates");
        _UpdateHour(hour);
    }
    
    /**
     * If state is -1 then no save state will be auto loaded
     */
    setGame_EmulationCore(game, state) {
    
        let gameValue = 0;
        this.lastSetGame = this.lastSetGame;
    
        if (game == "FR") {
            gameValue = 0;
        } else if (game == "C") {
            gameValue = 1;
        } else if (game == "E") {
            gameValue = 2;
        }
    
        _SetGame(gameValue, state);
    }

    getGame_EmulationCore() {

        let game = _GetGame();

        if (game == 0) {
            return "FR";
        } else if (game == 1) {
            return "C";
        } else if (game == 2) {
            return "E";
        }

    }

    saveState_EmulationCore(slot) {
        _SaveState(slot);
    } 

    loadState_EmulationCore(game, slot) {
        this.setGame_EmulationCore(game, slot);
    }
    
    readCpu32_EmulationCore(address) {
        return _ReadRam32(address);
    }
    
    readCpu16_EmulationCore(address) {
        return _ReadRam16(address);
    }
    
    readCpu8_EmulationCore(address) {
        return _ReadRam8(address);
    }
    
    writeCpu32_EmulationCore(address, data) {
        _RamWrite32(address, data);
    }
    
    writeCpu16_EmulationCore(address, data) {
        _RamWrite16(address, data);
    }
    
    writeCpu8_EmulationCore(address, data) {
        _RamWrite8(address, data);
    }
    
    setSpeed_EmulationCore(speed) {
        _SetSpeedUp(speed);
    }
    
    getSpeed_EmulationCore() {
        return _GetSpeedUp();
    }

    increaseVolume_EmulationCore() {
        _IncreaseVolume();
    }
    
    decreaseVolume_EmulationCore() {
        _DecreaseVolume();
    }
    
    setVideoFilter_EmulationCore(filter) {
        //0: none, 1: lcd, 2: lcd+subpixels, 3: upscale, 4: xbr
        _SetVideoFilter(filter)
    }
    
    setColorCorrection_EmulationCore(correction) {
        _SetColorCorrection(correction);
    }

    hideGame_EmulationCore() {
        _HideGame();
    }

    showGame_EmulationCore() {
        _ShowGame();
    }
    
    /* Keys*/
    
    KeyDown_EmulationCore(key) {
    
        switch(key) {
            case 0:
                _AKeyDown();
                break;
            case 1:
                _BKeyDown();
                break;
            case 2:
                _SelectKeyDown();
                break;
            case 3:
                _StartKeyDown();
                break;
            case 4: 
                _DRightKeyDown();
                break;
            case 5:
                _DLeftKeyDown();
                break;
            case 6: 
                _DUpKeyDown();
                break;
            case 7:
                _DDownKeyDown();
                break;
            case 8:
                _RKeyDown();
                break;
            case 9:
                _LKeyDown();
                break;        
        }
    }
    
    KeyUp_EmulationCore(key) {
    
        switch(key) {
            case 0:
                _AKeyUp();
                break;
            case 1:
                _BKeyUp();
                break;
            case 2:
                _SelectKeyUp();
                break;
            case 3:
                _StartKeyUp();
                break;
            case 4: 
                _DRightKeyUp();
                break;
            case 5:
                _DLeftKeyUp();
                break;
            case 6: 
                _DUpKeyUp();
                break;
            case 7:
                _DDownKeyUp();
                break;
            case 8:
                _RKeyUp();
                break;
            case 9:
                _LKeyUp();
                break;        
        }
    }
}

export default ExposedEmulationCore;