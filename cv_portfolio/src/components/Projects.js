import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Section } from "./Section";
import laptopImage from "../assets/img/laptop.png";

export const Projects = () => {
  const projects = [
    {
      name: "Financial Data Analytics Platform",
      description: "Comprehensive platform for analyzing financial market data using Python, implementing machine learning models for trend prediction and risk assessment with interactive dashboards.",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL", "React"],
      year: "2024",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "📊"
    },
    {
      name: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Bootstrap, featuring smooth animations, interactive elements, and a clean design that showcases professional experience.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap"],
      year: "2024",
      status: "Active",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "💼"
    },
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart functionality, and secure payment processing using Stripe API.",
      technologies: ["Node.js", "Express.js", "MongoDB", "React", "Stripe API"],
      year: "2023",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "🛒"
    },
    {
      name: "Machine Learning Pipeline",
      description: "Automated ML pipeline for customer behavior analysis and predictive modeling with real-time data processing and model deployment capabilities.",
      technologies: ["Python", "Scikit-learn", "Docker", "AWS", "PostgreSQL"],
      year: "2023",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "🤖"
    },
    {
      name: "Physics Simulation Engine",
      description: "High-performance computational engine for simulating complex physical systems, including particle interactions and quantum mechanical phenomena.",
      technologies: ["C++", "MATLAB", "Python", "Git"],
      year: "2022",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "⚛️"
    },
    {
      name: "Cloud Infrastructure Setup",
      description: "Scalable cloud infrastructure design and deployment on AWS, including container orchestration with Kubernetes and monitoring systems.",
      technologies: ["AWS", "Docker", "Kubernetes", "Linux", "CI/CD"],
      year: "2023",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "☁️"
    },
    {
      name: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts and graphs.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      year: "2023",
      status: "Active",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "📈"
    },
    {
      name: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, and request routing for scalable application architecture.",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      year: "2023",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      screenshot: "🔗"
    }
  ];

  const handleGitHub = (projectName) => {
    console.log(`GitHub for: ${projectName}`);
    // Implement GitHub link functionality
  };

  const handleSeeMoreProjects = () => {
    // Replace with your actual GitHub profile URL
    window.open('https://github.com/rafafvs', '_blank');
  };

  return (
    <Section id="projects" title="My Recent Works" bgColor="light">
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
                      onClick={() => handleGitHub(project.name)}
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
