import React from "react";
import classnames from "classnames";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  UncontrolledTooltip,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact Us</h1>
                      <h5 align="left">
                        Connect with Us: WorkBinders Pvt. Ltd. is your gateway
                        to comprehensive digital solutions. Whether it's
                        crafting dynamic websites, executing impactful digital
                        marketing campaigns, or developing innovative no-code
                        applications and mobile apps, we're here to bring your
                        vision to life. Our dedicated team is ready to
                        collaborate, ensuring your digital journey is a success.
                        Reach out to us today and let's embark on a
                        transformative partnership. Your success is our
                        priority, and we're excited to turn your ideas into
                        reality.
                      </h5>
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
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                              />
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
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: squares1to6 }}
                />
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <br />
          <br />
          <h2 align="center" className="cpageh">
            Why Choose Us?
          </h2>
          <div className="cpage">
            <div>
              <p align="left" className="details">
                <i className="tim-icons icon-planet" />
                &nbsp; 15+ years in IT to deliver value that lasts
                <br />
                <br />
                <i className="tim-icons icon-planet" />
                &nbsp; More than 700+ success stories
                <br />
                <br />
                <i className="tim-icons icon-planet" />
                &nbsp; Over 40 specialists in the team
                <br />
                <br />
                <i className="tim-icons icon-planet" />
                &nbsp; Over 40 specialists in the team
                <br />
                <br />
              </p>
            </div>
            <div>MAPS</div>
          </div>
          <div>
            <br />
            <br />
            <h2 align="center" className="cpageh">
              Our Office
            </h2>
            <h3 align="center">
              1002-B, Golden Leaf Apartments, Tonk Road, Jaipur, RJ, India -
              302018 <br /> +91-9680818234 <br />
              hello@workbinders.com
            </h3>
            <br />
            <br />
          </div>
        </Container>

        <Footer />
      </div>
    </>
  );
}
