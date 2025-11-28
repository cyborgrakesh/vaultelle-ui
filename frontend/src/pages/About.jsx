import React from 'react';
import { Link } from 'react-router-dom';
import { agents } from '../mockData';

const About = () => {
  return (
    <div className="bg-velvet-night min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjI3NjQxNzV8MA&ixlib=rb-4.1.0&q=85"
          alt="The Oppenheim Group"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velvet-night bg-opacity-60" />
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 rounded-full border-2 border-regal-bronze flex items-center justify-center mx-auto mb-8">
            <span className="text-regal-bronze font-bold text-4xl">V</span>
          </div>
          <h1 className="text-white text-7xl font-light mb-4">
            The <span className="font-bold">Vaultelle</span>
          </h1>
          <p className="text-gray-300 text-xl">Leading Luxury Real Estate in Southern California</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-white text-5xl font-light mb-8">
                Our <span className="font-bold">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  The Vaultelle is a leading luxury real estate brokerage serving Los Angeles, Orange County, 
                  San Diego, and Cabo San Lucas. Led by President and Founder Michael Vaultier, the firm has achieved 
                  $4.5 billion in total sales and $500 million in active listings, closing hundreds of deals annually, 
                  including numerous record-breaking transactions.
                </p>
                <p>
                  With offices in West Hollywood, Newport Beach, San Diego, and Cabo San Lucas, The Vaultelle 
                  dominates the Southern California luxury market. Our team of elite agents brings unparalleled 
                  expertise, innovative marketing strategies, and a commitment to excellence that sets us apart 
                  in the industry.
                </p>
                <p>
                  The Vaultelle has gained international recognition while maintaining our focus on delivering exceptional 
                  results for our clients through cutting-edge technology and personalized service.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjI3NjQxNzV8MA&ixlib=rb-4.1.0&q=85"
                alt="Oppenheim Group Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-white text-5xl font-light text-center mb-16">
              Our <span className="font-bold">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-velvet-night p-8 text-center">
                <h3 className="text-white text-2xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-400 text-sm">
                  We strive for excellence in every transaction, ensuring our clients receive the highest level 
                  of service and the best possible results.
                </p>
              </div>
              <div className="bg-velvet-night p-8 text-center">
                <h3 className="text-white text-2xl font-semibold mb-4">Integrity</h3>
                <p className="text-gray-400 text-sm">
                  Honesty, transparency, and ethical practices are the foundation of our business and our 
                  relationships with clients.
                </p>
              </div>
              <div className="bg-velvet-night p-8 text-center">
                <h3 className="text-white text-2xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-400 text-sm">
                  We embrace cutting-edge technology and marketing strategies to stay ahead of the market 
                  and deliver superior results.
                </p>
              </div>
            </div>
          </div>

          {/* Team Preview */}
          <div>
            <h2 className="text-white text-5xl font-light text-center mb-16">
              Meet Our <span className="font-bold">Team</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {agents.map((agent) => (
                <div key={agent.id} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden mb-4">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-white text-sm font-semibold">{agent.name}</h3>
                  <p className="text-gray-400 text-xs">{agent.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/agents"
                className="inline-block bg-regal-bronze text-white px-8 py-3 text-sm tracking-wider hover:bg-regal-bronze-dark transition-colors"
              >
                VIEW ALL AGENTS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
