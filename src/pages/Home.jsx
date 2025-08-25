import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Award, Clock, CheckCircle, MapPin } from 'lucide-react';
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
        title="Tech‑enabled Construction & Home Services in Lucknow"
        subtitle="Build better, faster, and stress‑free"
        description="From concept to handover—managed end‑to‑end by experts with real‑time updates and transparent milestones."
        primaryCTA="Book Free Consultation"
        secondaryCTA="Explore Services"
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
            <p className="text-surface-600 mb-8 text-lg">Trusted by 500+ families across Lucknow</p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">Licensed & Insured</h3>
                <p className="text-sm text-surface-600">Fully certified contractors</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">Award Winning</h3>
                <p className="text-sm text-surface-600">Industry recognition</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">On-Time Delivery</h3>
                <p className="text-sm text-surface-600">98% completion rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="text-brand-primary" size={24} />
                </div>
                <h3 className="font-semibold text-surface-900 mb-1">Quality Assured</h3>
                <p className="text-sm text-surface-600">Lifetime warranty</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-surface-600 max-w-2xl mx-auto px-4 sm:px-0">
              From construction to interiors, we handle every aspect of your home project with expertise and care.
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-surface-600 max-w-3xl mx-auto">
              Discover our portfolio of completed projects showcasing exceptional craftsmanship, 
              innovative design, and client satisfaction across Lucknow.
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
                <div className="text-sm text-surface-600 font-medium">Completed Projects</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">98%</div>
                <div className="text-sm text-surface-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">15+</div>
                <div className="text-sm text-surface-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brand-primary mb-2">4.8★</div>
                <div className="text-sm text-surface-600 font-medium">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            {...viewportAnimation}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Dream Project?
              </h3>
              <p className="text-brand-primaryTint mb-6 text-lg max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trusted us with their construction needs. 
                Get a free consultation and transparent quote today.
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
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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
      
      {/* Testimonials */}
      <TestimonialCarousel />
      {/* Promo Banner */}
      <section className="section bg-gradient-to-r from-brand-primary via-brand-primaryDark to-brand-steel text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="container-custom relative z-10">
          <motion.div
            {...viewportAnimation}
            className="text-center"
          >
            {/* Offer Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-primary px-6 py-3 rounded-full font-bold text-lg mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">🎉</span>
              Limited Time Offer
              <span className="bg-brand-primary text-white px-2 py-1 rounded-full text-xs">
                Ends Soon
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Save Big on Your Dream Project
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-brand-yellow mb-2">Up to 18% OFF</div>
                <div className="text-xl font-semibold mb-2">Construction Projects</div>
                <p className="text-white/80">Complete home construction with premium materials and expert craftsmanship</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-brand-yellow mb-2">Up to 12% OFF</div>
                <div className="text-xl font-semibold mb-2">Interior Design</div>
                <p className="text-white/80">Transform your space with modern design solutions and premium finishes</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="ghost"
                size="lg"
                icon={Phone}
                onClick={handlePrimaryAction}
                className="bg-white text-brand-primary hover:bg-surface-100 shadow-xl"
              >
                Claim Your Discount Now
              </Button>
              <Button
                variant="ghost"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              >
                View All Offers
              </Button>
            </div>

            <p className="text-white/70 text-sm mt-6">
              * Offer valid for new projects booked before end of this month. Terms and conditions apply.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Contact Form Section */}
      <section id="contact-form" className="section bg-surface-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...viewportAnimation}>
              <div className="lg:sticky lg:top-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-6">
                  Ready to Start Your Dream Project?
                </h2>
                <p className="text-lg text-surface-600 mb-8">
                  Get a free consultation and detailed quote for your construction or renovation project.
                  Our experts will guide you through every step of the process.
                </p>

                {/* Process Steps */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">Free Consultation</h3>
                      <p className="text-surface-600">Get expert advice within 24 hours of your inquiry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">Detailed Planning</h3>
                      <p className="text-surface-600">3D visualization and comprehensive project planning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-900 mb-1">Transparent Pricing</h3>
                      <p className="text-surface-600">No hidden costs, clear breakdown of all expenses</p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h3 className="font-semibold text-surface-900 mb-4">Why Choose EasiHome?</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>5-Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-brand-primary" />
                      <span>Quality Materials</span>
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
