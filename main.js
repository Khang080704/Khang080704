import routers from "./services/router.js"
import HomePage from "./components/HomePage/HomePage.js"
import ProjectPage from "./components/ProjectPage/ProjectPage.js"

window.app = {}
app.router = routers

window.addEventListener('DOMContentLoaded', () => {
    routers.init()
})


