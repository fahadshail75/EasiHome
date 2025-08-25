import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Construction from '../pages/Construction';
import Renovation from '../pages/Renovation';
import InteriorDesign from '../pages/InteriorDesign';
import Painting from '../pages/Painting';
import BuildingMaterial from '../pages/BuildingMaterial';
import ServiceProvider from '../pages/ServiceProvider';
import BuySalePlot from '../pages/BuySalePlot';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <DefaultLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/renovation" element={<Renovation />} />
          <Route path="/interior-design" element={<InteriorDesign />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/building-material" element={<BuildingMaterial />} />
          <Route path="/service-provider" element={<ServiceProvider />} />
          <Route path="/buy-sale-plot" element={<BuySalePlot />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </DefaultLayout>
  );
};

export default AppRoutes;
