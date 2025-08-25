import { motion } from 'framer-motion';
import { 
  Users, Award, Shield, Heart, Target, Eye, CheckCircle, 
  TrendingUp, Clock, Star, MapPin, Building, Hammer, 
  Phone, Mail, Linkedin, Calendar, ArrowRight, Download,
  Trophy, Lightbulb, Handshake, Zap
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StatsSection from '../components/StatsSection';
import ProfessionalImage from '../components/ProfessionalImage';
import Button from '../components/Button';
import { teamImages, projectImages } from '../utils/images';
import { COMPANY_INFO } from '../utils/constants';
import { viewportAnimation, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We use premium materials and follow strict quality control processes to ensure every project meets the highest standards.",
      features: ["Premium Materials", "Quality Inspections", "Certified Professionals"]
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction drives everything we do. We listen, understand, and deliver beyond expectations.",
      features: ["24/7 Support", "Transparent Communication", "Post-Completion Care"]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technology and modern construction techniques for superior results.",
      features: ["Tech-Enabled Tracking", "Modern Techniques", "Smart Solutions"]
    },
    {
      icon: Handshake,
      title: "Trust & Integrity",
      description: "Honest pricing, transparent processes, and ethical business practices form the foundation of our relationships.",
      features: ["No Hidden Costs", "Ethical Practices", "Reliable Timelines"]
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "15+ years",
      specialization: "Construction Management & Strategy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      qualifications: "B.Tech Civil, MBA",
      achievements: "500+ Projects Delivered",
      description: "Visionary leader with expertise in large-scale construction projects and business strategy.",
      contact: {
        email: "rajesh@easihome.com",
        linkedin: "#"
      }
    },
    {
      name: "Priya Sharma",
      position: "Head of Design",
      experience: "12+ years",
      specialization: "Interior Architecture & Planning",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b190?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      qualifications: "B.Arch, M.Des",
      achievements: "100+ Design Awards",
      description: "Creative architect specializing in modern residential and commercial spaces.",
      contact: {
        email: "priya@easihome.com",
        linkedin: "#"
      }
    },
    {
      name: "Amit Verma",
      position: "Project Manager",
      experience: "10+ years",
      specialization: "Project Execution & Quality",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      qualifications: "B.Tech Civil, PMP",
      achievements: "Zero Delay Record",
      description: "Expert in project management with a track record of on-time, on-budget deliveries.",
      contact: {
        email: "amit@easihome.com",
        linkedin: "#"
      }
    },
    {
      name: "Sunita Gupta",
      position: "Quality Assurance Head",
      experience: "8+ years",
      specialization: "Quality Control & Safety",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      qualifications: "B.Tech Civil, QA Certified",
      achievements: "99.8% Quality Score",
      description: "Quality expert ensuring every project meets the highest standards of construction.",
      contact: {
        email: "sunita@easihome.com",
        linkedin: "#"
      }
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: Award,
      year: "2023"
    },
    {
      title: "RERA Certified",
      description: "Real Estate Regulatory Authority",
      icon: Shield,
      year: "2022"
    },
    {
      title: "Green Building Council",
      description: "Sustainable Construction Practices",
      icon: Lightbulb,
      year: "2023"
    },
    {
      title: "Safety Excellence Award",
      description: "Zero Accident Record",
      icon: Trophy,
      year: "2024"
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "95% of our projects completed on or before schedule",
      stat: "95%"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "2-year comprehensive warranty on all construction work",
      stat: "2 Years"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Average rating from 500+ completed projects",
      stat: "4.8/5"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Average savings through our efficient processes",
      stat: "15%"
    }
  ];

  const milestones = [
    { 
      year: "2020", 
      event: "EasiHome founded with a vision to revolutionize construction in Lucknow",
      icon: Building,
      details: "Started with a small team of 5 professionals"
    },
    { 
      year: "2021", 
      event: "Completed 100+ residential projects with 100% customer satisfaction",
      icon: Trophy,
      details: "Established strong reputation in residential construction"
    },
    { 
      year: "2022", 
      event: "Expanded to commercial construction and interior design services",
      icon: TrendingUp,
      details: "Diversified services and increased team to 25 professionals"
    },
    { 
      year: "2023", 
      event: "Launched tech-enabled project tracking and transparent milestone system",
      icon: Zap,
      details: "Introduced real-time project updates and client portal"
    },
    { 
      year: "2024", 
      event: "Achieved 500+ satisfied customers and expanded team to 50+ professionals",
      icon: Star,
      details: "Recognized as leading construction company in Lucknow"
    }
  ];

  return (
    <div>
      <PageHeader
        title="About EasiHome"
        subtitle="Your Trusted Construction Partner Since 2020"
        description="We're revolutionizing the construction industry in Lucknow with technology-enabled project management, transparent processes, and unwavering commitment to quality."
        breadcrumbs={[{ name: "About Us" }]}
        primaryCTA="Start Your Project"
        secondaryCTA="View Our Work"
        variant="about"
      />

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...viewportAnimation}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-surface-600 mb-8 leading-relaxed">
                To make construction and home services accessible, transparent, and hassle-free for every family in Lucknow and beyond. We believe that building your dream home should be an exciting journey, not a stressful ordeal.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-primary" />
                  <span className="text-surface-700">Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-primary" />
                  <span className="text-surface-700">Technology-enabled project tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-primary" />
                  <span className="text-surface-700">Quality assurance at every step</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...viewportAnimation}
              className="bg-gradient-to-br from-brand-primaryTint to-white p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                  <Eye size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-surface-900">Our Vision</h3>
              </div>
              <p className="text-surface-700 leading-relaxed">
                To become the most trusted and innovative construction company in North India, setting new standards for quality, transparency, and customer satisfaction in the industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="card p-8 text-center h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primaryTint to-brand-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={32} className="text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-4">{value.title}</h3>
                  <p className="text-surface-600 mb-6 leading-relaxed">{value.description}</p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-surface-500">
                        <CheckCircle size={14} className="text-brand-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise and a passion for excellence to every project.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="card p-0 overflow-hidden h-full hover:shadow-xl transition-all duration-300 group">
                  {/* Professional Photo */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/40 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.position}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-surface-900 mb-1">{member.name}</h3>
                    <p className="text-brand-primary font-semibold mb-2">{member.position}</p>
                    
                    {/* Experience & Qualifications */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <Calendar size={14} />
                        <span>{member.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <Award size={14} />
                        <span>{member.qualifications}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <Trophy size={14} />
                        <span>{member.achievements}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-surface-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                    
                    {/* Specialization */}
                    <div className="bg-surface-50 rounded-lg p-3 mb-4">
                      <div className="text-xs text-surface-500 uppercase font-medium mb-1">Specialization</div>
                      <div className="text-sm font-medium text-surface-900">{member.specialization}</div>
                    </div>
                    
                    {/* Contact */}
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-brand-primaryDark transition-colors"
                      >
                        <Mail size={14} />
                        Email
                      </a>
                      <a
                        href={member.contact.linkedin}
                        className="flex items-center justify-center gap-2 border border-surface-200 text-surface-600 px-3 py-2 rounded-lg text-sm hover:bg-surface-50 transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-br from-brand-primaryTint/30 to-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Why Choose EasiHome?
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              We deliver exceptional results through proven processes, cutting-edge technology, and unwavering commitment to quality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{item.stat}</div>
                  <h3 className="text-xl font-semibold text-surface-900 mb-3">{item.title}</h3>
                  <p className="text-surface-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by industry-leading certifications and awards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="card p-6 text-center h-full hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-brand-primary/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon size={28} className="text-brand-yellow" />
                  </div>
                  <div className="bg-brand-yellow text-brand-primary px-2 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                    {cert.year}
                  </div>
                  <h3 className="text-lg font-semibold text-surface-900 mb-2">{cert.title}</h3>
                  <p className="text-surface-600 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-surface-100">
        <div className="container-custom">
          <motion.div
            {...viewportAnimation}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
              Our Growth Journey
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              From a small startup to a trusted construction partner - here's how we've grown and evolved.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {milestones.map((milestone, index) => (
              <motion.div key={index} variants={staggerItem}>
                <div className="flex items-start gap-6 mb-12 group">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border-l-4 border-brand-primary">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center">
                        <milestone.icon size={24} className="text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-surface-900 mb-2">{milestone.event}</h3>
                        <p className="text-surface-600">{milestone.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-brand-primary via-brand-primaryDark to-brand-steel text-white relative overflow-hidden">
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
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-xl text-brand-primaryTint mb-8 leading-relaxed">
              Join hundreds of satisfied customers who have trusted EasiHome with their construction needs. 
              Let's turn your vision into reality with our expertise and commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="secondary"
                size="lg"
                icon={Phone}
                onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
                className="bg-white text-brand-primary hover:bg-brand-primaryTint/10 shadow-xl hover:shadow-2xl"
              >
                Get Free Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={Download}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Download Brochure
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                icon={ArrowRight}
                onClick={() => window.location.href = '/contact'}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Start Your Project
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-brand-primaryTint">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15+</div>
                <div className="text-brand-primaryTint">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">4.8★</div>
                <div className="text-brand-primaryTint">Customer Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection
        title="Our Achievements"
        subtitle="Numbers that reflect our commitment to excellence"
      />
    </div>
  );
};

export default About;
