import React, { useState } from "react";

const Accordion = () => {
  // Tracks whether the accordion content is visible or hidden
  const [open, setOpen] = useState(false);

  // Toggles the accordion state
  const toggleAccordian = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="m-10 select-none">
      {/* Accordion Header */}
      <div className="flex gap-1 cursor-pointer" onClick={toggleAccordian}>
        <h1>Some heading</h1>

        {/* Visual indicator for expanded/collapsed state */}
        <span className="text-center">{open ? "^" : "v"}</span>
      </div>

      {/* Render content only when accordion is open */}
      {open && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          dolores quod minus numquam eum. Fugiat et mollitia doloribus id
        </p>
      )}
    </div>
  );
};

export default Accordion;
