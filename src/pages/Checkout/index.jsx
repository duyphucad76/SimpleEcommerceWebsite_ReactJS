import { Table, Badge, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaypalButton from "../../components/PaypalButton";
export default function Checkout() {
  return (
    <div className="wrapper">
      <Table bordered className="table table-hover">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Subotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">
              <img
                src="/shop-detail/product-detail.webp"
                className="checkout_img"
                width="150px"
              />
            </td>
            <td>
              <Link to="" className="checkout_product_name">
                Product 1
              </Link>
            </td>
            <td>
              <span className="unit_price">$ 100</span>
            </td>
            <td>
              <input type="number" className="checkout_quantity" value="3" />
            </td>
            <td>
              <span className="checkout_subtotal">$ 300</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>Total</td>
            <td colspan="2">$ 300</td>
          </tr>
        </tfoot>
      </Table>
      <Row>
        <Col></Col>
        <Col>
          <h4>Payment Methods</h4>
          <PaypalButton></PaypalButton>
        </Col>
        <Col>
          <h4>Payment Summary</h4>
          <Row>
            <Col>Subtotal: </Col>
            <Col>$300</Col>
          </Row>
          <Row>
            <Col>Shipping: </Col>
            <Col>$0</Col>
          </Row>
          <Row>
            <Col>Discount: </Col>
            <Col>$0</Col>
          </Row>
          <Row>
            <Col>Total: </Col>
            <Col>$300</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
