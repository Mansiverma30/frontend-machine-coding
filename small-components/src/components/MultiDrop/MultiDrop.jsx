import React, { useState } from "react";

const MultiDrop = () => {
  let list = ["React", "JavaScript", "Tailwind (Goated)", "HTML", "CSS"];
  const [selected, setSelected] = useState([]);
  const click = (i) => {
    let newSelected = [...selected];
    if (selected.includes(list[i])) {
      newSelected[i] = "";
      setSelected(newSelected);
    } else {
      newSelected[i] = list[i];
      setSelected(newSelected);
    }
  };
  return (
    <div className="p-10 select-none">
      {list.map((l, i) => (
        <div key={i}>
          <input
            type="checkbox"
            name={l}
            id={i}
            className="mr-3"
            onChange={() => click(i)}
          />
          <label htmlFor={i}>{l}</label>
        </div>
      ))}
      {selected && <p className="mt-5">{`${selected} `}</p>}
    </div>
  );
};

export default MultiDrop;
