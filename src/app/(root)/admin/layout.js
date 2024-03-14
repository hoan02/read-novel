import { Inter } from "next/font/google";

import TopBar from "@/components/layout/TopBar";
import { Protect } from "@clerk/nextjs";
import "@/styles/writer.css";
import ForbiddenAdmin from "@/components/admin/ForbiddenAdmin";
import CustomThemeProvider from "@/components/CustomThemeProvider";
import SideBarAdmin from "@/components/layout/SideBarAdmin";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function WriterLayout({ children }) {
  return (
    <Protect
      // permission="org:writer:create"
      role="org:admin"
      fallback={<ForbiddenAdmin />}
    >
      <div className="min-h-screen min-w-screen fixed top-0 left-0 scrollbar-thumb-zinc-700 scrollbar-track-zinc-600 text-white z-50">
        <div className="w-60 h-full bg-zinc-700 fixed">
          <SideBarAdmin />
        </div>
        <div className="rightbar h-full fixed top-0 left-60 bg-zinc-800">
          <TopBar />
          <div className="content ml-4 scrollbar-thin h-32 overflow-y-scroll">
            <CustomThemeProvider>
              <div className="mr-4">{children}</div>
            </CustomThemeProvider>
          </div>
        </div>
      </div>
    </Protect>
  );
}
