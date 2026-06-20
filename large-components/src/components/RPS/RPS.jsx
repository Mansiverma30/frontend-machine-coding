import React, { useState } from "react";

const RPS = () => {
  const choice = ["Rock", "Paper", "Scissors"];
  const [comp, setComp] = useState(null);
  const [win, setWin] = useState(null);
  const [user, setUser] = useState(null);
  const click = (i) => {
    setUser(choice[i]);
    let compPick = Math.floor(Math.random() * 3);
    setComp(choice[compPick]);
    if (choice[i] === choice[compPick]) {
      setWin("Draw");
    } else if (
      (choice[i] === "Rock" && choice[compPick] === "Scissors") ||
      (choice[i] === "Paper" && choice[compPick] === "Rock") ||
      (choice[i] === "Scissors" && choice[compPick] === "Paper")
    ) {
      setWin("You");
    } else {
      setWin("Computer");
    }
  };
  return (
    <div className="p-10">
      <div className="flex gap-3">
        {choice.map((c, i) => (
          <button
            className="border px-2 py-0.5 active:scale-95 cursor-pointer"
            key={i}
            onClick={() => click(i)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="mt-1">You: {user}</p>
      <p>Computer: {comp}</p>
      <p>Winner: {win}</p>
    </div>
  );
};

export default RPS;
