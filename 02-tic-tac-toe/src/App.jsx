import { useState } from "react";
import "./App.css";

const initialBoard = () => Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard);

  return (
    <>
      <div className="app">
        <div className="status">Player ___ Turns</div>

        <div className="board">
          {board.map((_, index) => {
            return (
              <button className="cell" key={index}>
                X
              </button>
            );
          })}
        </div>
        <button className="reset">Reset Game</button>
      </div>
    </>
  );
}

export default App;
