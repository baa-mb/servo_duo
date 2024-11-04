basic.showIcon(IconNames.Yes)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
})
