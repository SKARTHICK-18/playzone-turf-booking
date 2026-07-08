import React from "react";
import { useNavigate } from "react-router-dom";

function BookingModal({
  show,
  turf,
  selectedDate,
  selectedSlot,
  selectedGround,
  onClose,
}) {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="modal-overlay">

      <div className="booking-modal">

        <h1>🎉 Booking Confirmed!</h1>

        <hr />

        <p><strong>Turf:</strong> {turf.name}</p>

        <p><strong>Sport:</strong> {turf.sport}</p>

        <p><strong>Location:</strong> {turf.location}</p>

        <p><strong>Date:</strong> {selectedDate}</p>

        <p><strong>Time:</strong> {selectedSlot}</p>

        <p><strong>Ground:</strong> {selectedGround}</p>

        <h2>₹ {turf.price}</h2>

        <div className="modal-buttons">

          <button
            onClick={() => {

    const booking = {

        id: Date.now(),

        turf: turf.name,

        sport: turf.sport,

        location: turf.location,

        date: selectedDate,

        time: selectedSlot,

        ground: selectedGround,

        price: turf.price

    };

    const oldBookings =
        JSON.parse(localStorage.getItem("playzoneBookings")) || [];

    oldBookings.push(booking);

    localStorage.setItem(
        "playzoneBookings",
        JSON.stringify(oldBookings)
    );

    onClose();

    navigate("/my-bookings");

}}
          >
            Home
          </button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingModal;