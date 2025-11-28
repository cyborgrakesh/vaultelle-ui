import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { offices } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-velvet-night text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Contact */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo/Vaultelle-Logo.svg" 
                alt="Vaultelle" 
                className="w-10 h-10"
              />
              <img 
                src="/logo/Vaultelle-Wordmark.svg" 
                alt="Vaultelle" 
                className="h-5 w-auto"
              />
            </Link>
            <p className="text-sm mb-4">
              <a href="mailto:office@vaultelle.com" className="hover:text-regal-bronze transition-colors">
                office@vaultelle.com
              </a>
            </p>
            <p className="text-sm text-gray-400">DRE# 01983697</p>
          </div>

          {/* Offices */}
          {offices.map((office) => (
            <div key={office.id}>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">{office.name.toUpperCase()}</h3>
              <p className="text-sm text-gray-400 mb-2">{office.address}</p>
              <p className="text-sm text-gray-400 mb-3">{office.city}</p>
              <a href={`tel:${office.phone}`} className="text-sm hover:text-regal-bronze transition-colors">
                {office.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm mb-4">Follow Us On:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-regal-bronze transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-regal-bronze transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-regal-bronze transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-regal-bronze transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-regal-bronze transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:office@vaultelle.com" className="text-white hover:text-regal-bronze transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Vaultelle. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-regal-bronze transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-regal-bronze transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
