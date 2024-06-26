# Background
I put this together to help a middle school STEM class create an atmospheric monitoring module for a weather balloon using easily programmable, off the shelf parts. All the parts are available from Sparkfun or Amazon (in the case of the DS3231 real time clock) and can be programmed using Microsoft Makecode.

We also created a PCB to connect the parts, though I imagine it could all work with jumper wires.

# Components
## Minimum Components
1. **BBC Micro:bit v2** to control the project. A v1 Micro:bit will also work.
2. **Sparkfun BME280** module with QWIIC connector to read the atmospheric data.
3. **Sparkfun Micro:bit** edge connector with QWIIC conntectors to connect the Micro:bit to the sensors and logger.
4. **Sparkfun Openlog** to log the data to an SD card.
5. **Generic DS3231 module** to keep time.

## Additional Components for PCB
1. **Voltage Regulator.** We used an AMS1117 3.3v regulator. However, an improvement may be to use a switching voltage converter for better battery life. Since the AMS1117 cost less than a dollar and the balloon would only travel for a few hours, we opted for the AMS1117.  
2. **Capacitors** for voltage regulator.
3. **3.5 mm Pitch Screw Terminals.** These are used to hold the wires for the power source.
4. **Female Header Pins.** These are in case you want to easily remove the components.

# Issues with BME280
I initially couldn't get the BME280 to work with the BME280 extenions in Makecode. However, it does work with Sparkfun's `Weatherbit` extension. That extension uses address 0x77, so you'll need to create a solder bridge on the back of the breakout board to change the default address from 0x76.

# PCB Design and Manufacture
The PCB was designed with EasyEDA and manufactured by JLCPCB. EasyEDA's web interface seems fairly easy to use, and it is integrated with JLCPCB which makes the ordering process farily painless. The SMD components were purchased through Digikey and eBay.

# Potential Improvements
1. Add pads to connect other sensors.
2. Add reverse polarity circuit.
3. Add JST connector for power source.

# Code Explanation
In the `on start` block, we initialize the `Weatherbit` library, then redirect serial to pins 0 and 1 on the Micro:bit. Those are, in turn, connected to the RX and TX pins of the Openlog. We then write a single line to be the header of the *.csv* file. If serial is not redirected to the pins, it is possible to write to serial over the USB and read it on a PC using Putty or another program, like Screen or Minicom on Linux, for testing purposes. 

In the `every __` block, the code sets the variable `reading` with the applicable atmospheric readings and then writes the line to serial, and thus to the SD card, once per defined interval. The arithmetic operations are explained on the [Sparkfun site](https://learn.sparkfun.com/tutorials/microclimate-kit-experiment-guide/experiment-1-reading-the-temperature-humidity-and-pressure "Sparkfun's Weatherbit Tutorial").

> Open this page at [https://filledmilk.github.io/microbitweatherbaloon/](https://filledmilk.github.io/microbitweatherbaloon/)

# Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/filledmilk/microbitweatherbaloon** and import

# Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/filledmilk/microbitweatherbaloon** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
