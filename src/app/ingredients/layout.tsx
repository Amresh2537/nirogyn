import type { ReactNode } from "react";
import { Lora, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import styles from "../blog/blog-isolated.module.css";

const ingredientsSerif = Lora({
  subsets: ["latin"],
  variable: "--blog-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ingredientsSans = Nunito({
  subsets: ["latin"],
  variable: "--blog-sans",
  display: "swap",
  weight: ["400"],
});

export default function IngredientsLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.blogRoot} ${ingredientsSerif.variable} ${ingredientsSans.variable}`}>
      <Navbar />
      {children}
    </div>
  );
}
