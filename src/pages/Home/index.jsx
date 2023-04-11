import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Category from "../../components/Category";
import Feature from "../../components/Feature";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import Card from "../../components/Card";
import Title from "../../components/Title";
import CardFluid from "../../components/CardFluid";
import PostBlogs from "../../components/PostBlogs";

import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
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

  return (
    <div className="home-wrapper">
      <div className="home-slider">
        <Slider />
      </div>
      <div className="container-wrapper">
        <Heading>Featured Categories</Heading>
        <div className="category-wrapper">
          <Category
            src="/public/category/category-1.png"
            title="top-rated"
            quantity="18"
          />
          <Category
            src="/public/category/category-2.png"
            title="featured"
            quantity="14"
          />
          <Category
            src="/public/category/category-3.avif"
            title="best-seller"
            quantity="12"
          />
          <Category
            src="/public/category/category-4.avif"
            title="top-rated"
            quantity="18"
          />
        </div>
        <div className="feature-wrapper">
          <Feature
            src="/public/feature/1_small.png"
            title="Free Shipping"
            desc="Free shipping on order"
          />
          <Feature
            src="/public/feature/2_small.png"
            title="Support 24/7"
            desc="Contact us 24 hrs a day"
          />
          <Feature
            src="/public/feature/3_small.png"
            title="Payment Secure"
            desc="Free shipping on order"
          />
        </div>
        <Heading>Today’s Deals</Heading>
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
            <Card
              title="Preorder Product"
              priceNew="110000"
              priceOld="130000"
              src="/public/shop/product-1.webp"
              large
            />
          )}
        </Carousel>
        <div className="special-wrapper">
          <div className="special-content">
            <h5>#special offer</h5>
            <h4>SUCCULENT GARDEN</h4>
            <h3>BOX WOGON</h3>
            <p>
              From planter materials to style options, discover which planter is
              best for your space.
            </p>
            <Button outline to="/shop">
              Explore The Shop
            </Button>
          </div>
          <div className="special-image">
            <img src="/public/Banner-1.webp" alt="" />
          </div>
        </div>
        <Heading>New Products</Heading>
        <div className="new-wrapper">
          <div className="new-banner">
            <Link to="/shop">
              <img src="/public/Banner-2.webp" alt="" />
            </Link>
          </div>
          <div className="new-products">
            {Array(6).fill(
              <Card
                title="Preorder Product"
                priceNew="110"
                priceOld="130"
                src="/public/shop/product-1.webp"
                small
              />
            )}
          </div>
        </div>
        <div className="single">
          <div className="single-banner">
            <Link to="/shop">
              <img src="/public/Banner-3.webp" alt="" />
            </Link>
          </div>
          <div className="single-banner">
            <Link to="/shop">
              <img src="/public/Banner-4.webp" alt="" />
            </Link>
          </div>
        </div>
        <div className="section-title">
          <div className="section-title__box">
            <Title title="Top Rated" />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
          </div>
          <div className="section-title__box">
            <Title title="Featured" />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
          </div>
          <div className="section-title__box">
            <Title title="Bestseller Products" />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
            <CardFluid
              src="/public/fluid/fluid-1.png"
              title="Preorder Product"
              priceNew="19"
              priceOld="20"
            />
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-wrapper">
          <div className="newsletter-wrapper__text">
            <h5>Sign Up For Newsletters</h5>
            <p>Be the First to Know. Sign up for newsletter today</p>
          </div>
          <div className="newsletter-wrapper__form">
            <form className="newsletter-form">
              <div className="newsletter-form__field">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="btn-submit-subscribe">
                  Subscribe !
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <Heading>Latest Blogs</Heading>
        <div className="post-wrapper">
          <PostBlogs
            src="/public/post/post-1.webp"
            title="Ohio Tropics Houseplant | Nice Collection"
            author="Vesoz Admin"
            date="13 Oct, 19"
          />
          <PostBlogs
            src="/public/post/post-1.webp"
            title="Ohio Tropics Houseplant | Nice Collection"
            author="Vesoz Admin"
            date="13 Oct, 19"
          />
          <PostBlogs
            src="/public/post/post-1.webp"
            title="Ohio Tropics Houseplant | Nice Collection"
            author="Vesoz Admin"
            date="13 Oct, 19"
          />
        </div>
      </div>
    </div>
  );
}
