import React, { useContext, useEffect } from "react";
import Kid from "./Kid.jsx";
import { useSnacks } from "./SnacksContext.jsx";

const Mom = () => {
  const { state, dispatch } = useSnacks();

  useEffect(() => {
    dispatch({
      type: "MOM_GIVEN_SNACKS",
      payload: { momGivenSnacks: "🍚" },
    });
  }, []);
  return (
    <div>
      <h1>I am Mom</h1>
      <h2>I am Mother, giving snacks {state.momGivenSnacks} to kid</h2>

      <p>👇</p>
      <Kid />
    </div>
  );
};

export default Mom;
