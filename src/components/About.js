import { Container, Col, Row } from "react-bootstrap";
import { DateTime } from "luxon";
import profileImage from "../assets/img/profilePicture.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cv from "../assets/data/CV.pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  const yearNow = DateTime.now().year;
  const yearBirth = DateTime.local(1999).year;

  const myAge = yearNow - yearBirth;

  return (
    <section className="about mb-5">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__fadeIn"
                  : "animate__animated animate__fadeOut"
              }
            >
              <Row className="align-items-center mb-5">
                <h2>About Me</h2>
                <Col xs={12} md={6} xl={5}>
                  <img
                    className="profileImg"
                    src={profileImage}
                    alt="About img"
                  />
                </Col>
                <Col xs={12} md={6} xl={7}>
                  <p className="age">
                    My full name is Prabu Hadi Aryasetya, I'm {myAge} years old
                    developer with zero experience. I currently searching some
                    available job position related to web developer. I'm fresh
                    graduate from Diploma and currently in last year for
                    completing my Banchlor Degree. I'm really interest with
                    designing website and UI/UX relatable. Last year I just
                    started coding and self-taught learning in HTML, CSS and
                    JavaScript.
                  </p>
                  <a href={cv} download>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="download-icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download CV
                  </a>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
