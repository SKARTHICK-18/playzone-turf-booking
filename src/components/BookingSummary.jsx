import React from "react";

function BookingSummary({
  turf,
  selectedDate,
  selectedSlot,
  selectedGround,
}) {

  return (

    <div className="summary">

      <h2>Booking Summary</h2>

      <hr />

      <p>
        <strong>Turf :</strong> {turf.name}
      </p>

      <p>
        <strong>Sport :</strong> {turf.sport}
      </p>

      <p>
        <strong>Location :</strong> {turf.location}
      </p>

      <p>
        <strong>Date :</strong>{" "}
        {selectedDate || "-"}
      </p>

      <p>
        <strong>Time :</strong>{" "}
        {selectedSlot || "-"}
      </p>

      <p>
        <strong>Ground :</strong>{" "}
        {selectedGround || "-"}
      </p>

      <hr />

      <h3>₹ {turf.price}</h3>

    </div>

  );
}

export default BookingSummary;