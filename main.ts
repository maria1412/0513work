input.onButtonPressed(Button.A, function () {
    Count += 1
})
input.onGesture(Gesture.Shake, function () {
    Count += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showNumber(Count)
    basic.pause(500)
    basic.clearScreen()
    // Countの数字の多さによってさまざまなアイコンが表示される
    if (Count <= 20) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    } else if (Count <= 30) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
    } else if (Count <= 45) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Surprised)
        basic.pause(500)
        basic.clearScreen()
    }
    Count = 0
})
let Count = 0
Count = 0
