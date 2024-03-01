import TopBar from "@/components/TopBar";
import { Protect } from "@clerk/nextjs";
import "@/styles/writer.css";
import ForbiddenWriter from "@/components/writer/ForbiddenWriter";
import SideBarWriter from "@/components/writer/SideBarWriter";

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
      <div className="min-h-screen min-w-screen fixed top-0 left-0 scrollbar-thumb-zinc-700 scrollbar-track-zinc-600 text-white z-50">
        <div className="w-60 h-full bg-zinc-700 fixed">
          <SideBarWriter />
        </div>
        <div className="rightbar h-full fixed top-0 left-60 bg-zinc-800">
          <TopBar />
          <div className="content m-4 p-4 bg-zinc-700 rounded scrollbar-thin h-32 overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </Protect>
  );
}
