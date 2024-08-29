"use client";
import { getRanking } from " @/utils/supabase/supabaseFunction";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  created_at: Date;
  email: string;
  user_name: string;
  time: number;
}

const Ranking = () => {
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
    <div className="pt-20 px-4">
      <h2 className="font-semibold text-xl text-center">ランキング</h2>
      {records ? (
        records.map((record, index) => (
          <div key={record.id} className="my-3 p-4 bg-white shadow rounded">
            <p className="font-bold text-lg">
              {index + 1}位 {record.user_name}
            </p>
            <p className="text-sm text-gray-600">
              Time: {formatTime(record.time)}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Ranking;
