function next() {
    let nextId = env.curId? (env.curId + 1) : 0
    if (nextId >= mod.bits.length) nextId = 0

    const nextMod = mod.bits[nextId]
    job.selectMod( nextMod )
}
