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
import PageHeader6 from "components/PageHeader/PageHeader6";

export default function Itout() {
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
        <PageHeader6 />
        <div className="main">
          <PaginationSection1 />
          <br />
          <br />

          <Container>
            <blockquote>
              <h1 align="center">
                Strategic IT Outsourcing: Empowering Your Business with
                WorkBinders Pvt. Ltd.
              </h1>
              <p align="center" class="blockquote blockquote-info">
                Discover the strategic advantage of IT Outsourcing with
                WorkBinders Pvt. Ltd. Our comprehensive outsourcing solutions
                empower your business to focus on core operations while we
                handle the intricate world of technology management. At
                WorkBinders, we recognize that outsourcing IT services is more
                than just reducing costs – it's about enhancing efficiency and
                gaining access to specialized expertise. Our dedicated team
                becomes an extension of your organization, seamlessly managing
                IT infrastructure, support, and maintenance, allowing you to
                allocate resources where they matter most. With a
                customer-centric approach, we tailor our IT Outsourcing services
                to your unique needs. Whether you require complete IT
                management, helpdesk support, cloud services, or security
                solutions, we've got you covered. Our proactive approach to
                monitoring and problem-solving ensures that your systems remain
                resilient and operational. WorkBinders Pvt. Ltd. has a proven
                track record of delivering value-driven IT Outsourcing solutions
                to businesses of all sizes. Join us in transforming your IT
                landscape – from cost savings to enhanced operational
                efficiency, our outsourcing services become a catalyst for your
                success, enabling your business to stay ahead in today's rapidly
                evolving technology landscape.
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
