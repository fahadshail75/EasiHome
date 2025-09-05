import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { CITIES, WORK_TYPES } from '../utils/constants';
import { fadeInUp } from '../utils/animations';
import Button from './Button';

const ContactForm = ({ 
  title = "Get Free Consultation",
  subtitle = "Tell us about your project and we'll get back to you within 24 hours",
  className = "",
  compact = false,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    workType: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.city) newErrors.city = 'Please select a city';
    if (!formData.workType) newErrors.workType = 'Please select work type';
    if (!formData.consent) newErrors.consent = 'Please agree to be contacted';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        workType: '',
        message: '',
        consent: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        {...fadeInUp}
        className={`card p-4 sm:p-6 md:p-8 text-center ${className}`}
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} className="text-success sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-surface-900 mb-2">
          Thank You!
        </h3>
        <p className="text-sm sm:text-base text-surface-600 mb-4 sm:mb-6">
          We've received your inquiry and will contact you within 24 hours.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSubmitted(false)}
          className="text-sm sm:text-base"
        >
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...fadeInUp}
      className={`card p-3 sm:p-4 md:p-6 lg:p-8 ${className}`}
    >
      {!compact && (
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-surface-900 mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-surface-600">
            {subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-surface-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input text-sm py-2 ${errors.name ? 'border-error' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-error text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-surface-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`form-input text-sm py-2 ${errors.phone ? 'border-error' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-error text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-surface-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input text-sm py-2 ${errors.email ? 'border-error' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-error text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-surface-700 mb-1">
              City *
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`form-select text-sm py-2 ${errors.city ? 'border-error' : ''}`}
            >
              <option value="">Select your city</option>
              {CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            {errors.city && (
              <p className="text-error text-xs mt-1">{errors.city}</p>
            )}
          </div>
        </div>

        {/* Work Type */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-surface-700 mb-1">
            Type of Work *
          </label>
          <select
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            className={`form-select text-sm py-2 ${errors.workType ? 'border-error' : ''}`}
          >
            <option value="">Select work type</option>
            {WORK_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.workType && (
            <p className="text-error text-xs mt-1">{errors.workType}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs sm:text-sm font-medium text-surface-700 mb-1">
            Project Details (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea text-sm py-2"
            placeholder="Tell us more about your project requirements..."
            rows={3}
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 text-brand-primary border-surface-300 rounded focus:ring-brand-primary"
          />
          <label className="text-xs sm:text-sm text-surface-600">
            I agree to be contacted by ORPHIC ART REVOLUTION PRIVATE LIMITED regarding my inquiry. 
            <span className="text-brand-primary"> Privacy Policy</span>
          </label>
        </div>
        {errors.consent && (
          <p className="text-error text-xs">{errors.consent}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          icon={Send}
          loading={isSubmitting}
          className="w-full text-sm sm:text-base py-2.5 sm:py-3"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
