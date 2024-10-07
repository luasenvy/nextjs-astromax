"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <section className="mx-auto border-white/20 border-t 2xl:max-w-7xl bg-black border-b justify-center lg:fixed lg:z-50 w-full">
      <div className="mx-auto bg-black justify-center w-full">
        <div className="mx-auto border-white/20 border-x max-w-7xl flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
          <div className="text-white text-center items-center w-full flex flex-col justify-between md:px-0 sm:flex-row sm:px-8">
            <Link
              href="https://www.lexingtonthemes.com"
              className="text-white text-xs font-display inline-flex items-center md:px-8 md:text-center py-4 uppercase"
            >
              <span>ASTROMAX ⏤ By Lexington Themes &nbsp; &rarr;</span>
            </Link>
            <Link
              href="https://github.com/luasenvy/nextjs-astromax"
              className="w-full bg-white duration-200 font-display hover:bg-black hover:text-white lg:ml-auto lg:w-auto px-6 py-4 sm:rounded-full text-black text-center text-xs uppercase"
            >
              Github
            </Link>
            <Link
              href="mailto:your@name.com"
              className="w-full bg-orange duration-200 font-display hover:bg-blacktext-white lg:w-auto px-6 py-4 sm:rounded-full text-black hover:text-white text-center text-xs uppercase"
              onClick={(e) => e.preventDefault()}
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
