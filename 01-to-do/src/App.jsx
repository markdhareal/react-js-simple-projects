import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Task from "./components/Task";

function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  return (
    <>
      <div className="app">
        <FormComponent addTask={addTask} />
        <main className="app_main_section">
          <div className="task_grid">
            {tasks.map((task, index) => (
              <Task key={index} task={task} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
