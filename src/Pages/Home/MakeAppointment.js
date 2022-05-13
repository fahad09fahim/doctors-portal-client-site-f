import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import Button from "../Shared/Button";
const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center mt-24"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px] "  src={doctor} alt="" />{" "}
      </div>
      <div className="flex-1 ">
        <h3 className="text-xl text-primary py-2 font-bold">Appointment</h3>
        <p className=" text-3xl text-white  py-2">
          Exceptional Dental Care, on Your Terms
        </p>
        <p className= " text-xs text-white py-3 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;
