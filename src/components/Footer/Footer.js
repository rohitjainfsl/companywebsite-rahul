import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import {
  NavbarBrand,
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <>
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
              href="contact-us"
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
              href="https://www.linkedin.com/company/work-binders"
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
              href="https://www.facebook.com/people/Workbinders/100068616481223/"
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
              href="https://www.instagram.com/workbinders/?hl=en"
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
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <NavbarBrand to="/" tag={Link} id="navbar-brand">
                <span>
                  <img className="Logo-top" src={Logo} alt="Logo" />
                </span>
              </NavbarBrand>

              <div>
                <p>
                  1002-B, Golden Leaf Apartments, Tonk Road, Jaipur, RJ, India -
                  302018
                </p>
                <p>+91-9680818234</p>
                <p>hello@workbinders.com</p>
              </div>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink target="_top" to="/web-development" tag={Link}>
                    Web Development
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_top" to="/mobile-development" tag={Link}>
                    Mobile App Development
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_top" to="/no-code-development" tag={Link}>
                    No-Code Development
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_top" to="/digital-marketing" tag={Link}>
                    Digital Marketing
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink target="_top" href="/uiux-design">
                    UI/UX Design
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_top" to="/about-us" tag={Link}>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink target="_top" to="/contact-us" tag={Link}>
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    target="_top"
                    target="_blank"
                    href="https://workbinders.com/blog"
                  >
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.instagram.com/workbinders/?hl=en"
                  id="tooltip622135962"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/people/Workbinders/100068616481223/"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/company/work-binders"
                  id="tooltip318450378"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Linkedin
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
