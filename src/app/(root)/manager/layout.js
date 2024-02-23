import { Protect } from "@clerk/nextjs";

export const metadata = {
  title: "Manager dashboard",
  description: "Manager dashboard",
};

export default function ManagerLayout({ children }) {
  return (
    <Protect
      // permission="org:manager"
      role="org:manager"
      fallback={<p>Chỉ có quản lý mới có quyền truy cập vào nội dung này!!!</p>}
    >
      {children}
    </Protect>
  );
}
