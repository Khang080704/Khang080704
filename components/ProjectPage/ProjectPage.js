export default class ProjectPage {
    render() {
        return `
            <section id="projects" class="projects">
                <div class="container">
                    <h2>Featured Projects</h2>
                    <div class="projects-grid">
                        <div class="card">
                            <img src="https://raw.githubusercontent.com/KHTNK22-DATN-BA-Copilot/ba_copilot_ai/main/ba_copilot_ai/uploads/Repository%20image.png" alt="BA Copilot AI" class="card__image">
                            <div class="card__content">
                                <h3>BA Copilot AI</h3>
                                <p>AI-powered tool for Business Analysts to generate diagrams, wireframes, and SRS documents</p>
                                <div class="card__tags">
                                    <span class="tag">Python</span>
                                    <span class="tag">FastAPI</span>
                                    <span class="tag">AI</span>
                                </div>
                                <a href="https://github.com/KHTNK22-DATN-BA-Copilot/ba_copilot_ai" class="card__link">View on GitHub →</a>
                            </div>
                        </div>

                        <div class="card">
                            <img src="https://raw.githubusercontent.com/KHTNK22-DATN-BA-Copilot/ba_copilot_backend/main/logo.png" alt="BA Copilot Backend" class="card__image">
                            <div class="card__content">
                                <h3>BA Copilot Backend</h3>
                                <p>Robust backend system with JWT authentication, PostgreSQL, MongoDB & Redis integration</p>
                                <div class="card__tags">
                                    <span class="tag">Java</span>
                                    <span class="tag">Spring Boot</span>
                                    <span class="tag">PostgreSQL</span>
                                </div>
                                <a href="https://github.com/KHTNK22-DATN-BA-Copilot/ba_copilot_backend" class="card__link">View on GitHub →</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card__placeholder">QLSTK</div>
                            <div class="card__content">
                                <h3>QLSTK Project</h3>
                                <p>Management system with modern architecture and best practices</p>
                                <div class="card__tags">
                                    <span class="tag">Full Stack</span>
                                    <span class="tag">Database</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}