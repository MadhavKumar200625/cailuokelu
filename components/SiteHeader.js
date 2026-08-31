"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  ["Private label", "/services/private-label"],
  ["Product development", "/services/product-development"],
  ["Custom packaging", "/services/custom-packaging"],
];

const navLinks = [
  ["Collections", "/collections"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Journal", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [drop, setDrop] = useState(false);

  const close = () => {
    setMenu(false);
    setDrop(false);
  };

  const linkClass = "text-[10px] font-medium uppercase tracking-[0.22em] text-[#171312] transition hover:text-[#b8925a]";

  return (
    <header className="relative z-50 border-b border-[#171312]/10 bg-[#f6f1ea] shadow-[0_18px_40px_rgba(23,19,18,0.04)]">
      <div className="flex min-h-10 items-center justify-center bg-[#171312] px-4 py-2 text-center text-[9px] font-medium uppercase tracking-[0.22em] text-[#f6f1ea]">
        Crafted for labels with a more considered point of view
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
        <div className="flex items-center gap-4">
          <Link href="/" onClick={close} className="block shrink-0">
            <img src="/images/cailuo-kelu-logo.svg" alt="Cailuo Kelu logo" className="h-11 w-auto lg:h-14" />
          </Link>
          <div className="hidden items-center gap-2 border-l border-[#171312]/15 pl-4 text-[9px] uppercase tracking-[0.25em] text-[#171312]/60 lg:flex">
            <span>Intimates</span>
            <span className="text-[#b8925a]">•</span>
            <span>Luxury essentials</span>
          </div>
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([name, href]) => (
            <Link key={name} href={href} className={linkClass}>
              {name}
            </Link>
          ))}

          <div className="relative">
            <button onClick={() => setDrop((value) => !value)} className={`${linkClass} flex items-center gap-2`} aria-expanded={drop}>
              Services <span className="text-base text-[#b8925a]">+</span>
            </button>
            {drop && (
              <div className="absolute right-0 top-11 w-72 border border-[#171312]/10 bg-[#171312] p-3 shadow-[0_25px_40px_rgba(23,19,18,0.14)]">
                {services.map(([name, href], index) => (
                  <Link key={href} href={href} onClick={close} className="flex items-center justify-between border-b border-[#f6f1ea]/10 py-3 text-sm text-[#f6f1ea] last:border-0">
                    <span>
                      <b className="mr-3 text-[9px] tracking-[0.2em] text-[#b8925a]">0{index + 1}</b>
                      {name}
                    </span>
                    <span className="text-[#b8925a]">↗</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden border border-[#171312] bg-[#171312] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f6f1ea] transition hover:border-[#b8925a] hover:bg-[#b8925a] hover:text-[#171312] sm:block">
            Start a project ↗
          </Link>
          <button onClick={() => setMenu((value) => !value)} className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#171312] lg:hidden" aria-expanded={menu}>
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menu && (
        <nav className="grid gap-5 border-t border-[#171312]/10 bg-[#efe3d2] px-5 py-6 lg:hidden">
          {navLinks.map(([name, href]) => (
            <Link key={name} href={href} onClick={close} className={linkClass}>{name}</Link>
          ))}
          <Link href="/services/private-label" onClick={close} className={linkClass}>Private label</Link>
          <Link href="/services/product-development" onClick={close} className={linkClass}>Product development</Link>
          <Link href="/contact" onClick={close} className={linkClass}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
