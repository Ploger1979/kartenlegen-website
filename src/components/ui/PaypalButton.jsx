import { useEffect, useRef, useState } from "react";

const PaypalButton = ({ amount, onSuccess }) => {
  const [loaded, setLoaded] = useState(false);
  const paypalRef = useRef();

  useEffect(() => {
    const checkPaypal = () => {
      if (window.paypal) {
        setLoaded(true);
        return true;
      }
      return false;
    };

    if (!checkPaypal()) {
      const timer = setInterval(() => {
        if (checkPaypal()) clearInterval(timer);
      }, 500);
      return () => clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    if (!loaded || !paypalRef.current) return;

    const buttons = window.paypal.Buttons({
      createOrder: (data, actions) =>
        actions.order.create({
          purchase_units: [{ amount: { value: amount } }],
        }),
      onApprove: (data, actions) => actions.order.capture().then(onSuccess),
      onError: (err) => console.error("PayPal Error:", err),
    });

    buttons.render(paypalRef.current);

    return () => {
      if (paypalRef.current) paypalRef.current.innerHTML = "";
    };
  }, [loaded, amount, onSuccess]);

  return <div ref={paypalRef} />;
};

export default PaypalButton;
