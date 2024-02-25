import { Inter } from "next/font/google";

import SideBar from "@/components/writer/SideBar";
import TopBar from "@/components/writer/TopBar";
import { Protect } from "@clerk/nextjs";
import "@/styles/writer.css";
import ForbiddenWriter from "@/components/writer/ForbiddenWriter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Writer dashboard",
  description: "Writer dashboard",
};

export default function WriterLayout({ children }) {
  return (
    <Protect
      permission="org:writer:create"
      // role="org:writer"
      fallback={<ForbiddenWriter />}
    >
      <html
        lang="vi"
        className="scrollbar-thumb-zinc-700 scrollbar-track-zinc-600"
      >
        <body className={inter.className}>
          <div className="h-screen w-full bg-zinc-800 text-white">
            <div className="w-60 h-full bg-zinc-700 fixed">
              <SideBar />
            </div>
            <div className="rightbar h-full fixed top-0 left-60">
              <TopBar />
              <div className="content m-4 p-4 bg-zinc-700 rounded scrollbar-thin h-32 overflow-y-scroll">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </Protect>
  );
}
