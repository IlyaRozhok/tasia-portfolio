import React, { useState } from "react";
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
      { length: 10 },
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
      { length: 10 },
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
      { length: 10 },
      (_, i) => `/api/placeholder/600/800?text=Portrait+${i + 1}`
    ),
  },
];

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
