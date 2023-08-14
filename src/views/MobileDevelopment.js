import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Footer from "components/Footer/Footer.js";
import Tabs from "views/IndexSections/Tabs.js";
import PaginationSection1 from "views/IndexSections/Pagination1.js";
import Typography from "views/IndexSections/Typography.js";
import Javascriptmob from "views/IndexSections/Javascriptmob.js";
import JavaScript from "./IndexSections/JavaScript";
import JavaScript2 from "./IndexSections/JavaScript2";
import JavaScript3 from "./IndexSections/JavaScript3";
import JavaScript4 from "./IndexSections/JavaScript4";
import Signup from "views/IndexSections/Signup.js";
import Examplesmobile from "views/IndexSections/Examplesmobile";
import Examplesmobiletop from "views/IndexSections/Examplesmobiletop";
import PageHeader2 from "components/PageHeader/PageHeader2";

export default function MobileDevelopment() {
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
        <PageHeader2 />
        <div className="main">
          {/* <Pagination />
          <NucleoIcons /> */}
          <PaginationSection1 />

          <Examplesmobiletop />
          <br />
          <br />
          <br />

          <Tabs />
          <Examplesmobile />
          <br />
          <br />
          <h1 align="center">Other Services we Offer!</h1>

          <JavaScript />
          <JavaScript3 />
          <JavaScript2 />

          <JavaScript4 />

          {/* <Notifications /> */}
          {/* <Navbars /> */}
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
