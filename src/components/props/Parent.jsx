import Card from "./Card";
import Child from "./Child";

const Parent = () => {
  const callFromChild = () => {
    console.log("Hello from Parent");
  };

  return (
    <div>
      <Child
        name="Mathan"
        email="abc@gmail.com"
        city="Chennai"
        callFromChild={callFromChild}
      />
      <Card>
        <h1>Card Title</h1>
        <p>Card Content</p>
      </Card>
      <Card>
        <h1>Card Title2</h1>
        <p>Card Content2</p>
      </Card>
    </div>
  );
};

export default Parent;
