import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className="">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap"></span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect </button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div className="">
                  Hi
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
