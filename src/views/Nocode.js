import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import Tabs from "views/IndexSections/Tabs.js";
import PaginationSection1 from "views/IndexSections/Pagination1.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript1 from "./IndexSections/JavaScript1";
import JavaScript3 from "./IndexSections/JavaScript3";
import Signup from "views/IndexSections/Signup.js";
import JavaScript from "./IndexSections/JavaScript";
import Examplesdigital from "./IndexSections/Examplesdigital";
import Examplesnocodetop from "./IndexSections/Examplesnocodetop";
import PageHeader16 from "components/PageHeader/PageHeader16";
import Examplesnocode from "./IndexSections/Examplesnocode";

export default function Nocode() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader16 />
        <div className="main">
          <PaginationSection1 />
          <Examplesnocodetop />
          <br />
          <br />
          <Tabs />
          <Examplesnocode />
          <br />
          <br />
          <h1 align="center">Other Services we Offer!</h1>
          <JavaScript />
          <JavaScript3 />

          <JavaScript1 />
          <Typography />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  );
}
