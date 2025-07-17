import { useState, useEffect } from 'react';
import logo from "../assets/Screenshot_2025-07-14_184136-removebg-preview.png";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isActive = (section) => activeSection === section;

  const getLinkClassName = (section) => {
    const baseClass =
      'px-2 py-2 text-base font-medium border-b-2 whitespace-nowrap cursor-pointer transition-colors duration-200';
    if (!scrolled) {
      return isActive(section)
        ? `${baseClass} text-white border-white`
        : `${baseClass} text-white border-transparent hover:border-white hover:text-white`;
    } else {
      return isActive(section)
        ? `${baseClass} text-green-700 border-green-500`
        : `${baseClass} text-green-800 border-transparent hover:text-green-600 hover:border-green-300`;
    }
  };

  const getMobileLinkClassName = (section) => {
    const baseClass =
      'block px-3 py-2 text-base font-medium rounded-md cursor-pointer';
    return isActive(section)
      ? `${baseClass} text-green-700 bg-green-50`
      : `${baseClass} text-green-800 hover:text-green-600 hover:bg-green-50`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 text-lg shadow-md transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 mr-4">
            <div className="flex items-center">
              <div className='w-36 h-36 mr-10 py-1'>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-grow">
            <div className="flex items-baseline justify-center space-x-6">
              {['home', 'products', 'about', 'gallery', 'testimonials', 'contact'].map((section) => (
                <span
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={getLinkClassName(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              ))}
            </div>
          </div>

          {/* CTA and Indicators */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
  

            <button
              className="text-white px-6 py-2 rounded-md text-base font-medium"
              style={{ backgroundColor: '#2E7D32' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#5D4037')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#2E7D32')}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none transition-colors duration-200"
              style={{ color: '#2E7D32' }}
              onMouseEnter={(e) => {
                e.target.style.color = '#5D4037';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#2E7D32';
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((section) => (
              <span
                key={section}
                onClick={() => scrollToSection(section)}
                className={getMobileLinkClassName(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            ))}

            <div className="px-3 py-4 border-t border-gray-200">
              <div
                className="flex items-center justify-center space-x-2 mb-3 px-3 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(174, 213, 129, 0.2)',
                }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span
                  className="text-xs font-medium"
                  style={{ color: '#2E7D32' }}
                >
                  Verified Exporter
                </span>
              </div>
              <button
                className="w-full text-white px-4 py-2 rounded-md text-base font-medium"
                style={{ backgroundColor: '#2E7D32' }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#5D4037')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#2E7D32')}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
