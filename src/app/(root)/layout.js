import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";

import "@/styles/globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Read novel",
  description: "Đọc truyện",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={viVN}>
      <html
        lang="vi"
        className="scrollbar-thumb-green-500 scrollbar-track-green-300 scrollbar-thin"
      >
        <body className={inter.className}>
          <Header />
          <Banner />
          <main className="max-w-7xl mx-auto p-4 relative top-52">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
