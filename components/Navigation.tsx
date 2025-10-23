export async function Navigation() {
  return (
    <div className="w-full justify-center border-white/20 border-b">
      <div className="flex w-full flex-col items-center justify-between text-center md:flex-row md:p-8">
        <a href="/" className="p-4 font-black text-white uppercase tracking-tight md:p-0">
          <span>ASTROMAX</span>
        </a>
        <a
          href="https://github.com/luasenvy/nextjs-astromax"
          className="w-full bg-white px-6 py-4 text-center font-black text-black text-xs uppercase duration-200 hover:bg-black hover:text-white sm:rounded-full lg:ml-auto lg:w-fit"
        >
          Nextjs Version
        </a>
        <a
          href="https://github.com/michael-andreuzza/astromax"
          className="w-full bg-white px-6 py-4 text-center font-black text-black text-xs uppercase duration-200 hover:bg-black hover:text-white sm:rounded-full lg:w-fit"
        >
          Github
        </a>
        <a
          href="https://www.lexingtonthemes.com"
          className="w-full bg-orange px-6 py-4 text-center font-black text-white text-xs uppercase duration-200 hover:bg-black hover:text-white sm:rounded-full lg:w-fit"
        >
          More Astro themes
        </a>
      </div>
    </div>
  );
}
