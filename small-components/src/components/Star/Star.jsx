import React, { useState } from "react";

const Star = () => {
  const [fill, setFill] = useState(-1);
  return (
    <div className="p-5 flex gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          onClick={() => setFill(fill === index ? -1 : index)}
          className={`size-10 border rounded-full ${fill >= index ? "bg-amber-300" : "bg-transparent"}`}
        ></div>
      ))}
      <p>{fill + 1}</p>
    </div>
  );
};

export default Star;
