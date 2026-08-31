import PageHero from "../../../components/PageHero";

export const metadata = { title: "Intimate Apparel Product Development" };

export default function ProductDevelopment() {
  return (
    <main>
      <PageHero
        eyebrow="Product development"
        title={<>Refine the details that make a piece <i>beloved.</i></>}
        copy="Our development process balances shape, movement and material to create garments people choose first."
        image="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1300&q=85"
      />
      <Detail />
    </main>
  );
}

function Detail() {
  return (
    <section className="grid gap-12 bg-[#f6f1ea] px-6 py-24 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-36">
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">From concept to sample</p>
      <div>
        <h2 className="max-w-4xl font-serif text-5xl leading-[0.88] tracking-[-0.08em] sm:text-7xl">
          Technical expertise, guided by feeling.
        </h2>
        <div className="mt-12 grid gap-10 border-t border-[#171312]/15 pt-8 md:grid-cols-2">
          <p className="text-base leading-7 text-[#171312]/70">
            Every sample is an opportunity to improve a fit, elevate a fabric or simplify a construction.
          </p>
          <ul className="space-y-3 text-lg leading-8 text-[#171312]">
            <li>Pattern and fit engineering</li>
            <li>Fabric and trim selection</li>
            <li>Sampling and wear testing</li>
            <li>Production specification packs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
