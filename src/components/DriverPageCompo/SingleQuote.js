import React, { useState } from 'react';
import arrowDown from '../../accets/icons/arrow-down.svg'
import arrowRight from '../../accets/icons/arrow-right.svg'
import close from '../../accets/icons/close.png'
import right from '../../accets/icons/right.png'
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import { Link } from 'react-router-dom';

const SingleQuote = () => {
    const [moreInfo, setMoreInfo] = useState(false)
    return (
        <div className='relative w-full h-fit bg-white border shadow duration-300 rounded-xl p-2 md:py-8 md:px-8'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
                    <img className='w-44 mx-auto ml-0 md:m-0' src={img1} alt="" />
                    <h1 className='text-xl text-left md:text-right font-bold text-sky-600'>Salama Insurance Thirt Perty Only</h1>
                </div>
                <div className='flex flex-col md:justify-end items-start md:items-end gap-2 mr-6 md:m-0'>
                    <h1 className='text-xl font-extrabold text-gray-300'>AED 790</h1>
                    <h1 className='text-3xl font-bold text-sky-500'>AED 770</h1>
                </div>
            </div>
            <hr className='border-sky-500 my-4' />


            <div className='w-full flex justify-between flex-wrap items-start gap-x-2 md:gap-x-6 gap-y-12 mb-6'>
                <div className='w-36 md:w-fit h-32 flex flex-col justify-between items-center gap-y-4'>
                    <h1 className='text-gray-700 text-center'>What is The Excess?</h1>
                    <img className='w-4' src={close} alt="" />
                    <h1 className='text-gray-700 text-center'>No Repairs</h1>
                </div>
                <div className='w-36 md:w-fit h-32 flex flex-col justify-between items-center gap-y-4'>
                    <h1 className='text-gray-700 text-center'>Who Will Repaire My Car?</h1>
                    <img className='w-4' src={close} alt="" />
                    <h1 className='text-gray-700 text-center'>No Repairs</h1>
                </div>
                <div className='w-36 md:w-fit h-32 flex flex-col justify-between items-center gap-y-4'>
                    <h1 className='text-gray-700 text-center'>Fre Registration Service</h1>
                    <img className='w-4' src={close} alt="" />
                    <h1 className='text-gray-700 text-center'>Not Available</h1>
                </div>
                <div className='w-36 md:w-fit h-32 flex flex-col justify-between items-center gap-y-4'>
                    <h1 className='text-gray-700 text-center'>Thirt Perty Demage Limit</h1>
                    <h1 className='text-blue-900 text-center font-bold'>2 Million</h1>
                    <h1 className='text-gray-700 text-center'>AED</h1>
                </div>
                <div className='w-36 md:w-fit h-32 flex flex-col justify-between items-center gap-y-4'>
                    <h1 className='text-gray-700 text-center'>Roadside Assistance</h1>
                    <img className='w-5' src={right} alt="" />
                    <h1 className='text-gray-700 text-center'>G0LD</h1>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center gap-4 py-6 px-6 md:p-0'>
                <Link to='/qoutes' className='w-56 h-12 rounded-xl bg-sky-500 hover:bg-sky-600 cursor-pointer duration-150 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                    <h1>View Details</h1>
                </Link>
                <p className='text-blue-900 underline text-center'>Terms & Conditions</p>
            </div>

            <div className='flex justify-center items-center'>
                <h1 onClick={() => setMoreInfo(!moreInfo)} className='text-black text-left font-bold'>Check Here For More Info</h1>
                <img onClick={() => setMoreInfo(!moreInfo)} className='w-6' src={moreInfo ? arrowDown : arrowRight} alt="" />
            </div>

            <div className='absolute right-0 -top-6 flex justify-center items-center bg-gradient-to-r from-orange-500 to-rose-600 h-12 w-fit px-2 animate-bounce rounded-xl border shadow'>
                <h1 className='text-white text-center font-semibold'>AED 40.00 Discoount!</h1>
            </div>
        </div >
    );
};

export default SingleQuote;