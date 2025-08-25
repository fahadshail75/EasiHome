import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';
import { viewportAnimation } from '../utils/animations';

const TestimonialCarousel = ({ 
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from our satisfied customers",
  testimonials = TESTIMONIALS,
  className = "",
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-brand-yellow fill-current' : 'text-surface-300'}
      />
    ));
  };

  return (
    <section className={`section bg-surface-100 ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          {...viewportAnimation}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-surface-600 hover:text-brand-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-surface-600 hover:text-brand-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="card p-8 md:p-12 text-center"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-brand-primaryTint rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote size={24} className="text-brand-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-surface-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-surface-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-surface-600">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-sm text-brand-primary font-medium">
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-brand-primary' 
                    : 'bg-surface-300 hover:bg-surface-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
