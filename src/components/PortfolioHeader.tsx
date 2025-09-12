import React, { useState, useEffect } from "react";

const PortfolioHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-t-2 border-b-2 border-white ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="w-full px-6 py-4">
        <div className="flex items-center justify-center w-full">
          {/* Full Width Navigation */}
          <div className="hidden md:flex items-center justify-around space-x-12 w-full">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium relative group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-500 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium relative group"
            >
              GALLERY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium relative group"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary-500 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-md rounded-lg p-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-white hover:text-primary-500 transition-colors duration-200 text-sm font-medium"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PortfolioHeader;
