import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      {/* <img alt="..." className="path" src={require("assets/img/path2.png")} /> */}
      <img alt="..." className="path" src={require("assets/img/patrat.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h3 align="center" id="top" className="title">
          We cater and have been working with clients from all around the world!
        </h3>
        <div className="space-50" />
        <div id="images">
          {/* <h3 className="mb-5">Images</h3> */}
          <Row>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <a target="_blank" href="web-development-india">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/india.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <a target="_blank" href="web-development-usa">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/usflag.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <a target="_blank" href="web-development-australia">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/australia.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <a target="_blank" href="web-development-europe">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/europeflag.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <a target="_blank" href="web-development-canada">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/canadaflag.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <a target="_blank" href="web-development-uk">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/uk.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>

            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <br />
              <br />
              <a target="_blank" href="web-development-singapore">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/singaporeflag.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <br />
              <br />
              <a target="_blank" href="web-development-russia">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/russiaflag.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <br />
              <br />
              <a target="_blank" href="web-development-switzerland">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/switzerland.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>

            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <br />
              <br />
              <a target="_blank" href="web-development-south-korea">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/southkorea.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <br />
              <br />
              <a target="_blank" href="web-development-japan">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/japanflag.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
            <Col className="mt-5 mt-sm-0" sm="2" xs="2">
              <br />
              <br />
              <a target="_blank" href="web-development-uae">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/uae.png")}
                  style={{ width: "150px" }}
                />
              </a>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <h3 align="center" id="top" className="title">
          Indian Cities we have been working with
        </h3>
        <div className="space-50" />
        <Container>
          <Row>
            <Col md="16">
              <Row>
                <Button
                  target="_blank"
                  href="web-development-mumbai"
                  color="default"
                >
                  Mumbai
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-bengaluru"
                  color="primary"
                >
                  Bengaluru
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-hyderabad"
                  color="info"
                >
                  Hyderabad
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-kolkata"
                  color="default"
                >
                  Kolkata
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-Kochi"
                  color="primary"
                >
                  Kochi
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-jaipur"
                  color="info"
                >
                  Jaipur
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-visakhapatnam"
                  color="default"
                >
                  Visakhapatnam
                </Button>
                &nbsp; &nbsp;
              </Row>
              <br />
              <Row>
                <Button
                  target="_blank"
                  href="web-development-chennai"
                  color="primary"
                >
                  Chennai
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-Ahmedabad"
                  color="info"
                >
                  Ahmedabad
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-surat"
                  color="default"
                >
                  Surat
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-pune"
                  color="primary"
                >
                  Pune
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-agra"
                  color="info"
                >
                  Agra
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-rajkot"
                  color="default"
                >
                  Rajkot
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-gurugram"
                  color="primary"
                >
                  Gurugram
                </Button>
              </Row>
              <br />
              <Row>
                <Button
                  target="_blank"
                  href="web-development-ghaziabad"
                  color="default"
                >
                  Ghaziabad
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-indore"
                  color="primary"
                >
                  Indore
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-lucknow"
                  color="default"
                >
                  Lucknow
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-nagpur"
                  color="primary"
                >
                  Nagpur
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-bhopal"
                  color="info"
                >
                  Bhopal
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-new-delhi"
                  color="primary"
                >
                  New Delhi
                </Button>
                &nbsp; &nbsp;
                <Button
                  target="_blank"
                  href="web-development-noida"
                  color="info"
                >
                  Noida
                </Button>
                &nbsp; &nbsp;
              </Row>
            </Col>
          </Row>
          <br />
        </Container>
      </Container>
    </div>
  );
}
