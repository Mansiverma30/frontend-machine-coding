import { useState } from "react";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="p-10 gap-4 flex">
      <label>Password</label>
      <input
        type={showPassword ? "text" : "password"}
        className="border px-2"
      />
      <button
        className="cursor-pointer"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Password;
