import React, { useEffect, useState } from "react";

const Debounce = () => {
  const list = [
    "React",
    "React Router",
    "Redux Toolkit",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Data Structures",
    "Algorithms",
    "System Design",
    "Machine Learning",
    "Artificial Intelligence",
    "Python",
    "Java",
    "C++",
    "REST API",
    "GraphQL",
  ];
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div className="p-10">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-0.5"
      />
      <p>Searching for: {debouncedText}</p>
      {list
        .filter((l) => l.toLowerCase().includes(debouncedText.toLowerCase()))
        .map((c, i) => (
          <p key={i}>{c}</p>
        ))}
    </div>
  );
};

export default Debounce;
