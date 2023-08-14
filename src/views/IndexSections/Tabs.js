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
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  Progress,
  NavLink,
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 id="tab-heading" align="center" className="mb-3">
            From the Vault
          </h3>
          <br />
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="12">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      React.JS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bulb-63" />
                      Node.JS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3,
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-compass-05" />
                      Angular.JS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 4,
                      })}
                      onClick={(e) => setIconsTabs(4)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-puzzle-10" />
                      PHP
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 5,
                      })}
                      onClick={(e) => setIconsTabs(5)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-molecule-40" />
                      Laravel
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 6,
                      })}
                      onClick={(e) => setIconsTabs(6)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-trophy" />
                      Bubble.io
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 7,
                      })}
                      onClick={(e) => setIconsTabs(7)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-html5" />
                      HTML5
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 8,
                      })}
                      onClick={(e) => setIconsTabs(8)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-link-72" />
                      CSS3
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="100" value="93">
                        <span className="progress-value">93</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="10" value="9">
                        <span className="progress-value">9</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link2">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="100" value="58">
                        <span className="progress-value">58</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="10" value="7">
                        <span className="progress-value">7</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link3">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="100" value="34">
                        <span className="progress-value">34</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="10" value="6">
                        <span className="progress-value">6</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link4">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="100" value="97">
                        <span className="progress-value">97</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="10" value="10">
                        <span className="progress-value">10</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link5">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="100" value="77">
                        <span className="progress-value">77</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="10" value="10">
                        <span className="progress-value">10</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link6">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="100" value="18">
                        <span className="progress-value">18</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="7" value="4">
                        <span className="progress-value">4</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link7">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="1000" value="949">
                        <span className="progress-value">949</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="15" value="15">
                        <span className="progress-value">15</span>
                      </Progress>
                    </div>
                  </TabPane>
                  <TabPane tabId="link8">
                    <div className="progress-container">
                      <span className="progress-badge">
                        Number of Projects worked
                      </span>
                      <Progress max="1000" value="933">
                        <span className="progress-value">933</span>
                      </Progress>
                    </div>
                    <div className="progress-container progress-info">
                      <span className="progress-badge">Years of Expertise</span>
                      <Progress max="15" value="15">
                        <span className="progress-value">15</span>
                      </Progress>
                    </div>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          {/* <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With text
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4,
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5,
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#pablo"
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6,
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power of choice is untrammelled
                      and when nothing prevents our being able to do what we
                      like best, every pleasure is to be welcomed and every pain
                      avoided. <br />
                      But in certain circumstances and owing to the claims of
                      duty or the obligations of business it will frequently
                      occur that pleasures
                    </p>
                  </TabPane>
                  <TabPane tabId="link5">
                    <p>
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  </TabPane>
                  <TabPane tabId="link6">
                    <p>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
