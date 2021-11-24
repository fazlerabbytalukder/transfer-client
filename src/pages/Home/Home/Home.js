import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BookingProcess from '../BookingProcess/BookingProcess';
import Footer from '../Footer/Footer';
import OurPartners from '../OurPartners/OurPartners';
import OurServices from '../OurServices/OurServices';
import Reviews from '../Reviews/Reviews';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <BookingProcess></BookingProcess>
            <OurServices></OurServices>
            <Testimonials></Testimonials>
            <Reviews></Reviews>
            <OurPartners></OurPartners>
            <Footer></Footer>
        </div>
    );
};

export default Home;