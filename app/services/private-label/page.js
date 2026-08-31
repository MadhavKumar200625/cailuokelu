import PageHero from "../../../components/PageHero";

export const metadata = { title: "Private Label Intimate Apparel" };

export default function PrivateLabel() {
  return (
    <main>
      <PageHero
        eyebrow="Private label"
        title={<>Your name.<br /><i>Our expertise.</i></>}
        copy="Create a collection that is unmistakably yours, with support from first idea through to final packaging."
        image="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1300&q=85"
      />
      <Detail />
    </main>
  );
}

function Detail() {
  return (
    <section className="grid gap-12 bg-[#f6f1ea] px-6 py-24 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-36">
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">The offer</p>
      <div>
        <h2 className="max-w-4xl font-serif text-5xl leading-[0.88] tracking-[-0.08em] sm:text-7xl">
          Everything your label needs to arrive with confidence.
        </h2>
        <div className="mt-12 grid gap-10 border-t border-[#171312]/15 pt-8 md:grid-cols-2">
          <p className="text-base leading-7 text-[#171312]/70">
            We work alongside your team to turn a clear point of view into tactile, production-ready products.
          </p>
          <ul className="space-y-3 text-lg leading-8 text-[#171312]">
            <li>Brand and collection direction</li>
            <li>Custom labels and trims</li>
            <li>Fit and size development</li>
            <li>Packaging and presentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
