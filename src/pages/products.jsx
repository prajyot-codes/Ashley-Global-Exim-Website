import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Pomegranate",
      image: "https://res.cloudinary.com/doks3r7lu/image/upload/v1753293956/pomegranate_v6mlnz.jpg",
      description: "Premium quality pomegranates with deep red arils, sweet-tart flavor, and excellent shelf life.",
      size: "70mm & above",
      weight: "400gm",
      packaging: "Corrugated fiberboard boxes",
      origin: "Solapur, Maharashtra"
    },
    {
      id: 2,
      name: "Turmeric Powder",
      image: "https://res.cloudinary.com/doks3r7lu/image/upload/v1753293956/turmericpowder_r5b3zr.jpg",
      description: "Bright yellow to orange-yellow color. Curcumin content 2.5% to 5%. Max 8-10% moisture.",
      size: "Fine Powder",
      packaging: "Laminated pouches, zip-lock bags, glass jars",
      origin: "Hingoli, Waigaon, Maharashtra"
    },
    {
      id: 3,
      name: "Red Onion",
      image: "https://res.cloudinary.com/doks3r7lu/image/upload/v1753293959/onion_lkws87.jpg",
      description: "Fresh red onions with firm texture, pungent flavor, and excellent storage life.",
      size: "30mm & above",
      packaging: "5kg, 10kg, 20kg mesh/jute bags",
      origin: "Nashik, Maharashtra"
    },
    {
      id: 4,
      name: "Green Chilli",
      image: "https://res.cloudinary.com/doks3r7lu/image/upload/v1753293958/greenchilli_e4yxr1.jpg",
      description: "G4 or S-4 variety preferred. Fresh green chilies with moderate heat level and vibrant color.",
      size: "8-12 cm (A Grade)",
      packaging: "2kg/5kg/7kg boxes with inner liner",
      origin: "Kolhapur, Maharashtra"
    },
    {
      id: 5,
      name: "Turmeric Fingers",
      image: "https://res.cloudinary.com/doks3r7lu/image/upload/v1753293958/turmeric_chs8mm.jpg",
      description: "Salem, Rajapuri, Erode varieties. Curcumin 2.5-3.5%, moisture <10%.",
      size: "Longest Fingers",
      packaging: "25kg PP or jute bags",
      origin: "Maharashtra, India"
    },
    {
      id: 6,
      name: "Multani Mitti",
      image: "https://res.cloudinary.com/doks3r7lu/image/upload/v1753293954/multanimitti_sjv40i.jpg", // update as per your image file
      description: "Usage: Cosmetic, beauty, pharmaceutical, industrial.",
      size: "Bulk Export",
      packaging: "HDPE bags",
      origin: "Rajasthan, India"
    },
    {
      id: 7,
      name: "Coffee (Arabica & Robusta)",
      image: "src/assets/coffee.jpg", // update as per your image file
      description: "Standard export pack. 60 kg or 50 kg per bag. Used for bulk green coffee exports.",
      size: "Arabica & Robusta",
      packaging: "Traditional Jute Bags",
      origin: "India"
    },
    {
      id: 8,
      name: "Tomato",
      image: "src/assets/tomato.jpg", // update as per your image file
      description: "",
      size: "55mm and above",
      weight: "5kg, 7kg, 10kg",
      packaging: "Corrugated Boxes, Wax or laminated Boxes",
      origin: "India"
    }

  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16" animation="up" delay={0}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ color: '#2E7D32' }}>
            Our Premium Products
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Discover our carefully curated selection of premium Indian agricultural produce
            sourced directly from the finest farms and prepared for international export.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#AED581' }}></div>
        </AnimatedSection>



        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} animation="up" delay={200 + (index * 100)}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <AnimatedSection className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg" animation="up" delay={400}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#2E7D32' }}>
              Quality Assurance
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Every fruits and vegetables undergoes rigorous quality checks to ensure only the finest fruits reach international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center hover:scale-105 transition-transform duration-300 group ">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AED581' }}>
                <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">🔍</span>
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{ color: '#2E7D32' }}>Visual Inspection</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2">Each fruit checked for size, color, and external defects</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AED581' }}>
                <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">🧪</span>
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{ color: '#2E7D32' }}>Quality Testing</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2">Sugar content, acidity, and freshness tested</p>
            </div>

            <div className="text-center hover:scale-105 transition-transform duration-300 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#AED581' }}>
                <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">📦</span>
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base" style={{ color: '#2E7D32' }}>Careful Packaging</h3>
              <p className="text-gray-600 text-xs sm:text-sm px-2">Temperature-controlled packaging for optimal freshness</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Products;
