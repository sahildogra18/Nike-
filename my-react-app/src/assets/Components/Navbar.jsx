import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div>
          <img
            className="logo"
            src="https://i.pinimg.com/736x/29/df/c6/29dfc6f05b80804c18913851a79c5140.jpg"
            alt="Nike Logo"
          />
        </div>
      </Link>

      <Link to="/menu">
        <div>MENU</div>
      </Link>

      <Link to="/location">
        <div>LOCATION</div>
      </Link>

      <Link to="/contact">
        <div>CONTECT</div>
      </Link>

      <div>
        <button className="btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
