import React, { useState } from "react";

export default function PriceSliderComponent() {
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(8);
  const [plan, setPlan] = useState("10k");
  const [hasDiscount, setHasDicount] = useState(false);

  const handleDiscount = () => {
    setHasDicount((hasDiscount) => !hasDiscount);
  };

  const finalPrice = hasDiscount ? price * 0.75 : price;

  const handlePriceChange = (e) => {
    const valueChange = e.target.value;
    setValue(valueChange);
    let pricing = 8;
    if ((value > 0) & (value <= 20)) {
      setPlan("10k");
      pricing = 8;
    } else if (value > 20 && value <= 40) {
      setPlan("50k");
      pricing = 12;
    } else if (value > 40 && value <= 60) {
      setPlan("100k");
      pricing = 16;
    } else if (value > 60 && value <= 80) {
      setPlan("500k");
      pricing = 24;
    } else if (value > 80 && value <= 100) {
      setPlan("1M");
      pricing = 36;
    }
    setPrice(pricing);
  };

  return (
    <div className="App">
      <input
        type="range"
        name="range"
        value={value}
        min="0"
        max="100"
        className="slider"
        id="range"
        onChange={handlePriceChange}
      />
      <input
        type="checkbox"
        name="discount"
        className="discount"
        id="discount"
        onClick={handleDiscount}
      />
      <> {finalPrice} </>
      <hr />
      <> {plan} Pageviews </>
    </div>
  );
}
