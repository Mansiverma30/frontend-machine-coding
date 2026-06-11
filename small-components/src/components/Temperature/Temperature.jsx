import React, { useState } from "react";

const Temperature = () => {
  const [temp, setTemp] = useState("");
  const [convert, setConvert] = useState(false);
  return (
    <div className="p-10">
      <input
        className="border px-2 py-0.5"
        type="number"
        value={temp}
        onChange={(e) => {
          setTemp(e.target.value);
          setConvert(false);
        }}
      />
      <button
        className="border px-2 py-0.5 ml-2 cursor-pointer"
        onClick={() => setConvert(true)}
      >
        Convert
      </button>
      {convert && <p>{((9 * temp) / 5 + 32).toFixed(1)}° F</p>}
    </div>
  );
};

export default Temperature;
