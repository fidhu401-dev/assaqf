import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-heading font-bold">
                A
              </div>
              <span className="font-heading font-bold text-xl tracking-wide">
                ASSAQF
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Redefining Elegant Gypsum Spaces. With over 25+ years of experience, we bring luxury, precision, and craftsmanship to every ceiling and partition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 pb-2 border-b border-gray-800 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="text-primary text-xs">▸</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 pb-2 border-b border-gray-800 inline-block">Our Services</h4>
            <ul className="space-y-3">
              {['Modern Gypsum Ceilings', 'Designer Cornices', 'Gypsum Partitions', 'Grid Ceiling Installation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="text-primary text-xs">▸</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 pb-2 border-b border-gray-800 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>
                  <strong>UAE:</strong> Dubai, United Arab Emirates<br/>
                  <strong>India:</strong> Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>
                  UAE: +971 58 379 7914<br/>
                  India: +91 9746537722
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:assaqftechnicalservices@gmail.com" className="hover:text-primary transition-colors">
                  assaqftechnicalservices@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Assaqf Technical Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
