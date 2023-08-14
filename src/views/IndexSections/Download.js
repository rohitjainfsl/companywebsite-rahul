/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              Ready to transform your business with innovative IT solutions?
            </h2>
            <h4 className="description">
              Partner with Workbinders Pvt. Ltd. and unlock the true potential
              of your digital presence. Contact us today for a consultation, and
              let us be your trusted technology partner on the path to success.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
              role="button"
              size="lg"
            >
              Contact Us
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-light mb-2">Know More!</h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="linkedin"
              id="twitter"
              size="lg"
            >
              <i className="fab fa-linkedin" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Linkedin
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Facebook
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="instagram"
              href="https://github.com/creativetimofficial"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Instagram
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
