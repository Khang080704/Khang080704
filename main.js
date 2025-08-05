import routers from "./services/router.js";
import HomePage from "./components/HomePage/HomePage.js";
import ProjectPage from "./components/ProjectPage/ProjectPage.js";
import ContactPage from "./components/ContactPage/ContactPage.js";
import NavigationManager from "./services/navigation.js";
import MobileNavigation from "./services/mobile-nav.js";

window.app = {};
app.router = routers;
app.shadowRoot = null
let slideIndex = 1;

window.addEventListener("DOMContentLoaded", () => {
    window.navigationManager = new NavigationManager();
    window.mobileNavigation = new MobileNavigation();
    routers.init();
});






function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = app.shadowRoot.getElementsByClassName("mySlides");
    console.log(slides)
    let dots = app.shadowRoot.getElementsByClassName("dot");
    console.log(dots)
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
