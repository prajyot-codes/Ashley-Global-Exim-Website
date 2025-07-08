import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Red Pomegranates",
      grade: "Grade A+",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "description",
      size: "8-12 cm diameter",
      weight: "250-400g per fruit",
      packaging: "5kg/10kg corrugated boxes",
      origin: "Vashi Market, Mumbai, India"
    },
    {
      id: 2,
      name: "Export Quality Pomegranates",
      grade: "Grade A",
      image: "https://unsplash.com/photos/red-fruit-in-close-up-photography-jXIyWb5K5b4",
      description: "description",
      size: "7-11 cm diameter",
      weight: "200-350g per fruit",
      packaging: "4kg/8kg ventilated cartons with moisture control",
      origin: "Nashik, Maharashtra, India"
    },
    {
      id: 3,
      name: "Organic Pomegranates",
      grade: "Organic A+",
      image: "https://unsplash.com/photos/red-fruit-in-close-up-photography-jXIyWb5K5b4",
      description: "description",
      size: "7-10 cm diameter",
      weight: "180-320g per fruit",
      packaging: "3kg/6kg eco-friendly biodegradable boxes",
      origin: "Pune, Maharashtra, India"
    },
    {
      id: 4,
      name: "Large Size Pomegranates",
      grade: "Grade A+",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Extra-large pomegranates with impressive visual appeal. Perfect for premium market segments and special occasions.",
      size: "12-15 cm diameter",
      weight: "400-600g per fruit",
      packaging: "Individual wrapping in 3kg/5kg premium boxes",
      origin: "Solapur, Maharashtra, India"
    },
    {
      id: 5,
      name: "Sweet Variety Pomegranates",
      grade: "Grade A",
      image: "https://images.unsplash.com/photo-1586375439348-7628359e91e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Specially cultivated sweet variety with high Brix levels. Ideal for juice production and direct consumption.",
      size: "8-11 cm diameter",
      weight: "220-380g per fruit",
      packaging: "6kg/12kg industrial packaging with dividers",
      origin: "Aurangabad, Maharashtra, India"
    },
    {
      id: 6,
      name: "Long Shelf Life Pomegranates",
      grade: "Grade A+",
      image: "https://images.unsplash.com/photo-1609501676725-7186f6cabf81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium pomegranates with extended shelf life technology. Perfect for long-distance shipping and extended storage.",
      size: "9-12 cm diameter",
      weight: "250-420g per fruit",
      packaging: "5kg/10kg climate-controlled packaging",
      origin: "Sangli, Maharashtra, India"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: '#2E7D32'}}>
            Our Premium Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our carefully curated selection of premium Indian pomegranates, 
            sourced directly from the finest farms and prepared for international export.
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#AED581'}}></div>
        </div>

        {/* Product Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
            style={{backgroundColor: '#2E7D32'}}
          >
            All Products
          </button>
          <button 
            className="px-6 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105"
            style={{borderColor: '#2E7D32', color: '#2E7D32'}}
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#2E7D32'; e.target.style.color = 'white';}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2E7D32';}}
          >
            Premium Grade
          </button>
          <button 
            className="px-6 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105"
            style={{borderColor: '#2E7D32', color: '#2E7D32'}}
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#2E7D32'; e.target.style.color = 'white';}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2E7D32';}}
          >
            Organic
          </button>
          <button 
            className="px-6 py-3 rounded-full border-2 transition-all duration-300 transform hover:scale-105"
            style={{borderColor: '#2E7D32', color: '#2E7D32'}}
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#2E7D32'; e.target.style.color = 'white';}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#2E7D32';}}
          >
            Large Size
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{color: '#2E7D32'}}>
              Quality Assurance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every pomegranate undergoes rigorous quality checks to ensure only the finest fruits reach international markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2" style={{color: '#2E7D32'}}>Visual Inspection</h3>
              <p className="text-gray-600 text-sm">Each fruit checked for size, color, and external defects</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-bold mb-2" style={{color: '#2E7D32'}}>Quality Testing</h3>
              <p className="text-gray-600 text-sm">Sugar content, acidity, and freshness tested</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-bold mb-2" style={{color: '#2E7D32'}}>Careful Packaging</h3>
              <p className="text-gray-600 text-sm">Temperature-controlled packaging for optimal freshness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
