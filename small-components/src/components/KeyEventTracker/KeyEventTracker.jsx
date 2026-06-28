import React, { useEffect, useState } from "react";

const KeyEventTracker = () => {
  const [key, setKey] = useState("Press any key");
  useEffect(() => {
    const updateKey = (e) => {
      setKey(e.key);
    };
    window.addEventListener("keydown", updateKey);

    return () => window.removeEventListener("keydown", updateKey);
  }, []);

  return <div className="p-10">{key}</div>;
};

export default KeyEventTracker;
