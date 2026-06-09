import Navbar from "@/app/Navbar";
import Hero from "@/components/Hero";
import FourPillars from "@/components/FourPillars";
import TrustBar from "@/components/TrustBar";
import Topics from "@/components/Topics";
import Ingredients from "@/components/Ingredients";
import Brands from "@/components/Brands";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WellnessChat from "@/components/WellnessChat";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FourPillars />
        <Topics />
        <TrustBar />
        <Articles />
        <Ingredients />
        <Brands />
        <Newsletter />
      </main>
      <Footer />
      <WellnessChat />
    </>
  );
}

