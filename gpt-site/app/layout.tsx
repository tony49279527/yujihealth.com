import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Manrope({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feminine Care OEM Manufacturer | YUJI Menstrual Cups & Pads",
  description: "YUJI supports global brands with feminine care OEM/ODM manufacturing for menstrual cups, reusable discs, pads, liners, intimate care products, private-label kits and packaging.",
  robots: { index: true, follow: true },
  icons: { icon: "/yuji-logo.svg", shortcut: "/yuji-logo.svg" },
  openGraph: {
    title: "Feminine Care OEM Manufacturer | YUJI",
    description: "Controlled production, documentation and private-label support for global feminine care brands.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "YUJI feminine care OEM manufacturing for global brands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feminine Care OEM Manufacturer | YUJI",
    description: "Controlled production, documentation and private-label support for global feminine care brands.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} ${display.variable}`}>{children}</body></html>;
}
