export async function Footer() {
  return (
    <footer className="border-white/20 border-b bg-accent-500">
      <div className="mx-auto w-full items-start justify-between p-8">
        <div className="mx-auto items-center text-center text-white">
          <p className="font-black text-2xl uppercase">ASTROMAX</p>
          <p className="mx-auto mt-3 text-sm">
            Designed and built in the Åland Islands by{" "}
            <a className="underline" href="https://x.com/Mike_Andreuzza">
              Michael Andreuzza
            </a>{" "}
            &amp; writed nextjs by{" "}
            <a
              className="underline"
              href="https://www.luas.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              luasenvy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
