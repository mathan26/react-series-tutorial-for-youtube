import React, { useEffect, useState } from "react";
import reactImage from "./../../assets/react.svg";
import useWindowSize from "../hooks-explained/useWindowSize";
const ComponentB = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <h1>Component B</h1>
      {windowSize.width > 500 ? (
        <img src={reactImage} alt="image" width={250} />
      ) : (
        <p>
          <b>Image descrption:</b> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus neque possimus dolores aliquam cum illum
          expedita ullam. Magni architecto expedita assumenda! Ipsam adipisci
          modi consequuntur debitis illo voluptate nobis itaque!
        </p>
      )}
    </div>
  );
};

export default ComponentB;
