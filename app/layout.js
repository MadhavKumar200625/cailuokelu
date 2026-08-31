import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export const metadata = {
  metadataBase: new URL("https://cailuokelu.com"),
  title: {
    default: "Cailuo Kelu | Premium Intimate Apparel Manufacturer",
    template: "%s | Cailuo Kelu",
  },
  description:
    "Cailuo Kelu is a private-label intimate apparel manufacturer creating considered essentials with exceptional comfort, fit and finish.",
  keywords: [
    "intimate apparel manufacturer",
    "private label underwear",
    "lingerie manufacturer",
    "custom underwear manufacturer",
    "Cailuo Kelu",
  ],
  openGraph: {
    title: "Cailuo Kelu | Comfort, Considered",
    description: "Premium intimate apparel, thoughtfully made for your label.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cailuo Kelu",
    url: "https://cailuokelu.com",
    description: "Premium private-label intimate apparel manufacturer.",
  };
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f6f1ea] text-[#171312] antialiased selection:bg-[#b8925a] selection:text-[#171312]">
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
