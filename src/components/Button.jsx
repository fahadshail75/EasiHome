import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  ...props 
}) => {
  const baseClasses = 'btn';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };
  
  const sizes = {
    sm: 'px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm min-h-[32px] sm:min-h-[36px]',
    md: 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base min-h-[40px] sm:min-h-[44px]',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg min-h-[44px] sm:min-h-[52px]'
  };
  
  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'cursor-wait',
    className
  );
  
  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { y: -1 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      transition={{ duration: 0.16, ease: "easeOut" }}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {Icon && iconPosition === 'left' && <Icon size={18} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={18} />}
        </div>
      )}
    </motion.button>
  );
};

export default Button;
