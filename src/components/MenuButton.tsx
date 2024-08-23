import React from "react";

type StartProps = {
  text: string;
  handleClickFunction: () => void;
};
const MenuButton = (props: StartProps) => {
  const { text, handleClickFunction } = props;
  return (
    <button
      // onClick={handleNextClick}
      className="rounded-lg w-[230px] h-[50px] shadow-md text-lg "
    >
      {text}
    </button>
  );
};

export default MenuButton;
