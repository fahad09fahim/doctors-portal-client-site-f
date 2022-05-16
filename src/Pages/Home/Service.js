import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Button from "../Shared/Button";
const Service = () => {
  return (
    <div>
      <h2 className="text-secondary text-center mt-14 text-2xl font-bold uppercase">
        Our Service
      </h2>
      <h1 className="text-black text-3xl text-center mt-3 font-bold uppercase">
        Services We Provide
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        <ServiceCard serviceTitle="Fluoride Treatment" img={fluoride} />
        <ServiceCard serviceTitle="Cavity Filling" img={cavity} />
        <ServiceCard serviceTitle="Teeth Whitening" img={whitening} />
      </div>
      <div className="lg:px-24">
        <div className="hero min-h-screen bg-base-100  mt-24 pr-5">
          <div className="hero-content flex-col lg:flex-row ">
            <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="pl-10">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
