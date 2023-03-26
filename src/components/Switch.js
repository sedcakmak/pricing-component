import { useContext } from "react";
import { PriceContext } from "../App";

import "../App.css";

export default function Switch() {
  const { pricing, setPricing } = useContext(PriceContext);

  function changePricing() {
    pricing === "Monthly" ? setPricing("Annually") : setPricing("Monthly");
  }

  return (
    <div className="switch-wrapper">
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Annually"
            name="pricing"
            // checked={pricing === "Annually"}
          />
          Annually
        </label>
      </div>
      <div
        className={"switch " + pricing}
        onClick={changePricing}
      ></div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Monthly"
            name="pricing"
            // checked={pricing === "Monthly"}
          />
          Monthly
        </label>
      </div>
    </div>
  );
}
