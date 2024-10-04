import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";

export default function Hero() {
  return (
    <section className="border-white/20 border-b">
      <div className="mx-auto border-white/20 border-x max-w-7xl">
        <div className="mx-auto">
          <div className="mx-auto lg:pt-28 gradient-grid px-8 py-12">
            <h1 className="text-white font-display uppercase text-3xl lg:text-7xl">
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
