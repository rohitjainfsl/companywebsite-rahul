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
import PageHeader7 from "components/PageHeader/PageHeader7";

export default function Itcon() {
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
        <PageHeader7 />
        <div className="main">
          <PaginationSection1 />
          <br />
          <br />

          <Container>
            <blockquote>
              <h1 align="center">
                "Strategic IT Consulting: Guiding Your Success with WorkBinders
                Pvt. Ltd
              </h1>
              <p align="center" class="blockquote blockquote-info">
                Experience the transformative power of IT Consulting with
                WorkBinders Pvt. Ltd. Our seasoned experts are dedicated to
                being your strategic partners, offering invaluable insights and
                tailored solutions that align your technology initiatives with
                your business goals. At WorkBinders, we understand that
                technology is the backbone of modern business. Our IT Consulting
                services delve deep into your organization's processes,
                identifying opportunities for optimization and innovation.
                Whether it's streamlining workflows, implementing cutting-edge
                solutions, or enhancing cybersecurity measures, we ensure your
                technology investments yield maximum returns. With a
                collaborative approach, we work closely with your team to
                develop a roadmap that integrates seamlessly with your business
                strategy. Our industry knowledge and up-to-date expertise enable
                us to guide you through complex technological decisions,
                ensuring you remain agile and competitive in a rapidly changing
                digital landscape.
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
