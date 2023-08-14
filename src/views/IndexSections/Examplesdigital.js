import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Examplesdigital() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h2>Our SEO Projects</h2>
        <br />
        <br />
        <Row>
          <Col sm="6">
            <Link
              to="https://www.mindfulmarket.com/"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/seoop1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Mindful Market (SEO Optimized built in React.js) </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.mindfulmarket.com/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col sm="6">
            <Link to="http://www.localwanderer.com/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/seoop2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Local Wanderer (SEO Optimized built with React.js)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="http://www.localwanderer.com/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
          </Col>
        </Row>
        <h2 align="center"> and many more...</h2>
        <br />
        <br />

        <br />
        <h2>Our Paid Marketing campaigns</h2>
        <br />
        <Row>
          <Col sm="6">
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/adword1.png")}
            />

            <br />
            <br />

            <br />

            <h3>PPC Campaign results </h3>

            <br />
          </Col>
          <Col sm="6">
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/adword2.JPG")}
            />

            <br />
            <br />
            <br />

            <h3>PPC Campaign results </h3>
          </Col>
        </Row>
        <h2 align="center"> and many more...</h2>
        <br />
        <br />

        <br />
        <br />
        <h2>Our UI/UX Projects</h2>
        <br />
        <Row>
          <Col sm="6">
            <Link
              to="https://www.figma.com/file/PdTUaJ0kvImIGz5UFsW98m/Feedelio-italian-text?type=design&mode=design&t=8cngueh3j5mxAzB5-0"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/ui1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Feedelio (Insurance platform built on Figma)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.figma.com/file/PdTUaJ0kvImIGz5UFsW98m/Feedelio-italian-text?type=design&mode=design&t=8cngueh3j5mxAzB5-0"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col sm="6">
            <Link
              to="https://www.figma.com/file/JzqYXtWIiBgIz272lYhkWY/HOMEMADE-APP?type=design&mode=design&t=PPJCa7zueT94tamB-0"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/ui2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Homemade (Mobile APP designed in Figma)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.figma.com/file/JzqYXtWIiBgIz272lYhkWY/HOMEMADE-APP?type=design&mode=design&t=PPJCa7zueT94tamB-0"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
          </Col>
        </Row>

        <h2>and many more....</h2>
      </Container>
    </div>
  );
}
