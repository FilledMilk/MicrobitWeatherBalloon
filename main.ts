input.onButtonPressed(Button.A, function () {
    serial.writeLine(reading)
})
let reading = ""
weatherbit.startWeatherMonitoring()
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(100)
serial.writeString("Temperature")
serial.writeString(",")
serial.writeString("Pressure")
serial.writeString(",")
serial.writeString("Humidity")
serial.writeString(",")
serial.writeString("Altitude")
serial.writeString(",")
serial.writeString("Date")
serial.writeString(",")
serial.writeString("Time")
serial.writeLine("")
loops.everyInterval(1000, function () {
    reading = "" + weatherbit.temperature() / 100 + "," + weatherbit.pressure() / 25600 + "," + weatherbit.humidity() / 1024 + "," + weatherbit.altitude() + "," + DS3231.date() + "," + ("" + DS3231.hour() + ":" + DS3231.minute() + ":" + DS3231.second())
    serial.writeLine(reading)
})
basic.forever(function () {
	
})
