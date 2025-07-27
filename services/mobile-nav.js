// mobile-nav.js
class MobileNavigation {
    constructor() {
        this.mobileToggle = document.querySelector('.mobile-toggle');
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.mobileClose = document.querySelector('.mobile-close');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link a');
        this.body = document.body;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.syncActiveStates();
    }

    setupEventListeners() {
        // Open mobile menu
        this.mobileToggle.addEventListener('click', () => {
            this.openMenu();
        });

        // Close mobile menu
        this.mobileClose.addEventListener('click', () => {
            this.closeMenu();
        });

        // Close menu when clicking on links
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
                this.updateActiveState(link);
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 740 && this.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    openMenu() {
        this.mobileMenu.classList.add('active');
        this.body.classList.add('menu-open');
    }

    closeMenu() {
        this.mobileMenu.classList.remove('active');
        this.body.classList.remove('menu-open');
    }

    updateActiveState(clickedLink) {
        // Remove active class from all mobile nav links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link's parent
        clickedLink.parentElement.classList.add('active');

        // Sync with desktop navigation
        const route = clickedLink.getAttribute('href');
        this.syncWithDesktopNav(route);
    }

    syncWithDesktopNav(route) {
        // Update desktop navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-route') === route) {
                link.classList.add('active');
            }
        });
    }

    syncActiveStates() {
        const currentPath = window.location.pathname;
        
        // Update mobile navigation
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            const linkPath = link.querySelector('a').getAttribute('href');
            if (linkPath === currentPath || (currentPath === '/index.html' && linkPath === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Method to be called from router when route changes
    setActiveRoute(route) {
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            const linkRoute = link.querySelector('a').getAttribute('href');
            if (linkRoute === route) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

export default MobileNavigation;