import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({
  title,
  priceNew,
  priceOld,
  src,
  small,
  medium,
  large,
}) {
  const currencyFormat = (price) => {
    return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <div
      className={`card-wrapper ${small ? "small__cart" : ""} ${
        medium ? "medium__cart" : ""
      } ${large ? "large__cart" : ""}`}
    >
      <img src={src} alt="" />
      <div className="card-content">
        <p className="card-title">
          <Link to="/detail">{title}</Link>
        </p>
        <p className="card-rate">
          {Array(5).fill(<FontAwesomeIcon icon={faStar} />)}
        </p>
        <p className="card-price">
          <span className="card-price__new">
            {currencyFormat(parseFloat(priceNew))}
          </span>
          <span className="card-price__old">
            {currencyFormat(parseFloat(priceOld))}
          </span>
        </p>
      </div>
    </div>
  );
}
