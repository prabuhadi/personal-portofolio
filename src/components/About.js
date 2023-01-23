import { Container, Col, Row } from "react-bootstrap";
import profileImage from "../assets/img/profilePicture.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const About = () => {
  return (
    <section className="about">
      <Container>
        <Row className="align-items-center mb-5">
          <h2>About Me</h2>
          <Col xs={12} md={6} xl={5}>
            <img src={profileImage} alt="About img" />
          </Col>
          <Col xs={12} md={6} xl={7}>
            <p>
              My full name is Prabu Hadi Aryasetya, I'm 23 years old developer
              with zero experience. I currently searching some available job
              position related to web developer. I'm fresh graduate from Diploma
              and currently in last year for completing my Banchlor Degree. I'm
              really interest with designing website and UI/UX relatable. Last
              year I just started coding and self-taught learning in HTML, CSS
              and JavaScript.
            </p>
            <a href="https://doc-0g-c4-docs.googleusercontent.com/docs/securesc/cabmn8sa05lg0vqfr53tu02ur8qcverf/eep58e6m6mqsqpno0ko4u4kfbj8nfp5h/1674481050000/14990498036892199860/14990498036892199860/14NKryN8y3o8C4TQygEyFDv2JAhnE9S9g?e=download&ax=ALjR8sx7zF9IqSR5jhNX8FYuNW9EHJLIhEbI0rm9lA_PsB8bBRXopF5FKe_aeMs7olbzeOg0ZSIh8PuyuoGltdRuicab12pMpbjrdFnmQu5wGaHCCQuFlDnFeRmWB93rcBxj30XG427auGPCtKidXf5EVifwklJpk279TusBd9Nlkm7r1gi9aX4VyxGAzc7KvTWr6gHPyyAi3coW0syBTGn1MyxRGCK9ub1bQ_c2x38Xis2TUXoU3r0E-cWpdmJM-hHPh7e27iUgFQ-rGKllTg3fQg4CVc0NbRtjSOJwofc7UY9GnR7eTta33N86QMeAPh2_V5qGE41ZO2XXUW62o2ZGWOB89Nh6jX9b_1q_-yEDg2GiKgv_2WAos9YT_M2gQ4Tmz46ztyp5OZrAoIeKavq1oan6G8IkRWNzj9YxDO6q9e77OFnvjxlf7oeZ7wzkq_Ou7uZfUyIyn8dNDFr8ZxL-bytlqkhn6tFaSYL0PF1UGDYvsDSs0l8Di1KllZjlg7WySqEJO8YDWSGczrB4UlV7oXZbiMyTVMyqnEwNAK-MpGsOXBiO2MkD8RnnGMvXkms6F_YVx0ganISkQT4Bw4F5x71OnIqj89u4STno5tiN4KSdtk0KPREehwCqCruMZWWeQ27In0zjobmejkdVPy-vS3xzRAEFrS4RTR4AElcz5BNoYH50tRFxy5yo90AdMLf4YKMrBLgVLTqxozJAgKfFCo1gdCSnAxrqiEOghAnJRLRjbZiwj5CNkvku7ImMjU1JtbcrYmMIwfNQf5LvXw0UhmpsBQIqhHSsadm7LS6L70JySinU8s6gLr4SIvJhz6qjRJjoMu_ZUJio8ixCcmjDGoCbhsDKMbN4a86c_nEqnwvzjnC5euWa_eKrk6d0bctOOzRZERrkOyCEwX941w1jVO1tfZcmBPbOubjoKQ&uuid=eb124c3f-06df-41c4-b9b4-c45bbb1cd733&authuser=0">
              Download Personal CV
            </a>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
