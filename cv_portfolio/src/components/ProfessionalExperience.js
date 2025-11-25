import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Section } from "./Section";
import company_logo1 from "../assets/img/cfm-logo.png";
import company_logo2 from "../assets/img/IPFN-logo.jpeg";

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
                    At a +$20Bn Quantitative Asset Manager, I worked at the intersection of software engineering and data operations. My primary focus was hardening the firm's internal monitoring infrastructure by migrating legacy SQL controls into modular, automated Python pipelines. I addressed the critical challenge of data integrity by curating datasets to resolve missing values and ensuring coherence across sources—a vital step for accurate financial modeling. Additionally, I engineered interactive visualization tools to accelerate management decision-making and reverse-engineered processes to meet new operational risk requirements.                    </p>
                    <div className="skills-section">
                        <div className="skills-title">
                            <i className="fas fa-code"></i>
                            Skills Acquired
                        </div>
                        <div className="skills-container">
                            <span className="skill-tag">Python Development</span>
                            <span className="skill-tag">Data Pipeline Automation</span>
                            <span className="skill-tag">SQL to Python Migration</span>
                            <span className="skill-tag">Operational Risk</span>
                            <span className="skill-tag">Data Analysis and Visualization</span>
                            <span className="skill-tag">Git</span>
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
              Financed by a Eurofusion research grant, my work here mirrored the workflow of quantitative research: extracting signal from noise. I designed an iterative fitting method to clean and calibrate raw experimental data, ensuring reliability for downstream analysis. I also developed algorithmic approaches to detect and characterize vibration modes within time-series data from fusion experiments. This role honed my ability to apply statistical and signal processing techniques to complex, non-linear datasets to identify trends and correlations.
              </p>
              <div className="skills-section">
                  <div className="skills-title">
                      <i className="fas fa-atom"></i>
                      Skills Acquired
                  </div>
                  <div className="skills-container">
                      <span className="skill-tag">Applied Physics Research</span>
                      <span className="skill-tag">Simulation</span>
                      <span className="skill-tag">Time-Series Analysis</span>
                      <span className="skill-tag">Signal Processing</span>
                      <span className="skill-tag">Statistical Modeling</span>
                      <span className="skill-tag">Algorithm Design</span>
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
}