import Link from "next/link";
import { auth } from "../../../../auth";
import { SignIn, SignOut } from "./AuthButton";

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;

  return (
    <div className="flex gap-2 items-center">
      <div className="relative pt-2">
        <Link
          className="relative w-10 h-10  flex justify-center items-center rounded-full border border-gray-300 overflow-hidden"
          href="/register"
        >
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name ?? ""}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
              {session.user.email?.toUpperCase()[0] ?? "U"}
            </div>
          )}
        </Link>
        {/* TODO */}
        <div className="invisible absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <p className="text-sm font-medium leading-none">
              {session.user.name}
            </p>
            <p className="text-xs text-gray-500">{session.user.email}</p>
          </div>
          <div className="p-4">
            <SignOut />
          </div>
        </div>
      </div>
    </div>
  );
}
