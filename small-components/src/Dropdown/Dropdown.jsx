import React, { useState } from "react";

const Dropdown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="p-10 select-none">
      <div
        onClick={() => setOpenMenu((prev) => !prev)}
        className="flex gap-1 cursor-pointer"
      >
        <h1>Menu</h1>
        <span
          className={`${openMenu ? "rotate-0 mt-1" : "rotate-180"} transition-transform duration-300`}
        >
          ^
        </span>
      </div>
      {openMenu && (
        <div>
          <p>About</p>
          <p>Career</p>
          <p>Skills</p>
        </div>
      )}
      <br />
      <div className="w-fit group">
        <div className="flex gap-1 cursor-pointer">
          <h1>Menu</h1>
          <span className="mt-1 group-hover:rotate-180 transition-transform duration-300">
            ^
          </span>
        </div>

        <div className="group-hover:block hidden">
          <p>About</p>
          <p>Career</p>
          <p>Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
