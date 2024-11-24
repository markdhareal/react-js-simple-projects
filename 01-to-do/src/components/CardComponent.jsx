import React from "react";
import "./CardComponent.css";

const CardComponent = ({ task, handleDelete }) => {
  return (
    <div className="card">
      <h3>{task}</h3>
      <button onClick={() => handleDelete(task)}>Delete</button>
    </div>
  );
};

export default CardComponent;
