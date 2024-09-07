import React, { useState } from "react";
import BackSpaceIcon from "../../../components/icon/BackSpaceIcon";

type KeyPadProps = {
  handleKeyPress: (value: string) => void;
};

const KeyPad: React.FC<KeyPadProps> = ({ handleKeyPress }) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="grid grid-cols-3 gap-2 mt-8">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => handleKeyPress(key)}
          className="w-[108px] h-14 text-2xl font-bold bg-white border rounded-lg shadow-md active:bg-black active:text-white"
        >
          {key}
        </button>
      ))}
      <div className="col-span-1"></div>
      <button
        key={"0"}
        onClick={() => handleKeyPress("0")}
        className="w-[108px] h-14 text-2xl font-bold bg-white border rounded-lg shadow-md active:bg-black active:text-white"
      >
        0
      </button>
      <button
        key={"backspace"}
        onClick={() => handleKeyPress("backspace")}
        aria-label="backspace"
        className="w-[108px] h-14 text-2xl font-bold bg-white border rounded-lg shadow-md active:bg-black active:text-white"
      >
        <BackSpaceIcon></BackSpaceIcon>
      </button>
    </div>
  );
};

export default KeyPad;
