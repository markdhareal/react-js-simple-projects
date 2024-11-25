import React, { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [];

  const checkWinner = () => {};

  const handleClick = () => {};

  const getStatusMessage = () => {};

  const resetGame = () => {};

  return { board, handleClick, checkWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
