import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-10">
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </div>
  );
};

export default DigitalClock;
