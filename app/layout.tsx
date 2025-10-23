import "@/styles/tailwind.css";

import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "Nextjs - Astromax",
  description: "Astromax Theme for Next.js",
  authors: [
    { name: "Michael Andreuzza", url: "https://github.com/michael-andreuzza/astromax" },
    { name: "luasenvy", url: "https://github.com/luasenvy/nextjs-astromax" },
  ],
  keywords: "Add your keywords here",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const geist = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`selection:bg-orange selection:text-white ${geist.variable} ${geistMono.variable}
    `}
    >
      <body className="mx-auto max-w-7xl border-white/20 border-x bg-black 2xl:max-w-7xl">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
