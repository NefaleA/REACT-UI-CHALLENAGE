import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import FeaturedPlans from './Components/FeaturedPlans';
import Footer from './components/Footer'; // Assuming you have a Footer component

const App = () => (
  <div>
    <Header />
    <MainContent />
    <FeaturedPlans />
    <hr /> {/* This adds a horizontal line */}
    <Footer /> {/* This adds the footer */}
  </div>
);

export default App;