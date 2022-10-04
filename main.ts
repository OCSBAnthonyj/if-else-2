input.onButtonPressed(Button.A, function () {
    if (age >= 16 && (written_test && G1)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # . . #
            . . # . .
            # . . # .
            . # # . .
            `)
        basic.showString("driver's license YES SIR")
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showString("You Cannot Drive")
    }
})
let written_test = false
let G1 = false
let age = 0
age = 15
G1 = true
written_test = true
