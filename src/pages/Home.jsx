import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users, PenTool, LayoutGrid } from 'lucide-react';

import heroImg from '../assets/images/modern_gypsum_art.png';
import aboutImg from '../assets/images/new_image_13.jpg';
import ctaImg from '../assets/images/new_image_15.jpg';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: 'Gypsum Ceiling Works', icon: <PenTool size={32} />, desc: 'Premium quality gypsum designs tailored for modern spaces.' },
    { title: 'Partition Works', icon: <LayoutGrid size={32} />, desc: 'Elegant and durable partition solutions for offices and homes.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary font-medium tracking-wider text-sm mb-6 uppercase">
              Assaqf Technical Services LLC
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Redefining <span className="text-primary italic">Elegant</span> Gypsum Works
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              With 25+ years of excellence, we deliver premium gypsum ceiling works, partitions, and luxury designer cornices across UAE and India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-yellow-600 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 relative z-30 -mt-8 rounded-t-[2.5rem]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '25+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '2', label: 'Countries (UAE & India)' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeInUp} className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img src={aboutImg} alt="Luxury Gypsum Works" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl dark:text-white">Premium Quality</h4>
                    <p className="text-sm text-gray-500">Unmatched craftsmanship</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} className="w-full lg:w-1/2">
              <span className="text-primary font-medium tracking-wider uppercase mb-2 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Crafting Spaces That Inspire
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                For over 25 years, Assaqf Technical Services LLC has been at the forefront of gypsum space transformation. We specialize in providing comprehensive gypsum ceiling and partition solutions that blend aesthetics with functionality.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Expertise in complex architectural designs',
                  'Use of premium quality materials',
                  'Timely project delivery',
                  'Dedicated teams in UAE and India'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium">
                    <CheckCircle2 className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors">
                Discover Our Story <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium tracking-wider uppercase mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-16">
            Services We Provide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 text-left"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {srv.desc}
                </p>
                <Link to="/services" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-fixed mix-blend-overlay z-0" style={{ backgroundImage: `url(${ctaImg})` }}></div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">Contact us today for a free consultation and let's bring your vision to life.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
