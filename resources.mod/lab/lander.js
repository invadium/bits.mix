const Z = 1

function draw() {
    blocky()

    // draw the lander
    const w = res.lander.width
    const h = res.lander.height
    image(res.lander, rx(.7)-2*w, ry(.8), 3*w, 3*h)
}
