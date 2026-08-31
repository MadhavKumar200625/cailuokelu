import Link from "next/link";

export default function PageHero({ eyebrow, title, copy, image, cta = "Start a project" }) {
  return (
    <section className="grid min-h-[560px] bg-[#171312] text-[#f6f1ea] lg:grid-cols-[1.08fr_0.92fr]">
      <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-20">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#b8925a]">{eyebrow}</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl lg:text-[6rem]">{title}</h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-[#f6f1ea]/75">{copy}</p>
        <Link href="/contact" className="mt-9 inline-flex items-center gap-10 border border-[#b8925a] bg-[#b8925a] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#171312] transition hover:bg-transparent hover:text-[#f6f1ea]">
          {cta} <span className="text-xl">↗</span>
        </Link>
      </div>

      {image && (
        <div className="relative min-h-[420px] overflow-hidden border-t border-[#f6f1ea]/10 lg:border-l lg:border-t-0">
          <img src={image} alt="Cailuo Kelu craftsmanship" className="h-full w-full object-cover grayscale-[12%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171312]/55 via-[#171312]/10 to-[#171312]/35" />
          <span className="absolute bottom-6 left-6 border border-[#f6f1ea]/40 bg-[#171312]/30 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1ea]">
            Material / form / feeling
          </span>
        </div>
      )}
    </section>
  );
}
