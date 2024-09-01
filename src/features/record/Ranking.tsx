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
              ? "bg-yellow-300 text-yellow-900 border-yellow-500"
              : index === 1
              ? "bg-gray-300 text-gray-900 border-gray-500"
              : index === 2
              ? "bg-orange-400 text-orange-900 border-orange-500"
              : "bg-white text-gray-700 border-gray-300";

          return (
            <div
              key={record.id}
              className={`flex items-center justify-between my-3 p-4 shadow rounded-lg border-2 ${
                isUserRecord ? "bg-blue-100 border-blue-500" : rankClass
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`text-2xl font-extrabold mr-4 ${
                    isUserRecord ? "text-blue-700" : "text-green-700"
                  }`}
                >
                  {index + 1}位
                </div>
                <div className="font-semibold text-lg">{record.user_name}</div>
              </div>
              <div className="text-xl font-mono">
                Time: {formatTime(record.time)}
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
