import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioHero from "./components/PortfolioHero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-black text-white">
      <PortfolioHeader />
      <PortfolioHero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
