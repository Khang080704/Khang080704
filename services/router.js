const routers = {
    init() {
        const links = document.querySelectorAll("li.nav-link>a");
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                // if (e.target.matches('a[href^="/"]')) {
                //     e.preventDefault();
                //     const path = e.target.getAttribute("href");

                //     // Navigate to the route
                //     history.pushState({}, "", path);
                //     handleRouteChange(path);

                //     // Update navigation
                //     if (window.navigationManager) {
                //         window.navigationManager.setActiveRoute(path);
                //     }
                // }
                const href = e.target.getAttribute("href");
                this.go(href, true);
                this.handleRouteChange(href);
                if(window.navigationManager) {
                    window.navigationManager.setActiveRoute(href)
                }
            });
        });

        window.addEventListener("popstate", (event) => {
            this.go(event.state.route, false);
        });
        this.go(location.pathname);
    },
    go(route, addToHistory = false) {
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
        let elements;
        switch (route) {
            case "/":
                elements = document.createElement("home-page");
                break;
            case "/index.html":
                elements = document.createElement("home-page");
                break;
            case "/project":
                elements = document.createElement("project-page");
                break;
            case "/contact":
                elements = document.createElement("contact-page");
                break;
            default:
                break;
        }
        if (elements) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(elements);
        }
    },
    handleRouteChange(path) {
        if (window.navigationManager) {
            window.navigationManager.setActiveRoute(path);
        }
    },
};

export default routers;
