import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../accets/images/user-portal-banner.png'
import img1 from '../../accets/icons/qoute.png'
import img2 from '../../accets/icons/policy.png'
import img3 from '../../accets/icons/claim.png'
import car from '../../accets/icons/car.png'
import life from '../../accets/icons/life.png'
import health from '../../accets/icons/health.png'
import home from '../../accets/icons/home.png'

const UserPortal = () => {
    return (
        <section>
            <div className='relative flex justify-center w-full h-96'>
                <img className='w-full h-96 object-fill' src={banner} alt="" />

                <div className='absolute -bottom-8 flex flex-col flex-wrap md:flex-row md:justify-center md:items-center gap-4 md:gap-6' >
                    <Link to='/user-portal/get-a-quote' className="flex items-center justify-start pl-4 gap-4 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <div className='flex items-start justify-center gap-4'>
                            <img className='w-6 mt-2' src={img1} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-xl'>GET A QUOTE</span>
                                <span className='text-sm'>or Advise</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/payment' className="flex items-center justify-start pl-4 gap-4 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <div className='flex items-start justify-center gap-4'>
                            <img className='w-6 mt-2' src={img2} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-xl'>MAKE</span>
                                <span className='text-sm'>A Payment</span>
                            </div>
                        </div>
                    </Link>
                    <Link to='/claim' className="flex items-center justify-start pl-4 gap-4 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <div className='flex items-start justify-center gap-4'>
                            <img className='w-6 mt-2' src={img3} alt="" />
                            <div className='flex flex-col'>
                                <span className='font-bold text-xl'>SUBMIT</span>
                                <span className='text-sm'>A Claim</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='mt-16 w-full'>
                <h1 className='font-bold text-xl text-left text-black mb-4'>Brows our available product</h1>

                <div className='flex flex-wrap items-center gap-4 w-full'>

                    <Link to='/vehicle' className="flex items-center justify-start pl-4 gap-6 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <img className='w-6' src={car} alt="" />
                        <span className='font-bold text-xl'>CAR</span>
                    </Link>
                    <Link to='/life' className="flex items-center justify-start pl-4 gap-6 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <img className='w-6' src={life} alt="" />
                        <span className='font-bold text-xl'>LIFE</span>
                    </Link>
                    <Link to='/user-portal' className="flex items-center justify-start pl-4 gap-6 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <img className='w-6' src={home} alt="" />
                        <span className='font-bold text-xl'>HOME</span>
                    </Link>
                    <Link to='/health' className="flex items-center justify-start pl-4 gap-6 rounded bg-white hover:bg-[#0029FF] text-black hover:text-white duration-150 shadow border hover:border-[#0029FF] w-52 h-16">
                        <img className='w-6' src={health} alt="" />
                        <span className='font-bold text-xl'>HEALTH</span>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default UserPortal;