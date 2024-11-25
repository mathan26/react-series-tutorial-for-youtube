import React, { useState } from "react";

const ControlledFormExample = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const [errors, setErrors] = useState({});

  const handleForm = (event) => {
    const propName = event.target.name;
    const value = event.target.value;
    setForm((prevData) => ({ ...prevData, [propName]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!form.username.trim()) {
      newErrors.username = "Username is required!";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email format is invalid.";
    }

    // Password validation
    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (form.password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form Submitted Successfully", form);
    }
  };

  return (
    <div>
      <h1>Controlled Form component</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="form-elements">
          <label htmlFor="name">User Name:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleForm}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-elements">
          <label htmlFor="name">Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleForm}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-elements">
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleForm}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-elements" style={{ justifyContent: "flex-end" }}>
          <button type="submit">Regiter</button>
        </div>
      </form>
    </div>
  );
};

export default ControlledFormExample;
