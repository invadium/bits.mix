const systemMods = [
    'console',
    'explorer',
    'inspector',
    'status',
]

function indexMods() {
    const bits = mod.bits = []

    let Z1 = 100
    let Z2 = 900

    mod._ls.forEach((m, i)=> {
        if ( systemMods.includes( m.name ) ) {
            m.Z  = ++Z2
            m.id = 100 + i
            return
        }

        log(`including [${m.name}].mod`)
        bits.push(m)
        m.Z  = ++Z1
        m.id = bits.length
    })
    mod.orderZ()
}

function setup() {
    indexMods()

    job.deactivateAllMods()
}
