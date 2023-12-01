import { useState } from "react";

const BMICalculator = () => {
  // Create useState right here

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className="p-5 bg-emerald-400">
      <form className="flex gap-3">
        <input
          type="number"
          placeholder="height"
          className="p-1 rounded-md"
        />
        <input
          type="number"
          placeholder="weight"
          className="p-1 rounded-md"
        />
        <button className="button" type="submit" onClick={handleClick}>
          Calculate
        </button>
      </form>
      {/* <h2 className="mt-5 text-lg">YOUR BMI: </h2> */}
    </div>
  );
};

export default BMICalculator;
