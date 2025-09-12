import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioHero from "./components/PortfolioHero";
import SectionTransition from "./components/SectionTransition";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PortfolioGallery from "./components/PortfolioGallery";

function App() {
  return (
    <div className="App bg-black text-white">
      <PortfolioHeader />
      <PortfolioHero />
      <SectionTransition fromColor="from-black" toColor="to-neutral-900" />
      <About />
      <SectionTransition fromColor="from-neutral-900" toColor="to-black" />
      <Portfolio />
      <SectionTransition fromColor="from-black" toColor="to-neutral-900" />
      <Services />
      <SectionTransition fromColor="from-neutral-900" toColor="to-black" />
      <Contact />
    </div>
  );
}

export default App;
