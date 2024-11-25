import useTicTacToe from "../hooks/UseTicTacToe";

function TicTacToe() {
  const { board, handleClick, checkWinner, getStatusMessage, resetGame } =
    useTicTacToe();

  return (
    <>
      <div className="app">
        <div className="status">{getStatusMessage()}</div>

        <div className="board">
          {board.map((board_index, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={board_index !== null}
              >
                {board_index}
              </button>
            );
          })}
        </div>
        <button className="reset" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </>
  );
}

export default TicTacToe;
