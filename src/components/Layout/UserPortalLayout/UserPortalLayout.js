import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../../../accets/icons/home.png'
import img2 from '../../../accets/icons/qoute.png'
import img3 from '../../../accets/icons/claim.png'
import img4 from '../../../accets/icons/policy.png'
import img5 from '../../../accets/icons/help.png'
import search from '../../../accets/icons/search.png'

const UserPortalLayout = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <main className='bg-gradient-to-r from-blue-100 via-purple-100 to-sky-100 min-h-screen'>
            {/* <div className='bg-[#0029FF] h-20 w-full'>
                <div className='flex justify-center items-center max-w-[1440px] h-20 mx-auto px-4'>
                    <div className='flex-grow md:flex-none h-10 w-full md:w-[400px] bg-white mx-auto relative rounded'>
                        <input className='w-full h-full border-none rounded bg-white focus:outline-none focus:border-none px-4' placeholder='Search' type="text" />
                        <img className='w-6 absolute right-2 top-3 cursor-pointer' src={search} alt="" />
                    </div>

                    <div className='md:flex items-center gap-4 hidden md:block'>
                        <Link to='/signup' className='flex justify-center items-center w-24 h-10 rounded bg-white hover:bg-gray-300 duration-150 text-[#0029FF]'>
                            <span className='font-semibold'>Sign Up</span>
                        </Link>
                        <Link to='/login' className='flex justify-center items-center w-24 h-10 rounded text-white border border-white hover:bg-white hover:text-[#0029FF] duration-150'>
                            <span className='font-semibold'>Log in</span>
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className='flex justify-between w-full min-h-screen'>
                <div className='flex flex-col min-w-fit md:w-56 border-r border-sky-500 shadow-sm min-h-screen bg-gradient-to-b from-blue-200 to-sky-200 pt-24'>

                    <Link to='/user-portal'
                        className={`flex items-center gap-x-4 w-full h-12 text-black uppercase duration-150 px-3
                    ${pathname.includes('/user-portal/home') ? 'bg-white' : 'hover:bg-white'}`}>
                        <img className='w-5' src={img1} alt="" />
                        <span className='hidden md:block'>Home</span>
                    </Link>
                    <Link to='/user-portal/get-a-quote'
                        className={`flex items-center gap-x-4 w-full h-12 text-black uppercase duration-150 px-3
                    ${pathname.includes('/get-a-quote') ? 'bg-white' : 'hover:bg-white'}`}>
                        <img className='w-5' src={img2} alt="" />
                        <span className='hidden md:block'>Get a  quote</span>
                    </Link>
                    <Link to='/claim'
                        className={`flex items-center gap-x-4 w-full h-12 text-black uppercase duration-150 px-3
                    ${pathname.includes('/claim') ? 'bg-white' : 'hover:bg-white'}`}>
                        <img className='w-5' src={img3} alt="" />
                        <span className='hidden md:block'>Claim</span>
                    </Link>
                    <Link to='/user-portal/my-policy'
                        className={`flex items-center gap-x-4 w-full h-12 text-black uppercase duration-150 px-3
                    ${pathname.includes('/my-policy') ? 'bg-white' : 'hover:bg-white'}`}>
                        <img className='w-5' src={img4} alt="" />
                        <span className='hidden md:block'>My policies</span>
                    </Link>
                    <Link to='/user-portal/help-center'
                        className={`flex items-center gap-x-4 w-full h-12 text-black uppercase duration-150 px-3
                    ${pathname.includes('/help-center') ? 'bg-white' : 'hover:bg-white'}`}>
                        <img className='w-5' src={img5} alt="" />
                        <span className='hidden md:block'>Help center</span>
                    </Link>
                </div>

                <div className='flex-grow w-full h-full p-2 md:px-4 lg:px-6 pt-24'>
                    {children}
                </div>
            </div>

        </main>
    );
};

export default UserPortalLayout;