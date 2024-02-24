import Error from "@/components/Error";
import SideBar from "@/components/writer/SideBar";
import TopBar from "@/components/writer/TopBar";
import { Protect } from "@clerk/nextjs";
import "@/styles/writer.css";

export const metadata = {
  title: "Writer dashboard",
  description: "Writer dashboard",
};

export default function WriterLayout({ children }) {
  return (
    <Protect
      permission="org:writer:create"
      // role="org:writer"
      fallback={
        <Error message="Chỉ có 'nhà sáng tạo hoặc admin' mới có quyền truy cập vào nội dung này" />
      }
    >
      <html lang="vi">
        <div className="flex h-screen bg-zinc-800 text-white">
          <div className="w-72 h-full bg-zinc-700">
            <SideBar />
          </div>
          <div className="w-full h-full">
            <TopBar />
            <div className="overflow-y-auto h-full">{children}</div>
          </div>
        </div>
      </html>
    </Protect>
  );
}
