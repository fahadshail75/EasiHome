import { useMemo } from "react";
import { motion } from "framer-motion";
import { Play, Shield, Clock, Award, Phone, Star } from "lucide-react";
import { staggerContainer, staggerItem } from "../utils/animations";
import { heroImages, getOptimizedImageUrl } from "../utils/images";
import Button from "./Button";
import ImageCarousel from "./ImageCarousel";

const Hero = ({
  title = "Transform Your Space Into Art",
  subtitle = "Interior Design • 3D Visualization • Space Planning",
  description = "Create stunning interiors with innovative layouts, colour harmonies, and design technologies — all without switching between designers.",
  primaryCTA = "Start Free Consultation",
  secondaryCTA = "How It Works",
  primaryAction,
  secondaryAction,
  discount,
}) => {
  const carouselImages = useMemo(() => {
    const list = [heroImages.featuredProject, ...(heroImages.alternatives || [])];
    return list.map((img) => ({
      src: getOptimizedImageUrl(img.src, 1200, 85),
      alt: img.alt,
      // Show title as the caption category
      category: img.title,
    }));
  }, []);

  const trustBadges = useMemo(
    () => [
      { icon: Shield, text: "500+", subtext: "Interior Projects", gradient: "from-blue-500 via-cyan-500 to-teal-500" },
      { icon: Award, text: "99%", subtext: "Client Satisfaction", gradient: "from-purple-500 via-pink-500 to-rose-500" },
      { icon: Clock, text: "4.9/5", subtext: "Average Rating", gradient: "from-yellow-500 via-orange-500 to-red-500" },
      { icon: Star, text: "8+", subtext: "Years Experience", gradient: "from-green-500 via-emerald-500 to-teal-500" },
    ],
    []
  );

  return (
    <section className="relative min-h-[calc(100svh-8rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute top-24 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 25, 0], opacity: [0.3, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-4 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 bg-brand-yellow/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.4, 0.9, 0.5] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </div>

      {/* Hero Grid */}
      <div className="container-custom relative z-10 py-8 sm:py-6 md:py-8 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            {discount && (
              <motion.div variants={staggerItem} whileHover={{ scale: 1.05 }}>
                <span className="px-4 py-1.5 bg-brand-yellow text-brand-primary rounded-full text-xs font-semibold shadow">
                  🎉 {discount}
                </span>
              </motion.div>
            )}

            <motion.p
              variants={staggerItem}
              className="text-black font-medium text-xs sm:text-sm md:text-base"
            >
              {subtitle}
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold leading-tight text-black px-4 sm:px-0"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed px-4 sm:px-0"
            >
              We create functional yet artistic interiors with innovative layouts and harmonious color schemes that reflect your unique style.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-row gap-3 pt-2 px-4 sm:px-0 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="sm"
                icon={Phone}
                onClick={primaryAction}
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-4 py-2 text-sm shadow hover:shadow-lg transition-all"
              >
                {primaryCTA}
              </Button>
              <Button
                variant="outline"
                size="sm"
                icon={Play}
                iconPosition="right"
                onClick={secondaryAction}
                className="border border-surface-300 text-surface-700 hover:border-brand-primary hover:text-brand-primary bg-white hover:bg-brand-primaryTint/20 transition-all px-4 py-2"
              >
                {secondaryCTA}
              </Button>
            </motion.div>

            {/* Trust Stats - Inline */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 px-4 sm:px-0 text-sm"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <badge.icon size={16} className="text-brand-primary" />
                  <span className="font-semibold text-surface-900">{badge.text}</span>
                  <span className="text-surface-600 text-xs">{badge.subtext}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 relative mt-8 lg:mt-0 px-4 sm:px-0"
          >
            <div className="max-w-md mx-auto lg:max-w-none">
              <ImageCarousel images={carouselImages} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
