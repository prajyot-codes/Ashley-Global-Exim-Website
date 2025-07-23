import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Gallery from './pages/gallery'
import Testimonials from './pages/testimonials'
import Contact from './pages/contact'

function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      
      <main className="w-full">
        <section id="home" className="w-full">
          <Home />
        </section>
        
        <section id="products" className="w-full">
          <Products />
        </section>

        <section id="about" className="w-full">
          <About />
        </section>
        
        <section id="gallery" className="w-full">
          <Gallery />
        </section>
        
        <section id="testimonials" className="w-full">
          <Testimonials />
        </section>
        
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App
