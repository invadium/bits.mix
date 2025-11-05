// position at the center of the screen
let x = rx(.5)  // place at 50% of the screen width
let y = ry(.5)  // place at 50% of the screen height
let a = 0       // planet rotation angle
let r = 50      // planet radius in pixels

let dx = 100 // x-axis speed component
let dy = 100 // y-axis speed component

function init() {
    this.background = '#000000' // black color in hex RGB
}

function evo(dt) {
   // make the movement factored by the delta time dt
   x += dx * dt
   y += dy * dt
   a -= .25 * PI * dt

   // bounce from the screen edges
   if (x > rx(1)-r && dx > 0) dx *= -1
   else if (x < r && dx < 0) dx *= -1
   if (y > ry(1)-r && dy > 0) dy *= -1
   else if (y < r && dy < 0) dy *= -1
}

function draw() {
    save().translate(x, y).rotate(a)

    // draw a planet
    lineWidth(5).stroke(.58, .5, .7)   // set line width and color in float HSL
    circle(0, 0, r)                    // atmosphere haze
    image(res.mars_type_planet, -r, -r, 2*r, 2*r)

    restore()
}
