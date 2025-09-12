import React from "react";
import star from "../assets/star.svg";
import Marquee from "./Marquee";

const PortfolioHero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side - Large Image with Text Overlay */}
          <div className="relative px-10">
            {/* Large asterisk decoration */}

            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute z-10 -left-[25px] top-[50px] w-[50px] text-white text-8xl font-thin">
                <img src={star} alt="star" />
              </div>
              <div className="relative max-w-[85%] h-[65vh] bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-sm overflow-hidden shadow-2xl">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-4xl font-bold">T</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular decoration with text */}
              <div className="absolute -bottom-[120px] -left-[25px]">
                <span className="font-light transform">
                  <svg viewBox="0 0 220 240" className="w-[130px] h-64">
                    <defs>
                      <path
                        id="circlePath"
                        d="
              M 100, 100
              m -75, 0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0
            "
                      />
                    </defs>
                    <text
                      fill="white"
                      fontSize="19"
                      className="font-rubik uppercase tracking-[4px]"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        OPEN • TO • NEW • OPPORTUNITIES •
                      </textPath>
                    </text>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full space-y-8">
            {/* Two dots pagination */}
            {/* <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 border border-white rounded-full"></div>
            </div> */}

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="tracking-widest text-4xl lg:text-5xl font-normal text-white leading-tight uppercase">
                PROFESSIONAL <span className="text-[#C8AF96]">MODEL</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight uppercase">
                PORTFOLIO
              </h2>
              <h3 className="text-4xl lg:text-5xl font-normal text-white leading-tight uppercase">
                BY TASIA <span className="inline-block ml-2">✨</span>
              </h3>
            </div>

            {/* Description */}
            <div className="max-w-lg">
              <p className="text-white/70 leading-relaxed text-sm">
                Welcome to my professional modeling journey. Through years of
                experience in fashion and editorial photography, I've had the
                privilege to work with talented photographers and creative teams
                across the industry. Each shoot tells a unique story, capturing
                moments of elegance, strength, and artistic expression.
              </p>
              <p className="text-white/70 leading-relaxed text-sm mt-2">
                This portfolio showcases my versatility as a model, from high
                fashion editorials to commercial campaigns. Thank you for taking
                the time to explore my work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 relative -bottom-[40px]">
        <Marquee />
      </div>
    </section>
  );
};

export default PortfolioHero;
