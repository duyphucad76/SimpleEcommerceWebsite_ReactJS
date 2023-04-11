import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

export default function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb-header">
      <div className="container">
        <div className="breadcrumb-header-content">
          <Link to="/">Home</Link>
          <span>
            <img src="/icons/navigate-next.svg" />
          </span>
          <span className="breadcrumb-header-name">{title}</span>
        </div>
      </div>
    </div>
  );
}
