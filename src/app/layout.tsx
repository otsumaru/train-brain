import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
