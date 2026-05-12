import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import new1 from '../assets/images/new_image_14.jpg';
import new2 from '../assets/images/new_image_15.jpg';
import new3 from '../assets/images/new_image_16.jpg';
import new4 from '../assets/images/new_image_17.jpg';
import new5 from '../assets/images/new_image_13.jpg';
import new6 from '../assets/images/new_image_10.jpg';
import new7 from '../assets/images/new_image_11.jpg';
import new8 from '../assets/images/new_image_12.jpg';
import new9 from '../assets/images/new_image_19.jpg';
import new10 from '../assets/images/new_image_20.jpg';
import new11 from '../assets/images/new_image_21.jpg';
import new12 from '../assets/images/new_image_18.jpg';
import new13 from '../assets/images/new_image_24.jpg';
import new14 from '../assets/images/new_image_25.jpg';
import new15 from '../assets/images/new_image_26.jpg';
import new16 from '../assets/images/new_image_27.jpg';
import new17 from '../assets/images/new_image_28.jpg';
import new18 from '../assets/images/new_image_29.jpg';
import new19 from '../assets/images/new_image_30.jpg';
import new20 from '../assets/images/new_image_31.jpg';
import new21 from '../assets/images/new_image_32.jpg';
import new22 from '../assets/images/new_image_33.jpg';
import new23 from '../assets/images/new_image_34.jpg';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Gypsum Works', 'Ceiling Designs', 'Gypsum Partitions', 'Designer Cornices'];

  const projects = [
    { id: 1, category: 'Ceiling Designs', title: 'Luxury Square Ceiling', img: new1 },
    { id: 2, category: 'Ceiling Designs', title: 'Minimalist Recessed Lights', img: new2 },
    { id: 3, category: 'Gypsum Partitions', title: 'Modern Dining Area Partition', img: new3 },
    { id: 4, category: 'Gypsum Partitions', title: 'Living Room TV Unit', img: new9 },
    { id: 5, category: 'Designer Cornices', title: 'Elegant Bedroom Cornices', img: new5 },
    { id: 6, category: 'Ceiling Designs', title: 'Round Chandelier Design', img: new10 },
    { id: 7, category: 'Ceiling Designs', title: 'Minimalist Ceiling Lights', img: new7 },
    { id: 8, category: 'Gypsum Partitions', title: 'Modern Kitchen Fit-out', img: new11 },
    { id: 9, category: 'Designer Cornices', title: 'Cozy Bedroom Design', img: new6 },
    { id: 11, category: 'Commercial Projects', title: 'Al Razi Exterior', img: new4 },
    { id: 12, category: 'Gypsum Partitions', title: 'Master Bedroom Partition', img: new12 },
    { id: 13, category: 'Ceiling Designs', title: 'Dining Room Ceiling', img: new13 },
    { id: 14, category: 'Gypsum Works', title: 'Kids Room Custom Fit-out', img: new14 },
    { id: 15, category: 'Gypsum Works', title: 'Kitchen Ceiling & Cornice', img: new15 },
    { id: 16, category: 'Ceiling Designs', title: 'Square Grid Ceiling', img: new16 },
    { id: 17, category: 'Gypsum Partitions', title: 'Glass & Gypsum Partition', img: new17 },
    { id: 18, category: 'Ceiling Designs', title: 'Living Room L-Shape Ceiling', img: new18 },
    { id: 19, category: 'Gypsum Works', title: 'Ceiling with Wooden Accents', img: new19 },
    { id: 20, category: 'Ceiling Designs', title: 'Round Glowing Gypsum Ceiling', img: new20 },
    { id: 21, category: 'Designer Cornices', title: 'Elegant Corner Cornice', img: new21 },
    { id: 22, category: 'Ceiling Designs', title: 'High-Rise Recessed Ceiling', img: new22 },
    { id: 23, category: 'Designer Cornices', title: 'Sleek Modern Cornice', img: new23 },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-wider uppercase mb-2 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Browse through our extensive gallery of completed projects.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-container">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-gray-100 dark:bg-gray-800 hover-3d-reverse"
                onClick={() => setSelectedImage(project)}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-medium mb-1 block">{project.category}</span>
                    <h3 className="text-white font-heading font-bold text-xl">{project.title}</h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.img} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">{selectedImage.category}</span>
                <h3 className="text-white font-heading text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
