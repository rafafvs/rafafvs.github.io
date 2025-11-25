import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Section } from './Section';
// Uncomment the line below if you want to use EmailJS instead of Google Sheets
// import emailjs from '@emailjs/browser';

export const Contact = () => {
  const contactDetails = [
    {
      icon: 'fa-location-dot',
      label: 'Address',
      value: ['Paris, Île-de-France', 'France']
    },
    {
      icon: 'fa-phone',
      label: 'Phone',
      value: ['+33 6 66 05 73 03']
    },
    {
      icon: 'fa-paper-plane',
      label: 'Email',
      value: ['rafafvalente [at] gmail.com']
    }
  ];

  return (
    <Section 
      id="contact" 
      title="Contact" 
      subtitle="Let's connect" 
      bgColor="dark"
    >
      <div className="contact-panel">
        <Row className="g-4 contact-info-row">
          {contactDetails.map(({ icon, label, value }) => (
            <Col key={label} md={4}>
              <div className="contact-info-pill">
                <div className="contact-icon-circle">
                  <i className={`fa-solid ${icon}`}></i>
                </div>
                <p className="contact-pill-label">{label}:</p>
                {value.map((line) => (
                  <p key={line} className="contact-pill-value">{line}</p>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};