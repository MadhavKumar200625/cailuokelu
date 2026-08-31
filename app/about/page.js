import PageHero from "../../components/PageHero";

export const metadata = { title: "Our Story" };

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="Our story"
        title={<>Better basics<br /><i>by design.</i></>}
        copy="Cailuo Kelu began with one simple idea: the pieces closest to the body deserve the greatest care."
        image="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1300&q=85"
      />

      <section className="grid gap-12 bg-[#f6f1ea] px-6 py-24 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-36">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Our promise</p>
        <div>
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.08em] sm:text-7xl">Comfort, made more beautiful.</h2>
          <div className="mt-12 grid gap-10 border-t border-[#171312]/15 pt-8 md:grid-cols-2">
            <p className="text-base leading-7 text-[#171312]/70">
              We unite a meticulous approach to production with a restrained, modern perspective on design. The result is intimate apparel that looks effortless and feels exceptional.
            </p>
            <ul className="space-y-3 text-lg leading-8 text-[#171312]">
              <li>Thoughtful material choices</li>
              <li>Exacting construction</li>
              <li>Transparent collaboration</li>
              <li>Long-term partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#171312] px-6 py-24 text-center sm:px-12 lg:py-36">
        <p className="font-serif text-4xl leading-[0.9] tracking-[-0.08em] text-[#f6f1ea] sm:text-7xl">
          Designed with restraint.<br />
          <span className="text-[#b8925a]">Made with devotion.</span>
        </p>
      </section>
    </main>
  );
}
