import React, { useEffect, useState } from "react";

const CountdownRev = () => {
  const [time, setTime] = useState(10);
  const [isRunning, setiIsRunning] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        setTime((t) => (t > 0 ? t - 1 : (setiIsRunning(false), 0)));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="p-10">
      <p>{time}</p>
      <button
        className="cursor-pointer"
        onClick={() => setiIsRunning((prev) => !prev)}
      >
        start
      </button>
    </div>
  );
};

export default CountdownRev;
