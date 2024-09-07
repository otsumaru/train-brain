import Header from " @/components/Header";
import Game from " @/features/game/Game";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "秒速計算ノック",
  description: "瞬時に計算力を試すクイズアプリ。計算スピードを競って楽しもう！",
  keywords: ["計算クイズ", "速さ", "脳トレ", "数学ゲーム", "瞬時の計算"],
  openGraph: {
    title: "秒速計算ノック | 計算スピードを競え！",
    url: "https://train-brain.vercel.app/",
    images: [
      {
        url: "https://train-brain.vercel.app/img/meta.png",
        width: 287,
        height: 356,
        alt: "秒速計算ノックのイメージ",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@egooo_zeroplus",
    title: "秒速計算ノック | 計算スピードを競え！",
    description:
      "瞬時に計算力を試すクイズアプリ。計算スピードを競って楽しもう！",
    images: [
      {
        url: "https://train-brain.vercel.app/img/twitter.png",
        width: 287,
        height: 356,
        alt: "秒速計算ノックのイメージ",
      },
    ],
  },
};

export default async function Record() {
  const session = await auth();
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider basePath="/api/auth" session={session}>
      <Head>
        {/* 画面の拡大縮小を防止 */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="">
        <Header />
        <div className="h-20"></div>
        <Game />
      </main>
    </SessionProvider>
  );
}
