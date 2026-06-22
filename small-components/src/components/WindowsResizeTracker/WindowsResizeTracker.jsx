import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const WindowsResizeTracker = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="p-10">
      {size.width} {size.height}
    </div>
  );
};

export default WindowsResizeTracker;
