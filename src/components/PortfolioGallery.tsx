import React from "react";

const PortfolioGallery: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Three Images */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image 1 */}
            <div className="relative">
              {/* Circular decoration */}
              <div className="absolute -left-16 top-8 w-32 h-32 border border-white rounded-full flex items-center justify-center opacity-30">
                <span className="text-white text-xs font-medium transform -rotate-12">
                  FASHION
                </span>
              </div>

              <div className="w-full h-64 bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-2xl font-bold">T</span>
                    </div>
                    <p className="text-white/60 text-sm">Fashion Shoot</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-white text-sm font-medium">02</div>
                <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">FASHION</span>
                  <span className="text-xs opacity-60">Canon EF-S 18-55mm</span>
                </button>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-2xl font-bold">T</span>
                    </div>
                    <p className="text-white/60 text-sm">Editorial</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-white text-sm font-medium">03</div>
                <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">EDITORIAL</span>
                  <span className="text-xs opacity-60">Canon EF-S 18-55mm</span>
                </button>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-2xl font-bold">T</span>
                    </div>
                    <p className="text-white/60 text-sm">Portrait</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-white text-sm font-medium">04</div>
                <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">PORTRAIT</span>
                  <span className="text-xs opacity-60">Canon EF-S 18-55mm</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Vertical Text */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="space-y-8">
              {/* Vertical text */}
              <div className="writing-mode-vertical text-white text-lg font-medium space-y-4">
                <div>2025</div>
                <div>PORTFOLIO</div>
                <div>SHOWCASE</div>
              </div>

              {/* Progress bars */}
              <div className="space-y-2">
                <div className="w-1 h-16 bg-white"></div>
                <div className="w-1 h-12 border border-white"></div>
                <div className="w-1 h-8 border border-white"></div>
              </div>

              {/* Scroll indicator */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
