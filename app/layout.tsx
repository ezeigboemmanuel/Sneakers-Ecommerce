import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavProvider from "@/components/NavProvider";

const inter = Inter({ subsets: ["latin"] });

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sneakers",
  description: "Sneakers store by zgbocode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        ></link>
      </head>

      <body className={`${inter.className}`}>
        <div className="max-w-[1440px] mx-auto">
          <NavProvider />
          <Navbar />
        </div>
        <div className="max-w-[1440px] mx-auto">{children}</div>
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
