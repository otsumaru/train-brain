import Header from " @/components/Header";
import Ranking from " @/features/record/Ranking";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランキング | 秒速計算ノック",
  description: "計算スピードのランキングを確認し、世界中のプレイヤーと競おう！",
  keywords: ["ランキング", "計算クイズ", "速さ", "脳トレ", "タイム"],
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
      "計算スピードのランキングを確認し、世界中のプレイヤーと競おう！",
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
      <main className="">
        <Header></Header>
        <Ranking></Ranking>
      </main>
    </SessionProvider>
  );
}
