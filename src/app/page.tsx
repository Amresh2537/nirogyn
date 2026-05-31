import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";
import Topics from "@/components/Topics";
import Ingredients from "@/components/Ingredients";
import Brands from "@/components/Brands";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WellnessChat from "@/components/WellnessChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TrustBar />
        <Topics />
        <Ingredients />
        <Brands />
        <Articles />
        <Newsletter />
      </main>
      <Footer />
      <WellnessChat />
    </>
  );
}

