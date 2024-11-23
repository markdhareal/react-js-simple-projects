import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle) {
      addTask(taskTitle);
      setTaskTitle("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <header className="app_header_section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={error ? "Please Input Task" : "Enter Task"}
            value={taskTitle}
            onChange={handleChange}
            className={error ? "task_input_error" : "task_input"}
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
