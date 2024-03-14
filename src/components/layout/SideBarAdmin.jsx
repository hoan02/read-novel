"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdPeople } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";

const SideBarAdmin = () => {
  const currentPath = usePathname();

  const isActive = (path) => {
    return currentPath === path ? "bg-amber-600" : "";
  };

  return (
    <div className="p-4 text-gray-200">
      <Link href="/admin">
        <div className="flex gap-2 cursor-pointer">
          <Image
            alt="logo writer"
            src="/logo-writer.png"
            width={48}
            height={48}
          />
          <h1 className="text-3xl my-auto">Admin</h1>
        </div>
      </Link>
      <div className="mt-6">
        <div className="text-sm font-semibold text-gray-400 my-2">QUẢN LÝ</div>
        <Link
          href="/admin/users"
          className={`rounded flex gap-2 p-2 ${isActive("/admin/users")}`}
        >
          <IoMdPeople size={28} />
          Thành viên
        </Link>
        <Link
          href="/admin/settings"
          className={`rounded flex gap-2 p-2 ${isActive("/admin/settings")}`}
        >
          <IoMdSettings size={28} />
          Cài đặt
        </Link>
        <Link
          href="/admin/system-stats"
          className={`rounded flex gap-2 p-2 ${isActive(
            "/admin/system-stats"
          )}`}
        >
          <IoIosStats size={28} />
          Thống kê hệ thống
        </Link>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold text-gray-400 my-2">
          TRỢ GIÚP & HỖ TRỢ
        </div>
        <Link
          href="/admin/help"
          className={`rounded flex gap-2 p-2 ${isActive("/admin/help")}`}
        >
          <IoIosHelpCircle size={28} />
          Trợ giúp & Hỗ trợ
        </Link>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold text-gray-400 my-2">
          THÔNG TIN
        </div>
        <Link
          href="/admin/info"
          className={`rounded flex gap-2 p-2 ${isActive("/admin/info")}`}
        >
          <AiOutlineInfoCircle size={28} />
          Thông tin hệ thống
        </Link>
      </div>
    </div>
  );
};

export default SideBarAdmin;
