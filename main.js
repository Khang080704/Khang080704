import routers from "./services/router.js"
window.app = {}
app.router = routers

window.addEventListener('DOMContentLoaded', () => {
    routers.init()
})