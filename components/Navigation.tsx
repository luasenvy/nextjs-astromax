"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <section className="mx-auto w-full justify-center border-white/20 border-t border-b bg-black lg:fixed lg:z-50 2xl:max-w-7xl">
      <div className="mx-auto w-full justify-center bg-black">
        <div className="mx-auto flex w-full max-w-7xl flex-col border-white/20 border-x lg:flex-row lg:items-center lg:justify-between">
          <div className="flex w-full flex-col items-center justify-between text-center text-white sm:flex-row sm:px-8 md:px-0">
            <Link
              href="https://www.lexingtonthemes.com"
              className="inline-flex items-center py-4 font-display text-white text-xs uppercase md:px-8 md:text-center"
            >
              <span>ASTROMAX ⏤ By Lexington Themes &nbsp; &rarr;</span>
            </Link>
            <Link
              href="https://github.com/luasenvy/nextjs-astromax"
              className="w-full bg-white px-6 py-4 text-center font-display text-black text-xs uppercase duration-200 hover:bg-black hover:text-white sm:rounded-full lg:ml-auto lg:w-auto"
            >
              Github
            </Link>
            <Link
              href="mailto:your@name.com"
              className="w-full bg-orange px-6 py-4 text-center font-display text-black text-xs uppercase duration-200 hover:bg-blacktext-white hover:text-white sm:rounded-full lg:w-auto"
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
