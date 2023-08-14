import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>
              <img className="Logo-top" src={Logo} alt="Logo" />
            </span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Workbinders Pvt. Ltd.
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Workbinders Pvt. Ltd.
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>

          <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Web
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/web-development">
                  <i className="tim-icons icon-puzzle-10" />
                  Web Development
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/software-development"
                >
                  <i className="tim-icons icon-notes" />
                  Software Development
                </DropdownItem>
                <DropdownItem tag={Link} target="_top" to="/custom-development">
                  <i className="tim-icons icon-bullet-list-67" />
                  Custom Development
                </DropdownItem>
                <DropdownItem tag={Link} target="_top" to="/it-outsourcing">
                  <i className="tim-icons icon-send" />
                  IT Outsourcing
                </DropdownItem>
                <DropdownItem tag={Link} target="_top" to="/it-consulting">
                  <i className="tim-icons icon-single-02" />
                  IT Consulting
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/wordpress-development"
                >
                  <i className="tim-icons icon-support-17" />
                  Wordpress Development
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/shopify-development"
                >
                  <i className="tim-icons icon-bag-16" />
                  Shopify Development
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Mobile
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} target="_top" to="/mobile-development">
                  <i className="tim-icons icon-tablet-2" />
                  Mobile Development
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/android-development"
                >
                  <i className="tim-icons icon-bulb-63" />
                  Android Development
                </DropdownItem>
                <DropdownItem tag={Link} target="_top" to="/ios-development">
                  <i className="tim-icons icon-watch-time" />
                  iOS Development
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/cross-platform-apps-development"
                >
                  <i className="tim-icons icon-vector" />
                  Cross-Platform
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Digital Marketing
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} target="_top" to="/digital-marketing">
                  <i className="tim-icons icon-spaceship" />
                  Digital Marketing
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/social-media-marketing"
                >
                  <i className="tim-icons icon-volume-98" />
                  Social Media Marketing
                </DropdownItem>
                <DropdownItem tag={Link} target="_top" to="/seo-services">
                  <i className="tim-icons icon-planet" />
                  SEO
                </DropdownItem>

                <DropdownItem tag={Link} target="_top" to="/uiux-design">
                  <i className="tim-icons icon-palette" />
                  UI/UX-Design
                </DropdownItem>
                <DropdownItem tag={Link} target="_top" to="/paid-marketing">
                  <i className="tim-icons icon-money-coins" />
                  Paid Marketing
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                No-Code
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} target="_top" to="/nocode">
                  <i className="tim-icons icon-molecule-40" />
                  No-Code Development
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/no-code-web-development"
                >
                  <i className="tim-icons icon-compass-05" />
                  No-Code Web Apps
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  target="_top"
                  to="/no-code-mobile-development"
                >
                  <i className="tim-icons icon-controller" />
                  No-Code Mobile Apps
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/workbinders"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/people/Workbinders/100068616481223/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Facebook"
              >
                <i className="fab fa-facebook" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/company/work-binders"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Linkedin"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://www.workbinders.com/blog"
              >
                <i className="tim-icons icon-spaceship" /> Blog
              </Button>
            </NavItem>

            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                href="/contact-us"
              >
                <i className="tim-icons icon-badge" /> Contact Us
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
