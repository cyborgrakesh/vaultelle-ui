import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, TrendingUp, Award } from 'lucide-react';

const Buyers = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
          alt="Buy With Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-7xl font-light mb-4">
            Buy <span className="font-bold">With Us</span>
          </h1>
          <p className="text-gray-300 text-xl">Find Your Dream Home in Southern California</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-white text-5xl font-light mb-8">
                Your Journey to <span className="font-bold">Luxury Living</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  At The Oppenheim Group, we understand that buying a home is one of the most important decisions 
                  you'll ever make. That's why we're committed to providing you with unparalleled service, expert 
                  guidance, and access to the finest properties in Southern California.
                </p>
                <p>
                  Our team of experienced agents has deep knowledge of the local market and access to exclusive 
                  listings that aren't available to the general public. Whether you're looking for a beachfront 
                  estate in Malibu, a modern masterpiece in the Hollywood Hills, or a luxury condo in downtown LA, 
                  we'll help you find the perfect property.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
                alt="Luxury Home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="text-center p-8 bg-gray-900">
              <Search className="w-12 h-12 text-regal-bronze mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Personalized Search</h3>
              <p className="text-gray-400 text-sm">Tailored property searches based on your specific needs and preferences</p>
            </div>
            <div className="text-center p-8 bg-gray-900">
              <Home className="w-12 h-12 text-regal-bronze mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Exclusive Access</h3>
              <p className="text-gray-400 text-sm">First look at off-market properties and new listings before they hit the market</p>
            </div>
            <div className="text-center p-8 bg-gray-900">
              <TrendingUp className="w-12 h-12 text-regal-bronze mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Market Expertise</h3>
              <p className="text-gray-400 text-sm">Deep knowledge of local market trends and property values</p>
            </div>
            <div className="text-center p-8 bg-gray-900">
              <Award className="w-12 h-12 text-regal-bronze mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Award-Winning Service</h3>
              <p className="text-gray-400 text-sm">Recognized as top agents in Los Angeles and Southern California</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-12 text-center">
            <h2 className="text-white text-4xl font-light mb-6">
              Ready to Find <span className="font-bold">Your Dream Home?</span>
            </h2>
            <p className="text-white mb-8">Browse our exclusive listings or contact us for a personalized consultation</p>
            <div className="flex justify-center gap-4">
              <Link
                to="/properties"
                className="bg-white text-regal-bronze px-8 py-4 text-sm tracking-wider hover:bg-gray-100 transition-colors"
              >
                VIEW PROPERTIES
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-regal-bronze transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buyers;
