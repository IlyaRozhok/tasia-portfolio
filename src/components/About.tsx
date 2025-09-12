import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import tasiaAbout1 from "../assets/tasia-about-1.jpg";

const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform values for enhanced parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y5 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.9]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.05, 0.95]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.3]
  );

  return (
    <motion.section
      id="about"
      ref={ref}
      className="relative mt-5 min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-900 overflow-hidden"
      style={{ opacity }}
    >
      {/* Feminine animated background with soft parallax */}
      <div className="absolute inset-0">
        {/* Soft gradient layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-primary-500/3"
          style={{ y: y1 }}
        />

        {/* Soft floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-sm"
          style={{ y: y1, scale: 0.8 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-sm"
          style={{ y: y2, scale: 0.8 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-sm"
          style={{ y: y3, scale: 0.8 }}
        />

        {/* Soft flowing lines */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"
          style={{ y: y2, rotate: rotate2 }}
        />
      </div>

      {/* Main content with smooth animations */}
      <div className="relative z-10 container mx-auto px-4 py-6">
        {/* Section title with smooth animation */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center justify-center space-x-4 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-px bg-primary-500"></div>
            <span className="text-primary-500 text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <div className="w-16 h-px bg-primary-500"></div>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional
            <span className="block text-primary-500">Photo Model</span>
          </motion.h2>
        </motion.div>

        {/* Enhanced layout with larger photos and collaboration text */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Large photo */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -100 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ y: y1, scale: imageScale }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl w-full max-w-lg mx-auto lg:mx-0">
                <div className="aspect-[4/5] bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                  <img
                    src={tasiaAbout1}
                    alt="Professional photo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-primary-500/0 rounded-xl"
                  whileHover={{ borderColor: "rgba(234, 179, 8, 0.5)" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute -inset-2 border border-white/10 rounded-xl"></div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Main description */}
              <motion.div
                className="space-y-6"
                style={{ y: y3, opacity: textOpacity }}
              >
                <motion.p
                  className="text-lg text-white/80 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  I am located in Odessa and am open to new photo shoots. My
                  appearance is harmoniously revealed in light and summery
                  images, and the emphasis on lingerie photo shoots highlights
                  my femininity and figure aesthetics. At the same time, I
                  easily adapt to different photo shoot formats, maintaining the
                  softness and naturalness of the frame.
                </motion.p>
              </motion.div>

              {/* Collaboration section */}
              <motion.div
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 1.4 }}
                style={{ y: y4 }}
              >
                <h3 className="text-xl font-semibold text-primary-500 mb-4">
                  Open for Collaboration
                </h3>
                <p className="text-base text-white/80 leading-relaxed mb-4">
                  I'm available for modeling work with fashion brands, clothing
                  companies, and creative projects. Whether you need a model
                  for:
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Fashion editorials and lookbooks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Commercial campaigns and advertising
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Brand partnerships and collaborations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Creative photography projects
                  </li>
                </ul>
              </motion.div>

              {/* Stats section */}
              <motion.div
                className="grid grid-cols-2 gap-8 pt-6"
                style={{ y: y5, scale }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                {/* <motion.div className="text-center group">
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    Years Experience
                  </div>
                </motion.div> */}
                {/* <motion.div className="text-center group">
                  <div className="text-4xl font-bold text-primary-500 mb-2">
                    100+
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    Projects Completed
                  </div>
                </motion.div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </motion.section>
  );
};

export default About;
