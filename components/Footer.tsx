import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-white/20 border-b bg-accent-500">
      <div className="mx-auto max-w-7xl border-white/20 border-x">
        <div className="mx-auto w-full items-start justify-between p-8">
          <div className="mx-auto items-center text-center text-white">
            <p className="font-display text-2xl uppercase">ASTROMAX</p>
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
        <div className="mx-auto flex flex-col border-white/20 border-t p-8">
          <p className="text-center font-display text-sm text-white">
            See more templates on{" "}
            <a href="https://www.lexingtonthemes.com">Lexington Themes &nbsp; &rarr;</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
