"use client";
import React, { useState } from "react";
import KeyPad from "./components/KeyPad";

const Game = () => {
  const [input, setInput] = useState("");

  const handleKeyPress = (key: string) => {
    setInput((prev) => prev + key);
  };

  return (
    <div className="pt-20">
      <div className="h-16 mt-2"></div>
      <div className="h-28 mt-2"></div>
      <div className="h-16 mt-2"></div>
      <KeyPad onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Game;
