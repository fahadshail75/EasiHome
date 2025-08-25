import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Play, Pause, Eye } from 'lucide-react';
import { projectImages, getOptimizedImageUrl } from '../utils/images';

const ProjectCarousel3D = ({
  variant = 'cylinder', // 'cylinder', 'sphere', 'helix'
  autoPlayInterval = 4000,
  showControls = true,
  showIndicators = true,
  cardAspectRatio = '4:5',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const containerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Advanced motion values for smooth interactions
  const rotationY = useMotionValue(0);
  const smoothRotation = useSpring(rotationY, { 
    stiffness: 100, 
    damping: 20, 
    mass: 0.8 
  });
  
  const [dimensions, setDimensions] = useState({
    radius: 420,
    cardWidth: 320,
    cardHeight: 400,
    spacing: 45
  });

  // Resize-aware radius for better visibility across screens
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      const h = entry.contentRect.height;
  const base = Math.min(w, h);
  // Larger radius for bigger cards and clearer gaps
  const r = Math.max(380, Math.min(700, base * 0.50));
      setRadius(r);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Enhanced project data with performance optimizations
  const projects = useMemo(() =>
    projectImages.completed.map((project, index) => {
      const area = 1500 + (index * 200) % 1500;
      const budgetL = 20 + (index * 8) % 40;
      const completion = 85 + (index * 3) % 15; // completion percentage
      const rating = 4.2 + (index * 0.15) % 0.8;
      
      return {
        ...project,
        id: index + 1,
        title: project.category,
        description: `Premium ${project.category?.toLowerCase?.()} in ${project.location}`,
        completionDate: project.year,
        area: `${area} Sq Ft`,
        budget: `₹${budgetL}L`,
        completion: `${completion}%`,
        rating: Math.round(rating * 10) / 10,
        src: getOptimizedImageUrl(project.src, 800, 85),
        thumbnail: getOptimizedImageUrl(project.src, 400, 70),
        team: `Team ${String.fromCharCode(65 + (index % 5))}`,
        duration: `${4 + (index % 8)} months`,
        type: ['Residential', 'Commercial', 'Renovation', 'Interior'][index % 4],
        status: 'Completed',
        featured: index < 3,
      };
    }), []
  );

  const count = projects.length || 1;

  // Advanced responsive calculations
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const { width, height } = rect;
    
    // Adaptive sizing based on container and screen
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1024;
    
    const newDimensions = {
      radius: isMobile ? Math.max(280, width * 0.35) : 
              isTablet ? Math.max(360, width * 0.4) : 
              Math.max(420, Math.min(width * 0.45, 580)),
      cardWidth: isMobile ? 260 : isTablet ? 300 : 340,
      cardHeight: isMobile ? 340 : isTablet ? 380 : 420,
      spacing: isMobile ? 35 : isTablet ? 40 : 45,
    };
    
    setDimensions(newDimensions);
    setDragConstraints({
      left: -width / 2,
      right: width / 2
    });
  }, []);

  // Responsive resize observer
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    updateDimensions();
    
    return () => resizeObserver.disconnect();
  }, [updateDimensions]);

  // Enhanced autoplay with smart pausing
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion || count <= 1 || isHovered) return;
    if (document.hidden) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, count, prefersReducedMotion, isHovered, autoPlayInterval]);

  // Update rotation based on current index
  useEffect(() => {
    const targetRotation = -currentIndex * (360 / count);
    rotationY.set(targetRotation);
  }, [currentIndex, count, rotationY]);

  // Visibility and interaction handlers
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoPlaying(false);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Navigation functions with enhanced UX
  const navigateToIndex = useCallback((index, pauseDuration = 8000) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, pauseDuration);
  }, []);

  const nextProject = useCallback(() => {
    navigateToIndex((currentIndex + 1) % count);
  }, [currentIndex, count, navigateToIndex]);

  const prevProject = useCallback(() => {
    navigateToIndex((currentIndex - 1 + count) % count);
  }, [currentIndex, count, navigateToIndex]);

  const goToProject = useCallback((index) => {
    navigateToIndex(index);
  }, [navigateToIndex]);

  // Advanced card positioning calculations
  const getCardTransform = useCallback((index) => {
    const baseAngle = (index * 360) / count;
    const distanceFromActive = Math.abs(index - currentIndex);
    const minDistance = Math.min(distanceFromActive, count - distanceFromActive);
    
    // Dynamic spacing based on proximity to active card
    const spacingMultiplier = variant === 'helix' ? 1.5 : 1;
    const angleSpacing = dimensions.spacing * spacingMultiplier;
    
    // Create organic, non-uniform spacing
    let adjustedAngle = baseAngle;
    if (minDistance === 1) {
      const direction = ((index - currentIndex + count) % count) < count / 2 ? 1 : -1;
      adjustedAngle += direction * angleSpacing;
    }
    
    // Helix variant adds vertical offset
    const yOffset = variant === 'helix' ? 
      Math.sin((index * Math.PI * 2) / count) * 30 : 0;
    
    // Sphere variant uses spherical coordinates
    if (variant === 'sphere') {
      const phi = (index * Math.PI * 2) / count;
      const theta = Math.PI / 2 + Math.sin(phi) * 0.3;
      return {
        transform: `rotateY(${adjustedAngle}deg) translateZ(${dimensions.radius}px) translateY(${Math.sin(theta) * 20}px)`,
        yOffset: Math.sin(theta) * 20,
      };
    }
    
    return {
      transform: `rotateY(${adjustedAngle}deg) translateZ(${dimensions.radius}px) translateY(${yOffset}px)`,
      yOffset,
    };
  }, [count, currentIndex, dimensions.radius, dimensions.spacing, variant]);  return (
    <div
      ref={containerRef}
  className="relative w-full h-[480px] sm:h-[560px] md:h-[620px] overflow-hidden"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') nextProject();
        if (e.key === 'ArrowLeft') prevProject();
      }}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Project highlights"
    >
      {/* Carousel Ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
        animate={prefersReducedMotion ? {} : { rotateY: -currentIndex * (360 / count) }}
        transition={prefersReducedMotion ? undefined : { type: 'spring', stiffness: 70, damping: 15, mass: 0.9 }}
      >
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          const distanceFromActive = Math.abs(index - currentIndex);
          const minDistance = Math.min(distanceFromActive, count - distanceFromActive);
          const cardTransform = getCardTransform(index);
          
          // Calculate visibility and styling based on position
          const visibility = minDistance > 2 ? 'hidden' : 'visible';
          const opacity = isActive ? 1 : minDistance === 1 ? 0.85 : 0.6;
          const scale = isActive ? 1.05 : minDistance === 1 ? 0.95 : 0.85;
          const zIndex = 100 - minDistance;

          return (
            <motion.div
              key={project.id}
              className="absolute will-change-transform"
              style={{
                ...cardTransform,
                transformStyle: 'preserve-3d',
                visibility,
                zIndex,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity, scale }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.6, 
                ease: 'easeOut',
                delay: index * 0.02
              }}
            >
              {/* Enhanced project card */}
              <motion.div
                whileHover={prefersReducedMotion ? {} : { 
                  rotateX: -3, 
                  rotateY: 3, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`
                  relative rounded-3xl overflow-hidden backdrop-blur-md
                  transition-all duration-500 cursor-pointer group
                  ${isActive 
                    ? 'shadow-2xl ring-4 ring-blue-500/30 ring-offset-4 ring-offset-white/50' 
                    : 'shadow-xl ring-2 ring-white/40 ring-offset-2 ring-offset-white/30'
                  }
                `}
                style={{
                  width: dimensions.cardWidth,
                  height: dimensions.cardHeight,
                  transform: `rotateY(${-(index * 360) / count}deg)`,
                  backfaceVisibility: 'hidden',
                  background: isActive 
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))',
                }}
                onClick={() => goToProject(index)}
              >
                {/* Image container with advanced effects */}
                <div className="relative h-3/5 overflow-hidden">
                  <motion.img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover will-change-transform"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    loading="lazy"
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-black/50 via-black/20' : 'from-black/30 via-black/10'} to-transparent`} />

                  {/* Status */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Completed
                    </span>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold drop-shadow-sm">{project.title}</h3>
                    <div className="flex gap-3 text-xs opacity-90 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {project.completionDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="h-1/4 p-3 bg-white flex items-center justify-between border-t border-surface-100">
                  <div className="flex gap-2">
                    <span className="text-xs bg-surface-50 px-2 py-1 rounded font-semibold text-brand-primary">
                      {project.area}
                    </span>
                    <span className="text-xs bg-surface-50 px-2 py-1 rounded font-semibold text-brand-primary">
                      {project.budget}
                    </span>
                  </div>
                  <motion.button
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="px-3 py-1 bg-brand-primary text-white text-xs font-medium rounded hover:bg-brand-primaryDark transition"
                  >
                    View
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Controls */}
      <button
        onClick={prevProject}
        aria-label="Previous project"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition will-change-transform"
      >
        <ChevronLeft size={20} className="text-surface-700" />
      </button>

      <button
        onClick={nextProject}
        aria-label="Next project"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition will-change-transform"
      >
        <ChevronRight size={20} className="text-surface-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-brand-primary shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Index + Autoplay */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium shadow select-none">
        <span aria-live="polite">
          {currentIndex + 1}/{projects.length}
        </span>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-brand-primary hover:underline"
          aria-label={isAutoPlaying ? 'Pause autoplay' : 'Play autoplay'}
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel3D;
