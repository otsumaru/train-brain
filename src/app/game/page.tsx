import Header from " @/components/Header";
import Game from " @/features/game/Game";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";

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
        <Game></Game>
      </main>
    </SessionProvider>
  );
}
