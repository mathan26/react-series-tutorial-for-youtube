import React from "react";
import Grandma from "./Grandma.jsx";
import SnacksProvider from "./SnacksContext.jsx";

const ContextIndex = () => {
  return (
    <SnacksProvider>
      <h1>Context API Crash Course</h1>
      <Grandma />
    </SnacksProvider>
  );
};

export default ContextIndex;
