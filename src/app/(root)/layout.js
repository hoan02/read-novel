import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { viVN } from "@clerk/localizations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/styles/globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/layout/Header";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import CustomThemeProviderMain from "@/components/CustomThemeProviderMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Read novel",
  description: "Đọc truyện",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className="scrollbar-thumb-green-500 scrollbar-track-green-300 scrollbar-thin"
    >
      <ClerkProvider localization={viVN}>
        <Providers>
          <body className={inter.className}>
            <Header />
            <Banner />
            <CustomThemeProviderMain>
              <main className="max-w-7xl mx-auto p-4 relative top-52">
                {children}
              </main>
            </CustomThemeProviderMain>
            <Footer />
            <ToastContainer autoClose={3000} theme="light" />
          </body>
        </Providers>
      </ClerkProvider>
    </html>
  );
}
