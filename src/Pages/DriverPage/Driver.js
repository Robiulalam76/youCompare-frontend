import React from 'react';
import { useState } from 'react';
import ViewDetails from '../../components/Modals/ViewDetailsModals/ViewDetails';
import arrowDown from '../../accets/icons/arrow-down.svg'
import arrowRight from '../../accets/icons/arrow-right.svg'
import close from '../../accets/icons/close.png'
import right from '../../accets/icons/right.png'
import img1 from '../../accets/logo1/NoPath - Copy (2).png'
import img2 from '../../accets/logo1/NoPath - Copy (3).png'
import SmallTabs from '../../components/SmallTabs/SmallTabs';

const Driver = () => {
    const [openModal, setOpenModal] = useState(false)
    const [takafullSwitch, setTakafullSwitch] = useState(false)
    const [openInsurer, setOpenInsurer] = useState(true)
    const [insurerSwitch, setInsurerSwitch] = useState(true)
    const [moreInfo, setMoreInfo] = useState(false)
    return (
        <section className='relative bg-whtie px-4 min-h-screen'>
            <div className='max-w-[1440px] mx-auto py-12'>
                <p className='text-left text-xl font-semibold text-black'>*These Pices Includes VAT</p>
                <SmallTabs />
                {/* <div className='flex items-center gap-2 mt-2'>
                    <button className=' text-blue-600 underline'>Vehcile></button>
                    <Link to='/driver' className=' text-blue-600 underline'>Driver></Link>
                    <Link to='/qoutes' className=' text-gray-500'>Qoutes></Link>
                    <Link to='/buy' className=' text-gray-500'>Buy></Link>
                    <Link to='/payment' className=' text-gray-500'>Payment</Link>
                </div> */}
                <div className='flex flex-col md:flex-row md:items-center gap-4 mt-4'>
                    <h1 className='text-3xl font-bold text-black'>Hi Nahid!</h1>
                    <p className='text-gray-900 font-semibold text-xl'>We Found 2 Qoutes for Your Toyota Acura 1.6 Limited</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    <div className='border rounded-md shadow py-6 px-6 md:px-12 hover:border-rose-400 hover:shadow-rose-200 hover:shadow-md duration-150'>
                        <h1 className='text-gray-900 font-bold text-center text-xl'>Cheapset Thart Perty Only</h1>
                        <div className='my-4'>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Price...................................</h1>
                                <h1 className='text-yellow-500 text-xl font-bold'>750 AED</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Axcess...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Roadside...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>GOLD</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Insurer...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>Salama</h1>
                            </div>
                            <button onClick={() => setOpenModal(!openModal)} className='w-56 h-12 rounded-3xl bg-rose-600 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                                <h1>View Details</h1>
                            </button>
                            <p className='text-gray-600 font-semibold text-center mt-4'>Click here to see All Thirt Perty Options</p>
                        </div>
                        {
                            openModal && <ViewDetails closeModal={setOpenModal} />
                        }
                    </div>
                    <div className='border rounded-md shadow py-6 px-6 md:px-12 hover:border-rose-400 hover:shadow-rose-200 hover:shadow-md duration-150'>
                        <h1 className='text-gray-900 font-bold text-center text-xl'>Cheapset Fully Comprehensive</h1>
                        <div className='my-4'>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Price......................</h1>
                                <h1 className='text-yellow-500 text-xl font-bold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Axcess...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Roadside...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Insurer...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <button className='w-56 h-12 rounded-3xl bg-rose-300 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                                <h1>Not Availabe</h1>
                            </button>
                        </div>
                    </div>
                    <div className='border rounded-md shadow py-6 px-6 md:px-12 hover:border-rose-400 hover:shadow-rose-200 hover:shadow-md duration-150'>
                        <h1 className='text-gray-900 font-bold text-center text-xl'>Cheapset Agency Repaire</h1>
                        <div className='my-4'>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Price......................</h1>
                                <h1 className='text-yellow-500 text-xl font-bold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Axcess...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Roadside...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <h1 className='text-gray-700 font-semibold'>Insurer...................................</h1>
                                <h1 className='text-gray-900 font-semibold'>N/A</h1>
                            </div>
                            <button className='w-56 h-12 rounded-3xl bg-rose-300 text-white font-bold flex justify-center items-center text-xl mx-auto mt-6'>
                                <h1>Not Availabe</h1>
                            </button>
                        </div>
                    </div>
                </div>


                <div className='grid lg:grid-cols-7 gap-4 mt-12'>
                    <div className='lg:col-span-2 border h-fit rounded-xl p-4 md:p-6'>
                        <div className='flex justify-between items-center gap-2 mb-6'>
                            <h1 className='text-rose-600 font-semibold'>Filter</h1>
                            <button className='text-gray-600'>Clear Filter</button>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-gray-600 text-left mb-2 font-bold'>Policy Futures</h1>
                            <div className='grid grid-cols-2 gap-2 mb-6'>
                                <button className='flex justify-center items-center px-3 py-2 border shadow'>
                                    <span className='text-gray-600'>Fully Comprehensive</span>
                                </button>
                                <button className='flex justify-center items-center px-3 py-2 border shadow'>
                                    <span className='text-gray-600'>Thirt Pertu Only</span>
                                </button>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h1 className='text-gray-600 text-left mb-2 font-bold'>Repaire By</h1>
                            <div className='grid grid-cols-3 gap-2 mb-6'>
                                <button className='flex flex-col justify-center items-center gap-2 px-2 rounded py-2 border shadow'>
                                    <img className='w-10 rounded-xl mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                    <span className='text-gray-600 text-sm'>Agency Repaire</span>
                                </button>
                                <button className='flex flex-col justify-center items-center gap-2 px-2 rounded py-2 border shadow'>
                                    <img className='w-10 rounded-xl mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                    <span className='text-gray-600 text-sm'>Premium Garage</span>
                                </button>
                                <button className='flex flex-col justify-center items-center gap-2 px-2 rounded py-2 border shadow'>
                                    <img className='w-10 rounded-xl mx-auto' src="https://images.unsplash.com/photo-1619679505795-a4d0e6be5e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRveW90YSUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
                                    <span className='text-gray-600 text-sm'>Approved Garage</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-6'>
                            <h1 className='text-gray-600 text-left font-bold'>Only Takaful</h1>
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
                        <div className='mb-6 cursor-pointer'>
                            <div className='flex justify-between items-center mb-4'>
                                <h1 onClick={() => setOpenInsurer(!openInsurer)} className='text-gray-600 text-left font-bold'>Insurer</h1>
                                <img onClick={() => setOpenInsurer(!openInsurer)} className='w-6' src={openInsurer ? arrowDown : arrowRight} alt="" />
                            </div>
                            {
                                openInsurer && <div className='flex justify-start items-center gap-3 mb-4'>
                                    <div className="flex flex-col justify-center items-center ">
                                        <div onClick={() => setInsurerSwitch(!insurerSwitch)}
                                            className={`w-11 h-[22px] flex items-center rounded-full p-1 cursor-pointer
                                        ${insurerSwitch ? 'bg-red-200' : 'bg-gray-300'}`}>
                                            <div className={`h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out
                                        ${insurerSwitch ? 'bg-green-600 transform translate-x-5' : 'bg-gray-500'}`}>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className='text-gray-600 text-left font-bold'>Iriental Insurance Company</h1>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='lg:col-span-5 cursor-pointer'>
                        <h1 className='text-blue-900 font-bold text-2xl mb-4 text-left'>Scroll Down To See All Qoutes</h1>
                        <div className='grid grid-cols-1 gap-4'>

                            {/* cart number ===>1 */}
                            <div className=' w-full h-fit border hover:border-rose-100 shadow-md hover:shadow-xl hover:shadow-rose-200 duration-300 rounded-xl p-2 md:py-8 md:px-8'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                                    <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
                                        <img className='w-44 mx-auto ml-0 md:m-0' src={img1} alt="" />
                                        <h1 className='text-xl text-left md:text-right font-bold text-blue-900'>Salama Insurance Thirt Perty Only</h1>
                                    </div>
                                    <div className='flex flex-col md:justify-end items-start md:items-end gap-2 mr-6 md:m-0'>
                                        <h1 className='text-xl font-extrabold text-gray-300'>AED 790</h1>
                                        <h1 className='text-3xl font-bold text-yellow-500'>AED 770</h1>
                                    </div>
                                </div>
                                <hr className='border-gray-400 my-4' />
                                <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                                    <div className='w-full flex-grow flex flex-wrap items-start gap-x-2 md:gap-x-6 gap-y-12 mb-6'>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>What is The Excess?</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>No Repairs</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Who Will Repaire My Car?</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>No Repairs</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Fre Registration Service</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>Not Available</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Thirt Perty Demage Limit</h1>
                                            <h1 className='text-blue-900 text-center font-bold'>2 Million</h1>
                                            <h1 className='text-gray-700 text-center'>AED</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Roadside Assistance</h1>
                                            <img className='w-5' src={right} alt="" />
                                            <h1 className='text-gray-700 text-center'>G0LD</h1>
                                        </div>

                                    </div>
                                    <div className='relative flex flex-col justify-center items-center gap-4 py-6 px-6 md:p-0'>
                                        <div className='absolute md:-right-10 -right-6 top-0 flex justify-center items-center bg-yellow-500 h-12 w-fit md:w-full px-6 md:p-0 rounded-l-3xl border shadow-xl'>
                                            <h1 className='text-gray-900 text-center font-semibold'>AED 40.00 Discoount!</h1>
                                        </div>
                                        <button className='w-72 md:w-44 h-12 bg-rose-600 rounded-3xl text-white flex justify-center items-center mt-14 mx-auto md:mr-0 font-bold'>
                                            <span>View Details</span>
                                        </button>
                                        <p className='text-blue-900 underline text-center'>Terms & Conditions</p>
                                    </div>


                                </div>
                                <div className='flex justify-center items-center'>
                                    <h1 onClick={() => setMoreInfo(!moreInfo)} className='text-gray-600 text-left font-bold'>Check Here For More Info</h1>
                                    <img onClick={() => setMoreInfo(!moreInfo)} className='w-6' src={moreInfo ? arrowDown : arrowRight} alt="" />
                                </div>
                            </div>

                            {/* cart number ===>2 */}
                            <div className=' w-full h-fit border hover:border-rose-100 shadow-md hover:shadow-xl hover:shadow-rose-200 duration-300 rounded-xl p-2 md:py-8 md:px-8'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                                    <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
                                        <img className='w-44 mx-auto ml-0 md:m-0' src={img2} alt="" />
                                        <h1 className='text-xl text-left md:text-right font-bold text-blue-900'>Salama Insurance Thirt Perty Only</h1>
                                    </div>
                                    <div className='flex flex-col md:justify-end items-start md:items-end gap-2 mr-6 md:m-0'>
                                        <h1 className='text-3xl font-bold text-yellow-500'>AED 770</h1>
                                    </div>
                                </div>
                                <hr className='border-gray-400 my-4' />
                                <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                                    <div className='w-full flex-grow flex flex-wrap items-start gap-x-2 md:gap-x-6 gap-y-12 mb-6'>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>What is The Excess?</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>No Repairs</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Who Will Repaire My Car?</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>No Repairs</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Fre Registration Service</h1>
                                            <img className='w-4' src={close} alt="" />
                                            <h1 className='text-gray-700 text-center'>Not Available</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Thirt Perty Demage Limit</h1>
                                            <h1 className='text-blue-900 text-center font-bold'>2 Million</h1>
                                            <h1 className='text-gray-700 text-center'>AED</h1>
                                        </div>
                                        <div className='w-40 h-32 flex flex-col justify-between items-center gap-y-4'>
                                            <h1 className='text-gray-700 text-center'>Roadside Assistance</h1>
                                            <img className='w-5' src={right} alt="" />
                                            <h1 className='text-gray-700 text-center'>G0LD</h1>
                                        </div>

                                    </div>
                                    <div className='relative flex flex-col justify-center items-center gap-4 py-6 px-6 md:p-0'>
                                        <button className='w-72 md:w-44 h-12 bg-rose-600 rounded-3xl text-white flex justify-center items-center mt-14 mx-auto md:mr-0 font-bold'>
                                            <span>View Details</span>
                                        </button>
                                        <p className='text-blue-900 underline text-center'>Terms & Conditions</p>
                                    </div>


                                </div>
                                <div className='flex justify-center items-center'>
                                    <h1 onClick={() => setMoreInfo(!moreInfo)} className='text-gray-600 text-left font-bold'>Check Here For More Info</h1>
                                    <img onClick={() => setMoreInfo(!moreInfo)} className='w-6' src={moreInfo ? arrowDown : arrowRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default Driver;