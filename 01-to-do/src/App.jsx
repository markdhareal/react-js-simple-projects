import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <FormComponent />
        <main className="app_main_section">
          <h1>Hello, World</h1>
        </main>
      </div>
    </>
  );
}

export default App;
