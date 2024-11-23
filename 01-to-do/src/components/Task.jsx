import React from "react";
import CardComponent from "./CardComponent";

const Task = ({ task }) => {
  return (
    <>
      <CardComponent>{task}</CardComponent>
    </>
  );
};

export default Task;
