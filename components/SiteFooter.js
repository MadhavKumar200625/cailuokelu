import Link from "next/link";

const explore = [
  ["Home", "/"],
  ["Collections", "/collections"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#171312]/10 bg-[#171312] px-6 py-12 text-[#f6f1ea] sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-10 border-b border-[#f6f1ea]/10 pb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#b8925a]">Begin a project</p>
            <p className="mt-5 font-serif text-5xl leading-[0.92] tracking-[-0.08em] sm:text-7xl">
              Make something<br />
              <span className="text-[#b8925a]">people reach for.</span>
            </p>
          </div>

          <Link href="/contact" className="grid h-16 w-16 place-items-center border border-[#f6f1ea]/40 text-2xl text-[#f6f1ea] transition hover:bg-[#b8925a] hover:text-[#171312]">
            ↗
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold uppercase tracking-[-0.08em]">
              CAILUO<span className="text-[#b8925a]">/</span>KELU
            </p>
            <a href="mailto:hello@cailuokelu.com" className="mt-5 block text-sm text-[#f6f1ea]/70 hover:text-[#b8925a]">
              hello@cailuokelu.com
            </a>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Explore</p>
            <div className="grid gap-2">
              {explore.map(([name, href]) => (
                <Link key={href} href={href} className="text-sm text-[#f6f1ea]/70 hover:text-[#b8925a]">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Services</p>
            <div className="grid gap-2">
              <Link href="/services/private-label" className="text-sm text-[#f6f1ea]/70 hover:text-[#b8925a]">Private label</Link>
              <Link href="/services/product-development" className="text-sm text-[#f6f1ea]/70 hover:text-[#b8925a]">Product development</Link>
              <Link href="/services/custom-packaging" className="text-sm text-[#f6f1ea]/70 hover:text-[#b8925a]">Custom packaging</Link>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Follow along</p>
            <a href="#" className="text-sm text-[#f6f1ea]/70 hover:text-[#b8925a]">Instagram ↗</a>
          </div>
        </div>

        <p className="border-t border-[#f6f1ea]/10 pt-5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#f6f1ea]/45">
          © 2026 Cailuo Kelu / Comfort, considered.
        </p>
      </div>
    </footer>
  );
}