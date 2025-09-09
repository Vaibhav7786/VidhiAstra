import React, { useState } from 'react';
import { Award, Users, Clock, Shield, ChevronLeft, ChevronRight, Building, User } from 'lucide-react';

const About = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const stats = [
    { icon: Award, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Cases Won', value: '500+' },
    { icon: Clock, label: 'Available 24/7', value: 'Always' },
    { icon: Shield, label: 'Success Rate', value: '95%' },
  ];

  const teamMembers = [
    {
      name: 'Advocate Shubham Patidar',
      position: 'Senior Partner & Founder',
      specialization: 'Civil Litigation, Property Law',
      experience: '15+ Years',
      description: 'Specializes in complex civil matters and property disputes with extensive experience in High Court proceedings.'
    },
    {
      name: 'Advocate Priya Sharma',
      position: 'Partner',
      specialization: 'Family Law, Matrimonial Cases',
      experience: '12+ Years',
      description: 'Expert in family court matters, divorce proceedings, and child custody cases with compassionate approach.'
    },
    {
      name: 'Advocate Rajesh Kumar',
      position: 'Senior Associate',
      specialization: 'Criminal Defense, Court Representation',
      experience: '8+ Years',
      description: 'Skilled criminal defense lawyer with successful track record in complex criminal cases and bail matters.'
    },
    {
      name: 'Advocate Anita Verma',
      position: 'Associate',
      specialization: 'Corporate Law, Arbitration',
      experience: '6+ Years',
      description: 'Focuses on corporate legal matters, contract disputes, and alternative dispute resolution mechanisms.'
    }
  ];

  const partnerCompanies = [
    {
      name: 'Legal Aid Foundation',
      type: 'Non-Profit Organization',
      description: 'Partnering to provide pro bono legal services to underprivileged communities in Madhya Pradesh.'
    },
    {
      name: 'Indore Chamber of Commerce',
      type: 'Business Association',
      description: 'Collaborating to offer legal consultancy services to local businesses and entrepreneurs.'
    },
    {
      name: 'MP Bar Association',
      type: 'Professional Body',
      description: 'Active member providing continuing legal education and professional development programs.'
    },
    {
      name: 'Mediation Center Indore',
      type: 'ADR Institution',
      description: 'Partner in alternative dispute resolution services and mediation proceedings.'
    },
    {
      name: 'Legal Tech Solutions',
      type: 'Technology Partner',
      description: 'Utilizing modern legal technology for efficient case management and client services.'
    }
  ];

  const nextTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partnerCompanies.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + partnerCompanies.length) % partnerCompanies.length);
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Vidhi Astra
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
             Vidhi Astra was founded with the vision of providing professional legal services that are accessible, transparent, and result-oriented. Our team of advocates represent clients before the Supreme Court of India, High Courts, District Courts, and Tribunals across the country. We strongly believe in building client relationships based on trust, ethics, and commitment to justice. Our Core Values Commitment to Justice Confidentiality & Integrity Professional Excellence Client-Centric Approach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group transform hover:scale-110 transition-all duration-300">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{stat.value}</div>
              <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
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

        {/* Team Members Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Legal Team
            </h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our experienced legal professionals dedicated to serving your legal needs
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <User className="h-16 w-16 text-blue-900 bg-blue-100 rounded-full p-4" />
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {teamMembers[currentTeamIndex].name}
              </h4>
              <p className="text-blue-900 font-semibold mb-2">
                {teamMembers[currentTeamIndex].position}
              </p>
              <p className="text-amber-600 font-medium mb-2">
                {teamMembers[currentTeamIndex].specialization}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Experience: {teamMembers[currentTeamIndex].experience}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
                {teamMembers[currentTeamIndex].description}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTeamMember}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTeamMember}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamIndex 
                      ? 'bg-blue-900 scale-125' 
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partner Companies Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h3>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading organizations to provide comprehensive legal solutions
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-16 w-16 text-blue-900 bg-blue-100 rounded-full p-4" />
            </div>
            
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {partnerCompanies[currentPartnerIndex].name}
              </h4>
              <p className="text-blue-900 font-semibold mb-4">
                {partnerCompanies[currentPartnerIndex].type}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
                {partnerCompanies[currentPartnerIndex].description}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevPartner}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextPartner}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {partnerCompanies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartnerIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPartnerIndex 
                      ? 'bg-blue-900 scale-125' 
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;