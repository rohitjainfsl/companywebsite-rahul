import React from "react";
import { MetaTags } from "react-meta-tags";
import { Container } from "reactstrap";
import badge from "./badge1.svg";
import badge1 from "./badge2.png";
import badge2 from "./badge3.png";
import badge3 from "./badge4.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function PageHeader9() {
  return (
    <>
      <MetaTags>
        <title>
          Top-Rated Android Apps Development Services Company | Workbinders Pvt.
          Ltd.
        </title>
        <meta
          id="meta-description"
          name="description"
          content="Crafting Android Excellence: WorkBinders Pvt. Ltd. - Your avenue for exceptional Android app development. From captivating designs to seamless functionality, we bring your brand's vision to life on the Android platform."
        />
        <meta
          id="og-title"
          property="og:title"
          content="Top-Rated Android Apps Development Services Company | Workbinders Pvt.
          Ltd."
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
              Top-Rated Android Apps Development Services
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
