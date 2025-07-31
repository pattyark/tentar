input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # # # # .
        # # # # .
        `)
})
music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # # # . #
    # . # . #
    # . # . #
    # . # . #
    # # # . #
    `)
basic.forever(function () {
	
})
