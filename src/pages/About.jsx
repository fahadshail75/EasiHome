import { motion } from 'framer-motion';
import { 
  Palette, Lightbulb, Heart, Target, Users, Award, CheckCircle, 
  ArrowRight, Phone, Mail, Globe, Sparkles, Brush, Compass, 
  Gem, Eye, Rocket, Star, Zap, Shield, Clock
} from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_INFO } from '../utils/constants';
import { viewportAnimation, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  // Core Philosophy
  const philosophy = [
    {
      icon: Palette,
      title: "Art Meets Function",
      description: "Every space tells a story. We craft environments that blend aesthetic beauty with practical living.",
      highlight: "Design Philosophy"
    },
    {
      icon: Rocket,
      title: "Innovation Revolution",
      description: "Pushing boundaries with cutting-edge technology and revolutionary design approaches.",
      highlight: "Innovation Focus"
    },
    {
      icon: Heart,
      title: "Human-Centered Design",
      description: "Creating spaces that enhance how people live, work, and connect with their environment.",
      highlight: "Human Impact"
    }
  ];

  // What Makes Us Different
  const differentiators = [
    {
      icon: Eye,
      title: "Visionary Approach",
      description: "We don't just design spaces - we create experiences that transform how you live.",
      stats: "200+ Transformed Spaces"
    },
    {
      icon: Gem,
      title: "Luxury Craftsmanship",
      description: "Premium materials, expert artisans, and attention to detail in every element.",
      stats: "99% Client Satisfaction"
    },
    {
      icon: Zap,
      title: "Technology Integration",
      description: "Advanced 3D visualization, smart home integration, and digital design tools.",
      stats: "Latest Tech Stack"
    },
    {
      icon: Globe,
      title: "Global Inspiration",
      description: "Drawing from international design trends while respecting local culture.",
      stats: "Worldwide Influence"
    }
  ];

  // Our Process
  const process = [
    {
      step: "01",
      title: "Vision Discovery",
      description: "We dive deep into your lifestyle, preferences, and dreams to understand your unique vision."
    },
    {
      step: "02", 
      title: "Concept Creation",
      description: "Our team develops innovative concepts that perfectly balance aesthetics, functionality, and your budget."
    },
    {
      step: "03",
      title: "Design Development", 
      description: "Through 3D visualization and detailed planning, we bring your space to life before construction begins."
    },
    {
      step: "04",
      title: "Flawless Execution",
      description: "Expert project management ensures smooth execution with quality control at every milestone."
    }
  ];

  // Service Areas
  const services = [
    {
      icon: Brush,
      title: "Interior Design",
      description: "Complete interior transformations from concept to completion"
    },
    {
      icon: Compass,
      title: "Space Planning", 
      description: "Optimizing layouts for maximum functionality and flow"
    },
    {
      icon: Gem,
      title: "Luxury Interiors",
      description: "High-end residential and commercial design solutions"
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "Photorealistic renderings and virtual reality experiences"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Brand Story */}
      <section className="relative bg-gradient-to-br from-brand-primary via-brand-primaryDark to-brand-steel text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primaryTint/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32">
          <motion.div
            {...viewportAnimation}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-brand-yellow" />
              <span className="text-brand-yellow font-semibold tracking-wider uppercase text-sm">Revolutionary Design Studio</span>
              <Sparkles className="w-6 h-6 text-brand-yellow" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Where Art Meets
              <span className="bg-gradient-to-r from-brand-yellow to-brand-accent bg-clip-text text-transparent block">
                Revolution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              We are ORPHIC ART REVOLUTION - a visionary design studio that transforms spaces into 
              extraordinary experiences. Every project is a revolution in living.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                className="bg-brand-yellow text-brand-primary hover:bg-brand-accent shadow-xl"
              >
                Explore Our Vision
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Phone}
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
              >
                Start Your Revolution
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-surface-900 mb-6">
              Our Design Philosophy
            </h2>
            <p className="text-xl text-surface-600 max-w-3xl mx-auto">
              We believe design is more than aesthetics - it's about creating transformative experiences 
              that enhance human connection and elevate everyday living.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {philosophy.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="group text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <div className="bg-brand-yellow/20 text-brand-primary px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    {item.highlight}
                  </div>
                  <h3 className="text-2xl font-bold text-surface-900 mb-4">{item.title}</h3>
                  <p className="text-surface-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-surface-50 to-brand-primaryTint/10">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-surface-900 mb-6">
              The ORPHIC Difference
            </h2>
            <p className="text-xl text-surface-600 max-w-3xl mx-auto">
              What sets us apart is our revolutionary approach to design - combining artistic vision 
              with cutting-edge technology and uncompromising craftsmanship.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-primary/20 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} className="text-brand-yellow" />
                  </div>
                  <div className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                    {item.stats}
                  </div>
                  <h3 className="text-xl font-bold text-surface-900 mb-4">{item.title}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 bg-brand-primary text-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Our Revolutionary Process
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From initial vision to final reveal, we guide you through a seamless journey 
              of transformation with transparency and expertise at every step.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {process.map((step, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="flex items-start gap-6 mb-12 group">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-brand-yellow to-brand-accent rounded-full flex items-center justify-center text-brand-primary font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/90 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-surface-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-surface-600 max-w-3xl mx-auto">
              Comprehensive design services that cover every aspect of your space transformation journey.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primaryTint/30 to-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-surface-900 mb-2">{service.title}</h3>
                  <p className="text-surface-600 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-brand-primary via-brand-primaryDark to-brand-steel text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            {...viewportAnimation}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Design Revolution?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join the revolution. Transform your space into something extraordinary. 
              Let's create something beautiful together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="secondary"
                size="lg"
                icon={Phone}
                onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
                className="bg-brand-yellow text-brand-primary hover:bg-brand-accent shadow-xl hover:shadow-2xl"
              >
                Get Free Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={Mail}
                onClick={() => window.open(`mailto:${COMPANY_INFO.email}`, '_self')}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Email Us
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={ArrowRight}
                onClick={() => window.location.href = '/contact'}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
      