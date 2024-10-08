export default function Testimonials() {
  return (
    <div className="text-white text-xs gap-3 gap-y-12 grid grid-cols-1 md:grid-cols-4 mx-auto p-8 sm:grid-cols-2">
      <div className="flex flex-col justify-between h-full">
        <p className="text-[#ed642c]">
          John seamlessly merges design and coding, creating polished designs that strike a perfect
          balance between trends and originality. His approach of crafting designs directly in code
          yields exceptional results, surpassing expectations.
        </p>
        <div className="mt-3">
          <span className="block font-semibold mt-3">Emily Reynolds</span>
          <span className="block text-eagle">CEO of Swift Designworks</span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-[#ed772f]">
          Mark has an exceptional eye for design, and collaborating with him has been an absolute
          delight. I am looking forward to partnering with him on upcoming projects. I
          wholeheartedly endorse him to anyone in search of exceptional, top-notch work.
        </p>
        <div className="mt-3">
          <span className="block font-semibold mt-3">Lindsay Chen</span>
          <span className="block text-eagle">Founder of CodeCraft Studios</span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-[#ef9335]">
          Ethan has been an invaluable asset in the realm of design, and I struggled to keep pace
          with his work speed during our collaboration. His designs are sleek, and he consistently
          delivers substantial value; he continuously refines his designs and introduces
          enhancements.
        </p>
        <div className="mt-3">
          <span className="block font-semibold mt-3">Gabriel Maritinez</span>
          <span className="block text-eagle">Innovator at PixelPerfect Creations</span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-eagle">
          Andrew stands out as a distinctive blend of designer and developer who comprehends
          business requirements. He utilized his prior experience to swiftly create multiple landing
          pages for SparkLynx.
        </p>
        <div className="mt-3">
          <span className="block font-semibold mt-3">Jessica Carter</span>
          <span className="block text-eagle">Co-Founder of SparkLynx Technologies</span>
        </div>
      </div>
    </div>
  );
}
