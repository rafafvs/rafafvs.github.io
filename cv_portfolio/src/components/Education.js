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
                    Currently pursuing a double degree at one of Europe's leading business schools. During this degree I hope to further explore an exciting field where I can combine everything I have learned so far, both technical skills and intuition and work on practical problems.  My focus is on the Capital Markets specialization, where I look forward to learn from leading researchers and practitioners in the fields of Quantitative Finance, Risk Management, and Algorithmic Trading unsing Machine Learning and AI.
                    </p>
                    <div className="skills-section">
                        <div className="courses-title">
                            <i className="fas fa-graduation-cap"></i>
                            Relevant Courses
                        </div>
                        <div className="courses-container">
                            <div className="course-item">Quant Asset Management</div>
                            <div className="course-item">Financial Engineering</div>
                            <div className="course-item">Algorithms, Data & Trading</div>
                            <div className="course-item">AI for Quant Trading Strategies</div>
                            <div className="course-item">Exotic Products and Structuring</div>
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
                <img src={school_logo2} alt="X" className="university-logo"/>
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
              The first year of the double degree I am currently persuing was at one of France’s leading engineering institution. There I strengthened my knowledge in applied mathematics, statistics and computer science. My coursework centered on combining mathematical rigour with practical applications of machine learning and deep learning, specifically tailored for financial markets. During this yearr, I honed my ability to handle the numerical processing of large-scale financial datasets, and experimented with building models necessary for developing robust pricing and hedging models.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Optimization</div>
                      <div className="course-item">Deep Learning in Finance</div>
                      <div className="course-item">Numerical Processing of Financial Data</div>
                      <div className="course-item">Machine Learning</div>
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
              <img src={school_logo4} alt="IITM" className="university-logo"/>
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
              I spent a semester immersed in one of India's most competitive academic environments to broaden my technical and personal perspectives. This experience exposed me to different teaching methodologies in physics and engineering but also demonstrated my adaptability and curiosity for tackling challenges in diverse global settings.          
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Introduction to Game Theory</div>
                      <div className="course-item">Introduction to Machine Learning</div>
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
              Specializing in Engineering Physics provided me with a sophisticated toolkit for modeling complex physical systems. My degree culminated in a thesis on Edge Instabilities in fusion plasmas. This research required heavy signal processing, time-series analysis, and the statistical cleaning of noisy experimental data.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Advanced Statistical Physics</div>
                      <div className="course-item">Advanced Signal Processing</div>
                      <div className="course-item">Advanced Time Series Analysis</div>
                      <div className="course-item">Advanced Machine Learning</div>
                      <div className="course-item">Advanced Deep Learning</div>
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
              This rigorous undergraduate program served as the foundation of my analytical capabilities. It was here that I developed strong proficiency in Object-Oriented Programming and advanced mathematical methods. The curriculum demanded a high level of abstraction and problem-solving.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Mathematical Methods for Physics</div>
                      <div className="course-item">Object Oriented Programming</div>
                      <div className="course-item">Computational Physics</div>
                      <div className="course-item">Quantum Mechanics</div>
                      <div className="course-item">Statistical Physics</div>
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
              Growing up in Brussels, I attended the European School of Brussels II. I persued the European Baccalaureate with a specialization in advanced mathematics and physics, fostering my curiosity for the hard sciences, and paving the way for me to persue a degree in Engineering Physics. Beyond the sciences, the school allows for students to explore many different languages. Beeing aware of the opportunities learning other languages can offer, I decided to learn 2 other (on top of the native Portuguese and French) - English and later Dutch. Besides the rigorous education the school provided, I am mostly grateful for the exposure it gave me to other cultures and people.
              </p>
              <div className="skills-section">
                  <div className="courses-title">
                      <i className="fas fa-graduation-cap"></i>
                      Relevant Courses
                  </div>
                  <div className="courses-container">
                      <div className="course-item">Advanced Mathematics</div>
                      <div className="course-item">Advanced Physics</div>
                      <div className="course-item">Multilingual Education</div>
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}