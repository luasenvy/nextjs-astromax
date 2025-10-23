import { Fragment } from "react/jsx-runtime";

const messages = [
  "spots open",
  "now booking",
  "limited space",
  "get in touch",
  "new project?",
  "join the queue",
  "let’s build",
  "design magic",
  "front-end love",
  "available",
];

const marqueeItems = [...messages, ...messages];

export async function Banner() {
  return (
    <section className="border-white/20 border-y">
      <div className="relative overflow-hidden py-2 text-white">
        <div aria-hidden="true" className="sr-only pointer-events-none absolute inset-0 z-10">
          <div className="absolute left-0 h-full w-24 bg-linear-to-r from-black via-transparent"></div>
          <div className="absolute right-0 h-full w-24 bg-linear-to-l from-black via-transparent"></div>
        </div>

        <div className="flex w-max animate-marquee gap-6 whitespace-nowrap font-black uppercase tracking-widest">
          {marqueeItems.map((msg, index) => (
            <Fragment key={`mq-item-${index}`}>
              <span>{msg}</span>
              {index !== marqueeItems.length - 1 && <span aria-hidden="true">✺</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
