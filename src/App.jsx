import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
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
        <Skills />
        <JourneyTimeline />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
