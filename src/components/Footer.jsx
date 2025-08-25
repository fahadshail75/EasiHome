import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES } from '../utils/constants';
import Button from './Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = NAVIGATION.slice(0, 6);
  const serviceLinks = SERVICES.slice(0, 6);

  const whatsappHref = `https://wa.me/${(COMPANY_INFO.whatsapp || COMPANY_INFO.phone || '').replace(/\D/g, '')}`;
  const telHref = `tel:${COMPANY_INFO.phone}`;
  const mailHref = `mailto:${COMPANY_INFO.email}`;
  const fullAddress = COMPANY_INFO?.address?.full || `${COMPANY_INFO?.address?.street || ''}, ${COMPANY_INFO?.address?.area || ''}, ${COMPANY_INFO?.address?.city || ''}, ${COMPANY_INFO?.address?.state || ''} ${COMPANY_INFO?.address?.pincode || ''}`.replace(/,\s*,/g, ', ');

  const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, ease: 'easeOut' } };

  const onSubscribe = (e) => {
    e.preventDefault();
    // No-op for now; hook up to backend or email service later.
  };

  return (
    <footer className="relative bg-surface-900 text-white overflow-hidden">
      {/* Decorative gradient glow */}
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 left-0 h-64 bg-gradient-to-r from-brand-primary/20 via-brand-steel/20 to-transparent blur-3xl" />

    
      {/* Main Footer */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand & Contact */}
            <motion.div {...fadeUp} className="space-y-5">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-primaryDark flex items-center justify-center shadow-lg">
                  <Home size={22} className="text-white" />
                </div>
                <div className="ml-3">
                  <div className="text-2xl font-heading font-bold text-brand-yellow">{COMPANY_INFO.name || 'EasiHome'}</div>
                  <div className="text-sm text-white/70">{COMPANY_INFO.tagline}</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{COMPANY_INFO.description}</p>
              <div className="space-y-3">
                <a href={telHref} className="flex items-center gap-3 text-white/80 hover:text-brand-yellow transition-colors"><Phone size={16} />{COMPANY_INFO.phone}</a>
                <a href={mailHref} className="flex items-center gap-3 text-white/80 hover:text-brand-yellow transition-colors"><Mail size={16} />{COMPANY_INFO.email}</a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-primary" />
                  <span className="text-sm leading-relaxed">{fullAddress}</span>
                </div>
              </div>
              <div className="flex gap-3 pt-1">
                <a aria-label="WhatsApp" href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"><MessageCircle size={18} className="text-white" /></a>
                <a aria-label="Facebook" href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"><Facebook size={18} className="text-white" /></a>
                <a aria-label="Instagram" href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"><Instagram size={18} className="text-white" /></a>
                <a aria-label="Twitter" href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"><Twitter size={18} className="text-white" /></a>
                <a aria-label="LinkedIn" href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"><Linkedin size={18} className="text-white" /></a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.nav {...fadeUp} aria-label="Quick links">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="group inline-flex items-center text-white/80 hover:text-brand-yellow transition-colors">
                      <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Services */}
            <motion.nav {...fadeUp} aria-label="Services">
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((s) => (
                  <li key={s.id}>
                    <Link to={s.href} className="group inline-flex items-center text-white/80 hover:text-brand-yellow transition-colors">
                      <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Newsletter */}
            <motion.div {...fadeUp}>
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <p className="text-white/80 mb-4">Get updates on latest projects and offers.</p>
              <form onSubmit={onSubscribe} className="flex gap-2">
                <input
                  aria-label="Email address"
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                />
                <Button variant="secondary" size="sm" type="submit">Subscribe</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {currentYear} EasiHome. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-brand-yellow transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/60 hover:text-brand-yellow transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-white/60 hover:text-brand-yellow transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;