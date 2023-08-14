import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Examplesmobilehome() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <Link
              to="https://apps.apple.com/ca/app/just-play-sports/id1510554246"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobpro1.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Justplay(Flutter, Firebase, ROR, Sendgrid)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/ca/app/just-play-sports/id1510554246"
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
              to="https://apps.apple.com/us/app/habitbetter-journal/id1547566146"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobpro2.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Habitbetter (React Native, PHP, Stripe)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/us/app/habitbetter-journal/id1547566146"
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
              to="https://apps.apple.com/us/app/goodaction/id1597182278"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobpro3.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Goodaction (Flutter, Firebase, Stripe) </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/us/app/goodaction/id1597182278"
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
              to="https://play.google.com/store/apps/details?id=com.connectdschools"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobpro4.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Connectd (React Native, Redux, NodeJS) </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://play.google.com/store/apps/details?id=com.connectdschools"
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
              to="https://apps.apple.com/us/app/heartyyfresh-indian-grocery/id1046048302?ign-itscg=30200&ign-itsct=apps_box_badge"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobpro5.jpeg")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Heartyy (React Native, NodeJS, Firebase) </h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/us/app/heartyyfresh-indian-grocery/id1046048302?ign-itscg=30200&ign-itsct=apps_box_badge"
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
              to="https://apps.apple.com/se/app/stepler-gå-och-få/id1451006880"
              tag={Link}
              target="_blank"
            >
              <img
                height={295}
                alt="..."
                className="img-raised"
                src={require("assets/img/mobilex1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Stepler - Gå och få(Flutter, JS, HTML, CSS)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/se/app/stepler-g%C3%A5-och-f%C3%A5/id1451006880"
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
              to="https://apps.apple.com/us/app/treads-app/id1494159985"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/mobilex2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Treads App(React Native, CMS)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://apps.apple.com/us/app/treads-app/id1494159985"
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
            <Link to="https://www.wahlbeck.app/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/wahlbeck.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Wahlbeck(Mobile App, Flutter, Stripe)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.wahlbeck.app/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
