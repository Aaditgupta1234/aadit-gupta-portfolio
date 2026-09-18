import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import JourneyTimeline from "./components/JourneyTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Services />
        <Skills />
        <JourneyTimeline />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
