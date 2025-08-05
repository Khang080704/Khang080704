const observer = {
    obs: new Set(),
    add(obs) {
        this.obs.add(obs)
    },
    delete(obs) {
        this.obs.delete(obs)
    },
    notify() {
        this.obs.forEach(func => {
            func()
        })
    }
}

export default observer