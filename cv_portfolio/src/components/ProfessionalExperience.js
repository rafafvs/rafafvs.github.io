import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Section } from "./Section";
import company_logo1 from "../assets/img/cfm-logo.png";
import company_logo2 from "../assets/img/IPFN-logo.jpeg";
import company_logo3 from "../assets/img/refood-logo.png";
import company_logo4 from "../assets/img/nfist-logo.png";

export const ProfessionalExperience = () => {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          // Remove the animate class when element goes out of view
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

    // Observe all timeline items
    timelineRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  return (
    <Section id="experience" title="Professional Experience" bgColor="light">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5" ref={addToRefs}>
          <span className="timeline-icon"></span>

            <div className="timeline-content">
                <div className="timeline-panel">
                    <div className="timeline-header">
                        <img src={company_logo1} alt="Capital Fund Management" className="company-logo"/>
                        <div>
                            <h4 className="fw-bold mb-1">Capital Fund Management</h4>
                            <h6 className="text-muted mb-2 fw-bold">IT Analytics - Python Developer</h6>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-calendar-alt text-muted me-2"></i>
                                <span className="text-muted fw-bold me-4">April 2025 - Present</span>
                                <i className="fas fa-map-marker-alt text-muted me-2"></i>
                                <span className="text-muted fw-bold">Paris, France</span>
                            </div>
                        </div>
                    </div>
                    <div className="achievements-title">
                        <i className="fas fa-trophy"></i>
                        Key Achievements
                    </div>
                    <p className="text-muted fs-5">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="skills-section">
                        <div className="skills-title">
                            <i className="fas fa-code"></i>
                            Skills Acquired
                        </div>
                        <div className="skills-container">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Data Analysis</span>
                            <span className="skill-tag">Machine Learning</span>
                            <span className="skill-tag">SQL</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="timeline-item mb-5" ref={addToRefs}>
          <span className="timeline-icon"></span>
          <div className="timeline-content">
            <div className="timeline-panel">
              <div className="timeline-header">
                <img 
                  src={company_logo2}
                  alt="IPFN" 
                  className="company-logo ipfn-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">Institute for Plasmas and Nuclear Fusion</h4>
                    <h6 className="text-muted mb-2 fw-bold">Engineering Physics - Researcher</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">March 2022 - June 2022</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Lisbon, Portugal</span>
                    </div>
                  </div>
              </div>
              <div className="achievements-title">
                  <i className="fas fa-trophy"></i>
                  Key Achievements
              </div>
              <p className="text-muted fs-5">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="skills-title">
                      <i className="fas fa-atom"></i>
                      Skills Acquired
                  </div>
                  <div className="skills-container">
                      <span className="skill-tag">C++</span>
                      <span className="skill-tag">MATLAB</span>
                      <span className="skill-tag">Data Analysis</span>
                      <span className="skill-tag">Research</span>
                      <span className="skill-tag">Physics</span>
                      <span className="skill-tag">Simulation</span>
                  </div>
              </div>
            </div>
          </div>
        </li>

        <li className="timeline-item mb-5" ref={addToRefs}>
          <span className="timeline-icon"></span>
          <div className="timeline-content">
            <div className="timeline-panel">
              <div className="timeline-header">
                <img 
                  src={company_logo3}
                  alt="refood" 
                  className="company-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">Refood</h4>
                    <h6 className="text-muted mb-2 fw-bold">Volunteer</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">January 2020 - July 2022</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Lisbon, Portugal</span>
                    </div>
                  </div>
              </div>
              <div className="achievements-title">
                  <i className="fas fa-trophy"></i>
                  Key Achievements
              </div>
              <p className="text-muted fs-5">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="skills-title">
                      <i className="fas fa-hands-helping"></i>
                      Skills Acquired
                  </div>
                  <div className="skills-container">
                      <span className="skill-tag">Leadership</span>
                      <span className="skill-tag">Communication</span>
                      <span className="skill-tag">Organization</span>
                      <span className="skill-tag">Teamwork</span>
                      <span className="skill-tag">Project Management</span>
                      <span className="skill-tag">Social Impact</span>
                  </div>
              </div>
            </div>
          </div>
        </li>

        <li className="timeline-item mb-5" ref={addToRefs}>
          <span className="timeline-icon"></span>
          <div className="timeline-content">
            <div className="timeline-panel">
              <div className="timeline-header">
                <img 
                  src={company_logo4}
                  alt="nfist" 
                  className="company-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">Physics Week - Instituto Superior Técnico</h4>
                    <h6 className="text-muted mb-2 fw-bold">Volunteer Collaborator</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">March 2019</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Lisbon, Portugal</span>
                    </div>
                  </div>
              
              </div>
              <div className="achievements-title">
                  <i className="fas fa-trophy"></i>
                  Key Achievements
              </div>
              <p className="text-muted fs-5">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="skills-title">
                      <i className="fas fa-chalkboard-teacher"></i>
                      Skills Acquired
                  </div>
                  <div className="skills-container">
                      <span className="skill-tag">Public Speaking</span>
                      <span className="skill-tag">Event Planning</span>
                      <span className="skill-tag">Teaching</span>
                      <span className="skill-tag">Science Communication</span>
                      <span className="skill-tag">Coordination</span>
                      <span className="skill-tag">Outreach</span>
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}