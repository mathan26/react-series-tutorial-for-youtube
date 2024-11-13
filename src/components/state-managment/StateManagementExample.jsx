import React, { useState } from "react";
import lightOff from "./../../assets/lightbulb-off.svg";
import lightOn from "./../../assets/lightbulb-on.svg";

const StateManagementExample = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      {isOn ? (
        <img src={lightOn} alt="light on" width={200} />
      ) : (
        <img src={lightOff} alt="light off" width={200} />
      )}

      <br />
      <br />

      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          outline: "none",
          padding: "20px 30px",
          background: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          transition: "0.3s ease-in-out",
        }}
      >
        Toggle Light
      </button>
    </div>
  );
};

export default StateManagementExample;
