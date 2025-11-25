import React, { useEffect, useRef } from "react";
import { Section } from "./Section";
import voyceLogo from "../assets/img/voyce.png";
import refoodLogo from "../assets/img/refood-logo.png";
import nfistLogo from "../assets/img/nfist-logo.png";

export const ExtracurricularActivities = () => {
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
          entry.target.classList.remove('animate');
        }
      });
    }, observerOptions);

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
    <Section id="extracurricular" title="Extracurricular Activities" bgColor="light">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5" ref={addToRefs}>
          <span className="timeline-icon"></span>
          <div className="timeline-content">
            <div className="timeline-panel">
              <div className="timeline-header">
                <img 
                  src={voyceLogo}
                  alt="VOYCE" 
                  className="company-logo"
                />
                <div>
                  <h4 className="fw-bold mb-1">VOYCE (EU Policymaking Think-Tank)</h4>
                  <h6 className="text-muted mb-2 fw-bold">Climate Change Commission Member</h6>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-calendar-alt text-muted me-2"></i>
                    <span className="text-muted fw-bold me-4">2025 - Present</span>
                    <i className="fas fa-map-marker-alt text-muted me-2"></i>
                    <span className="text-muted fw-bold">Europe</span>
                  </div>
                </div>
              </div>
              <div className="achievements-title">
                <i className="fas fa-trophy"></i>
                Key Achievements
              </div>
              <p className="text-muted fs-5">
                As part of a specialized think-tank, I contribute to reports that map urban sustainability plans across the European Union. My role involves benchmarking these plans to support evidence-based policy proposals. This experience allows me to apply analytical rigor to macro-level ESG (Environmental, Social, and Governance) topics, a growing sector within modern finance.
              </p>
              <div className="skills-section">
                <div className="skills-title">
                  <i className="fas fa-chart-line"></i>
                  Skills Acquired
                </div>
                <div className="skills-container">
                  <span className="skill-tag">Policy Analysis</span>
                  <span className="skill-tag">ESG</span>
                  <span className="skill-tag">Research</span>
                  <span className="skill-tag">Data Benchmarking</span>
                  <span className="skill-tag">Sustainability</span>
                  <span className="skill-tag">Strategic Thinking</span>
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
                  src={refoodLogo}
                  alt="Refood" 
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
              While volunteering at a local distribution center serving 35 families weekly, I moved beyond operational support to take on coordination responsibilities. I oversaw the logistics of the distribution and sanitation teams, ensuring efficient workflows in a high-pressure, time-sensitive environment. This experience reinforced my ability to lead small teams and manage operations effectively.
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
                  src={nfistLogo}
                  alt="Physics Week" 
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
              During the university's "Physics Week," I was responsible for presenting complex physical concepts to a diverse audience ranging from young students to adults. The core challenge was adaptability; I had to dynamically adjust the complexity of my explanations to match the technical knowledge level of each specific group. This experience sharpened my ability to communicate technical concepts to non-specialist stakeholders—a crucial skill for bridging the gap between quant teams and business units.
              </p>
              <div className="skills-section">
                <div className="skills-title">
                  <i className="fas fa-chalkboard-teacher"></i>
                  Skills Acquired
                </div>
                <div className="skills-container">
                  <span className="skill-tag">Public Speaking</span>
                  <span className="skill-tag">Science Communication</span>
                  <span className="skill-tag">Outreach</span>
                  <span className="skill-tag">Knowledge Adaptation</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </Section>
  );
};

