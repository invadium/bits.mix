function deactivateAllMods() {
    mod.bits.forEach(m => {
        m.disable()
        m.pause()
        m.hide()
    })
}
