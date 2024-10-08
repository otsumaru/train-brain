import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

interface QuestionProps {
  questions: { id: number; question: string; answer: string };
  className: string;
  isCurrent: boolean;
  input: string | null;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleNextQuestion: () => void;
  setCurrentQuestionIndex: (value: React.SetStateAction<number>) => void;
}

const Question: React.FC<QuestionProps> = ({
  questions,
  className,
  isCurrent,
  input,
  setInput,
  handleNextQuestion,
  setCurrentQuestionIndex,
}) => {
  const question = questions.question;
  const answer = questions.answer;
  const id = questions.id;
  const [playCorrectSound] = useSound("/sounds/correct.mp3");
  const [playWrongSound] = useSound("/sounds/wrong.mp3");

  const judge = (enteredAnswer: string) => {
    if (answer === enteredAnswer) {
      console.log("正解");
      handleNextQuestion();
      setCurrentQuestionIndex((prev) => prev + 1);
      playCorrectSound();
    } else if (answer.length === 2 && enteredAnswer.length === 1) {
      return;
    } else {
      console.log("不正解");
      setInput("");
      playWrongSound();
      return;
    }
  };

  useEffect(() => {
    console.log("useEffect発火");

    if (input) {
      const enteredAnswer = input;
      judge(enteredAnswer);
    } else {
      return;
    }
  }, [input]);

  return (
    <>
      <p
        className={`font-bold text-gray-700 ${
          isCurrent ? `text-lg` : `ml-12 text-sm`
        }`}
      >
        第{id}問
      </p>
      <motion.div
        initial={{ y: isCurrent ? -80 : -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${className} ${
          isCurrent
            ? `h-28 rounded-xl bg-white font-bold text-6xl shadow-lg`
            : `h-14 w-60 mx-auto rounded-lg bg-gray-200 text-lg`
        }`}
      >
        {question} = {input}
      </motion.div>
    </>
  );
};

export default Question;
