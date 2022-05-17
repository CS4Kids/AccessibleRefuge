input.onGesture(Gesture.TiltLeft, function () {
    optimalLightLevel = optimalLightLevel - 10
    basic.showNumber(optimalLightLevel)
})
input.onGesture(Gesture.TiltRight, function () {
    optimalLightLevel = optimalLightLevel + 10
    basic.showNumber(optimalLightLevel)
})
let optimalLightLevel = 0
optimalLightLevel = 100
let lightLevel = 128
if (input.lightLevel() > 0) {
    servos.P0.setAngle(90)
}
loops.everyInterval(500, function () {
    if (optimalLightLevel < lightLevel) {
        servos.P0.setAngle(45)
    } else {
        servos.P0.setAngle(90)
    }
})
