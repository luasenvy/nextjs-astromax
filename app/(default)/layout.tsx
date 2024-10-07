"use client";

import mailgo from "mailgo";
import { useEffect } from "react";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import "mailgo/dist/mailgo.css";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  useEffect(() => {
    mailgo({ dark: true });
  }, []);

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
