import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import PaginationSection1 from "views/IndexSections/Pagination1.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import JavaScript1 from "./IndexSections/JavaScript1";
import JavaScript2 from "./IndexSections/JavaScript2";
import JavaScript3 from "./IndexSections/JavaScript3";
import JavaScript4 from "./IndexSections/JavaScript4";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Exampleswebhome from "./IndexSections/Exampleswebhome";
import Examplesmobilehome from "./IndexSections/Examplesmobilehome";
import Examplesdigitalhome from "./IndexSections/Examplesdigitalhome";

export default function Index() {
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
        <PageHeader />
        <div className="main">
          <Pagination />
          <NucleoIcons />
          <PaginationSection1 />
          <Tabs />
          <JavaScript />
          <JavaScript1 />
          <JavaScript2 />
          <JavaScript3 />
          <JavaScript4 />
          <Exampleswebhome />
          <Examplesmobilehome />
          <Examplesdigitalhome />
          <Typography />
          <Signup />
        </div>
        <Footer />
      </div>
    </>
  );
}
