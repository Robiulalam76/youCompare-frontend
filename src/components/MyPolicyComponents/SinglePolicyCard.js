import React, { useState } from 'react';
import arrowDown from '../../accets/icons/arrow-down.svg'
import arrowRight from '../../accets/icons/arrow-right.svg'
import rightArrow from '../../accets/icons/right-arrow.png'
import close from '../../accets/icons/close.png'
import right from '../../accets/icons/right.png'
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import { Link } from 'react-router-dom';

const SinglePolicyCard = () => {
    const [moreInfo, setMoreInfo] = useState(false)
    return (
        <div className='relative w-full h-fit bg-violet-50 border border-sky-500 shadow duration-300 rounded-xl'>
            <div className='flex flex-col md:flex-row justify-end md:justify-between items-start md:items-center gap-2 p-4 w-full'>
                <p className='text-sm text-blue-900 underline text-center'>Terms & Conditions</p>
                <Link to='/insurance' className='w-52 h-10 rounded-xl bg-sky-500 hover:bg-sky-600 cursor-pointer duration-150 text-white font-bold flex justify-center items-center text-sm gap-3'>
                    <h1>See All Insurance</h1>
                    <img className='w-6' src={rightArrow} alt="" />
                </Link>
            </div>

            <hr className='border-sky-500 mb-4' />


            <div className='w-full flex justify-between flex-wrap items-start gap-x-2 md:gap-x-4 gap-y-6 mb-4 p-4'>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-900 text-center'>What is The Excess?</h1>
                    <img className='w-3' src={close} alt="" />
                    <h1 className='text-sm text-gray-900 text-center'>No Repairs</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-900 text-center'>Who Will Repaire My Car?</h1>
                    <img className='w-3' src={close} alt="" />
                    <h1 className='text-sm text-gray-900 text-center'>No Repairs</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-900 text-center'>Fre Registration Service</h1>
                    <img className='w-3' src={close} alt="" />
                    <h1 className='text-sm text-gray-900 text-center'>Not Available</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-900 text-center'>Thirt Perty Demage Limit</h1>
                    <h1 className='text-blue-900 text-center font-bold'>2 Million</h1>
                    <h1 className='text-sm text-gray-900 text-center'>AED</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-900 text-center'>Roadside Assistance</h1>
                    <img className='w-4' src={right} alt="" />
                    <h1 className='text-sm text-gray-900 text-center'>G0LD</h1>
                </div>

            </div>



            <div className='flex justify-center items-center'>
                <h1 onClick={() => setMoreInfo(!moreInfo)} className='text-sm text-black text-left font-bold'>Check Here For More Info</h1>
                <img onClick={() => setMoreInfo(!moreInfo)} className='w-5' src={moreInfo ? arrowDown : arrowRight} alt="" />
            </div>

            <div className='border-t border-sky-500 bg-gradient-to-r from-blue-100 via-purple-100 to-sky-100 
            flex flex-col lg:flex-row lg:justify-between w-full p-2 md:py-4 md:px-4'>
                <div className='flex flex-col md:gap-4'>
                    <img className='w-32 mx-auto ml-0 md:m-0' src={img1} alt="" />
                    <h1 className='text-left font-bold text-sky-600'>Salama Insurance Thirt Perty Only</h1>
                </div>
                <div className='flex flex-row-reverse lg:flex-col items-start justify-start gap-2'>
                    <h1 className='font-extrabold text-gray-600'>AED 790</h1>
                    <h1 className='text-xl font-bold text-sky-500'>AED 770</h1>
                </div>
            </div>

        </div >
    );
};

export default SinglePolicyCard;