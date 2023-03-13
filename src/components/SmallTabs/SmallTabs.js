import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SmallTabs = () => {
    const { pathname } = useLocation()
    return (
        <div
            className="flex flex-wrap gap-4 mt-6">
            <Link to='/vehcile' className={`w-fit h-7 text-left text-sm hover:bg-gray-100 flex justify-center items-center uppercase
                ${pathname === '/vehcile' && 'border-b-2 border-rose-600 text-blue-900'}`} >
                <p className="">Vehcile</p>
            </Link>
            <Link to='/driver' className={`w-fit h-7 text-left text-sm hover:bg-gray-100 flex justify-center items-center uppercase
                ${pathname === '/driver' && 'border-b-2 border-rose-600 text-blue-900'}`} >
                <p className="">driver</p>
            </Link>
            <Link to='/qoutes' className={`w-fit h-7 text-left text-sm hover:bg-gray-100 flex justify-center items-center uppercase
                ${pathname === '/qoutes' && 'border-b-2 border-rose-600 text-blue-900'}`} >
                <p className="">qoutes</p>
            </Link>
            <Link to='/buy' className={`w-fit h-7 text-left text-sm hover:bg-gray-100 flex justify-center items-center uppercase
                ${pathname === '/buy' && 'border-b-2 border-rose-600 text-blue-900'}`} >
                <p className="">buy</p>
            </Link>
            <Link to='/payment' className={`w-fit h-7 text-left text-sm hover:bg-gray-100 flex justify-center items-center uppercase
                ${pathname === '/' && 'border-b-2 border-rose-600 text-blue-900'}`} >
                <p className="">payment</p>
            </Link>
        </div>
    );
};

export default SmallTabs;