let id = 1

function evo(dt) {
    const { x, y, w, h, dir, speed } = this

    this.x += cos(dir) * speed * dt
    this.y += sin(dir) * speed * dt

    if (this.x < .25*w || this.x > lab.w - .25*w
        || this.y < .25*h || this.y > lab.h - .25*h) {
            // restore
            this.x = x
            this.y = y
            // pick new random direction
            this.dir = math.rnda()
    }
}

function draw() {
    const { x, y, w, h, frames, start, fps } = this
    const iframe = floor(((env.time - start) * fps) % 3)

    // draw the bat
    frames.draw(iframe, x - .5*w, y - .5*h, w, h)
}

function setup(st) {
    const W = 160
    extend(this, {
        Z:      11,
        kind:   'bat',
        frames: res.spritesheets.bat,
        start:  env.time,
        fps:    4,

        x:      rx(.5),
        y:      ry(.5),
        w:      W,
        h:      W,
        dir:    math.rnda(),
        speed:  W,
    }, st)
}

function split() {
    const bat2 = augment({}, this, {
        name: 'bat' + (++id),
        dir:  this.dir + PI,
    })
    defer(() => lab.attach(bat2))
}

function poke(lx, ly) {
    const { x, y, w, h } = this

    if (lx < x - .5*w || lx > x + .5*w || ly < y - .5*h || ly > y + .5*h) return
    this.dir = math.rnda()
    this.start = env.time
    this.split()
}
