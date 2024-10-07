import "@/styles/global.css";

import type { Viewport } from "next";
import localFont from "next/font/local";

export const metadata = {
  title: "Astromax",
  description: "Astromax Theme",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const bsblack = localFont({
  src: [
    {
      path: "../public/fonts/bsblack/BSBlack.woff",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-basement",
  declarations: [{ prop: "descent-override", value: "0%" }],
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/Inter-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/inter/Inter-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const interVariable = localFont({
  src: [
    {
      path: "../public/fonts/inter/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  fallback: ["var(--font-inter)"],
  variable: "--font-interVariable",
  weight: "100 900",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="selection:bg-orange selection:text-white">
      <body
        className={`${bsblack.variable} ${inter.variable} ${interVariable.className} mx-auto bg-black 2xl:max-w-7xl`}
      >
        {children}
      </body>
    </html>
  );
}
