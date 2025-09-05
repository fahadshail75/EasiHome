import { Phone, Mail, MapPin, Clock, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, CITIES } from '../utils/constants';

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:block bg-brand-primary text-white py-3 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
                        <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-primary transition-all duration-300">
                <Phone size={14} className="text-white" />
              </div>
              <span className="font-medium text-white">{COMPANY_INFO.phone}</span>
            </motion.a>

            <motion.a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 hover:text-white transition-all duration-300 group hidden sm:flex"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-primary transition-all duration-300">
                <Mail size={14} className="text-white" />
              </div>
              <span className="font-medium text-white">{COMPANY_INFO.email}</span>
            </motion.a>
          </div>

          {/* Center - Trust Badges */}
          <div className="hidden lg:flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2 text-white">
              <Shield size={16} className="text-brand-yellow" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Award size={16} className="text-brand-yellow" />
              <span>500+ Projects</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock size={16} className="text-brand-yellow" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Right Side - Location & CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-brand-yellow" />
              <select className="bg-white/20 text-white text-sm border border-white/20 rounded-lg px-3 py-1 outline-none cursor-pointer hover:bg-white/30 transition-colors">
                {CITIES.map(city => (
                  <option key={city} value={city} className="text-black bg-white">
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-brand-yellow text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition-colors"
              >
                Free Quote
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
