import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Education } from './components/Education';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe/>
      <Education/>
      <ProfessionalExperience/>
      <TechnicalSkills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;