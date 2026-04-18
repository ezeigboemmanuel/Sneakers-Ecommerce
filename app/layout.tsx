import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavProvider from "@/components/NavProvider";
import Link from "next/link";
import Image from "next/image";
import Line from "@/assets/icons/whiteline.svg";
import LongLine from "@/assets/icons/whitelongline.svg";
import { ToasterProvider } from "@/components/ToastProvider";
import { cn } from "@/lib/utils";

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
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi"
          rel="stylesheet"
        ></link>
      </head>

      <body
        className={cn(
          inter.className,
          archivo.variable,
          "bg-background text-foreground transition-colors duration-300 min-h-screen"
        )}
      >
        <NavProvider>
          <ToasterProvider />
          <div className="max-w-[1440px] mx-auto">
            <Navbar />
          </div>
          <div className="max-w-[1440px] mx-auto min-h-[80vh]">{children}</div>
          <div className="max-w-[1440px] mx-auto h-full">
            <Footer />
            <div className="bg-nav-bg text-nav-text px-4 md:px-8 pb-5 flex justify-center items-center flex-col border-t border-muted-border transition-colors duration-300">
              <Image src={Line} alt="line" className="pt-5 pb-5 md:hidden" />
              <Image
                src={LongLine}
                alt="line"
                className="pt-5 pb-5 hidden md:inline-block"
              />

              <p className="font-light text-sm text-center text-nav-text-muted">
                © Designed by:{" "}
                <Link
                  href="https://www.behance.net/lajimoh"
                  target="_blank"
                  className="hover:underline text-nav-text"
                >
                  Lawal Jimoh (King LA){" "}
                </Link>
                • Developed by:{" "}
                <Link
                  href="https://zgboportfolio.vercel.app"
                  target="_blank"
                  className="hover:underline text-nav-text"
                >
                  Emmanuel Ezeigbo (zgbocode)
                </Link>
              </p>
            </div>
          </div>
        </NavProvider>
      </body>
    </html>
  );
}