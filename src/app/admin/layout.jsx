import { Inter } from "next/font/google";

import { Protect } from "@clerk/nextjs";
import Error from "@/components/Error";
import Provider from "@/utils/Provider";

const inter = Inter({ subsets: ["latin"] });

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
      <Provider>
        <html lang="vi">
          <body className={inter.className}>{children}</body>
        </html>
      </Provider>
    </Protect>
  );
}
