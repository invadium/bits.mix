const Z = 102

function draw() {
    // draw the text
    baseTop()
    alignLeft()
    fill(.25, .5, .5)
    font('16px prstart')
    const tw = textWidth(res.msg.message) + 40
    const th = textHeight()
    text(res.msg.message, 40, ry(.1))

    lineWidth(3)
    stroke(res.data['line-color'])
    const y = ry(.1) + th + 5
    line(40, y, tw, y)
}
