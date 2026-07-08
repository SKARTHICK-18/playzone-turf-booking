import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const data =
            JSON.parse(localStorage.getItem("playzoneBookings")) || [];

        setBookings(data);

    }, []);

    const cancelBooking = (id) => {

        const updated =
            bookings.filter((booking) => booking.id !== id);

        setBookings(updated);

        localStorage.setItem(
            "playzoneBookings",
            JSON.stringify(updated)
        );

    };

    return (

        <>

            <Navbar />

            <div className="my-bookings">

                <h1>My Bookings</h1>

                {
                    bookings.length === 0 ?

                        <h2>No Bookings Yet</h2>

                        :

                        bookings.map((booking) => (

                            <div
                                className="booking-card"
                                key={booking.id}
                            >

                                <h2>{booking.turf}</h2>

                                <p><strong>Sport :</strong> {booking.sport}</p>

                                <p><strong>Location :</strong> {booking.location}</p>

                                <p><strong>Date :</strong> {booking.date}</p>

                                <p><strong>Time :</strong> {booking.time}</p>

                                <p><strong>Ground :</strong> {booking.ground}</p>

                                <h3>₹ {booking.price}</h3>

                                <button
                                    className="cancel-btn"
                                    onClick={() =>
                                        cancelBooking(booking.id)
                                    }
                                >
                                    Cancel Booking
                                </button>

                            </div>

                        ))
                }

            </div>

        </>

    );

}

export default MyBookings;