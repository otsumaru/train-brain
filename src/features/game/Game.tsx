"use client";
import React, { useEffect, useState } from "react";
import KeyPad from "./components/KeyPad";

const Game = () => {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleKeyPress = (key: string) => {
    if (time > 0) {
      setInput((prev) => prev + key);
    }
  };

  useEffect(() => {
    let count = 3;
    setCountdown(count);
    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setCountdown(0);
        setIsActive(true);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (isActive) {
        count++;
        setTime(count);
      } else if (!isActive && time !== 0) {
        //TODO 時間を記録する
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, 10); // 10ミリ秒ごとに更新 (0.01秒)
  }, [isActive]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isActive) {
  //       setTime((prevTime) => prevTime + 1);
  //     } else if (!isActive && time !== 0) {
  //       //TODO 時間を記録する
  //       clearInterval(interval);
  //     }
  //     return () => clearInterval(interval);
  //   }, 10); // 10ミリ秒ごとに更新 (0.01秒)
  // }, [isActive, time]);

  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 100);
    const milliseconds = time % 100;

    return `${seconds < 10 ? `0${seconds}` : seconds}:${
      milliseconds < 10 ? `0${milliseconds}` : milliseconds
    }`;
  };

  return (
    <div className="relative pt-20 px-4">
      {countdown > 0 && (
        <div className="absolute rounded-xl z-10 mx-auto w-11/12 h-64 flex justify-center items-center text-8xl font-semibold bg-white">
          <p>{countdown}</p>
        </div>
      )}
      <div className="mt-2 text-center text-3xl">
        <span>{formatTime(time)}</span>
      </div>
      <p className=" text-lg] font-bold text-gray-700">第２問</p>
      <div className="h-14 mx-auto w-60 rounded-lg flex justify-center items-center bg-gray-200 text-lg">
        <span>3×4=</span>
        <span></span>
      </div>
      <p className="text-xl font-bold text-black">第１問</p>
      <div className="h-28 rounded-xl flex justify-center items-center bg-white font-bold text-6xl shadow-lg">
        <span id="question">3+5=</span>
        <span id="answer">{input}</span>
      </div>
      <KeyPad onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Game;

{
  /* <input
  onChange={() => handleKeyPress}
  type="text"
  className="w-20 h-20"
  value={input}
/>; */
}
