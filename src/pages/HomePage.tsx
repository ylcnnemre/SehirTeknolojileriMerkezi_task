import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import AboutUs from '../components/AboutUs/AboutUs'
import Products from '../components/Products/Products'
import CustomerReview from '../components/CustomerReview/CustomerReview'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs/>
            <Products/>
            <CustomerReview />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default HomePage