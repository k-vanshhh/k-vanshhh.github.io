import { personalData } from "@/utils/data/personal-data";
import AboutGrid from "./components/homepage/about-grid";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutGrid />
      <Experience />
      <Projects />
      <ContactSection />
    </div>
  )
};