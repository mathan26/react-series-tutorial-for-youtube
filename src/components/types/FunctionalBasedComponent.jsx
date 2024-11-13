import React, { useEffect } from "react";

const FunctionalBasedComponent = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("function component mounted");
  }, []);
  useEffect(() => {
    console.log("state changed", count);
  }, [count]);

  return (
    <div>
      <h1>Functional Component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionalBasedComponent;
