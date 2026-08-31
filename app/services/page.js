import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Manufacturing Services",
  description: "Private label, product development, custom packaging and quality assurance for intimate apparel brands.",
};

const services = [
  ["Private Label", "Your brand, distinct in every detail.", "/services/private-label"],
  ["Product Development", "From initial sketch to approved sample.", "/services/product-development"],
  ["Custom Packaging", "Unboxing that feels as considered as the garment.", "/services/custom-packaging"],
  ["Fabric Sourcing", "Comfort-led fabrics selected for performance and hand-feel.", "/contact"],
  ["Quality Assurance", "A detail-driven check at every stage of production.", "/contact"],
  ["Global Delivery", "Carefully prepared orders, delivered around the world.", "/contact"],
];

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title={<>A complete partner for <i>considered</i> brands.</>}
        copy="From the first line of a brief to the final shipment, our capabilities make intimate apparel production feel clear, collaborative and complete."
        image="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1300&q=85"
      />

      <section className="grid bg-[#f6f1ea] sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([title, copy, href], index) => (
          <article key={title} className="min-h-72 border-b border-[#171312]/10 p-7 sm:even:border-l lg:nth-[3n+2]:border-l">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">0{index + 1}</span>
            <h2 className="mt-16 font-serif text-3xl leading-none tracking-[-0.07em] text-[#171312]">{title}</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#171312]/65">{copy}</p>
            <Link href={href} className="mt-7 inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-[#171312] hover:text-[#b8925a]">
              Explore service ↗
            </Link>
          </article>
        ))}
      </section>

      <section className="bg-[#171312] px-6 py-24 text-center text-[#f6f1ea] sm:px-12 lg:py-36">
        <p className="font-serif text-4xl leading-[0.9] tracking-[-0.08em] sm:text-7xl">
          One standard.<br />
          Every step.<br />
          <span className="text-[#b8925a]">No detail overlooked.</span>
        </p>
      </section>
    </main>
  );
}
