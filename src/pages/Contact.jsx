import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send, Star, 
  CheckCircle, ArrowRight, Calendar, Globe, Headphones,
  Users, Award, Shield, Zap, Download, Eye, HelpCircle,
  ChevronDown, ExternalLink, Navigation
} from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';
import { COMPANY_INFO } from '../utils/constants';
import { viewportAnimation, staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch with Our Experts"
        description="We'll call you within 24 hours to discuss your project requirements and provide expert consultation."
        breadcrumbs={[{ name: "Contact Us" }]}
        variant="contact"
      />

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div {...viewportAnimation}>
              <h2 className="text-2xl font-heading font-bold text-surface-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">Phone</h3>
                    <p className="text-surface-600">{COMPANY_INFO.phone}</p>
                    <p className="text-sm text-surface-500">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">Email</h3>
                    <p className="text-surface-600">{COMPANY_INFO.email}</p>
                    <p className="text-sm text-surface-500">Send us your project details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">Address</h3>
                    <p className="text-surface-600">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}<br />
                      {COMPANY_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1">Business Hours</h3>
                    <p className="text-surface-600">
                      Weekdays: {COMPANY_INFO.businessHours.weekdays}<br />
                      Saturday: {COMPANY_INFO.businessHours.saturday}<br />
                      Sunday: {COMPANY_INFO.businessHours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="mt-8 p-4 bg-brand-primaryTint rounded-xl">
                <p className="text-brand-primary font-medium">
                  📞 We'll call you within 24 hours to discuss your project requirements and provide a detailed consultation.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...viewportAnimation}>
              <ContactForm 
                title="Send us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-surface-100">
        <div className="container-custom">
          <motion.div {...viewportAnimation}>
            <h2 className="text-2xl font-heading font-bold text-surface-900 mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-surface-300 h-96 rounded-2xl flex items-center justify-center">
              <p className="text-surface-600">Google Map Integration</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
