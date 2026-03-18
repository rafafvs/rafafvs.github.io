import { Row, Col } from "react-bootstrap";
import { Section } from "./Section";
import aboutMeImg from "../assets/img/about-me-img.jpg";
import { projects } from "../data/projects";

export const AboutMe = () => {
    const featuredProjects = projects.slice(0, 3);
    const placeholderProject = {
        name: "More to explore",
        description: "I'm always experimenting with new ideas across quantitative finance, AI, and engineering. Check out the rest of my projects below!",
        githubUrl: "#projects",
        screenshot: "✨",
        placeholder: true,
    };
    const featuredWithPlaceholder = [...featuredProjects, placeholderProject];

    return (
        <Section id="home" title="About Me" bgColor="light">
            <Row className="align-items-center g-4 about-me-row">
                <Col xs={12} md={6} xl={5}>
                    <div className="about-image">
                        <img className="about-me-img" src={aboutMeImg} alt="About Me" style={{ opacity: 0.8 }} />
                    </div>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <div className="about-text">
                        <span className="tagline">Welcome to my website!</span>
                        <h1>
                            {`Hi! I'm Rafael,`}{" "}
                            <span
                                className="txt-rotate"
                                dataPeriod="1000"
                                data-rotate='[ "Physicist", "Data Scientist", "Just a Chill Guy"]'
                            >
                                <span className="wrap"></span>
                            </span>
                        </h1>
                        <p>
                            I'm a physicist turned data scientist, with a background spanning Nuclear Fusion research at Instituto Superior Técnico and a double degree from École Polytechnique and HEC Paris.
                        </p>
                        <p>
                            I started in physics because I wanted to understand and model how things work at a fundamental level. I'm fascinated by the idea that almost everything can be understood through equations and data, which has led me to acquire as much data as possible on everything I can and test my beliefs.
                        </p>
                        <p>
                            I've always learned best by doing — whether that's a personal project or just working through a problem until I understand it properly. That habit has shaped most of what I know and how I deal with new challenges.
                        </p>
                        <p>
                            During my master program, in search of new perspectives, I decided to move to India for six months. That period taught me to focus on what I can actually control and how to stay clear-headed under uncertainty and stress — useful skills that I carry into how I work.
                        </p>
                        <p>
                            After finishing my masters at IST, rather than going straight into a PhD, I sought to gain hands-on experience working in the industry, which led me to join Capital Fund Management (CFM), where I worked on the automation of data pipelines and improvement of compliance and risk monitoring processes.
                        </p>
                        <p>
                            Besides some programming languages, I speak French, Portuguese and English fluently, with Italian close behind. I've volunteered at food banks and contribute to climate policy work through VOYCE's Climate Change Commission. I take seriously the question of what my work is actually for.
                        </p>
                        <p>
                            Ultimately, I'm looking for environments where rigorous thinking is valued, where there are hard problems worth solving, and where I can keep getting better at what I do.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <div className="featured-projects">
                        <div className="featured-projects-header">
                            <i className="fas fa-computer"></i>
                            <span>Some of my best projects</span>
                        </div>
                        <div className="featured-projects-grid">
                            {featuredWithPlaceholder.map((project, index) => (
                                <div
                                    key={project.name}
                                    className={`featured-project-card ${project.placeholder ? "placeholder" : ""}`}
                                >
                                    <div className="featured-project-body">
                                        <div className="featured-project-meta">
                                            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                                        </div>
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                        {!project.placeholder ? (
                                            <>
                                                <div className="featured-project-tags">
                                                    {project.technologies.slice(0, 2).map((tech) => (
                                                        <span key={tech} className="featured-project-tag">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="featured-project-link arrow-link"
                                                >
                                                    View Project <span aria-hidden="true">→</span>
                                                </a>
                                            </>
                                        ) : (
                                            <a
                                                href="#projects"
                                                className="featured-project-link placeholder-link"
                                            >
                                                Explore all projects <span aria-hidden="true">→</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Section>
    );
};