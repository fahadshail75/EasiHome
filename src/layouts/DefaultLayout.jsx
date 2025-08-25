import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { COMPANY_INFO } from '../utils/constants';
import { pageTransition } from '../utils/animations';

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      
      <motion.main 
        className="flex-1"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, '')}`, '_blank')}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default DefaultLayout;
