import React, { useState } from "react";

const Toast = () => {
  const [show, setShow] = useState(false);
  const hide = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  return (
    <div className="p-10 flex flex-col items-start gap-10">
      <button className="border p-2 rounded cursor-pointer" onClick={hide}>
        Show Message
      </button>

      {show && (
        <p className="bg-red-400 w-fit p-2 rounded-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis
        </p>
      )}
    </div>
  );
};

export default Toast;
