import { useState } from 'react';

const Testimonials = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Mansour",
      company: "Fresh Fruits Trading LLC",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Ashley Global Exim has been our trusted supplier for premium pomegranates for over three years. Their consistent quality and reliable shipping have made them our preferred Indian exporter.",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Al-Qasimi",
      company: "Royal Gourmet Imports",
      location: "Abu Dhabi, UAE",
      flag: "🇦🇪",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "The pomegranates we receive from Ashley Global are consistently of the highest grade. Our customers specifically ask for their produce by name, which speaks volumes about their quality.",
      rating: 5
    },
    {
      id: 3,
      name: "Hassan Mahmoud",
      company: "Mahmoud Brothers Trading",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "We've tried many suppliers, but Ashley Global Exim stands out for their attention to packaging and temperature control. The fruits arrive in perfect condition despite the long journey.",
      rating: 4
    },
    {
      id: 4,
      name: "Mei Lin",
      company: "Eastern Delights",
      location: "Singapore",
      flag: "🇸🇬",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Our high-end restaurant chain requires only the best ingredients. Ashley Global's pomegranates exceed our expectations in taste, appearance, and shelf life.",
      rating: 5
    },
    {
      id: 5,
      name: "Mohammed Al-Farsi",
      company: "Gulf Premium Foods",
      location: "Kuwait City, Kuwait",
      flag: "🇰🇼",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Working with Ashley Global Exim has simplified our import process. Their documentation is always in order, and their team is highly responsive to our needs.",
      rating: 4
    },
    {
      id: 6,
      name: "Saeed Al-Jabri",
      company: "Oman Fresh Produce",
      location: "Muscat, Oman",
      flag: "🇴🇲",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "The organic pomegranates from Ashley Global have helped us develop a niche market in Oman. Their commitment to quality and sustainability aligns perfectly with our brand values.",
      rating: 5
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left" style={{color: '#2E7D32'}}>
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-slide-in-right">
            Hear what our international clients say about our premium pomegranates and export services
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#AED581'}}></div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2"
                  style={{borderColor: '#AED581'}}
                />
                <div>
                  <h3 className="font-bold text-lg" style={{color: '#2E7D32'}}>{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-lg mr-2">{testimonial.flag}</span>
                    <span className="text-xs text-gray-500">{testimonial.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-lg mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: 'rgba(174, 213, 129, 0.2)', color: '#2E7D32'}}>
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#2E7D32'}}>
            Join Our Satisfied Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the Ashley Global Exim difference with premium quality pomegranates delivered to your business with expert care.
          </p>
          <button 
            className="px-8 py-4 text-lg font-semibold rounded-full text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{backgroundColor: '#2E7D32'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#5D4037'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#2E7D32'}
          >
            Request a Quote Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
