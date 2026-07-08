import React from "react";

const slots = [
  { id: 1, time: "06:00 AM - 07:00 AM", available: true },
  { id: 2, time: "07:00 AM - 08:00 AM", available: false },
  { id: 3, time: "08:00 AM - 09:00 AM", available: true },
  { id: 4, time: "09:00 AM - 10:00 AM", available: true },
  { id: 5, time: "10:00 AM - 11:00 AM", available: false },
  { id: 6, time: "11:00 AM - 12:00 PM", available: true },
  { id: 7, time: "05:00 PM - 06:00 PM", available: true },
  { id: 8, time: "06:00 PM - 07:00 PM", available: false },
  { id: 9, time: "07:00 PM - 08:00 PM", available: true },
];

function TimeSlots({ selectedSlot, setSelectedSlot }) {
  return (
    <div className="slot-container">

      <h2>Available Time Slots</h2>

      <div className="slots">

        {slots.map((slot) => (

          <button
            key={slot.id}
            disabled={!slot.available}
            className={
              selectedSlot === slot.time
                ? "slot-btn active"
                : slot.available
                ? "slot-btn"
                : "slot-btn booked-slot"
            }
            onClick={() => setSelectedSlot(slot.time)}
          >
            {slot.time}
          </button>

        ))}

      </div>

    </div>
  );
}

export default TimeSlots;