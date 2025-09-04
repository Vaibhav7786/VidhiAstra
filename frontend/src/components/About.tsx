import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Cases Won', value: '500+' },
    { icon: Clock, label: 'Available 24/7', value: 'Always' },
    { icon: Shield, label: 'Success Rate', value: '95%' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Vidhi Astra
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             Vidhi Astra was founded with the vision of providing professional legal services that are accessible, transparent, and result-oriented. Our team of advocates represent clients before the Supreme Court of India, High Courts, District Courts, and Tribunals across the country. We strongly believe in building client relationships based on trust, ethics, and commitment to justice. Our Core Values Commitment to Justice Confidentiality & Integrity Professional Excellence Client-Centric Approach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Committed to Excellence in Legal Practice
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Vidhi Astra, we believe that every client deserves the highest quality legal representation. 
              Our approach combines deep legal expertise with personalized attention to ensure the best possible 
              outcomes for our clients.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in a wide range of legal areas, from corporate law to family disputes, 
              always maintaining the highest standards of professional ethics and client confidentiality.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold">
                Certified Legal Expert
              </div>
              <div className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-semibold">
                Bar Council Member
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-900 rounded-lg p-8 transform rotate-3 shadow-xl">
              <div className="bg-white rounded-lg p-6 transform -rotate-3">
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "Justice delayed is justice denied. At Vidhi Astra, we ensure swift, 
                  effective legal solutions that protect our clients' rights and interests."
                </blockquote>
                <div className="mt-4 text-blue-900 font-semibold">
                  - Vidhi Astra Philosophy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;