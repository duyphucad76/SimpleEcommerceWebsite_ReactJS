import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default function MenuItem({ data, menupage }) {
  return (
    <Link className={`menu-item__title ${menupage ? "itempa" : ""}`} to={data.path}>
      {data.name}
    </Link>
  );
}
