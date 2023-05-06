import React from 'react';
import { AiFillCar } from "react-icons/ai"
import { MdApartment } from "react-icons/md"
import { TbSmartHome } from "react-icons/tb"

import love from '../../../accets/icons/love.png'
import loveR from '../../../accets/icons/loveR.png'
import { Drawer } from '@mui/material';

const MyQuoteSidebar = ({ data, setSelectedQuote }) => {
    return (
        <Drawer
            anchor="right"
            open={data ? true : false}
            // width='420px'
            onClose={() => setSelectedQuote(null)}
        >
            <div className={`min-w-[420px] relative h-screen z-40 py-6 pl-6 pr-10 duration-300 bg-white`
            }>
                <div className='relative w-full grid grid-cols-1 gap-2'>
                    <img className='rounded-xl h-28 object-cover' src={data?.img} alt="" />
                    <h1 className='text-left text-black font-bold'>{data?.title}</h1>
                    <h1 className='font-bold text-sky-900'>$5451,44654</h1>
                    <div className='flex justify-between items-center w-full'>
                        <span className='text-gray-500 text-xs'>apartment | by rabid</span>
                        <img className='w-6 shadow shadow-slate-300 rounded-full' src={love} alt="" />
                    </div>

                    <div className='flex-grow flex items-center flex-wrap gap-2'>
                        <div className='flex items-center gap-1 text-gray-500 text-sm'>
                            <MdApartment />
                            <span className='text-xs'>Used Property</span>
                        </div>
                        <div className='flex items-center gap-1 text-gray-500 text-sm'>
                            <AiFillCar />
                            <span className='text-xs'>4</span>
                        </div>
                        <div className='flex items-center gap-1 text-gray-500 text-sm'>
                            <TbSmartHome />
                            <span className='text-xs'>170 m2</span>
                        </div>
                    </div>
                </div>

            </div>

        </Drawer>
    );
};

export default MyQuoteSidebar;