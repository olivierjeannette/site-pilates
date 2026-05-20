import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import LeadMagnet from "@/components/sections/LeadMagnet";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Pricing />
      <LeadMagnet />
      <CTA />
    </>
  );
}
