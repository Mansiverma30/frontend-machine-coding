import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning]);

  return (
    <div className="p-10">
      <p>{time <= 1 ? `${time} second` : `${time} seconds`}</p>
      <div className="gap-2 mt-2 flex">
        <button
          className="border px-2 py-0.5 cursor-pointer active:scale-95"
          onClick={() => setIsRunning((prev) => !prev)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="border px-2 py-0.5 cursor-pointer active:scale-95"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
