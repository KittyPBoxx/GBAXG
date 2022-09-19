const DEFAULT_KEYBIND_CONFIG_PATH = "Config/Keybind-Config.json";

const DEFAULT_KEYBIND_CONFIG = 
`[
    {"type": "exec"  , "command": "toggleMenu", "kbd":"Escape", "gmpd": null      }, 
    {"type": "exec"  , "command": "SpeedUp"   , "kbd":"Space" , "gmpd": null      },
    {"type": "exec"  , "command": "Restart"   , "kbd":"KeyR"  , "gmpd": null      },
    {"type": "button", "command": "AKey"      , "kbd":"KeyK"  , "gmpd": "button2" },
    {"type": "button", "command": "BKey"      , "kbd":"KeyL"  , "gmpd": "button1" },
    {"type": "button", "command": "LKey"      , "kbd":"KeyU"  , "gmpd": "button4" },
    {"type": "button", "command": "RKey"      , "kbd":"KeyP"  , "gmpd": "button5" },
    {"type": "button", "command": "UpKey"     , "kbd":"KeyW"  , "gmpd": "up0"     },
    {"type": "button", "command": "DownKey"   , "kbd":"KeyS"  , "gmpd": "down0"   },
    {"type": "button", "command": "LeftKey"   , "kbd":"KeyA"  , "gmpd": "left0"   },
    {"type": "button", "command": "RightKey"  , "kbd":"KeyD"  , "gmpd": "right0"  },
    {"type": "button", "command": "StartKey"  , "kbd":"KeyI"  , "gmpd": "button12"},
    {"type": "button", "command": "SelectKey" , "kbd":"KeyO"  , "gmpd": "button9" }
]`;