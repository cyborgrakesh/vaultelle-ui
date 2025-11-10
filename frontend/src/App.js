import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import About from './pages/About';
import Offices from './pages/Offices';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Agents from './pages/Agents';
import Philanthropy from './pages/Philanthropy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SocialSidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/sales" element={<Properties />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/neighborhood-guides" element={<Buyers />} />
            <Route path="/sellers" element={<Sellers />} />
            <Route path="/concierge" element={<Sellers />} />
            <Route path="/marketing" element={<Sellers />} />
            <Route path="/home-valuation" element={<Sellers />} />
            <Route path="/offices" element={<Offices />} />
            <Route path="/offices/los-angeles" element={<Offices />} />
            <Route path="/offices/newport-beach" element={<Offices />} />
            <Route path="/offices/san-diego" element={<Offices />} />
            <Route path="/offices/cabo" element={<Offices />} />
            <Route path="/about" element={<About />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/jason-oppenheim" element={<Agents />} />
            <Route path="/reviews" element={<About />} />
            <Route path="/philanthropy" element={<Philanthropy />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
