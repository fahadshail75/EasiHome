import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportAnimation } from '../utils/animations';
import { PROCESS_STEPS } from '../utils/constants';

const ProcessSteps = ({ 
  title = "How It Works",
  subtitle = "Our streamlined process ensures your project is delivered on time and within budget",
  steps = PROCESS_STEPS,
  className = ""
}) => {
  return (
    <section className={`section ${className}`}>
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

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="relative"
            >
              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary to-brand-primaryLight transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-brand-primary rounded-full" />
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-heading font-bold text-surface-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          {...viewportAnimation}
          className="text-center mt-12"
        >
          <p className="text-surface-600 mb-6">
            Ready to get started with your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;
