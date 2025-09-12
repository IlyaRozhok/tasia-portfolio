import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "Fashion Editorial",
    category: "Editorial",
    image: "/api/placeholder/400/600",
    description:
      "High-fashion editorial shoot showcasing elegance and sophistication. This collection represents the perfect blend of artistic vision and professional modeling expertise.",
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/api/placeholder/600/800?text=Editorial+${i + 1}`
    ),
  },
  {
    id: 2,
    title: "Commercial Campaign",
    category: "Commercial",
    image: "/api/placeholder/400/600",
    description:
      "Commercial campaign featuring modern lifestyle and contemporary fashion. Professional modeling with focus on brand storytelling and market appeal.",
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/api/placeholder/600/800?text=Commercial+${i + 1}`
    ),
  },
  {
    id: 3,
    title: "Artistic Portrait",
    category: "Portrait",
    image: "/api/placeholder/400/600",
    description:
      "Artistic portrait session exploring the depth of human expression. A collaborative work between photographer and model to create timeless imagery.",
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/api/placeholder/600/800?text=Portrait+${i + 1}`
    ),
  },
  {
    id: 4,
    title: "Beauty Campaign",
    category: "Beauty",
    image: "/api/placeholder/400/600",
    description:
      "Beauty campaign focusing on natural elegance and skincare. Professional modeling that highlights the authentic beauty and confidence of the modern woman.",
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/api/placeholder/600/800?text=Beauty+${i + 1}`
    ),
  },
  {
    id: 5,
    title: "Lifestyle Photography",
    category: "Lifestyle",
    image: "/api/placeholder/400/600",
    description:
      "Lifestyle photography capturing authentic moments and everyday elegance. A blend of candid and posed shots that tell a compelling story of modern living.",
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/api/placeholder/600/800?text=Lifestyle+${i + 1}`
    ),
  },
  {
    id: 6,
    title: "Fashion Lookbook",
    category: "Lookbook",
    image: "/api/placeholder/400/600",
    description:
      "Fashion lookbook featuring seasonal collections and trend-setting styles. Professional modeling that brings designer visions to life with style and grace.",
    gallery: Array.from(
      { length: 12 },
      (_, i) => `/api/placeholder/600/800?text=Lookbook+${i + 1}`
    ),
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

  const visibleItems = portfolioItems.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

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
                    {/* Image placeholder */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                      <div className="text-center text-white/60">
                        <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/30 rounded-full flex items-center justify-center">
                          <span className="text-2xl">📸</span>
                        </div>
                        <p className="text-sm">{item.title}</p>
                      </div>
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
                        <div className="aspect-[3/4] bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                          <div className="text-center text-white/60">
                            <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/30 rounded-full flex items-center justify-center">
                              <span className="text-xl">📸</span>
                            </div>
                            <p className="text-sm">{selectedItem.title}</p>
                            <p className="text-xs mt-1">Photo {index + 1}</p>
                          </div>
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
