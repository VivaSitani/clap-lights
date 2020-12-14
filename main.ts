let lightsOn = false

input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(false)
    if (lightsOn) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
