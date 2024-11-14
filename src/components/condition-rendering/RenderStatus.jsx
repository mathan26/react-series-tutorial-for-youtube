import React from "react";

const RenderStatus = ({ status }) => {
  switch (status) {
    case "loading":
      return <div>Loading...</div>;
    case "error":
      return <div>An error occurred.</div>;
    case "success":
      return <div>Data fetched successfully.</div>;
    default:
      return <div>No data.</div>;
  }
};

export default RenderStatus;
