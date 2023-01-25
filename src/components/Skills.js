import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
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
              <Row>
                <Col>
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      Building website with visually comfortable with stable
                      element of every aspect of website.<br></br> Some core
                      should be user friendly, easy to structure, simple to
                      manage and fast, so that it is easy to do navigation using
                      it.<br></br> So, the core is design program which I
                      usually use in my projects.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5>Front-End</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="Image" />
                        <h5>Back-End</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="Image" />
                        <h5>UI/UX Design</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5>Web Design</h5>
                      </div>
                    </Carousel>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
