export default function Banner() {
  return (
    <section className="border-white/20 border-y">
      <div className="text-white mx-auto">
        <div className="mx-auto overflow-hidden overflow-x-hidden py-2 relative">
          <div className="w-full justify-between grid">
            <div className="absolute from-black inset-0 left-0 via-transparent w-44 z-10 bg-gradient-to-r"></div>
            <div className="absolute from-black inset-0 left-0 via-transparent w-44 z-10 bg-gradient-to-l ml-auto"></div>
          </div>
          <div className="flex items-center animate-marquee font-black font-display gap-4 relative tracking-widest uppercase whitespace-nowrap">
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
