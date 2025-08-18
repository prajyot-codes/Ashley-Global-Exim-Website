import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Preload Hero Image in index.html for performance boost */}
      {/* 
        <link 
          rel="preload" 
          as="image" 
          href="https://res.cloudinary.com/doks3r7lu/image/upload/w_1600,f_auto,q_auto,dpr_auto/hero_w7kbzc_a5pkbv.webp" 
        />
      */}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/doks3r7lu/image/upload/w_1600,f_auto,q_auto,dpr_auto/hero_w7kbzc_a5pkbv.webp"
            alt="BANNER"
            className="w-full h-full object-cover"
            width="1600"
            height="900"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ashley Global Exim</h1>
          <p className="text-xl md:text-2xl mb-4 font-bold opacity-90">
            PREMIUM INDIAN EXPORTS
          </p>

          <div className="bg-yellow bg-opacity-10 rounded-2xl p-8 mb-8">
            <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#AED581' }}>
              "Our story, rooted in Quality"
            </p>
            <p className="text-lg opacity-90">
              Trusted by international buyers for premium quality, authentic sourcing, and reliable export solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-green-800 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote Now
            </button>
            <button
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Products
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <AnimatedSection className="py-16 bg-white" animation="up" delay={200}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2E7D32] mb-4">Why Choose Ashley Global Exim?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the trusted partner for premium Indian agricultural exports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Premium Quality',
                img: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=200&h=200&fit=crop&crop=center',
                alt: 'Fresh farm produce quality',
                desc: 'Hand-picked fresh fruits and vegetables from the finest farms across India',
              },
              {
                title: 'Reliable Export',
                img: 'https://res.cloudinary.com/doks3r7lu/image/upload/v1753786838/about-gng_boh1lx_t4raow.webp',
                alt: 'Cold chain export delivery',
                desc: 'Timely delivery with proper cold chain maintenance',
              },
              {
                title: 'Global Reach',
                img: 'https://res.cloudinary.com/doks3r7lu/image/upload/v1753786839/character-illustration-people-with-global-network-concept_53876-66147_sxurvg_jo6eux.avif',
                alt: 'Global shipping map',
                desc: 'Serving international markets with excellence',
              },
            ].map(({ title, img, alt, desc }, idx) => (
              <div
                key={title}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover"
                    width="80"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#2E7D32]">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Stats */}
      <AnimatedSection className="py-16 bg-gray-50" animation="up" delay={400}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['200+', 'Containers Exported (2024)'],
              ['15+', 'Countries Served'],
              ['100%', 'Quality Assured'],
              ['24/7', 'Customer Support'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-3xl font-bold text-[#2E7D32] mb-2">{stat}</div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
