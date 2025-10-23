"use client";

import "keen-slider/keen-slider.min.css";

import KeenSlider from "keen-slider";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";
import { useEffect, useState } from "react";
import BgGrid from "@/components/BgGrid";
import Alfred from "@/public/work/alfred.webp";
import Aubergine from "@/public/work/aubergine.webp";
import Author from "@/public/work/author.webp";
import Brightlight from "@/public/work/brightlight.webp";
import Buio from "@/public/work/buio.webp";
import Carbon from "@/public/work/carbon.webp";
import Carriera from "@/public/work/carriera.webp";
import Dusk from "@/public/work/dusk.webp";
import Enlightr from "@/public/work/enlightr.webp";
import Flabbergasted from "@/public/work/flabbergasted.webp";
import FlacoDark from "@/public/work/flacoDark.webp";
import FlacoLight from "@/public/work/flacoLight.webp";
import Hemingway from "@/public/work/hemingway.webp";
import Hirewise from "@/public/work/hirewise.webp";
import KoteiDark from "@/public/work/koteiDark.webp";
import KoteiLight from "@/public/work/koteiLight.webp";
import Navy from "@/public/work/navy.webp";
import Outkast from "@/public/work/outkast.webp";
import Phanatik from "@/public/work/phanatik.webp";
import PrimapersonaDark from "@/public/work/primapersonaDark.webp";
import PrimapersonaLight from "@/public/work/primapersonaLight.webp";
import ProfolioxDark from "@/public/work/profolioxDark.webp";
import ProfolioxLight from "@/public/work/profolioxLight.webp";
import Quartiere from "@/public/work/quartiere.webp";
import Riflesso from "@/public/work/riflesso.webp";
import Semplice from "@/public/work/semplice.webp";
import SimplexityDark from "@/public/work/simplexityDark.webp";
import SimplexityLight from "@/public/work/simplexityLight.webp";
import Snowpeak from "@/public/work/snowpeak.webp";
import Spaziobianco from "@/public/work/spaziobianco.webp";
import StreamerDark from "@/public/work/streamerDark.webp";
import StreamerLight from "@/public/work/streamerLight.webp";
import Studiomax from "@/public/work/studiomax.webp";
import Superstore from "@/public/work/superstore.webp";
import Trendspotter from "@/public/work/trendspotter.webp";
import Vanta from "@/public/work/vanta.webp";
import Williamsburg from "@/public/work/williamsburg.webp";

const themes = [
  { name: "Trendspotter", image: Trendspotter },
  { name: "Spaziobianco", image: Spaziobianco },
  { name: "Phanatik", image: Phanatik },
  { name: "Studiomax", image: Studiomax },
  { name: "ProfolioxLight", image: ProfolioxLight },
  { name: "ProfolioxDark", image: ProfolioxDark },
  { name: "Outkast", image: Outkast },
  { name: "Author", image: Author },
  { name: "PrimapersonaLight", image: PrimapersonaLight },
  { name: "PrimapersonaDark", image: PrimapersonaDark },
  { name: "SimplexityLight", image: SimplexityLight },
  { name: "SimplexityDark", image: SimplexityDark },
  { name: "Carbon", image: Carbon },
  { name: "Williamsburg", image: Williamsburg },
  { name: "KoteiLight", image: KoteiLight },
  { name: "KoteiDark", image: KoteiDark },
  { name: "Dusk", image: Dusk },
  { name: "Quartiere", image: Quartiere },
  { name: "Flabbergasted", image: Flabbergasted },
  { name: "Aubergine", image: Aubergine },
  { name: "FlacoLight", image: FlacoLight },
  { name: "FlacoDark", image: FlacoDark },
  { name: "Buio", image: Buio },
  { name: "Alfred", image: Alfred },
  { name: "Hemingway", image: Hemingway },
  { name: "StreamerLight", image: StreamerLight },
  { name: "StreamerDark", image: StreamerDark },
  { name: "Vanta", image: Vanta },
  { name: "Semplice", image: Semplice },
  { name: "Riflesso", image: Riflesso },
  { name: "Carriera", image: Carriera },
  { name: "Brightlight", image: Brightlight },
  { name: "Hirewise", image: Hirewise },
  { name: "Snowpeak", image: Snowpeak },
  { name: "Enlightr", image: Enlightr },
  { name: "Superstore", image: Superstore },
  { name: "Navy", image: Navy },
];

export function Work() {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ],
  );

  const [keenSlide, setKeenSlide] = useState<KeenSliderInstance>();

  const handleClickSliderPrevious = () => keenSlide?.prev();
  const handleClickSliderNext = () => keenSlide?.next();

  useEffect(() => {
    const autoplay = (slider: KeenSliderInstance) => {
      let timeout: NodeJS.Timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => slider.next(), 500);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    };
    const sliderEl = document.getElementById("keen-slider");
    if (!sliderEl) {
      console.warn("Slider element not found");
      return;
    }

    const keenSlider = new KeenSlider(
      sliderEl,
      {
        loop: true,
        defaultAnimation: { duration: 1000 },
        detailsChanged: (s) => {
          s.slides.forEach((element, idx) => {
            element.style.opacity = String(s.track.details.slides[idx].portion);
          });
        },
        slides: { origin: "center", perView: 2.2, spacing: 12 },
        breakpoints: {
          "(min-width: 1024px)": { slides: { origin: "center", perView: 3.5, spacing: 0 } },
        },
      },
      [autoplay],
    );

    setKeenSlide(keenSlider);
  }, []);

  return (
    <section className="divide-y divide-white/20 border-white/20 border-b">
      <div className="relative px-8 py-6">
        <BgGrid />
        <h2 className="font-black text-3xl text-white uppercase">
          Designed and developed websites at AstroMax
        </h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 left-0 z-10 flex items-center justify-between px-2">
          <button
            id="keen-slider-previous"
            aria-label="Previous slide"
            className="pointer-events-auto size-8 rounded-full bg-white/80 p-2 text-black shadow transition hover:bg-white"
            onClick={handleClickSliderPrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </button>
          <button
            id="keen-slider-next"
            aria-label="Next slide"
            className="pointer-events-auto size-8 rounded-full bg-white p-2 text-black shadow transition hover:bg-white"
            onClick={handleClickSliderNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </button>
        </div>
        <div ref={sliderRef} id="keen-slider" className="keen-slider relative">
          {themes.map(({ name, image }, i) => (
            <div key={`slide-item-${i}`} className="keen-slider__slide relative w-full">
              <Image src={image} width={800} height={800} alt={name} className="aspect-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
