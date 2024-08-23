"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuButton from "./MenuButton";

const Body = () => {
  const currentPath = usePathname();

  const handleClickNext = () => {};
  const start = { text: "はじめる", handleClickFunction: handleClickNext };

  const record = { text: "きろく", handleClickFunction: () => {} };

  const setting = { text: "せってい", handleClickFunction: () => {} };

  return (
    <div>
      <h2 className="text-xl mt-10 text-center font-semibold">
        変わり続けるものは
        <br /> 存在し続ける。
      </h2>
      <Image
        src="/scientist.png"
        alt="scientist Image"
        width={170}
        height={210}
        className="mx-auto"
      />
      <div className="mt-10 text-center">
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

export default Body;
