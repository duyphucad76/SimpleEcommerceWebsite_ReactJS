import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const initialOptions = {
  "client-id":
    "AXeTcZBcOhITcbEOlJe3RdTtlBd1dkT5DiEmSBlyrDr7NkXItpDHbIdZ-kjBXxG0aWZtQmi7Vm-kemJ1",
  currency: "USD",
  intent: "capture",
};
export default function PaypalButton() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD", //Don vi tien
                  value: "300", //Tong tien
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: "300", //Tong tien
                    },
                  },
                },
                items: [ //San pham thanh toan
                  {
                    name: "Product 1" /* Shows within upper-right dropdown during payment approval */,
                    description:
                      "Description Product 1" /* Item details will also be in the completed paypal.com transaction view */,
                    unit_amount: {
                      currency_code: "USD",
                      value: "100",
                    },
                    quantity: "3",
                  },
                ],
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log(details);
            alert("Thank you for your purchase !!!");
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
