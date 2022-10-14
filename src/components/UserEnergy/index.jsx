import React, { useState, useEffect } from "react";
import { Energy } from "./userEnergyElements";

export default function UserEnergy() {
  const [energy, setEnergy] = useState(
    JSON.parse(localStorage.getItem("userEnergy") || 0)
  );
  const userId = JSON.parse(localStorage.getItem("userInfo"))["uid"];
  let myCurrentDate = new Date().getTime();
  async function grabEnergy(id) {}

  useEffect(() => {
    grabEnergy(userId);
  }, [userId, energy]);

  return (
    <Energy>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="orange"
        className="bi bi-lightning-charge-fill"
        viewBox="0 0 16 16"
      >
        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
      </svg>
      : {energy} / 5
    </Energy>
  );
}
