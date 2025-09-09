import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resources', href: '#blogs-videos' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer transform hover:scale-105 transition-all duration-300">
            <Scale className={`h-8 w-8 ${isScrolled ? 'text-blue-900 dark:text-amber-500' : 'text-white'} hover:text-amber-500 transition-colors duration-300`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900 dark:text-white' : 'text-white'} hover:text-amber-500 transition-colors duration-300`}>
              Vidhi Astra
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 hover:text-amber-500 ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} hover:text-amber-500 transition-colors duration-300`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'} hover:text-amber-500 transition-colors duration-300`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-amber-500 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;