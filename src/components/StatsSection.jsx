import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { staggerContainer, staggerItem } from '../utils/animations';
import { STATS } from '../utils/constants';

const CounterAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const endValue = parseInt(end.replace(/[^\d]/g, ''));
      const increment = endValue / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration, hasAnimated]);

  const formatCount = (num) => {
    const originalEnd = end;
    if (originalEnd.includes('+')) {
      return `${num}+`;
    }
    if (originalEnd.includes('%')) {
      return `${num}%`;
    }
    if (originalEnd.includes('/')) {
      return `${(num / 10).toFixed(1)}/5`;
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {formatCount(count)}
    </span>
  );
};

const StatsSection = ({ 
  title = "Trusted by Thousands",
  subtitle = "Our numbers speak for our commitment to excellence",
  stats = STATS,
  className = "",
  variant = "default"
}) => {
  const variants = {
    default: "bg-surface-100",
    dark: "bg-surface-900 text-white",
    transparent: "bg-transparent"
  };

  return (
    <section className={`section ${variants[variant]} ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${
            variant === 'dark' ? 'text-white' : 'text-surface-900'
          }`}>
            {title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            variant === 'dark' ? 'text-white/80' : 'text-surface-600'
          }`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${
                variant === 'dark' ? 'text-brand-yellow' : 'text-brand-primary'
              }`}>
                <CounterAnimation end={stat.number} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                variant === 'dark' ? 'text-white' : 'text-surface-900'
              }`}>
                {stat.label}
              </h3>
              <p className={`text-sm ${
                variant === 'dark' ? 'text-white/70' : 'text-surface-600'
              }`}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
