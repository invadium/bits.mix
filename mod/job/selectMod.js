function selectMod(mod) {
    this.deactivateAllMods()

    log.raw(`* selecting [${mod.name}].mod`)
    this.activateMod(mod)
    env.curId = mod.id
}
