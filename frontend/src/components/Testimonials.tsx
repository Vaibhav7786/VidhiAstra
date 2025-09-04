import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      case: 'Property Dispute',
      text: 'Vidhi Astra helped me resolve a complex property dispute that had been pending for years. Their expertise and dedication were exceptional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      case: 'Corporate Legal Matters',
      text: 'Outstanding legal support for our business. Professional, reliable, and always available when we needed guidance.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      case: 'Family Law',
      text: 'Handled my family matter with great sensitivity and professionalism. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read what our satisfied clients have to say about our legal services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="h-10 w-10 text-amber-500 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.case}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;