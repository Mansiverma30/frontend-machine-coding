import React, { useEffect, useState } from "react";

const DebounceRev = () => {
  const list = ["abc", "bcd", "cde", "def"];
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="p-10">
      <input
        type="text"
        className="border px-2 py-0.5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {list.filter((l) =>
        l
          .includes(debouncedText.toLowerCase())
          .map((c, i) => <p key={i}>{c}</p>),
      )}
    </div>
  );
};

export default DebounceRev;
