import { Protect } from "@clerk/nextjs";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <Protect
      permission="org:writer:create"
      // role="org:writer"
      fallback={
        <p>Chỉ có nhà viết truyện mới có quyền truy cập vào nội dung này!!!</p>
      }
    >
      {children}
    </Protect>
  );
}
