import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

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
      <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet"></link>
      <body className={`${inter.className}`}>
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-8">{children}</div>
      </body>
    </html>
  );
}
