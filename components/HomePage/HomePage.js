export default class HomePage {
    render() {
        return `
            <section id="home" class="hero">
                <div class="hero__content">
                    <h1>Hi, I'm <span class="gradient">Khang Pham</span></h1>
                    <p class="hero__subtitle">Full Stack Developer | Student at HCMUTE</p>
                    <p class="hero__description">Building modern web applications with passion and precision</p>
                    <div class="hero__cta">
                        <a href="#projects" class="btn btn-primary">View Projects</a>
                        <a href="#contact" class="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </section>

            <section class="tech-stack">
                <div class="container">
                    <h2>Tech Stack</h2>
                    
                    <div class="tech-category">
                        <h3>Languages</h3>
                        <div class="tech-grid">
                            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
                            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
                            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
                        </div>
                    </div>

                    <div class="tech-category">
                        <h3>Frontend</h3>
                        <div class="tech-grid">
                            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
                            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
                            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
                        </div>
                    </div>

                    <div class="tech-category">
                        <h3>Backend</h3>
                        <div class="tech-grid">
                            <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot">
                            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
                        </div>
                    </div>

                    <div class="tech-category">
                        <h3>Databases</h3>
                        <div class="tech-grid">
                            <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
                            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
                            <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis">
                        </div>
                    </div>

                    <div class="tech-category">
                        <h3>Tools</h3>
                        <div class="tech-grid">
                            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
                            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
                            <img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white" alt="Kafka">
                            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
                        </div>
                    </div>
                </div>
            </section>

            <section class="github-stats">
                <div class="container">
                    <h2>GitHub Stats</h2>
                    <div class="stats-grid">
                        <img src="https://github-readme-stats.vercel.app/api?username=khangthunhat&show_icons=true&theme=tokyonight" alt="GitHub Stats">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=khangthunhat&layout=compact&theme=tokyonight" alt="Top Languages">
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=khangthunhat&theme=tokyonight" alt="GitHub Streak">
                    </div>
                </div>
            </section>
        `;
    }
}