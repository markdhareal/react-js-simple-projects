import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };
  return (
    <>
      <header className="app_header_section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Task"
            value={taskTitle}
            onChange={handleChange}
            className="task_input"
          />
          <button type="submit" className="submit_button">
            + Add
          </button>
        </form>
      </header>
    </>
  );
};

export default FormComponent;
