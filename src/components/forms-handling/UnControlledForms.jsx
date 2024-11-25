import React, { useRef, useState } from "react";

const UnControlledForms = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !email || !password) {
      alert("All fields are required!");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email!");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters.");
    } else {
      console.log("Form Submitted Successfully", { username, email, password });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>UnControlled Form component</h1>
        <div className="form-elements">
          <label htmlFor="name">User Name:</label>
          <input type="text" name="username" ref={usernameRef} />
        </div>
        <div className="form-elements">
          <label htmlFor="name">Email:</label>
          <input type="text" name="email" ref={emailRef} />
        </div>
        <div className="form-elements">
          <label htmlFor="name">Password:</label>
          <input type="password" name="password" ref={passwordRef} />
        </div>
        <div className="form-elements" style={{ justifyContent: "flex-end" }}>
          <button type="submit">Regiter</button>
        </div>
      </form>
    </>
  );
};

export default UnControlledForms;
