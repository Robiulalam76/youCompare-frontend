import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PaymentPage = () => {
    const { pathname } = useLocation()
    return (
        <div
            className="flex flex-wrap gap-y-2 pt-6">
            <Link to='/vehicle' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/vehicle' ? '-translate-y-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 backdrop-blur text-white' : 'bg-sky-600 hover:bg-gray-100 text-white'}`} >
                <p className="">Vehicle</p>
            </Link>
            <Link to='/driver' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/driver' ? '-translate-y-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 backdrop-blur text-white' : 'bg-sky-600 hover:bg-gray-100 text-white'}`} >
                <p className="">driver</p>
            </Link>
            <Link to='/qoutes' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/qoutes' ? '-translate-y-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 backdrop-blur text-white' : 'bg-sky-600 hover:bg-gray-100 text-white'}`} >
                <p className="">qoutes</p>
            </Link>
            <Link to='/buy' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/buy' ? '-translate-y-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 backdrop-blur text-white' : 'bg-sky-600 hover:bg-gray-100 text-white'}`} >
                <p className="">buy</p>
            </Link>
            <Link to='/payment' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/payment' ? '-translate-y-1 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 backdrop-blur text-white' : 'bg-sky-600 hover:bg-gray-100 text-white'}`} >
                <p className="">payment</p>
            </Link>
        </div>
    );
};

export default PaymentPage;