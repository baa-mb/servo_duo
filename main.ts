input.onButtonPressed(Button.A, function () {
    automat = 1
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
    }
    automat = 0
})
