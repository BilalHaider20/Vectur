import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import PurposeSection from "@/components/PurposeSection/PurposeSection";
import TestimonialsSection from "@/components/TestimonialSection/TestimonialSection";
import FeatureSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServicesSection from "@/components/ServciesSection";
import TechStackSection from "@/components/TechStackSection";
import HiringSection from "@/components/HiringSection.js/HiringSection";


export default function Home() {
  return (
    <section>
      <HeroSection />
      <PurposeSection />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection/>
      <FeatureSection />
       <HiringSection />
      <TestimonialsSection />
      <Contact />
    </section>
  )}