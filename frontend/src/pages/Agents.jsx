import React from 'react';
import { agents } from '../mockData';
import { Mail, Phone } from 'lucide-react';

const Agents = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-white text-7xl font-light mb-4">
            Our <span className="font-bold">Agents</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Meet the award-winning team behind The Oppenheim Group
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {agents.map((agent) => (
            <div key={agent.id} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-3">
                    <a
                      href="mailto:agent@ogroup.com"
                      className="flex items-center justify-center gap-2 bg-regal-bronze text-white px-6 py-3 text-sm hover:bg-regal-bronze-dark transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      EMAIL
                    </a>
                    <a
                      href="tel:+13102814595"
                      className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      CALL
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-white text-2xl font-light mb-2">{agent.name}</h2>
                <p className="text-regal-bronze text-sm mb-4">{agent.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{agent.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
