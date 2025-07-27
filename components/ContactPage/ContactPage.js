export default class ContactPage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})

        const style = document.createElement('style')
        this.root.appendChild(style)

        async function loadCSS() {
            const request = await fetch('components/ContactPage/ContactPage.css')
            const css = await request.text()
            style.textContent = css
        }
        loadCSS()
        this.render()
    }
    render() {
        const template = document.getElementById('project-page')
        const content = template.content.cloneNode(true);
        this.root.appendChild(content)
    }
}

customElements.define('contact-page', ContactPage)