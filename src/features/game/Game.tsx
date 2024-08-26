"use client";
import React, { useEffect, useState } from "react";
import KeyPad from "./components/KeyPad";
import Question from "./components/Question";

const Game = () => {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // 入力の更新
  const handleKeyPress = (key: string) => {
    if (time > 0) {
      if (key === "backspace") {
        setInput("");
      } else {
        setInput((prev) => prev + key);
      }
    }
  };

  // 時間
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(3);

  // クイズ開始前のカウントダウン
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

  // 経過時間
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

  // 時間を10:00の形にする
  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 100);
    const milliseconds = Math.floor((time % 100) / 10);

    return `${seconds}:${milliseconds}`;
  };

  const [questions, setQuestions] = useState([
    { id: 1, question: "3+5", answer: "8" },
    { id: 2, question: "3×4", answer: "12" },
    { id: 3, question: "10-6", answer: "4" },
    { id: 4, question: "8÷2", answer: "4" },
    { id: 5, question: "7+9", answer: "16" },
    { id: 6, question: "5×6", answer: "30" },
    { id: 7, question: "20÷5", answer: "4" },
    { id: 8, question: "15-9", answer: "6" },
    { id: 9, question: "12+7", answer: "19" },
    { id: 10, question: "14÷2", answer: "7" },
    { id: 11, question: "9×3", answer: "27" },
    { id: 12, question: "18÷6", answer: "3" },
    { id: 13, question: "11+8", answer: "19" },
    { id: 14, question: "16-7", answer: "9" },
    { id: 15, question: "2×9", answer: "18" },
    { id: 16, question: "24÷3", answer: "8" },
    { id: 17, question: "6+14", answer: "20" },
    { id: 18, question: "21-13", answer: "8" },
    { id: 19, question: "4×7", answer: "28" },
    { id: 20, question: "30÷5", answer: "6" },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 問題を切り替える処理
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setInput("");
    console.log("次へ進む");
  };

  const baseClassName = "question flex justify-center items-center";

  return (
    <div className="relative pt-20 px-4">
      {countdown > 0 && (
        <div className="absolute rounded-xl z-10 mx-auto w-11/12 h-64 flex justify-center items-center text-8xl font-semibold bg-white">
          <p>{countdown}</p>
        </div>
      )}
      <div className="mt-2 text-center text-3xl">
        <span style={{ fontFamily: "Fira code" }}>{formatTime(time)}</span>
      </div>
      <p>{score}</p>
      <Question
        questions={questions[(currentQuestionIndex + 1) % questions.length]}
        className={baseClassName}
        isCurrent={false}
        input={null}
        handleNextQuestion={handleNextQuestion}
        setScore={setScore}
      />
      <Question
        questions={questions[currentQuestionIndex]}
        className={baseClassName}
        isCurrent
        input={input}
        handleNextQuestion={handleNextQuestion}
        setScore={setScore}
      />
      {/* 次の問題 */}

      {/* <p className=" text-lg] font-bold text-gray-700">第２問</p>
      <div className="h-14 mx-auto w-60 rounded-lg flex justify-center items-center bg-gray-200 text-lg">
        <span>3×4=</span>
        <span></span>
      </div>
      <p className="text-xl font-bold text-black">第１問</p>
      <div className="h-28 rounded-xl flex justify-center items-center bg-white font-bold text-6xl shadow-lg">
        <span id="question">3+5=</span>
        <span id="answer">{input}</span>
      </div> */}
      <KeyPad handleKeyPress={handleKeyPress} />
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
