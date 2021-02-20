import React, { useState } from "react";
import check from "../images/icon-check.svg";

export default function PriceSliderComponent() {
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(8);
  const [plan, setPlan] = useState("10K");
  const [hasDiscount, setHasDiscount] = useState(false);

  const handleDiscount = () => {
    setHasDiscount((hasDiscount) => !hasDiscount);
  };

  const finalPrice = hasDiscount ? price * 0.75 : price;

  const handlePriceChange = (e) => {
    const valueChange = e.target.value;
    setValue(valueChange);
    let pricing = 8;
    if ((value > 0) & (value <= 20)) {
      setPlan("10K");
      pricing = 8;
    } else if (value > 20 && value <= 40) {
      setPlan("50K");
      pricing = 12;
    } else if (value > 40 && value <= 60) {
      setPlan("100K");
      pricing = 16;
    } else if (value > 60 && value <= 80) {
      setPlan("500K");
      pricing = 24;
    } else if (value > 80 && value <= 100) {
      setPlan("1M");
      pricing = 36;
    }

    setPrice(pricing);
  };

  return (
    <div className="price-component">
      <div className="slider-and-switch">
        <div className="mobile-slider-price-container">
          <div className="package-and-price">
            <span className="price">
              {" "}
              ${finalPrice}.00 <span className="month">/month</span>
            </span>
            <span className="plan"> {plan} PAGEVIEWS </span>
          </div>
          <input
            type="range"
            name="range"
            value={value}
            min="0"
            max="100"
            id="range"
            className="range"
            onChange={handlePriceChange}
          />
          <span className="price-mobile">
            {" "}
            ${finalPrice}.00 <span className="month">/month</span>{" "}
          </span>
        </div>
        <div className="switch-container">
          <span className="monthly">Monthly Billing</span>

          <label
            className="switch"
            style={{
              margin: "10px 15px",
            }}
          >
            <input
              type="checkbox"
              name="discount"
              className="discount slider"
              id="discount"
              onClick={handleDiscount}
            />
            <span className="slider round"></span>
          </label>
          <div className="year">
            <span className="yearly">Yearly Billing</span>
            <span className="percentage">-25% </span>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          background: "hsl(223, 50%, 87%)",
          border: "0",
          height: "1px",
          marginTop: "30px",
        }}
      />
      <div className="details">
        <div className="left">
          <span>
            <img src={check} alt="" /> Unlimited websites
          </span>
          <span>
            <img src={check} alt="" /> 100% data ownership
          </span>
          <span>
            <img src={check} alt="" /> Email reports
          </span>
        </div>
        <div className="right">
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
}
