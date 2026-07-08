import React from "react";
import { FaFutbol } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaFutbol />
        <h2>PlayZone</h2>
      </div>

      <ul>

<li>
<Link to="/">Home</Link>
</li>

<li>
<Link to="/my-bookings">
My Bookings
</Link>
</li>

<li>About</li>

<li>Contact</li>

</ul>
    </nav>
  );
}

export default Navbar;