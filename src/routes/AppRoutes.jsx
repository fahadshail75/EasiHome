import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import InteriorDesign from '../pages/InteriorDesign';
import ServiceProvider from '../pages/ServiceProvider';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <DefaultLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interior-design" element={<InteriorDesign />} />
          <Route path="/service-provider" element={<ServiceProvider />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
};

export default AppRoutes;
