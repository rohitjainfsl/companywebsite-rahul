import React from "react";
import classnames from "classnames";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

export default function PaginationSection() {
  const [pills, setPills] = React.useState(1);
  return (
    <div className="section section-pagination">
      <img alt="..." className="path" src={require("assets/img/path4.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container>
        <Row>
          <Col md="12">
            <h3 id="top" className="page-heading" align="center">
              Explore what we offer
            </h3>

            <br />
            <br />
            <Nav className="nav-pills-info nav-pills-icons" pills>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 1,
                  })}
                  onClick={(e) => setPills(1)}
                  href="web-development"
                >
                  <i className="tim-icons icon-laptop" />
                  Web Development
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 2,
                  })}
                  onClick={(e) => setPills(2)}
                  href="#top2"
                >
                  <i className="tim-icons icon-tablet-2" />
                  Mobile Development
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 3,
                  })}
                  onClick={(e) => setPills(3)}
                  href="#top3"
                >
                  <i className="tim-icons icon-puzzle-10" />
                  No-Code Development
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 4,
                  })}
                  onClick={(e) => setPills(4)}
                  href="#top4"
                >
                  <i className="tim-icons icon-spaceship" />
                  Digital Marketing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 5,
                  })}
                  onClick={(e) => setPills(5)}
                  href="#top5"
                >
                  <i className="tim-icons icon-palette" />
                  UI/UX Design
                </NavLink>
              </NavItem>
            </Nav>
            <br />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
