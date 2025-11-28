import React from 'react';
import { Heart, Users, DollarSign } from 'lucide-react';

const Philanthropy = () => {
  return (
    <div className="bg-velvet-night min-h-screen pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-gray-400 text-xs tracking-[0.3em] mb-4">SOCIAL IMPACT</p>
          <h1 className="text-white text-7xl font-light mb-6">
            <span className="font-bold">Philanthropy</span> &<br />
            Community Outreach
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Giving back to our community is at the heart of everything we do
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-24">
          <img
            src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MHx8fHwxNzYyNjY3MDYyfDA&ixlib=rb-4.1.0&q=85"
            alt="Philanthropy"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-white text-4xl font-light mb-8">
                Community <span className="font-bold">Support</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  During the 2025 Los Angeles wildfires, Jason spoke out publicly against illegal landlord 
                  price-gouging, reinforcing his long-standing advocacy for fair and ethical housing practices. 
                  In addition, the firm donated $100,000 to local fire and police departments and provided 
                  hundreds of essential supplies to affected residents.
                </p>
                <p>
                  Since 2010, The Oppenheim Group has proudly supported FoodOnFoot.org, a Los Angeles–based 
                  nonprofit dedicated to helping unhoused and low-income individuals rebuild their lives. To date, 
                  the team has personally contributed more than $150,000 and helped raise an additional $300,000, 
                  creating a meaningful and lasting impact across the community.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/34641806/pexels-photo-34641806.jpeg"
                alt="Community Support"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-regal-bronze p-12 mb-24">
            <h2 className="text-white text-4xl font-light text-center mb-12">
              Our <span className="font-bold">Impact</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-white mx-auto mb-4" />
                <p className="text-white text-4xl font-light mb-2">$450K+</p>
                <p className="text-white text-sm">Total Contributions</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <p className="text-white text-4xl font-light mb-2">15+</p>
                <p className="text-white text-sm">Years of Giving</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <p className="text-white text-4xl font-light mb-2">1000+</p>
                <p className="text-white text-sm">Lives Impacted</p>
              </div>
            </div>
          </div>

          {/* Organizations */}
          <div>
            <h2 className="text-white text-4xl font-light text-center mb-12">
              Organizations We <span className="font-bold">Support</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-velvet-night p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">FoodOnFoot.org</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A Los Angeles-based nonprofit dedicated to helping unhoused and low-income individuals 
                  rebuild their lives through food assistance, job training, and housing support.
                </p>
                <a
                  href="https://foodonfoot.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-regal-bronze text-white px-6 py-3 text-sm hover:bg-regal-bronze-dark transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
              <div className="bg-velvet-night p-8">
                <h3 className="text-white text-2xl font-semibold mb-4">LA Fire & Police</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Supporting our local first responders who risk their lives to protect our community, 
                  especially during natural disasters and emergencies.
                </p>
                <a
                  href="#"
                  className="inline-block bg-regal-bronze text-white px-6 py-3 text-sm hover:bg-regal-bronze-dark transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philanthropy;
