import React from "react";
import "./Feature.scss";

export default function Feature({ src, title, desc, detail }) {
  return (
    <div className={`feature-box ${detail ? "feature-detail" : ""}`}>
      <div className="feature-icon">
        <img src={src} alt="" />
      </div>
      <div className="feature-content">
        {!detail ? <p className="feature-title">{title}</p> : ""}
        <p className="feature-desc">{desc}</p>
      </div>
    </div>
  );
}
