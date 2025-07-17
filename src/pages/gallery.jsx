import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery data with professional agricultural/export images
  const galleryData = [
    {
      id: 1,
      category: 'products',
      title: 'Fresh Pomegranates',
      description: 'Premium quality pomegranates ready for export',
      image: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&h=300&fit=crop&crop=center',
      location: 'Maharashtra, India'
    },
    {
      id: 2,
      category: 'products',
      title: 'Red Onions',
      description: 'High-quality red onions for international markets',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop&crop=center',
      location: 'Gujarat, India'
    },
    {
      id: 3,
      category: 'packaging',
      title: 'Quality Packaging',
      description: 'State-of-the-art packaging facility ensuring freshness',
      image: 'https://images.unsplash.com/photo-1566151430886-0b86b8ae4ad0?w=400&h=300&fit=crop&crop=center',
      location: 'Processing Unit'
    },
    {
      id: 4,
      category: 'products',
      title: 'Fresh Tomatoes',
      description: 'Vine-ripened tomatoes for global distribution',
      image: 'https://images.unsplash.com/photo-1546470427-e2b81ea2bf7b?w=400&h=300&fit=crop&crop=center',
      location: 'Punjab, India'
    },
    {
      id: 5,
      category: 'logistics',
      title: 'Cold Chain Storage',
      description: 'Advanced cold storage maintaining optimal temperature',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=center',
      location: 'Distribution Center'
    },
    {
      id: 6,
      category: 'products',
      title: 'Organic Carrots',
      description: 'Certified organic carrots for health-conscious markets',
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop&crop=center',
      location: 'Rajasthan, India'
    },
    {
      id: 7,
      category: 'logistics',
      title: 'Export Documentation',
      description: 'Comprehensive quality certification and documentation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center',
      location: 'Head Office'
    },
    {
      id: 8,
      category: 'products',
      title: 'Fresh Okra',
      description: 'Premium okra varieties for international cuisine',
      image: 'https://images.unsplash.com/photo-1630925175606-a1fe3b3fa21c?w=400&h=300&fit=crop&crop=center',
      location: 'Karnataka, India'
    },
    {
      id: 9,
      category: 'team',
      title: 'Quality Control Team',
      description: 'Expert team ensuring international quality standards',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center',
      location: 'Quality Lab'
    },
    {
      id: 10,
      category: 'packaging',
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solutions for responsible export',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      location: 'Packaging Unit'
    },
    {
      id: 11,
      category: 'products',
      title: 'Fresh Cauliflower',
      description: 'Premium cauliflower for global food industry',
      image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&h=300&fit=crop&crop=center',
      location: 'Haryana, India'
    },
    {
      id: 12,
      category: 'logistics',
      title: 'Export Shipment',
      description: 'Ready-to-ship containers for international delivery',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      location: 'Export Port'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-8 sm:mb-12" animation="up" delay={0}>
          <div className="inline-block p-3 rounded-full bg-gradient-to-r from-[#AED581] to-[#2E7D32] mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#2E7D32]">
            Our Gallery
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our journey through images - from farm to global markets, showcasing our commitment to quality and excellence.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#AED581] to-[#2E7D32] animate-pulse"></div>
        </AnimatedSection>


        {/* Loading Animation */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2E7D32]"></div>
          </div>
        ) : (
          /* Gallery Grid */
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" animation="up" delay={200}>
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(item)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm font-medium">{item.location}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#2E7D32] group-hover:text-[#5D4037] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        )}

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden animate-fade-in">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#2E7D32]">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedImage.location}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-16 sm:mt-20" animation="up" delay={400}>
          <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Experience Quality?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">Join our growing network of satisfied international clients</p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-[#2E7D32] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Gallery;
