import React, { useContext, useEffect, useState } from "react";
import Mom from "./Mom.jsx";
import { SnacksContext, useSnacks } from "./SnacksContext.jsx";

const Grandma = () => {
  const { state, dispatch } = useSnacks();

  useEffect(() => {
    dispatch({
      type: "GRANDMA GIVEN_SNACKS",
      payload: { snacksGivenByGrandama: "🍫" },
    });
  }, []);

  return (
    <div>
      <h2>I am Grandma, giving snacks {state.snacksGivenByGrandama} to kid</h2>
      <p>👇</p>
      <Mom />
    </div>
  );
};

export default Grandma;
