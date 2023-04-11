import "./Post.css";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Blog({ src, title }) {
  return (
    <div className="wrapper-post pb-5">
      <img src={src} alt="Post" width="100%" height="400px" />
      <p className="post-title">{title}</p>
      <div className="row">
        <div className="post-meta">
          <FontAwesomeIcon
            className="rounded-circle"
            icon={faUser}
            style={{
              color: "#fff",
              padding: "3px",
              backgroundColor: "#8d8181",
              width: "15px",
            }}
          />{" "}
          Vesoz Admin |
          <FontAwesomeIcon icon={faCalendarDays} /> 13 Oct, 19
        </div>
      </div>
      <hr />
      <p className="post-des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum
        deleniti repellendus nam deserunt vitae ullam amet quos! Nesciunt, quo.
        Lorem, ipsum dolor. Lorem ipsum...
      </p>
      <button className="btn-readmore">Read more</button>
    </div>
  );
}
