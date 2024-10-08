import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add global meta tags or links here */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        {" "}
        <TopHeader />
        <div className="h-[calc(100vh-240px)] overflow-y-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
