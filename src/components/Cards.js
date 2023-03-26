import { Packages } from "../data/Data";
import { useState, useContext } from "react";
import { PriceContext } from "../App";

export default function Cards() {
  const { pricing } = useContext(PriceContext);
  const [active, setActive] = useState("Professional");
  const [hover, setHover] = useState();

  function handleClick(item) {
    setActive(item.name);
  }
  return (
    <div className="card-wrapper">
      <ul>
        {Packages.map((item) => {
          return (
            <li
              key={item.name}
              onClick={() => handleClick(item)}
            >
              <div
                className={"card-container"}
                style={{
                  background:
                    active === item.name
                      ? " linear-gradient(to right bottom,hsl(236, 72%, 79%),hsl(237, 63%, 64%)"
                      : "var(--VeryLightGrayishBlue)",
                  color:
                    active === item.name
                      ? "var(--VeryLightGrayishBlue)"
                      : "var(--DarkGrayishBlue)",
                }}
              >
                <p>{item.name}</p>
                <h2>
                  {pricing === "Monthly"
                    ? item.price_monthly
                    : item.price_annually}
                </h2>
                <hr />
                <p>{item.storage} Storage</p>
                <hr />
                <p>{item.users} Users Allowed</p>
                <hr />
                <p>Send up to {item.capacity}</p>
                <hr />
                <button
                  className="btn-cta"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  style={{
                    background:
                      active === item.name
                        ? "var(--VeryLightGrayishBlue)"
                        : "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
                    color:
                      active === item.name
                        ? "hsl(237, 63%, 64%)"
                        : "var(--VeryLightGrayishBlue)",
                    ...(hover ? hover : null),
                  }}
                >
                  learn more
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
