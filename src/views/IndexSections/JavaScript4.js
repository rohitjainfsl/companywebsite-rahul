import React from "react";

import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/slide4.jpg"),
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
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container id="top5">
        <Row id="modals"></Row>
      </Container>
      <div className="section">
        <Container>
          <div className="title"></div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">UI/UX Design</h1>
              <p className="text-white mt-4">
                WorkBinders Pvt. Ltd. is a dynamic and innovative agency
                specializing in web development, digital marketing, and mobile
                app development. With a passion for excellence and a commitment
                to client success, WorkBinders leverages cutting-edge
                technologies to craft bespoke solutions for businesses of all
                sizes. From designing captivating websites that engage customers
                to executing result-driven digital marketing campaigns, our team
                of experts delivers measurable results and a competitive edge in
                today's fast-paced digital landscape. Whether you seek to
                enhance your online presence or launch a game-changing mobile
                app, WorkBinders Pvt. Ltd. is your reliable partner in achieving
                digital greatness.
              </p>

              <Button className="mt-4" color="warning" href="uiux-design">
                Know More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
