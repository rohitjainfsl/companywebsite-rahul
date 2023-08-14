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
import { Button, Container, Row, Col } from "reactstrap";

export default function NucleoIcons() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="title">Technologies and Platforms We Work With</h2>
            <h4 className="description">
              Welcome to WorkBinders Pvt. Ltd., where we excel in providing
              cutting-edge IT solutions with a wide range of languages to power
              your digital journey. Our expert team harnesses the potential of
              &nbsp;
              <span className="bold-language">
                React.js, Node.js, Angular.js, Wordpress, Shopify, Python, Java,
                C++, HTML, CSS, JavaScript, and more{" "}
              </span>
              to craft innovative software, dynamic websites, and robust
              applications. Embracing the latest technologies, we ensure
              adaptability and versatility to meet your evolving needs in the
              ever-changing world of technology. Partner with us for seamless
              and transformative IT services tailored to your unique
              requirements.
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="primary"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                Explore More
              </Button>
              <Button
                className="btn-simple btn-round"
                color="primary"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                About Us
              </Button>
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}

              {/* Right 1 */}
              <i className="icon icon-sm tim-icons icon-html5" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* Right 2 */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* Left 1 */}
              <i className="icon icon-sm tim-icons icon-molecule-40" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* Left 2 */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
              Explore all 30+ Stacks we deal in
            </span>
          </a>
        </div>
      </Container>
    </div>
  );
}
