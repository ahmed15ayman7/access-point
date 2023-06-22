import StripeCheckout from "react-stripe-checkout";

function PaymentForm(props) {
  const handleToken = (token) => {
    // Send token to backend to process payment
  };
  return (
    <StripeCheckout
      token={handleToken}
      stripeKey="<YOUR_STRIPE_API_KEY>"
      amount={props.totalAmount}
      name="Access Point"
      description={`Payment for ${props.items} items`}
      panelLabel="Pay Now"
      currency="USD"
    />
  );
}
export default PaymentForm;
