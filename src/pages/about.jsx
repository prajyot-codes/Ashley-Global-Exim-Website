import founder from "../assets/founder.jpg"
import cofounder from "../assets/cofounder.jpg"
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-12 sm:mb-16 md:mb-20" animation="up" delay={0}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in" style={{ color: '#2E7D32' }}>
            About Ashley Global Exim
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Your trusted partner for premium Indian agricultural exports, connecting quality produce to global markets
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#AED581] to-[#2E7D32]"></div>
        </AnimatedSection>

        {/* Mission and Vision Cards */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 font-[Montserrat]" animation="up" delay={0}>
          {/* Our Mission */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center border-t-4 border-[#AED581] hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mb-4 sm:mb-6 bg-gradient-to-br from-[#AED581] to-[#2E7D32] group-hover:rotate-6 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl md:text-4xl">🎯</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center" style={{ color: '#2E7D32' }}>Our Mission</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center">
              To export the finest Indian agricultural produce and essential commodities worldwide by maintaining the highest standards in quality, transparency, and customer satisfaction — while empowering local farmers and contributing to sustainable agricultural practices.
            </p>
          </div>
          
          {/* Our Vision */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center border-t-4 border-[#AED581] hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mb-4 sm:mb-6 bg-gradient-to-br from-[#AED581] to-[#2E7D32] group-hover:rotate-6 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl md:text-4xl">🌍</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center" style={{ color: '#2E7D32' }}>Our Vision</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center">
              To be a globally trusted export brand known for integrity, innovation, and excellence in agri-trade connecting Indian produce to every corner of the globe.
            </p>
          </div>
        </AnimatedSection>

        {/* Our Journey Timeline */}
        <AnimatedSection className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20 font-[Montserrat] border-l-4 sm:border-l-8 border-[#AED581]" animation="up" delay={0}>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#AED581] to-[#2E7D32]">
              <span className="text-2xl sm:text-3xl md:text-4xl">📖</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#2E7D32' }}>Our Journey</h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              From humble beginnings to global recognition - discover how Ashley Global Exim has grown into a trusted name in agricultural exports.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#AED581] to-[#2E7D32] rounded-full"></div>
            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-8 sm:left-10 top-0 w-1 h-full bg-gradient-to-b from-[#AED581] to-[#2E7D32] rounded-full"></div>
            
            {/* 2022 */}
            <div className="relative mb-8 md:mb-12">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="flex items-center justify-end space-x-4 mb-4">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=300&fit=crop&crop=center" alt="Fresh vegetables" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full inline-block font-bold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      2022
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#AED581] rounded-full z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[140px] flex flex-col">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 text-left" style={{ color: '#2E7D32' }}>The Beginning</h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify flex-grow">
                      Ashley Global Exim was established by Yash Ingle (Founder) and Omkumar Dhanorkar (Co-Founder) with a clear mission: to deliver high-quality Indian agricultural products to global markets. Started with exports of fresh vegetables to the UAE and the UK.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden flex items-start">
                <div className="absolute left-8 sm:left-10 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#AED581] rounded-full z-10"></div>
                <div className="ml-12 sm:ml-16 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=300&fit=crop&crop=center" alt="Fresh vegetables" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-4 py-2 rounded-full inline-block font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      2022
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-lg">
                    <h3 className="font-bold text-lg mb-3" style={{ color: '#2E7D32' }}>The Beginning</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Ashley Global Exim was established by Yash Ingle (Founder) and Om Kumar Dhanorkar (Co-Founder) with a clear mission: to deliver high-quality Indian agricultural products to global markets. Started with exports of fresh vegetables to the UAE and the UK.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2023 */}
            <div className="relative mb-8 md:mb-12">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[140px] flex flex-col">
                    <h3 className="font-bold text-xl mb-3 text-left" style={{ color: '#2E7D32' }}>Building Strong Foundation</h3>
                    <p className="text-gray-700 leading-relaxed text-justify flex-grow">
                      With a growing reputation for reliability and product quality, the company expanded its operational capacity and added new supply chain partners. Successfully exported to over 10 countries by year-end.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#AED581] rounded-full z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-6 py-3 rounded-full inline-block font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      2023
                    </div>
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://res.cloudinary.com/doks3r7lu/image/upload/v1753160598/container-ship-import-export-port-against-beautiful-morning-l-light-loading-yard-use-freight-cargo-shipping-58151836_wwgufm.webp" alt="Industrial growth" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden flex items-start">
                <div className="absolute left-8 sm:left-10 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#AED581] rounded-full z-10"></div>
                <div className="ml-12 sm:ml-16 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://res.cloudinary.com/doks3r7lu/image/upload/v1753160598/container-ship-import-export-port-against-beautiful-morning-l-light-loading-yard-use-freight-cargo-shipping-58151836_wwgufm.webp" alt="Industrial growth" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-4 py-2 rounded-full inline-block font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      2023
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-lg">
                    <h3 className="font-bold text-lg mb-3" style={{ color: '#2E7D32' }}>Building Strong Foundation</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      With a growing reputation for reliability and product quality, the company expanded its operational capacity and added new supply chain partners. Successfully exported to over 10 countries by year-end.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2024 */}
            <div className="relative mb-8 md:mb-12">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="flex items-center justify-end space-x-4 mb-4">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://res.cloudinary.com/doks3r7lu/image/upload/v1753160761/360_F_241951583_x3Pn4HbvGKfbdvVd43jKluTYB9IaXz1K_jiisrr.jpg" alt="Global export" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-6 py-3 rounded-full inline-block font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      2024
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#AED581] rounded-full z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[140px] flex flex-col">
                    <h3 className="font-bold text-xl mb-3 text-left" style={{ color: '#2E7D32' }}>Global Growth & Diversification</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2 text-justify flex-grow">
                      <li>• Expanded exports to over 20 countries across Europe, Middle East, and Southeast Asia</li>
                      <li>• Introduced new product categories: fruits, spices, and grains</li>
                      <li>• Strengthened logistics with advanced cold chain solutions</li>
                      <li>• Participated in international trade expos and built strategic alliances</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden flex items-start">
                <div className="absolute left-8 sm:left-10 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#AED581] rounded-full z-10"></div>
                <div className="ml-12 sm:ml-16 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://res.cloudinary.com/doks3r7lu/image/upload/v1753160761/360_F_241951583_x3Pn4HbvGKfbdvVd43jKluTYB9IaXz1K_jiisrr.jpg" alt="Global export" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-4 py-2 rounded-full inline-block font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      2024
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-lg">
                    <h3 className="font-bold text-lg mb-3" style={{ color: '#2E7D32' }}>Global Growth & Diversification</h3>
                    <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
                      <li>• Expanded exports to over 20 countries</li>
                      <li>• Introduced new product categories</li>
                      <li>• Strengthened logistics with cold chain solutions</li>
                      <li>• Participated in international trade expos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2025 */}
            <div className="relative">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[140px] flex flex-col">
                    <h3 className="font-bold text-xl mb-3 text-left" style={{ color: '#2E7D32' }}>Towards Global Leadership</h3>
                    <ul className="text-gray-700 leading-relaxed space-y-2 text-justify flex-grow">
                      <li>• Set up dedicated export units in key agricultural zones across India</li>
                      <li>• Launched digital export management system for real-time tracking</li>
                      <li>• Recognized by international buyers for consistent quality and ethical practices</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#AED581] rounded-full z-10"></div>
                <div className="w-5/12 pl-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-6 py-3 rounded-full inline-block font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      2025
                    </div>
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&crop=center" alt="Success and achievement" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden flex items-start">
                <div className="absolute left-8 sm:left-10 transform -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#AED581] rounded-full z-10"></div>
                <div className="ml-12 sm:ml-16 flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#AED581] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110">
                      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&crop=center" alt="Success and achievement" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white px-4 py-2 rounded-full inline-block font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      2025
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 shadow-lg">
                    <h3 className="font-bold text-lg mb-3" style={{ color: '#2E7D32' }}>Towards Global Leadership</h3>
                    <ul className="text-gray-700 text-sm leading-relaxed space-y-1">
                      <li>• Set up dedicated export units in key zones</li>
                      <li>• Launched digital export management system</li>
                      <li>• Recognized for consistent quality and ethical practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quote */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#AED581] to-[#2E7D32] text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-medium italic leading-relaxed">
                "Our commitment is not just to trade, but to create lasting relationships, empower communities, and set new benchmarks for quality and trust in the global agri-export industry."
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Founders Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#2E7D32' }}>
          Meet Our Founders
        </h2>
        <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-[Montserrat]">
          {/* Founder */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-[#AED581] hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#AED581] bg-gray-100 flex items-center justify-center">
              {/* Use a placeholder image, replace with your founder image path if available */}
              <img src={founder} alt="Founder" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#2E7D32' }}>Yash Ingle</h3>
            <p className="text-gray-700 mb-2 font-medium">Founder</p>
            <p className="text-gray-600 text-center text-sm">Visionary leader with a passion for quality and global trade. Driving force behind Ashley Global Exim's growth and reputation.</p>
          </div>
          {/* Co-Founder */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-[#AED581] hover:shadow-xl transition-shadow duration-300">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#AED581] bg-gray-100 flex items-center justify-center">
              {/* Use a placeholder image, replace with your cofounder image path if available */}
              <img src={cofounder} alt="Co-Founder" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#2E7D32' }}>Omkumar Dhanorkar</h3>
            <p className="text-gray-700 mb-2 font-medium">Co-Founder</p>
            <p className="text-gray-600 text-center text-sm">Expert in international business and logistics, ensuring seamless export operations and customer satisfaction worldwide.</p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 font-[Montserrat]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#2E7D32' }}>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#AED581] to-[#2E7D32] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E7D32' }}>Quality Excellence</h3>
              <p className="text-gray-700 leading-relaxed">Uncompromising commitment to delivering the finest agricultural products that meet international standards.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#AED581] to-[#2E7D32] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E7D32' }}>Trust & Transparency</h3>
              <p className="text-gray-700 leading-relaxed">Building lasting partnerships through honest communication and reliable business practices.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#AED581] to-[#2E7D32] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2E7D32' }}>Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">Supporting sustainable farming practices and contributing to environmental conservation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
