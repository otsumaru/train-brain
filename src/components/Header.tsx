import Image from "next/image";
import UserButton from " @/features/register/components/UserButton";

const Header = () => {
  return (
    <div className="header px-3 flex justify-between items-center h-20 fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-10">
      <Image
        src="/img/brain.png" // 画像パスはpublicフォルダからの相対パスで指定
        alt="Brain Image"
        width={44}
        height={44}
        className=""
      />
      <h1 className="pt-2 text-3xl font-bold">秒速計算ノック</h1>
      <UserButton />
    </div>
  );
};

export default Header;
