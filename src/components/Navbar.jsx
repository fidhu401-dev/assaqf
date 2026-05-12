import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        isTransparent ? 'bg-transparent py-3 sm:py-5' : 'glass ' + (isScrolled ? 'py-2 sm:py-3 shadow-md' : 'py-3 sm:py-5 border-b border-gray-200/20')
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center sm:justify-between items-center gap-3 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded flex items-center justify-center text-white font-heading font-bold text-lg sm:text-xl">
            A
          </div>
          <span className={`font-heading font-bold text-lg sm:text-xl md:text-2xl tracking-wide ${isTransparent ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            ASSAQF
          </span>
        </Link>

        {/* Responsive Inline Nav */}
        <nav className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs sm:text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
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
            className={`flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              isTransparent
                ? 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-gray-900'
                : 'bg-primary text-white hover:bg-yellow-600 shadow-md hover:shadow-lg'
            }`}
          >
            <Phone size={14} className="sm:w-4 sm:h-4" />
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
