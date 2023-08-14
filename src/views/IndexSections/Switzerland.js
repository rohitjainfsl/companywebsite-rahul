import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import RegisterPage from "./Contactus";
import Pagination from "views/IndexSections/Pagination.js";
import { MetaTags } from "react-meta-tags";

export default function LandingPage8() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <MetaTags>
        <title>
          Top-Rated Web Development in Switzerland | Digital Marketing | No-Code
          Company | Workbinders Pvt. Ltd.
        </title>
        <meta
          id="meta-description"
          name="description"
          content="Empowering Success: WorkBinders Pvt. Ltd. - Your partner for comprehensive solutions. Specializing in web development, digital marketing, no-code innovation, and mobile app development in Switzerland. Unlock your business's potential today."
        />
        <meta
          id="og-title"
          property="og:title"
          content=" Top-Rated Web Development in Switzerland | Digital Marketing | No-Code Company |
      Workbinders Pvt. Ltd."
        />
      </MetaTags>
      <IndexNavbar />
      <br />
      <br />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Top-Rated Web Development & Digital Marketing <br />
                  <span className="text-white">services in Switzerland</span>
                </h1>
                <p className="text-white mb-3">
                  Elevate your online presence with our premier Web Development
                  & Digital Marketing services in Switzerland. Experience the
                  artistry of our dedicated experts as they weave captivating
                  websites, seamlessly merging brand identity with user-centric
                  design. Our dynamic digital solutions, customized to your
                  business objectives, stand as a testament to innovation.
                  Together with our proven track record, we fuel your online
                  aspirations into thriving reality.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Know More</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#jump"
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
              </Col>
              <Col lg="5" md="12">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/webdevheaderr.webp")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <div id="jump"></div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Pagination />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">4.9</CardTitle>
                                <p />
                                <p className="card-category">Avg. Rating</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">$5M+</CardTitle>
                                <p />
                                <p className="card-category">Worth projects</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">503+</CardTitle>
                                <p />
                                <p className="card-category">Long projects</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">15+</CardTitle>
                                <p />
                                <p className="card-category">Yrs. of Exp.</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <br />
                    <br />
                    <h1>Why choose Us?</h1>
                    <p>
                      Our dedicated team of experts crafts captivating websites
                      that not only showcase your brand but also deliver
                      seamless user experiences. From eye-catching designs to
                      robust functionality, we create digital solutions tailored
                      to your business goals.
                    </p>
                    <br />
                    <p>
                      Unlock the power of strategic Digital Marketing strategies
                      that drive results. We harness the latest techniques to
                      enhance your visibility, engage your target audience, and
                      boost conversions. With a proven track record of
                      delivering top-rated solutions, we are your trusted
                      partner for transforming your online ambitions into
                      reality.
                    </p>
                    <br />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* <h1 className="text-center">
                  Empowering Your Digital Journey!
                </h1> */}
                <Row className="row-grid justify-content-center">
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-palette" />
                      </div>
                      <h4 className="info-title">Crafting Excellence</h4>
                      <hr className="line-primary" />
                      <p>
                        Experience the epitome of value as we offer premium
                        digital marketing and web development solutions that
                        cater to diverse budgets. Our transparent pricing model
                        ensures that you receive unparalleled quality and
                        expertise without compromise, making your investment in
                        our services truly worthwhile.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Results that Resonate</h4>
                      <hr className="line-warning" />
                      <p>
                        When it comes to delivering results, we're not content
                        with ordinary – we strive for extraordinary. Our
                        extensive portfolio showcases a multitude of success
                        stories where our strategic prowess and creative finesse
                        have propelled businesses to new heights. Join the ranks
                        of those who have reaped the rewards of our tailored
                        digital solutions.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Experience Matters</h4>
                      <hr className="line-success" />
                      <p>
                        Benefit from the cumulative experience of our seasoned
                        professionals who collectively boast decades of hands-on
                        experience. With an illustrious track record in both web
                        development and digital marketing, we bring a wealth of
                        knowledge and insights to every project, ensuring that
                        you're in the capable hands of industry veterans.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/marketing1.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">SEO Friendly</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">1000+</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">15+</CardTitle>
                        <p className="card-category text-white">Yrs. of Exp.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col md="6">
                <br />
                <br />
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Empowering Your Digital Journey</h3>
                  <p>
                    At Workbinders Pvt. Ltd., we are dedicated to empowering
                    your digital journey with a harmonious fusion of
                    cutting-edge web development and strategic digital
                    marketing. Our unwavering commitment to excellence ensures
                    that your brand's online presence not only stands out but
                    thrives. With a team of experienced professionals, we create
                    immersive online experiences, drive meaningful engagement,
                    and deliver measurable results.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Innovative Web Solutions</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Strategic Digital Marketing</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Proven Expertise</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
        </section>
        <RegisterPage />
      </div>
    </>
  );
}
