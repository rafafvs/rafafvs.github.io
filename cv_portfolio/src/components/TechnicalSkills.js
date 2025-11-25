import React from "react";
import { Section } from "./Section";

export const TechnicalSkills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", years: 4, icon: "🐍", color: "#3776AB" },
        { name: "JavaScript", years: 3, icon: "JS", color: "#F7DF1E" },
        { name: "Java", years: 2, icon: "☕", color: "#ED8B00" },
        { name: "C++", years: 2, icon: "⚡", color: "#00599C" },
        { name: "Bash", years: 3, icon: "💻", color: "#4EAA25" }
      ]
    },
    {
      name: "Data Science & ML",
      skills: [
        { name: "Machine Learning", years: 3, icon: "🤖", color: "#FF6B6B" },
        { name: "Data Analysis", years: 4, icon: "📊", color: "#4ECDC4" },
        { name: "TensorFlow", years: 2, icon: "🧠", color: "#FF6F00" },
        { name: "Pandas", years: 4, icon: "🐼", color: "#130654" },
        { name: "NumPy", years: 3, icon: "🔢", color: "#4DABCF" },
        { name: "Scikit-learn", years: 3, icon: "🔬", color: "#F7931E" },
        { name: "Jupyter", years: 4, icon: "📓", color: "#F37626" },
        { name: "MATLAB", years: 2, icon: "📈", color: "#0076A8" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "React", years: 3, icon: "⚛️", color: "#61DAFB" },
        { name: "Node.js", years: 2, icon: "🟢", color: "#339933" },
        { name: "Express.js", years: 2, icon: "🚂", color: "#000000" },
        { name: "REST APIs", years: 3, icon: "🔗", color: "#FF6B6B" },
        { name: "GraphQL", years: 1, icon: "🔷", color: "#E10098" }
      ]
    },
    {
      name: "Databases & Storage",
      skills: [
        { name: "SQL", years: 3, icon: "🗄️", color: "#336791" },
        { name: "MongoDB", years: 2, icon: "🍃", color: "#47A248" },
        { name: "PostgreSQL", years: 2, icon: "🐘", color: "#336791" },
        { name: "Redis", years: 1, icon: "🔴", color: "#DC382D" }
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Git", years: 4, icon: "📝", color: "#F05032" },
        { name: "Docker", years: 2, icon: "🐳", color: "#2496ED" },
        { name: "AWS", years: 1, icon: "☁️", color: "#FF9900" },
        { name: "Kubernetes", years: 1, icon: "⚓", color: "#326CE5" },
        { name: "CI/CD", years: 2, icon: "🔄", color: "#FF6B6B" },
        { name: "Jenkins", years: 1, icon: "🤖", color: "#D24939" },
        { name: "Linux", years: 3, icon: "🐧", color: "#FCC624" }
      ]
    }
  ];

  return (
    <Section id="skills" title="Skills & Technologies" bgColor="dark">
      <div className="skills-panels-grid">
        {skillCategories.slice(0, 3).map((category, idx) => (
          <div key={idx} className="skills-panel">
            <h3 className="category-title">{category.name}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => {
                const percent = Math.min((skill.years / 7) * 100, 100);
                return (
                  <div
                    key={index}
                    className="skill-chip"
                    title={`${skill.name} · ${skill.years} years`}
                  >
                    <span className="chip-fill" style={{ ['--fillRatio']: percent / 100 }} />
                    <span className="chip-label">{skill.name}</span>
                    <span className="chip-years" aria-hidden>
                      {skill.years} years
                    </span>
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
