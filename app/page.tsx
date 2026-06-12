import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import OurPillars from "@/components/OurPillars";
import CapitalVDifference from "@/components/CapitalVDifference";
import HowWeWork from "@/components/HowWeWork";
import TechFoundations from "@/components/TechFoundations";
import WhoWePartnerWith from "@/components/WhoWePartnerWith";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <OurPillars />
        <CapitalVDifference />
        <HowWeWork />
        <TechFoundations />
        <WhoWePartnerWith />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
