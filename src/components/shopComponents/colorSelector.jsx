import React from "react";
import { useState } from "react";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex gap-4">
      <div
        className={
          selectedColor === "#816DFA"
            ? "w-10 h-10 border-1 border-black rounded-[50%] m-1 cursor-pointer"
            : "w-10 h-10 border-1 border-white rounded-[50%] m-1 cursor-pointer"
        }
        style={{ backgroundColor: "#816DFA" }}
        onClick={() => handleColorClick("#816DFA")}
      ></div>
      <div
        className={
          selectedColor === "black"
            ? "w-10 h-10 border-1 border-black rounded-[50%] m-1 cursor-pointer"
            : "w-10 h-10 border-1 border-white rounded-[50%] m-1 cursor-pointer"
        }
        style={{ backgroundColor: "black" }}
        onClick={() => handleColorClick("black")}
      ></div>
      <div
        className={
          selectedColor === "#CDBA7B"
            ? "w-10 h-10 border-1 border-black rounded-[50%] m-1 cursor-pointer"
            : "w-10 h-10 border-1 border-white rounded-[50%] m-1 cursor-pointer"
        }
        style={{ backgroundColor: "#CDBA7B" }}
        onClick={() => handleColorClick("#CDBA7B")}
      ></div>
    </div>
  );
};

export default ColorSelector;
