import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Play } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { heroSlides, properties, testimonials, mediaArticles } from '../mockData';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

        {/* Slide Controls */}
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

        {/* Office Locations Overlay */}
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

        {/* Scroll Down Indicator */}
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

          {/* First Row - 2 Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {properties.slice(0, 2).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {properties.slice(2, 5).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Third Row - 2 Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {properties.slice(5, 7).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Netflix Section */}
      <section className="py-24 px-6 lg:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Awards & Quotes */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <p className="text-sm">"TV's most addictive realty show"</p>
                    <p className="text-xs text-gray-400 mt-1">- CNN</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <p className="text-sm">"ZEITGEIST-HIT"</p>
                    <p className="text-xs text-gray-400 mt-1">- Variety</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">BEST LIFESTYLE SHOW WINNER</p>
                    <p className="text-xs text-gray-400 mt-1">at the Critics Choice Awards</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">Nominated for Three Emmy Awards</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">Best Docu-Reality Series Winner</p>
                    <p className="text-xs text-gray-400 mt-1">at the MTV Movies & TV Awards</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white text-4xl font-light mb-4">
                  Binge-<br />
                  <span className="font-bold">Worthy</span>
                </h3>
                <p className="text-red-600 text-xl font-semibold">Watch On Netflix</p>
              </div>
            </div>

            {/* Right: Show Posters */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MHx8fHwxNzYyNjY3MDYyfDA&ixlib=rb-4.1.0&q=85"
                  alt="Selling Sunset"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
                  <p className="text-white text-sm font-semibold">Selling Sunset</p>
                  <p className="text-gray-400 text-xs">Season 9</p>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MHx8fHwxNzYyNjY3MDYyfDA&ixlib=rb-4.1.0&q=85"
                  alt="Selling the OC"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
                  <p className="text-white text-sm font-semibold">Selling the OC</p>
                  <p className="text-gray-400 text-xs">Season 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder - with Parallax Effect */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="parallax-image" data-speed="0.5">
              <img
                src="https://images.unsplash.com/photo-1762341116674-784c5dbedeb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwwfHx8fDE3NjI3NjQxODB8MA&ixlib=rb-4.1.0&q=85"
                alt="CEO & Founder"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div>
              <div className="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center mb-8">
                <span className="text-red-600 font-bold text-2xl">V</span>
              </div>
              <p className="text-gray-400 text-xs tracking-[0.3em] mb-3">PRESIDENT & FOUNDER</p>
              <h2 className="text-white text-6xl font-light mb-8">
                Michael<br />
                <span className="font-bold">Vaultier</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed mb-8">
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
                LEARN MORE ABOUT MICHAEL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1920px] mx-auto">
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
      <section className="py-24 px-6 lg:px-12">
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
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link to="/sellers" className="group relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-red-600 group-hover:bg-red-700 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-white text-2xl font-light">List</p>
                <p className="text-white text-sm mt-2">with Us</p>
              </div>
            </Link>
            <Link to="/buyers" className="group relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-red-600 group-hover:bg-red-700 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-white text-2xl font-light">Buy</p>
                <p className="text-white text-sm mt-2">with Us</p>
              </div>
            </Link>
            <Link to="/offices" className="group relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-red-600 group-hover:bg-red-700 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-white text-2xl font-light">Our</p>
                <p className="text-white text-sm mt-2">Offices</p>
              </div>
            </Link>
            <Link to="/neighborhood-guides" className="group relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-red-600 group-hover:bg-red-700 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-white text-2xl font-light">Neighborhood</p>
                <p className="text-white text-sm mt-2">Guides</p>
              </div>
            </Link>
            <Link to="/home-valuation" className="group relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-red-600 group-hover:bg-red-700 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-white text-2xl font-light">Home</p>
                <p className="text-white text-sm mt-2">Valuation</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-white text-5xl font-light text-center mb-4">
            What Clients <span className="italic">Are</span> Saying
          </h2>
          <p className="text-red-600 text-center text-xl font-semibold mb-16">Client Rave Reviews</p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-900 p-8">
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
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-xs tracking-[0.3em] mb-3">HOT OFF THE PRESS</p>
            <h2 className="text-white text-6xl">
              <span className="font-light italic">In The</span>{' '}
              <span className="font-bold">Media</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mediaArticles.map((article) => (
              <a
                key={article.id}
                href={article.link}
                className="group block bg-black overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-2">{article.source}</p>
                  <p className="text-white text-sm leading-relaxed group-hover:text-red-600 transition-colors">
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

      {/* Newsletter */}
      <section className="py-24 px-6 lg:px-12">
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
