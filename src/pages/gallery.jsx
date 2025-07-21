import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % productShowcase.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [productShowcase.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
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
      <AnimatedSection className="w-full" animation="up" delay={1000}>
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[45rem] overflow-hidden bg-white rounded-none">
          
          {/* Image Slides */}
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
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Bottom fade - less intense */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 z-10 pointer-events-none"></div>

          {/* Optional top fade — also reduced if you want */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/50 z-10 pointer-events-none"></div> */}

          {/* Slide indicators */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 flex space-x-2 z-20">
            {productShowcase.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gray-800 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Gallery;
