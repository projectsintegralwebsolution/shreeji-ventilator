import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingBtn } from "@/components/common/WhatsAppFloatingBtn";
import { BackToTop } from "@/components/common/BackToTop";
import { JsonLd } from "@/components/common/JsonLd";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Shreeji Sales Corporation | Industrial Wind Ventilator & Turbo Ventilator Manufacturer",
    template: "%s | Shreeji Sales Corporation (Simpovent)"
  },
  description: "Leading ISO 9001:2015 certified manufacturer of Wind Driven Turbo Roof Ventilators, Industrial Exhaust Fans, and Natural Air Ventilation Systems in Vasai, Mumbai, Pune, Maharashtra, Gujarat, Rajasthan & India.",
  keywords: [
    "Shreeji Sales Corporation",
    "Simpovent",
    "Wind Ventilator Manufacturer India",
    "Turbo Air Ventilator Mumbai",
    "Roof Ventilator Pune",
    "Industrial Exhaust Fan",
    "Powerless Roof Ventilator",
    "Motorized Roof Ventilator"
  ],
  authors: [{ name: "Shreeji Sales Corporation", url: "https://shreejiwindventilator.com" }],
  creator: "Shreeji Sales Corporation",
  metadataBase: new URL("https://shreejiwindventilator.com"),
  alternates: {
    canonical: "https://shreejiwindventilator.com"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon.png", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/images/favicon.png", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Shreeji Sales Corporation | Industrial Wind Ventilator & Turbo Ventilator Manufacturer",
    description: "ISO 9001:2015 certified manufacturer of Wind Driven Turbo Roof Ventilators and Industrial Exhaust Fans in India. Zero power, noiseless, 10-year warranty.",
    url: "https://shreejiwindventilator.com",
    siteName: "Shreeji Sales Corporation",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* LCP Hero image preload (mobile & desktop) */}
        <link
          rel="preload"
          as="image"
          href="/images/slides/slide-1-mobile.webp"
          type="image/webp"
          media="(max-width: 640px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/slides/slide-1.webp"
          type="image/webp"
          media="(min-width: 641px)"
          fetchPriority="high"
        />
        {/* Google tag (gtag.js) - loaded gracefully on idle or first interaction */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YY4Z72TDCP');

              function loadGtag(){
                if(window.__gtagLoaded) return;
                window.__gtagLoaded = true;
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-YY4Z72TDCP';
                document.head.appendChild(s);
              }

              if ('requestIdleCallback' in window) {
                window.requestIdleCallback(function(){ setTimeout(loadGtag, 9000); });
              } else {
                setTimeout(loadGtag, 9000);
              }
              ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'].forEach(function(e){
                window.addEventListener(e, loadGtag, { once: true, passive: true });
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <JsonLd data={[getOrganizationSchema(), getLocalBusinessSchema()]} />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white text-slate-900" suppressHydrationWarning>
        <Header />
        <main className="flex-1" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingBtn />
        <BackToTop />
      </body>
    </html>
  );
}
