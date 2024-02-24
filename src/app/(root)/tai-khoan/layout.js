"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuAccount } from "@/constants";

export default function AccountLayout({ children }) {
  const currentPath = usePathname();

  return (
    <div className="flex bg-white shadow-md p-4 gap-4 rounded-xl">
      <div className="w-1/5 border-r-2 ">
        <div>
          {menuAccount?.map((item) => {
            return (
              <div
                className={`flex gap-4 p-4 ${
                  currentPath === item.slug ? "bg-green-500 text-white" : ""
                }`}
                key={item.slug}
              >
                {item.icon}
                <Link href={item.slug}>{item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  );
}
