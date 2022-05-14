import React from "react";

const ServiceCard = ({ img, serviceTitle }) => {
  return (
    <div className="card lg:max-w-lg  bg-base-100 shadow-2xl">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-2xl">{serviceTitle}</h2>
        <p className="text-center">
          Click the button to listen on Spotiwhy app.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
