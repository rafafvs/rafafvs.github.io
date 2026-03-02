// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import cvPdf from '../assets/files/RafaelValenteCV.pdf';

const SECTION_IDS = ['home', 'education', 'experience', 'extracurricular', 'skills', 'projects', 'contact'];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const hasScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === hasScrolled ? prev : hasScrolled));
  
      let currentSection = SECTION_IDS[0];
  
      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= 1) {
          currentSection = id;
        } else {
          break;
        }
      }
  
      setActiveLink((prev) => (prev === currentSection ? prev : currentSection));
    };
  
    // Defer initial call so layout is settled after font-size scaling
    const timer = setTimeout(updateActiveSection, 100);
  
    window.addEventListener('scroll', updateActiveSection, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      clearTimeout(timer);
    };
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" fixed="top" expanded={expanded} className={scrolled ? 'scrolled' : ''}>
      <Container>
        
        <Navbar.Brand href="#home" className="brand">
            <div class="logo">
                <div class="initials">RV</div>
                <div class="divider"></div>
                <div class="company-name">RAFAEL VALENTE</div>
            </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}>
            <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={closeMenu}
              active={activeLink === 'home'}
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            >
                Home
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={closeMenu}
              active={activeLink === 'education'}
              className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
            >
                Education
            </Nav.Link>
            <Nav.Link
              href="#experience"
              onClick={closeMenu}
              active={activeLink === 'experience'}
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
            >
                Experience
            </Nav.Link>
            <Nav.Link
              href="#extracurricular"
              onClick={closeMenu}
              active={activeLink === 'extracurricular'}
              className={activeLink === 'extracurricular' ? 'active navbar-link' : 'navbar-link'}
            >
                Extracurricular
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={closeMenu}
              active={activeLink === 'skills'}
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            >
                Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={closeMenu}
              active={activeLink === 'projects'}
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            >
                Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={closeMenu}
              active={activeLink === 'contact'}
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
            >
                Contact
            </Nav.Link>
            <Button as="a" href={cvPdf} download="RafaelValenteCV.pdf" variant="primary" className="ms-3">
              Download CV
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}