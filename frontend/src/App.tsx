import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import BlogsVideos from './components/BlogsVideos';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <BlogsVideos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;