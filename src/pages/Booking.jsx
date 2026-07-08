import React, { useState } from "react";
import { useParams } from "react-router-dom";

import turfs from "../data/turfData";

import Navbar from "../components/Navbar";
import TimeSlots from "../components/TimeSlots";
import BookingSummary from "../components/BookingSummary";
import GroundSelection from "../components/GroundSelection";
import BookingModal from "../components/BookingModal";

function Booking() {
  const [selectedGround, setSelectedGround] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const turf = turfs.find(
    (t) => t.id === Number(id)
  );

  const [selectedDate, setSelectedDate] =
    useState("");

  const [selectedSlot, setSelectedSlot] =
    useState("");

  return (
    <>

      <Navbar />

      <div className="booking-container">

        <div className="booking-left">

          <img
            src={turf.image}
            alt={turf.name}
            className="booking-image"
          />

          <h1>{turf.name}</h1>

          <h3>{turf.location}</h3>

          <h2>₹{turf.price}/Hour</h2>

          <div className="date-section">

            <h2>Select Date</h2>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) =>
                setSelectedDate(e.target.value)
              }
            />

          </div>

          <TimeSlots
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />

        </div>
        <GroundSelection
    selectedGround={selectedGround}
    setSelectedGround={setSelectedGround}
/>
        <div className="booking-right">

          <BookingSummary
    turf={turf}
    selectedDate={selectedDate}
    selectedSlot={selectedSlot}
    selectedGround={selectedGround}
/>
<button
  className="reserve-btn"
  disabled={
    !selectedDate ||
    !selectedSlot ||
    !selectedGround
  }
  onClick={() => setShowModal(true)}
>
  Reserve Turf
</button>

        </div>

      </div>
    <BookingModal
    show={showModal}
    turf={turf}
    selectedDate={selectedDate}
    selectedSlot={selectedSlot}
    selectedGround={selectedGround}
    onClose={() => setShowModal(false)}
/>
    </>
  );
}

export default Booking;