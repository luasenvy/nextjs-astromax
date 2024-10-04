"use client";

import mailgo from "mailgo";
import "mailgo/dist/mailgo.css";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Cta() {
  const mailingRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!mailingRef.current) return;

    mailgo();
  }, [mailingRef]);

  return (
    <section className="border-white/20 border-b">
      <div className="mx-auto border-white/20 border-x max-w-7xl">
        <div className="bg-transparent duration-200 group hover:bg-orange ">
          <Link
            ref={mailingRef}
            href="mailto:luas.envy@gmail.com"
            className="text-white text-center items-center w-full bg-orange duration-200 focus:outline-disc focus:ring-0 font-display font-medium hoder:rounded-0 inline-flex justify-center lg:py-12 lg:text-6xl px-4 py-6 rounded-full text-3xl"
            onClick={(e) => e.preventDefault()}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
