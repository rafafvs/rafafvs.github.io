import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Section } from './Section';
// Uncomment the line below if you want to use EmailJS instead of Google Sheets
// import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Replace this URL with your Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL = 'https://docs.google.com/spreadsheets/d/1YGVbKlzoXoiy1hu0jyDsyNnpu9RRC7oE1d09lSy980Y/edit?gid=0#gid=0';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.result === 'success') {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <Section 
      id="contact" 
      title="Get In Touch" 
      subtitle="Let's connect and discuss opportunities"
      bgColor="light"
    >
      <Row className="g-4">
        {/* Contact Information Panel */}
        <Col lg={5}>
          <Card className="contact-info-card h-100 border-0 shadow">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-4">
                <i className="fas fa-envelope text-muted me-3 fs-4"></i>
                <h4 className="mb-0 fw-bold">Contact Information</h4>
              </div>
              
              <div className="contact-item mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-envelope text-muted me-3"></i>
                  <span className="fw-bold">Email</span>
                </div>
                <p className="text-muted ms-5 mb-0">rafael.ferreira-valente-de-silva@hec.com</p>
              </div>

              <div className="contact-item mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-phone text-muted me-3"></i>
                  <span className="fw-bold">Phone</span>
                </div>
                <p className="text-muted ms-5 mb-0">+33 07 XX XX XX XX</p>
              </div>

              <div className="contact-item mb-4">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-map-marker-alt text-muted me-3"></i>
                  <span className="fw-bold">Location</span>
                </div>
                <p className="text-muted ms-5 mb-0">Paris, Île-de-France, France</p>
              </div>

              <hr className="my-4" />

              <div className="mb-4">
                <h6 className="fw-bold mb-3">Connect with me</h6>
                <div className="d-flex gap-3">
                  <div className="social-placeholder">
                    <i className="fas fa-user fs-4 text-muted"></i>
                  </div>
                  <a href="https://www.linkedin.com/in/rvalente2/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-square-linkedinn fs-4 text-primary"></i>
                  </a>
                  <div className="social-placeholder">
                    <i className="fas fa-user fs-4 text-muted"></i>
                  </div>
                </div>
              </div>

              <div className="availability-badge">
                <div className="d-flex align-items-center">
                  <i className="fas fa-check-circle text-muted me-2"></i>
                  <div>
                    <span className="fw-bold">Available for opportunities</span>
                    <p className="text-muted mb-0 small">Open to full-time roles and exciting opportunities</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form Panel */}
        <Col lg={7}>
          <Card className="contact-form-card h-100 border-0 shadow">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-4">
                <i className="fas fa-paper-plane ttext-muted me-3 fs-4"></i>
                <h4 className="mb-0 fw-bold">Send me a message</h4>
              </div>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Tell me about your project, idea, or just say hello!"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-100"
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Section>
  );
}; 