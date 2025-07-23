const routers = {
    init() {
        const links = document.querySelectorAll('li.nav-link>a')
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const href = e.target.getAttribute('href')
                this.go(href)
            })
        })
    },
    go(route, addToHistory = false) {
        console.log(route)
        if(addToHistory) {
            history.pushState({route}, '', route)
        }
    }
}  

export default routers