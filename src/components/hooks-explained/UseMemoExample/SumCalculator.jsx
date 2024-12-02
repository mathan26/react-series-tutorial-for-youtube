import { useMemo, useState } from "react";
import ChildMemoExample from "./ChildMemoExample";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [randomValue, setRandomValue] = useState(0);

  const calculateSum = () => {
    console.log("calculate sum called");
    return numbers.reduce((acc, num) => acc + num, 0);
  };

  const sum = useMemo(() => {
    return calculateSum();
  }, [numbers]);

  return (
    <div>
      <h1>useMemo example</h1>
      <h3>Numbers: {numbers.join(", ")}</h3>
      <h3>Random number: {randomValue}</h3>
      <ChildMemoExample sum={sum} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "32px",
        }}
      >
        <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
          Add Number
        </button>
        <button onClick={() => setRandomValue(Math.random())}>
          Change Random Value
        </button>
      </div>
    </div>
  );
};

export default SumCalculator;
