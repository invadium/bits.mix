function prev() {
    let nextId = env.curId? (env.curId - 1) : 0
    if (nextId <= 0) nextId = mod.bits.length

    const nextMod = mod.bits[nextId - 1]
    job.selectMod( nextMod )
}
