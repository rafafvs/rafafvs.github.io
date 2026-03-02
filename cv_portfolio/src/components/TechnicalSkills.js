import React from "react";
import { Section } from "./Section";

export const TechnicalSkills = () => {
  // Mirror the CV layout so the portfolio stays in sync with the latest resume.
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "English", detail: "Fluent" },
        { name: "Portuguese", detail: "Native" },
        { name: "French", detail: "Native" },
        { name: "Italian", detail: "Intermediate" },
        { name: "Spanish", detail: "Intermediate" }
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", detail: "Advanced" },
        { name: "SQL", detail: "Advanced" },
        { name: "C++", detail: "Advanced" },
        { name: "C", detail: "Intermediate" },
        { name: "Java", detail: "Intermediate" },
        { name: "CSS / HTML", detail: "Basic" },
        { name: "Matlab", detail: "Advanced" }
      ]
    },
    {
      name: "Technologies & Environments",
      skills: [
        { name: "Pandas", detail: "Advanced" },
        { name: "NumPy", detail: "Advanced" },
        { name: "PyTorch", detail: "Advanced" },
        { name: "TensorFlow", detail: "Advanced" },
        { name: "Git", detail: "Advanced" },
        { name: "Jupyter", detail: "Advanced" },
        { name: "Scikit-learn", detail: "Advanced" },
        { name: "SciPy", detail: "Advanced" },
        { name: "Gymnasium", detail: "Basic" }, 
        { name: "Jira", detail: "Intermediate" },
      ]
    },
    {
      name: "Interests",
      skills: [
        { name: "Kitesurfing", detail: "IKO independent level" },
        { name: "Scuba Diving", detail: "Certified N1 Diver (20m)" },
        { name: "Photography", detail: "7 years of practice" },
        { name: "Football", detail: "10 years" }
      ]
    }
  ];

  return (
    <Section id="skills" title="Skills & Technologies" bgColor="dark">
      <div className="skills-panels-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-panel">
            <h3 className="category-title">{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="skill-chip"
                    title={
                      skill.detail ? `${skill.name} · ${skill.detail}` : skill.name
                    }
                  >
                    <span className="chip-label">{skill.name}</span>
                    {skill.detail && (
                      <span className="chip-detail" aria-hidden>
                        {skill.detail}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
