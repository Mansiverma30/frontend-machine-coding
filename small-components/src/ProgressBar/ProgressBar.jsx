import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increase = () => {
    setProgress((prev) => prev + 25);
  };

  const decrease = () => {
    setProgress((prev) => prev - 25);
  };

  const reset = () => {
    setProgress(0);
  };
  return (
    <div className="p-10 h-screen w-screen">
      <div
        className="border h-4 bg-amber-600 transition-all duration-300"
        style={{
          width: `${progress}%`,
        }}
      ></div>

      <h1>{progress}%</h1>
      <div className="flex gap-2">
        <button
          className="border px-4 cursor-pointer"
          disabled={progress === 100}
          onClick={increase}
        >
          +
        </button>
        <button
          className="border px-4 cursor-pointer"
          disabled={progress === 0}
          onClick={decrease}
        >
          -
        </button>
        <button className="border px-4 cursor-pointer" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
