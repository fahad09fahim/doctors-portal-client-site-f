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
      class="hero min-h-screen bg-cover "
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerimg} class="max-w-sm s rounded-lg shadow-3xl " />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts here</h1>
          <p class="py-6">
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
