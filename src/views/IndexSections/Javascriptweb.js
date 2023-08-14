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
    src: require("assets/img/web1.jpeg"),
    altText: "Slide 1",
    caption: "",
  },
];
const carouselItems1 = [
  {
    src: require("assets/img/web2.jpeg"),
    altText: "Slide 1",
    caption: "",
  },
];
const carouselItems2 = [
  {
    src: require("assets/img/web3.jpeg"),
    altText: "Slide 1",
    caption: "",
  },
];
const carouselItems3 = [
  {
    src: require("assets/img/web4.jpeg"),
    altText: "Slide 1",
    caption: "",
  },
];

export default function JavaScriptweb() {
  return (
    <>
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />

        <div id="top1" className="section">
          <Container>
            <blockquote>
              <h1 align="center">
                WorkBinders Pvt. Ltd. : Your One-Stop Solution for Premier IT
                Services
              </h1>
              <p align="center" class="blockquote blockquote-info">
                From captivating web development and efficient IT outsourcing to
                strategic IT consulting and innovative software development, we
                offer tailored solutions to meet your unique needs. Our
                commitment to excellence is matched by unbeatable prices,
                ensuring top-notch services that won't strain your budget. With
                a dedicated team and a track record of success, WorkBinders Pvt.
                Ltd. empowers your business with technology, driving growth and
                establishing a formidable online presence in today's competitive
                landscape. At WorkBinders Pvt. Ltd., we believe that superior IT
                services shouldn't come at exorbitant prices. We are committed
                to providing the best-in-class solutions at competitive rates,
                ensuring that businesses of all sizes can leverage top-notch IT
                services without breaking the bank. Our transparent pricing and
                cost-effective packages make us the preferred choice for
                organizations seeking quality and affordability. In the realm of
                IT solutions, WorkBinders Pvt. Ltd. shines as a beacon of
                excellence, offering an array of services designed to elevate
                your business's technological prowess. With a team of dedicated
                experts, a client-centric approach, and a track record of
                success, we are your partners in harnessing the power of
                technology to drive growth and innovation.
              </p>
            </blockquote>
            <Row className="justify-content-between align-items-center">
              <Col lg="6">
                <div className="title">Software Development Services</div>
                <br />
                <UncontrolledCarousel
                  items={carouselItems}
                  indicators={false}
                  autoPlay={false}
                />
                <br />
                <br />
                <Button class="btn btn-success">Know More</Button>
              </Col>

              <Col lg="6">
                <div className="title">Custom Development Services</div>
                <br />
                <UncontrolledCarousel
                  items={carouselItems1}
                  indicators={false}
                  autoPlay={false}
                />
                <br />
                <br />
                <Button class="btn btn-success">Know More</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div id="top1" className="section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <div className="title">IT Outsourcing Services</div>
              <UncontrolledCarousel
                items={carouselItems2}
                indicators={false}
                autoPlay={false}
              />
              <br />
              <br />
              <Button class="btn btn-success">Know More</Button>
            </Col>
            <Col lg="6">
              <div className="title">IT Consulting Services</div>
              <UncontrolledCarousel
                items={carouselItems3}
                indicators={false}
                autoPlay={false}
              />
              <br />
              <br />
              <Button class="btn btn-success">Know More</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
