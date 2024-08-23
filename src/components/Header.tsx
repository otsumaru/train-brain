import Image from "next/image";
import UserIcon from "./icon/UserIcon";

const Header = () => {
  return (
    <div className="flex justify-center h-[80px">
      <Image
        src="/brain.png" // 画像パスはpublicフォルダからの相対パスで指定
        alt="Brain Image"
        width={50} // 幅を50pxに設定
        height={50} // 高さを50pxに設定
        className="my-[15px]"
      />
      <h1 className="text-3xl my-auto font-bold">脳のアップデート</h1>
      <button>
        <UserIcon />
      </button>
    </div>
  );
};

export default Header;
