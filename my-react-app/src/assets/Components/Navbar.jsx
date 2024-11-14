import React from "react";

function Navbar() {
  return (
    <nav>
      <div>
        <img
          className="logo"
          src="https://i.pinimg.com/736x/29/df/c6/29dfc6f05b80804c18913851a79c5140.jpg"
          alt="Nike Logo"
        />
      </div>
      <div>MENU</div>
      <div>LOCATION</div>
      <div>CONTECT</div>
      <div>
        <button className="btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
