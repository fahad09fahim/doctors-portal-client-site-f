import React from "react";
import Info from "../Info";
import Banner from "../Banner";
import Service from "../Service";
import MakeAppointment from "../MakeAppointment";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import Footer from "../../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Service />
      <MakeAppointment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
