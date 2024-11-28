import React, { useEffect, useState } from "react";

const StateAndEffect = () => {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  useEffect(() => {
    if (balls >= 6) {
      setOvers(overs + 1);
      setBalls(0);
    }
  }, [balls]);

  const addScore = (runs) => {
    setScore(score + runs);
    setBalls(balls + 1);
  };

  const handleWicket = () => {
    setWickets(wickets + 1);
  };

  return (
    <div>
      <h2>Cricket Scoreboard</h2>
      <div>
        <h3>Score: {score}</h3>
        <h3>Wickets: {wickets}</h3>
        <h3>Balls: {balls}</h3>
        <h3>Overs: {overs}</h3>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Buttons for runs */}
        <button onClick={() => addScore(1)}>1 Run</button>
        <button onClick={() => addScore(2)}>2 Runs</button>
        <button onClick={() => addScore(3)}>3 Runs</button>
        <button onClick={() => addScore(4)}> 4 Runs</button>
        <button onClick={() => addScore(6)}>6 Runs</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {/* Button for wicket */}
        <button style={{ background: "red" }} onClick={handleWicket}>
          Wicket
        </button>
      </div>
    </div>
  );
};

export default StateAndEffect;
