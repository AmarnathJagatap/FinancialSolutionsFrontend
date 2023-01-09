import React from 'react';
import Navbar from '../components/homePage/Navbar';
import Hero from '../components/homePage/Hero';
import Analytics from '../components/homePage/Analytics';
import Newsletter from '../components/homePage/Newsletter';
import Cards from '../components/homePage/Cards';
import Footer from '../components/homePage/Footer';

const MainPage = () => {
    return(
      <>
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
      </>
    )
}

export default MainPage;