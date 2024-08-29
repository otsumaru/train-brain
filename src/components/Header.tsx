import Image from "next/image";
import UserIcon from "./icon/UserIcon";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header px-3 flex justify-between items-center h-20 fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-10">
      <Image
        src="/img/brain.png" // 画像パスはpublicフォルダからの相対パスで指定
        alt="Brain Image"
        width={50} // 幅を50pxに設定
        height={50} // 高さを50pxに設定
        className=""
      />
      <h1 className="pt-2 text-3xl font-bold">秒速計算ノック</h1>
      <Link
        href="/register"
        className="flex justify-center items-center w-12 h-12"
      >
        <UserIcon />
      </Link>
    </div>
  );
};

export default Header;
