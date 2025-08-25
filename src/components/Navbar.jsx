import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Home, Building2, Hammer, Palette, Paintbrush2, Package, Users, MapPin, Mail } from 'lucide-react';
import { NAVIGATION, COMPANY_INFO, SERVICES } from '../utils/constants';
import { cn } from '../utils/cn';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close services dropdown on click outside
  useEffect(() => {
    const onClick = (e) => {
      if (!servicesRef.current) return;
      if (activeDropdown === 'services' && !servicesRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [activeDropdown]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? 'hidden' : original || '';
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [isOpen]);

  // Close menus on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const navbarClasses = cn(
    'sticky top-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top)]',
    isScrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-surface-200/50'
      : 'bg-white/80 backdrop-blur-sm'
  );

  const serviceItems = SERVICES.slice(0, 6);

  return (
    <nav className={navbarClasses}>
      {/* Skip to content for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-surface-900 focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
      <div className="container-custom">
        <div className={cn('flex items-center justify-between transition-all duration-300', isScrolled ? 'h-16' : 'h-20')}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className={cn('bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300', isScrolled ? 'w-10 h-10' : 'w-12 h-12')}>
                  <Home size={24} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-yellow rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-heading font-bold text-brand-primary group-hover:text-brand-primaryDark transition-colors">
                  EasiHome
                </div>
                <div className="text-xs text-surface-500 -mt-1">Construction & Design</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              to="/"
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-surface-100',
                location.pathname === '/'
                  ? 'text-brand-primary bg-brand-primaryTint'
                  : 'text-surface-700 hover:text-brand-primary'
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
                onClick={() => setActiveDropdown((d) => (d === 'services' ? null : 'services'))}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-surface-700 hover:text-brand-primary hover:bg-surface-100 transition-all duration-300"
              >
                Services
                <ChevronDown size={16} className={cn(
                  'transition-transform duration-300',
                  activeDropdown === 'services' ? 'rotate-180' : ''
                )} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-surface-200 p-4"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {serviceItems.map((service) => {
                        const IconComponent = service.icon === 'Building2' ? Building2 :
                                            service.icon === 'Hammer' ? Hammer :
                                            service.icon === 'Palette' ? Palette :
                                            service.icon === 'Paintbrush2' ? Paintbrush2 :
                                            service.icon === 'Package' ? Package :
                                            service.icon === 'Users' ? Users : Building2;

                        return (
                          <Link
                            key={service.id}
                            to={service.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-50 transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 bg-brand-primaryTint rounded-lg flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                              <IconComponent size={18} />
                            </div>
                            <div>
                              <div className="font-medium text-surface-900 text-sm">{service.name}</div>
                              {service.discount && (
                                <div className="text-xs text-brand-primary font-medium">{service.discount}</div>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Items */}
            {NAVIGATION.slice(1, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-surface-100',
                  location.pathname === item.href
                    ? 'text-brand-primary bg-brand-primaryTint'
                    : 'text-surface-700 hover:text-brand-primary'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact */}
            <Link
              to="/contact"
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-surface-100',
                location.pathname === '/contact'
                  ? 'text-brand-primary bg-brand-primaryTint'
                  : 'text-surface-700 hover:text-brand-primary'
              )}
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-sm text-surface-600 hover:text-brand-primary transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>

            <Button
              variant="primary"
              size="md"
              className="shadow-lg hover:shadow-xl"
              onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
            >
              Free Consultation
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-surface-700 hover:text-brand-primary hover:bg-surface-100 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
  <AnimatePresence>
        {isOpen && (
          <motion.div
    id="mobile-menu"
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.2 }}
    className={cn('lg:hidden fixed inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-surface-200 shadow-xl overflow-y-auto', isScrolled ? 'top-16 max-h-[calc(100vh-4rem)]' : 'top-20 max-h-[calc(100vh-5rem)]')}
          >
            <div className="container-custom py-6">
              <div className="space-y-4">
                {/* Mobile Navigation Links */}
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300',
                      location.pathname === item.href
                        ? 'text-brand-primary bg-brand-primaryTint'
                        : 'text-surface-700 hover:text-brand-primary hover:bg-surface-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-surface-200 space-y-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-50 transition-colors"
                  >
                    <Phone size={20} className="text-brand-primary" />
                    <span className="font-medium text-surface-700">{COMPANY_INFO.phone}</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-50 transition-colors"
                  >
                    <Mail size={20} className="text-brand-primary" />
                    <span className="font-medium text-surface-700">{COMPANY_INFO.email}</span>
                  </a>

                  <Button
                    variant="primary"
                    className="w-full mt-4"
                    onClick={() => window.open(`tel:${COMPANY_INFO.phone}`, '_self')}
                  >
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
