import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs mt-7"
            />
            <select
              name="slot"
              className="mt-7 select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mt-7"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs mt-7"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn btn-sm btn-secondary w-full max-w-xs mt-7"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
