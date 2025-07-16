export function Testimonials() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-3 gap-y-12 p-8 text-white text-xs sm:grid-cols-2 md:grid-cols-4">
      <div className="flex h-full flex-col justify-between">
        <p className="text-[#ed642c]">
          John seamlessly merges design and coding, creating polished designs that strike a perfect
          balance between trends and originality. His approach of crafting designs directly in code
          yields exceptional results, surpassing expectations.
        </p>
        <div className="mt-3">
          <span className="mt-3 block font-semibold">Emily Reynolds</span>
          <span className="block text-eagle">CEO of Swift Designworks</span>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between">
        <p className="text-[#ed772f]">
          Mark has an exceptional eye for design, and collaborating with him has been an absolute
          delight. I am looking forward to partnering with him on upcoming projects. I
          wholeheartedly endorse him to anyone in search of exceptional, top-notch work.
        </p>
        <div className="mt-3">
          <span className="mt-3 block font-semibold">Lindsay Chen</span>
          <span className="block text-eagle">Founder of CodeCraft Studios</span>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between">
        <p className="text-[#ef9335]">
          Ethan has been an invaluable asset in the realm of design, and I struggled to keep pace
          with his work speed during our collaboration. His designs are sleek, and he consistently
          delivers substantial value; he continuously refines his designs and introduces
          enhancements.
        </p>
        <div className="mt-3">
          <span className="mt-3 block font-semibold">Gabriel Maritinez</span>
          <span className="block text-eagle">Innovator at PixelPerfect Creations</span>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between">
        <p className="text-eagle">
          Andrew stands out as a distinctive blend of designer and developer who comprehends
          business requirements. He utilized his prior experience to swiftly create multiple landing
          pages for SparkLynx.
        </p>
        <div className="mt-3">
          <span className="mt-3 block font-semibold">Jessica Carter</span>
          <span className="block text-eagle">Co-Founder of SparkLynx Technologies</span>
        </div>
      </div>
    </div>
  );
}
