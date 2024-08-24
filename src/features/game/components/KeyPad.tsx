import React, { useState } from "react";

type KeyPadProps = {
  onKeyPress: (value: string) => void;
};

const KeyPad: React.FC<KeyPadProps> = ({ onKeyPress }) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleKeyPress = (key: string) => {
    onKeyPress(key);
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => handleKeyPress(key)}
          className="w-[108px] h-14 text-2xl font-bold bg-white border rounded-lg shadow-md active:bg-black active:text-white"
        >
          {key}
        </button>
      ))}
      <div className="col-span-3 flex justify-center">
        <button
          key={"0"}
          onClick={() => handleKeyPress("0")}
          className="w-[108px] h-14 text-2xl font-bold bg-white border rounded-lg shadow-md active:bg-black active:text-white"
        >
          0
        </button>
      </div>
    </div>
  );
};

export default KeyPad;
