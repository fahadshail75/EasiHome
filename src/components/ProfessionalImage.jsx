import { useState } from 'react';
import { motion } from 'framer-motion';
import { getOptimizedImageUrl } from '../utils/images';

const ProfessionalImage = ({
  src,
  alt,
  className = '',
  size = 'medium',
  quality = 80,
  showOverlay = false,
  overlayContent = null,
  rounded = 'rounded-xl',
  shadow = 'shadow-lg',
  aspectRatio = null,
  objectFit = 'cover',
  loading = 'lazy',
  onLoad = null,
  onError = null,
  fallbackSrc = null,
  animate = false,
  hoverEffect = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const sizes = {
    small: { width: 400, quality: 75 },
    medium: { width: 800, quality: 80 },
    large: { width: 1200, quality: 85 },
    hero: { width: 1920, quality: 90 }
  };

  const { width, quality: defaultQuality } = sizes[size] || sizes.medium;
  const optimizedSrc = getOptimizedImageUrl(currentSrc, width, quality || defaultQuality);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (onLoad) onLoad();
  };

  const handleImageError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setImageError(true);
      if (onError) onError();
    }
  };

  const getAspectRatioClass = () => {
    if (!aspectRatio) return '';
    
    const ratios = {
      '1:1': 'aspect-square',
      '4:3': 'aspect-[4/3]',
      '16:9': 'aspect-video',
      '3:2': 'aspect-[3/2]',
      '2:3': 'aspect-[2/3]',
      '21:9': 'aspect-[21/9]'
    };
    
    return ratios[aspectRatio] || '';
  };

  const imageClasses = `
    w-full h-full object-${objectFit} transition-all duration-300
    ${imageLoaded ? 'opacity-100' : 'opacity-0'}
    ${hoverEffect ? 'hover:scale-105' : ''}
  `.trim();

  const containerClasses = `
    relative overflow-hidden ${rounded} ${shadow} ${getAspectRatioClass()} ${className}
    ${hoverEffect ? 'hover:shadow-xl transition-all duration-300' : ''}
  `.trim();

  if (imageError) {
    return (
      <div className={containerClasses}>
        <div className="w-full h-full bg-gradient-to-br from-surface-100 to-surface-200 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-surface-300 rounded-lg flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-surface-500">Image not available</p>
          </div>
        </div>
      </div>
    );
  }

  const ImageComponent = animate ? motion.img : 'img';
  const imageProps = {
    src: optimizedSrc,
    alt,
    className: imageClasses,
    loading,
    onLoad: handleImageLoad,
    onError: handleImageError,
    ...(animate && {
      initial: { opacity: 0, scale: 1.1 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 }
    })
  };

  return (
    <div className={containerClasses}>
      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-surface-100 to-surface-200 animate-pulse">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-surface-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Main Image */}
      <ImageComponent {...imageProps} />

      {/* Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          {overlayContent && (
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              {overlayContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Gallery Component for multiple images
export const ImageGallery = ({ 
  images, 
  columns = 3, 
  gap = 'gap-4',
  imageProps = {},
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} ${gap} ${className}`}>
      {images.map((image, index) => (
        <ProfessionalImage
          key={index}
          src={image.src}
          alt={image.alt}
          animate={true}
          hoverEffect={true}
          {...imageProps}
        />
      ))}
    </div>
  );
};

// Before/After Comparison Component
export const BeforeAfterImage = ({ 
  beforeImage, 
  afterImage, 
  className = '',
  showLabels = true 
}) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        {/* Before Image */}
        <div className="relative">
          <ProfessionalImage
            src={beforeImage.src}
            alt={beforeImage.alt}
            aspectRatio="4:3"
            hoverEffect={true}
          />
          {showLabels && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Before
            </div>
          )}
        </div>

        {/* After Image */}
        <div className="relative">
          <ProfessionalImage
            src={afterImage.src}
            alt={afterImage.alt}
            aspectRatio="4:3"
            hoverEffect={true}
          />
          {showLabels && (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              After
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Hero Image Component with overlay content
export const HeroImage = ({ 
  src, 
  alt, 
  title, 
  subtitle, 
  className = '',
  height = 'h-96' 
}) => {
  return (
    <ProfessionalImage
      src={src}
      alt={alt}
      size="hero"
      className={`${height} ${className}`}
      showOverlay={true}
      overlayContent={
        <div>
          {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
          {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
        </div>
      }
      animate={true}
    />
  );
};

export default ProfessionalImage;
