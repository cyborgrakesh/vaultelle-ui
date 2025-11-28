import React from 'react';
import { offices } from '../mockData';
import { MapPin, Phone, Mail } from 'lucide-react';

const Offices = () => {
  return (
    <div className="bg-velvet-night min-h-screen pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-white text-7xl font-light mb-4">
            Our <span className="font-bold">Offices</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Visit us at one of our luxury locations across Southern California and Mexico
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {offices.map((office) => (
            <div key={office.id} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <img
                  src={office.image}
                  alt={office.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-velvet-night bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
              </div>

              {/* Info */}
              <div>
                <h2 className="text-white text-4xl font-light mb-6">
                  {office.name.split(' ')[0]} <span className="font-bold">{office.name.split(' ').slice(1).join(' ')}</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-regal-bronze flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white text-sm">{office.address}</p>
                      <p className="text-gray-400 text-sm">{office.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-regal-bronze" />
                    <a href={`tel:${office.phone}`} className="text-white text-sm hover:text-regal-bronze transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-regal-bronze" />
                    <a href="mailto:office@ogroup.com" className="text-white text-sm hover:text-regal-bronze transition-colors">
                      office@ogroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;
