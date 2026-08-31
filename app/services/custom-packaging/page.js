import PageHero from "../../../components/PageHero";

export const metadata = { title: "Custom Apparel Packaging" };

export default function CustomPackaging() {
  return (
    <main>
      <PageHero
        eyebrow="Custom packaging"
        title={<>The first touch should feel as special as the <i>last.</i></>}
        copy="Complete the Cailuo Kelu experience with packaging created to protect, present and quietly impress."
        image="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1300&q=85"
      />
      <section className="grid gap-12 bg-[#f6f1ea] px-6 py-24 sm:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-20 lg:py-36">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">A finished experience</p>
        <div>
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.88] tracking-[-0.08em] sm:text-7xl">
            Every layer, intentionally yours.
          </h2>
          <div className="mt-12 grid gap-10 border-t border-[#171312]/15 pt-8 md:grid-cols-2">
            <p className="text-base leading-7 text-[#171312]/70">
              We can source and produce the tactile details that carry your brand beyond the garment.
            </p>
            <ul className="space-y-3 text-lg leading-8 text-[#171312]">
              <li>Custom boxes and mailers</li>
              <li>Hangtags and care cards</li>
              <li>Tissue, seals and ribbons</li>
              <li>Responsible material options</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
