import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

export default function Category({ src, title, quantity }) {
  return (
    <div className="category-box">
      <Link to="">
        <img src={src} alt="" />
      </Link>
      <div className="category-info">
        <h5>
          <Link to="">{title}</Link>
        </h5>
        <p className="category-quantity">{quantity} products</p>
      </div>
    </div>
  );
}
