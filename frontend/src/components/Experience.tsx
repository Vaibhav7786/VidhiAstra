import React from 'react';
import { TrendingUp, CheckCircle, Star, Calendar } from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: 'High Success Rate',
      description: 'Maintaining a 95% success rate across all practice areas',
      highlight: '95%'
    },
    {
      icon: CheckCircle,
      title: 'Cases Resolved',
      description: 'Successfully resolved over 500 legal cases',
      highlight: '500+'
    },
    {
      icon: Star,
      title: 'Client Satisfaction',
      description: 'Consistently rated 5 stars by satisfied clients',
      highlight: '5 ★'
    },
    {
      icon: Calendar,
      title: 'Years of Practice',
      description: 'Over 15 years of dedicated legal practice',
      highlight: '15+'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proven Track Record
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in our outstanding results and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-amber-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400 transition-colors duration-300">
                <achievement.icon className="h-10 w-10 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-amber-400 mb-2">
                {achievement.highlight}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-blue-100 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Vidhi Astra?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-amber-400 mb-2">Expertise</h4>
                <p className="text-blue-100">Deep knowledge across multiple practice areas</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-amber-400 mb-2">Integrity</h4>
                <p className="text-blue-100">Transparent, honest, and ethical legal practice</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-amber-400 mb-2">Results</h4>
                <p className="text-blue-100">Proven track record of successful outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;