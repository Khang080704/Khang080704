// navigation.js
class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll(".nav-link");
        this.indicator = document.querySelector(".nav-indicator");
        this.init();
    }

    init() {
        this.updateActiveState();
        this.setupHoverEffects();
        this.setupIndicator();

        // Listen for route changes
        window.addEventListener("popstate", () => {
            this.updateActiveState();
        });
    }

    updateActiveState() {
        const currentPath = window.location.pathname;

        this.navLinks.forEach((link) => {
            const route = link.getAttribute("data-route");

            if (
                route === currentPath ||
                (currentPath === "/index.html" && route === "/")
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        this.updateIndicator();
    }

    setupHoverEffects() {
        this.navLinks.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                this.updateIndicator(link);
            });
        });

        // Reset indicator when not hovering
        document
            .querySelector(".nav-links")
            .addEventListener("mouseleave", () => {
                this.updateIndicator();
            });
    }

    setupIndicator() {
        this.updateIndicator();
    }

    updateIndicator(hoverTarget = null) {
        const target =
            hoverTarget || document.querySelector(".nav-link.active");

        if (target) {
            const targetRect = target.getBoundingClientRect();
            const navRect = document
                .querySelector(".nav-links")
                .getBoundingClientRect();

            const left = targetRect.left - navRect.left;
            const width = targetRect.width;

            this.indicator.style.left = `${left}px`;
            this.indicator.style.width = `${width}px`;
            this.indicator.style.opacity = "1";
        } else {
            this.indicator.style.opacity = "0";
        }
    }

    // Call this method when route changes programmatically
    setActiveRoute(route) {
        this.navLinks.forEach((link) => {
            const linkRoute = link.getAttribute("data-route");
            if (linkRoute === route) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
        this.updateIndicator();
    }
}

export default NavigationManager;
