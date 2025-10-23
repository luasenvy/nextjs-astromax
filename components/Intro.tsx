import BgGrid from "@/components/BgGrid";

export async function Intro() {
  return (
    <section className="divide-y divide-white/20 border-white/20 border-b">
      <div className="relative p-8">
        <BgGrid />
        <p className="font-black text-white text-xl uppercase tracking-tight lg:text-7xl">
          AstroMax crafts bold, high-impact one-page websites—designed, refined, and built to
          captivate.
        </p>
      </div>
      <div className="p-8">
        <p className="font-black text-white uppercase lg:text-3xl">
          Built with Astro and Tailwind CSS, each site is fast, sharp, and tailored to tell your
          story and make your brand stand out. Simple, effective, unforgettable.
        </p>
      </div>
    </section>
  );
}
