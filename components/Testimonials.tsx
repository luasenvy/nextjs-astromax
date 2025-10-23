const testimonials = [
  {
    text: "John seamlessly merges design and coding, creating polished designs that strike a perfect balance between trends and originality. His approach of crafting designs directly in code yields exceptional results, surpassing expectations.",
    author: "Emily Reynolds",
    title: "CEO of Swift Designworks",
  },
  {
    text: "Mark has an exceptional eye for design, and collaborating with him has been an absolute delight. I am looking forward to partnering with him on upcoming projects. I wholeheartedly endorse him to anyone in search of exceptional, top-notch work.",
    author: "Lindsay Chen",
    title: "Founder of CodeCraft Studios",
  },
  {
    text: "Ethan has been an invaluable asset in the realm of design, and I struggled to keep pace with his work speed during our collaboration. His designs are sleek, and he consistently delivers substantial value; he continuously refines his designs and introduces enhancements.",
    author: "Gabriel Maritinez",
    title: "Innovator at PixelPerfect Creations",
  },
  {
    text: "Andrew stands out as a distinctive blend of designer and developer who comprehends business requirements. He utilized his prior experience to swiftly create multiple landing pages for SparkLynx.",

    author: "Jessica Carter",
    title: "Co-Founder of SparkLynx Technologies",
  },
];

export async function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-12 p-8 text-xs sm:grid-cols-2 md:grid-cols-4">
      {testimonials.map((item, i) => (
        <figure key={`tstm-item-${i}`} className="flex h-full flex-col justify-between">
          <blockquote className="font-normal text-eagle">{item.text}</blockquote>
          <figcaption className="mt-3 not-italic">
            <span className="mt-3 block font-semibold text-white">{item.author}</span>
            <cite className="block text-eagle not-italic">{item.title}</cite>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
