import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    {
      name: 'PROPERTIES',
      href: '/properties',
      submenu: [
        { name: 'Active Listings', href: '/properties' },
        { name: 'Recent Sales', href: '/properties/sales' }
      ]
    },
    {
      name: 'BUYERS',
      href: '/buyers',
      submenu: [
        { name: 'Buy With Us', href: '/buyers' },
        { name: 'Neighborhood Guides', href: '/neighborhood-guides' }
      ]
    },
    {
      name: 'SELLERS',
      href: '/sellers',
      submenu: [
        { name: 'List With Us', href: '/sellers' },
        { name: 'Concierge', href: '/concierge' },
        { name: 'Marketing', href: '/marketing' }
      ]
    },
    {
      name: 'OFFICES',
      href: '/offices',
      submenu: [
        { name: 'Los Angeles', href: '/offices/los-angeles' },
        { name: 'Newport Beach', href: '/offices/newport-beach' },
        { name: 'San Diego', href: '/offices/san-diego' },
        { name: 'Cabo San Lucas', href: '/offices/cabo' }
      ]
    },
    {
      name: 'ABOUT US',
      href: '/about',
      submenu: [
        { name: 'The Vaultelle', href: '/about' },
        { name: 'Our Agents', href: '/agents' },
        { name: 'Client Reviews', href: '/reviews' },
        { name: 'Philanthropy', href: '/philanthropy' }
      ]
    },
    { name: 'IN THE MEDIA', href: '/media' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-regal-bronze flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-regal-bronze font-bold text-xl">V</span>
            </div>
            <span className="text-white text-[10px] tracking-[0.25em] font-light hidden md:block" style={{ letterSpacing: '0.25em' }}>THE VAULTELLE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className="text-white text-[11px] tracking-[0.2em] font-normal hover:text-regal-bronze transition-colors flex items-center gap-1"
                  style={{ fontWeight: '400', letterSpacing: '0.2em' }}
                >
                  {item.name}
                </Link>
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-4">
                    <div className="bg-black border border-gray-800 min-w-[220px] py-2 shadow-xl">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-3 text-white text-[11px] tracking-[0.15em] font-light hover:bg-regal-bronze hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="xl:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block text-white text-sm tracking-wider hover:text-regal-bronze transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block text-gray-400 text-xs hover:text-regal-bronze transition-colors py-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
