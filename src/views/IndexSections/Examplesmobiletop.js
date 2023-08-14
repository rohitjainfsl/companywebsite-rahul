import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Examplesmobiletop() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <blockquote>
          <h1 align="center">
            Mobilizing Excellence: Crafting Dynamic Android, iOS, and Native
            Apps with WorkBinders Pvt. Ltd
          </h1>
          <p align="center" class="blockquote blockquote-info">
            As your comprehensive destination for premium mobile development
            services, we bring you the zenith of technological prowess, crafting
            captivating Android, iOS, and native apps that redefine user
            experiences. Our forte lies in meticulously tailoring solutions that
            seamlessly align with your distinct needs and aspirations.
            Unwavering in our pursuit of excellence, we harmonize unbeatable
            prices with a commitment to top-notch services, ensuring your
            financial plans remain undisturbed. Our passion-driven team, coupled
            with a history of triumphant outcomes, stands poised to catapult
            your business to new heights. At WorkBinders Pvt. Ltd., we empower
            your business with cutting-edge mobile technology that not only
            refines user interactions but also secures your foothold in the
            fiercely competitive digital domain. As the digital landscape
            evolves, your mobile presence remains resolute and impactful.
            Experience the transformational power of mobile innovation through
            WorkBinders Pvt. Ltd. Your success story begins here, where
            innovation, affordability, and excellence converge to sculpt a
            brighter, more dynamic future for your business.
          </p>
        </blockquote>
        <br />
        <br />
        <br />
        <Row>
          <Col sm="6">
            <Link to="/android-development" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobile1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Android Apps Development</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/android-development"
              tag={Link}
              target="_blank"
            >
              Know More
            </Button>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col sm="6">
            <Link to="/ios-development" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobile2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>iOS Apps Development</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/ios-development"
              tag={Link}
              target="_blank"
            >
              Know More
            </Button>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col sm="6">
            <Link
              to="/cross-platform-apps-development"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobile3.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Cross-Platform Apps Development</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/cross-platform-apps-development"
              tag={Link}
              target="_blank"
            >
              Know More
            </Button>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col sm="6">
            <Link to="/no-code-mobile-development" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobile4.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>No-Code Mobile Apps Development Services</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/no-code-mobile-development"
              tag={Link}
              target="_blank"
            >
              Know More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
