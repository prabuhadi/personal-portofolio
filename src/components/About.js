import { Container, Col, Row } from "react-bootstrap";
import { DateTime } from "luxon";
import profileImage from "../assets/img/profilePicture.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cv from "../assets/data/CV.pdf";

export const About = () => {
  const yearNow = DateTime.now().year;
  const yearBirth = DateTime.local(1999).year;

  const myAge = yearNow - yearBirth;

  return (
    <section className="about">
      <Container>
        <Row className="align-items-center mb-5">
          <h2>About Me</h2>
          <Col xs={12} md={6} xl={5}>
            <img className="profileImg" src={profileImage} alt="About img" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <p className="age">
              My full name is Prabu Hadi Aryasetya, I'm {myAge} years old
              developer with zero experience. I currently searching some
              available job position related to web developer. I'm fresh
              graduate from Diploma and currently in last year for completing my
              Banchlor Degree. I'm really interest with designing website and
              UI/UX relatable. Last year I just started coding and self-taught
              learning in HTML, CSS and JavaScript.
            </p>
            <a href={cv} download>
              Download Personal CV
            </a>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
