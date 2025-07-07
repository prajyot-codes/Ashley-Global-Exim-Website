const Gallery = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: '#2E7D32'}}>
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Visual showcase of our premium pomegranates
          </p>
          <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#AED581'}}></div>
        </div>
        
        {/* Content will be added here */}
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Gallery coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
