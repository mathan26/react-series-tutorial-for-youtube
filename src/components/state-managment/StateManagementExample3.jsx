import React, { useState } from "react";

const StateManagementExample3 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleFormChange = (event) => {
    const prop = event.target.name;
    console.log(prop);
    setForm({ ...form, [prop]: event.target.value });
  };

  return (
    <div>
      <p>Form Example</p>

      <form>
        <div className="form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleFormChange}
          />
        </div>

        <p>formdata: {JSON.stringify(form)}</p>
      </form>
    </div>
  );
};

export default StateManagementExample3;
