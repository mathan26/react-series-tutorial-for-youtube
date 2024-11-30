import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks-explained/useWindowSize";

const ComponentA = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <h1>Component A</h1>
      {windowSize.width > 500 ? (
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
          maxime necessitatibus quis tempore fugiat error sunt quae minus,
          dignissimos ea ab cum tenetur, dolores non nisi temporibus nobis
          consequatur!
        </h2>
      ) : (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit ex odit sapiente. Omnis aspernatur totam, fuga dicta
          voluptates, nostrum quia aliquam, veniam cumque quas placeat! Porro
          ullam minus animi obcaecati!
        </p>
      )}
    </div>
  );
};

export default ComponentA;
