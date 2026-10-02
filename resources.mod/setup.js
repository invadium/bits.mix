function setup() {

    // create a GUI layer to place components on
    lab.spawn('Hud', {
        Z:     101,
        name: 'hud',
    })

    // place a button
    lab.hud.spawn('Button', {
        name: 'button1',
        x: 40,
        y: ry(1) - 80,
        h: 50,
        w: 350,
        scale: 4,
        text: 'Click Me To Play Sound Clip',
    })

    // attach mouse down event handler to the button
    after(lab.hud.button1, 'onMouseDown', function() {
        // play 'click.wav' from /res
        sfx(res.click)
    })
}
