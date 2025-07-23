const routers = {
    init() {
        const links = document.querySelectorAll('li.nav-link>a')
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const href = e.target.getAttribute('href')
                this.go(href, true)
            })
        })

        window.addEventListener('popstate', (event) => {
            this.go(event.state.route, false);
        });
        this.go(location.pathname)
    },
    go(route, addToHistory = false) {
        if(addToHistory) {
            history.pushState({route}, '', route)
        }
        let elements
        switch(route) {
            case '/': 
                elements = document.createElement('home-page')
                break;
            case '/project':
                elements = document.createElement('project-page')
                break
            case '/contact':
                console.log('contact')
                break
            default:
                break
        }
        if(elements) {
            const main = document.querySelector('main')
            main.innerHTML = ''
            main.appendChild(elements)
        }
    }
}  

export default routers