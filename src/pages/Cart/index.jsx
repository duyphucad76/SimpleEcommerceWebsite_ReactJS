import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ButtonCart from "../../components/ButtonCart";
import "./Cart.scss";

export default function Cart() {
  const currencyFormat = (price) => {
    return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  return (
    <>
      <Breadcrumb title="Your Shopping Cart" />
      <main className="container-wrapper mt-5">
        <form action="" method="">
          <Table bordered className="shop__cart__table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="/shop-detail/product-detail.webp"
                    className="shop__cart__image"
                  />
                </td>
                <td>
                  <Link to="" className="shop__cart__name">
                    Product 1
                  </Link>
                </td>
                <td>
                  <span className="shop__cart__price">
                    {currencyFormat(300)}
                  </span>
                </td>
                <td>
                  <input
                    type="number"
                    className="shop__cart__quantity"
                    value="3"
                  />
                </td>
                <td>
                  <span className="shop__cart__price">
                    {currencyFormat(300)}
                  </span>
                </td>
                <td>
                  <Badge bg="danger">Delete</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="shop__cart__action">
            <ButtonCart>Update cart</ButtonCart>
            <ButtonCart to="/shop">contineu shopping</ButtonCart>
            <ButtonCart>Clear cart</ButtonCart>
          </div>
          <div className="shop__cart__checkout">
            <Row>
              <Col className="shop__cart__countries">
                <h3 className="shop__cart__title__totals">
                  get shopping estimates
                </h3>
                <select className="shop__cart__countries__select">
                  <option>---</option>
                  <option>Argentina</option>
                  <option>France</option>
                  <option>VietNam</option>
                </select>
                <input
                  className="shop__cart__countries__select shop__cart__countries__code"
                  type="text"
                  placeholder="Zip/Postal Code"
                />
                <ButtonCart>Calculate shopping</ButtonCart>
              </Col>
              <Col>
                <h3 className="shop__cart__title__totals">Cart totals</h3>
                <Table bordered className="shop__cart__table__checkout">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <td>{currencyFormat(300)}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Total</th>
                      <th>{currencyFormat(300)}</th>
                    </tr>
                  </tbody>
                </Table>
                <ButtonCart to="/checkout">Proceed to checkout
                </ButtonCart>
              </Col>
            </Row>
          </div>
        </form>
      </main>
    </>
  );
}
