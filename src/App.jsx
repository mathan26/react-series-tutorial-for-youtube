import { useState } from "react";
import ConditionRenderingExample1 from "./components/condition-rendering/ConditionRenderingExample1";
import ComponentA from "./components/example-components/ComponentA";
import ComponentB from "./components/example-components/ComponentB";
import ControlledFormExample from "./components/forms-handling/ControlledFormExample";
import UnControlledForms from "./components/forms-handling/UnControlledForms";
import HooksExample from "./components/hooks-explained/HooksExample";
import UseReducerExample from "./components/hooks-explained/UseReducerExample";
import ListandKeysExample1 from "./components/list-and-keys/ListandKeysExample1";
import Parent from "./components/props/Parent";
import StateManagementExample from "./components/state-managment/StateManagementExample";
import StateManagementExample2 from "./components/state-managment/StateManagementExample2";
import StateManagementExample3 from "./components/state-managment/StateManagementExample3";
import ContextIndex from "./components/context-example/ContextIndex.jsx";
import { useSnacks } from "./components/context-example/SnacksContext.jsx";

const App = () => {
  // const [showFirstComponent, setFirstComponent] = useState(false);

  // const context = useSnacks();

  return (
    <>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    setFirstComponent(!showFirstComponent);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  toggleComponent*/}
      {/*</button>*/}
      {/*<div className="container">*/}
      {/*  {showFirstComponent ? <ComponentA /> : <ComponentB />}*/}
      {/*</div>*/}
      <ContextIndex />
    </>
  );
};

export default App;
