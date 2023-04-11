import React, { useState } from 'react';
import ViewDetails from './ViewDetails';
import { HiStar } from 'react-icons/hi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdMessage, MdTimer } from 'react-icons/md';
import { Link } from 'react-router-dom';

const img1 = "https://w7.pngwing.com/pngs/466/857/png-transparent-hyundai-motor-company-car-logo-hyundai-starex-hyundai-emblem-text-trademark.png"
const img2 = "https://w7.pngwing.com/pngs/370/294/png-transparent-pix-brands-icon-thumbnail.png"

const QuoteCard = () => {
    const [viewDetails, setViewDetails] = useState(false)

    return (
        <div className='min-w-full shadow-md bg-white py-4'>
            <div className='grid grid-cols-5 gap-x-2 gap-y-6 px-3'>

                <div className='col-span-5 lg:col-span-3 grid grid-cols-5 md:grid-cols-3 items-center gap-2' >
                    <img className='col-span-1 md:col-auto md:w-20 md:mx-auto' src={img1} alt="" />

                    <div className='col-span-2 md:col-auto flex flex-col items-center justify-center  border-r w-full'>
                        <div className='w-8 h-8 flex justify-center items-center rounded-full border-2'>
                            <MdTimer className='text-gray-500' />
                        </div>
                        <span className='text-black font-semibold text-sm'>Covarage Title</span>
                        <div className='flex justify-center items-center gap-1 text-yellow-500 text-xl'>
                            <HiStar />
                            <HiStar />
                            <HiStar />
                            <HiStar />
                            <HiStar />
                        </div>
                        <span className='text-xs text-gray-500 text-center'>4.3 of 5</span>
                    </div>

                    <div className='col-span-2 md:col-auto flex flex-col items-center justify-center w-full'>
                        <div className='w-8 h-8 flex justify-center items-center rounded-full border-2'>
                            <MdMessage className='text-gray-500' />
                        </div>
                        <span className='text-black font-semibold text-sm'>Covarage Title</span>
                        <div className='flex justify-center items-center gap-1 text-yellow-500 text-xl'>
                            <HiStar />
                            <HiStar />
                            <HiStar />
                            <HiStar />
                            <HiStar />
                        </div>
                        <span className='text-xs text-gray-500 text-center'>4.3 of 5</span>
                    </div>

                </div>

                <div className='col-span-5 lg:col-span-2 grid grid-cols-2 items-center gap-2 w-full' >

                    <div className='flex flex-col justify-center items-start lg:items-end w-full'>
                        <span className='text-gray-500 text-sm'>
                            Reguler Price
                            <span className='font-bold line-through decoration-rose-500'> $2500</span>
                        </span>
                        <span className='font-bold text-primary'>
                            INSA Offer:
                            <span className='text-primary font-bold text-xl'> $2000</span>
                        </span>
                        <span className='text-gray-500 text-sm'>
                            You Save
                            <span className='font-bold'> $500.6363</span>
                        </span>
                    </div>

                    <div className='flex justify-center items-center w-full'>
                        <Link to="/buy" className='w-32 h-10 flex justify-center items-center text-white bg-[#046BFF] rounded hover:bg-primary duration-200'>
                            <span>Purchase Now</span>
                        </Link>
                    </div>

                </div>

            </div>


            {
                viewDetails && <ViewDetails />
            }

            <div className='mt-6 cursor-pointer'>
                <hr className='mb-4' />

                <div onClick={() => setViewDetails(!viewDetails)} className='text-gray-500 hover:text-primary text-sm flex items-center justify-center gap-2'>
                    <span>View Details</span>
                    {
                        viewDetails ? <MdKeyboardArrowUp className='text-xl' /> : <MdKeyboardArrowDown className='text-xl' />
                    }
                </div>
            </div>

        </div>
    );
};

export default QuoteCard;