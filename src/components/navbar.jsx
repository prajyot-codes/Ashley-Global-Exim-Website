import { useState } from 'react';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const isActive = (section) => activeSection === section;

  const getLinkClassName = (section) => {
    const baseClass = "px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 whitespace-nowrap cursor-pointer";
    return isActive(section) 
      ? `${baseClass} text-green-700 border-green-500`
      : `${baseClass} border-transparent text-green-800 hover:text-green-600 hover:border-green-300`;
  };

  const getMobileLinkClassName = (section) => {
    const baseClass = "block px-3 py-2 text-base font-medium rounded-md cursor-pointer";
    return isActive(section)
      ? `${baseClass} text-green-700 bg-green-50`
      : `${baseClass} text-green-800 hover:text-green-600 hover:bg-green-50`;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200 text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center flex-shrink-0 mr-4">
            <div className="flex items-center">
              {/* Logo - using a simple pomegranate emoji for now, you can replace with actual logo */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{backgroundColor: '#2E7D32'}}>
                🍎
              </div>
              <div className="ml-3 hidden sm:block">
                <h1 className="text-xl font-bold" style={{color: '#2E7D32'}}>Ashley Global Exim</h1>
                <p className="text-xs font-medium tracking-wide" style={{color: '#5D4037'}}>PREMIUM INDIAN EXPORTS</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-grow">
            <div className="flex items-baseline justify-center space-x-6">
              <span
                onClick={() => scrollToSection('home')}
                className={getLinkClassName('home')}
              >
                Home
              </span>
              <span
                onClick={() => scrollToSection('about')}
                className={getLinkClassName('about')}
              >
                About Us
              </span>
              <span
                onClick={() => scrollToSection('products')}
                className={getLinkClassName('products')}
              >
                Products
              </span>
              <span
                onClick={() => scrollToSection('gallery')}
                className={getLinkClassName('gallery')}
              >
                Gallery
              </span>
              <span
                onClick={() => scrollToSection('testimonials')}
                className={getLinkClassName('testimonials')}
              >
                Testimonials
              </span>
              <span
                onClick={() => scrollToSection('contact')}
                className={getLinkClassName('contact')}
              >
                Contact
              </span>
            </div>
          </div>

          {/* CTA Button and Trust Indicators */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full" style={{backgroundColor: 'rgba(174, 213, 129, 0.2)'}}>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium" style={{color: '#2E7D32'}}>Verified Exporter</span>
            </div>
            
            {/* Main CTA Button */}
<button 
  className="text-white px-6 py-2 rounded-md text-base font-medium"
  style={{backgroundColor: '#2E7D32'}}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#5D4037'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#2E7D32'}
>
  Get Quote
</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none transition-colors duration-200"
              style={{color: '#2E7D32'}}
              onMouseEnter={(e) => {e.target.style.color = '#5D4037';}}
              onMouseLeave={(e) => {e.target.style.color = '#2E7D32';}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <span
              onClick={() => scrollToSection('home')}
              className={getMobileLinkClassName('home')}
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection('about')}
              className={getMobileLinkClassName('about')}
            >
              About Us
            </span>
            <span
              onClick={() => scrollToSection('products')}
              className={getMobileLinkClassName('products')}
            >
              Products
            </span>
            <span
              onClick={() => scrollToSection('gallery')}
              className={getMobileLinkClassName('gallery')}
            >
              Gallery
            </span>
            <span
              onClick={() => scrollToSection('testimonials')}
              className={getMobileLinkClassName('testimonials')}
            >
              Testimonials
            </span>
            <span
              onClick={() => scrollToSection('contact')}
              className={getMobileLinkClassName('contact')}
            >
              Contact
            </span>
            
            {/* Mobile CTA Section */}
            <div className="px-3 py-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 mb-3 px-3 py-2 rounded-full" style={{backgroundColor: 'rgba(174, 213, 129, 0.2)'}}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium" style={{color: '#2E7D32'}}>Verified Exporter</span>
              </div>
<button 
  className="w-full text-white px-4 py-2 rounded-md text-base font-medium"
  style={{backgroundColor: '#2E7D32'}}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#5D4037'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#2E7D32'}
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
