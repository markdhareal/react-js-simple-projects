import React from "react";
import "./CardComponent.css";

const CardComponent = ({ children }) => {
  return (
    <div className="card">
      <h2>{children}</h2>
    </div>
  );
};

export default CardComponent;
