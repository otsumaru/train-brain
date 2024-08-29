"use client";
import React, { useEffect, useState } from "react";
import KeyPad from "./components/KeyPad";
import Question from "./components/Question";
import questions from "./resource/questions";

const Game = () => {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // 最大問題数
  const NumberOfQuestion = 10;

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
    const shuffledQuestions = [...questions]
      .sort(() => 0.5 - Math.random())
      .map((question, index) => ({
        ...question,
        id: index + 1, // 新しいIDを割り当てる
      }));
    setCurrentQuestions(shuffledQuestions.slice(0, NumberOfQuestion));
    console.log(currentQuestions);

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
    let interval: NodeJS.Timeout | undefined;

    if (isActive) {
      interval = setInterval(() => {
        count += 1;
        setTime(count);
      }, 10); // 10ミリ秒ごとに更新 (0.01秒)
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
      // TODO: 時間を記録する
    }

    // クリーンアップ関数: 次のレンダリングで`useEffect`が再実行される前にクリア
    return () => clearInterval(interval);
  }, [isActive]);

  // 解き終わりの処理

  const GameFinish = () => {
    return (
      <div className="h-60">
        <p>コンプリート！</p>
        <p>{formatTime(time)}</p>
      </div>
    );
  };

  // 時間を10:00の形にする
  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 100);
    const milliseconds = Math.floor(time % 100);

    return `${seconds}:${
      milliseconds > 10 ? milliseconds : `0${milliseconds}`
    }`;
  };

  // 問題を切り替える処理
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 === NumberOfQuestion) {
      setIsActive(false);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setInput("");
      console.log("次へ進む");
    }
  };

  const baseClassName = "question flex justify-center items-center";

  return (
    <div className="relative pt-20 px-4">
      {time > 0 && isActive === false ? (
        <GameFinish></GameFinish>
      ) : (
        <>
          {countdown > 0 && (
            <div className="absolute rounded-xl z-10 mx-auto w-11/12 h-72 flex justify-center items-center text-8xl font-semibold bg-white">
              <p>{countdown}</p>
            </div>
          )}
          <div className="mt-2 text-center text-3xl">
            <span style={{ fontFamily: "Fira code" }}>{formatTime(time)}</span>
          </div>
          <p>{score}</p>
          {currentQuestionIndex + 1 === NumberOfQuestion ? (
            <>
              <div className="h-[76px] mx-auto w-60 flex justify-center items-center text-lg"></div>
              <Question
                questions={currentQuestions[currentQuestionIndex]}
                className={baseClassName}
                isCurrent
                input={input}
                handleNextQuestion={handleNextQuestion}
                setScore={setScore}
              />
            </>
          ) : (
            <>
              <Question
                questions={
                  currentQuestions[
                    (currentQuestionIndex + 1) % currentQuestions.length
                  ]
                }
                className={baseClassName}
                isCurrent={false}
                input={null}
                handleNextQuestion={handleNextQuestion}
                setScore={setScore}
              />
              <Question
                questions={currentQuestions[currentQuestionIndex]}
                className={baseClassName}
                isCurrent={true}
                input={input}
                handleNextQuestion={handleNextQuestion}
                setScore={setScore}
              />
            </>
          )}

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
        </>
      )}
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
