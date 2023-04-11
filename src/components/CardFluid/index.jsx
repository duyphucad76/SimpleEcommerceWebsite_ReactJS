import React from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardFluid.scss";

export default function CardFluid({ title, priceNew, priceOld, src }) {
  const currencyFormat = (price) => {
    return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  return (
    <div className="fluid">
      <div className="fluid-img">
        <Link to="/shop">
          <img src={src} alt="" />
        </Link>
      </div>
      <div className="fluid-content">
        <p className="fluid-title">
          <Link to="/detail">{title}</Link>
        </p>
        <p className="fluid-rate">
          {Array(5).fill(<FontAwesomeIcon icon={faStar} />)}
        </p>
        <p className="fluid-price">
          <span className="fluid-price__new">{currencyFormat(parseFloat(priceNew))}</span>
          <span className="fluid-price__old">{currencyFormat(parseFloat(priceOld))}</span>
        </p>
      </div>
    </div>
  );
}
