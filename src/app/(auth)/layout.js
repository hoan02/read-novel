import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";

import Header from "@/components/Header";
import Banner from "@/components/Banner";

import "@/styles/globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Read novel",
//   description: "Đọc truyện",
// };

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={viVN}>
      <html lang="vi">
        <body className={inter.className}>
          <Header />
          <Banner />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
