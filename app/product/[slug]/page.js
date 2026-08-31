import Link from "next/link";
import products from "../../../data/products.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
  }));
}

export function generateMetadata({ params }) {
  const product = products.find((item) => {
    const slug = item.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return slug === params.slug;
  });

  return {
    title: product ? `${product.name} | Cailuo Kelu` : "Product",
    description: product ? product.description : "Cailuo Kelu product detail.",
  };
}

export default function ProductDetailPage({ params }) {
  const product = products.find((item) => {
    const slug = item.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return slug === params.slug;
  });

  if (!product) {
    return (
      <main className="bg-[#f6f1ea] px-6 py-24 text-center text-[#171312] sm:px-12 lg:px-20">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Product not found</p>
        <h1 className="mt-6 font-serif text-5xl tracking-[-0.08em]">This piece is not available.</h1>
        <Link href="/collections" className="mt-8 inline-flex border border-[#171312] bg-[#171312] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1ea] hover:bg-[#b8925a] hover:text-[#171312]">
          Back to collection
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#f6f1ea] text-[#171312]">
      <section className="mx-auto grid max-w-[1400px] gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-20 lg:py-20">
        <div className="overflow-hidden border border-[#171312]/10 bg-[#efe3d2]">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">{product.category}</p>
          <h1 className="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl">{product.name}</h1>
          <p className="mt-6 text-base leading-7 text-[#171312]/70">{product.description}</p>

          <div className="mt-10 flex items-end justify-between border-y border-[#171312]/10 py-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#171312]/55">Price</p>
              <p className="mt-2 font-serif text-3xl tracking-[-0.06em]">$148</p>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#171312]/60">Made to order</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="border border-[#171312] bg-[#171312] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1ea] transition hover:bg-[#b8925a] hover:text-[#171312]">
              Enquire about this piece
            </button>
            <Link href="/collections" className="border border-[#171312]/20 bg-transparent px-5 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#171312] transition hover:border-[#171312]">
              Continue shopping
            </Link>
          </div>

          <div className="mt-12 border-t border-[#171312]/10 pt-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Craft notes</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#171312]/70">
              <li>Soft-touch knit built for comfort and longevity</li>
              <li>Thoughtful fit engineered for daily wear</li>
              <li>Premium finish with elevated detail and ease</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
