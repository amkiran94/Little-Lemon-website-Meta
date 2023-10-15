import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }
  return result;
};

const submitAPI = (formData) => {
  // Simulate API submission
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // In a real API call, handle success or failure
    }, 1000);
  });
};

const initialState = { availableTimes: [] };

function updateTimes(state, date) {
  return { availableTimes: fetchAPI(new Date(date)) };
}

const Main = () => {
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(new Date()); // Fetch initial data
  }, []);

  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        navigate("/confirmed");
      } else {
        // Handle submission failure
      }
    } catch (error) {
      // Handle API call error
    }
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
