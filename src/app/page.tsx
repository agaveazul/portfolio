import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundController from "@/components/BackgroundController";
import LogoDisplay from "@/components/LogoDisplay";
import ScreenshotDisplay from "@/components/ScreenshotDisplay";

export default function Home() {
  return (
    <>
      <BackgroundController />
      <LogoDisplay />
      <ScreenshotDisplay />
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
