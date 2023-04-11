import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlus,
  faTwitter,
  faYoutube,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
export default function Footer() {
  const menu = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "products", name: "Products" },
    { path: "/blog", name: "Blog" },
    { path: "/pages", name: "Pages" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <footer className="footer-wrapper">
      <div className="container px-0">
        <div className="row pt-5">
          <div className="col-sm-4">
            <img src="/public/logo-header.png" alt="Logo" width="150px" />
            <div className="footer-text-block mb-10">
              <h5 className="mt-4">Address:</h5>
              <p className="font-weight-lighter">
                4710-4890 Breckinridge St, UK Burlington, VT 05401
              </p>
            </div>
            <div className="call-me">
              <h5>Need help?</h5>
              <p className="font-weight-lighter">Call: 1-800-345-6789</p>
            </div>
            <div className="email-contact">
              <h5>Email:</h5>
              <p className="font-weight-lighter">example@example.com</p>
            </div>
          </div>
          <div className="col-sm-2">
            <h5 className="mb-3">About Menu</h5>
            <div className="footer-navigation font-weight-lighter">
              <nav>
                <ul className="text-decoration-none list-unstyled">
                  <li>
                    <Link to="">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Team Member</Link>
                  </li>
                  <li>
                    <Link to="">Specials</Link>
                  </li>
                  <li>
                    <Link to="">Career</Link>
                  </li>
                  <li>
                    <Link to="">Best sellers</Link>
                  </li>
                  <li>
                    <Link to="">Contact us</Link>
                  </li>
                  <li>
                    <Link to="">Our stores</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-2">
            <h5 className="mb-3">Usefull Links</h5>
            <div className="footer-navigation font-weight-lighter">
              <nav>
                <ul className="text-decoration-none list-unstyled">
                  <li>
                    <Link to="#">Support Center</Link>
                  </li>
                  <li>
                    <Link to="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                  <li>
                    <Link to="#">Product Return</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-4">
            <h5 className="mb-3">Lastest Blogs</h5>
            <div className="row">
              <div className="col-sm-4">
                <img src="/public/post/post-1.webp" alt="blog" width="110px" />
              </div>
              <div className="col-sm-8">
                <Link to="#" className="blog-title">
                  Ohio Tropics Houseplant | Nice Collection
                </Link>
                <br />
                <span className="blog-post">by Vesoz Admin - 13 Oct, 2023</span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-4">
                <img src="/public/post/post-2.webp" alt="blog" width="110px" />
              </div>
              <div className="col-sm-8">
                <Link to="#" className="blog-title">
                  Ohio Tropics Houseplant | Nice Collection
                </Link>
                <br />
                <span className="blog-post">by Vesoz Admin - 13 Oct, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row pb-5">
          <div className="col-sm-6 pt-3">
            <span className="copyright-text">
              Copyright © Vesoz All Right Reserved
            </span>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-2 pt-3">
            <span
              className="social-link p-2 rounded-circle"
              style={{backgroundColor: "blue"}}
            >
              <Link to="#" className="text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </span>
            <span className="social-link p-2 rounded-circle bg-primary">
              <Link to="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </span>
            <span className="social-link p-2 rounded-circle bg-danger">
              <Link to="#" className="text-white">
                <FontAwesomeIcon icon={faGooglePlus} />
              </Link>
            </span>
            <span className="social-link p-2 rounded-circle bg-danger">
              <Link to="#" className="text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
