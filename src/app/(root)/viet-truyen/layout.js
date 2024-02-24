import Error from "@/components/Error";
import { Protect } from "@clerk/nextjs";

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
        <Error message="Chỉ có 'nhà sáng tạo' mới có quyền truy cập vào nội dung này" />
      }
    >
      {children}
    </Protect>
  );
}
