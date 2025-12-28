function setup() {

    // create a GUI layer to place components on
    lab.spawn('Hud', {
        name: 'hud',
    })

    // place a button
    lab.hud.spawn('/hud/gadget/Button', {
        name: 'button1',
        x: 40,
        y: ry(1) - 80,
        h: 40,
        w: 200,
        scale: 4,
        text: 'Click Me',
    })

    // attach mouse down event handler to the button
    after(lab.hud.button1, 'onMouseDown', function() {
        // play 'click.wav' from /res
        sfx(res.click)
    })
}
