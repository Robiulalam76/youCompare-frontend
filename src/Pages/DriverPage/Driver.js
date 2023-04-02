import React from 'react';
import rightArrow from '../../accets/icons/right-arrow.png'
import { Link } from 'react-router-dom';
import SmallTabs from '../../components/SmallTabs/SmallTabs';


const Driver = () => {

    return (
        <section className='relative bg-white px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto'>
                {/* <SmallTabs /> */}

                <form action="" className='grid grid-cols-1 gap-2 max-w-[700px] mx-auto mt-8' >

                    <div className='h-fit w-full p-2 hover:bg-sky-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>Driver Name</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="text" placeholder='eg. John Doe' />
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>Address</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="text" placeholder='Enter Your Address' />
                    </div>


                    <div className='h-fit w-full p-2 hover:bg-blue-50 flex flex-col justify-center items-start rounded-md'>
                        <span className='text-sm text-sky-600 mb-1'>Driving Lisence</span>
                        <input className='text-sm w-full h-8 rounded-none px-2 border-gray-300 hover:border-sky-600 focus:outline-none focus:border-green-600' type="text" placeholder='47863549564' />
                    </div>

                </form>

                <Link to='/quotes' className='w-56 h-10 rounded hover:border-b-4 border-rose-900 bg-rose-600 hover:bg-rose-700 cursor-pointer duration-300 text-white font-bold flex justify-center items-center gap-3 mx-auto mt-16'>
                    <h1>See All Quotes</h1>
                    <img className='w-6' src={rightArrow} alt="" />
                </Link>
            </div>

        </section>
    );
};

export default Driver;