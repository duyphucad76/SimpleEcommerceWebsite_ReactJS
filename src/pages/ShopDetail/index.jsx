import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Product from "../../data/items.json";
import { Route, Link, Routes, useParams } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { faF, faReply, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { TabPanel, useTabs } from "react-headless-tabs";

import { TabSelector } from "../../components/TabSelector";
import Breadcrumb from "../../components/Breadcrumb";
import ButtonComp from "../../components/Button";
import Feature from "../../components/Feature";
import Heading from "../../components/Heading";
import Card from "../../components/Card";

import "./ShopDetail.scss";
import {
  faFacebook,
  faGoogle,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function ShopDetail(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedTab, setSelectedTab] = useTabs([
    "Description",
    "Reviews",
    "Comments",
  ]);

  const currencyFormat = (price) => {
    return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  const CHECKOUT = [
    { icon: "amazon-cafe.svg" },
    { icon: "apple_pay.svg" },
    { icon: "bitcoin.svg" },
    { icon: "google_pay.svg" },
    { icon: "paypal.svg" },
    { icon: "visa.svg" },
  ];

  const id = useParams();
  const ProductItem = Product.find((item) => item.id == id.id);
  return (
    <>
      <Breadcrumb title="Dummy product name" />
      <div className="container-wrapper">
        <div className="product__detail__wrapper">
          <div className="product__detail__box">
            <img
              className="product__detail__img"
              src={`.${ProductItem.ImageUrl}`}
            />
            <Carousel
              className="carousel-product"
              swipeable={true}
              draggable={true}
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
            >
              {Array(6).fill(
                <img
                  className="product__detail__thumbnail"
                  src="/thumbnail/compact-1.png"
                />
              )}
            </Carousel>
          </div>
          <div className="product__detail__box product__detail__content">
            <div className="product__detail__tags">
              <span>Tags :...</span>
            </div>
            <h3 className="product__detail__title">{ProductItem.name}</h3>
            <div className="product__detail__rate">
              <div className="product__detail__rate__star">
                {Array(5).fill(<FontAwesomeIcon icon={faStar} />)}
              </div>
              <span>2 reviews</span>
            </div>
            <div className="product__detail__price">
              <span className="product__detail__price__new">
                {currencyFormat(ProductItem.price)}
              </span>
              <span className="product__detail__price__old">
                {currencyFormat(130)}
              </span>
            </div>
            <div className="product__detail__unit__price">
              <h4>$60.00 / 5g</h4>
            </div>
            <div className="product__detail__info">
              <div className="product__detail__info__single">
                <span className="title">
                  Vendor : <span className="category">Vendor 1</span>
                </span>
              </div>
              <div className="product__detail__info__single">
                <span className="title">
                  SKU : <span>1510</span>
                </span>
              </div>
              <div className="product__detail__info__single">
                <span className="title">
                  Availability : <span>In Stock</span>
                </span>
              </div>
            </div>
            <div className="product__detail__description">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia,
              </p>
            </div>
            <div className="product__detail__size">
              <span className="product__detail__option">Size :</span>
            </div>
            <div className="product__detail__color">
              <span className="product__detail__option">Color :</span>
            </div>
            <div className="product__detail__action">
              <span className="product__detail__qty">Qty</span>
              <input type="number" name="qty" value="3" />
              <ButtonComp primary medium>
                Add to cart
              </ButtonComp>
            </div>
            <div className="product__detail__button">
              <ButtonComp primary large>
                Buy it now
              </ButtonComp>
            </div>
            <div className="product__detail__wishlist">
              <div className="product__detail__favorite">
                <Button variant="primary" onClick={handleShow}>
                  <img
                    src="/icons/tune.svg"
                    className="product__detail__favorite__icon"
                  />
                  <span className="product__detail__favorite__title">
                    compare this product
                  </span>
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="product__detail__favorite">
                {!isFavorite ? (
                  <>
                    <Button
                      variant="primary"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <img
                        src="/icons/favorite.svg"
                        className="product__detail__favorite__icon"
                      />
                      <span className="product__detail__favorite__title">
                        add to wishlist
                      </span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <img
                        src="/icons/favorite.svg"
                        className="product__detail__favorite__icon"
                      />
                      <span className="product__detail__favorite__title">
                        Remove from wishlist
                      </span>
                    </Button>
                  </>
                )}
              </div>
              <div className="product__detail__favorite">
                {isFavorite ? (
                  <>
                    <FontAwesomeIcon
                      className="product__detail__favorite__icon"
                      icon={faReply}
                    />
                    <Link>Go to wish list</Link>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="product__detail__feature__wrapper">
              <Feature
                src="/feature/1_small.png"
                desc="Free Shipping Ships Today"
                detail
              />
              <Feature
                src="/feature/2_small.png"
                desc="24/7 Support Dedicated Support"
                detail
              />
              <Feature
                src="/feature/3_small.png"
                desc="Secure Payment Best Payment Method"
                detail
              />
            </div>
            <div className="product__detail__social">
              <h3>Share : </h3>
              <div className="product__detail__social__share">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faPinterest} />
              </div>
            </div>
            <div className="product__detail__custom">
              <h3>GUARANTEED SAFE CHECKOUT</h3>
              <div className="product__detail__custom__payment">
                {CHECKOUT.map((item) => (
                  <img src={`/checkout/${item.icon}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <nav className="flex justify-center border-b border-gray-300 mt-5">
          <TabSelector
            isActive={selectedTab === "Description"}
            onClick={() => setSelectedTab("Description")}
          >
            Description
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Reviews"}
            onClick={() => setSelectedTab("Reviews")}
          >
            Reviews
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "Comments"}
            onClick={() => setSelectedTab("Comments")}
          >
            Comments
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== "Description"}>
            <p className="tab__description">
              we denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound to ensue; and equal blame belongs to those
              who fail in their duty through weakness of will, which is the same
              as saying through shrinking from toil and pain. These cases are
              perfectly simple and easy to distinguish. In a free hour, when our
              power of choice is untrammelled and when nothing prevents our
              being able to do what we like best, every pleasure is to be
              welcomed and every pain avoided. But in certain circumstances and
              owing to the claims of duty or the obligations of business it will
              frequently occur that pleasures have to be repudiated and
              annoyances accepted. The wise man therefore always holds in these
              matters to this principle of selection: he rejects pleasures to
              secure other greater pleasures, or else he endures pains to avoid
              worse pains.
            </p>
          </TabPanel>
          <TabPanel hidden={selectedTab !== "Reviews"}>Reviews</TabPanel>
          <TabPanel hidden={selectedTab !== "Comments"}>
            <div className="tab__reviews">
              <div className="tab__reviews__comments">
                <h3>
                  <span>0</span> Comments
                </h3>
                <select>
                  <option value="">Sort by</option>
                </select>
              </div>
              <div className="tab__reviews__addcomments">
                <img
                  className="tab__reviews__avatar"
                  src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p74x74&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=1tv31FCj3JkAX9KCozz&_nc_ht=scontent.fsgn3-1.fna&edm=AJqh0Q8EAAAA&oh=00_AfBqU5lMDExLM8WV7-t_8ON8Zbs19gH071KmldJ8gC6Tjw&oe=6449ABF8"
                />
                <div className="tab__reviews__input__box">
                  <input
                    type="text"
                    className="tab__reviews__input__add"
                    placeholder="Add a comments..."
                  />
                  <div className="tab__reviews__post">
                    <Button bg="primary">Post</Button>
                  </div>
                </div>
              </div>
              <div className="tab__reviews__facebook mt-2">
                <FontAwesomeIcon icon={faFacebook} className="pr-1" />
                <Link to="">Facebook comments flugin</Link>
              </div>
            </div>
          </TabPanel>
        </div>
        <Heading>Related Product</Heading>
        <div className="MoreFeatured-Wrapper">
          {Array(4).fill(
            <Card
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
              src="/public/shop/product-1.webp"
              medium
            />
          )}
        </div>
        <Heading>Custom Collection</Heading>
        <div className="MoreFeatured-Wrapper">
          {Array(4).fill(
            <Card
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
              src="/public/shop/product-1.webp"
              medium
            />
          )}
        </div>
      </div>
    </>
  );
}
