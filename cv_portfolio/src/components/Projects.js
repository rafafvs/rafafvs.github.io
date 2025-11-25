import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Section } from "./Section";
import laptopImage from "../assets/img/laptop.png";
import { projects } from "../data/projects";

export const Projects = () => {
  const handleGitHub = (githubUrl) => {
    if (githubUrl && githubUrl !== '#') {
      window.open(githubUrl, '_blank');
    }
  };

  const handleSeeMoreProjects = () => {
    // Replace with your actual GitHub profile URL
    window.open('https://github.com/rafafvs', '_blank');
  };

  return (
    <Section id="projects" title="My Recent Projects" bgColor="light">
      <Container>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col lg={3} md={6} sm={6} key={index} className="mb-4">
              <div className="project-card">
                <div className="laptop-container">
                  <img src={laptopImage} alt="Laptop" className="laptop-image" />
                  <div className="screen-overlay">
                    <div className="screenshot-placeholder">
                      {project.screenshot}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h4 className="project-title">{project.name}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-buttons">
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => handleGitHub(project.githubUrl)}
                      className="project-btn github-btn"
                    >
                      <i className="fab fa-github me-2"></i>
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleSeeMoreProjects}
              className="see-more-btn"
            >
              <i className="fab fa-github me-3"></i>
              See More Projects on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
