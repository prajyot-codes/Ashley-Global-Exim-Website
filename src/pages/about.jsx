const About = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#2E7D32' }}>
            About Ashley Global Exim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your trusted partner for premium Indian pomegranate exports
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#AED581' }}></div>
        </div>

        {/* Mission and Vision Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 font-[Montserrat]">
          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-[#AED581] hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: '#AED581' }}>
              <span className="text-3xl">🎯</span>
            </div>
            <h2 className="text-2xl md:text-0xl font-bold mb-3" style={{ color: '#2E7D32' }}>Our Mission</h2>
            <p className="text-gray-700 text-base md:text-lg text-center">
              To export the finest Indian agricultural produce and essential commodities worldwide by maintaining the highest standards in quality, transparency, and customer satisfaction — while empowering local farmers and contributing to sustainable agricultural practices.
            </p>
          </div>
          {/* Our Vision */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4 border-[#AED581] hover:shadow-2xl transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: '#AED581' }}>
              <span className="text-3xl">🌍</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#2E7D32' }}>Our Vision</h2>
            <p className="text-gray-700 text-base md:text-lg text-center">
              To be a globally trusted export brand known for integrity, innovation, and excellence in agri-trade connecting Indian produce to every corner of the globe.
            </p>
          </div>
        </div>

        {/* Our Story Section Below */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 font-[Montserrat] border-l-4 border-[#AED581] flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: '#AED581' }}>
            <span className="text-3xl">📖</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#2E7D32' }}>Our Story</h2>
          <p className="text-gray-700 text-lg md:text-xl text-center max-w-3xl mb-4">
            Founded with a passion for delivering freshness to the world, Ashley Global Exim has grown into a trusted name in the export of fresh fruits, vegetables, and essential commodities. Based in India, we began our journey three years ago with a simple vision — to bridge the gap between Indian farmers and global markets by providing premium quality produce backed by reliable logistics and ethical business practices.
          </p>
          <p className="text-[#5D4037] text-base md:text-lg italic text-center max-w-2xl">
            "Our commitment is not just to trade, but to create lasting relationships, empower communities, and set new benchmarks for quality and trust in the global agri-export industry."
          </p>
        </div>

        {/* Founders Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#2E7D32' }}>
          Meet Our Founders
        </h2>
        <div className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-[Montserrat]">
          {/* Founder */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-[#AED581]">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#AED581] bg-gray-100 flex items-center justify-center">
              {/* Use a placeholder image, replace with your founder image path if available */}
              <img src="https://via.placeholder.com/150?text=Founder" alt="Founder" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#2E7D32' }}>Yash Deshmukh</h3>
            <p className="text-gray-700 mb-2 font-medium">Founder & CEO</p>
            <p className="text-gray-600 text-center text-sm">Visionary leader with a passion for quality and global trade. Driving force behind Ashley Global Exim's growth and reputation.</p>
          </div>
          {/* Co-Founder */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-l-4 border-[#AED581]">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#AED581] bg-gray-100 flex items-center justify-center">
              {/* Use a placeholder image, replace with your cofounder image path if available */}
              <img src="\src\assets\cofounder.jpg" alt="Co-Founder" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#2E7D32' }}>Omkumar Dhanokar</h3>
            <p className="text-gray-700 mb-2 font-medium">Co-Founder & Director</p>
            <p className="text-gray-600 text-center text-sm">Expert in international business and logistics, ensuring seamless export operations and customer satisfaction worldwide.</p>
          </div>
        </div>

        {/* Content will be added here */}
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default About;
