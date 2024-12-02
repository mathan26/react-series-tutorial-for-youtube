import React from "react";

const ChildMemoExample = ({ sum }) => {
  console.log("child rendered");
  return (
    <div>
      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default React.memo(ChildMemoExample);
