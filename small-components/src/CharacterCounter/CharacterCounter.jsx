import React, { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1>Tell me something...</h1>
      <input
        type="text"
        className="border w-1/2 px-2 py-1"
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text.length} characters</p>
    </div>
  );
};

export default CharacterCounter;
