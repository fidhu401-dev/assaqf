import { motion } from 'framer-motion';
import { LayoutGrid, PenTool, Home, Grid, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

import new1 from '../assets/images/new_image_14.jpg';
import new2 from '../assets/images/new_image_16.jpg';
import new3 from '../assets/images/new_image_15.jpg';
import new4 from '../assets/images/new_image_14.jpg';
import new5 from '../assets/images/new_image_17.jpg';

const Services = () => {
  const servicesList = [
    {
      title: 'Complete Gypsum Ceiling Works',
      icon: <PenTool size={32} />,
      desc: 'We design and install intricate gypsum ceilings that enhance the aesthetic appeal of any room, featuring modern lighting integrations.',
      image: new1
    },
    {
      title: 'All Partition Works',
      icon: <LayoutGrid size={32} />,
      desc: 'Functional and elegant partition solutions including glass, gypsum, and wood, perfect for office spaces and residential zoning.',
      image: new2
    },
    {
      title: 'Quality Grid Ceiling Installation',
      icon: <Grid size={32} />,
      desc: 'Durable and professional grid ceilings ideal for commercial spaces, ensuring easy access to utilities while maintaining a clean look.',
      image: new3
    },
    {
      title: 'False Ceiling Solutions',
      icon: <Layers size={32} />,
      desc: 'Custom false ceilings that improve acoustics, hide wiring, and provide thermal insulation with stunning visual appeal.',
      image: new4
    },
    {
      title: 'Commercial & Residential Gypsum Works',
      icon: <Zap size={32} />,
      desc: 'Turnkey gypsum works for both homes and businesses, delivering high-end finishes on time and within budget.',
      image: new5
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase mb-2 block">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Our Premium Services
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Delivering excellence through specialized gypsum ceiling and partition finishes for luxury spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {servicesList.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-800 shadow-sm hover-3d"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4 pr-12">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-yellow-600 transition-colors">
                  Inquire Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
