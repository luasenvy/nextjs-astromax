import { Banner } from "@/components/Banner";
import { Testimonials } from "@/components/Testimonials";

export async function Hero() {
  return (
    <section className="border-white/20 border-b">
      <div className="mx-auto max-w-7xl border-white/20 border-x">
        <div className="mx-auto">
          <div className="gradient-grid mx-auto px-8 py-12 lg:pt-28">
            <h1 className="font-display text-3xl text-white uppercase lg:text-7xl">
              Maximize your online presence with a unique and engaging one-page website that
              delivers outstanding results.
            </h1>
          </div>
          <Banner />
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
