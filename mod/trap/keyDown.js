function keyDown(e) {
    if (e.repeat) return

    switch(e.code) {
        case 'Space':
        case 'Enter':
            signal('next')
            break
    }
}
