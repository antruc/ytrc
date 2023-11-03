# ytrc

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Static Badge](https://img.shields.io/badge/icons-Lucide-red?color=f56565)](https://github.com/lucide-icons/lucide)

Remote control for Youtube using CircuitPython

# Getting Started

[Download](https://circuitpython.org/downloads) and [install](https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython) CircuitPython on a microcontroller board with WiFi capabilities (like Raspberry Pi Pico W)

Also install [Adafruit_CircuitPython_HTTPServer](https://github.com/adafruit/Adafruit_CircuitPython_HTTPServer) and [Adafruit_CircuitPython_HID](https://github.com/adafruit/Adafruit_CircuitPython_HID) libraries. Both need to be inside the *lib* directory of your microcontroller

Copy `code.py` and `settings.toml` files from this repository to your board

Change the properties inside settings:
```
WIFI_SSID = "YOUR_WIFI_SSID"
WIFI_PASSWORD = "YOUR_WIFI_PASSWORD"
```

# Build Client
```
npm install
npm run build
```
Then copy *static* folder to your board as well

# Usage

Connected to the same WiFi network, in another device go to http://192.168.1.75 while having a Youtube video open in your browser and simply control the video player from the web app
