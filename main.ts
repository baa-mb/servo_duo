input.onButtonPressed(Button.A, function () {
    automat = 1
})
input.onButtonPressed(Button.AB, function () {
    automat = 0
})

radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
        automat = 1
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "B") {
        basic.showString("B")
        automat = 2
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_B,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else if (receivedString == "AB") {
        basic.showString("-")
        automat = 0
        control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_AB,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )

    }

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
    if (automat == 1) {
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
    }
    if (automat == 2) {
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
})
