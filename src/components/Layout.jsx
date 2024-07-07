import React from "react";
import Home from "./Home";
import Hero from "./Hero";
import Product from "./Product";
import Galleary from "./Gallery";
import Certificates from "./Certificates";
import Offer from "./Offer";
import Bloge from "./Bloge";
import Service from "./Service";
import ContactUs from "./ContactUs";
import Appoinment from "./Appoinment";
import Review from "./Review";
import Feedbackform from "./Feedbackform";
import Contact from "./Contact";
import BussinessHours from "./BussinessHours";
const Layout = () => {
  return (
    <div className="bg-[#282019]">
      <Home />
      <Hero />
      <ContactUs />
      {/* <Product /> */}
      <Service />
      <Bloge />
      <Galleary />
      <Offer />
      <BussinessHours/>
      {/* <Certificates />
      <Feedbackform />
      <Review />

      <Appoinment /> 

      <Contact />*/}
    </div>
  );
};

export default Layout;
