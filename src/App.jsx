import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CurrentFocus from "./components/CurrentFocus";
import Metrics from "./components/Metrics";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import ProblemSolving from "./components/ProblemSolving";
import Education from "./components/Education";
import KeyHighlights from "./components/KeyHighlights";
import JourneyTimeline from "./components/JourneyTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentFocus />
        <Metrics />
        <FeaturedProjects />
        <Skills />
        <ProblemSolving />
        <Education />
        <KeyHighlights />
        <JourneyTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
