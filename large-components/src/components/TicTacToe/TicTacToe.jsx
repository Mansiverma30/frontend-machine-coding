import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [user, setUser] = useState(true);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = () => {
    for (const combinations of winningCombinations) {
      let [a, b, c] = combinations;
      if (board[a] && board[a] === board[b] && board[c] === board[a]) {
        return "someone won, you guys figure it out";
      }
    }
    if (!board.includes("")) {
      return "Lol nobody won, it's not draw it's lose for both of you guys";
    }
    return null;
  };
  let result = winner();
  const click = (i) => {
    let newBoard = [...board];
    if (newBoard[i] === "") {
      newBoard[i] = user ? "X" : "O";
      setUser((prev) => !prev);
      setBoard(newBoard);
    }
    if (result) {
      return;
    }
  };
  return (
    <div className="min-h-screen flex flex-col p-10">
      <div className="grid grid-cols-3 w-fit select-none">
        {board.map((b, i) => (
          <div
            key={i}
            className="border size-16 text-center"
            onClick={() => click(i)}
          >
            {b}
          </div>
        ))}
      </div>
      <p className="mt-5">{result}</p>
    </div>
  );
};

export default TicTacToe;
