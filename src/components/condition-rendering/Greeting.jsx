import React from "react";

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Hello, welcome back!</h1>
        </>
      ) : (
        <h1>Hello, Please login!</h1>
      )}
    </div>
  );
};

export default Greeting;
