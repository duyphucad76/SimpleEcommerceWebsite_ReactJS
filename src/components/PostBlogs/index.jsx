import React from "react";
import { Link } from "react-router-dom";
import "./PostBlogs.scss";

export default function PostBlogs({ src, title, date, author }) {
  return (
    <div className="post-box">
      <div className="post-image">
        <img src={src} alt="" />
      </div>
      <div className="post-content">
        <div className="post-title">
          <h3>
            <a href="https://vesoz.myshopify.com/">{title}</a>
          </h3>
        </div>
        <div className="post-meta">
          <p>
            by <span className="post-author">{author}</span> -
          </p>
          <p className="post-date">{date}</p>
        </div>
      </div>
    </div>
  );
}
