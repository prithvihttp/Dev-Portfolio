import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Stats } from "./components/portfolio/Stats";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Projects } from "./components/portfolio/Projects";
import { Experience } from "./components/portfolio/Experience";
import { Certifications } from "./components/portfolio/Certifications";
import { GitHubActivity } from "./components/portfolio/GitHubActivity";
import { Testimonials } from "./components/portfolio/Testimonials";
import { Resume } from "./components/portfolio/Resume";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <GitHubActivity />
      <Testimonials />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;