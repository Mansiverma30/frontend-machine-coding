import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="flex flex-col  gap-10 items-center justify-center h-screen">
      <button
        className={`border rounded cursor-pointer p-2 ${open ? "hidden" : "block"}`}
        onClick={toggleModal}
      >
        Profile
      </button>
      {open && (
        <div className="border flex flex-col p-1 z-10">
          <div className="text-end px-2">
            <button className="cursor-pointer" onClick={toggleModal}>
              x
            </button>
          </div>
          <h1 className="text-center text-lg">A developer</h1>
          <p className="">Trying to do something.....</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
