export default class HomePage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})

        const style = document.createElement('style')
        this.root.appendChild(style)

        async function loadCSS() {
            const request = await fetch('components/HomePage/HomePage.css')
            const css = await request.text()
            style.textContent = css
        }
        loadCSS()
        this.render()
    }


    render() {
        const template = document.getElementById('home-page')
        const content = template.content.cloneNode(true);
        this.root.appendChild(content)
    }

}

customElements.define('home-page',HomePage)