import { useState } from "react";

const Rainbox = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  // Randomize the color on click
  const handleClick = () => {};
  
  return (
    <div
      style={{ backgroundColor: "teal" }}
      className="p-5 transition-all duration-200"
    >
      <h1 className="text-3xl font-bold">Rainbox</h1>
      <button onClick={handleClick} className="mt-3 button">
        CLICK ME!
      </button>
    </div>
  );
};

export default Rainbox;
