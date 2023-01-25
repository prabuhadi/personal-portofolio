import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import projImg15 from "../assets/img/project-img15.png";
import projImg16 from "../assets/img/project-img16.png";
import projImg17 from "../assets/img/project-img17.png";
import projImg18 from "../assets/img/project-img18.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg14,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg16,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg7,
    },
  ];

  const projects2 = [
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg13,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg12,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg17,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg15,
    },
  ];

  const projects3 = [
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg18,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project mb-5" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : "animate__animated animate__fadeOut"
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I'm happy to share my work related to website developer and
                    I've been building some landing pages, custom websites and
                    e-commerce food. I'm very much ready for general job
                    opportunities and need a monthly salary. If you want to see
                    my work portfolio and have some communication with me, feel
                    free to connect via email.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">|</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">||</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">|||</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background image"
        src={colorSharp2}
      ></img>
    </section>
  );
};
