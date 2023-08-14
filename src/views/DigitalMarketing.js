import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Footer from "components/Footer/Footer.js";
import Tabs from "views/IndexSections/Tabs.js";
import PaginationSection1 from "views/IndexSections/Pagination1.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript1 from "./IndexSections/JavaScript1";
import Signup from "views/IndexSections/Signup.js";
import PageHeader3 from "components/PageHeader/PageHeader3";
import Examplesdigitaltop from "./IndexSections/Examplesdigitaltop";
import JavaScript from "./IndexSections/JavaScript";
import Examplesdigital from "./IndexSections/Examplesdigital";

export default function DigitalMarketing() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader3 />
        <div className="main">
          {/* <Pagination />
          <NucleoIcons /> */}
          <PaginationSection1 />
          <Examplesdigitaltop />
          <br />
          <br />
          <Tabs />
          <Examplesdigital />
          <br />
          <br />
          <h1 align="center">Other Services we Offer!</h1>
          <JavaScript />
          <JavaScript1 />
          <Typography />
          {/* <Basics /> */}
          <Signup />
          {/* <Download /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
