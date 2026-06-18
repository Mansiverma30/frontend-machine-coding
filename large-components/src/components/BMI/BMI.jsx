import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const heightInMeters = Number(height) / 100;
  const bmiCalc = () => {
    if (!height || !weight) {
      return;
    }
    let newBmi = Number(weight) / Math.pow(heightInMeters, 2);
    setBmi(Number(newBmi.toFixed(2)));
  };
  return (
    <div className="p-10 flex flex-col gap-4">
      <div className="flex gap-4">
        <label>Weight (in kgs please)</label>
        <input
          type="number"
          value={weight}
          className="border px-2 py-0.5"
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <label>Height (in cms please)</label>
        <input
          type="number"
          value={height}
          className="border px-2 py-0.5"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button
        className="border rounded active:scale-95 cursor-pointer w-[30%]"
        onClick={bmiCalc}
      >
        Calculate BMI
      </button>
      {bmi !== null && (
        <>
          <p>BMI is: {bmi}</p>
          <p>
            {bmi < 18.5
              ? "Underweight Eat more bruhhh"
              : bmi < 25
                ? "You the normal buddy"
                : bmi < 30
                  ? "Overweight no comments due to internet"
                  : "hmm obese"}
          </p>
        </>
      )}
    </div>
  );
};

export default BMI;
