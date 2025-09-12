import React from "react";

const PortfolioBottom: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Text */}
          <div className="space-y-8">
            {/* Main heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              TASIA'S MODELING JOURNEY
            </h2>

            {/* Vertical text */}
            <div className="writing-mode-vertical text-white text-lg font-medium">
              TASIA
            </div>

            {/* Image */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-black text-3xl font-bold">T</span>
                    </div>
                    <p className="text-white/60 text-sm">Professional Model</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-white text-sm font-medium">05</div>

              <div className="mt-4 space-y-2">
                <div className="text-white text-sm font-medium">MONDAY</div>
                <div className="text-white/60 text-sm">December 31, 2024</div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8">
            {/* Upward arrow */}
            <div className="flex justify-end">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-200">
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
                <span className="font-medium">PORTFOLIO</span>
              </button>
            </div>

            {/* Main text */}
            <div className="max-w-md ml-auto">
              <p className="text-white/80 leading-relaxed text-lg">
                "Every photograph tells a story, every pose captures a moment,
                and every shoot is an opportunity to create something beautiful.
                Modeling is not just about looking good—it's about expressing
                emotion, character, and artistry through the lens."
              </p>
            </div>

            {/* Attribution */}
            <div className="flex justify-end items-center space-x-2">
              <span className="text-white/60 text-sm">QUOTE BY TASIA</span>
              <div className="w-6 h-6 border border-white rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom decorations */}
            <div className="flex justify-end items-end space-x-4">
              <div className="text-white text-2xl font-light opacity-30">*</div>
              <div className="text-white/60 text-sm">Made with passion.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioBottom;
