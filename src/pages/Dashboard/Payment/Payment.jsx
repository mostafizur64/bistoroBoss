import React from "react";
import Subtitle from "../../../Components/Subtitle/Subtitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import UseCart from "../../../hooks/UseCart";

// TODO:provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_Pk);

const Payment = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, value) => sum + value.price, 0);
  const price = parseFloat(total.toFixed(2))
  return (
    <div className="w-full">
      <Subtitle subTitle="Please process payment" heading="payment" />
      teka o teke tumi urai uria aso
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
