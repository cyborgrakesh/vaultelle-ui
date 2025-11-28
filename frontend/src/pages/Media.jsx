import React from 'react';
import { mediaArticles } from '../mockData';
import { ExternalLink } from 'lucide-react';

const Media = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-gray-400 text-xs tracking-[0.3em] mb-4">HOT OFF THE PRESS</p>
          <h1 className="text-white text-7xl font-light mb-6">
            <span className="italic">In The</span> <span className="font-bold">Media</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The Oppenheim Group receives significant attention within the real estate community and beyond; 
            the brokerage is the focus of the hit Netflix original series, Selling Sunset and Selling the OC.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaArticles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block bg-black overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                <div className="absolute top-4 right-4 bg-regal-bronze w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gray-900 group-hover:bg-gray-800 transition-colors">
                <p className="text-gray-400 text-xs mb-3 tracking-wider">{article.source.toUpperCase()}</p>
                <h3 className="text-white text-base leading-relaxed group-hover:text-regal-bronze transition-colors">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Netflix Section */}
        <div className="mt-24 bg-gradient-to-r from-red-600 to-red-700 p-12 text-center">
          <h2 className="text-white text-5xl font-light mb-6">
            As Seen On <span className="font-bold">Netflix</span>
          </h2>
          <p className="text-white text-lg mb-8">
            Watch Selling Sunset and Selling the OC to see our agents in action
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.netflix.com/title/80223108"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-regal-bronze px-8 py-4 text-sm tracking-wider hover:bg-gray-100 transition-colors"
            >
              WATCH SELLING SUNSET
            </a>
            <a
              href="https://www.netflix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-regal-bronze transition-colors"
            >
              WATCH SELLING THE OC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
