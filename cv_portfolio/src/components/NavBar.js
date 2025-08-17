// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  const onUpdateActiveLink = (value) => setActiveLink(value);

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
            <Nav.Link href="#home" onClick={() => onUpdateActiveLink('home')} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>
                Home
            </Nav.Link>
            <Nav.Link href="#projects" onClick={() => onUpdateActiveLink('projects')} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>
                Projects
            </Nav.Link>
            <Nav.Link href="#experience" onClick={() => onUpdateActiveLink('experience')} className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}>
                Experience
            </Nav.Link>
            <Nav.Link href="#skills" onClick={() => onUpdateActiveLink('skills')} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>
                Skills
            </Nav.Link>
            <Nav.Link href="#contacts" onClick={() => onUpdateActiveLink('contacts')} className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'}>
                Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}