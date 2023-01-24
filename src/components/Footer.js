import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "../components/MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={5}>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
            <p>
              Powered with React made with <span>❤</span>
            </p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/prabuhadi">
                <img src={navIcon1} alt="Github Icon" />
              </a>
              <a href="https://www.linkedin.com/in/prabuhadi/">
                <img src={navIcon2} alt="LinkedIn Icon" />
              </a>
              <a href="https://www.instagram.com/prabuhd.rya/">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
            <p>Copyright &copy;2023 &mdash; All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
