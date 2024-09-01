import Header from " @/components/Header";
import Game from " @/features/game/Game";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import Head from "next/head";

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
      <main className="overflow-hidden h-screen w-screen">
        <Header />
        <Game />
      </main>
    </SessionProvider>
  );
}
