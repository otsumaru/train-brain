"use client";
import React, { useEffect, useState } from "react";
import KeyPad from "./components/KeyPad";
import Question from "./components/Question";
import questions from "./resource/questions";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa"; // Twitterアイコンのインポート
import { addResult } from " @/utils/supabase/supabaseFunction";

const Game = () => {
  const [input, setInput] = useState("");
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
      // TODO ログイン機能など
      const email = null;
      const name = null;

      if (name) {
        addResult(email, time, name);
      }
    }

    // クリーンアップ関数: 次のレンダリングで`useEffect`が再実行される前にクリア
    return () => clearInterval(interval);
  }, [isActive]);

  // 解き終わりの処理

  const GameFinish = () => {
    const resultTime = formatTime(time);

    const shareOnTwitter = () => {
      const text = encodeURIComponent(
        `秒速計算ノックで${resultTime}秒の記録を達成しました！`
      );
      const url = encodeURIComponent(window.location.href); // 現在のページのURL
      const hashtags = encodeURIComponent("秒速計算ノック,りあゼミ,ZeroPlus");
      const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`;
      window.open(twitterUrl, "_blank");
    };

    return (
      <div className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          コンプリート！
        </h2>
        <p className="text-lg text-gray-700 mb-8">お疲れ様でした！</p>
        <p className="text-2xl text-gray-900 font-semibold mb-6">
          記録: {resultTime}
        </p>

        <div className="flex flex-col space-y-4 w-full px-8">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600"
          >
            もう一度挑戦
          </button>
          <Link
            href="/"
            className="flex items-center justify-center bg-gray-800 text-white py-3 rounded-lg shadow-md hover:bg-gray-900"
          >
            <span className="mr-2">🏠</span> ホームへ戻る
          </Link>
          <Link
            href="/record"
            className="bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600"
          >
            ランキングを見る
          </Link>
          <button
            className="flex items-center justify-center bg-indigo-500 text-white py-3 rounded-lg shadow-md hover:bg-indigo-600"
            onClick={shareOnTwitter}
          >
            <FaTwitter className="mr-2" />
            結果をシェアする
          </button>
        </div>
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
          {currentQuestionIndex + 1 === NumberOfQuestion ? (
            <>
              <div className="h-[76px] mx-auto w-60 flex justify-center items-center text-lg"></div>
              <Question
                questions={currentQuestions[currentQuestionIndex]}
                className={baseClassName}
                isCurrent
                input={input}
                handleNextQuestion={handleNextQuestion}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
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
                setCurrentQuestionIndex={setCurrentQuestionIndex}
              />
              <Question
                questions={currentQuestions[currentQuestionIndex]}
                className={baseClassName}
                isCurrent={true}
                input={input}
                handleNextQuestion={handleNextQuestion}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
              />
            </>
          )}
          <KeyPad handleKeyPress={handleKeyPress} />
        </>
      )}
    </div>
  );
};

export default Game;
