import React from "react";
import Header from " @/components/Header";
import { SignOut } from "../../features/register/components/AuthButton";
import { auth } from "../../../auth";
import Link from "next/link";

const Register = async () => {
  const session = await auth();

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            アカウント情報
          </h2>
          {session?.user && (
            <div className="flex flex-col items-center mb-6">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? ""}
                  className="w-20 h-20 rounded-full mb-2"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                  {session.user.email?.toUpperCase()[0] ?? "U"}
                </div>
              )}
              <p className="text-lg font-medium text-gray-700">
                {session.user.name}
              </p>
              <p className="text-sm text-gray-500">{session.user.email}</p>
            </div>
          )}
          <SignOut />
        </div>
        <div className="text-center mt-8">
          <Link
            className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
            href="/"
          >
            戻る
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Register;
