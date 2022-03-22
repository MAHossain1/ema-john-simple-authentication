import React from "react";
import "./Product.css";

const Product = props => {
  //   console.log(props);
  //   console.log(props.product);
  const { product, handleAddToCart } = props;
  const { img, name, price, seller, ratings } = product;
  //   const { img, name, price, seller, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>
          <b>Price: ${price}</b>
        </p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small> stars
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        // onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>
          <b>Add to Cart</b>
        </p>
      </button>
    </div>
  );
};

export default Product;
