import React, { useState } from 'react';
import arrowDown from '../../accets/icons/arrow-down.svg'
import arrowRight from '../../accets/icons/arrow-right.svg'
import rightArrow from '../../accets/icons/right-arrow.png'
import close from '../../accets/icons/close.png'
import right from '../../accets/icons/right.png'
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import img2 from '../../accets/logo1/NoPath - Copy (3).png'
import { Link } from 'react-router-dom';
import ViewDetails from '../../Modals/ViewDetailsModals/ViewDetails';
import SingleQuote from '../../components/DriverPageCompo/SingleQuote';
import SmallTabs from '../../components/SmallTabs/SmallTabs';
import QuoteCard from '../../components/DriverPageCompo/QuoteCard';

const Qoutes = () => {
    const [openModal, setOpenModal] = useState(false)
    const [takafullSwitch, setTakafullSwitch] = useState(false)
    const [openInsurer, setOpenInsurer] = useState(true)
    const [insurerSwitch, setInsurerSwitch] = useState(true)
    const [moreInfo, setMoreInfo] = useState(false)

    // const [takafullSwitch, setTakafullSwitch] = useState(false)
    // const [openInsurer, setOpenInsurer] = useState(true)
    // const [insurerSwitch, setInsurerSwitch] = useState(true)
    // const [moreInfo, setMoreInfo] = useState(false)
    return (
        <main className='relative bg-white min-h-screen'>
            <div className='max-w-[1440px] mx-auto pb-12'>

                {/* <SmallTabs /> */}

                <div className='flex flex-col md:flex-row md:items-center gap-4 mt-6'>
                    <h1 className='text-3xl font-bold text-green-600'>Hi Nahid!</h1>
                    <p className='text-black font-semibold text-xl'>We Found 4 Quotes for Your Toyota Acura 1.6 Limited</p>
                </div>

                <div className='grid lg:grid-cols-7 gap-4'>

                    <div className='lg:col-span-2 bg-white border h-fit rounded p-4'>
                        <div className='flex justify-between items-center gap-2 mb-2'>
                            <h1 className='text-rose-600 font-semibold'>Filter</h1>
                            <button className='text-gray-600'>Clear Filter</button>
                        </div>


                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex flex-col'>
                                <div className=''>
                                    <h1 className='text-primary text-left mb-1 text-sm font-bold'>Policy Futures</h1>
                                    <div className='grid grid-cols-2 gap-2 mb-3'>
                                        <button className='flex justify-center items-center px-2 py-1 border'>
                                            <span className='text-gray-600 text-sm'>Fully Comprehensive</span>
                                        </button>
                                        <button className='flex justify-center items-center px-2 py-1 border'>
                                            <span className='text-gray-600 text-sm'>Thirt Pertu Only</span>
                                        </button>
                                    </div>
                                </div>

                                <div className=''>
                                    <h1 className='text-primary text-left mb-1 text-sm font-bold'>Repaire By</h1>
                                    <div className='grid grid-cols-3 gap-2'>
                                        <button className='flex flex-col justify-center items-center gap-2 p-2 rounded border'>
                                            <img className='w-full md:w-14 h-10 object-cover rounded mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <span className='text-gray-600 text-sm'>Agency Repaire</span>
                                        </button>
                                        <button className='flex flex-col justify-center items-center gap-2 p-2 rounded border'>
                                            <img className='w-full md:w-14 h-10 object-cover rounded mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <span className='text-gray-600 text-sm'>Premium Garage</span>
                                        </button>
                                        <button className='flex flex-col justify-center items-center gap-2 p-2 rounded border'>
                                            <img className='w-full md:w-14 h-10 object-cover rounded mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                            <span className='text-gray-600 text-sm'>Approved Garage</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-primary text-left text-sm font-semibold'>Only Takaful</h1>
                                    <div className="flex flex-col justify-center items-center ">
                                        <div onClick={() => setTakafullSwitch(!takafullSwitch)}
                                            className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
                                        ${takafullSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                                            <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${takafullSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cursor-pointer'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <h1 onClick={() => setOpenInsurer(!openInsurer)} className='text-primary text-left text-sm font-semibold'>Insurer</h1>
                                        <img onClick={() => setOpenInsurer(!openInsurer)} className='w-6' src={openInsurer ? arrowDown : arrowRight} alt="" />
                                    </div>
                                    {
                                        openInsurer && <div className='flex justify-between items-center gap-3 mb-4'>
                                            <h1 className='text-gray-600 text-left font-bold'>Iriental Insurance Company</h1>
                                            <div className="flex flex-col justify-center items-center ">
                                                <div onClick={() => setInsurerSwitch(!insurerSwitch)}
                                                    className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
                                        ${insurerSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                                                    <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${insurerSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className='lg:col-span-5 w-full'>
                        <h1 className='text-primary font-bold text-xl mb-2 text-left'>Scroll Down To See All Qoutes</h1>
                        <div className='grid grid-cols-1 gap-6'>
                            <QuoteCard />
                            <QuoteCard />
                            <QuoteCard />
                            <QuoteCard />
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default Qoutes;