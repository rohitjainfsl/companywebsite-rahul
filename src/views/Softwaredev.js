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

import { Container } from "reactstrap";
import PageHeader4 from "components/PageHeader/PageHeader4";

export default function Softwaredev() {
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
        <PageHeader4 />
        <div className="main">
          <PaginationSection1 />
          <br />
          <br />

          <Container>
            <blockquote>
              <h1 align="center">
                Crafting Tomorrow's Solutions Today: Innovative Software
                Development by WorkBinders Pvt. Ltd.
              </h1>
              <p align="center" class="blockquote blockquote-info">
                Welcome to the Software Development realm of WorkBinders Pvt.
                Ltd., where innovation meets functionality to shape the digital
                future. Our dedicated team of experts combines cutting-edge
                technologies with a passion for problem-solving, delivering
                tailor-made software solutions that empower your business for
                success. With an unwavering commitment to excellence, we
                transform your ideas into reality through a comprehensive
                software development process. From conceptualization and design
                to development, testing, and deployment, we meticulously craft
                solutions that streamline operations, enhance efficiency, and
                drive growth. At WorkBinders, we understand that every business
                is unique. That's why our software development services are
                customizable to address your specific needs. Whether you require
                web applications, mobile apps, enterprise software, or
                integrations, our agile approach ensures a seamless and
                collaborative journey from inception to implementation.
              </p>
            </blockquote>
          </Container>

          <br />
          <br />
          <br />
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
