import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Products from "../../pages/Products";

function Navbar() {
  const [products, setProducts] = useState([]);

  async function clickMe() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProducts(data);
    console.log(data);
  }

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
          <div className="product-list">
            <div onClick={clickMe}>CR7 Fashion</div>
            {products.map((product) => (
              <Products
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
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
