import React, { useState } from 'react';
import arrowDown from '../../accets/icons/arrow-down.svg'
import arrowRight from '../../accets/icons/arrow-right.svg'
import close from '../../accets/icons/close.png'
import right from '../../accets/icons/right.png'
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import { Link } from 'react-router-dom';
import ViewDetails from '../../Modals/ViewDetailsModals/ViewDetails';

const SingleQuote = () => {
    const [openModal, setOpenModal] = useState(false)
    const [moreInfo, setMoreInfo] = useState(false)
    return (
        <div className='relative bg-gradient-to-r from-sky-50 via-purple-200 to-sky-50 w-full h-fit border duration-300 rounded-xl p-4'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
                    <img className='w-36 mx-auto ml-0 md:m-0' src={img1} alt="" />
                    <h1 className='text-left md:text-right font-bold text-sky-600'>Salama Insurance Thirt Perty Only</h1>
                </div>
                <div className='flex flex-col md:justify-end items-start md:items-end gap-2 mr-6 md:m-0'>
                    <h1 className='font-bold text-gray-300'>AED 790</h1>
                    <h1 className='text-xl font-bold text-sky-500'>AED 770</h1>
                </div>
            </div>
            <hr className='border-sky-500 my-2' />


            <div className='w-full flex justify-between flex-wrap items-start gap-x-2 md:gap-x-6 gap-y-4 mb-3'>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-700 text-center'>What is The Excess?</h1>
                    <img className='w-4' src={close} alt="" />
                    <h1 className='text-sm text-gray-700 text-center'>No Repairs</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-700 text-center'>Who Will Repaire My Car?</h1>
                    <img className='w-4' src={close} alt="" />
                    <h1 className='text-sm text-gray-700 text-center'>No Repairs</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-700 text-center'>Fre Registration Service</h1>
                    <img className='w-4' src={close} alt="" />
                    <h1 className='text-sm text-gray-700 text-center'>Not Available</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-700 text-center'>Thirt Perty Demage Limit</h1>
                    <h1 className='text-blue-900 text-center font-bold'>2 Million</h1>
                    <h1 className='text-sm text-gray-700 text-center'>AED</h1>
                </div>
                <div className='w-36 md:w-fit h-24 flex flex-col justify-between items-center gap-y-3'>
                    <h1 className='text-sm text-gray-700 text-center'>Roadside Assistance</h1>
                    <img className='w-5' src={right} alt="" />
                    <h1 className='text-sm text-gray-700 text-center'>G0LD</h1>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center gap-4 py-3 px-6 md:p-0'>
                <button onClick={() => setOpenModal(!openModal)} className='w-56 h-10 rounded-xl bg-sky-500 hover:bg-sky-600 cursor-pointer duration-150 text-white font-bold flex justify-center items-center mx-auto mt-3'>
                    <h1>View Details</h1>
                </button>
                <p className='text-blue-900 underline text-center'>Terms & Conditions</p>
            </div>

            <div className='flex justify-center items-center'>
                <h1 onClick={() => setMoreInfo(!moreInfo)} className='text-black text-left font-bold'>Check Here For More Info</h1>
                <img onClick={() => setMoreInfo(!moreInfo)} className='w-6' src={moreInfo ? arrowDown : arrowRight} alt="" />
            </div>

            <div className='absolute right-0 -top-6 flex justify-center items-center bg-gradient-to-r from-orange-500 to-rose-600 h-10 w-fit px-2 animate-pulse hover:animate-none rounded-xl border'>
                <h1 className='text-white text-center'>AED 40.00 Discoount!</h1>
            </div>



            {
                openModal && <ViewDetails closeModal={setOpenModal} />
            }
        </div >
    );
};

export default SingleQuote;