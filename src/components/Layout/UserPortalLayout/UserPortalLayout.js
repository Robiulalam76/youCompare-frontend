import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../../../accets/icons/home.png'
import img2 from '../../../accets/icons/qoute.png'
import img3 from '../../../accets/icons/claim.png'
import img4 from '../../../accets/icons/policy.png'
import img5 from '../../../accets/icons/help.png'
import search from '../../../accets/icons/search.png'

const items = ["User", "broker", "Insurar"]

const UserPortalLayout = ({ children }) => {
    const { pathname } = useLocation()
    const [showItems, setShowItems] = useState(0)

    // console.log(pathname.length);
    return (
        <main className='bg-gradient-to-r from-blue-100 via-purple-100 to-sky-100 min-h-screen'>

            <div className='relative flex justify-between w-full min-h-screen'>
                <div className='flex flex-col min-w-fit md:w-56 border-r border-sky-500 shadow-sm min-h-screen bg-gradient-to-b from-blue-200 to-sky-200 pt-24'>

                    <div className='md:relative'>
                        <button onClick={() => setShowItems(showItems === 1 ? 0 : 1)}
                            className={`flex items-center gap-x-4 w-full h-12 text-black uppercase duration-150 px-3
                    ${pathname?.length === 13 || pathname?.length === 12 || pathname.includes('/user-portal/user') || pathname.includes('/user-portal/broker') || pathname.includes('/user-portal/insurar') ? 'bg-white' : 'hover:bg-white'}`}>
                            <img className='w-5' src={img1} alt="" />
                            <span className='hidden md:block'>Home</span>
                        </button>

                        {
                            showItems === 1 && <div className='absolute z-50 top-10 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
                                {
                                    items?.map(value => (
                                        <Link to={`/user-portal/${value.toLocaleLowerCase()}`}
                                            onClick={() => setShowItems(0)}
                                            className='w-full h-10 flex justify-start items-center bg-white hover:bg-sky-100 text-sm px-4'>
                                            <h1>{value}</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                        }
                    </div>



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