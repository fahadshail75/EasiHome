import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

/**
 * ImageCarousel Component
 *
 * Props:
 * - images: Array<{ src: string; alt?: string; category?: string; location?: string; year?: string | number }>
 * - className?: string (extra classes for the outer wrapper)
 * - heightClass?: string (height utility classes for the viewport)
 * - roundedClass?: string (rounded utility classes)
 * - interval?: number (autoplay interval in ms, default 5000)
 * - autoPlay?: boolean (toggle autoplay, default true)
 * - pauseOnHover?: boolean (pause on hover, default true)
 * - showIndicators?: boolean (render dots, default true)
 * - showCaption?: boolean (render caption overlay, default true)
 * - onSlideChange?: (index: number) => void
 */
const ImageCarousel = ({
  images = [],
  className = "",
  heightClass = "h-60 sm:h-72 md:h-80 lg:h-[24rem]",
  roundedClass = "rounded-xl",
  interval = 5000,
  autoPlay = true,
  pauseOnHover = true,
  showIndicators = true,
  showCaption = true,
  onSlideChange,
}) => {
  const slides = useMemo(() => images || [], [images]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || paused || slides.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, slides.length, interval]);

  useEffect(() => {
    if (typeof onSlideChange === "function") onSlideChange(current);
  }, [current, onSlideChange]);

  if (!slides.length) return null;

  const handleGoTo = (index) => setCurrent(index % slides.length);

  return (
    <div
      className={`relative ${heightClass} ${roundedClass} overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 ${className}`}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project images"
    >
      {slides.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === current ? 1 : 0,
            scale: index === current ? 1 : 1.05,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          aria-hidden={index !== current}
        >
          <img
            src={image.src}
            alt={image.alt || `${image.category || ""} ${image.location || ""}`.trim() || "Project image"}
            className={`w-full h-full object-cover ${roundedClass}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {showCaption && (image.category || image.location || image.year) && (
            <div className="absolute bottom-4 left-4 text-white">
              {image.category && <h3 className="text-sm font-bold">{image.category}</h3>}
              {(image.location || image.year) && (
                <p className="text-xs opacity-80">
                  {[image.location, image.year].filter(Boolean).join(" • ")}
                </p>
              )}
            </div>
          )}
        </motion.div>
      ))}

      {(showIndicators || autoPlay) && (
        <div className="absolute bottom-4 right-4 flex gap-2 items-center">
          {showIndicators && (
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleGoTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}

          {autoPlay && (
            <button
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="ml-2 p-1 rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
