import React from "react";
import { Link } from "react-router-dom";
import {
  faGooglePlusSquare,
  faInstagramSquare,
  faSquareFacebook,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import Menu from "../Popper/Menu";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const menu = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/products", name: "Products" },
    { path: "/blog", name: "Blog" },
    { path: "/pages", name: "Pages" },
    { path: "/contact", name: "Contact" },
  ];

  const MENU_ITEMS = [
    { path: "/login", name: "Login" },
    { path: "/register", name: "Register" },
  ];

  const MENU_PAGES = [
    { path: "/about", name: "About Us" },
    { path: "/contact", name: "Contact Us" },
    { path: "/question", name: "FAQS" },
    { path: "/wishlist", name: "WishList" },
  ];
  return (
    <header className="header-wrapper">
      <div className="container-wrapper">
        <div className="header-top">
          <div className="header-info">
            <ul>
              <li>Follow Us : </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faGooglePlusSquare} />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faYoutubeSquare} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-user">
            <Menu items={MENU_ITEMS} position="bottom-end">
              <span className="header-account">
                My account
                <span className="header-icondown">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </span>
            </Menu>
            <span>|</span>
            <span className="header-money">
              USD
              <span className="header-icondown">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </span>
          </div>
        </div>
        <div className="header-nav">
          <div className="header-logo">
            <img src="/public/logo-header.png" alt="" />
          </div>
          <ul className="header-menu">
            {menu.map((item, index) => {
              if (item.name === "Pages") {
                return (
                  <Menu
                    items={MENU_PAGES}
                    position="top-start"
                    menupage="menupage"
                  >
                    <li className="header-menu__item" key={index}>
                      <Link to={item.path}>
                        {item.name}{" "}
                        <span className="header-icondown">
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                      </Link>
                    </li>
                  </Menu>
                );
              } else {
                return (
                  <li className="header-menu__item" key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
              }
            })}
          </ul>
          <div className="header-cart">
            <Link to="/cart">
              <img src="/public/icons/icon-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
