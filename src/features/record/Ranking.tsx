"use client";
import { getRanking } from " @/utils/supabase/supabaseFunction";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  created_at: Date;
  email: string;
  user_name: string;
  time: number;
}

const Ranking = () => {
  const { data: session } = useSession();
  const [records, setRecords] = useState<User[] | null>(null);

  useEffect(() => {
    const getRecord = async () => {
      const records = await getRanking();
      setRecords(records);
      console.log(records);
    };
    getRecord();
  }, []);

  const formatTime = (time: number) => {
    const seconds = Math.floor(time / 100);
    const milliseconds = Math.floor(time % 100);

    return `${seconds}:${
      milliseconds > 10 ? milliseconds : `0${milliseconds}`
    }`;
  };

  return (
    <div className="pt-20 px-4 max-w-2xl mx-auto">
      <h2 className="font-bold text-green-700 text-4xl text-center mb-8">
        ランキング
      </h2>

      {records ? (
        records.map((record, index) => {
          const isUserRecord =
            session?.user?.email === record.email &&
            session?.user?.name === record.user_name;

          const rankClass =
            index === 0
              ? "rounded-md border-yellow-500 gold"
              : index === 1
              ? "rounded-md border-gray-500 silver"
              : index === 2
              ? "rounded-md border-orange-500 blonde"
              : "text-gray-700 border-gray-300";

          return (
            <div
              key={record.id}
              className={`flex items-center justify-between my-2 p-2 shadow rounded-md border-1 ${
                isUserRecord ? "user-record" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-center">
                <div
                  className={`text-xl font-semibold mr-2 px-[9px] rank text-white pt-1 ${rankClass}`}
                  style={{ fontFamily: "Fira code" }}
                >
                  {index + 1}
                </div>
                <div className="font-semibold truncate w-36 ">
                  {record.user_name}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p>Time:</p>
                <p className="text-xl font-mono w-16 text-right">
                  {" "}
                  {formatTime(record.time)}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      )}
      <div className="text-center mt-12">
        <Link
          className="bg-green-500 text-white py-2 px-8 rounded-full shadow hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          href="/"
        >
          戻る
        </Link>
      </div>
    </div>
  );
};

export default Ranking;
