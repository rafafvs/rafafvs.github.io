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
                        <span className="tagline">A little about me!</span>
                        <h1>
                            {`Hi! I'm Rafael`}{" "}
                            <span
                                className="txt-rotate"
                                dataPeriod="1000"
                                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                            >
                                <span className="wrap"></span>
                            </span>
                        </h1>
                        <p>
                            I'm Rafael Valente, a quantitative finance professional with a unique blend of engineering physics, data
                            science, and financial markets expertise. Currently pursuing a double degree in International Finance at HEC
                            Paris and Data Science & AI for Business at École Polytechnique, I combine rigorous technical training with
                            practical experience in quantitative asset management.
                        </p>
                        <p>
                            My background in engineering physics from Instituto Superior Técnico has equipped me with strong analytical
                            and problem-solving skills, which I've applied to everything from fusion plasma research to developing
                            automated data pipelines at Capital Fund Management, a leading quant asset manager. I'm passionate about
                            leveraging machine learning and quantitative methods to solve complex problems in finance—from option
                            pricing with neural networks to building deep hedging strategies.
                        </p>
                        <p>
                            Beyond my technical pursuits, I'm committed to making a positive impact through climate policy work with
                            VOYCE and community service. When I'm not coding or analyzing data, you'll find me kitesurfing, scuba
                            diving, or behind a camera capturing moments.
                        </p>
                        <p>I'm always eager to explore new challenges at the intersection of technology, data, and finance.</p>
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
                                    style={
                                        !project.placeholder && project.backgroundImage
                                            ? { backgroundImage: `url(${project.backgroundImage})` }
                                            : undefined
                                    }
                                >
                                    <div className="featured-project-body">
                                        <div className="featured-project-meta">
                                            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                                            {!project.placeholder && (
                                                <span className="featured-project-icon">{project.screenshot}</span>
                                            )}
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