import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Provider from "@/utils/Provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Read novel",
  description: "Đọc truyện",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="vi">
        <body className={inter.className}>
          <Header />
          <Banner />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
