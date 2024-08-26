import Header from " @/components/Header";

export default function Record() {
  return (
    <main className="">
      <Header></Header>
      <div className="pt-20 px-8">
        <h2 className="text-2xl mt-4 text-center font-bold text-black">
          あそびかた
        </h2>
        <p className="mt-4">
          「秒速計算バトル」は、10題の計算問題をできるだけ速く正確に解くことで、計算スピードを競うゲームです。正確な計算と素早いタイムで高得点を目指しましょう！
        </p>
      </div>
    </main>
  );
}
