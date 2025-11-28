import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { offices } from '../mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'buying'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'buying'
    });
  };

  return (
    <div className="bg-velvet-night min-h-screen pt-32 pb-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-white text-7xl font-light mb-4">
            Contact <span className="font-bold">Us</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Get in touch with our team of luxury real estate experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div>
            <h2 className="text-white text-3xl font-light mb-8">
              Send Us a <span className="font-bold">Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-velvet-night text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-velvet-night text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full bg-velvet-night text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-velvet-night text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="buying">I'm interested in buying</option>
                  <option value="selling">I'm interested in selling</option>
                  <option value="both">I'm interested in both</option>
                  <option value="other">Other inquiry</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full bg-velvet-night text-white px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-regal-bronze text-white px-8 py-4 text-sm tracking-wider hover:bg-regal-bronze-dark transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white text-3xl font-light mb-8">
              Get in <span className="font-bold">Touch</span>
            </h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-regal-bronze flex-shrink-0" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Email</h3>
                  <a href="mailto:office@ogroup.com" className="text-gray-400 hover:text-regal-bronze transition-colors">
                    office@ogroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-regal-bronze flex-shrink-0" />
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2">Phone</h3>
                  <a href="tel:+13102814595" className="text-gray-400 hover:text-regal-bronze transition-colors">
                    +1 (310) 281-4595
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-white text-2xl font-light mb-6">
              Office <span className="font-bold">Locations</span>
            </h3>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.id} className="border-l-2 border-regal-bronze pl-6">
                  <h4 className="text-white text-sm font-semibold mb-2">{office.name}</h4>
                  <p className="text-gray-400 text-sm mb-1">{office.address}</p>
                  <p className="text-gray-400 text-sm mb-2">{office.city}</p>
                  <a href={`tel:${office.phone}`} className="text-regal-bronze text-sm hover:underline">
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
