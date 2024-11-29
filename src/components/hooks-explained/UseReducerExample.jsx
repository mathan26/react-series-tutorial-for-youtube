import React, { useReducer } from "react";

const UseReducerExample = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 + action.payload.increaseby };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={{ color: "purple" }}>useReducer</h1>
      <h1>Count: {state?.count}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            dispatch({ type: "increment", payload: { increaseby: 2 } });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
