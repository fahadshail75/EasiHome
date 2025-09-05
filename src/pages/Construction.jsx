import { motion } from 'framer-motion';
import { 
  CheckCircle, Shield, Award, Clock, Home, Building2, Hammer, Users, 
  ArrowRight, Phone, Star, Target, Zap, Eye, Settings, TrendingUp,
  FileText, Calendar, MapPin, Wrench, Palette, Lock, Lightbulb,
  CheckSquare, BarChart3, MessageCircle, Download
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProcessSteps from '../components/ProcessSteps';
import ContactForm from '../components/ContactForm';
import StatsSection from '../components/StatsSection';
import Button from '../components/Button';
import ProfessionalImage from '../components/ProfessionalImage';
import { COMPANY_INFO } from '../utils/constants';
import { viewportAnimation, staggerContainer, staggerItem } from '../utils/animations';

const Construction = () => {
  const constructionPackages = [
    {
      name: "Essential Package",
      price: "₹1,200",
      originalPrice: "₹1,400",
      features: [
        "Standard quality materials",
        "Basic electrical & plumbing systems",
        "Ceramic tile flooring",
        "Standard kitchen & bathroom fittings",
        "Basic paint & finishes",
        "1-year structural warranty",
        "Monthly progress reports",
        "Basic project management"
      ],
      popular: false,
      icon: Home,
      description: "Perfect for budget-conscious homeowners seeking quality construction",
      timeline: "6-8 months",
      warranty: "1 Year"
    },
    {
      name: "Premium Package",
      price: "₹1,800",
      originalPrice: "₹2,100",
      features: [
        "Premium branded materials",
        "Advanced electrical & plumbing",
        "Premium vitrified flooring",
        "Modular kitchen with branded appliances",
        "Designer bathroom fittings",
        "Premium paint & textures",
        "Interior design consultation",
        "3-year comprehensive warranty",
        "Weekly progress updates",
        "Dedicated project manager"
      ],
      popular: true,
      icon: Award,
      description: "Our most popular choice with premium features and professional design",
      timeline: "8-10 months",
      warranty: "3 Years"
    },
    {
      name: "Luxury Package",
      price: "₹2,500",
      originalPrice: "₹2,800",
      features: [
        "Luxury imported materials",
        "Smart home automation systems",
        "Designer marble/hardwood flooring",
        "Premium modular kitchen with island",
        "Luxury bathroom with jacuzzi",
        "Designer lighting & fixtures",
        "Complete interior design & furnishing",
        "5-year comprehensive warranty",
        "Real-time project tracking app",
        "Personal project coordinator",
        "Priority customer support"
      ],
      popular: false,
      icon: Star,
      description: "Ultimate luxury experience with premium materials and smart features",
      timeline: "10-12 months",
      warranty: "5 Years"
    }
  ];

  const constructionFeatures = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "All our contractors are licensed and fully insured for complete peace of mind.",
      highlight: "100% Covered"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We source only top-quality materials from trusted brands and verified suppliers.",
      highlight: "ISI Certified"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "98% of our projects completed on schedule with milestone-based tracking.",
      highlight: "98% Success"
    },
    {
      icon: Users,
      title: "Expert Craftsmen",
      description: "Skilled professionals with 10+ years experience in residential construction.",
      highlight: "Certified Team"
    }
  ];

  const constructionServices = [
    {
      icon: Building2,
      title: "New Home Construction",
      description: "Complete home construction from foundation to finishing with modern amenities.",
      features: ["Site planning", "Foundation work", "Structure construction", "Interior finishing"]
    },
    {
      icon: Hammer,
      title: "Villa Construction",
      description: "Luxury villa construction with premium materials and custom architectural design.",
      features: ["Custom design", "Premium materials", "Landscaping", "Security systems"]
    },
    {
      icon: Home,
      title: "Apartment Construction",
      description: "Multi-unit residential construction with efficient space utilization and modern facilities.",
      features: ["Space optimization", "Modern amenities", "Safety compliance", "Energy efficiency"]
    },
    {
      icon: Wrench,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes with professional standards.",
      features: ["Commercial planning", "Industrial standards", "Safety protocols", "Timeline adherence"]
    }
  ];

  const qualityAssurance = [
    {
      icon: CheckSquare,
      title: "Multi-Stage Inspections",
      description: "Quality checks at every construction phase",
      process: "Foundation → Structure → Finishing → Final"
    },
    {
      icon: FileText,
      title: "Compliance Certification",
      description: "All regulatory approvals and certifications",
      process: "Building Permits → NOC → Completion Certificate"
    },
    {
      icon: BarChart3,
      title: "Material Testing",
      description: "Laboratory testing of all construction materials",
      process: "Cement → Steel → Aggregate → Quality Reports"
    },
    {
      icon: Eye,
      title: "Third-Party Audits",
      description: "Independent quality verification and audits",
      process: "Weekly → Monthly → Final → Handover"
    }
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "15+ Years Experience",
      description: "Proven track record in residential and commercial construction",
      stat: "500+",
      label: "Projects Completed"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Consistently high ratings from satisfied homeowners",
      stat: "4.8/5",
      label: "Average Rating"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Comprehensive warranty and post-construction support",
      stat: "5 Years",
      label: "Max Warranty"
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "Tech-enabled project management and real-time tracking",
      stat: "100%",
      label: "Digital Tracking"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Premium Construction Services"
        subtitle="Build Your Dream Home with Confidence & Quality"
        description="From foundation to finishing—we deliver exceptional construction with transparent pricing, quality materials, and guaranteed timelines. Your vision, our expertise."
        breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Construction" }]}
        primaryCTA="Get Construction Quote"
        secondaryCTA="View Portfolio"
        discount="Up to 15% Off This Month"
        variant="service"
      />

      {/* Hero Features */}
      <section className="section bg-white border-b border-surface-100">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {constructionFeatures.map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="text-center group hover:bg-surface-50 p-6 rounded-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon size={28} className="text-brand-primary group-hover:text-white" />
                  </div>
                  <div className="bg-brand-yellow text-brand-primary px-2 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-2">{feature.title}</h3>
                  <p className="text-surface-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="section bg-surface-50">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Our Construction Services
            </h2>
            <p className="text-lg text-surface-600 max-w-3xl mx-auto">
              We specialize in various types of construction projects, each delivered with the same commitment to quality and excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {constructionServices.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-brand-primaryTint rounded-2xl flex items-center justify-center flex-shrink-0">
                      <service.icon size={28} className="text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-surface-900 mb-3">{service.title}</h3>
                      <p className="text-surface-600 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-surface-500">
                            <CheckCircle size={14} className="text-brand-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Construction Packages */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Construction Packages
            </h2>
            <p className="text-lg text-surface-600 max-w-3xl mx-auto">
              Choose the perfect package for your construction needs. All packages include project management, quality assurance, and comprehensive support.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {constructionPackages.map((pkg, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className={`bg-white rounded-2xl p-8 h-full transition-all duration-300 relative overflow-hidden ${
                  pkg.popular 
                    ? 'border-2 border-brand-primary shadow-xl scale-105' 
                    : 'border border-surface-200 shadow-soft hover:shadow-lg'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 ${pkg.popular ? 'bg-brand-primary' : 'bg-brand-primaryTint'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <pkg.icon size={28} className={pkg.popular ? 'text-white' : 'text-brand-primary'} />
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 mb-2">{pkg.name}</h3>
                    <p className="text-surface-600 text-sm mb-4">{pkg.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-4xl font-bold text-brand-primary">{pkg.price}</span>
                        <span className="text-surface-500 line-through text-lg">{pkg.originalPrice}</span>
                      </div>
                      <p className="text-surface-600 text-sm">Per square foot</p>
                    </div>

                    {/* Package Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-surface-50 rounded-lg p-3">
                        <div className="text-xs text-surface-500 uppercase font-medium">Timeline</div>
                        <div className="text-sm font-semibold text-surface-900">{pkg.timeline}</div>
                      </div>
                      <div className="bg-surface-50 rounded-lg p-3">
                        <div className="text-xs text-surface-500 uppercase font-medium">Warranty</div>
                        <div className="text-sm font-semibold text-surface-900">{pkg.warranty}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-surface-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={pkg.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Choose {pkg.name}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section bg-gradient-to-br from-surface-50 to-brand-primaryTint/10">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Our Quality Assurance Process
            </h2>
            <p className="text-lg text-surface-600 max-w-3xl mx-auto">
              We maintain the highest quality standards through rigorous testing, regular inspections, and compliance with all building codes and regulations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {qualityAssurance.map((qa, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <qa.icon size={28} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-surface-900 mb-3">{qa.title}</h3>
                  <p className="text-surface-600 mb-4">{qa.description}</p>
                  <div className="bg-surface-50 rounded-lg p-3">
                    <div className="text-xs font-medium text-brand-primary mb-1">Process Flow</div>
                    <div className="text-sm text-surface-700">{qa.process}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Why Choose ORPHIC ART REVOLUTION for Design?
            </h2>
            <p className="text-lg text-surface-600 max-w-3xl mx-auto">
              Our commitment to excellence, transparent processes, and customer satisfaction sets us apart in the construction industry.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-brand-primaryTint rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <reason.icon size={32} className="text-brand-primary group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{reason.stat}</div>
                  <div className="text-sm text-surface-500 mb-3">{reason.label}</div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-3">{reason.title}</h3>
                  <p className="text-surface-600">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section bg-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Our Construction Portfolio
            </h2>
            <p className="text-lg text-surface-600 max-w-3xl mx-auto">
              Explore our recent construction projects showcasing quality craftsmanship, innovative design, and attention to detail.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                alt: "Modern villa construction completed",
                title: "Luxury Villa Project",
                location: "Gomti Nagar, Lucknow",
                area: "3,500 sq ft",
                type: "Villa Construction"
              },
              {
                src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
                alt: "Contemporary home construction",
                title: "Modern Family Home",
                location: "Hazratganj, Lucknow",
                area: "2,800 sq ft",
                type: "Residential Construction"
              },
              {
                src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
                alt: "Premium residential construction",
                title: "Premium Residence",
                location: "Indira Nagar, Lucknow",
                area: "4,200 sq ft",
                type: "Custom Home"
              }
            ].map((project, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <ProfessionalImage
                      src={project.src}
                      alt={project.alt}
                      aspectRatio="4:3"
                      size="medium"
                      rounded="rounded-none"
                      shadow=""
                      hoverEffect={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-brand-primary px-2 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                        {project.type}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-surface-900 mb-2">{project.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <MapPin size={14} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <Home size={14} />
                        <span>{project.area}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...viewportAnimation} className="text-center">
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      <ProcessSteps
        title="Our Construction Process"
        subtitle="From foundation to finishing, we manage every detail of your construction project with transparency and expertise"
      />

      <StatsSection
        title="Construction Excellence in Numbers"
        subtitle="Our track record speaks for itself"
        variant="transparent"
      />

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-brand-primary via-brand-primaryDark to-brand-steel text-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            {...viewportAnimation}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl text-brand-primaryTint mb-8 leading-relaxed">
              Transform your vision into reality with our expert construction services. 
              Get a detailed quote, timeline, and project plan within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                variant="secondary"
                size="lg"
                icon={Phone}
                onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
                className="bg-white text-brand-primary hover:bg-brand-primaryTint/10 shadow-xl hover:shadow-2xl"
              >
                Call for Free Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={Download}
                className="border-black/30 text-black hover:bg-black/10 backdrop-blur-sm"
              >
                Download Price Guide
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={MessageCircle}
                className="border-black/30 text-black hover:bg-black/10 backdrop-blur-sm"
              >
                WhatsApp Consultation
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-brand-primaryTint text-sm">Homes Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">98%</div>
                <div className="text-brand-primaryTint text-sm">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">4.8★</div>
                <div className="text-brand-primaryTint text-sm">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">5 Years</div>
                <div className="text-brand-primaryTint text-sm">Max Warranty</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Get Your Construction Quote"
              subtitle="Tell us about your construction requirements and get a detailed quote within 24 hours"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
