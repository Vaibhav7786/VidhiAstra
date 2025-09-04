import React from 'react';
import { Scale, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Vidhi Astra</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Providing exceptional legal services with integrity, expertise, and unwavering commitment 
              to justice. Your trusted legal partner for all your legal needs.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">MADHYA PRADESH HIGH COURT</p>
                <p className="text-gray-300 text-sm">110, Indore Center, Opp.High Court,</p>
                <p className="text-gray-300 text-sm">M.G. Road, Indore - 452001 (M.P), INDIA</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                  +91  94253 34391
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:shubhampatidar5555@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  shubhampatidar5555@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-gray-300 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm">Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Vidhi Astra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-amber-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-500 text-sm transition-colors">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;