import { Protect } from "@clerk/nextjs";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <Protect
      role="org:admin"
      fallback={<p>Chỉ có admin mới có quyền truy cập vào nội dung này!!!</p>}
    >
      {children}
    </Protect>
  );
}
