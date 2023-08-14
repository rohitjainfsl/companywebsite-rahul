import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/nocode.png"),
    altText: "Slide 1",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path4.png")}
      />
      <Container id="top3">
        <Row id="modals"></Row>
      </Container>
      <div className="section">
        <Container>
          <div className="title"></div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                No-Code Development Solutions
              </h1>
              <p className="text-white mt-4">
                Embrace the future of software development with our no-code
                solutions. Our no-code development services empower businesses
                to create sophisticated applications without the need for
                traditional coding. By leveraging no-code platforms and tools,
                we accelerate the development process, reducing costs and
                time-to-market significantly. Our expert developers possess a
                deep understanding of various no-code platforms, such as Bubble,
                Webflow, and Appgyver, among others. Whether you need a custom
                internal application or an innovative customer-facing tool,
                we'll craft a solution that aligns seamlessly with your business
                processes and delivers tangible results.
              </p>

              <Button
                target="_blank"
                className="mt-4"
                color="warning"
                href="nocode-development"
              >
                Know More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
