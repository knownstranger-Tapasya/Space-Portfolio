import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import Navbar from "@/components/main/Navbar";

// import { Footer } from "@/components/main/footer";
// import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/StarBackground";
// import { siteConfig } from "@/config";
// import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

// export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={
          `${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`
        }
      >
        <StarsCanvas />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}