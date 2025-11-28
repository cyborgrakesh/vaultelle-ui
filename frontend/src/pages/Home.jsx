import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Play, Apple, Smartphone } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { heroSlides, properties, testimonials, mediaArticles } from '../mockData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [conciergeSlider, setConciergeSlider] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-image');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const socialData = [
    { name: 'The Vaultelle', followers: 606, color: '#A08C67' },
    { name: 'Serhant', followers: 547, color: '#888' },
    { name: 'The Agency', followers: 507, color: '#888' },
    { name: "Sotheby's", followers: 495, color: '#888' },
    { name: "Christie's", followers: 320, color: '#888' },
    { name: 'RE/MAX', followers: 250, color: '#888' },
    { name: 'Savills', followers: 248, color: '#888' },
    { name: 'Douglas Elliman', followers: 246, color: '#888' },
    { name: 'Compass', followers: 221, color: '#888' },
    { name: 'Knight Frank', followers: 203, color: '#888' },
    { name: 'Hilton & Hyland', followers: 187, color: '#888' },
    { name: 'The Corcoran Group', followers: 187, color: '#888' },
    { name: 'Keller Williams', followers: 172, color: '#888' },
    { name: 'Coldwell Banker', followers: 165, color: '#888' },
  ];

  const maxFollowers = Math.max(...socialData.map(d => d.followers));

  return (
    <div className="bg-black">
      {/* Hero Slider */}
      <section className="relative h-screen mt-20">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-red-600 transition-colors z-10"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-red-600 transition-colors z-10"
        >
          <ChevronRight className="w-12 h-12" />
        </button>

        <div className="absolute right-12 bottom-20 text-right z-10">
          <p className="text-white text-[10px] tracking-[0.4em] mb-8 font-light">OUR OFFICES</p>
          <div className="space-y-3">
            <Link to="/offices/los-angeles" className="block text-white text-5xl font-light tracking-[0.05em] hover:text-red-600 transition-colors">
              LOS ANGELES
            </Link>
            <Link to="/offices/newport-beach" className="block text-white text-5xl font-light tracking-[0.05em] hover:text-red-600 transition-colors">
              NEWPORT BEACH
            </Link>
            <Link to="/offices/san-diego" className="block text-white text-5xl font-light tracking-[0.05em] hover:text-red-600 transition-colors">
              SAN DIEGO
            </Link>
            <Link to="/offices/cabo" className="block text-white text-5xl font-light tracking-[0.05em] hover:text-red-600 transition-colors">
              CABO SAN LUCAS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-[10px] tracking-[0.3em] z-10 font-light">
          <p className="animate-bounce">SCROLL DOWN</p>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gray-400 text-[10px] tracking-[0.4em] mb-4 font-light">EXCLUSIVE PROPERTIES</p>
              <h2 className="text-white text-7xl">
                <span className="font-extralight tracking-wide">FEATURED </span>
                <span className="font-bold">LISTINGS</span>
              </h2>
            </div>
            <Link
              to="/properties"
              className="bg-red-600 text-white px-8 py-3 text-[11px] tracking-[0.2em] hover:bg-red-700 transition-colors flex items-center gap-2 font-light"
            >
              VIEW ALL <Plus className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {properties.slice(0, 2).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {properties.slice(2, 5).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {properties.slice(5, 7).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* About Founder - with Large Name on Left and Parallax Background */}
      <section 
        className="py-32 px-6 lg:px-12 relative parallax-section" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Large Name on Left */}
            <div className="lg:col-span-4 flex flex-col">
              <p className="text-gray-500 text-xs tracking-[0.3em] mb-4">PRESIDENT & FOUNDER</p>
              <h2 className="text-red-800 font-light" style={{ fontSize: '8rem', lineHeight: '0.9', letterSpacing: '0.02em' }}>
                MICHAEL
              </h2>
              <h2 className="text-red-800 font-bold" style={{ fontSize: '8rem', lineHeight: '0.9', letterSpacing: '0.02em' }}>
                VAULTIER
              </h2>
            </div>

            {/* Photo */}
            <div className="lg:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1762341116674-784c5dbedeb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwwfHx8fDE3NjI3NjQxODB8MA&ixlib=rb-4.1.0&q=85"
                alt="CEO & Founder"
                className="w-full aspect-[3/4] object-cover shadow-2xl"
              />
            </div>

            {/* Text Content */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  As President and Founder of The Vaultelle, Michael leads a team responsible for
                  representing buyers and sellers of distinguished properties throughout Southern California.
                  He was recognized as the Best Real Estate Agent in the United States by the International
                  Property Awards and as the #1 real estate agent in the Hollywood Hills/West Hollywood by the
                  Wall Street Journal.
                </p>
                <p>
                  Michael receives significant attention within the real estate community and beyond.
                  With more than $4.5 billion in closed sales, he currently has more than $500 million in
                  active listings and has achieved numerous record-breaking results for his clients.
                </p>
              </div>
              <Link
                to="/agents"
                className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wider hover:bg-red-700 transition-colors"
              >
                LEARN MORE ABOUT MICHAEL <Plus className="inline w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax Background */}
      <section 
        className="py-32 px-6 lg:px-12 relative parallax-section" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <h2 className="text-white text-5xl font-light text-center mb-16">
            Why Work<br />
            <span className="font-bold">With Us</span>
          </h2>
          <p className="text-red-600 text-center text-sm tracking-[0.3em] mb-12">OUR NUMBERS</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <p className="text-red-600 text-4xl font-light mb-2">$4.5B+</p>
              <p className="text-white text-xs tracking-wider">Total Sales</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-4xl font-light mb-2">210K+</p>
              <p className="text-white text-xs tracking-wider">Email Database</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-4xl font-light mb-2">17M+</p>
              <p className="text-white text-xs tracking-wider">Social Media Followers</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-4xl font-light mb-2">$500M+</p>
              <p className="text-white text-xs tracking-wider">Active Listings</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-4xl font-light mb-2">1.5M+</p>
              <p className="text-white text-xs tracking-wider">Annual Visitors</p>
            </div>
            <div className="text-center">
              <p className="text-red-600 text-4xl font-light mb-2">2,000+</p>
              <p className="text-white text-xs tracking-wider">Closed Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About The Vaultelle */}
      <section className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-20 h-20 rounded-full border-2 border-red-600 flex items-center justify-center mb-8">
                <span className="text-red-600 font-bold text-3xl">V</span>
              </div>
              <p className="text-white text-sm leading-relaxed mb-8">
                The Vaultelle is a leading luxury real estate brokerage serving Los Angeles, Orange County, 
                San Diego, and Cabo San Lucas. Led by President and Founder Michael Vaultier, the firm has achieved 
                $4.5 billion in total sales and $500 million in active listings, closing hundreds of deals annually, 
                including numerous record-breaking transactions. With offices in West Hollywood, Newport Beach, San Diego, 
                and Cabo San Lucas, The Vaultelle dominates the Southern California luxury market.
              </p>
              <Link
                to="/about"
                className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wider hover:bg-red-700 transition-colors"
              >
                READ MORE
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg"
                alt="The Vaultelle Office"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ backgroundColor: '#A08C67' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link to="/sellers" className="group relative flex items-center justify-center py-16 hover:opacity-80 transition-opacity">
              <div className="text-center">
                <p className="text-white text-3xl font-light">LIST</p>
                <p className="text-white text-lg mt-2">WITH US</p>
              </div>
            </Link>
            <Link to="/buyers" className="group relative flex items-center justify-center py-16 hover:opacity-80 transition-opacity">
              <div className="text-center">
                <p className="text-white text-3xl font-light">BUY</p>
                <p className="text-white text-lg mt-2">WITH US</p>
              </div>
            </Link>
            <Link to="/offices" className="group relative flex items-center justify-center py-16 hover:opacity-80 transition-opacity">
              <div className="text-center">
                <p className="text-white text-3xl font-light">OUR</p>
                <p className="text-white text-lg mt-2">OFFICES</p>
              </div>
            </Link>
            <Link to="/neighborhood-guides" className="group relative flex items-center justify-center py-16 hover:opacity-80 transition-opacity">
              <div className="text-center">
                <p className="text-white text-3xl font-light">NEIGHBORHOOD</p>
                <p className="text-white text-lg mt-2">GUIDES</p>
              </div>
            </Link>
            <Link to="/home-valuation" className="group relative flex items-center justify-center py-16 hover:opacity-80 transition-opacity">
              <div className="text-center">
                <p className="text-white text-3xl font-light">HOME</p>
                <p className="text-white text-lg mt-2">VALUATION</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Concierge Section */}
      <section className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl font-light mb-4">
              White-Glove<br />
              <span className="font-bold">Concierge</span>
            </h2>
            <p className="text-red-600 text-sm tracking-[0.3em]">TOP-TIER SERVICES</p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - conciergeSlider}% 0 0)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
                  alt="After"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={conciergeSlider}
                onChange={(e) => setConciergeSlider(e.target.value)}
                className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full cursor-pointer opacity-0 z-10"
              />
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none"
                style={{ left: `${conciergeSlider}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ChevronLeft className="w-4 h-4 text-black" />
                  <ChevronRight className="w-4 h-4 text-black" />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded text-sm">BEFORE</div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded text-sm">AFTER</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              The Vaultelle's Concierge Program aims to prepare your home for an optimal launch on the market. 
              After assessing your property's needs via a walkthrough, we work together, creating opportunities 
              to maximize your profit upon sale.
            </p>
            <Link
              to="/concierge"
              className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wider hover:bg-red-700 transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-white text-5xl font-light text-center mb-4">
            What Clients <span className="italic">Are</span> Saying
          </h2>
          <p className="text-red-600 text-center text-xl font-semibold mb-16">Client Rave Reviews</p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-900 p-8 rounded-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover mb-6 mx-auto"
                  />
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-white text-xs text-center">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wider hover:bg-red-700 transition-colors"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* In The Media */}
      <section className="py-24 px-6 lg:px-12" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-xs tracking-[0.3em] mb-3">HOT OFF THE PRESS</p>
            <h2 className="text-black text-6xl">
              <span className="font-light italic">In The</span>{' '}
              <span className="font-bold">Media</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mediaArticles.slice(0, 4).map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-3 tracking-wider">{article.source.toUpperCase()}</p>
                  <p className="text-black text-sm leading-relaxed group-hover:text-red-600 transition-colors">
                    {article.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/media"
              className="inline-block bg-red-600 text-white px-8 py-3 text-sm tracking-wider hover:bg-red-700 transition-colors"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Download Our App Section */}
      <section className="py-32 px-6 lg:px-12" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-6">
                <p className="text-red-700 text-[10px] tracking-[0.3em] font-light">AHEAD OF THE MARKET</p>
                <div className="w-16 h-0.5 bg-red-700 mt-1"></div>
              </div>
              <h2 className="mb-12" style={{ lineHeight: '0.85' }}>
                <span className="text-red-700 font-light block" style={{ fontSize: '5.5rem', letterSpacing: '0.02em' }}>DOWNLOAD</span>
                <span className="text-red-700 font-bold block" style={{ fontSize: '5.5rem', letterSpacing: '0.02em' }}>OUR APP</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center lg:items-end">
              <p className="text-gray-800 text-xs font-semibold mb-4 tracking-wider">STAY AHEAD OF THE MARKET 24/7</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-md">
                The Vaultelle mobile app provides the most thorough home search functionality and the
                latest inventory directly from the MLS. Constant updates will always keep you ahead of the
                market as you locate new homes for sale, upcoming open houses, and recently sold properties.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
                <a 
                  href="#" 
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup - Centered below */}
          <div className="flex justify-center mt-16">
            <div className="relative">
              <div className="w-[300px] aspect-[9/19] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"></div>
                  {/* Screen Content */}
                  <img 
                    src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzYyNzY0MTcxfDA&ixlib=rb-4.1.0&q=85"
                    alt="App Interface"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay showing app UI elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-12 left-4 right-4 z-20">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-2">
                      <input 
                        type="text" 
                        placeholder="Search city, zip, address..." 
                        className="w-full bg-white/20 text-white text-xs px-3 py-2 rounded-lg placeholder-white/70"
                        disabled
                      />
                    </div>
                  </div>
                  {/* Property Cards Overlay */}
                  <div className="absolute top-32 left-4 right-4 z-20 space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-lg">
                      <div className="flex gap-3">
                        <div className="w-20 h-20 bg-gray-300 rounded"></div>
                        <div className="flex-1">
                          <p className="text-red-600 text-xs font-semibold">$9,995,000</p>
                          <p className="text-gray-800 text-[10px] mt-1">11 days on market</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Save this search button */}
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30">
                    <div className="bg-red-600 text-white text-[10px] px-4 py-2 rounded-full shadow-lg">
                      Save this search
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Get Social Section */}
      <section 
        className="py-32 px-6 lg:px-12 relative" 
        style={{ 
          backgroundColor: '#e8e8e8',
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.1))'
        }}
      >
        {/* Subtle cloud background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <h2 className="text-center mb-20" style={{ lineHeight: '1' }}>
            <span className="font-light" style={{ 
              fontSize: '7rem',
              color: 'transparent',
              WebkitTextStroke: '2px #A08C67',
              letterSpacing: '0.05em'
            }}>LET'S GET </span>
            <span className="font-bold text-red-700" style={{ 
              fontSize: '7rem',
              letterSpacing: '0.05em'
            }}>SOCIAL</span>
          </h2>

          {/* Bar Chart */}
          <div className="flex items-end justify-center gap-3 mb-16 h-[450px] px-4">
            {socialData.map((company, index) => {
              const height = (company.followers / maxFollowers) * 100;
              const isVaultelle = index === 0;
              return (
                <div key={index} className="flex flex-col items-center gap-2" style={{ width: '65px' }}>
                  <div className="text-gray-800 text-[11px] font-bold mb-2">{company.followers}K+</div>
                  <div 
                    className="w-full relative group shadow-lg transition-all duration-700 ease-out hover:scale-105"
                    style={{ 
                      height: `${height}%`,
                      backgroundColor: isVaultelle ? '#A08C67' : '#e0e0e0',
                      minHeight: '50px',
                      borderRadius: '2px'
                    }}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                  <div 
                    className="text-[10px] text-gray-800 font-semibold text-center mt-2" 
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      height: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {company.name}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-800 text-xs max-w-4xl mx-auto font-semibold tracking-wider leading-relaxed">
            THE VAULTELLE HAS <span className="font-bold text-red-700">MORE FOLLOWERS ON INSTAGRAM THAN ANY OTHER REAL ESTATE BROKERAGE</span> IN THE WORLD.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 lg:px-12 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-4xl font-light mb-8">
            Be A Part of the<br />
            <span className="font-bold">Vaultelle Network</span>
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Keep up-to-date with the latest market trends and opportunities in<br />
            Los Angeles, Orange County, San Diego and Cabo San Lucas.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-900 text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-900 text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-8 py-4 text-sm tracking-wider hover:bg-red-700 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
