"use client";

import "@splidejs/splide/dist/css/splide.min.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

import Work1Image from "@/public/work/1.png";
import Work10Image from "@/public/work/10.png";
import Work2Image from "@/public/work/2.png";
import Work3Image from "@/public/work/3.png";
import Work4Image from "@/public/work/4.png";
import Work5Image from "@/public/work/5.png";
import Work6Image from "@/public/work/6.png";
import Work7Image from "@/public/work/7.png";
import Work8Image from "@/public/work/8.png";
import Work9Image from "@/public/work/9.png";

export default function Work() {
  return (
    <>
      <section className="border-b border-white/20 bg-accent-500">
        <div className="mx-auto max-w-7xl border-x border-white/20 px-8 py-12 gradient-grid">
          <div className="mx-auto">
            <h3 className="text-3xl font-display text-white uppercase">
              Designed and developed websites at AstroMax
            </h3>
          </div>
        </div>
      </section>
      <section className="border-b border-white/20 bg-accent-500">
        <div className="mx-auto max-w-7xl border-white/20 border-x">
          <Splide
            aria-label="splide.js"
            aria-roledescription="carousel"
            options={{
              perPage: 5,
              gap: "0rem",
              breakpoints: { 640: { perPage: 1 } },
            }}
          >
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 1</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work1Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 2</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work2Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 3</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work3Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 4</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work4Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-black">
                <span className="block font-semibold">Project 5</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black"
                src={Work5Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 6</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work6Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 7</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work7Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 8</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work8Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-r lg:border-white/20 ">
                <span className="block font-semibold">Project 9</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black lg:border-r"
                src={Work9Image}
              />
            </SplideSlide>
            <SplideSlide>
              <div className="text-white text-xs order-first p-3 text-center lg:border-black">
                <span className="block font-semibold">Project 10</span>
              </div>
              <Image
                alt="work"
                className="w-full object-cover object-center bg-white border-t border-black"
                src={Work10Image}
              />
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
}
