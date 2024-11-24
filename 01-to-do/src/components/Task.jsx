import React from "react";
import CardComponent from "./CardComponent";

const Task = ({ task, handleDelete }) => {
  return (
    <>
      <CardComponent task={task} handleDelete={handleDelete}>
        {task}
      </CardComponent>
    </>
  );
};

export default Task;
