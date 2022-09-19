/**
 * Requires:    - CommandExecutor.js
 *              - ButtonCommands.js
 *              - gamecontroller.js
 */

gameControl.on('connect', gamepad => { 

    for (var i = 0; i < gamepad.buttons; i++) {
        const btnRef = "button" + i;
        gamepad.before("button" + i, () => doInput(btnRef, true, true));
        gamepad.after("button" + i, () => doInput(btnRef, false, true));
    }

    for (var i = 0; i < gamepad.axes; i++) {

        const upRef = "up" + i;
        gamepad.before("up" + i, () => doInput(upRef, true, true));
        gamepad.after("up" + i, () => doInput(upRef, false, true));

        const downRef = "down" + i;
        gamepad.before("down" + i, () => doInput(downRef, true, true));
        gamepad.after("down" + i, () => doInput(downRef, false, true));

        const leftRef = "left" + i;
        gamepad.before("left" + i, () => doInput(leftRef, true, true));
        gamepad.after("left" + i, () => doInput(leftRef, false, true));

        const rightRef = "right" + i;
        gamepad.before("right" + i, () => doInput(rightRef, true, true));
        gamepad.after("right" + i, () => doInput(rightRef, false, true));
    }

});



// Controller.search({
//     settings: {
//         useAnalogAsDpad: "both"
//     }
// });
// window.addEventListener('gc.button.press', e => doInput(e.detail.name, true, true), false);
// window.addEventListener('gc.button.release', e => doInput(e.detail.name, false, true), false);


// joypad.set({
//     axisMovementThreshold: 0.3,
// });
// joypad.on('connect', e => console.log(e));
// joypad.on('button_press', e => doInput(e.detail, true, true));
// joypad.on('button_release', e => doInput(e.detail.name, false, true));
// joypad.on('axis_move', e => {
//     console.log(e.detail);
// });