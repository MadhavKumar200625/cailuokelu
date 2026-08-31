import Link from "next/link";
import products from "../data/products.json";

export const metadata = {
  title: "Premium Intimate Apparel Manufacturer",
  description: "Private-label underwear and intimate apparel designed with exceptional comfort, fit and finish.",
};

const eyebrow = "text-[10px] font-medium uppercase tracking-[0.22em]";
const button = "inline-flex w-fit items-center justify-between gap-10 border border-[#171312] bg-[#171312] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f6f1ea] transition hover:border-[#b8925a] hover:bg-[#b8925a] hover:text-[#171312]";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Home() {
  return (
    <main>
      <section className="grid min-h-[680px] bg-[#171312] text-[#f6f1ea] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-between px-6 py-12 sm:px-12 lg:px-20 lg:py-16">
          <div>
            <p className={`${eyebrow} text-[#b8925a]`}>Private label / intimate studio</p>
            <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.84] tracking-[-0.08em] text-[#f6f1ea] sm:text-8xl lg:text-[8.4rem]">
              The first<br />
              <span className="text-[#b8925a]">layer</span><br />
              matters.
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#f6f1ea]/75">
              Refined essentials for brands that want comfort, elegance, and a more intentional everyday ritual.
            </p>
            <Link href="/collections" className={`${button} mt-9`}>
              See the range <span className="text-xl">↗</span>
            </Link>
          </div>

          <div className="mt-12 flex max-w-md items-end justify-between border-t border-[#f6f1ea]/15 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1ea]/80">
            <span>01 / 03</span>
            <span>Designed in dialogue<br />Made to move</span>
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden border-t border-[#f6f1ea]/10 lg:border-l lg:border-t-0">
          <img src="/images/cailuo-kelu-hero.png" alt="Premium intimate apparel arranged in a warm studio" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171312]/60 via-[#171312]/10 to-[#171312]/35" />
          <div className="absolute right-5 top-5 grid h-28 w-28 place-items-center border border-[#b8925a] bg-[#171312]/35 text-center text-[10px] font-medium uppercase leading-4 tracking-[0.18em] text-[#f6f1ea]">
            Feel<br />
            first<br />
            always
          </div>
        </div>
      </section>

      <div className="grid border-b border-[#171312]/10 bg-[#efe3d2] text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#171312] sm:grid-cols-3">
        <span className="border-b border-[#171312]/10 px-4 py-5 sm:border-b-0 sm:border-r">Soft on the body</span>
        <span className="border-b border-[#171312]/10 px-4 py-5 sm:border-b-0 sm:border-r">Strong in identity</span>
        <span className="px-4 py-5">Ready for scale</span>
      </div>

      <section className="grid gap-12 px-6 py-24 sm:px-12 lg:grid-cols-[1.3fr_0.7fr] lg:px-20 lg:py-32">
        <div>
          <p className={`${eyebrow} text-[#b8925a]`}>Our point of view</p>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl">Good basics are never basic.</h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-base leading-7 text-[#171312]/70">
            We bring together considered design, comfort-led materials and precise production for labels ready to make something people reach for again.
          </p>
          <Link href="/about" className={`${button} mt-8`}>
            Meet the studio <span className="text-xl">↗</span>
          </Link>
        </div>
      </section>

      <section className="border-y border-[#171312]/10 bg-[#171312] px-6 py-20 text-[#f6f1ea] sm:px-12 lg:px-20">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className={`${eyebrow} text-[#b8925a]`}>The collection</p>
            <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.08em] sm:text-7xl">
              Essentials<br />
              <span className="text-[#b8925a]">with intent.</span>
            </h2>
          </div>
          <Link href="/collections" className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1ea] hover:text-[#b8925a]">
            View all products ↗
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => {
            const href = `/product/${slugify(product.name)}`;
            return (
              <Link href={href} key={product.name} className="group block">
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden border border-[#f6f1ea]/20 bg-[#efe3d2]">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute left-3 top-3 bg-[#f6f1ea] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#171312]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">{product.category}</p>
                  <h3 className="mt-2 font-serif text-3xl leading-none tracking-[-0.06em] text-[#f6f1ea]">{product.name}</h3>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-10 bg-[#efe3d2] px-6 py-20 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-28">
        <p className={`${eyebrow} text-[#b8925a]`}>A complete partner</p>
        <div>
          <h2 className="max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl">From first sketch to final fold.</h2>
          <p className="mt-8 max-w-xl text-base leading-7 text-[#171312]/70">
            Private label, product development and packaging, held together by one clear point of view.
          </p>
          <Link href="/services" className={`${button} mt-8`}>
            Explore capabilities <span className="text-xl">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
