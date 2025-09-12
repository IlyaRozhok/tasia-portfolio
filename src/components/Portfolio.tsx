import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import portfolio photos
import cowboy1 from "../assets/portfolio/cowboy/cowboy-1.jpg";
import cowboy2 from "../assets/portfolio/cowboy/cowboy-2.jpg";
import cowboy3 from "../assets/portfolio/cowboy/cowboy-3.jpg";
import cowboy4 from "../assets/portfolio/cowboy/cowboy-4.jpg";
import cowboy5 from "../assets/portfolio/cowboy/cowboy-5.jpg";
import cowboy6 from "../assets/portfolio/cowboy/cowboy-6.jpg";
import cowboy7 from "../assets/portfolio/cowboy/cowboy-7.jpg";
import cowboy8 from "../assets/portfolio/cowboy/cowboy-8.jpg";
import cowboy9 from "../assets/portfolio/cowboy/cowboy-9.jpg";
import cowboy10 from "../assets/portfolio/cowboy/cowboy-10.jpg";
import cowboy11 from "../assets/portfolio/cowboy/cowboy-11.jpg";
import cowboy12 from "../assets/portfolio/cowboy/cowboy-12.jpg";

import dress1 from "../assets/portfolio/dress/dress-1.jpg";
import dress2 from "../assets/portfolio/dress/dress-2.jpg";
import dress3 from "../assets/portfolio/dress/dress-3.jpg";
import dress4 from "../assets/portfolio/dress/dress-4.jpg";
import dress5 from "../assets/portfolio/dress/dress-5.jpg";
import dress6 from "../assets/portfolio/dress/dress-6.jpg";
import dress7 from "../assets/portfolio/dress/dress-7.jpg";
import dress8 from "../assets/portfolio/dress/dress-8.jpg";
import dress9 from "../assets/portfolio/dress/dress-9.jpg";
import dress10 from "../assets/portfolio/dress/dress-10.jpg";
import dress11 from "../assets/portfolio/dress/dress-11.jpg";
import dress12 from "../assets/portfolio/dress/dress-12.jpg";

import jeansT1 from "../assets/portfolio/jeans-t/jeans-t-1.jpg";
import jeansT2 from "../assets/portfolio/jeans-t/jeans-t-2.jpg";
import jeansT3 from "../assets/portfolio/jeans-t/jeans-t-3.jpg";
import jeansT4 from "../assets/portfolio/jeans-t/jeans-t-4.jpg";
import jeansT5 from "../assets/portfolio/jeans-t/jeans-t-5.jpg";
import jeansT6 from "../assets/portfolio/jeans-t/jeans-t-6.jpg";
import jeansT7 from "../assets/portfolio/jeans-t/jeans-t-7.jpg";
import jeansT8 from "../assets/portfolio/jeans-t/jeans-t-8.jpg";
import jeansT9 from "../assets/portfolio/jeans-t/jeans-t-9.jpg";
import jeansT10 from "../assets/portfolio/jeans-t/jeans-t-10.jpg";
import jeansT11 from "../assets/portfolio/jeans-t/jeans-t-11.jpg";
import jeansT12 from "../assets/portfolio/jeans-t/jeans-t-12.jpg";

import lingerie1 from "../assets/portfolio/lingerie/lingerie-1.jpg";
import lingerie2 from "../assets/portfolio/lingerie/lingerie-2.jpg";
import lingerie3 from "../assets/portfolio/lingerie/lingerie-3.jpg";
import lingerie4 from "../assets/portfolio/lingerie/lingerie-4.jpg";
import lingerie5 from "../assets/portfolio/lingerie/lingerie-5.jpg";
import lingerie6 from "../assets/portfolio/lingerie/lingerie-6.jpg";
import lingerie7 from "../assets/portfolio/lingerie/lingerie-7.jpg";
import lingerie8 from "../assets/portfolio/lingerie/lingerie-8.jpg";
import lingerie9 from "../assets/portfolio/lingerie/lingerie-9.jpg";
import lingerie10 from "../assets/portfolio/lingerie/lingerie-10.jpg";
import lingerie11 from "../assets/portfolio/lingerie/lingerie-11.jpg";
import lingerie12 from "../assets/portfolio/lingerie/lingerie-12.jpg";

import swim1 from "../assets/portfolio/swim/swim-1.jpg";
import swim2 from "../assets/portfolio/swim/swim-2.jpg";
import swim3 from "../assets/portfolio/swim/swim-3.jpg";
import swim4 from "../assets/portfolio/swim/swim-4.jpg";
import swim5 from "../assets/portfolio/swim/swim-5.jpg";
import swim6 from "../assets/portfolio/swim/swim-6.jpg";
import swim7 from "../assets/portfolio/swim/swim-7.jpg";
import swim8 from "../assets/portfolio/swim/swim-8.jpg";
import swim9 from "../assets/portfolio/swim/swim-9.jpg";
import swim10 from "../assets/portfolio/swim/swim-10.jpg";
import swim11 from "../assets/portfolio/swim/swim-11.jpg";
import swim12 from "../assets/portfolio/swim/swim-12.jpg";

import suit1 from "../assets/portfolio/suit/suit_1.jpg";
import suit2 from "../assets/portfolio/suit/suit_2.jpg";
import suit3 from "../assets/portfolio/suit/suit_3.jpg";
import suit4 from "../assets/portfolio/suit/suit_4.jpg";
import suit5 from "../assets/portfolio/suit/suit_5.jpg";
import suit6 from "../assets/portfolio/suit/suit_6.jpg";
import suit7 from "../assets/portfolio/suit/suit_7.jpg";
import suit8 from "../assets/portfolio/suit/suit_8.jpg";
import suit9 from "../assets/portfolio/suit/suit_9.jpg";
import suit10 from "../assets/portfolio/suit/suit_10.jpg";
import suit11 from "../assets/portfolio/suit/suit_11.jpg";
import suit12 from "../assets/portfolio/suit/suit_12.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  gallery: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Cowboy Style",
    category: "Fashion",
    image: cowboy1,
    description:
      "Western-inspired fashion shoot showcasing rugged elegance and contemporary cowboy aesthetics. This collection blends traditional western elements with modern fashion sensibilities.",
    gallery: [
      cowboy1,
      cowboy2,
      cowboy3,
      cowboy4,
      cowboy5,
      cowboy6,
      cowboy7,
      cowboy8,
      cowboy9,
      cowboy10,
      cowboy11,
      cowboy12,
    ],
  },
  {
    id: 2,
    title: "Elegant Dresses",
    category: "Editorial",
    image: dress1,
    description:
      "Sophisticated dress collection featuring elegant silhouettes and refined styling. Professional modeling that highlights the beauty and grace of contemporary fashion design.",
    gallery: [
      dress1,
      dress2,
      dress3,
      dress4,
      dress5,
      dress6,
      dress7,
      dress8,
      dress9,
      dress10,
      dress11,
      dress12,
    ],
  },
  {
    id: 3,
    title: "Casual Jeans & T-Shirts",
    category: "Lifestyle",
    image: jeansT1,
    description:
      "Casual lifestyle shoot featuring everyday fashion essentials. This collection captures the effortless style and comfort of contemporary casual wear.",
    gallery: [
      jeansT1,
      jeansT2,
      jeansT3,
      jeansT4,
      jeansT5,
      jeansT6,
      jeansT7,
      jeansT8,
      jeansT9,
      jeansT10,
      jeansT11,
      jeansT12,
    ],
  },
  {
    id: 4,
    title: "Intimate Lingerie",
    category: "Intimate",
    image: lingerie1,
    description:
      "Delicate lingerie collection showcasing feminine elegance and sophisticated intimate wear. Professional modeling with focus on comfort, beauty, and confidence.",
    gallery: [
      lingerie1,
      lingerie2,
      lingerie3,
      lingerie4,
      lingerie5,
      lingerie6,
      lingerie7,
      lingerie8,
      lingerie9,
      lingerie10,
      lingerie11,
      lingerie12,
    ],
  },
  {
    id: 5,
    title: "Swimwear Collection",
    category: "Swimwear",
    image: swim1,
    description:
      "Summer swimwear collection featuring contemporary beach and pool fashion. Professional modeling that celebrates body confidence and summer style.",
    gallery: [
      swim1,
      swim2,
      swim3,
      swim4,
      swim5,
      swim6,
      swim7,
      swim8,
      swim9,
      swim10,
      swim11,
      swim12,
    ],
  },
  {
    id: 6,
    title: "Professional Suits",
    category: "Business",
    image: suit1,
    description:
      "Professional business attire collection showcasing power dressing and corporate elegance. Sophisticated modeling that embodies confidence and professional excellence.",
    gallery: [
      suit1,
      suit2,
      suit3,
      suit4,
      suit5,
      suit6,
      suit7,
      suit8,
      suit9,
      suit10,
      suit11,
      suit12,
    ],
  },
];

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(3); // Start from original items (after 3 duplicates)
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create infinite carousel by duplicating items
  // Always duplicate 3 items for smooth transitions on all screen sizes
  const infiniteItems = [
    ...portfolioItems.slice(-3), // Last 3 items at the beginning
    ...portfolioItems, // Original items
    ...portfolioItems.slice(0, 3), // First 3 items at the end
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Handle infinite loop
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        if (currentIndex >= portfolioItems.length + 3) {
          // At the end, jump to beginning without animation
          setCurrentIndex(3);
        } else if (currentIndex < 3) {
          // At the beginning, jump to end without animation
          setCurrentIndex(portfolioItems.length + 2);
        }
        setIsTransitioning(false);
      }, 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning]);

  // Reset position when itemsPerView changes
  useEffect(() => {
    setCurrentIndex(3); // Start from original items (after 3 duplicates)
  }, [itemsPerView]);

  // Check if card should be visible on mobile
  const isCardVisible = (index: number) => {
    if (itemsPerView === 1) {
      // On mobile, only show the current card
      return index === currentIndex;
    }
    // On desktop/tablet, show all cards in view
    return true;
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-900 py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Soft gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/2 via-transparent to-primary-500/2" />

        {/* Soft floating elements */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-white/3 to-transparent rounded-full blur-sm" />
        <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-primary-500/5 to-transparent rounded-full blur-sm" />
        <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-gradient-to-br from-white/4 to-transparent rounded-full blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-primary-500" />
            <span className="text-primary-500 text-sm font-medium tracking-wider uppercase">
              Portfolio
            </span>
            <div className="w-16 h-px bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Featured
            <span className="block text-primary-500">Work</span>
          </h2>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Explore my professional modeling portfolio featuring editorial,
            commercial, and artistic photography.
          </p>
        </motion.div>

        {/* Portfolio Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-8 gap-0"
              animate={{ x: -currentIndex * (100 / itemsPerView) + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {infiniteItems.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  className="group cursor-pointer flex-shrink-0"
                  style={{
                    width: `${100 / itemsPerView}%`,
                    display: isCardVisible(index) ? "block" : "none",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => openModal(item)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-neutral-800 to-neutral-900">
                    {/* Main Image */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-primary-500 text-sm font-medium tracking-wider uppercase">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold mt-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          Click to view details
                        </p>
                      </div>
                    </div>

                    {/* Decorative frame */}
                    <div className="absolute -inset-2 border border-white/10 rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-gradient-to-br from-neutral-900 to-black rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-neutral-800 to-neutral-900 p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-primary-500 text-sm font-medium tracking-wider uppercase">
                      {selectedItem.category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mt-1">
                      {selectedItem.title}
                    </h2>
                    <p className="text-white/70 text-sm mt-2">
                      {selectedItem.gallery.length} photos
                    </p>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Gallery Content */}
              <div className="h-[calc(95vh-120px)] overflow-y-auto">
                <div className="p-6">
                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-white/80 text-lg leading-relaxed max-w-4xl">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Photo Gallery Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedItem.gallery.map((photo, index) => (
                      <motion.div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-neutral-800 to-neutral-900"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={photo}
                            alt={`${selectedItem.title} - Photo ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Photo Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              {selectedItem.title} #{index + 1}
                            </span>
                            <span className="text-xs text-white/60">
                              {selectedItem.category}
                            </span>
                          </div>
                        </div>

                        {/* Decorative frame */}
                        <div className="absolute -inset-1 border border-white/10 rounded-xl" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col justify-end sm:flex-row gap-4 mt-12 pt-8 border-t border-white/10">
                    <motion.button
                      className="px-8 py-3 bg-primary-500 text-black font-medium tracking-wider uppercase rounded-lg hover:bg-primary-400 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Portfolio
                    </motion.button>
                    <motion.button
                      className="px-8 py-3 border-2 border-white/20 text-white font-medium tracking-wider uppercase rounded-lg hover:border-white/40 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact for Booking
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
