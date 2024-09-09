import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません | 秒速計算ノック",
  description: "お探しのページは存在しないか、削除された可能性があります。",
  keywords: ["404", "ページが見つかりません", "エラー", "秒速計算ノック"],
  openGraph: {
    title: "404 - ページが見つかりません | 秒速計算ノック",
    url: "https://train-brain.vercel.app/",
    images: [
      {
        url: "https://train-brain.vercel.app/",
        width: 287,
        height: 356,
        alt: "秒速計算ノックのイメージ",
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">
          お探しのページが見つかりません
        </p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          href="/"
        >
          {" "}
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
