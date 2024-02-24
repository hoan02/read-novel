import { Protect } from "@clerk/nextjs";
import Error from "@/components/Error";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <Protect
      role="org:admin"
      fallback={
        <Error message="Chỉ có 'Admin' mới có quyền truy cập vào nội dung này" />
      }
    >
      {children}
    </Protect>
  );
}
