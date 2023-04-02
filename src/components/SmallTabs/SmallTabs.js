import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SmallTabs = () => {
    const { pathname } = useLocation()
    return (
        <div
            className="flex flex-wrap gap-y-2 pt-6">
            {/* <Link to='/vehicle' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/vehicle' ? 'border-b-4 border-rose-600 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 backdrop-blur text-white' : 'bg-sky-600 hover:bg-blue-500 text-white'}`} >
                <p className="">Vehicle</p>
            </Link>
            <Link to='/driver' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/driver' ? 'border-b-4 border-rose-600 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 backdrop-blur text-white' : 'bg-sky-600 hover:bg-blue-500 text-white'}`} >
                <p className="">driver</p>
            </Link>
            <Link to='/quotes' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/quotes' ? 'border-b-4 border-rose-600 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 backdrop-blur text-white' : 'bg-sky-600 hover:bg-blue-500 text-white'}`} >
                <p className="">quotes</p>
            </Link>
            <Link to='/buy' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/buy' ? 'border-b-4 border-rose-600 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 backdrop-blur text-white' : 'bg-sky-600 hover:bg-blue-500 text-white'}`} >
                <p className="">buy</p>
            </Link>
            <Link to='/payment' className={`w-[70px] h-8 text-center text-sm flex justify-center items-center uppercase
                ${pathname === '/payment' ? 'border-b-4 border-rose-600 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 backdrop-blur text-white' : 'bg-sky-600 hover:bg-blue-500 text-white'}`} >
                <p className="">payment</p>
            </Link> */}
        </div>
    );
};

export default SmallTabs;