import os
import ipaddress
import wifi
import socketpool
import usb_hid
from adafruit_httpserver import Server, Request, Response, FileResponse, POST
from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keycode import Keycode

#  Set static IP address
ipv4 = ipaddress.IPv4Address("192.168.1.75")
netmask = ipaddress.IPv4Address("255.255.255.0")
gateway = ipaddress.IPv4Address("192.168.1.1")
wifi.radio.set_ipv4_address(ipv4=ipv4, netmask=netmask, gateway=gateway)

#  Connect to your SSID
ssid = os.getenv("WIFI_SSID")
password = os.getenv("WIFI_PASSWORD")
wifi.radio.connect(ssid, password)

pool = socketpool.SocketPool(wifi.radio)

server = Server(pool, "/static", debug=False)
# Allow cross-origin requests.
server.headers = {"Access-Control-Allow-Origin": "*"}

# Set up a keyboard device
kbd = Keyboard(usb_hid.devices)


#  Route default static IP
@server.route("/")
def static(request: Request):
    return FileResponse(request, "/", "/static")


@server.route("/", POST)
def button_press(request: Request):
    #  Get raw text
    raw_text = request.raw_request.decode("utf8")
    # If a button is pressed
    if "previous" in raw_text:
        kbd.send(Keycode.ALT, Keycode.LEFT_ARROW)
    if "next" in raw_text:
        kbd.send(Keycode.SHIFT, Keycode.N)
    if "theater" in raw_text:
        kbd.send(Keycode.T)
    if "volumedown" in raw_text:
        kbd.send(Keycode.DOWN_ARROW)
    if "volumeup" in raw_text:
        kbd.send(Keycode.UP_ARROW)
    if "mute" in raw_text:
        kbd.send(Keycode.M)
    if "subtitles" in raw_text:
        kbd.send(Keycode.C)
    if "play" in raw_text:
        kbd.send(Keycode.K)
    if "fullscreen" in raw_text:
        kbd.send(Keycode.F)
    if "rewind" in raw_text:
        kbd.send(Keycode.LEFT_ARROW)
    if "forward" in raw_text:
        kbd.send(Keycode.RIGHT_ARROW)
    if "miniplayer" in raw_text:
        kbd.send(Keycode.I)

    return Response(request)


server.serve_forever(str(wifi.radio.ipv4_address))
