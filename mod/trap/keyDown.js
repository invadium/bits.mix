function keyDown(e) {
    if (e.repeat) return

    switch(e.code) {
        case 'Space':
        case 'Enter':
        case 'ArrowRight':
            signal('next')
            break


        case 'Backspace':
        case 'ArrowLeft':
            signal('prev')
            break
    }
}
