import React from "react";
import { signIn, signOut } from "../../../../auth";

// SignIn ボタンのコンポーネント
export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithoutRef<"button">) {
  console.log("signInが実行されました");

  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button
        {...props}
        className="mt-2 bg-orange-500 text-white p-2 rounded hover:bg-orange-600 text-xs"
      >
        サインイン
      </button>
    </form>
  );
}

// SignOut ボタンのコンポーネント
export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithoutRef<"button">) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
      className=""
    >
      <button
        {...props}
        className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100"
      >
        ログアウト
      </button>
    </form>
  );
}
