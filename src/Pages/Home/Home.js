import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurPartners from './OurPartners';
import OurTeam from './OurTeam';

import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner/>
            <Tools/>
            <BusinessSummary/>
            <Reviews/>
            <OurTeam/>
            <OurPartners/>

        </div>
    );
};

export default Home;