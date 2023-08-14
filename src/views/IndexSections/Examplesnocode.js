import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Examplesnocode() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h2>Our No Code Projects</h2>
        <br />
        <br />
        <Row>
          <Col sm="6">
            <Link to="https://www.pvp.com/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/project5.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>PVP(No-Code, Bubble.io, Stripe, Mobile App + Web App)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.pvp.com/"
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
            <Link to="https://incomee.co/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubble3.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>
              Incomee(No-Code, Bubble.io, Stripe, Twilio, JS, Multi Plugin, Web
              App)
            </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://incomee.co/"
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
        </Row>
        <Row>
          <Col sm="6">
            <Link to="https://reachrsocial.com/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubble4.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>
              Reachr(No-Code, Bubble.io, Stripe, SMM Integration, Web App)
            </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://reachrsocial.com/"
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
              to="https://apps.apple.com/us/app/five-stars-delivery/id1612800654"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubble2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>
              Five Stars Delivery (No-Code Mobile Apps, Bubble.io, Stripe,
              Twilio API, Mobile App)
            </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/us/app/five-stars-delivery/id1612800654"
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
        </Row>
        <Row>
          <Col sm="6">
            <Link to="https://switchboard.media/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubble5.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>
              Switch Board(No-Code, Bubble.io, Stripe, Email Integration, Twilio
              API, Web App)
            </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://switchboard.media/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
          </Col>
          <Col sm="6">
            <Link
              to="https://play.google.com/store/apps/details?id=com.zqblueshirt"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubble6.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Blue Shirt(No-Code, Bubble.io, Twilio, Mobile App)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://play.google.com/store/apps/details?id=com.zqblueshirt"
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
        </Row>
        <Row>
          <Col sm="6">
            <Link to="https://artquest.org.uk/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubb1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Artquest(No-Code, Bubble.io, Stripe, Twilio API, Web App)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://artquest.org.uk/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
          <Col sm="6">
            <Link
              to="https://play.google.com/store/apps/details?id=com.zqnative_indianlocal&pli=1"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/bubble1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Indian Local(No-Code Mobile, Bubble.io, Mobile App)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://play.google.com/store/apps/details?id=com.zqnative_indianlocal&pli=1"
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
        </Row>

        <h2>and many more....</h2>
      </Container>
    </div>
  );
}
