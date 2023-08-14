import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/IndexSections/LandingPage.js";
import RegisterPage from "views/IndexSections/Contactus.js";
import ProfilePage from "views/IndexSections/Aboutus.js";
import LandingPage1 from "views/IndexSections/India.js";
import LandingPage2 from "views/IndexSections/USA";
import LandingPage3 from "views/IndexSections/UK";
import LandingPage4 from "views/IndexSections/Canada";
import LandingPage5 from "views/IndexSections/Europe";
import LandingPage6 from "views/IndexSections/Russia";
import LandingPage7 from "views/IndexSections/Singapore";
import LandingPage8 from "views/IndexSections/Switzerland";
import LandingPage9 from "views/IndexSections/Australia";
import LandingPage10 from "views/IndexSections/UAE";
import LandingPage11 from "views/IndexSections/South Korea";
import LandingPage12 from "views/IndexSections/Japan";
import LandingPage13 from "views/IndexSections/Mumbai";
import LandingPage14 from "views/IndexSections/Hyderabad";
import LandingPage15 from "views/IndexSections/Kolkata";
import LandingPage16 from "views/IndexSections/Kochi";
import LandingPage17 from "views/IndexSections/Jaipur";
import LandingPage18 from "views/IndexSections/Visakhapatnam";
import LandingPage19 from "views/IndexSections/Bengaluru";
import LandingPage20 from "views/IndexSections/Rajkot";
import LandingPage21 from "views/IndexSections/Gurugram";
import LandingPage22 from "views/IndexSections/Ghaziabad";
import LandingPage23 from "views/IndexSections/Indore";
import LandingPage24 from "views/IndexSections/Lucknow";
import LandingPage25 from "views/IndexSections/Nagpur";
import LandingPage26 from "views/IndexSections/Bhopal";
import LandingPage27 from "views/IndexSections/New Delhi";
import LandingPage28 from "views/IndexSections/Noida";
import LandingPage29 from "views/IndexSections/Chennai";
import LandingPage30 from "views/IndexSections/Ahmedabad";
import LandingPage31 from "views/IndexSections/Surat";
import LandingPage32 from "views/IndexSections/Pune";
import LandingPage33 from "views/IndexSections/Agra";
import WebDevelopment from "views/WebDevelopment";
import MobileDevelopment from "views/MobileDevelopment";
import DigitalMarketing from "views/DigitalMarketing";
import Softwaredev from "views/Softwaredev";
import Customdev from "views/Customdev";
import Itout from "views/Itout";
import Itcon from "views/Itcon";
import Androiddev from "views/Androiddev";
import IosDev from "views/IosDev";
import Nocodeapps from "views/Nocodeapps";
import Crossdev from "views/CrossDev";
import Wordpress from "views/Wordpress";
import Shopify from "views/Shopify";
import PaidM from "views/PaidM";
import Nocode from "views/Nocode";
import Nocodeweb from "views/Nocodeweb";
import Smm1 from "views/Smm1";
import SeoS from "views/SeoS";
import Uiux from "views/Uiux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/contact-us" element={<RegisterPage />} />
      <Route path="/web-development-india" element={<LandingPage1 />} />
      <Route path="/web-development-usa" element={<LandingPage2 />} />
      <Route path="/web-development-uk" element={<LandingPage3 />} />
      <Route path="/web-development-canada" element={<LandingPage4 />} />
      <Route path="/web-development-europe" element={<LandingPage5 />} />
      <Route path="/web-development-russia" element={<LandingPage6 />} />
      <Route path="/web-development-singapore" element={<LandingPage7 />} />
      <Route path="/web-development-switzerland" element={<LandingPage8 />} />
      <Route path="/web-development-australia" element={<LandingPage9 />} />
      <Route path="/web-development-uae" element={<LandingPage10 />} />
      <Route path="/web-development-south-korea" element={<LandingPage11 />} />
      <Route path="/web-development-japan" element={<LandingPage12 />} />
      <Route path="/web-development-mumbai" element={<LandingPage13 />} />
      <Route path="/web-development-hyderabad" element={<LandingPage14 />} />
      <Route path="/web-development-kolkata" element={<LandingPage15 />} />
      <Route path="/web-development-kochi" element={<LandingPage16 />} />
      <Route path="/web-development-jaipur" element={<LandingPage17 />} />
      <Route
        path="/web-development-visakhapatnam"
        element={<LandingPage18 />}
      />
      <Route path="/web-development-bengaluru" element={<LandingPage19 />} />
      <Route path="/web-development-rajkot" element={<LandingPage20 />} />
      <Route path="/web-development-gurugram" element={<LandingPage21 />} />
      <Route path="/web-development-ghaziabad" element={<LandingPage22 />} />
      <Route path="/web-development-indore" element={<LandingPage23 />} />
      <Route path="/web-development-lucknow" element={<LandingPage24 />} />
      <Route path="/web-development-nagpur" element={<LandingPage25 />} />
      <Route path="/web-development-bhopal" element={<LandingPage26 />} />
      <Route path="/web-development-new-delhi" element={<LandingPage27 />} />
      <Route path="/web-development-noida" element={<LandingPage28 />} />
      <Route path="/web-development-chennai" element={<LandingPage29 />} />
      <Route path="/web-development-ahmedabad" element={<LandingPage30 />} />
      <Route path="/web-development-surat" element={<LandingPage31 />} />
      <Route path="/web-development-pune" element={<LandingPage32 />} />
      <Route path="/web-development-agra" element={<LandingPage33 />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/mobile-development" element={<MobileDevelopment />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/software-development" element={<Softwaredev />} />
      <Route path="/custom-development" element={<Customdev />} />
      <Route path="/it-outsourcing" element={<Itout />} />
      <Route path="/it-consulting" element={<Itcon />} />
      <Route path="/android-development" element={<Androiddev />} />
      <Route path="/ios-development" element={<IosDev />} />
      <Route path="/no-code-mobile-development" element={<Nocodeapps />} />
      <Route path="/cross-platform-apps-development" element={<Crossdev />} />
      <Route path="/wordpress-development" element={<Wordpress />} />
      <Route path="/shopify-development" element={<Shopify />} />
      <Route path="/paid-marketing" element={<PaidM />} />
      <Route path="/nocode" element={<Nocode />} />
      <Route path="/no-code-web-development" element={<Nocodeweb />} />
      <Route path="/social-media-marketing" element={<Smm1 />} />
      <Route path="/seo-services" element={<SeoS />} />
      <Route path="/uiux-design" element={<Uiux />} />
      <Route path="/about-us" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/components" replace />} />
    </Routes>
  </BrowserRouter>
);
