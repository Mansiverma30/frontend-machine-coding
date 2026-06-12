import { useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const fillOtp = (e, i) => {
    const newOtp = [...otp];
    newOtp[i] = e.target.value;
    setOtp(newOtp);
  };
  return (
    <div className="p-10 flex flex-row gap-2 text-center">
      {Array.from({ length: 4 }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          className="border size-10 text-center"
          value={otp[i]}
          onChange={(e) => fillOtp(e, i)}
        />
      ))}
      <p>{otp}</p>
    </div>
  );
};

export default Otp;
