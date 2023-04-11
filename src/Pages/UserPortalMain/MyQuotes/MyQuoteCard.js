import React from 'react';
import { AiFillCar } from "react-icons/ai"
import { MdApartment, MdEditNote } from "react-icons/md"
import { TbSmartHome } from "react-icons/tb"

import love from '../../../accets/icons/love.png'
import loveR from '../../../accets/icons/loveR.png'

const MyQuoteCard = ({ selectedQuote, setSelectedQuote, data }) => {



    return (
        <div onClick={() => setSelectedQuote(data)}
            className={`bg-white flex flex-col md:flex-row md:justify-between gap-2 rounded-xl h-fit w-full cursor-pointer p-4
        ${selectedQuote?._id === data?._id ? "border-2 border-primary duration-300" : "border-2"}`}>

            <div className='h-32 md:h-24'>
                <img className='w-full h-full object-cover' src={data?.img} alt="" />
            </div>
            <div className='flex-grow flex flex-col justify-start items-start gap-x-4 gap-y-2 w-full'>
                <div className='flex justify-between items-center w-full'>
                    <h1 className='text-left text-black font-bold'>{data?.title}</h1>
                    <div className='flex items-center justify-between gap-2'>
                        <button className='flex justify-center items-center gap-2 w-fit px-2 h-8 bg-primary text-white hover:bg-darkPrimary duration-300 rounded-md'>
                            <MdEditNote className='text-xl' />
                            <span>Edit</span>
                        </button>
                        <img className='w-8 shadow shadow-slate-300 rounded-full' src={love} alt="" />
                    </div>
                </div>
                <span className='text-gray-500 text-xs'>apartment | by rabid</span>
                <div className='flex flex-col md:flex-row gap-2 md:justify-between md:items-center w-full'>
                    <div className='flex-grow flex items-center gap-4'>
                        <div className='flex items-center gap-2 text-gray-500 text-sm'>
                            <MdApartment />
                            <span className='text-xs'>Used Property</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500 text-sm'>
                            <AiFillCar />
                            <span className='text-xs'>4</span>
                        </div>
                        <div className='flex items-center gap-2 text-gray-500 text-sm'>
                            <TbSmartHome />
                            <span className='text-xs'>170 m2</span>
                        </div>
                    </div>
                    <h1 className='font-bold text-sky-900 text-xl'>$5451,44654</h1>
                </div>
            </div>
        </div>
    );
};

export default MyQuoteCard;