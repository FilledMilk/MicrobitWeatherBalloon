temperature = weatherbit.temperature()

def on_forever():
    basic.show_number(temperature)
basic.forever(on_forever)
