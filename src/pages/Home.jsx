import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Award, Clock, CheckCircle, MapPin, Palette, Box } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps';
import StatsSection from '../components/StatsSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';
import ProjectShowcase from '../components/ProjectShowcase';
import Button from '../components/Button';
import ProfessionalImage, { ImageGallery, BeforeAfterImage } from '../components/ProfessionalImage';
import { projectImages, interiorImages, transformationImages } from '../utils/images';
import { SERVICES, COMPANY_INFO } from '../utils/constants';
import { staggerContainer, staggerItem, viewportAnimation } from '../utils/animations';

const Home = () => {
  const handlePrimaryAction = () => {
    // Scroll to contact form or open phone
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(`tel:${COMPANY_INFO.phone}`, '_self');
    }
  };

  const handleSecondaryAction = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        title="Transform Your Space Into Art"
        subtitle="Revolutionizing Spaces with Art & Design"
        description="We bring creativity to life through innovative layouts, harmonious color schemes, and cutting-edge design technologies. Our expert team creates functional yet artistic interiors that reflect your unique style and enhance your daily living experience."
        primaryCTA="Get Started"
        secondaryCTA="View Work"
        primaryAction={handlePrimaryAction}
        secondaryAction={handleSecondaryAction}
        showTrustBadges={true}
      />

      {/* Trusted By Section */}
      <section className="section-sm bg-white border-b border-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center"
          >
            <p className="text-surface-600 mb-8 text-lg">Trusted by 500+ families across Lucknow for exceptional interior design</p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Palette className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">Expert Designers</h3>
                <p className="text-sm text-surface-600">Professional interior designers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Box className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">3D Visualization</h3>
                <p className="text-sm text-surface-600">Realistic 3D renders</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">Timely Execution</h3>
                <p className="text-sm text-surface-600">Projects completed on schedule</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">Quality Assured</h3>
                <p className="text-sm text-surface-600">Premium materials & finishes</p>
              </div>
            </div>

           {/* Partner Logos Section */}
<div className="relative w-full overflow-hidden py-10">
  {/* Gradient Fades on edges for nice masking */}
  <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
  <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

  {/* Slider */}
  <div className="flex gap-12 animate-scrollX whitespace-nowrap">
    {/* Asian Paints */}
    <a
      href="https://www.asianpaints.com"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      Asian Paints
    </a>
    {/* Ultratech Cement */}
    <a
      href="https://www.ultratechcement.com"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      Ultratech Cement
    </a>
    {/* Kajaria Tiles */}
    <a
      href="https://www.kajariaceramics.com"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      Kajaria Tiles
    </a>
    {/* Tata Steel */}
    <a
      href="https://www.tatasteel.com"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      Tata Steel
    </a>
    {/* JSW Cement */}
    <a
      href="https://www.jswcement.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      JSW Cement
    </a>
    {/* Berger Paints */}
    <a
      href="https://www.bergerpaints.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      Berger Paints
    </a>
    {/* Somany Ceramics */}
    <a
      href="https://www.somanyceramics.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      Somany Tiles
    </a>
    {/* ACC Cement */}
    <a
      href="https://www.acclimited.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-16 w-36 bg-surface-200 rounded-xl flex items-center justify-center text-sm text-surface-600 font-medium hover:opacity-100 transition"
    >
      ACC Cement
    </a>
  </div>
</div>

          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-surface-900 mb-3 sm:mb-4">
              Transform Every Room with Expert Design
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0">
              From concept to completion, we deliver comprehensive design services that blend innovative layouts with stunning color harmonies. Experience the perfect balance of functionality and artistry in every space we create.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <ProcessSteps />


      
      {/* Project Showcase Section - Modern Gallery */}
      <section className="section bg-gradient-to-b from-surface-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div {...viewportAnimation} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-primaryTint/20 text-brand-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <Award size={14} />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-surface-900 mb-4">
              Spaces That Tell Your Story
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every project we complete reflects our commitment to revolutionary design. From intimate residential spaces to dynamic commercial environments, discover how we transform ordinary rooms into extraordinary experiences through thoughtful design and meticulous attention to detail.
            </p>
          </motion.div>

          {/* Modern Project Showcase */}
          <ProjectShowcase />

          {/* Enhanced Project Stats */}
          <motion.div
            {...viewportAnimation}
            className="mt-16 mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
                <div className="text-sm text-surface-600 font-medium">Interior Projects</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">99%</div>
                <div className="text-sm text-surface-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">8+</div>
                <div className="text-sm text-surface-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">4.9★</div>
                <div className="text-sm text-surface-600 font-medium">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            {...viewportAnimation}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto text-black">
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-black mb-6 text-lg max-w-2xl mx-auto">
                Let us revolutionize your space with innovative design technologies and artistic flair. From initial concept to final touches, we create interiors that perfectly blend functionality with stunning visual appeal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={Phone}
                  onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
                  className="bg-white text-brand-primary hover:bg-brand-primaryTint/10 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-black/30 text-black hover:bg-black/10 backdrop-blur-sm"
                >
                  View All Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Trusted by Thousands */}
      <section className="section bg-gradient-to-r from-brand-primary to-brand-primaryDark text-black">
        <div className="container-custom">
          <motion.div {...viewportAnimation} className="text-center">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6">
              Join Thousands Who Love Their New Spaces
            </h2>
            <p className="text-xl text-black mb-12 max-w-3xl mx-auto">
              Over 500 families across Lucknow have discovered the joy of living in beautifully designed spaces. From innovative layouts to stunning color harmonies, ORPHIC ART REVOLUTION brings your vision to life with unmatched attention to detail.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-black">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-black">Rooms Designed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-black">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-black">Areas Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />
      

      {/* Contact Form Section */}
      <section id="contact-form" className="section bg-surface-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...viewportAnimation}>
              <div className="lg:sticky lg:top-8">
                <h2 className="text-3xl md:text-4xl font-mono font-bold text-surface-900 mb-6">
                  Let's Create Your Dream Space Together
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Ready to experience the magic of revolutionary design? Get your free consultation and discover how we can transform your space with innovative layouts, beautiful color harmonies, and cutting-edge design technologies.
                </p>

                {/* Process Steps */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">Free Consultation</h3>
                      <p className="text-surface-600">Get expert advice within 24 hours of your inquiry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">Detailed Planning</h3>
                      <p className="text-surface-600">3D visualization and comprehensive project planning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">Transparent Pricing</h3>
                      <p className="text-surface-600">No hidden costs, clear breakdown of all expenses</p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h3 className="font-semibold text-surface-900 mb-4">Why Choose ORPHIC ART REVOLUTION?</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>3D Visualization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>Space Planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>Quality Assurance</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...viewportAnimation}>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-surface-200">
                <ContactForm
                  title="Get Your Free Quote"
                  subtitle="Fill out the form below and we'll get back to you within 24 hours"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
