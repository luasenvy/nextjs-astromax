export function Banner() {
  return (
    <section className="border-white/20 border-y">
      <div className="mx-auto text-white">
        <div className="relative mx-auto overflow-hidden overflow-x-hidden py-2">
          <div className="grid w-full justify-between">
            <div className="absolute inset-0 left-0 z-10 w-44 bg-gradient-to-r from-black via-transparent"></div>
            <div className="absolute inset-0 left-0 z-10 ml-auto w-44 bg-gradient-to-l from-black via-transparent"></div>
          </div>
          <div className="relative flex animate-marquee items-center gap-4 whitespace-nowrap font-black font-display uppercase tracking-widest">
            spots open <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span> spots open{" "}
            <span className="hidden lg:inline">✺</span>
          </div>
        </div>
      </div>
    </section>
  );
}
