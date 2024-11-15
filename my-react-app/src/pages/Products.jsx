import React from "react";
import { useState, useEffect } from "react";

function Products({ image, title, price }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div className="ff">
        {products.map((product) => (
          <div key={product.id} className="harry">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2>{product.title}</h2>
            <button className="fr">{product.price}$</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
