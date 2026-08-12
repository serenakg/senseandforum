import { Fraunces, Poppins } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://senseandforum.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sense & Forum — Service Design for Community-Led Growth",
    template: "%s | Sense & Forum",
  },
  description:
    "Sense & Forum is a service design agency that redesigns how startups, scale-ups, and organisations run, so growth doesn't cost you the people who make it possible.",
  openGraph: {
    title: "Sense & Forum — Service Design for Community-Led Growth",
    description:
      "Sense & Forum is a service design agency that redesigns how startups, scale-ups, and organisations run, so growth doesn't cost you the people who make it possible.",
    url: siteUrl,
    siteName: "Sense & Forum",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sense & Forum",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sense & Forum — Service Design for Community-Led Growth",
    description:
      "Sense & Forum is a service design agency that redesigns how startups, scale-ups, and organisations run, so growth doesn't cost you the people who make it possible.",
    images: ["/brand/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
