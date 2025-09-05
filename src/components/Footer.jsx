import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Palette } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-950 to-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Logo 
              variant="footer" 
              size="lg" 
              className="justify-center"
            />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Revolutionizing spaces with art & design. Transforming homes with innovative layouts, colour harmonies, and design technologies.
            </p>
            <p className="text-gray-500 text-sm">
              {COMPANY_INFO.name}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <Link
              to="/interior-design"
              className="flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:scale-105"
            >
              <Palette className="h-4 w-4" />
              Interior Design
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:scale-105"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:scale-105"
            >
              About Us
            </Link>
            <Link
              to="/service-provider"
              className="text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:scale-105"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-brand-primary transition-colors duration-300 hover:scale-105"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              {COMPANY_INFO.email}
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="group relative p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-brand-primary/50 transition-all duration-300"
              title={`Email us at ${COMPANY_INFO.email}`}
            >
              <Mail className="h-5 w-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-white/10 hover:border-brand-primary/50 transition-all duration-300"
              title="Connect with us on LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="px-4">
              <Palette className="h-4 w-4 text-brand-primary/50" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Revolutionizing Spaces with Art & Design
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;