function next() {
    let nextId = env.curId? (env.curId + 1) : 1
    if (nextId > mod.bits.length) nextId = 1

    const nextMod = mod.bits[nextId - 1]
    job.selectMod( nextMod )
}
