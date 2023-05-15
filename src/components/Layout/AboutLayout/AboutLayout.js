import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AboutLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='mt-32 mb-16 max-w-[1280px] mx-auto px-2 md:px-4'>
                {children}
            </div>
            <Footer />

        </>
    );
};

export default AboutLayout;