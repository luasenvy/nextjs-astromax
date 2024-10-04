import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-white/20 border-b bg-accent-500">
      <div className="mx-auto border-white/20 border-x max-w-7xl">
        <div className="mx-auto p-8 items-start justify-between w-full">
          <div className="text-white text-center items-center mx-auto">
            <p className="uppercase font-display text-2xl">ASTROMAX</p>
            <p className="mx-auto mt-3 text-sm">
              Designed and built in the Åland Islands by{" "}
              <Link className="underline" href="https://x.com/Mike_Andreuzza">
                Michael Andreuzza
              </Link>{" "}
              &amp; writed nextjs by{" "}
              <Link className="underline" href="https://www.luas.kr">
                luasenvy
              </Link>
            </p>
          </div>
        </div>
        <div className="mx-auto border-white/20 border-t flex flex-col p-8">
          <p className="text-white text-center text-sm font-display">
            See more templates on{" "}
            <a href="https://www.lexingtonthemes.com">Lexington Themes &nbsp; &rarr;</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
