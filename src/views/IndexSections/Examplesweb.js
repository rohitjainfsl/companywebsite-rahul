import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

export default function Examplesweb() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h2>Our Projects</h2>
        <br />
        <br />
        <Row>
          <Col sm="6">
            <Link to="https://www.vuapo.com/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/project1.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Vaupo(React.js, Node.js, ChatGPT)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.vuapo.com/"
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
            <Link to="https://solelinks.com/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/project2.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Sole Links(React.js, Node.js, Ecommerce, CMS)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://solelinks.com/"
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
              to="https://www.friskissvettis.se/"
              tag={Link}
              target="_blank"
            >
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/project3.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Friskiss Vettis(PHP, Laravel, HTML, CSS, JS)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.friskissvettis.se/"
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
            <Link to="https://plantify.co.za/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/web7.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Plantify(React.js, Node.js, Sendgrid, HTMl, CS, JS, PHP)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://plantify.co.za/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
          </Col>
          <Col sm="6">
            <Link to="https://www.globelink.co.uk/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/web6.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Globelink (PHP, Vue.js, Laravel, HTMl, CS, JS, PHP)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://www.globelink.co.uk/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
          </Col>
          <Col sm="6">
            <Link to="https://pollardi.com/" tag={Link} target="_blank">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/project6.png")}
              />
            </Link>
            <br />
            <br />
            <br />

            <h3>Pollardi(Wordpress, Ecommerce, HTMl, CS, JS, PHP)</h3>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="https://pollardi.com/"
              tag={Link}
              target="_blank"
            >
              View Project
            </Button>
            <br />
          </Col>
        </Row>
        <br />
        <h2>and many more....</h2>
      </Container>
    </div>
  );
}
