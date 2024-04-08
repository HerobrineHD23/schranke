let Winkel = 0
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    Winkel += pins.digitalReadPin(DigitalPin.P1)
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    Winkel += pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
	
})
