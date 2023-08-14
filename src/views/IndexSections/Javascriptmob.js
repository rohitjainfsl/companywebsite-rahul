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
    src: require("assets/img/mobile1.png"),
    altText: "Slide 1",
    caption: "",
  },
];
const carouselItems1 = [
  {
    src: require("assets/img/mobile2.png"),
    altText: "Slide 1",
    caption: "",
  },
];
const carouselItems2 = [
  {
    src: require("assets/img/mobile3.png"),
    altText: "Slide 1",
    caption: "",
  },
];
const carouselItems3 = [
  {
    src: require("assets/img/mobile4.png"),
    altText: "Slide 1",
    caption: "",
  },
];

export default function JavaScriptmob() {
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
                Mobilizing Excellence: Crafting Dynamic Android, iOS, and Native
                Apps with WorkBinders Pvt. Ltd
              </h1>
              <p align="center" class="blockquote blockquote-info">
                As your comprehensive destination for premium mobile development
                services, we bring you the zenith of technological prowess,
                crafting captivating Android, iOS, and native apps that redefine
                user experiences. Our forte lies in meticulously tailoring
                solutions that seamlessly align with your distinct needs and
                aspirations. Unwavering in our pursuit of excellence, we
                harmonize unbeatable prices with a commitment to top-notch
                services, ensuring your financial plans remain undisturbed. Our
                passion-driven team, coupled with a history of triumphant
                outcomes, stands poised to catapult your business to new
                heights. At WorkBinders Pvt. Ltd., we empower your business with
                cutting-edge mobile technology that not only refines user
                interactions but also secures your foothold in the fiercely
                competitive digital domain. As the digital landscape evolves,
                your mobile presence remains resolute and impactful. Experience
                the transformational power of mobile innovation through
                WorkBinders Pvt. Ltd. Your success story begins here, where
                innovation, affordability, and excellence converge to sculpt a
                brighter, more dynamic future for your business.
              </p>
            </blockquote>
            <Row className="justify-content-between align-items-center">
              <Col lg="6">
                <div className="title">Android Development Services</div>
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
                <div className="title">iOS Development Services</div>
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
              <div className="title">Native Apps Development Services</div>
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
              <div className="title">
                No-Code Mobile Apps Development Services
              </div>
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
