import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/slide3.jpg"),
    altText: "Slide 1",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <Container id="top4">
        <Row id="modals"></Row>
      </Container>
      <div className="section">
        <Container>
          <div className="title"></div>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Result-Driven Digital Marketing
              </h1>
              <p className="text-white mt-4">
                In today's highly competitive digital landscape, effective
                digital marketing is essential to stand out from the crowd and
                reach your target audience. Our result-driven digital marketing
                strategies are tailored to boost your online visibility, drive
                targeted traffic, and increase conversions. Our skilled digital
                marketers use a data-driven approach, conducting thorough market
                research and competitor analysis to develop a comprehensive
                marketing plan. We offer a wide range of digital marketing
                services, including Search Engine Optimization (SEO),
                Pay-Per-Click (PPC) advertising, social media marketing, content
                marketing, email marketing, and more. Our goal is to help you
                achieve a strong online presence and maximize your return on
                investment (ROI).
              </p>

              <Button
                target="_blank"
                className="mt-4"
                color="warning"
                href="digital-marketing"
              >
                Know More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
