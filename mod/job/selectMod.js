function selectMod(mod) {
    this.deactivateAllMods()

    log.raw(`* selecting #${mod.id}:[${mod.name}].mod`)
    this.activateMod(mod)
    env.curId = mod.id
}
