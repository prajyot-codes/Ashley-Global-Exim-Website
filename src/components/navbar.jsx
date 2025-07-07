import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
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
              <Link
                to="/"
                className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
                style={{color: '#2E7D32'}}
                onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
                onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
              >
                Home
              </Link>
<Link
  to="/about"
  className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
>
  About Us
</Link>
<Link
  to="/products"
  className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
>
  Products
</Link>
<Link
  to="/gallery"
  className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
>
  Gallery
</Link>
<Link
  to="/export"
  className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
>
  Export Solutions
</Link>
<Link
  to="/testimonials"
  className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
>
  Testimonials
</Link>
<Link
  to="/contact"
  className="px-2 py-2 text-base font-medium transition-colors duration-200 border-b-2 border-transparent whitespace-nowrap"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.borderColor = '#AED581';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.borderColor = 'transparent';}}
>
  Contact
</Link>
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
<Link
  to="/"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  Home
</Link>
<Link
  to="/about"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  About Us
</Link>
<Link
  to="/products"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  Products
</Link>
<Link
  to="/gallery"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  Gallery
</Link>
<Link
  to="/export"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  Export Solutions
</Link>
<Link
  to="/testimonials"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  Testimonials
</Link>
<Link
  to="/contact"
  className="block px-3 py-2 text-base font-medium rounded-md"
  style={{color: '#2E7D32'}}
  onMouseEnter={(e) => {e.target.style.color = '#5D4037'; e.target.style.backgroundColor = 'rgba(174, 213, 129, 0.1)';}}
  onMouseLeave={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'transparent';}}
>
  Contact
</Link>
            
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
