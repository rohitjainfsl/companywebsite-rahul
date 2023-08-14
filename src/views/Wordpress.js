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
import PageHeader13 from "components/PageHeader/PageHeader13";

export default function Wordpress() {
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
        <PageHeader13 />
        <div className="main">
          <PaginationSection1 />
          <br />
          <br />

          <Container>
            <blockquote>
              <h1 align="center">
                Unleash Your Online Potential with WordPress Development by
                WorkBinders Pvt. Ltd.
              </h1>
              <p align="center" class="blockquote blockquote-info">
                Introducing a dynamic solution to amplify your online presence –
                WordPress Development services from WorkBinders Pvt. Ltd. Our
                expert team specializes in harnessing the power of WordPress to
                create stunning, functional, and customizable websites that
                elevate your brand. With a deep understanding of the WordPress
                ecosystem, we craft websites that reflect your unique identity
                and objectives. Whether you're launching a personal blog, an
                e-commerce store, or a corporate website, our WordPress
                Development services provide a seamless blend of design,
                functionality, and user experience. Navigate the digital
                landscape with confidence as our skilled developers implement
                responsive design, intuitive navigation, and essential features
                that engage and captivate your audience. From seamless content
                management to robust e-commerce integrations, we tailor every
                aspect to align with your goals. Experience the versatility and
                flexibility of WordPress with WorkBinders Pvt. Ltd. Our
                WordPress Development solutions empower you to effortlessly
                manage your online presence, expand your reach, and drive
                meaningful interactions. Join us in embracing the power of
                WordPress to transform your digital journey and position your
                brand for success.
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
