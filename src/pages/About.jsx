import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-medium tracking-wider uppercase mb-2 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            25+ Years of Excellence in Gypsum Works
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Assaqf Technical Services LLC is a premier gypsum works provider specializing in modern gypsum ceilings, designer cornices, and complete gypsum partitions across UAE and India.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80" alt="Team at work" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Built on Trust and Quality</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded with a vision to redefine elegance in gypsum works, we have grown into a trusted name for commercial and residential projects. Our dedication to quality craftsmanship and attention to detail sets us apart in the industry.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We operate across the UAE and India, bringing international standards and innovative designs to every space we transform.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-2xl text-gray-900 dark:text-white">25+</h4>
                <p className="text-gray-500">Years Experience</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-2xl text-gray-900 dark:text-white">500+</h4>
                <p className="text-gray-500">Projects Done</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision / Mission */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Our Mission', icon: <Target size={32} />, desc: 'To provide top-tier gypsum solutions that combine innovative design with impeccable execution, ensuring total client satisfaction.' },
            { title: 'Our Vision', icon: <Eye size={32} />, desc: 'To be the most sought-after gypsum contracting company, recognized globally for setting new standards in luxury and quality.' },
            { title: 'Core Values', icon: <Award size={32} />, desc: 'Integrity, Quality, Innovation, and Reliability are the pillars of everything we do at Assaqf Technical Services.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
