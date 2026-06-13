import type { ReactNode } from "react";
import { Lora, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import styles from "./blog-isolated.module.css";

const blogSerif = Lora({
  subsets: ["latin"],
  variable: "--blog-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const blogSans = Nunito({
  subsets: ["latin"],
  variable: "--blog-sans",
  display: "swap",
  weight: ["400"],
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.blogRoot} ${blogSerif.variable} ${blogSans.variable}`}>
      <Navbar />
      {children}
    </div>
  );
}
