import React from "react";
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/slide2.jpg"),
    altText: "Slide 1",
    caption: "",
  },
];

export default function JavaScript() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <div id="top2" className="section">
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
                Innovative Mobile Development
              </h1>
              <p className="text-white mt-4">
                In the fast-paced digital landscape, having a powerful mobile
                application is crucial for your business's success. Our mobile
                development team stays ahead of the curve, keeping up with the
                latest trends and technologies to build cutting-edge mobile apps
                for both Android and iOS platforms. Whether you need a
                standalone app or a cross-platform solution, we've got you
                covered. We begin by comprehensively analyzing your business
                requirements, creating a tailored mobile strategy that enhances
                user engagement and boosts conversions. Our experienced
                developers follow a meticulous development process to ensure
                that your app is not only visually stunning but also highly
                functional, scalable, and secure.
              </p>

              <Button
                target="_blank"
                className="mt-4"
                color="warning"
                href="mobile-development"
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
