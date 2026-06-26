import React, { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const strength = ["Low", "Medium", "High"];

  return (
    <div className="p-10 flex flex-col">
      <input
        type="password"
        className="border px-2 py-1 w-1/5"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && (
        <p>
          Password Strength:{" "}
          {password.length < 6
            ? strength[0]
            : password.length <= 9
              ? strength[1]
              : strength[2]}
        </p>
      )}
    </div>
  );
};

export default PasswordStrength;
