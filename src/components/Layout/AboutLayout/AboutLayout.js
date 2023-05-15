import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

const AboutLayout = ({ children }) => {
    const { pathname } = useLocation()
    // console.log(pathname);
    return (
        <>
            <Navbar />
            <div className='mt-32 mb-16 max-w-[1280px] mx-auto px-2 md:px-4'>
                {children}
            </div>

            {pathname !== "/home" && <Footer />}
        </>
    );
};

export default AboutLayout;