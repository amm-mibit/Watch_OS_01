input.onGesture(Gesture.TiltRight, function () {
    let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
    haloDisplay.clear()
    haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Blue))
})
input.onGesture(Gesture.ScreenDown, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    motions += 1
    basic.showNumber(motions)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("AUS")
})
input.onButtonPressed(Button.AB, function () {
    verstrichen = input.runningTime() - start
    basic.showNumber(verstrichen / 1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Schulmodus Ein")
    basic.showLeds(`
        . # . . .
        # # # . .
        # # . . .
        # # # # .
        # # # # .
        `)
})
let verstrichen = 0
let start = 0
let motions = 0
motions = 0
basic.showNumber(motions)
