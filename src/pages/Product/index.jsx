import React from "react";
import "react-multi-carousel/lib/styles.css";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Breadcrumb from "../../components/Breadcrumb";
// import Morefeatured from "../../components/MoreFeatured";

import "./products.scss";

export default function Shop() {
  return (
    <>
      <Breadcrumb title="Collections" />
      <div className="list-product">
        <div className="container-wrapper">
          <Heading>Best Seller</Heading>
          {/* <Morefeatured>More Best Seller</Morefeatured> */}
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
          <hr />
        </div>

        <div className="list-product">
          <div className="container-wrapper">
            <Heading>Featured</Heading>
            {/* <Morefeatured>More Featured</Morefeatured> */}
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
            <hr />
          </div>
        </div>

        <div className="list-product">
          <div className="container-wrapper">
            <Heading>Top Rated</Heading>
            {/* <Morefeatured>More Top Rated</Morefeatured> */}
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
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
