import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, MapPin, Calendar, Award, ArrowUpRight, Play, X } from 'lucide-react';
import { projectImages } from '../utils/images';

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Extract categories from project data
  const categories = ['all', ...new Set(projectImages.completed.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projectImages.completed 
    : projectImages.completed.filter(project => project.category === selectedCategory);

  // Navigation functions
  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Auto-advance projects
  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, [filteredProjects.length]);

  // Reset active project when category changes
  useEffect(() => {
    setActiveProject(0);
  }, [selectedCategory]);

  const openModal = (project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentProject = filteredProjects[activeProject];

  return (
    <div ref={containerRef} className="relative">
      {/* Category Filter */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-brand-primary text-white shadow-lg'
                : 'bg-white text-surface-600 hover:bg-brand-primaryTint/10 shadow-sm'
            }`}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </motion.div>

      {/* Main Project Display */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 gap-8 items-center"
      >
        {/* Project Images */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-surface-100">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={activeProject}
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <img
                  src={currentProject?.src}
                  alt={currentProject?.alt}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => openModal(currentProject)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* View Project Button */}
                <button
                  onClick={() => openModal(currentProject)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
                >
                  <Eye size={20} className="group-hover:scale-110 transition-transform" />
                </button>

                {/* Project Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-500/90 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Completed
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeProject ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {filteredProjects.slice(0, 4).map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === activeProject ? 'border-brand-primary' : 'border-transparent hover:border-surface-300'
                }`}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-brand-primary mb-2">
              <Award size={16} />
              <span className="text-sm font-medium">{currentProject?.category}</span>
            </div>
            <h3 className="text-3xl font-bold text-surface-900 mb-3">
              {currentProject?.alt}
            </h3>
            <p className="text-surface-600 leading-relaxed mb-4">
              A stunning example of modern architecture combining functionality with aesthetic appeal. 
              This project showcases our commitment to quality craftsmanship and innovative design solutions.
            </p>
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-surface-50 rounded-xl">
              <MapPin size={20} className="text-brand-primary" />
              <div>
                <div className="text-sm text-surface-600">Location</div>
                <div className="font-semibold text-surface-900">{currentProject?.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface-50 rounded-xl">
              <Calendar size={20} className="text-brand-primary" />
              <div>
                <div className="text-sm text-surface-600">Completed</div>
                <div className="font-semibold text-surface-900">{currentProject?.year}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => openModal(currentProject)}
              className="flex-1 bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Details
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="px-6 py-3 border-2 border-surface-200 text-surface-700 rounded-xl font-semibold hover:border-brand-primary hover:text-brand-primary transition-all duration-300 flex items-center gap-2">
              <Play size={16} />
              Virtual Tour
            </button>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">2500</div>
              <div className="text-sm text-surface-600">Sq Ft</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">6</div>
              <div className="text-sm text-surface-600">Months</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">4.9★</div>
              <div className="text-sm text-surface-600">Rating</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for Full Image View */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
              >
                <X size={20} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-surface-900 mb-2">{selectedImage.alt}</h3>
                <div className="flex items-center gap-4 text-surface-600">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {selectedImage.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {selectedImage.year}
                  </span>
                  <span className="bg-brand-primaryTint/20 text-brand-primary px-2 py-1 rounded-full text-sm">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase;
