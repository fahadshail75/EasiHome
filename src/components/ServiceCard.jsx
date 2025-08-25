import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { hoverScale } from '../utils/animations';
import { cn } from '../utils/cn';

const ServiceCard = ({ 
  service, 
  className,
  showDiscount = true,
  variant = 'default' 
}) => {
  const IconComponent = Icons[service.icon] || Icons.Package;
  
  const cardVariants = {
    default: 'card card-hover p-4 sm:p-6 md:p-8 relative overflow-hidden group',
    compact: 'card card-hover p-3 sm:p-4 md:p-6 relative overflow-hidden group',
    featured: 'card card-hover p-4 sm:p-6 md:p-8 border-2 border-brand-primary relative overflow-hidden group bg-gradient-to-br from-brand-primaryTint to-white'
  };

  return (
    <motion.div
      variants={hoverScale}
      whileHover="whileHover"
      whileTap="whileTap"
      className={cn(cardVariants[variant], className)}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

      <Link to={service.href} className="block h-full relative z-10">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <IconComponent size={20} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              {/* Floating dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-brand-yellow rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-primary rounded-full"></div>
              </div>
            </div>

            {showDiscount && service.discount && (
              <motion.div
                className="bg-gradient-to-r from-brand-yellow to-yellow-400 text-brand-primary px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-bold shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {service.discount}
              </motion.div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-surface-900 mb-2 sm:mb-3 group-hover:text-brand-primary transition-colors">
              {service.name}
            </h3>
            <p className="text-sm sm:text-base text-surface-600 leading-relaxed mb-4 sm:mb-6">
              {service.description}
            </p>
          </div>

          {/* Features List */}
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="text-xs bg-surface-100 text-surface-600 px-2 py-1 rounded-full">
                Expert Team
              </span>
              <span className="text-xs bg-surface-100 text-surface-600 px-2 py-1 rounded-full">
                Quality Materials
              </span>
              <span className="text-xs bg-surface-100 text-surface-600 px-2 py-1 rounded-full">
                On-Time Delivery
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-brand-primary font-semibold group-hover:text-brand-primaryDark transition-colors">
              <span>Learn More</span>
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-2"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-xs text-surface-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-brand-yellow rounded-full mr-0.5"></div>
                ))}
              </div>
              <span>4.9</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
