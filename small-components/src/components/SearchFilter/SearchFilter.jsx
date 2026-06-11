import { useState } from "react";

export const SearchFilter = () => {
  const list = [
    "React",
    "Tailwind Css",
    "Javascript",
    "Html",
    "Css",
    "Typescript",
  ];
  const [text, setText] = useState("");
  return (
    <div className="p-10 select-none">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-0.5 mb-2"
      />
      {list
        .filter((l) => l.toLowerCase().includes(text.toLowerCase()))
        .map((c, i) => (
          <p key={i}>{c}</p>
        ))}
    </div>
  );
};
