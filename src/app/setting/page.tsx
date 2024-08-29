"use client";
import Header from " @/components/Header";

export default function Record() {
  return (
    <main className="">
      <Header></Header>
      <div className="flex-1 pt-20 px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          あそびかた
        </h2>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            「秒速計算ノック」は、10題の計算問題をできるだけ速く正確に解くことで、計算スピードを競うゲームです。正確な計算と素早いタイムで高得点を目指しましょう！
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="mb-2">10題の計算問題を解きます。</li>
            <li className="mb-2">正確さとスピードがポイントです。</li>
            <li className="mb-2">タイムを競い、ランキングに挑戦しましょう。</li>
          </ul>

          <div className="text-center mt-6">
            <p className="text-lg text-gray-800 font-semibold mb-2">ヒント:</p>
            <p className="text-gray-600">
              速く解くためには、計算問題に慣れることが大切です。練習を重ねて、高得点を目指しましょう！
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600"
            onClick={() => window.history.back()}
          >
            戻る
          </button>
        </div>
      </div>
    </main>
  );
}
