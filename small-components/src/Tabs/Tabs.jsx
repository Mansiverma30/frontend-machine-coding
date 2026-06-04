import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabContent = [
    {
      id: 1,
      title: "About",
      content: "I'm Virat's fan",
    },
    {
      id: 2,
      title: "Skills",
      content: "I've many",
    },
    {
      id: 3,
      title: "Profession",
      content: "Unemployed!!",
    },
  ];
  return (
    <div className="p-10 flex gap-4">
      {tabContent.map((c) => (
        <div key={c.id}>
          <button
            className={`border px-4 py-3 rounded-full cursor-pointer ${activeTab === c.id ? "bg-amber-300" : "bg-blue-900  text-white"}`}
            onClick={() => setActiveTab(c.id)}
          >
            {c.title}
          </button>
          {activeTab === c.id && <p>{c.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
