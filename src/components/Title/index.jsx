import React from "react";
import "./Title.scss";

export default function Title({ title }) {
  return (
    <div className="title-section">
      <h2 className="title-section__heading">{title}</h2>
    </div>
  );
}
