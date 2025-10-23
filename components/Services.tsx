import BgGrid from "@/components/BgGrid";

const services = [
  {
    title: "Design in Figma or the Browser",
    description:
      "Whether designing in Figma or directly in the browser, I craft interfaces that are both clean and user-friendly. Every layout is tailored to fit your unique goals and audience.",
  },
  {
    title: "Redesign Existing Websites",
    description:
      "Got a website that needs a refresh? I’ll review your current design and rework it into something modern, intuitive, and more engaging — both visually and functionally.",
  },
  {
    title: "Convert to Tailwind & Astro",
    description:
      "I can help upgrade your current project by converting it to use Tailwind CSS and Astro — improving performance, reducing complexity, and boosting maintainability.",
  },
  {
    title: "Full Website Development",
    description:
      "I build fast, responsive websites using Tailwind CSS and Astro. The result: polished, lightweight pages that elevate your brand and support your business goals.",
  },
];

export async function Services() {
  return (
    <section className="divide-y divide-white/20 border-white/20 border-b">
      <div className="relative px-8 py-6">
        <BgGrid />
        <h2 className="font-black text-3xl text-white uppercase">our services; Explained</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 gap-y-12 text-white text-xs md:grid-cols-4">
        {services.map(({ title, description }, i) => (
          <div key={`service-item-${i}`} className="p-8">
            <h3 className="font-black text-lg text-white uppercase">{title}</h3>
            <p className="mt-3 text-eagle text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
