
function evo(dt) {
    if (!env.cycle) return

    if (env.time > env.lastSelect + env.cycle) {
        signal('next')
    }
}
