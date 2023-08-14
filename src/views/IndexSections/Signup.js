import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  UncontrolledTooltip,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="5">
            <h3 className="display-3 text-white">
              Contact Us
              {/* <span className="text-white"></span> */}
            </h3>
            <p className="text-white mb-3">
              Ready to take your business to new heights? Partner with
              Workbinders Pvt. Ltd., and unlock the true potential of your
              business with our top-notch IT solutions. Contact us today for a
              consultation and let us be your technology partner on the path to
              success. Our team of skilled professionals stands ready to provide
              top-notch services in software development, web design, app
              creation, and more. Whether you are a startup seeking guidance or
              an established enterprise looking to scale up, we have the
              expertise to assist you. Reach out to us today, and let's
              collaborate to drive your business forward with technology that
              truly empowers. Your success is our priority!
            </p>
            <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Contact Us
              </Button>
            </div>
          </Col>
          <Col md="6">
            <Card className="card-plain1">
              <CardHeader>
                <h1 className="profile-title text-left">Contact Us</h1>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Your Name</label>
                        <Input defaultValue="Mike" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Email address</label>
                        <Input placeholder="mike@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Phone</label>
                        <Input defaultValue="001-12321345" type="text" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Company</label>
                        <Input defaultValue="CreativeTim" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Message</label>
                        <Input placeholder="Hello there!" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    className="btn-round float-right"
                    color="primary"
                    data-placement="right"
                    id="tooltip341148792"
                    type="button"
                  >
                    Send Now
                  </Button>
                  <UncontrolledTooltip
                    delay={0}
                    placement="right"
                    target="tooltip341148792"
                  >
                    Can't wait for your message
                  </UncontrolledTooltip>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
