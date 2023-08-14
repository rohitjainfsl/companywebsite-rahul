import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Examplesdigitaltop() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <blockquote>
          <h1 align="center">
            Transforming Your Digital Presence: Digital Marketing, No-Code
            Development, and UI-UX Excellence by WorkBinders Pvt. Ltd
          </h1>
          <p align="center" class="blockquote blockquote-info">
            WorkBinders Pvt. Ltd. presents a transformative approach that
            seamlessly integrates digital marketing, no-code development, and
            UI-UX design. With a keen understanding of the evolving digital
            landscape, our dedicated team crafts tailored strategies that
            enhance your online visibility and drive meaningful engagement. Our
            holistic approach extends to innovative no-code development
            techniques, ensuring swift deployment of custom web solutions, while
            our UI-UX design experts create captivating user experiences. From
            SEO and PPC advertising to intuitive interfaces and immersive
            experiences, our services reflect your brand's uniqueness,
            delivering tangible results. As your strategic partner, WorkBinders
            Pvt. Ltd. empowers you to establish a robust online presence,
            captivate your audience, and forge lasting digital connections. Join
            us in embracing the future of digital transformation, where
            strategic digital marketing converges seamlessly with innovative
            no-code development and impeccable UI-UX design, creating a dynamic
            online world for your brand's narrative to unfold.
          </p>
        </blockquote>
        <br />
        <br />
        <br />
        <Row>
          <Col sm="6">
            <Link to="/social-media-marketing" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/smm1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Social Media Marketing</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/social-media-marketing"
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
            <Link to="/seo-services" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/seo1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>SEO Services</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/seo-services"
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
            <Link to="/uiux-design" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/slide4.jpg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>UI/UX Design</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/uiux-design"
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
            <Link to="/paid-marketing" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/paid2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Paid Marketing</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/paid-marketing"
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
