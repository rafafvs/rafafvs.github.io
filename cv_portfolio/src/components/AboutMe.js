import { Container, Row, Col } from "react-bootstrap";
import { Section } from "./Section";
import aboutMeImg from "../assets/img/about-me-img.jpg"

export const AboutMe = () => {
    return (
        <Section id="home" title="About Me" bgColor="light">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={5}>
                    <div className="about-image">
                        <img className="about-me-img" src={aboutMeImg} alt="About Me"/>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <div className="about-text">
                        <span className="tagline">A little about me!</span>
                        <h1>{`Hi! I'm Rafael`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap"></span></span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </Col>
            </Row>
        </Section>
    )
}