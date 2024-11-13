import React, { useState } from "react";

const StateManagementExample2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Counter : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateManagementExample2;
