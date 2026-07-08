import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/booking/:id"
          element={<Booking />}
        />
        
        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;