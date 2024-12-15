const strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)

function updateLights(position: number) {
    strip.clear()
    for (let i = 0; i < strip.length(); i++) {
        if ((i + position) % 2 === 0) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Blue))
        }
    }
    strip.show()
}

let position = 0
let direction = 1 

basic.forever(function () {
    updateLights(position)

    position += direction
    if (position <= 0 || position >= strip.length() - 1) {
        direction *= -1 
    }

    basic.pause(100)
})
