import React from "react";

type StartProps = {
  text: string;
  handleClickFunction: () => void;
};
const MenuButton = (props: StartProps) => {
  const { text, handleClickFunction } = props;
  return (
    <button
      onClick={handleClickFunction}
      className="rounded-lg w-56 h-12 shadow-gray-400 shadow-md text-lg bg-white hover:bg-black hover:text-white"
    >
      {text}
    </button>
  );
};

export default MenuButton;
