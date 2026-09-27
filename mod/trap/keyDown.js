function keyDown(e) {
    if (e.repeat) return

    switch(e.code) {
        case 'Space':
        case 'Enter':
        case 'ArrowRight':
        case 'ShiftRight':
            signal('next')
            break


        case 'Backspace':
        case 'ArrowLeft':
        case 'ShiftLeft':
            signal('prev')
            break
    }
}
