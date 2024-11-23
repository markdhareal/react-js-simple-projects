import React from "react";
import CardComponent from "./CardComponent";

const Task = ({ task }) => {
  return (
    <>
      <CardComponent>
        <h2>{task}</h2>
      </CardComponent>
    </>
  );
};

export default Task;
