import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Red Pomegranates",
      image: "https://c8.alamy.com/comp/2ABMNAT/pomegranate-isolated-on-white-background-2ABMNAT.jpg",
      description: "description",
      size: "8-12 cm diameter",
      weight: "250-400g per fruit",
      packaging: "5kg/10kg corrugated boxes",
      origin: "Vashi Market, Mumbai, India"
    },
    {
      id: 2,
      name: "Turmeric Powder",
      image: "https://t4.ftcdn.net/jpg/04/72/24/73/360_F_472247342_JK2YdMdXnW4be8n0iAbxcqnc3X85EXKb.jpg",
      description: "description",
      size: "7-11 cm diameter",
      weight: "200-350g per fruit",
      packaging: "4kg/8kg ventilated cartons with moisture control",
      origin: "Nashik, Maharashtra, India"
    },
    {
      id: 3,
      name: "Onion",
      image: "https://img.freepik.com/premium-photo/fresh-red-onion-isolated-white-background_454083-21.jpg",
      description: "description",
      size: "5-7 cm diameter",
      weight: "180-320g per fruit",
      packaging: "3kg/6kg eco-friendly biodegradable boxes",
      origin: "Pune, Maharashtra, India"
    },
    {
      id: 4,
      name: "Green Chilli",
      image: "/src/assets/image.png",
      description: "description",
      size: "-",
      weight: "",
      packaging: "Individual wrapping in 3kg/5kg premium boxes",
      origin: "Solapur, Maharashtra, India"
    },
    {
      id: 5,
      name: "Turmeric Fingers",
      image: "https://m.media-amazon.com/images/I/81VyCoVem7L._UF1000,1000_QL80_.jpg",
      description: "description",
      size: "8-11 cm diameter",
      weight: "220-380g per fruit",
      packaging: "6kg/12kg industrial packaging with dividers",
      origin: "Aurangabad, Maharashtra, India"
    },
    {
      id: 6,
      name: "Coming soon",
      image: "",
      description: "description",
      size: "9-12 cm diameter",
      weight: "250-420g per fruit",
      packaging: "",
      origin: ""
    }
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{color: '#2E7D32'}}>
            Our Premium Products
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Discover our carefully curated selection of premium Indian agricultural produce 
            sourced directly from the finest farms and prepared for international export.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#AED581'}}></div>
        </div>

        {/* Product Categories Filter */}
        

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{color: '#2E7D32'}}>
              Quality Assurance
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Every pomegranate undergoes rigorous quality checks to ensure only the finest fruits reach international markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-xl sm:text-2xl">🔍</span>
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{color: '#2E7D32'}}>Visual Inspection</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2">Each fruit checked for size, color, and external defects</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-xl sm:text-2xl">🧪</span>
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{color: '#2E7D32'}}>Quality Testing</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2">Sugar content, acidity, and freshness tested</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-xl sm:text-2xl">📦</span>
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{color: '#2E7D32'}}>Careful Packaging</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2">Temperature-controlled packaging for optimal freshness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
