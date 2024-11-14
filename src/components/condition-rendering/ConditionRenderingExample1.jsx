import React from "react";
import Greeting from "./Greeting";
import RenderStatus from "./RenderStatus";

const ConditionRenderingExample1 = () => {
  const [showNotification, setShowNotification] = React.useState(true);
  return (
    <div>
      <div>{showNotification && <p>You have new notifications!</p>}</div>
      <h1>Condition Rendering in React</h1>
      <Greeting isLoggedIn={false} />
      <RenderStatus status="error" />
    </div>
  );
};

export default ConditionRenderingExample1;
