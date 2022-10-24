let count = 0
let count2 = 0
let count4 = 0
let count3 = 0
input.onButtonPressed(Button.A, function () {
    count = 0
    while (count <= 4) {
        led.plot(count, 0)
        basic.pause(500)
        basic.clearScreen()
        count += 1
    }
})
input.onButtonPressed(Button.B, function () {
    count2 = 0
    while (count2 <= 4) {
        led.plot(0, count2)
        basic.pause(500)
        basic.clearScreen()
        count2 += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, count4)
        basic.pause(500)
        count4 += 1
        if (count4 == 5) {
            count4 = 0
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(count3, 0)
        basic.pause(500)
        count3 += 1
        if (count3 == 5) {
            count3 = 0
        }
    }
})
