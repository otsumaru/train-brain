"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuButton from "./MenuButton";

const Top = () => {
  const handleClickNext = () => {};
  const start = {
    text: "はじめる",
    handleClickFunction: handleClickNext,
    bgColor: "bg-blue-500 hover:bg-blue-600",
  };

  const record = {
    text: "きろく",
    handleClickFunction: () => {},
    bgColor: "bg-green-500 hover:bg-green-600",
  };

  const setting = {
    text: "あそびかた",
    handleClickFunction: () => {},
    bgColor: "bg-indigo-500 hover:bg-indigo-600",
  };

  return (
    <div className="pt-20">
      <h2 className="text-xl mt-10 text-center font-semibold">
        変わり続けるものは
        <br /> 存在し続ける。
      </h2>
      <Image
        src="/img/scientist.png"
        alt="scientist Image"
        width={170}
        height={210}
        className="mx-auto mt-4"
      />
      <div className="mt-8 text-center flex flex-col items-center space-y-3 text-white">
        <Link id="game" href="/game">
          <MenuButton {...start} />
        </Link>
        <Link id="record" href="/record">
          <MenuButton {...record} />
        </Link>
        <Link id="setting" href="/setting">
          <MenuButton {...setting} />
        </Link>
      </div>
    </div>
  );
};

export default Top;
