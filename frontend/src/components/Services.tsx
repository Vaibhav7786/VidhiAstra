import React from 'react';
import { Briefcase, Home, Users, Building, FileText, Gavel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Service Matters',
      description: 'Representation in service-related disputes including appointments, promotions, disciplinary actions, and retirements.',
      features: ['Appointments & Promotions', 'Disciplinary Actions', 'Retirement & Pension Benefits']
    },
    {
      icon: Home,
      title: 'Property Law',
      description: 'Expert guidance on real estate transactions, property disputes, and documentation.',
      features: ['Property Registration', 'Title Verification', 'Dispute Resolution']
    },
    {
      icon: Users,
      title: 'Matrimonial & Family Law',
      description: 'Sensitive handling of family matters with compassionate legal support.',
      features: ['Divorce Proceedings', 'Child Custody', 'Matrimonial Disputes']
    },
    {
      icon: Building,
      title: 'Civil Litigation',
      description: 'Strong representation in civil courts for various legal disputes.',
      features: ['Court Representation', 'Legal Documentation', 'Settlement Negotiations']
    },
    {
      icon: FileText,
      title: 'Arbitration & Alternate Dispute Resolution (ADR)',
      description: 'Domestic and institutional arbitration, conciliation, and mediation.',
      features: ['Arbitration Proceedings', 'Mediation & Conciliation', 'Negotiation & Settlement Agreements']
    },
    {
      icon: Gavel,
      title: 'Criminal Defense',
      description: 'Experienced criminal defense representation with proven track record.',
      features: ['Bail Applications', 'Court Defense', 'Legal Counsel']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Legal Services
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to meet your specific needs with expertise and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;