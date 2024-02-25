import Image from "next/image";
import Link from "next/link";
import { PiBooks } from "react-icons/pi";
import { TbBookUpload } from "react-icons/tb";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoBugOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaDev } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="p-4 text-gray-200">
      <Link href="/writer">
        <div className="flex gap-2 cursor-pointer">
          <Image alt="logo writer" src="/logo-writer.png" width={48} height={48} />
          <h1 className="text-3xl my-auto">NovelHub</h1>
        </div>
      </Link>
      <div className="mt-6">
        <div className="text-sm font-semibold text-gray-400 my-2">
          TRUYỆN CỦA TÔI
        </div>
        <Link
          href="/writer"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <PiBooks size={28} />
          Đã đăng
        </Link>
        <Link
          href="/writer/create"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <TbBookUpload size={28} />
          Thêm mới
        </Link>
        <Link
          href="/writer/statistics"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <AiOutlinePieChart size={28} />
          Thống kê
        </Link>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold text-gray-400 my-2">
          BÁO CÁO & HỖ TRỢ
        </div>
        <Link
          href="/writer/issues"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <IoBugOutline size={28} />
          Xử lý báo cáo
        </Link>
        <Link
          href="/writer/tickets"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <BiSupport size={28} />
          Yêu cầu hỗ trợ
        </Link>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold text-gray-400 my-2">THÔNG TIN</div>
        <Link
          href="/writer/issues"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <TbMessageCircleQuestion size={28} />
          Kiến thức cơ bản
        </Link>
        <Link
          href="/writer/issues"
          className="rounded flex gap-2 p-2 hover:bg-amber-600"
        >
          <FaDev size={28} />
          Nhà phát triển
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
