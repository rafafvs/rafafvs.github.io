import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Section } from "./Section";
import school_logo1 from "../assets/img/hec-logo.jpeg";
import school_logo2 from "../assets/img/x-logo.png";
import school_logo3 from "../assets/img/ist-logo.jpeg";
import school_logo4 from "../assets/img/iitm-logo.png";
import school_logo5 from "../assets/img/eeb2-logo.jpg";

export const Education = () => {
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
    <Section id="education" title="Education" bgColor="dark">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5" ref={addToRefs}>
          <span className="timeline-icon"></span>

            <div className="timeline-content">
                <div className="timeline-panel">
                    <div className="timeline-header">
                        <img src={school_logo1} alt="HEC Paris" className="university-logo"/>
                        <div>
                            <h4 className="fw-bold mb-1">HEC Paris</h4>
                            <h6 className="text-muted mb-2 fw-bold">DDDF M2 - Master in International finance</h6>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-calendar-alt text-muted me-2"></i>
                                <span className="text-muted fw-bold me-4">2025-2026</span>
                                <i className="fas fa-map-marker-alt text-muted me-2"></i>
                                <span className="text-muted fw-bold">Paris, France</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-muted fs-5">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="skills-section">
                        <div className="courses-title">
                            <i className="fas fa-graduation-cap"></i>
                            Relevant Courses
                        </div>
                        <div className="courses-container">
                            <div className="course-item">International Finance & Capital Markets</div>
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
                  src={school_logo2}
                  alt="X" 
                  className="university-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">École Polytechnique</h4>
                    <h6 className="text-muted mb-2 fw-bold">DDDF M1 - Data Science and AI for Business</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">2024-2025</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Palaiseau, France</span>
                    </div>
                  </div>
              </div>
              <p className="text-muted fs-5">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Data Science Fundamentals</div>
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
                  src={school_logo4}
                  alt="IITM" 
                  className="university-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">IITM - Indian Institute of Technology Madras</h4>
                    <h6 className="text-muted mb-2 fw-bold">Exchange semester</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">Jan 2023 - May 2023</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Chennai, India</span>
                    </div>
                  </div>
              </div>
              <p className="text-muted fs-5">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Digital Marketing Strategy</div>
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
                  src={school_logo3}
                  alt="IST" 
                  className="university-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">IST - Instituto Superior Técnico</h4>
                    <h6 className="text-muted mb-2 fw-bold">MSc in Engineering Physics</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">2021-2024</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Lisbon, Portugal</span>
                    </div>
                  </div>
              </div>
              <p className="text-muted fs-5">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Advanced Physics</div>
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
                  src={school_logo3}
                  alt="IST" 
                  className="university-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">IST - Instituto Superior Técnico</h4>
                    <h6 className="text-muted mb-2 fw-bold">BSc in Engineering Physics</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">2018-2021</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Lisbon, Portugal</span>
                    </div>
                  </div>
              </div>
              <p className="text-muted fs-5">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Classical Mechanics</div>
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
                  src={school_logo5}
                  alt="EEB2" 
                  className="university-logo"
                />
                                  <div>
                    <h4 className="fw-bold mb-1">European School of Brussels II</h4>
                    <h6 className="text-muted mb-2 fw-bold">European Baccalaureate</h6>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-calendar-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold me-4">2004-2018</span>
                      <i className="fas fa-map-marker-alt text-muted me-2"></i>
                      <span className="text-muted fw-bold">Brussels, Belgium</span>
                    </div>
                  </div>
              </div>
              <p className="text-muted fs-5">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Advanced Mathematics</div>
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}