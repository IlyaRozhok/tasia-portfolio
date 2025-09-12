import React from "react";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioHero from "./components/PortfolioHero";
import Marquee from "./components/Marquee";
import PortfolioGallery from "./components/PortfolioGallery";
import PortfolioBottom from "./components/PortfolioBottom";

function App() {
  return (
    <div className="App bg-black text-white">
      <PortfolioHeader />
      <PortfolioHero />
      <PortfolioGallery />
      <PortfolioBottom />
    </div>
  );
}

export default App;
