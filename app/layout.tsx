import "@/styles/global.css";

import type { Viewport } from "next";

export const metadata = {
  title: "Astromax",
  description: "Astromax Theme",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="selection:bg-orange selection:text-white">
      {children}
    </html>
  );
}
