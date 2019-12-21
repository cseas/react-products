import React from "react";

function Product(props) {
  return (
    <div class="card">
      <img src="https://placedog.net/500" alt="Denim Jeans" style={{ width: 100 + "%" }} />
      <h1>{props.product.name}</h1>
      <p class="price">{props.product.price.toLocaleString("en-US",
        { style: "currency", currency: "INR" })}</p>
      <p>{props.product.description}</p>
      <p><button>Add to Cart</button></p>
    </div>
  );
}

export default Product;
