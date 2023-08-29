import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Payment = () => {
  const [orderId, setOrderId] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let unit = queryParams.get("unit");
  if (unit<=200){
    unit=200
    
  }
  else if(unit<=400){
    unit=200+(unit*4.75)
  }
  else{
    unit=200+(unit*7)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/order");
        const { data } = response;
        setOrderId(data.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePaymentCapture = async (paymentId) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/capture/${paymentId}`,
        {}
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = () => {
    if (orderId) {
      const options = {
        key: "rzp_test_sQfzWB6qfzWO0H",
        name: "Your App Name",
        description: "Some Description",
        order_id: orderId,
        handler: async (response) => {
          const paymentId = response.razorpay_payment_id;
          handlePaymentCapture(paymentId);
        },
        theme: {
          color: "#9d93d6",
        },
      };
  
      //const rzp1 = new window.Razorpay({key});
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };

  return (
    <div className="App123">
      <header className="App-header">
        <h1>Your Bill is Rs {unit}</h1>
        <br />
        <button id="paynow" onClick={handlePayment}>
          Pay now
        </button>
      </header>
    </div>
  );
};
