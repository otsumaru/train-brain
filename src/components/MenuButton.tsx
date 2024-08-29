import React from "react";

type StartProps = {
  text: string;
  handleClickFunction: () => void;
  bgColor: string;
};
const MenuButton = (props: StartProps) => {
  const { text, handleClickFunction, bgColor } = props;
  return (
    <button
      onClick={handleClickFunction}
      className={`${bgColor} rounded-lg w-56 h-12 shadow-gray-400 shadow-md text-lg`}
    >
      {text}
    </button>
  );
};

export default MenuButton;
