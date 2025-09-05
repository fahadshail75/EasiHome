import { Palette } from 'lucide-react';

const Logo = ({ 
  variant = 'default', // 'default', 'header', 'footer'
  size = 'md', // 'sm', 'md', 'lg'
  className = '' 
}) => {
  const sizeClasses = {
    sm: {
      icon: 'h-5 w-5',
      text: 'text-lg',
      container: 'gap-2'
    },
    md: {
      icon: 'h-6 w-6',
      text: 'text-xl',
      container: 'gap-2.5'
    },
    lg: {
      icon: 'h-8 w-8',
      text: 'text-2xl',
      container: 'gap-3'
    }
  };

  const variantClasses = {
    default: {
      icon: 'text-brand-primary',
      text: 'text-brand-primary',
      highlight: 'text-brand-primary'
    },
    header: {
      icon: 'text-brand-primary',
      text: 'text-brand-primary',
      highlight: 'text-brand-primary'
    },
    footer: {
      icon: 'text-brand-primary',
      text: 'text-white',
      highlight: 'text-brand-primary'
    }
  };

  const currentSize = sizeClasses[size];
  const currentVariant = variantClasses[variant];

  return (
    <div className={`flex items-center ${currentSize.container} ${className}`}>
      <div className="relative">
        <Palette className={`${currentSize.icon} ${currentVariant.icon} ${variant === 'footer' ? 'animate-pulse' : ''}`} />
        {variant === 'footer' && (
          <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-md"></div>
        )}
      </div>
      <div className="flex flex-col">
        <span className={`font-mono font-bold ${currentSize.text} ${currentVariant.text} leading-tight`}>
          ORPHIC <span className={currentVariant.highlight}>ART</span> REVOLUTION
        </span>
        <span className={`font-mono text-xs ${currentVariant.text} opacity-75 leading-none ${size === 'sm' ? 'hidden' : ''}`}>
          PRIVATE LIMITED
        </span>
      </div>
    </div>
  );
};

export default Logo;
