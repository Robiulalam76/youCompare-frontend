import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import img1 from '../../../accets/icons/home.png'
import img2 from '../../../accets/icons/qoute.png'
import img3 from '../../../accets/icons/claim.png'
import img4 from '../../../accets/icons/policy.png'
import img5 from '../../../accets/icons/help.png'
import search from '../../../accets/icons/search.png'
import arrowDown from '../../../accets/icons/arrow-down.svg'
import menu from '../../../accets/icons/menu.png'

const items = [
    { title: "Customer’s Panel", url: "customer-panel" },
    { title: "Broker’s Panel", url: "broker-panel" },
    { title: "Agent’s Panel", url: "agent-panel" },
    { title: "Insurar Panel", url: "insurar-panel" },
]

const UserPortalSidebar = () => {
    const { pathname } = useLocation()
    const [showItems, setShowItems] = useState(0)
    const [open, setOpen] = useState(false)

    return (
        <section>
            <div className='relative z-50 top-0 left-0 w-16 h-full bg-white shadow border-r-4 border-sky-600'>
                <div className='flex flex-col justify-center items-center pt-24'>

                    <button onClick={() => setOpen(!open)}
                        className="flex items-center justify-center w-full h-10 duration-150 hover:bg-sky-100">
                        <img className='w-5' src={menu} alt="" />
                    </button>

                    <Link onClick={() => setOpen(false)} to='/user-portal/get-a-quote'
                        className={`flex items-center justify-center w-full h-10 duration-150
        ${pathname.includes('/get-a-quote') ? 'bg-sky-100' : 'hover:bg-sky-100'}`}>
                        <img className='w-5' src={img2} alt="" />
                    </Link>
                    <Link onClick={() => setOpen(false)} to='/claim'
                        className={`flex items-center justify-center w-full h-10 duration-150
        ${pathname.includes('/claim') ? 'bg-sky-100' : 'hover:bg-sky-100'}`}>
                        <img className='w-5' src={img3} alt="" />
                    </Link>
                    <Link onClick={() => setOpen(false)} to='/user-portal/my-policy'
                        className={`flex items-center justify-center w-full h-10 duration-150
        ${pathname.includes('/my-policy') ? 'bg-sky-100' : 'hover:bg-sky-100'}`}>
                        <img className='w-5' src={img4} alt="" />
                    </Link>
                    <Link onClick={() => setOpen(false)} to='/user-portal/help-center'
                        className={`flex items-center justify-center w-full h-10 duration-150
        ${pathname.includes('/help-center') ? 'bg-sky-100' : 'hover:bg-sky-100'}`}>
                        <img className='w-5' src={img5} alt="" />
                    </Link>
                </div>
            </div>


            <div className={`flex flex-col min-w-fit md:w-56 border-r border-sky-500 min-h-screen bg-gradient-to-b from-blue-200 to-sky-200 pt-24 absolute top-0 z-40 shadow-r duration-500
            ${open ? "left-16" : "-left-96"}`}>

                <div className='relative'>
                    <button onClick={() => setShowItems(showItems === 1 ? 0 : 1)}
                        className={`flex items-center gap-x-4 w-full h-10 text-black uppercase duration-150 px-3
        ${pathname?.length === 13 || pathname?.length === 12 || pathname.includes('/user-portal/customer-panel') || pathname.includes('/user-portal/broker-panel') || pathname.includes('/user-portal/insurar-panel') || pathname.includes('/user-portal/agent-panel') ? 'bg-white' : 'hover:bg-white'}`}>
                        <img className='w-5' src={img1} alt="" />
                        <span className=''>Home</span>
                        <img className='w-5 mx-auto mr-0' src={arrowDown} alt="" />
                    </button>

                    {
                        showItems === 1 && <div className='absolute z-50 top-10 border-x border-b border-gray-400 hover:border-sky-600 focus:outline-none shadow w-full max-h-44 overflow-y-auto'>
                            {
                                items?.map(value => (
                                    <Link to={`/user-portal/${value?.url}`}
                                        onClick={() => setShowItems(0)}
                                        className='w-full h-10 flex justify-start items-center bg-white hover:bg-sky-100 text-sm px-4'>
                                        <h1>{value?.title}</h1>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>



                <Link onClick={() => setOpen(false)} to='/user-portal/get-a-quote'
                    className={`flex items-center gap-x-4 w-full h-10 text-black uppercase duration-150 px-3
        ${pathname.includes('/get-a-quote') ? 'bg-white' : 'hover:bg-white'}`}>
                    <img className='w-5' src={img2} alt="" />
                    <span className=''>Get a  quote</span>
                </Link>
                <Link onClick={() => setOpen(false)} to='/claim'
                    className={`flex items-center gap-x-4 w-full h-10 text-black uppercase duration-150 px-3
        ${pathname.includes('/claim') ? 'bg-white' : 'hover:bg-white'}`}>
                    <img className='w-5' src={img3} alt="" />
                    <span className=''>Claim</span>
                </Link>
                <Link onClick={() => setOpen(false)} to='/user-portal/my-policy'
                    className={`flex items-center gap-x-4 w-full h-10 text-black uppercase duration-150 px-3
        ${pathname.includes('/my-policy') ? 'bg-white' : 'hover:bg-white'}`}>
                    <img className='w-5' src={img4} alt="" />
                    <span className=''>My policies</span>
                </Link>
                <Link onClick={() => setOpen(false)} to='/user-portal/help-center'
                    className={`flex items-center gap-x-4 w-full h-10 text-black uppercase duration-150 px-3
        ${pathname.includes('/help-center') ? 'bg-white' : 'hover:bg-white'}`}>
                    <img className='w-5' src={img5} alt="" />
                    <span className=''>Help center</span>
                </Link>
            </div>
        </section>
    );
};

export default UserPortalSidebar;