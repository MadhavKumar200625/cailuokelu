import Link from "next/link";
import products from "../../data/products.json";

export const metadata = {
  title: "Intimate Apparel Collections",
  description: "Explore Cailuo Kelu's range of modern intimate apparel.",
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Collections() {
  return (
    <main>
      <section className="border-b border-[#171312]/10 bg-[#171312] px-6 py-24 text-[#f6f1ea] sm:px-12 lg:px-20 lg:py-36">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#b8925a]">The Cailuo Kelu range / 2026</p>
        <h1 className="mt-7 max-w-5xl font-serif text-6xl leading-[0.84] tracking-[-0.09em] sm:text-8xl">
          Made for the<br />
          <span className="text-[#b8925a]">everyday.</span>
        </h1>
        <p className="mt-8 max-w-md text-base leading-7 text-[#f6f1ea]/75">
          Foundational pieces designed to become future favourites.
        </p>
      </section>

      <div className="flex flex-wrap gap-3 border-b border-[#171312]/10 bg-[#f6f1ea] px-6 py-5 text-[10px] font-medium uppercase tracking-[0.14em] sm:px-12 lg:px-20">
        <span className="bg-[#171312] px-3 py-2 text-[#f6f1ea]">All products</span>
        <span className="px-3 py-2 text-[#171312]/55">Men&apos;s essentials</span>
        <span className="px-3 py-2 text-[#171312]/55">Women&apos;s essentials</span>
        <span className="px-3 py-2 text-[#171312]/55">Loungewear</span>
      </div>

      <section className="grid gap-x-5 gap-y-14 bg-[#f6f1ea] px-6 py-16 sm:grid-cols-2 sm:px-12 lg:grid-cols-4 lg:px-20">
        {products.concat(products).map((product, index) => {
          const href = `/product/${slugify(product.name)}`;
          return (
            <Link href={href} key={`${product.name}-${index}`} className="group block">
              <article>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#efe3d2]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 bg-[#f6f1ea] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#171312]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#b8925a]">{product.category}</p>
                <h2 className="mt-2 font-serif text-2xl tracking-[-0.06em] text-[#171312]">{product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[#171312]/65">{product.description}</p>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
