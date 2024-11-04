input.onButtonPressed(Button.A, function () {
    automat = 1
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
        radio.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    }
})
input.onButtonPressed(Button.B, function () {
    automat = 0
})
let automat = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `)
automat = 0
radio.setGroup(24)
basic.forever(function () {
    if (automat) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        for (let i = 0; i <= 6; i++) {
            pins.servoWritePin(AnalogPin.P0, 180 - 30 * i)
            basic.pause(1000)
        }
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
        for (let i = 0; i <= 6; i++) {
            pins.servoWritePin(AnalogPin.P1, 180 - 30 * i)
            basic.pause(2000)
        }
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
    automat = 0
})
