import "../../styles/layout.css";
import "../../styles/projects.css";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return (
        <section className="page-section bg1">
            <div className="projects-container flex-col">
                <h1>
                    <span>~$</span> python3 projects.py
                </h1>
                <div className="project-card-list">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
