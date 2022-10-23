import "../../styles/layout.css";
import "../../styles/skills.css";

const Skills = () => {
    return (
        <section className="page-section bg2 skills-container flex-col">
            <div className="skills-list-container">
                <h1>
                    <span>~$</span> ls -al --skills
                </h1>
                <div className="skills-lists">
                    <ul className="skills-list">
                        <li>
                            |-- Fields:
                            <ul class="skills-sublist">
                                <li>|-- Backend Development</li>
                                <li>|-- Full-stack Development</li>
                                <li>|-- Machine Learning &amp; AI</li>
                            </ul>
                        </li>
                        <li>
                            |-- Languages:
                            <ul class="skills-sublist">
                                <li>|-- Python</li>
                                <li>|-- JavaScript</li>
                                <li>|-- C++</li>
                            </ul>
                        </li>
                        <li>
                            |-- Frameworks:
                            <ul class="skills-sublist">
                                <li>|-- FastAPI</li>
                                <li>|-- Django</li>
                                <li>|-- MERN</li>
                                <li>|-- Tensorflow</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="skills-list">
                        <li>
                            |-- Technologies:
                            <ul class="skills-sublist">
                                <li>|-- Redis</li>
                                <li>|-- Docker</li>
                                <li>|-- Celery</li>
                                <li>|-- PostgreSQL</li>
                                <li>|-- MongoDB</li>
                                <li>|-- Cloud (Heroku, Azure, GCP)</li>
                                <li>|-- Linux</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
