// negative z-order values always rendered on top
// of the positive or missing z-order entities
const Z = -1

function draw() {
    fill(.5, .6, .8)
    font('20px zekton')
    alignCenter()
    baseMiddle()
    text('spawning cicles every 2s', rx(.5), ry(.8))
    text('and a pink one at 5s mark', rx(.5), ry(.85))
}
