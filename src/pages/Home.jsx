import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TurfCard from "../components/TurfCard";
import turfs from "../data/turfData";
import { FaFootballBall, FaBaseballBall } from "react-icons/fa";
import { GiShuttlecock } from "react-icons/gi";

function Home() {
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("All");

  const filteredTurfs = turfs.filter((turf) => {
    const matchName = turf.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchSport =
      sport === "All" || turf.sport === sport;

    return matchName && matchSport;
  });

  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="hero">

        <h1>⚽ PlayZone</h1>

        <p>Book Premium Sports Turfs Near You</p>

        <button className="hero-btn">
          Book Now
        </button>

      </section>

      {/* Search */}

      <section className="search-section">

        <input
          className="search-box"
          placeholder="Search Turf..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </section>

      {/* Sports */}

      <section className="sports-section">

        <div
          className="sport-box"
          onClick={() => setSport("Football")}
        >
          <FaFootballBall size={40} />
          <h3>Football</h3>
        </div>

        <div
          className="sport-box"
          onClick={() => setSport("Cricket")}
        >
          <FaBaseballBall size={40} />
          <h3>Cricket</h3>
        </div>

        <div
          className="sport-box"
          onClick={() => setSport("Badminton")}
        >
          <GiShuttlecock size={40} />
          <h3>Badminton</h3>
        </div>

      </section>

      {/* Featured */}

      <h1 className="featured">
        Featured Turfs
      </h1>

      <section className="turf-list">

        {filteredTurfs.map((turf) => (
          <TurfCard
            key={turf.id}
            turf={turf}
          />
        ))}

      </section>

      {/* Why Choose */}

      <section className="why-us">

        <h1>Why Choose PlayZone?</h1>

        <div className="why-grid">

          <div className="why-card">
            ⚡ Instant Booking
          </div>

          <div className="why-card">
            🏟 Verified Turfs
          </div>

          <div className="why-card">
            💳 Secure Payment
          </div>

          <div className="why-card">
            ☎ 24×7 Support
          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;