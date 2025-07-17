import heroImg from '../assets/hero.jpg';
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Fresh pomegranates" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Ashley Global Exim
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-bold opacity-90">
            PREMIUM INDIAN EXPORTS
          </p>
          
          {/* Mission Statement */}
          <div className="bg-yellow bg-opacity-10  rounded-2xl p-8 mb-8  ">
            <p className="text-2xl md:text-3xl font-semibold mb-4" style={{color: '#AED581'}}>
              "Our story, rooted in Quality"
            </p>
            <p className="text-lg opacity-90">
              Trusted by international buyers for premium quality, authentic sourcing, and reliable export solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{backgroundColor: '#2E7D32'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5D4037'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#2E7D32'}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Quote Now
            </button>
            <button 
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white transition-all duration-300 transform hover:scale-105"
              style={{color: 'white'}}
              onMouseEnter={(e) => {e.target.style.color = '#2E7D32'; e.target.style.backgroundColor = 'white';}}
              onMouseLeave={(e) => {e.target.style.color = 'white'; e.target.style.backgroundColor = 'transparent';}}
              onClick={() => {
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Products
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#2E7D32'}}>Premium Quality</h3>
              <p className="text-gray-600">Hand-picked fresh fruits and vegetables from the finest farms across India</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#2E7D32'}}>Reliable Export</h3>
              <p className="text-gray-600">Timely delivery with proper cold chain maintenance</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#AED581'}}>
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{color: '#2E7D32'}}>Global Reach</h3>
              <p className="text-gray-600">Serving international markets with excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: '#2E7D32'}}>10,000+</div>
              <div className="text-gray-600">Kg Exported (2024)</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: '#2E7D32'}}>15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: '#2E7D32'}}>100%</div>
              <div className="text-gray-600">Quality Assured</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{color: '#2E7D32'}}>24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
