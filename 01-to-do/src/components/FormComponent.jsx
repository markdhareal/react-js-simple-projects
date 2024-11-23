import React from "react";
import "./FormComponent.css";

const FormComponent = () => {
  return (
    <>
      <header className="app_header_section">
        <form>
          <input type="text" className="task_input" />
          <button type="submit" className="submit_button">
            + Add
          </button>
        </form>
      </header>
    </>
  );
};

export default FormComponent;
