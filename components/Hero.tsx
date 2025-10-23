import { Banner } from "@/components/Banner";
import BgGrid from "@/components/BgGrid";
import { Testimonials } from "@/components/Testimonials";

export async function Hero() {
  return (
    <section className="border-white/20 border-b">
      <div className="relative bg-grid p-8">
        <BgGrid />

        <h1 className="relative font-black text-3xl text-white uppercase tracking-tighter lg:text-8xl">
          Maximize your online presence with a unique and engaging one-page website that delivers
          outstanding results.
        </h1>
      </div>
      <Banner />
      <Testimonials />
    </section>
  );
}
