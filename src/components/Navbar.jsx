import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent py-5' : 'glass ' + (isScrolled ? 'py-3 shadow-md' : 'py-5 border-b border-gray-200/20')
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-heading font-bold text-xl">
            A
          </div>
          <span className={`font-heading font-bold text-xl md:text-2xl tracking-wide ${isTransparent ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            ASSAQF
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : isTransparent ? 'text-gray-200 hover:text-white' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+971583797914"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isTransparent
                ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-gray-900'
                : 'bg-primary text-white hover:bg-yellow-600 shadow-md hover:shadow-lg'
            }`}
          >
            <Phone size={16} />
            Let's Talk
          </a>
        </nav>

        <button 
          className={`md:hidden z-50 p-2 rounded-md ${isTransparent && !isMobileMenuOpen ? 'text-white' : 'text-gray-900 dark:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-heading tracking-wider ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+971583797914"
                className="mt-4 flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full text-lg shadow-lg"
              >
                <Phone size={20} />
                +971 58 379 7914
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
