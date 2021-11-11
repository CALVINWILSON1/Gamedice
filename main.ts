input.onGesture(Gesture.Shake, function () {
    music.playMelody("F G B A B G C5 E ", 120)
    basic.showNumber(randint(1, 6))
})
