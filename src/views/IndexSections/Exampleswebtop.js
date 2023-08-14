import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Exampleswebtop() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <blockquote>
          <h1 align="center">
            WorkBinders Pvt. Ltd. : Your One-Stop Solution for Premier IT
            Services
          </h1>
          <p align="center" class="blockquote blockquote-info">
            From captivating web development and efficient IT outsourcing to
            strategic IT consulting and innovative software development, we
            offer tailored solutions to meet your unique needs. Our commitment
            to excellence is matched by unbeatable prices, ensuring top-notch
            services that won't strain your budget. With a dedicated team and a
            track record of success, WorkBinders Pvt. Ltd. empowers your
            business with technology, driving growth and establishing a
            formidable online presence in today's competitive landscape. At
            WorkBinders Pvt. Ltd., we believe that superior IT services
            shouldn't come at exorbitant prices. We are committed to providing
            the best-in-class solutions at competitive rates, ensuring that
            businesses of all sizes can leverage top-notch IT services without
            breaking the bank. Our transparent pricing and cost-effective
            packages make us the preferred choice for organizations seeking
            quality and affordability. In the realm of IT solutions, WorkBinders
            Pvt. Ltd. shines as a beacon of excellence, offering an array of
            services designed to elevate your business's technological prowess.
            With a team of dedicated experts, a client-centric approach, and a
            track record of success, we are your partners in harnessing the
            power of technology to drive growth and innovation.
          </p>
        </blockquote>
        <br />
        <br />
        <br />
        <Row>
          <Col sm="6">
            <Link to="/software-development" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/web1.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Software Development</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/software-development"
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
            <Link to="/custom-development" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/web2.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Custom Development</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/custom-development"
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
            <Link to="/it-outsourcing" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/web3.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>IT Outsourcing</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/it-outsourcing"
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
            <Link to="/it-consulting" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/web4.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>IT Consulting</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="/it-consulting"
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
