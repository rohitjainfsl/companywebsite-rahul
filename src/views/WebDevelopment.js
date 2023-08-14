import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import Tabs from "views/IndexSections/Tabs.js";
import PaginationSection1 from "views/IndexSections/Pagination1.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript1 from "./IndexSections/JavaScript1";
import JavaScript2 from "./IndexSections/JavaScript2";
import JavaScript3 from "./IndexSections/JavaScript3";
import JavaScript4 from "./IndexSections/JavaScript4";
import Signup from "views/IndexSections/Signup.js";
import Examplesweb from "views/IndexSections/Examplesweb.js";
import PageHeader1 from "components/PageHeader/PageHeader1";
import Exampleswebtop from "./IndexSections/Exampleswebtop";

export default function WebDevelopment() {
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
        <PageHeader1 />
        <div className="main">
          <PaginationSection1 />
          <Exampleswebtop />
          <Tabs />
          <Examplesweb />
          <br />
          <br />
          <h1 align="center">Other Services we Offer!</h1>
          <JavaScript1 />
          <JavaScript2 />
          <JavaScript3 />
          <JavaScript4 />
          <Typography />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  );
}
