import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const WindowsResizeTracker = () => {
  const [size, setSize] = useState(10);
  useEffect(() => {
    window.addEventListener(
      "resize",
      setSize((s) => s + 1),
    );
  }, []);

  return <div className="p-10">{size}</div>;
};

export default WindowsResizeTracker;
