import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import AnimationInit from "@/components/AnimationInit";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nirogyn.com"),
  title: "NIROGYN — Science Backed Wellness",
  description:
    "Evidence-based information to help you understand your body, make better choices, and live your healthiest life — built for India, by India.",
  keywords: ["wellness", "health", "nutrition", "science", "India", "nirogyn"],
  openGraph: {
    title: "NIROGYN — Science Backed Wellness",
    description:
      "Evidence-based information to help you understand your body, make better choices, and live your healthiest life.",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${nunito.variable}`}>
        <ScrollProgress />
        {children}
        <AnimationInit />
      </body>
    </html>
  );
}

