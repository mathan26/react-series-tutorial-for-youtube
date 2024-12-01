import { createContext, useContext, useReducer, useState } from "react";

export const SnacksContext = createContext(null);

const snacksReducer = (state, action) => {
  switch (action.type) {
    case "GRANDMA GIVEN_SNACKS":
      return {
        ...state,
        snacksGivenByGrandama: action.payload.snacksGivenByGrandama,
      };
    case "MOM_GIVEN_SNACKS":
      return { ...state, momGivenSnacks: action.payload.momGivenSnacks };
    default:
      throw new Error("Unknown action type");
  }
};

const SnacksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(snacksReducer, {
    snacksGivenByGrandama: "",
    momGivenSnacks: "",
  });

  const value = { state, dispatch };

  return (
    <SnacksContext.Provider value={value}>{children}</SnacksContext.Provider>
  );
};

export const useSnacks = () => {
  const context = useContext(SnacksContext);

  if (context === null) {
    throw new Error("context cannot used outside");
  }

  return context;
};

export default SnacksProvider;
