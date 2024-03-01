import Link from "next/link";
import { TbHomeShare } from "react-icons/tb";
import { UserButton } from "@clerk/nextjs";

const TopBar = () => {
  return (
    <div className="h-16 bg-zinc-700 m-4 p-4 rounded-lg flex justify-between items-center">
      <Link
        href="/"
        className="flex gap-1 cursor-pointer hover:text-gray-300 items-center"
      >
        <TbHomeShare size={20} />
        <div className="text-sm">Trở về trang chủ</div>
      </Link>
      <UserButton className="" showName="true" />
    </div>
  );
};

export default TopBar;
