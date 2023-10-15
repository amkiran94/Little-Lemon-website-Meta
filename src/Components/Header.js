import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../Assets/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button aria-label="Reserve a Table">Reserve Table</button>
        </Link>
      </div>
      <div className="banner-img">
        <img src={bannerImg} alt="Restaurant Banner" />
      </div>
    </header>
  );
};

export default Header;
