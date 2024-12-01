import React, { useContext } from "react";
import { useSnacks } from "./SnacksContext";

const Kid = () => {
  const { state } = useSnacks();
  console.log(state);
  return (
    <div>
      <h1>I am Kid</h1>
      {state?.snacksGivenByGrandama !== "" ? (
        <p>Kid eating grandma given snacks {state.snacksGivenByGrandama} </p>
      ) : (
        ""
      )}
      {state?.momGivenSnacks !== "" ? (
        <p>Kid eating grandma given snacks {state.momGivenSnacks} </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Kid;
