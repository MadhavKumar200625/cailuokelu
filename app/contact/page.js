export const metadata = { title: "Contact Cailuo Kelu" };

export default function Contact() {
  return (
    <main className="grid bg-[#171312] lg:grid-cols-[0.9fr_1.1fr]">
      <section className="px-6 py-24 text-[#f6f1ea] sm:px-12 lg:px-20 lg:py-32">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8925a]">Start a conversation</p>
        <h1 className="mt-8 font-serif text-6xl leading-[0.84] tracking-[-0.09em] sm:text-8xl">
          Let&apos;s make<br />
          <span className="text-[#b8925a]">something</span><br />
          lasting.
        </h1>
        <p className="mt-10 max-w-sm text-base leading-7 text-[#f6f1ea]/75">
          Tell us about your collection, your customers and the feeling you want to create.
        </p>

        <div className="mt-16 border-t border-[#f6f1ea]/20 pt-5 text-sm text-[#f6f1ea]">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#b8925a]">Email</p>
          <a className="mt-2 block font-medium hover:underline" href="mailto:hello@cailuokelu.com">hello@cailuokelu.com</a>
          <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-[#b8925a]">Availability</p>
          <p className="mt-2">Worldwide collaboration</p>
        </div>
      </section>

      <form action="#" className="grid gap-7 border-t border-[#171312]/20 bg-[#f6f1ea] px-6 py-16 sm:px-12 lg:border-l lg:border-t-0 lg:px-20 lg:py-32">
        <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#171312]">
          Your name
          <input className="mt-3 block w-full border-0 border-b border-[#171312]/15 bg-transparent px-0 py-3 text-base outline-none placeholder:text-[#171312]/35 focus:border-[#b8925a]" placeholder="Jane Smith" required />
        </label>

        <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#171312]">
          Brand / company
          <input className="mt-3 block w-full border-0 border-b border-[#171312]/15 bg-transparent px-0 py-3 text-base outline-none placeholder:text-[#171312]/35 focus:border-[#b8925a]" placeholder="Your Brand" />
        </label>

        <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#171312]">
          Email address
          <input type="email" className="mt-3 block w-full border-0 border-b border-[#171312]/15 bg-transparent px-0 py-3 text-base outline-none placeholder:text-[#171312]/35 focus:border-[#b8925a]" placeholder="hello@yourbrand.com" />
        </label>

        <label className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#171312]">
          Project details
          <textarea className="mt-3 block min-h-36 w-full resize-none border-0 border-b border-[#171312]/15 bg-transparent px-0 py-3 text-base outline-none placeholder:text-[#171312]/35 focus:border-[#b8925a]" placeholder="Tell us about your collection, your customer and the feeling you want to create." />
        </label>

        <button className="mt-5 inline-flex w-fit items-center justify-between gap-10 border border-[#171312] bg-[#171312] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#f6f1ea] transition hover:border-[#b8925a] hover:bg-[#b8925a] hover:text-[#171312]">
          Send inquiry <span className="text-xl">↗</span>
        </button>
      </form>
    </main>
  );
}
