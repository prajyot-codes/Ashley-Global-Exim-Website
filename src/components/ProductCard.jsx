import { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Cleanup effect to avoid memory leaks
  useEffect(() => {
    return () => {
      // Cleanup function
      setIsHovered(false);
    };
  }, []);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">Image not available</span>
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        {/* Grade Badge */}
        <div 
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
          style={{backgroundColor: '#2E7D32'}}
        >
          {product.grade}
        </div>
        {/* Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? 'opacity-20' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-bold mb-2" style={{color: '#2E7D32'}}>
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-xs font-medium" style={{color: '#5D4037'}}>SIZE</span>
            <p className="text-sm font-semibold text-gray-800">{product.size}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <span className="text-xs font-medium" style={{color: '#5D4037'}}>WEIGHT</span>
            <p className="text-sm font-semibold text-gray-800">{product.weight}</p>
          </div>
        </div>

        {/* Packaging Info */}
        <div className="mb-4">
          <span className="text-xs font-medium" style={{color: '#5D4037'}}>PACKAGING</span>
          <p className="text-sm text-gray-700">{product.packaging}</p>
        </div>

        {/* Origin */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-medium" style={{color: '#5D4037'}}>ORIGIN</span>
            <p className="text-sm font-semibold text-gray-800">{product.origin}</p>
          </div>
          <div className="text-2xl">🇮🇳</div>
        </div>

        {/* CTA Button */}
        <button 
          className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-all duration-300 transform ${
            isHovered ? 'translate-y-0 shadow-lg' : 'translate-y-1'
          }`}
          style={{backgroundColor: '#2E7D32'}}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#5D4037'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#2E7D32'}
        >
          Get Quote for {product.name}
        </button>
      </div>

      {/* Animated Border Effect */}
      <div 
        className={`absolute inset-0 border-2 border-transparent transition-all duration-300 rounded-xl ${
          isHovered ? 'border-opacity-50' : ''
        }`}
        style={{borderColor: isHovered ? '#AED581' : 'transparent'}}
      />
    </div>
  );
};

export default ProductCard;
