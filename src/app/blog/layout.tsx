import type { ReactNode } from "react";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import styles from "./blog-isolated.module.css";

const blogSerif = Lora({
  subsets: ["latin"],
  variable: "--blog-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const blogSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--blog-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.blogRoot} ${blogSerif.variable} ${blogSans.variable}`}>
      {children}
    </div>
  );
}
