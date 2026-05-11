import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SearchSection from "@/components/SearchSection";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import NextSteps from "@/components/NextSteps";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <SearchSection />
      <Products />
      <HowItWorks />
      <NextSteps />
      <TrustBar />
      <Footer />
    </>
  );
}
