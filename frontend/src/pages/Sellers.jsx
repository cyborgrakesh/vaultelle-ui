import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Users, Globe, DollarSign } from 'lucide-react';

const Sellers = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
          alt="List With Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-7xl font-light mb-4">
            List <span className="font-bold">With Us</span>
          </h1>
          <p className="text-gray-300 text-xl">Maximize Your Property's Value</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-white text-5xl font-light text-center mb-16">
            Why Sellers <span className="font-bold">Choose Us</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-red-600 text-5xl font-light mb-3">$4.5B+</p>
              <p className="text-white text-sm tracking-wider">Total Sales</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-5xl font-light mb-3">$500M+</p>
              <p className="text-white text-sm tracking-wider">Active Listings</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-5xl font-light mb-3">17M+</p>
              <p className="text-white text-sm tracking-wider">Social Reach</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-5xl font-light mb-3">2,000+</p>
              <p className="text-white text-sm tracking-wider">Closed Deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <img
                src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-white text-5xl font-light mb-8">
                Unparalleled <span className="font-bold">Marketing</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  When you list your property with The Oppenheim Group, you gain access to our award-winning 
                  marketing strategies and global reach. Our comprehensive approach ensures your property 
                  receives maximum exposure to qualified buyers.
                </p>
                <p>
                  From professional photography and videography to targeted digital campaigns and international 
                  partnerships, we leverage every tool at our disposal to showcase your property in the best 
                  possible light and achieve record-breaking results.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="text-center p-8 bg-gray-900">
              <Camera className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Professional Media</h3>
              <p className="text-gray-400 text-sm">High-end photography, videography, and virtual tours</p>
            </div>
            <div className="text-center p-8 bg-gray-900">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-400 text-sm">Award-winning agents with proven track records</p>
            </div>
            <div className="text-center p-8 bg-gray-900">
              <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Global Exposure</h3>
              <p className="text-gray-400 text-sm">International marketing through luxury networks</p>
            </div>
            <div className="text-center p-8 bg-gray-900">
              <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-white text-lg font-semibold mb-3">Maximum Value</h3>
              <p className="text-gray-400 text-sm">Strategic pricing and negotiation expertise</p>
            </div>
          </div>

          {/* Concierge Section */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-white text-4xl font-light mb-6">
                  White-Glove <span className="font-bold">Concierge</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Our exclusive concierge program prepares your home for market with top-tier services including 
                  staging, renovations, landscaping, and more. We handle everything to ensure your property looks 
                  its absolute best.
                </p>
                <Link
                  to="/concierge"
                  className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wider hover:bg-red-700 transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/34641806/pexels-photo-34641806.jpeg"
                  alt="Concierge Service"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-red-600">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-white text-5xl font-light mb-6">
            Ready to <span className="font-bold">List Your Property?</span>
          </h2>
          <p className="text-white text-lg mb-8">Get a free home valuation and marketing consultation</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/home-valuation"
              className="bg-white text-red-600 px-8 py-4 text-sm tracking-wider hover:bg-gray-100 transition-colors"
            >
              GET HOME VALUATION
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-red-600 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sellers;
