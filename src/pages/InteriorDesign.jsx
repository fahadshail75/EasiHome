import { motion } from 'framer-motion';
import { CheckCircle, Palette, Home, Lightbulb, Ruler, Eye } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { viewportAnimation, staggerContainer, staggerItem } from '../utils/animations';

const InteriorDesign = () => {
  const designStyles = [
    {
      name: "Modern Contemporary",
      description: "Clean lines, minimalist approach with functional furniture and neutral colors.",
      features: ["Open floor plans", "Neutral color palette", "Functional furniture", "Natural lighting"],
      image: "bg-gradient-to-br from-gray-400 to-gray-600"
    },
    {
      name: "Classic Traditional",
      description: "Timeless elegance with rich colors, ornate details, and luxurious materials.",
      features: ["Rich wood finishes", "Ornate details", "Warm color schemes", "Traditional patterns"],
      image: "bg-gradient-to-br from-amber-400 to-amber-600"
    },
    {
      name: "Scandinavian Minimal",
      description: "Light, airy spaces with natural materials and cozy, functional design.",
      features: ["Light wood tones", "White & light colors", "Cozy textiles", "Functional design"],
      image: "bg-gradient-to-br from-blue-400 to-blue-600"
    }
  ];

  const designProcess = [
    {
      step: 1,
      title: "Consultation & Brief",
      description: "Understanding your lifestyle, preferences, and requirements",
      icon: Eye
    },
    {
      step: 2,
      title: "Concept Development",
      description: "Creating initial design concepts and mood boards",
      icon: Lightbulb
    },
    {
      step: 3,
      title: "3D Visualization",
      description: "Detailed 3D renders to visualize the final design",
      icon: Ruler
    },
    {
      step: 4,
      title: "Execution & Styling",
      description: "Project management and final styling touches",
      icon: Home
    }
  ];

  return (
    <div>
      <PageHeader
        title="Interior Design Services"
        subtitle="Creating Excellent Interiors"
        description="Transform your space with our expert interior design services. From concept to completion, we create beautiful, functional interiors that reflect your personality."
        breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Interior Design" }]}
        primaryCTA="Get Design Quote"
        secondaryCTA="View Portfolio"
        discount="Up to 12% Off"
        variant="service"
      />

      {/* Design Styles */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Design Styles We Specialize In
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Choose from our curated design styles or let us create a custom look that's uniquely yours.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {designStyles.map((style, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="card overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className={`h-48 ${style.image} relative`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{style.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-surface-600 mb-4">{style.description}</p>
                    <ul className="space-y-2">
                      {style.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={14} className="text-brand-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              From initial consultation to final styling, we ensure every detail is perfect.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {designProcess.map((process, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <process.icon size={28} className="text-white" />
                  </div>
                  <div className="text-sm text-brand-primary font-semibold mb-2">Step {process.step}</div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-3">{process.title}</h3>
                  <p className="text-surface-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              What's Included in Our Service
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Comprehensive interior design services from concept to completion.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "Space Planning & Layout",
              "3D Visualization & Renders",
              "Material & Color Selection",
              "Furniture & Decor Sourcing",
              "Lighting Design",
              "Project Management",
              "Installation Supervision",
              "Final Styling & Setup"
            ].map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="flex items-center gap-3 p-4 bg-surface-50 rounded-xl">
                  <CheckCircle size={20} className="text-brand-primary" />
                  <span className="font-medium text-surface-900">{service}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Start Your Interior Design Project"
              subtitle="Tell us about your space and style preferences. Get a personalized design proposal within 48 hours."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign;
