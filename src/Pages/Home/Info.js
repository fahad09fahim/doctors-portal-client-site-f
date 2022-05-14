import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      <InfoCard
        cardInfo="10am to 8pm"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        img={clock}
      />
      <InfoCard
        cardInfo="Brooklyn, NY 10036, United States"
        bgclassName="bg-[#3A4256]"
        cardTitle="Visit our location"
        img={marker}
      />
      <InfoCard
        cardInfo="+000 123 456789"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact us now"
        img={phone}
      />
    </div>
  );
};

export default Info;
