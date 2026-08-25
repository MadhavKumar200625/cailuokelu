import Link from "next/link";
export default function PageHero({eyebrow,title,copy,image,cta="Start a project"}){return <section className="page-hero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p><Link href="/contact" className="button gold">{cta}<span>↗</span></Link></div>{image&&<img src={image} alt="Cailuo Kelu craftsmanship"/>}</section>}
