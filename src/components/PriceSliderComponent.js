import React, { useState } from "react";

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
          <span>Monthly Billing</span>

          <label className="switch">
            <input
              type="checkbox"
              name="discount"
              className="discount slider"
              id="discount"
              onClick={handleDiscount}
            />
            <span className="slider round"></span>
          </label>
          <span>Yearly Billing</span>
          <span>25% discount</span>
        </div>
      </div>
      <div className="details">
        <div className="left">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <div className="right">
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
}
