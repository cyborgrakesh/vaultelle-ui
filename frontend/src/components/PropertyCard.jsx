import React from 'react';
import { Bed, Bath, Maximize } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="group relative overflow-hidden bg-black cursor-pointer rounded-2xl h-full">
      {/* Image with overlay text - Fixed Height */}
      <div className="relative h-[450px] overflow-hidden rounded-2xl">
        <img
          src={property.image}
          alt={property.address}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
        
        {/* Text Overlay on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Price */}
          <div className="mb-3">
            <p className="text-white text-2xl font-light">{property.price}</p>
            <div className="w-12 h-0.5 bg-regal-bronze mt-2" />
          </div>

          {/* Address */}
          <p className="text-white text-sm mb-1 font-light tracking-wide">{property.address}</p>
          <p className="text-gray-300 text-xs mb-4 font-light">
            {property.city}, {property.state} {property.zip}
          </p>

          {/* Features */}
          {property.beds && (
            <div className="flex items-center gap-6 text-gray-300 text-xs">
              <div className="flex items-center gap-2">
                <Bed className="w-4 h-4" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4" />
                <span>{property.baths} Baths</span>
              </div>
              {property.sqft && (
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4" />
                  <span>{property.sqft} SQFT</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
