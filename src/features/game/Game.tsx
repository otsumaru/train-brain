"use client";
import React, { useState } from "react";
import KeyPad from "./components/KeyPad";

const Game = () => {
  const [input, setInput] = useState("");

  const handleKeyPress = (key: string) => {
    setInput((prev) => prev + key);
  };

  return (
    <div className="pt-20 px-4">
      <p className="mt-2 text-center text-3xl">2:03</p>
      <p className=" text-xl font-bold text-gray-700">第２問</p>
      <div className="h-14 mx-auto w-60 rounded-lg flex justify-center items-center bg-gray-200 text-lg">
        <span>3×4=</span>
        <span></span>
      </div>
      <p className="text-xl font-bold text-gray-700">第１問</p>
      <div className="h-28 rounded-xl flex justify-center items-center bg-white font-bold text-6xl shadow-lg">
        <span>3+5=</span>
        <span>8</span>
      </div>
      <KeyPad onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Game;
