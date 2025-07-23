import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product Showcase for slider
  const productShowcase = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/doks3r7lu/image/upload/v1753099580/WhatsApp_Image_2025-07-18_at_21.32.49_f2c5c3be_jssfty.jpg'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/doks3r7lu/image/upload/v1753099579/WhatsApp_Image_2025-07-18_at_21.32.49_d99f31e8_tu20gx.jpg'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/doks3r7lu/image/upload/v1753099579/WhatsApp_Image_2025-07-18_at_21.32.49_53112160_bysdff.jpg'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/doks3r7lu/image/upload/v1753099579/WhatsApp_Image_2025-07-18_at_21.32.48_4dc7a0c9_s9hgfn.jpg'
    },
    {
      id: 5,
      image: 'src/assets/farmer.jpg'
    },
    {
      id: 6,
      image: 'src/assets/farmer2.jpg' // Placeholder, update with actual image path
    }
  ];

  // Slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % productShowcase.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [productShowcase.length]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Header Section - Centered with container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <AnimatedSection className="text-center mb-6 md:mb-8" animation="up" delay={0}>
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white rounded-full text-sm font-medium mb-4">
              Excellence in Export
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-[#2E7D32]">
            Your Trusted Path to
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#AED581] to-[#2E7D32] bg-clip-text text-transparent">
            Premium Export Success
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the heart of our farmlands to international shores, we deliver the promise of quality in every harvest
          </p>
        </AnimatedSection>
      </div>

      {/* Full-width Image Slider */}
      <AnimatedSection className="w-full" animation="up" delay={300}>
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[45rem] overflow-hidden bg-gray-100">
          {productShowcase.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform scale-100' 
                  : 'opacity-0 transform scale-110'
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Dark gradient overlay for that blackish effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
              
              {/* Content overlay - responsive positioning */}

            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Gallery;