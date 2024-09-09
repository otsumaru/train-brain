import { Metadata } from "next";
import Header from "../components/Header";
import Top from "../components/Top";
import Footer from " @/components/Footer";

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

export default async function Home() {
  return (
    <main className="">
      <Header></Header>
      <Top></Top>
      <Footer></Footer>
    </main>
  );
}
