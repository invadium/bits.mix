function environment() {
    if (env.config.cycle) {

        if (isBoolean( env.config.cycle )) {
            env.cycle = 30
        } else {
            env.cycle = parseInt(env.config.cycle)
        }

    } else {
        env.cycle = 0
    }
}
environment.Z = 1
