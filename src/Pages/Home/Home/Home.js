import React from "react";
import Info from "../Info";
import Banner from "../Banner";
import Service from "../Service";
import MakeAppointment from "../MakeAppointment";
import Testimonial from "../Testimonial";
import Contact from "../Contact";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <Service/>
      <MakeAppointment/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
