import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const legalImages = [
    '/attached_assets/generated_images/Professional_law_office_interior_6bd0f78f.png',
    '/attached_assets/generated_images/Indian_Supreme_Court_building_2b0075b5.png',
    '/attached_assets/generated_images/Legal_document_signing_scene_b01ef3cf.png',
    '/attached_assets/generated_images/Indian_courtroom_interior_scene_e1122f8e.png',
    '/attached_assets/generated_images/Family_law_consultation_scene_0a3580c0.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === legalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [legalImages.length]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Image Carousel */}
      {legalImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentImageIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            transform: index === currentImageIndex ? 'scale(1)' : 'scale(1.1)'
          }}
        ></div>
      ))}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Expert Legal
          <span className="block text-amber-400">Representation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Providing comprehensive legal solutions with integrity, expertise, and unwavering commitment to justice
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-xl"
          >
            <span>Free Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <a 
            href="tel:+917024018201"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;