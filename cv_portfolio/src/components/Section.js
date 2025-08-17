import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Section = ({ id, title, subtitle, children, bgColor = "light" }) => {
  return (
    <section id={id} className={`section-${bgColor}`}>
      <Container className="py-5">
        <Row className="mb-5">
          <Col>
            <div className="section-header text-center">
              <h2 className="section-title">{title}</h2>
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
          </Col>
        </Row>
        {children}
      </Container>
    </section>
  );
}; 