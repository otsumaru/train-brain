import Image from "next/image";
import UserIcon from "./icon/UserIcon";

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
      <button className="w-11 h-11 justify-center items-center">
        <UserIcon />
      </button>
    </div>
  );
};

export default Header;
