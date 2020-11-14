let max = 0
let a = 0
let b = 0
let c = 0
basic.forever(function () {
    max = 0
    a = 8
    b = 5
    c = 12
    if (a < b && a < c) {
        max = b + c
        basic.showNumber(max)
    } else if (b < a && b < c) {
        max = a + c
        basic.showNumber(max)
    } else {
        max = a + b
        basic.showNumber(max)
    }
    basic.showNumber(max)
})
