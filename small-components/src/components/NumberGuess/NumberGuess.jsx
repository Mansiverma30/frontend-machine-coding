import React, { useState } from "react";

const NumberGuess = () => {
  const [num, setNum] = useState(0);
  const [guess, setGuess] = useState("");

  const [computerPick, setComputerPick] = useState(
    Math.floor(Math.random() * 100) + 1,
  );
  const click = () => {
    if (computerPick === num) {
      setGuess("correct");
    } else if (computerPick > num) {
      setGuess("High");
    } else {
      setGuess("Low");
    }
  };

  const playAgain = () => {
    setComputerPick(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setNum(0);
  };
  return (
    <div className="p-10 flex flex-col gap-6">
      <p>Guess a number (1-100)</p>
      <input
        type="number"
        className="border px-2 py-1 w-1/5"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        min={0}
        max={100}
      />
      <button className="border px-2 py-0.5 w-1/5" onClick={click}>
        Guess
      </button>
      {guess}

      <button className="border px-2 py-0.5 w-1/5" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
};

export default NumberGuess;
