export async function Cta() {
  return (
    <section className="border-white/20 border-b">
      <div className="group bg-transparent duration-200 hover:bg-orange">
        <a
          href="mailto:michael@andreuzza.com"
          className="inline-flex w-full items-center justify-center hoder:rounded-0 rounded-full bg-orange px-4 py-6 text-center font-black text-4xl text-white uppercase duration-200 focus:outline-disc focus:ring-0 lg:py-24 lg:text-7xl"
        >
          Get a quote
        </a>
      </div>
    </section>
  );
}
