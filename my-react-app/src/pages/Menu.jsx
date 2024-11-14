import React from "react";

function Menu() {
  return (
    <>
      <header>
        <h1>Nike</h1>
      </header>

      <nav class="navbar">
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#kids">Kids</a>
        <a href="#new-arrivals">New Arrivals</a>
        <a href="#sale">Sale</a>
      </nav>

      <section class="hero">
        <div>Nike - Just Do It</div>
      </section>

      <section class="content">
        <h2>Welcome to Nike</h2>
        <p>
          Explore our latest collections of shoes, apparel, and accessories for
          men, women, and kids.
        </p>
      </section>
    </>
  );
}

export default Menu;
