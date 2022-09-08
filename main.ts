pins.analogWritePin(AnalogPin.P0, pins.analogReadPin(AnalogPin.P0))
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 700) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0) / 10)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(1000)
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 500) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0) / 10)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(1000)
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 700 && pins.analogReadPin(AnalogPin.P0) >= 500) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0) / 10)
        basic.pause(2000)
        basic.clearScreen()
        basic.pause(1000)
    }
})
