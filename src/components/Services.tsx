import React, { useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Brand Photography",
    description:
      "Professional modeling for fashion brands, lifestyle products, and commercial campaigns.",
    features: [
      "Fashion Editorial",
      "Product Photography",
      "Brand Campaigns",
      "Social Media Content",
    ],
    price: "From $500/session",
    color: "from-slate-700/50 to-gray-900/90",
  },
  {
    id: 2,
    title: "Restaurant & Food",
    description:
      "Elegant modeling for restaurant menus, food photography, and culinary brand campaigns.",
    features: [
      "Menu Photography",
      "Food Styling",
      "Restaurant Campaigns",
      "Culinary Brands",
    ],
    price: "From $400/session",
    color: "from-slate-700/50 to-gray-900/90",
  },
  {
    id: 3,
    title: "Lifestyle & Events",
    description:
      "Versatile modeling for lifestyle brands, events, and personal brand development.",
    features: [
      "Event Modeling",
      "Lifestyle Brands",
      "Personal Branding",
      "Corporate Events",
    ],
    price: "From $350/session",
    color: "from-slate-700/50 to-gray-900/90",
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      id="services"
      ref={ref}
      className="relative min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-20 overflow-hidden"
      style={{ opacity }}
    >
      {/* Feminine animated background */}
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
          style={{ y: y1, rotate }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent"
          style={{ y: y2, rotate: -rotate }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-primary-500" />
            <span className="text-primary-500 text-sm font-medium tracking-wider uppercase">
              Services
            </span>
            <div className="w-16 h-px bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Professional
            <span className="block text-primary-500">Modeling Services</span>
          </h2>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Specialized modeling services for brands, restaurants, and lifestyle
            campaigns. Professional, reliable, and creative solutions for your
            business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <motion.div
                className={`relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br ${service.color} backdrop-blur-sm border border-white/10`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/15 rounded-full" />
                </div>

                <div className="relative p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          activeService === service.id
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0.7, x: 0 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 font-bold text-lg">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -inset-2 border border-white/5 rounded-2xl" />
                <div className="absolute -inset-1 border border-primary-500/20 rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Professional Modeling?
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              With years of experience in fashion, commercial, and lifestyle
              modeling, I bring professionalism, creativity, and reliability to
              every project. From high-end fashion brands to local restaurants,
              I help businesses create compelling visual content that drives
              results.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  5+
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  100+
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Successful Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  24/7
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Professional Support
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
