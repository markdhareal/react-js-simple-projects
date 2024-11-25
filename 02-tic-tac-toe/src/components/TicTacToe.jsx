import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

function TicTacToe() {
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

export default TicTacToe;
