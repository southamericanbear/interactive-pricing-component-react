import React from "react";
import PriceSliderComponent from "./PriceSliderComponent";
import "../style/main.css";
export const PriceSlider = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Simple, traffic-based pricing</h1>
          <div>
            <h5>Sign-up for our 30-day trial.</h5>
            <h5>No credit card required.</h5>
          </div>
        </div>
        <PriceSliderComponent />
      </div>
    </div>
  );
};
