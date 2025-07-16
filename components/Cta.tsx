"use client";

import Link from "next/link";

export function Cta() {
  return (
    <section className="border-white/20 border-b">
      <div className="mx-auto max-w-7xl border-white/20 border-x">
        <div className="group bg-transparent duration-200 hover:bg-orange ">
          <Link
            href="mailto:luas.envy@gmail.com"
            className="inline-flex w-full items-center justify-center hoder:rounded-0 rounded-full bg-orange px-4 py-6 text-center font-display font-medium text-3xl text-white duration-200 focus:outline-disc focus:ring-0 lg:py-12 lg:text-6xl"
            onClick={(e) => e.preventDefault()}
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
