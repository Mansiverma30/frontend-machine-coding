import { useState } from "react";

const Copy = () => {
  const [copy, setCopy] = useState(false);
  const copied = () => {
    console.log(document.getElementById("text").innerText);
    navigator.clipboard.writeText(document.getElementById("text").innerText);
    setCopy(true);
  };
  return (
    <div className="p-10">
      <h1 id="text">Copy it and you'll get something special message</h1>
      <button
        className="cursor-pointer border rounded px-2 py-0.5 transition-all duration-200 mt-2"
        onClick={copied}
      >
        {copy ? "Copied" : "Copy"}
      </button>
      {copy && <p className="mt-4">April fools (it's not even April)</p>}
    </div>
  );
};

export default Copy;
