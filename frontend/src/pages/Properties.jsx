import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../mockData';
import { Search } from 'lucide-react';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter(
    (property) =>
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-gray-400 text-xs tracking-[0.3em] mb-3">EXCLUSIVE PROPERTIES</p>
          <h1 className="text-white text-7xl mb-8">
            <span className="font-light">FEATURED </span>
            <span className="font-bold">LISTINGS</span>
          </h1>

          {/* Search */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by address or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 text-white pl-16 pr-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">No properties found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
