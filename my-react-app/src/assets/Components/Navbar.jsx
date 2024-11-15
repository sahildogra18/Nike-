import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <div>
            <img
              className="logo"
              src="https://i.pinimg.com/736x/29/df/c6/29dfc6f05b80804c18913851a79c5140.jpg"
              alt="Nike Logo"
            />
          </div>
        </NavLink>

        <NavLink to="/cr7">
          <div>CR7 Fashion</div>
        </NavLink>

        <NavLink to="/menu">
          <div>MENU</div>
        </NavLink>

        <NavLink to="/location">
          <div>LOCATION</div>
        </NavLink>

        <NavLink to="/contact">
          <div>CONTECT</div>
        </NavLink>

        <div>
          <button className="btn">Login</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
