import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increase = () => {
    setProgress(progress + 25);
  };

  const decrease = () => {
    setProgress(progress - 25);
  };

  const reset = () => {
    setProgress(0);
  };
  return (
    <div className="p-10 h-screen w-screen">
      <div className="border h-4 w-1/2 bg-amber-600"></div>

      <h1>{progress}%</h1>
      <div className="flex gap-2">
        <button className="border px-4 cursor-pointer" onClick={increase}>
          +
        </button>
        <button className="border px-4 cursor-pointer" onClick={decrease}>
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
