import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import Button from './Button';

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  breadcrumbs = [],
  primaryCTA,
  primaryAction,
  secondaryCTA,
  secondaryAction,
  discount,
  backgroundImage,
  variant = 'default' // default, service, about, contact
}) => {
  const variants = {
    default: 'bg-gradient-to-br from-surface-100 to-white',
    service: 'bg-gradient-to-br from-brand-primaryTint via-white to-surface-50',
    about: 'bg-gradient-to-br from-brand-secondaryTint via-white to-surface-50',
    contact: 'bg-gradient-to-br from-surface-50 to-white'
  };

  return (
    <section className={`relative overflow-hidden ${variants[variant]} py-16 md:py-24`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <motion.nav variants={staggerItem} className="flex items-center justify-center gap-2 text-sm">
                <Link to="/" className="flex items-center gap-1 text-surface-500 hover:text-brand-primary transition-colors">
                  <Home size={16} />
                  Home
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-surface-300">/</span>
                    {crumb.href ? (
                      <Link to={crumb.href} className="text-surface-500 hover:text-brand-primary transition-colors">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-brand-primary font-medium">{crumb.name}</span>
                    )}
                  </div>
                ))}
              </motion.nav>
            )}

            {/* Discount Badge */}
            {discount && (
              <motion.div variants={staggerItem} className="inline-block">
                <div className="inline-flex items-center px-4 py-2 bg-brand-yellow text-brand-primary rounded-full text-sm font-bold shadow-lg">
                  <span className="mr-2">🎉</span>
                  {discount}
                </div>
              </motion.div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.p 
                variants={staggerItem}
                className="text-brand-primary font-semibold text-lg"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Title */}
            <motion.h1 
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-900 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p 
                variants={staggerItem}
                className="text-lg md:text-xl text-surface-600 leading-relaxed max-w-3xl mx-auto"
              >
                {description}
              </motion.p>
            )}

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <motion.div 
                variants={staggerItem}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                {primaryCTA && (
                  <Button 
                    variant="primary" 
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={primaryAction}
                  >
                    {primaryCTA}
                  </Button>
                )}
                
                {secondaryCTA && (
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={secondaryAction}
                  >
                    {secondaryCTA}
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
