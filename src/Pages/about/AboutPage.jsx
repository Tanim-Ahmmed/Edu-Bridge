import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years of industry experience'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Tech innovator with a passion for cutting-edge solutions'
    },
    {
      name: 'Emma Williams',
      role: 'Design Director',
      description: 'Creative mind behind our stunning visual experiences'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* <div className="text-center">
            <h1 className="text-5xl font-bold text-green-800 mb-6 animate-float">
              About Us
            </h1>
            <p className="text-xl text-green-600 max-w-3xl mx-auto">
              We're on a mission to create innovative solutions that make a difference
              in people's lives through technology and creativity.
            </p>
          </div> */}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-green-200 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="w-64 h-64 bg-green-300 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-green-600">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h3>
            <p className="text-green-600">To deliver exceptional value through innovative solutions and unwavering commitment to excellence.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-green-600">👁️</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Our Vision</h3>
            <p className="text-green-600">To be the global leader in creating transformative digital experiences that inspire and empower.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-green-600">💫</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Our Values</h3>
            <p className="text-green-600">Innovation, integrity, and excellence guide everything we do as we strive to exceed expectations.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-green-800 text-center mb-2">{member.name}</h3>
              <p className="text-green-600 font-medium text-center mb-2">{member.role}</p>
              <p className="text-green-500 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-green-100 mb-8">We'd love to hear from you and discuss how we can help.</p>
          <button className="px-8 py-3 bg-white text-green-800 rounded-full font-semibold 
                           shadow-lg hover:bg-green-100 transform transition-all duration-300 
                           hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white 
                           focus:ring-opacity-50">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Decorative Elements */}
      <div className="flex justify-center space-x-2 py-8 bg-gradient-to-b from-green-800 to-green-900">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce-slow"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-slow delay-100"></div>
        <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce-slow delay-200"></div>
      </div>
    </div>
  );
};

export default AboutPage;