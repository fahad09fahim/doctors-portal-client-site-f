import React from "react";
import bannerimg from "../../assets/images/chair.png";
import Button from "../Shared/Button";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="hero min-h-screen bg-cover "
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerimg} className="max-w-sm s rounded-lg shadow-3xl " />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
