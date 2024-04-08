# Background
I put this together to help a middle school STEM class create an atmospheric monitoring module for a  weather balloon using easily programmable, off the shelf parts. All the parts are available from Sparkfun or Amazon (in the case of the DS3231 real time clock) and can be programmed using Microsoft Makecode.

We also created a PCP to connect the parts, though I imagine it could all work with jumper wires.

# Components
## Minimum Components
1. BBC Micro:bit v2 to control the project.
2. Sparkfun BME280 module with QWIIC connector to read the atmospheric data.
3. Sparkfun Micro:bit edge connector with QWIIC conntectors to connect the Micro:bit to the sensors and logger.
4. Sparkfun Openlog to log the data to an SD card.
5. Generic DS3231 module to keep time.

## Additional Components for PCB
1. Voltage Regulator. We used an AMS1117 3.3v regulator. However, an improvement may be to use a switching voltage regulator for better battery life.
2. Capacitors for voltage regulator.
3. Screw terminals. These are used to hold the battery wires for the power source.
4. Female Header Pins. These are in case you want to easily remove the components.

# Issues with BME280
I initially couldn't get the BME280 to work BME280 extenions in Makecode. However, it does work with Sparkfun's Weatherbit extension. That extension uses address 0x77, so you'll need to create a solder bridge to change the default address from 0x76.


> Open this page at [https://filledmilk.github.io/microbitweatherbaloon/](https://filledmilk.github.io/microbitweatherbaloon/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/filledmilk/microbitweatherbaloon** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/filledmilk/microbitweatherbaloon** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
