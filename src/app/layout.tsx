"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // 初期レンダリング時のみ実行
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const isAppBrowser = params.get("openExternalBrowser");

      // アプリ内ブラウザを判定するための正規表現
      const appBrowserRegex = /FBAV|FBAN|Line/i;
      const isAppBrowserDetected = appBrowserRegex.test(
        window.navigator.userAgent
      );

      if (isAppBrowserDetected && !isAppBrowser) {
        // アプリ内ブラウザと判断された場合、アラートを表示して外部ブラウザにリダイレクト
        alert("デフォルトのブラウザで開きます。");
        window.location.href =
          "https://train-brain.vercel.app/?openExternalBrowser=1";
      } else if (isAppBrowser) {
        // 外部ブラウザからのリダイレクトの場合、パラメータを削除
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <title>秒速計算ノック</title>
        <meta
          name="description"
          content="瞬時に計算力を試すクイズアプリ。計算スピードを競って楽しもう！"
        />
        <meta
          name="keywords"
          content="計算クイズ, 速さ, 脳トレ, 数学ゲーム, 瞬時の計算"
        />
        <meta
          name="google-site-verification"
          content="SqGfzy3Mmgi75iPmU7FD1X96b1b1W9tAAhhQS_RYMKQ"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="秒速計算ノック | 計算スピードを競え！"
        />
        <meta property="og:url" content="https://train-brain.vercel.app/" />
        <meta
          property="og:image"
          content="https://train-brain.vercel.app/img/meta.png"
        />
        <meta property="og:image:width" content="287" />
        <meta property="og:image:height" content="356" />
        <meta property="og:image:alt" content="秒速計算ノックのイメージ" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@egooo_zeroplus" />
        <meta
          name="twitter:title"
          content="秒速計算ノック | 計算スピードを競え！"
        />
        <meta
          name="twitter:description"
          content="瞬時に計算力を試すクイズアプリ。計算スピードを競って楽しもう！"
        />
        <meta
          name="twitter:image"
          content="https://train-brain.vercel.app/img/twitter.png"
        />
        <meta name="twitter:image:width" content="287" />
        <meta name="twitter:image:height" content="356" />
        <meta name="twitter:image:alt" content="秒速計算ノックのイメージ" />
      </Head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
