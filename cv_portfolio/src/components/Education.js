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
                    Currently pursuing a double degree at Europe's leading business school to bridge my technical engineering background with advanced financial theory. My focus is on the Capital Markets specialization, where I am rigorously applying quantitative methods to asset management and trading strategies. This program allows me to translate complex mathematical models into actionable market insights, validated by a top-percentile GMAT performance.
                    </p>
                    <div className="skills-section">
                        <div className="courses-title">
                            <i className="fas fa-graduation-cap"></i>
                            Relevant Courses
                        </div>
                        <div className="courses-container">
                            <div className="course-item">Quant Asset Management</div>
                            <div className="course-item">Algorithms</div>
                            <div className="course-item">Data & Trading</div>
                            <div className="course-item">AI for Quant Trading Strategies</div>
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
              At France’s premier engineering institution, I deepened my expertise in applied mathematics and computer science. My coursework centered on the intersection of optimization and deep learning, specifically tailored for financial applications. Here, I honed my ability to handle the numerical processing of large-scale financial datasets, building the technical architecture necessary for developing robust pricing and hedging models.
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
              I spent a semester immersed in one of India's most competitive academic environments to broaden my technical perspective. This experience not only exposed me to different teaching methodologies in physics and engineering but also demonstrated my adaptability and eagerness to tackle challenges in diverse global settings.              
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
              Specializing in Engineering Physics provided me with a sophisticated toolkit for modeling complex physical systems—skills I now transpose to financial markets. I graduated with a high GPA (17/20), culminating in a thesis on Edge Instabilities in fusion plasmas. This research was particularly relevant to quantitative finance as it required heavy signal processing, time-series analysis, and the statistical cleaning of noisy experimental data.
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
              This rigorous undergraduate program served as the foundation of my analytical capabilities. It was here that I developed strong proficiency in Object-Oriented Programming and advanced mathematical methods. The curriculum demanded a high level of abstraction and problem-solving, teaching me to approach volatile systems through a lens of computational logic and structured code—a mindset essential for algorithmic trading.
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
              Growing up in this immersive multicultural environment laid the early groundwork for my international career. I pursued the European Baccalaureate with a specific concentration on advanced Mathematics and Physics, cultivating the analytical logic that underpins my engineering degrees. Beyond the sciences, this education cemented my multilingual capabilities, giving me the adaptability and cross-cultural fluency essential for navigating global financial hubs.
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