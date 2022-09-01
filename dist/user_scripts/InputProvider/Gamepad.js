/**
 * Requires:    - CommandExecutor.js
 *              - ButtonCommands.js
 *              - gamecontroller.js
 */

// gameControl.on('connect', gamepad => { 

//     gamepad.before('r1'      , () => { CommandExecutor.execute("RKeyDown"     )  });
//     gamepad.after ('r1'      , () => { CommandExecutor.execute("RKeyUp"       )  });
 
//     gamepad.before('l1'      , () => { CommandExecutor.execute("LKeyDown"     )  });
//     gamepad.after ('l1'      , () => { CommandExecutor.execute("LKeyUp"       )  });
 
//     gamepad.before('start'   , () => { CommandExecutor.execute("StartKeyDown" )  });
//     gamepad.after ('start'   , () => { CommandExecutor.execute("StartKeyUp"   )  });
 
//     gamepad.before('select'  , () => { CommandExecutor.execute("SelectKeyDown")  });
//     gamepad.after ('select'  , () => { CommandExecutor.execute("SelectKeyUp"  )  });
 
//     gamepad.before('button2' , () => { CommandExecutor.execute("AKeyDown"     )  });
//     gamepad.after ('button2' , () => { CommandExecutor.execute("AKeyUp"       )  });
 
//     gamepad.before('button1' , () => { CommandExecutor.execute("BKeyDown"     )  });
//     gamepad.after ('button1' , () => { CommandExecutor.execute("BKeyUp"       )  });

//     /* Analog Stick */

//     gamepad.before('up0'     , () => { CommandExecutor.execute("UpKeyDown"    )  });
//     gamepad.after ('up0'     , () => { CommandExecutor.execute("UpKeyUp"      )  });

//     gamepad.before('down0'   , () => { CommandExecutor.execute("DownKeyDown"  )  });
//     gamepad.after ('down0'   , () => { CommandExecutor.execute("DownKeyUp"    )  });

//     gamepad.before('left0'   , () => { CommandExecutor.execute("LeftKeyDown"  )  });
//     gamepad.after ('left0'   , () => { CommandExecutor.execute("LeftKeyUp"    )  });

//     gamepad.before('right0'  , () => { CommandExecutor.execute("RightKeyDown" )  });
//     gamepad.after ('right0'  , () => { CommandExecutor.execute("RightKeyUp"   )  });
// });

/* TODO: Add re-binding capabilities */

Controller.search({
    settings: {
        useAnalogAsDpad: "both"
    }
});

window.addEventListener('gc.button.press', e => doInput(e.detail.name, true, true), false);
window.addEventListener('gc.button.release', e => doInput(e.detail.name, false, true), false);


