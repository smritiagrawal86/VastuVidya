import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import Videos from './components/Videos';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-700 antialiased selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ClientReviews />
      <Videos />
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default App;