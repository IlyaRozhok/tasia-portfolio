import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import star from "../assets/star.svg";
import tasiaMain from "../assets/tasia-main.jpg";
import Marquee from "./Marquee";

const PortfolioHero: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Function to scroll to portfolio section
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <motion.section
      id="home"
      ref={ref}
      className="relative min-h-screen bg-black text-white pt-20 overflow-hidden"
      style={{ opacity }}
    >
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Side - Large Image with Text Overlay */}
          <motion.div
            className="relative px-4 lg:px-10 order-1 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Large asterisk decoration */}
            <motion.div
              className="absolute z-10  -bottom-[20px] left-[18px] w-[50px] text-white text-8xl font-thin"
              style={{ y: y1, rotate }}
            >
              <img src={star} alt="star" />
            </motion.div>

            {/* Main Image Container - Full width on mobile */}
            <div className="relative">
              <motion.div
                className="relative w-full lg:max-w-[85%] h-[50vh] lg:h-[65vh] bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-sm overflow-hidden shadow-2xl"
                style={{ y: y2, scale }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800">
                  <img src={tasiaMain} alt="tasia-main" />
                </div>
              </motion.div>

              {/* Circular decoration with text - Hidden on mobile */}
              <motion.div
                className="absolute left-[-55px] top-[-50px] hidden lg:block"
                style={{ y: y3 }}
              >
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
                      fill="#c1121f"
                      fontSize="19"
                      className="font-rubik uppercase tracking-[4px]"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        OPEN • TO • NEW • OPPORTUNITIES •
                      </textPath>
                    </text>
                  </svg>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="w-full space-y-6 lg:space-y-8 order-2 lg:order-2 relative z-10 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main heading */}
            <motion.div
              className="space-y-3 lg:space-y-4 text-right lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h1 className="tracking-widest text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight uppercase">
                <span className="drop-shadow-[0.5px_0.5px_3px_rgb(255,255,255)]">
                  PROFESSIONAL
                </span>{" "}
                <span className="text-primary-500 drop-shadow-[1px_1px_4px_rgb(200,175,150)]">
                  MODEL
                </span>
              </motion.h1>
              <motion.h2 className="text-2xl sm:text-4xl lg:text-5xl drop-shadow-[0.5px_0.5px_3px_rgb(255,255,255)] font-normal text-white leading-tight uppercase">
                PORTFOLIO
              </motion.h2>
              <motion.h3 className="text-2xl sm:text-4xl lg:text-5xl drop-shadow-[0.5px_0.5px_3px_rgb(255,255,255)] font-normal text-white leading-tight uppercase">
                BY TAISIIA
              </motion.h3>
            </motion.div>

            {/* Description */}
            <motion.div
              className="max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.p className="text-white/70 leading-relaxed text-sm lg:text-base text-center lg:text-left">
                Welcome to my professional modeling journey. Through years of
                experience in fashion and editorial photography, I've had the
                privilege to work with talented photographers and creative teams
                across the industry. Each shoot tells a unique story, capturing
                moments of elegance, strength, and artistic expression.
              </motion.p>
              <motion.p className="text-white/70 leading-relaxed text-sm lg:text-base mt-2 text-center lg:text-left">
                This portfolio showcases my versatility as a model, from high
                fashion editorials to commercial campaigns. Thank you for taking
                the time to explore my work.
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-end lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="group mb-[20px] relative px-6 py-3 lg:px-8 lg:py-4 bg-transparent border-2 border-primary-500 text-primary-500 font-medium tracking-wider uppercase text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={scrollToPortfolio}
              >
                <span className="relative z-10">Explore Portfolio</span>
                <motion.div
                  className="absolute inset-0 bg-primary-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee with parallax */}
      <motion.div className="mt-2 relative -bottom-[40px]" style={{ y: y1 }}>
        <Marquee />
      </motion.div>
    </motion.section>
  );
};

export default PortfolioHero;
