import React from "react";

const Marquee: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-8 md:py-12 ">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Main marquee container */}
      <div className="relative">
        {/* First marquee */}
        <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-16">
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              TAISIIA FASHION MODEL
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-primary-500">
              PROFESSIONAL PORTFOLIO
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              ELEGANCE & BEAUTY
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-primary-500">
              ARTISTIC EXPRESSION
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              FASHION PHOTOGRAPHY
            </span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-16 ml-4 md:ml-8 lg:ml-16">
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              TAISIIA FASHION MODEL
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-primary-500">
              PROFESSIONAL PORTFOLIO
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              ELEGANCE & BEAUTY
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-primary-500">
              ARTISTIC EXPRESSION
            </span>
            <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider text-white">
              FASHION PHOTOGRAPHY
            </span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Floating dots */}
      <div className="absolute top-1/2 left-8 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary-500/30 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Marquee;
