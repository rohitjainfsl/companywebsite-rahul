import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

export default function Basics() {
  return (
    <div className="section section-basic" id="basic-elements">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <h2 className="title">Basic Elements</h2>
        <p className="category">Pick your color</p>
        <Row>
          <Col md="12">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="info">Info</Button>
            <Button color="success">Success</Button>
            <Button className="btn-neutral" color="default">
              Neutral
            </Button>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
