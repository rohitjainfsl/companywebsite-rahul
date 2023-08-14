import React from "react";
import { MetaTags } from "react-meta-tags";
import badge from "./badge1.svg";
import badge1 from "./badge2.png";
import badge2 from "./badge3.png";
import badge3 from "./badge4.png";
import { Link, animateScroll as scroll } from "react-scroll";

import { Container } from "reactstrap";

export default function PageHeader18() {
  return (
    <>
      <MetaTags>
        <title>
          Top-Rated Social Media Marketing Services Company | Workbinders Pvt.
          Ltd.
        </title>
        <meta
          id="meta-description"
          name="description"
          content="Amplify Your Brand's Reach with Strategic Social Media Marketing by WorkBinders Pvt. Ltd. From engaging campaigns to targeted strategies, we enhance your online presence and drive meaningful interactions across diverse platforms."
        />
        <meta
          id="og-title"
          property="og:title"
          content="Top-Rated Social Media Marketing Services Company | Workbinders
          Pvt. Ltd."
        />
      </MetaTags>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">
              Top-Rated Social Media Marketing Services
            </h1>
            <h3 className="d-none d-sm-block">Affordable & Promising</h3>
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <i className="tim-icons icon-minimal-down" />
            </Link>
            <br />
            <br />
            <br />
          </div>

          <div className="badges">
            <img src={badge} height={105} alt="Logo" />
            <img src={badge1} height={100} alt="Logo" />
            <img src={badge2} height={80} alt="Logo" />
            <img src={badge3} height={105} alt="Logo" />
          </div>
        </Container>
      </div>
    </>
  );
}
