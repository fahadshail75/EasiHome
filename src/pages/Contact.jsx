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
        subtitle="Get in Touch with Our Interior Design Experts"
        description="Schedule a free consultation to discuss your interior design project. We'll visit your space and provide expert guidance."
        breadcrumbs={[{ name: "Contact Us" }]}
        variant="contact"
      />

      {/* Contact Info & Form */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div {...viewportAnimation}>
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-surface-900 mb-4 sm:mb-6">
                Let's Discuss Your Interior Design Project
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-brand-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1 text-sm sm:text-base">Phone</h3>
                    <p className="text-surface-600 text-sm sm:text-base">{COMPANY_INFO.phone}</p>
                    <p className="text-xs sm:text-sm text-surface-500">Call us for interior design consultation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-brand-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-surface-600 text-sm sm:text-base">{COMPANY_INFO.email}</p>
                    <p className="text-xs sm:text-sm text-surface-500">Send us your project details</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1 text-sm sm:text-base">Address</h3>
                    <p className="text-surface-600 text-sm sm:text-base">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}<br />
                      {COMPANY_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primaryTint rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-primary sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-surface-900 mb-1 text-sm sm:text-base">Business Hours</h3>
                    <p className="text-surface-600 text-sm sm:text-base">
                      Weekdays: {COMPANY_INFO.businessHours.weekdays}<br />
                      Saturday: {COMPANY_INFO.businessHours.saturday}<br />
                      Sunday: {COMPANY_INFO.businessHours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-brand-primaryTint rounded-xl">
                <p className="text-brand-primary font-medium text-xs sm:text-sm">
                  📞 We'll call you within 24 hours to discuss your design project and provide expert consultation.
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
      <section className="py-8 sm:py-12 md:py-16 bg-surface-100">
        <div className="container-custom">
          <motion.div {...viewportAnimation}>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-surface-900 mb-4 sm:mb-6 text-center">
              Find Us
            </h2>
            <div className="bg-surface-300 h-64 sm:h-80 md:h-96 rounded-2xl flex items-center justify-center">
              <p className="text-surface-600 text-sm sm:text-base">Google Map Integration</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
