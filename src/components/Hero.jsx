import { useMemo } from "react";
import { motion } from "framer-motion";
import { Play, Shield, Clock, Award, Phone, Star } from "lucide-react";
import { staggerContainer, staggerItem } from "../utils/animations";
import { heroImages, getOptimizedImageUrl } from "../utils/images";
import Button from "./Button";
import ImageCarousel from "./ImageCarousel";

const Hero = ({
  title = "We Build, Renovate & Design Your Dream Home",
  subtitle = "Your Trusted Construction Partner",
  description = "From modern construction to elegant interiors, we deliver reliable, affordable, and high-quality solutions tailored to your needs.",
  primaryCTA = "Book Free Consultation",
  secondaryCTA = "Explore Services",
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
      { icon: Shield, text: "Licensed & Insured", subtext: "Fully certified" },
      { icon: Award, text: "500+ Projects", subtext: "Successfully completed" },
      { icon: Clock, text: "98% On-Time", subtext: "Delivery guarantee" },
      { icon: Star, text: "4.8/5 Rating", subtext: "Customer satisfaction" },
    ],
    []
  );

  return (
    <section className="relative min-h-[calc(100svh-5rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div
          className="absolute top-24 left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 25, 0], opacity: [0.3, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.4, 0.9, 0.5] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </div>

      {/* Hero Grid */}
      <div className="container-custom relative z-10 py-6 md:py-8 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-6 space-y-6"
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
              className="text-brand-primary font-medium text-sm md:text-base"
            >
              {subtitle}
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight bg-gradient-to-r from-brand-primary to-brand-yellow bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-sm md:text-base text-surface-600 max-w-lg"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                variant="primary"
                size="md"
                icon={Phone}
                onClick={primaryAction}
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-6 py-2.5 text-sm sm:text-base shadow hover:shadow-lg transition-all"
              >
                {primaryCTA}
              </Button>
              <Button
                variant="outline"
                size="md"
                icon={Play}
                iconPosition="right"
                onClick={secondaryAction}
                className="border border-surface-300 text-surface-700 hover:border-brand-primary hover:text-brand-primary bg-white hover:bg-brand-primaryTint/20 transition-all px-6 py-2.5"
              >
                {secondaryCTA}
              </Button>
            </motion.div>

            {/* Trust Badges (cards) */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="flex items-center gap-2 p-2.5 bg-white/70 backdrop-blur-md rounded-lg border border-surface-200 shadow-sm hover:shadow-md transition-all"
                >
                  <badge.icon size={16} className="text-brand-primary" />
                  <div>
                    <div className="font-semibold text-surface-900 text-[11px] sm:text-xs">
                      {badge.text}
                    </div>
                    <div className="text-[10px] text-surface-600">
                      {badge.subtext}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 relative"
          >
            <ImageCarousel images={carouselImages} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
