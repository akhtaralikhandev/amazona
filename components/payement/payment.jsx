import React, { useState } from "react";
import "./payment.css";
const Payment = () => {
  const [validity, setValidity] = useState("");
  const [validityError, setValidityError] = useState("");

  const handleValidityChange = (event) => {
    const inputValue = event.target.value;
    setValidity(inputValue);

    const isValid = /^\d{2}\/\d{2}$/.test(inputValue);
    if (isValid) {
      setValidityError("");
    } else {
      setValidityError(
        "Please enter a valid expiration date in the format MM/YY"
      );
    }
  };

  return (
    <div className="payment ">
      <div className="wrapper  xl:pt-24 pt-8 flex justify-center">
        <div className="paymentdiv  w-80 bg-white shadow-lg flex items-center justify-center gap-4 flex-col p-2">
          <h1 className="text-xl text-slate-700">Pay Securely</h1>
          <div className="flex flex-col">
            <input
              type="text"
              className="xl:p-2 p-1 xl:text-xl border border-black rounded-lg outline-blue-600"
              id="nameOnCard"
              placeholder="Name on card"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="xl:p-2 p-1 xl:text-xl border border-black rounded-lg outline-blue-600"
              id="cardNumber text"
              placeholder="Card number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="xl:p-2 p-1 xl:text-xl border border-black rounded-lg outline-blue-600"
              id="csv"
              placeholder="CSV"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="validity"
              placeholder="MM/YY"
              value={validity}
              className="xl:p-2 p-1 xl:text-xl border border-black rounded-lg outline-blue-600"
              onChange={handleValidityChange}
            />
            <button className="p-2 xl:text-xl bg-slate-700 text-white hover:bg-slate-500 rounded-lg outline-blue-600">
              pay
            </button>
            {validityError && <p className="error">{validityError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
