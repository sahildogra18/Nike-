import React from "react";

function Products({ image, title, price }) {
  return (
    <>
      <div className="harry">
        <img src={image} alt={title} className="product-image" />
        <h2>{title}</h2>
        <span>
          <button>{price} </button>
        </span>
      </div>
    </>
  );
}

export default Products;
