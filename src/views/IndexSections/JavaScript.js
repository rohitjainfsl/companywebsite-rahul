import React from "react";
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/slide1.jpg"),
    altText: "Slide 1",
    caption: "",
  },
];

export default function JavaScript() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <div id="top1" className="section">
        <Container>
          <h1 className="title mb-5">What we do!</h1>
          <div className="title"></div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Expert Web Development
              </h1>
              <p className="text-white mt-4">
                At Workbinders Pvt. Ltd., we understand that your website serves
                as the digital face of your business. Our expert web development
                team is committed to creating captivating websites that not only
                embody your brand identity but also offer an intuitive user
                experience. We follow industry best practices and leverage the
                latest technologies to design and develop responsive,
                mobile-friendly, and SEO-optimized websites.From simple static
                sites to complex e-commerce platforms, our developers are
                well-versed in various frameworks and CMS platforms like
                WordPress, Magento, Shopify, and more. We conduct thorough
                research to understand your target audience and business goals.
              </p>

              <Button
                target="_blank"
                className="mt-4"
                color="warning"
                href="web-development"
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
