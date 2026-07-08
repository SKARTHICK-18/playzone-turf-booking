import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TurfCard({ turf }) {
  const navigate = useNavigate();

  return (
    <div className="turf-card">

      <img src={turf.image} alt={turf.name} />

      <div className="card-content">

        <h2>{turf.name}</h2>

        <p>
          <FaMapMarkerAlt /> {turf.location}
        </p>

        <p>{turf.sport}</p>

        <p>
          <FaStar color="gold" /> {turf.rating}
        </p>

        <h3>₹{turf.price}/Hour</h3>

        <button
          onClick={() => navigate(`/booking/${turf.id}`)}
        >
          Book Now
        </button>

      </div>

    </div>
  );
}

export default TurfCard;